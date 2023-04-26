import { log } from "@graphprotocol/graph-ts";
import {
  Buy,
  DustReturned,
  Sell,
  Swap
} from "../types/ZeroXMarketplaceZap/ZeroXMarketplaceZap"
import { createDustReturned, getDustReturned, getMint, getRedeem, getSwap, getUser, getZapBuy, getZapSell, getZapSwap } from "./helpers";

export function handleBuy(event: Buy): void {
  let txHash = event.transaction.hash;
  let redeem = getRedeem(txHash, event.block.timestamp, event.address);
  let zapBuy = getZapBuy(txHash);

  redeem.type = "ZapBuy";
  redeem.save();

  zapBuy.ethAmount = event.params.ethSpent;
  zapBuy.vaultAction = redeem.id;
  zapBuy.save();

  log.info("REDEEM : Redeem.ID = {}", [redeem.id])
  createDustReturned(txHash, redeem.id);
}


export function handleSell(event: Sell): void {
  let txHash = event.transaction.hash;
  let mint = getMint(txHash, event.block.timestamp, event.address);
  let zapSell = getZapSell(txHash);

  mint.type = "ZapSell";
  mint.save();

  zapSell.ethAmount = event.params.ethReceived;
  zapSell.vaultAction = mint.id;
  zapSell.save();
  log.info("MINT : Mint.ID = {}", [mint.id])
  createDustReturned(txHash, mint.id);
}

export function handleSwap(event: Swap): void {
  let txHash = event.transaction.hash;
  let swap = getSwap(txHash, event.block.timestamp, event.address);
  let zapSwap = getZapSwap(txHash);

  swap.type = "ZapSwap";
  swap.save();

  zapSwap.ethAmount = event.params.ethSpent;
  zapSwap.vaultAction = swap.id;
  zapSwap.save();
  log.info("SWAP : Swap.ID = {}", [swap.id])
  createDustReturned(txHash, swap.id);
}

export function handleDustReturned(event: DustReturned): void {
  let txHash = event.transaction.hash;
  let dustReturned = getDustReturned(txHash);
  if (dustReturned) {
    dustReturned.ethAmount = event.params.ethAmount;
    dustReturned.vTokenAmount = event.params.vTokenAmount;
    dustReturned.to = getUser(event.params.to).id;
    dustReturned.save();
  }
  else {
    log.warning("Warning : DustReturned not found; TxHash = {}", [txHash.toHexString()])
  }
}
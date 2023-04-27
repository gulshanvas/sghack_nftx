# nftx-v2-subgraph

Subgraph for NFTX Protocol V2

Mainnet Subgraph: https://thegraph.com/legacy-explorer/subgraph/nftx-project/nftx-v2

## SGHack NFTX: Test


### Redeem Activity 
##### Subgraph vs Etherscan Comparison 
https://etherscan.io/tx/0xb4930c50af3ef817c59b383c11962ece4c04787b37e236498e3e2bd4b6c97d32#eventlog

##### Example Query: - Filtered the 1st Redeem


```graphql
{
  activityEvents( first:1, orderBy: date, orderDirection:desc, where:{type:Redeem}) {
    id
    commonEntity {
      id
      mint (first:1){
        id
        nftIds
        amounts
        zapAction {
          id
          ethAmount
          vaultAction{
            nftIds
          }
        }
        feeReceipt {
          id
        }
        vault  {
          id
          vaultId
          is1155
          holdings (first:5) {
            id
            tokenId
          }
          allocTotal
          allowAllItems
        }
      }
      swap (first:1) {
        id
        specificIds
        targetCount
        randomCount
        feeReceipt {
          id
        }
        zapAction {
          id
        }
        mintedIds
        mintedAmounts
        redeemedIds
        vault {
          id
          vaultId
          is1155
          holdings (first:5) {
            id
            tokenId
          }
          allocTotal
          allowAllItems
        }
      }
      redeem (first:1) {
        id
        nftIds
        specificIds
        feeReceipt {
          id
        }
        zapAction {
          id
        }
        source
        vault {
          id
          vaultId
          is1155
          holdings (first:5) {
            id
            tokenId
          }
          allocTotal
          allowAllItems
        }
        targetCount
        randomCount
        
      }
    }
  }
}
```
##### Result for Redeem
```graphql
{
  "data": {
    "activityEvents": [
      {
        "id": "REDEEM-0xb4930c50af3ef817c59b383c11962ece4c04787b37e236498e3e2bd4b6c97d32",
        "commonEntity": {
          "id": "1682589311",
          "mint": [],
          "swap": [],
          "redeem": [
            {
              "id": "REDEEM-0xb4930c50af3ef817c59b383c11962ece4c04787b37e236498e3e2bd4b6c97d32",
              "nftIds": [
                "9088"
              ],
              "specificIds": [
                "9088"
              ],
              "feeReceipt": {
                "id": "0xb4930c50af3ef817c59b383c11962ece4c04787b37e236498e3e2bd4b6c97d32"
              },
              "zapAction": null,
              "source": "0xf2458bd228d8a39b64bd3b9f84890e957cac3bbc",
              "vault": {
                "id": "0xb39185e33e8c28e0bb3dbbce24da5dea6379ae91",
                "vaultId": "34",
                "is1155": false,
                "holdings": [
                  {
                    "id": "0x1018-0xb39185e33e8c28e0bb3dbbce24da5dea6379ae91",
                    "tokenId": "4120"
                  },
                  {
                    "id": "0x1041-0xb39185e33e8c28e0bb3dbbce24da5dea6379ae91",
                    "tokenId": "4161"
                  },
                  {
                    "id": "0x1058-0xb39185e33e8c28e0bb3dbbce24da5dea6379ae91",
                    "tokenId": "4184"
                  },
                  {
                    "id": "0x105a-0xb39185e33e8c28e0bb3dbbce24da5dea6379ae91",
                    "tokenId": "4186"
                  },
                  {
                    "id": "0x1083-0xb39185e33e8c28e0bb3dbbce24da5dea6379ae91",
                    "tokenId": "4227"
                  }
                ],
                "allocTotal": "500000000000000000",
                "allowAllItems": true
              },
              "targetCount": "1",
              "randomCount": "0"
            }
          ]
        }
      }
    ]
  }
}
```


### Swap Activity 
##### Subgraph vs Etherscan Comparison 
https://etherscan.io/tx/0xc80d47a48948f9b7bbac2db60315319d4718473efab6cad01bd2a1b361fed702#eventlog

#### Example Query: - Filtered the 1st Swap
*Replaced the query above with these conditions*

```graphql
activityEvents( first:1, orderBy: date, orderDirection:desc, where:{type:Swap}) {}
```


#### Result for Swap
```graphql
{
  "data": {
    "activityEvents": [
      {
        "id": "SWAP-0xc80d47a48948f9b7bbac2db60315319d4718473efab6cad01bd2a1b361fed702",
        "commonEntity": {
          "id": "1682233847",
          "mint": [],
          "swap": [
            {
              "id": "SWAP-0xc80d47a48948f9b7bbac2db60315319d4718473efab6cad01bd2a1b361fed702",
              "specificIds": [
                "8145"
              ],
              "targetCount": "1",
              "randomCount": "0",
              "feeReceipt": {
                "id": "0xc80d47a48948f9b7bbac2db60315319d4718473efab6cad01bd2a1b361fed702"
              },
              "zapAction": null,
              "mintedIds": [
                "9133"
              ],
              "mintedAmounts": [
                "1"
              ],
              "redeemedIds": [
                "8145"
              ],
              "vault": {
                "id": "0xa35bd2246978dfbb1980dff8ff0f5834335dfdbc",
                "vaultId": "634",
                "is1155": false,
                "holdings": [
                  {
                    "id": "0x1008-0xa35bd2246978dfbb1980dff8ff0f5834335dfdbc",
                    "tokenId": "4104"
                  },
                  {
                    "id": "0x100d-0xa35bd2246978dfbb1980dff8ff0f5834335dfdbc",
                    "tokenId": "4109"
                  },
                  {
                    "id": "0x100e-0xa35bd2246978dfbb1980dff8ff0f5834335dfdbc",
                    "tokenId": "4110"
                  },
                  {
                    "id": "0x1019-0xa35bd2246978dfbb1980dff8ff0f5834335dfdbc",
                    "tokenId": "4121"
                  },
                  {
                    "id": "0x101e-0xa35bd2246978dfbb1980dff8ff0f5834335dfdbc",
                    "tokenId": "4126"
                  }
                ],
                "allocTotal": "0",
                "allowAllItems": true
              }
            }
          ],
          "redeem": []
        }
      }
    ]
  }
}
```

### Mint Activity 
##### Subgraph vs Etherscan Comparison 
https://etherscan.io/tx/0x83637de54c9b6eb2a14d98725f906079294a23a3de48093c24e268fccc62cc04#eventlog

#### Example Query: - Filtered the 1st Mint
*Replaced the query above with these conditions*

```graphql
activityEvents( first:1, orderBy: date, orderDirection:desc, where:{type:Mint}) {}
```

#### Result for Mint
```graphql
{
  "data": {
    "activityEvents": [
      {
        "id": "MINT-0x83637de54c9b6eb2a14d98725f906079294a23a3de48093c24e268fccc62cc04",
        "commonEntity": {
          "id": "1682570699",
          "mint": [
            {
              "id": "MINT-0x83637de54c9b6eb2a14d98725f906079294a23a3de48093c24e268fccc62cc04",
              "zapAction": null,
              "vault": {
                "id": "0xda6e1225a0241c0fdc2e912bd76d70056bc8ac72",
                "vaultId": "428",
                "is1155": false,
                "holdings": [
                  {
                    "id": "0x10b6-0xda6e1225a0241c0fdc2e912bd76d70056bc8ac72",
                    "tokenId": "4278"
                  },
                  {
                    "id": "0x10e3-0xda6e1225a0241c0fdc2e912bd76d70056bc8ac72",
                    "tokenId": "4323"
                  },
                  {
                    "id": "0x10fb-0xda6e1225a0241c0fdc2e912bd76d70056bc8ac72",
                    "tokenId": "4347"
                  },
                  {
                    "id": "0x1105-0xda6e1225a0241c0fdc2e912bd76d70056bc8ac72",
                    "tokenId": "4357"
                  },
                  {
                    "id": "0x110b-0xda6e1225a0241c0fdc2e912bd76d70056bc8ac72",
                    "tokenId": "4363"
                  }
                ],
                "allocTotal": "0",
                "allowAllItems": true
              }
            }
          ],
          "swap": [],
          "redeem": []
        }
      }
    ]
  }
}
```


# avalanche-first-subnet
アバランチでサンプルのサブネットを作成

***
## ディレクトリ構造
```
├── README.md
├── contract
│   ├── README.md
│   ├── contracts
│   ├── hardhat.config.ts
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── scripts
│   ├── test
│   └── tsconfig.json
└── genesis
    └── mygenesis.json
```

***
## コマンド集
※パスを通す
```
export PATH=~/bin:$PATH  
```

ノードの起動
```
avalanche subnet deploy {サブネット名}
```

ノードのクリア、削除
```
avalanche network clean
avalanche subnet delete mySubnet
```

## 参考文献
* [AVAX Subnet(UNCHAIN)](https://www.google.com/url?q=https://app.unchain.tech/learn/AVAX-Subnet/&sa=D&source=editors&ust=1678024312065319&usg=AOvVaw3Eq24fNEtNAfXNzyDkxsaX)
* [Avalanche公式ドキュメント](https://docs.avax.network/nodes)
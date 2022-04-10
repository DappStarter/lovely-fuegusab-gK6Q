require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name rebel stereo provide install only flat genius'; 
let testAccounts = [
"0x862262831be1eb753fcf5d8b396036097d1c3cff63ca70d2498f7479ce55beb4",
"0xfaefdd5088f8a5f2427ab11ae190a355e7dc5a53a9863027c8a3fb1b5525fe30",
"0x9ad826ec851f704566bcb3cb24ac020bcdc44b1702bdfa50b40c8db63e3930c1",
"0x480eaca983ebe71197f118904a0f29eb2e91c45547a98a4983ffcba1349f9d17",
"0xfc1cb4fdc24a8c79fa843f425a69205ae4121bbc565b981aa6e248b761e2a982",
"0xa8960ac9d9dc5732db136c32a3018b5393e3bc46aec310b630905372560f91b0",
"0x75f7b29756e73cf225ff0289545b2ba682b0427adabb0b3fae82eb521a9130ca",
"0xa5a5a1512d1d1cfed809510f793c886907fc002feb725d68f5a7413feafae3d0",
"0x092a02aca7addddb61a199ba1034bb76da27f5dc333d62e6f6ba2f8192a7a673",
"0x6f8653d1118cb304843953f3afd20c1f18cefec0f2fd4f51bd49d6aa4f4b3493"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



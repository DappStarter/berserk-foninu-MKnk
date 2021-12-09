require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note often universe harvest inhale equal gate'; 
let testAccounts = [
"0x7f96a269ad7e3a993f934a544a5083f3b82b840a4fd430d872aa3318590f4a89",
"0x16ace3811d165973e3771fb818e22e00c59a03464019a567c0c2d7dad07ddfb7",
"0x453f2d446656496bb11ad5d1b0795d9169f34f03fe46f073867aeee61e199113",
"0xa8514722813cdacedbc04d3e94ff02a72f2eb0696cef01629532819293068d74",
"0x60b6c5ab3f936e6abaf2d85391307e5f094e5631d148435ab0de0b713a58875c",
"0x8b205ed7ff6658d508d32167a7bd0e9667d20df355956faf9fe9056b62d2e9ff",
"0x52ccf936fadadd8a02327e4bc9a678747be89e9c56629dc774477d3716950319",
"0xf3185fef40c087fc020ef3ffe346ef17f9ae0ec761ed4396848b8f873dafdc70",
"0x89280c696b1e34a384638091ac29d4bf1a948a8c17cf35c0bf25ebfa96aeb6bb",
"0xdc44d5456db4e0abd64efd8f9e0053189751a5a107b55d79de0bd28510b13ebe"
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



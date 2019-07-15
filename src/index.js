/**
 * Created by paul on 8/8/17.
 */
// @flow

import 'regenerator-runtime/runtime'

import { makeEosPlugin } from './eos/eosPlugin.js'
import { makeEthereumPlugin } from './ethereum/ethPlugin.js'
import { makeStellarPlugin } from './stellar/stellarPlugin.js'
import { makeRipplePlugin } from './xrp/xrpPlugin.js'
import { makeFioPlugin } from './fio/fioPlugin'

const plugins = {
  eos: makeEosPlugin,
  ethereum: makeEthereumPlugin,
  // "ripple" is network name. XRP is just an asset:
  ripple: makeRipplePlugin,
  stellar: makeStellarPlugin,
  fio: makeFioPlugin
}

if (
  typeof window !== 'undefined' &&
  typeof window.addEdgeCorePlugins === 'function'
) {
  window.addEdgeCorePlugins(plugins)
}

export default plugins

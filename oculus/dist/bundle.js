/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * DOM Manipulation via JS\n *\n * @package webapp\n * @module example\n * @version 1.0.0\n * @since 1.0.0\n * @author Michael <michael.reichart@gfu.net>\n * @copyright Michael Reichart 2019\n * @license MIT\n */\n\n\n\n/**\n * Merging objects\n * @param {object} obj \n * @param {object} src \n */\nfunction extend(obj, src) {\n  for (var key in src) {\n    if (src.hasOwnProperty(key)) obj[key] = src[key];\n  }\n  return obj;\n}\n\nlet m = {\n  displacementMap: '#displacement-map',\n  displacementScale: 0.5,\n  displacementBias: 0.05,\n  displacementTextureRepeat: '1 1',\n  displacementTextureOffset: '0 0'\n};\n\n// - - - - - - - - - -\n// DEFAULT VALUES\n// - - - - - - - - - -\nlet\n  // for scene\n\n  // for material\n  // base properties\n  __material = {\n    /** @desc Alpha test threshold for transparency. */\n    alphaTest: 0,\n\n    /** @desc Whether depth testing is enabled when rendering the material. */\n    depthTest: true,\n\n    /** @desc Use THREE.FlatShading rather than THREE.StandardShading. */\n    flatShading: false,\n\n    /** @desc Use settings for non-power-of-two (NPOT) texture. */\n    npot: false,\n\n    // TRANSPARENCY AND OPACITY\n    transparent: false, // Whether material is transparent. Transparent entities are rendered after non-transparent entities.\n    opacity: 1, // Extent of transparency. If the transparent property is not true, then the material will remain opaque and opacity will only affect color.\n\n    /** @desc Which material to use. Defaults to the standard material. \n     *        Can be set to the flat material or to a registered custom shader material. \n     */\n    shader: 'standard',\n    vertexColors: 'vertex',\n    visible: true,\n    blending: 'normal',\n\n    // APPEARANCE\n    color: 'white',\n    emissive: 'white',\n    emissiveIntensity: 0.05,\n    metalness: 0.6,\n    roughness: 0.5,\n    fog: 'true',\n\n    // RENDER MODE\n    side: 'front',\n    wireframe: false,\n    wireframeLinewidth: 2,\n\n    // MAYBE A TEXTURE?\n    // src: 'url'\n    // height: 360,\n    // width: 640,\n    offset: { //          Texture offset to be used.\n      x: 0,\n      y: 0\n    },\n    repeat: { //          Texture repeat to be used.\n      x: 1,\n      y: 1\n    },\n\n    // AMBIENT MAPPING\n    // ambientOcclusionMap: 'url',\n    // ambientOcclusionMapIntensity: 1,\n    // ambientOcclusionTextureRepeat: '1 1',\n    // ambientOcclusionTextureOffset: '0 0',\n\n    // DISPLACEMENT MAPPING\n    // displacementMap: '#displacement-map',\n    // displacementScale: 0.5,\n    // displacementBias: 0.05,\n    // displacementTextureRepeat: '1 1',\n    // displacementTextureOffset: '0 0',\n\n    // ENVIRONMENT MAPPING\n    // envMap: 'url',\n\n    // SPHERICAL ENVIRONTMENT MAPPING\n    // sphericalEnvMap: 'url',\n\n    // MAPPING\n    // normalMap: 'url',\n    // normalScale: '1 1',\n    // normalTextureRepeat: '1 1',\n    // normalTextureOffset: '0 0'\n  },\n\n  // - - - - - - - - - -\n  // OBJECTS\n  // -> node, id, target, - - -, properties\n  // - - - - - - - - - -\n  nodes = {\n\n    scene: {\n      node: 'a-scene',\n      id: 'scene',\n      target: 'body',\n      // - - - - -\n      renderer: {\n        antialias: true,\n        colorManagement: true,\n        sortObjects: true,\n        physicallyCorrectLights: true,\n        logarithmicDepthBuffer: true,\n        alpha: true\n      }\n    },\n\n    assets: {\n      node: 'a-assets',\n      id: 'assets',\n      target: '#scene'\n    },\n\n    displacementMap: {\n      node: 'img',\n      id: 'displacement-map',\n      target: '#assets',\n      src: 'assets/figure/displacement-map.png'\n    },\n\n    group: {\n      node: 'a-entity',\n      id: 'group',\n      target: '#scene',\n      // - - - - -\n      position: '0 0 -15'\n    },\n\n    light: {\n      node: 'a-entity',\n      id: 'light',\n      target: '#group',\n      // - - - - -\n      type: 'directional',\n      castShadow: true,\n      position: '0 2 0',\n      roation: '45 0 0'\n    },\n\n    camera: {\n      node: 'a-entity',\n      id: 'camera',\n      target: '#scene',\n      // - - - - -\n      position: '0 5 5',\n      camera: true,\n      'look-controls': true,\n      'wasd-controls': true,\n      rotation: true,\n      zoom: 3\n    },\n\n    cursor: {\n      node: 'a-entity',\n      id: 'cursor',\n      target: '#scene',\n      // - - - - -\n      cursor: {\n        fuse: true,\n        fuseTimeout: 500\n      },\n      position: '0 1 0',\n      geometry: {\n        primitive: 'ring',\n        radiusInner: 0.02,\n        radiusOuter: 0.03\n      },\n      material: __material,\n    },\n\n    ground: {\n      node: 'a-box',\n      id: 'ground',\n      target: '#group',\n      // - - - - -\n      material: __material,\n      width: 12,\n      height: 0.25,\n      depth: 12,\n      position: '0 -0.375 0' // -height - height/2\n    },\n\n    sky: {\n      node: 'a-sky',\n      id: 'sky',\n      target: '#scene',\n      // - - - - -\n      material: __material,\n    },\n\n    text: {\n      node: 'a-text',\n      id: 'text',\n      target: '#group',\n      // - - - - -\n      position: '-5 2 0',\n      value: 'Sedative posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',\n      color: 'rgb(220,220,220)',\n      width: 10,\n      height: 4,\n      font: 'https://cdn.aframe.io/fonts/Exo2SemiBold.fnt',\n      negate: false,\n      scale: '1 1 1'\n    },\n\n    boxCenter: {\n      node: 'a-box',\n      id: 'boxCenter',\n      target: '#group',\n      // - - - - -\n      material: {\n        color: 'white',\n        emissive: 'green',\n        emissiveIntensity: 0.25,\n        roughness: 0.3,\n        metalness: 0.4,\n        // src: 'assets/figures/displacement-map.png',\n        // // blending: 'additive',\n        // // displacementMap: 'assets/figures/displacement-map.png',\n        // // displacementBias: 0.5,\n        // envMap: 'assets/figures/environtment-map.png',\n\n      },\n      width: 3,\n      height: 3,\n      depth: 3,\n      radius: 2\n    },\n\n    boxLeft: {\n      node: 'a-box',\n      id: 'boxLeft',\n      target: '#group',\n      // - - - - -\n      material: __material,\n      width: 0.5,\n      height: 0.5,\n      depth: 0.5,\n      shadow: true,\n      'dynamic-body': true,\n      'cursor-listener': true,\n      color: 'red'\n    },\n\n    boxRight: {\n      node: 'a-box',\n      id: 'boxRight',\n      target: '#group',\n      // - - - - -\n      material: __material,\n      width: 0.5,\n      height: 0.5,\n      depth: 0.5,\n      shadow: true,\n      'dynamic-body': true,\n      'cursor-listener': true,\n      color: 'green'\n    },\n\n    boxFront: {\n      node: 'a-box',\n      id: 'boxFront',\n      target: '#group',\n      // - - - - -\n      material: __material,\n      width: 0.5,\n      height: 0.5,\n      depth: 0.5,\n      shadow: true,\n      'dynamic-body': true,\n      'cursor-listener': true,\n      color: 'yellow'\n    },\n\n    boxBack: {\n      node: 'a-box',\n      id: 'boxBack',\n      target: '#group',\n      // - - - - -\n      material: __material,\n      width: 0.5,\n      height: 0.5,\n      depth: 0.5,\n      shadow: true,\n      'dynamic-body': true,\n      'cursor-listener': true,\n      color: 'blue'\n    }\n  };\n// - - - - - - - - - -\n// ATTRIBUTES\n// - - - - - - - - - -\nlet\n  defaultEasing = 'easeInOutElastic',\n  defaultElasticity = 400;\n\nlet attributes = {\n  boxCenterAnimation: {\n    id: 'animation',\n    property: 'rotation',\n    dir: 'alternate',\n    dur: 10000,\n    easing: 'easeInOutExpo',\n    loop: true,\n    from: '0 0 0',\n    to: '360 -900 -360'\n  },\n  boxLeftAnimation: {\n    id: 'boxLeftAnimation',\n    property: 'position',\n    dir: 'alternate', // reverse, normal\n    dur: 1000,\n    easing: defaultEasing,\n    elasticity: defaultElasticity,\n    loop: true,\n    from: (-5 + 0.25) + ' ' + (0) + ' ' + (-5 + 0.25), // '-5 0 -5',\n    to: (-5 + 0.25) + ' ' + (0) + ' ' + (5 - 0.25), // '-5 0 5',\n  },\n  boxRightAnimation: {\n    id: 'boxRightAnimation',\n    property: 'position',\n    dir: 'alternate',\n    dur: 1000,\n    easing: defaultEasing,\n    elasticity: defaultElasticity,\n    loop: true,\n    from: (5 - 0.25) + ' ' + (0) + ' ' + (5 - 0.25), // '5 0 5',\n    to: (5 - 0.25) + ' ' + (0) + ' ' + (-5 + 0.25), // '5 0 -5',\n  },\n  boxFrontAnimation: {\n    id: 'boxFrontAnimation',\n    property: 'position',\n    dir: 'alternate', // reverse, normal\n    dur: 1000,\n    easing: defaultEasing,\n    elasticity: defaultElasticity,\n    loop: true,\n    from: (5 - 0.25) + ' ' + (0) + ' ' + (-5 + 0.25),\n    to: (-5 + 0.25) + ' ' + (0) + ' ' + (-5 + 0.25)\n  },\n  boxBackAnimation: {\n    id: 'boxBackAnimation',\n    property: 'position',\n    dir: 'alternate',\n    dur: 1000,\n    easing: defaultEasing,\n    elasticity: defaultElasticity,\n    loop: true,\n    from: (-5 + 0.25) + ' ' + (0) + ' ' + (5 - 0.25),\n    to: (5 - 0.25) + ' ' + (0) + ' ' + (5 - 0.25)\n  }\n};\n\n\n// - - - - - - - - - -\n// METHODS\n// - - - - - - - - - -\n\n\n/**\n * A simple logger with line separators\n * \n * @param {string} t \n */\nfunction log(t) {\n  if (typeof t === 'object') {\n    console.log('- - - - -');\n    console.dir(t);\n    console.log('- - - - -');\n  } else {\n    console.log('- - - - -');\n    console.log(t);\n    console.log('- - - - -');\n  }\n\n}\n/**\n * Build objects as nodes in a-scene\n * \n * @param {string} _name       element name\n * @param {string} _key        nodes key as identifier\n * @param {string} _targetNode context to append in\n */\nfunction setObject(_name, _key, _targetNode) {\n  let\n    node = document.createElement(_name);\n\n  for (let k in nodes[_key]) {\n    let n = nodes[_key];\n\n    if (typeof n[k] === 'object') {\n      let\n        property = k,\n        value = '';\n      for (let j in n[k]) {\n        value += j + ':' + n[k][j] + ';';\n      }\n      node.setAttribute(property, value);\n    } else if (k !== 'target' && k !== 'node') {\n      node.setAttribute(k, nodes[_key][k]);\n    }\n  }\n  document.querySelector(_targetNode).appendChild(node);\n}\n/**\n * Set properties. i.e. animation properties for nodes\n * @param {string} _key         attributes key as identifier\n * @param {string} _property    property name\n * @param {string} _targetNode \n */\nfunction setAttribute(_property, _key, _targetNode) {\n  let\n    node = document.querySelector(_targetNode),\n    value = '';\n\n  for (let key in attributes[_key]) {\n    if (key !== 'id') {\n      value += key;\n      value += ':';\n      value += attributes[_key][key];\n      value += '; ';\n    }\n    value = value.trim();\n  }\n  node.setAttribute(_property, value);\n}\n\n/**\n * main\n */\nfunction main(callback) {\n  // Setting all nodes automatically by\n  // nodeName, key, targetNode\n  for (let key in nodes) {\n    let node = nodes[key];\n    setObject(node['node'], node['id'], node['target']);\n  };\n\n  // property, key, targetNode\n  setAttribute('animation', 'boxLeftAnimation', '#boxLeft');\n  setAttribute('animation', 'boxRightAnimation', '#boxRight');\n  setAttribute('animation', 'boxFrontAnimation', '#boxFront');\n  setAttribute('animation', 'boxBackAnimation', '#boxBack');\n\n  callback();\n}\n\nfunction modifications() {\n  // modifcations\n  let boxCenter = document.querySelector('#boxCenter');\n\n  // log(boxCenter);\n  // log(boxCenter.object3D);\n  // log(boxCenter.object3D.position);\n\n  setTimeout(function () {\n    boxCenter.object3D.position.y = 8;\n    // log(boxCenter.object3D.position.y);\n    // log(boxCenter.object3D.position);\n  }, 0);\n\n  setAttribute('animation', 'boxCenterAnimation', '#boxCenter');\n\n}\n// - - - - - - - - - -\n// CONTROl\n// - - - - - - - - - -\nwindow.addEventListener('load', function () {\n  main(modifications);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/style.scss?");

/***/ })

/******/ });
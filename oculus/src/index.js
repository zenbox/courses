/**
 * DOM Manipulation via JS
 *
 * @package webapp
 * @module example
 * @version 1.0.0
 * @since 1.0.0
 * @author Michael <michael.reichart@gfu.net>
 * @copyright Michael Reichart 2019
 * @license MIT
 */

import './sass/style.scss';

/**
 * Merging objects
 * @param {object} obj 
 * @param {object} src 
 */
function extend(obj, src) {
  for (var key in src) {
    if (src.hasOwnProperty(key)) obj[key] = src[key];
  }
  return obj;
}

let m = {
  displacementMap: '#displacement-map',
  displacementScale: 0.5,
  displacementBias: 0.05,
  displacementTextureRepeat: '1 1',
  displacementTextureOffset: '0 0'
};

// - - - - - - - - - -
// DEFAULT VALUES
// - - - - - - - - - -
let
  // for scene

  // for material
  // base properties
  __material = {
    /** @desc Alpha test threshold for transparency. */
    alphaTest: 0,

    /** @desc Whether depth testing is enabled when rendering the material. */
    depthTest: true,

    /** @desc Use THREE.FlatShading rather than THREE.StandardShading. */
    flatShading: false,

    /** @desc Use settings for non-power-of-two (NPOT) texture. */
    npot: false,

    // TRANSPARENCY AND OPACITY
    transparent: false, // Whether material is transparent. Transparent entities are rendered after non-transparent entities.
    opacity: 1, // Extent of transparency. If the transparent property is not true, then the material will remain opaque and opacity will only affect color.

    /** @desc Which material to use. Defaults to the standard material. 
     *        Can be set to the flat material or to a registered custom shader material. 
     */
    shader: 'standard',
    vertexColors: 'vertex',
    visible: true,
    blending: 'normal',

    // APPEARANCE
    color: 'white',
    emissive: 'white',
    emissiveIntensity: 0.05,
    metalness: 0.6,
    roughness: 0.5,
    fog: 'true',

    // RENDER MODE
    side: 'front',
    wireframe: false,
    wireframeLinewidth: 2,

    // MAYBE A TEXTURE?
    // src: 'url'
    // height: 360,
    // width: 640,
    offset: { //          Texture offset to be used.
      x: 0,
      y: 0
    },
    repeat: { //          Texture repeat to be used.
      x: 1,
      y: 1
    },

    // AMBIENT MAPPING
    // ambientOcclusionMap: 'url',
    // ambientOcclusionMapIntensity: 1,
    // ambientOcclusionTextureRepeat: '1 1',
    // ambientOcclusionTextureOffset: '0 0',

    // DISPLACEMENT MAPPING
    // displacementMap: '#displacement-map',
    // displacementScale: 0.5,
    // displacementBias: 0.05,
    // displacementTextureRepeat: '1 1',
    // displacementTextureOffset: '0 0',

    // ENVIRONMENT MAPPING
    // envMap: 'url',

    // SPHERICAL ENVIRONTMENT MAPPING
    // sphericalEnvMap: 'url',

    // MAPPING
    // normalMap: 'url',
    // normalScale: '1 1',
    // normalTextureRepeat: '1 1',
    // normalTextureOffset: '0 0'
  },

  // - - - - - - - - - -
  // OBJECTS
  // -> node, id, target, - - -, properties
  // - - - - - - - - - -
  nodes = {

    scene: {
      node: 'a-scene',
      id: 'scene',
      target: 'body',
      // - - - - -
      renderer: {
        antialias: true,
        colorManagement: true,
        sortObjects: true,
        physicallyCorrectLights: true,
        logarithmicDepthBuffer: true,
        alpha: true
      }
    },

    assets: {
      node: 'a-assets',
      id: 'assets',
      target: '#scene'
    },

    displacementMap: {
      node: 'img',
      id: 'displacement-map',
      target: '#assets',
      src: 'assets/figure/displacement-map.png'
    },

    group: {
      node: 'a-entity',
      id: 'group',
      target: '#scene',
      // - - - - -
      position: '0 0 -15'
    },

    light: {
      node: 'a-entity',
      id: 'light',
      target: '#group',
      // - - - - -
      type: 'directional',
      castShadow: true,
      position: '0 2 0',
      roation: '45 0 0'
    },

    camera: {
      node: 'a-entity',
      id: 'camera',
      target: '#scene',
      // - - - - -
      position: '0 5 5',
      camera: true,
      'look-controls': true,
      'wasd-controls': true,
      rotation: true,
      zoom: 3
    },

    cursor: {
      node: 'a-entity',
      id: 'cursor',
      target: '#scene',
      // - - - - -
      cursor: {
        fuse: true,
        fuseTimeout: 500
      },
      position: '0 1 0',
      geometry: {
        primitive: 'ring',
        radiusInner: 0.02,
        radiusOuter: 0.03
      },
      material: __material,
    },

    ground: {
      node: 'a-box',
      id: 'ground',
      target: '#group',
      // - - - - -
      material: __material,
      width: 12,
      height: 0.25,
      depth: 12,
      position: '0 -0.375 0' // -height - height/2
    },

    sky: {
      node: 'a-sky',
      id: 'sky',
      target: '#scene',
      // - - - - -
      material: __material,
    },

    text: {
      node: 'a-text',
      id: 'text',
      target: '#group',
      // - - - - -
      position: '-5 2 0',
      value: 'Sedative posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      color: 'rgb(220,220,220)',
      width: 10,
      height: 4,
      font: 'https://cdn.aframe.io/fonts/Exo2SemiBold.fnt',
      negate: false,
      scale: '1 1 1'
    },

    boxCenter: {
      node: 'a-box',
      id: 'boxCenter',
      target: '#group',
      // - - - - -
      material: {
        color: 'white',
        emissive: 'green',
        emissiveIntensity: 0.25,
        roughness: 0.3,
        metalness: 0.4,
        // src: 'assets/figures/displacement-map.png',
        // // blending: 'additive',
        // // displacementMap: 'assets/figures/displacement-map.png',
        // // displacementBias: 0.5,
        // envMap: 'assets/figures/environtment-map.png',

      },
      width: 3,
      height: 3,
      depth: 3,
      radius: 2
    },

    boxLeft: {
      node: 'a-box',
      id: 'boxLeft',
      target: '#group',
      // - - - - -
      material: __material,
      width: 0.5,
      height: 0.5,
      depth: 0.5,
      shadow: true,
      'dynamic-body': true,
      'cursor-listener': true,
      color: 'red'
    },

    boxRight: {
      node: 'a-box',
      id: 'boxRight',
      target: '#group',
      // - - - - -
      material: __material,
      width: 0.5,
      height: 0.5,
      depth: 0.5,
      shadow: true,
      'dynamic-body': true,
      'cursor-listener': true,
      color: 'green'
    },

    boxFront: {
      node: 'a-box',
      id: 'boxFront',
      target: '#group',
      // - - - - -
      material: __material,
      width: 0.5,
      height: 0.5,
      depth: 0.5,
      shadow: true,
      'dynamic-body': true,
      'cursor-listener': true,
      color: 'yellow'
    },

    boxBack: {
      node: 'a-box',
      id: 'boxBack',
      target: '#group',
      // - - - - -
      material: __material,
      width: 0.5,
      height: 0.5,
      depth: 0.5,
      shadow: true,
      'dynamic-body': true,
      'cursor-listener': true,
      color: 'blue'
    }
  };
// - - - - - - - - - -
// ATTRIBUTES
// - - - - - - - - - -
let
  defaultEasing = 'easeInOutElastic',
  defaultElasticity = 400;

let attributes = {
  boxCenterAnimation: {
    id: 'animation',
    property: 'rotation',
    dir: 'alternate',
    dur: 10000,
    easing: 'easeInOutExpo',
    loop: true,
    from: '0 0 0',
    to: '360 -900 -360'
  },
  boxLeftAnimation: {
    id: 'boxLeftAnimation',
    property: 'position',
    dir: 'alternate', // reverse, normal
    dur: 1000,
    easing: defaultEasing,
    elasticity: defaultElasticity,
    loop: true,
    from: (-5 + 0.25) + ' ' + (0) + ' ' + (-5 + 0.25), // '-5 0 -5',
    to: (-5 + 0.25) + ' ' + (0) + ' ' + (5 - 0.25), // '-5 0 5',
  },
  boxRightAnimation: {
    id: 'boxRightAnimation',
    property: 'position',
    dir: 'alternate',
    dur: 1000,
    easing: defaultEasing,
    elasticity: defaultElasticity,
    loop: true,
    from: (5 - 0.25) + ' ' + (0) + ' ' + (5 - 0.25), // '5 0 5',
    to: (5 - 0.25) + ' ' + (0) + ' ' + (-5 + 0.25), // '5 0 -5',
  },
  boxFrontAnimation: {
    id: 'boxFrontAnimation',
    property: 'position',
    dir: 'alternate', // reverse, normal
    dur: 1000,
    easing: defaultEasing,
    elasticity: defaultElasticity,
    loop: true,
    from: (5 - 0.25) + ' ' + (0) + ' ' + (-5 + 0.25),
    to: (-5 + 0.25) + ' ' + (0) + ' ' + (-5 + 0.25)
  },
  boxBackAnimation: {
    id: 'boxBackAnimation',
    property: 'position',
    dir: 'alternate',
    dur: 1000,
    easing: defaultEasing,
    elasticity: defaultElasticity,
    loop: true,
    from: (-5 + 0.25) + ' ' + (0) + ' ' + (5 - 0.25),
    to: (5 - 0.25) + ' ' + (0) + ' ' + (5 - 0.25)
  }
};


// - - - - - - - - - -
// METHODS
// - - - - - - - - - -


/**
 * A simple logger with line separators
 * 
 * @param {string} t 
 */
function log(t) {
  if (typeof t === 'object') {
    console.log('- - - - -');
    console.dir(t);
    console.log('- - - - -');
  } else {
    console.log('- - - - -');
    console.log(t);
    console.log('- - - - -');
  }

}
/**
 * Build objects as nodes in a-scene
 * 
 * @param {string} _name       element name
 * @param {string} _key        nodes key as identifier
 * @param {string} _targetNode context to append in
 */
function setObject(_name, _key, _targetNode) {
  let
    node = document.createElement(_name);

  for (let k in nodes[_key]) {
    let n = nodes[_key];

    if (typeof n[k] === 'object') {
      let
        property = k,
        value = '';
      for (let j in n[k]) {
        value += j + ':' + n[k][j] + ';';
      }
      node.setAttribute(property, value);
    } else if (k !== 'target' && k !== 'node') {
      node.setAttribute(k, nodes[_key][k]);
    }
  }
  document.querySelector(_targetNode).appendChild(node);
}
/**
 * Set properties. i.e. animation properties for nodes
 * @param {string} _key         attributes key as identifier
 * @param {string} _property    property name
 * @param {string} _targetNode 
 */
function setAttribute(_property, _key, _targetNode) {
  let
    node = document.querySelector(_targetNode),
    value = '';

  for (let key in attributes[_key]) {
    if (key !== 'id') {
      value += key;
      value += ':';
      value += attributes[_key][key];
      value += '; ';
    }
    value = value.trim();
  }
  node.setAttribute(_property, value);
}

/**
 * main
 */
function main(callback) {
  // Setting all nodes automatically by
  // nodeName, key, targetNode
  for (let key in nodes) {
    let node = nodes[key];
    setObject(node['node'], node['id'], node['target']);
  };

  // property, key, targetNode
  setAttribute('animation', 'boxLeftAnimation', '#boxLeft');
  setAttribute('animation', 'boxRightAnimation', '#boxRight');
  setAttribute('animation', 'boxFrontAnimation', '#boxFront');
  setAttribute('animation', 'boxBackAnimation', '#boxBack');

  callback();
}

function modifications() {
  // modifcations
  let boxCenter = document.querySelector('#boxCenter');

  // log(boxCenter);
  // log(boxCenter.object3D);
  // log(boxCenter.object3D.position);

  setTimeout(function () {
    boxCenter.object3D.position.y = 8;
    // log(boxCenter.object3D.position.y);
    // log(boxCenter.object3D.position);
  }, 0);

  setAttribute('animation', 'boxCenterAnimation', '#boxCenter');

}
// - - - - - - - - - -
// CONTROl
// - - - - - - - - - -
window.addEventListener('load', function () {
  main(modifications);
});
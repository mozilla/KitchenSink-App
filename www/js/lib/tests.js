//Wrapped in an outer function to preserve global this
(function (root) { var amdExports; define([], function () { (function () {

/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */
/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// simple and incomplete implementation of promises
function Promise() {}
Promise.prototype = {
  then: function (callback) {
    this.callback = callback;
    if ('result' in this) callback(this.result);
  },
  resolve: function (result) {
    if ('result' in this) return;
    this.result = result;
    if ('callback' in this) this.callback(result); 
  }
};

var isCanvasSupported = (function () {
  try {
    document.createElement('canvas').getContext('2d').fillStyle = '#FFFFFF';
    return true;
  } catch (e) {
    return false;
  }
})();

var tests = [
  {
    id: 'canvas',
    name: 'HTML canvas',
    run: function () {
      if (isCanvasSupported) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P1',
    area: 'Core',
    info: 'https://developer.mozilla.org/en-US/docs/HTML/Canvas'
  },
  {
    id: 'payments',
    name: 'mozPay API',
    run: function () {
      if ('mozPay' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P1',
    area: 'Core',
    info: 'https://wiki.mozilla.org/WebAPI/WebPaymentProvider'
  },
  {
    id: 'apps',
    name: 'mozApps API',
    run: function () {
      if ('mozApps' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P1',
    area: 'Core',
    info: 'https://developer.mozilla.org/en-US/docs/Apps/Apps_JavaScript_API#Management_API'
  },
  {
    id: 'device orientation',
    name: 'device orientation',
    run: function () {
      if ('ondeviceorientation' in window) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P1',
    area: 'Core',
    info: 'https://developer.mozilla.org/en-US/docs/Mozilla_event_reference/deviceorientation'
  },
  {
    id: 'alarm',
    name: 'alarm',
    run: function () {
      if ('mozAlarms' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P1',
    area: 'Core',
    info: 'https://wiki.mozilla.org/WebAPI/AlarmAPI'
  },
  // MISSING --------------------------------------------
  {
    id: 'backgroundservice',
    name: 'backgroundservice',
    run: function () {
      if ('backgroundservice' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P1',
    area: 'Core',
    info: ''
  },
  {
    id: 'bluetooth',
    name: 'bluetooth',
    run: function () {
      if ('mozBluetooth' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P1',
    area: 'Core',
    info: 'https://wiki.mozilla.org/WebAPI/WebBluetooth'
  },
  {
    id: 'browser',
    name: 'browser',
    run: function () {
      if ('browser' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P3',
    area: 'Core'
  },
  {
    id: 'camera',
    name: 'camera',
    run: function () {
      if ('mozCameras' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P1',
    area: 'Core',
    info: 'https://developer.mozilla.org/en-US/docs/DOM/Using_the_Camera_API'
  },
  {
    id: 'contacts',
    name: 'contacts',
    run: function () {
      if ('mozContacts' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P1',
    area: 'Core',
    info: 'https://wiki.mozilla.org/WebAPI/ContactsAPI'
  },
  {
    id: 'desktop-notification',
    name: 'desktop-notification',
    run: function () {
      if ('mozNotification' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P1',
    area: 'Core'
  },
  {
    id: 'device-storage',
    name: 'device-storage',
    run: function () {
      if ('getDeviceStorage' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P1',
    area: 'Core',
    info: 'https://wiki.mozilla.org/WebAPI/Security/DeviceStorage'
  },
  {
    id: 'fmradio',
    name: 'fmradio',
    run: function () {
      if (('mozFM' in navigator) || ('mozFMRadio' in navigator)) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P3',
    area: 'Core', 
    info: 'https://wiki.mozilla.org/WebAPI/Security/FMRadioAPI'
  },
  {
    id: 'geolocation',
    name: 'geolocation',
    run: function () {
      if ('geolocation' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P1',
    area: 'Core',
    info: 'http://dev.w3.org/geo/api/spec-source.html'
  },
  {
    id: 'mobileconnection',
    name: 'mobileconnection',
    run: function () {
      if ('mozMobileConnection' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P2',
    area: 'Core',
    info: 'https://wiki.mozilla.org/WebAPI/WebMobileConnection'
  },
  {
    id: 'power',
    name: 'mozPower',
    run: function () {
      if ('mozPower' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P2',
    area: 'Core',
    info: 'https://wiki.mozilla.org/WebAPI/PowerManagementAPI'
  },
  {
    id: 'power',
    name: 'battery',
    run: function () {
      if ('battery' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P2',
    area: 'Core',
    info: 'https://developer.mozilla.org/en-US/docs/DOM/window.navigator.battery'
  },
  {
    id: 'push',
    name: 'push',
    run: function () {
      if ('push' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P1',
    area: 'Core',
    info: 'https://wiki.mozilla.org/WebAPI/PushAPI'
  },
  {
    id: 'settings',
    name: 'settings',
    run: function () {
      if ('mozSettings' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P2',
    area: 'Core',
    info: 'https://wiki.mozilla.org/WebAPI/SettingsAPI'
  },
  {
    id: 'sms',
    name: 'sms',
    run: function () {
      if ('mozSms' in navigator && navigator.mozSms) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P1',
    area: 'Core',
    info: 'https://wiki.mozilla.org/WebAPI/WebSMS'
  },
  {
    id: 'storage',
    name: 'storage',
    run: function () {
      if (sessionStorage) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P1',
    area: 'Core'
  },
  {
    id: 'systemclock',
    name: 'systemclock',
    run: function () {
      if ('mozTime' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P3',
    area: 'Core'
  },
  {
    id: 'network-http',
    name: 'network-http',
    run: function () {
      if ('network-http' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P1',
    area: 'Core'
  },
  {
    id: 'network-tcp',
    name: 'network-tcp',
    run: function () {
      if ('mozTCPSocket' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P2',
    area: 'Core'
  },
  {
    id: 'telephony',
    name: 'telephony',
    run: function () {
      if ('mozTelephony' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P1',
    area: 'Core',
    info: "https://wiki.mozilla.org/WebAPI/Security/WebTelephony"
  },
  {
    id: 'wake-lock-screen',
    name: 'wake-lock-screen',
    run: function () {
      if ('wakeLockScreen' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P1',
    area: 'Core'
  },
  {
    id: 'webapps-manage',
    name: 'webapps-manage',
    run: function () {
      if ('mgmt' in navigator.mozApps) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P1',
    area: 'Core'
  },
  {
    id: 'wifi',
    name: 'wifi',
    run: function () {
      if ('mozWifiManager' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'P1',
    area: 'Core', 
    info: 'https://wiki.mozilla.org/WebAPI/Security/Wifi'
  }
];


amdExports = {'tests': tests};


}.call(root));
    return amdExports;
}); }(this));

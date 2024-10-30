const { useEffect, useState, useCallback, useRef } = React
const { Table, Tag, Select, Button, message, Slider, Icon, Tooltip, InputNumber, Drawer, Modal, Form, Row, Col, Input } = antd
const MyApp = () => {
    ;(function (_0x2e6232, _0x2845ee) {
        function _0x40679e(_0x2997b6, _0x39ca7f, _0x3c2279, _0x23aff7, _0x29a6d6) {
            return _0x3a0c(_0x29a6d6 - -0x2a4, _0x39ca7f)
        }
        function _0x48bd3f(_0x9a1952, _0x20bb01, _0x1c8e9c, _0x560732, _0x561f6e) {
            return _0x15ee(_0x20bb01 - 0x2f8, _0x1c8e9c)
        }
        function _0x3b0dc6(_0x26aa00, _0x687d16, _0x53e7c6, _0x361c53, _0x28b4ae) {
            return _0x15ee(_0x53e7c6 - 0x31f, _0x28b4ae)
        }
        function _0x4904d2(_0x21e93d, _0x1336c6, _0x4186fa, _0xd7c971, _0x3e11e5) {
            return _0x15ee(_0x4186fa - 0x32, _0x3e11e5)
        }
        const _0x594a05 = _0x2e6232()
        function _0x3751da(_0x3331c5, _0x5d8e5a, _0x3f8c3d, _0x27fd8e, _0x357a11) {
            return _0x3a0c(_0x3f8c3d - 0x308, _0x3331c5)
        }
        function _0x8a7f59(_0x29c421, _0x24d411, _0x43cba9, _0x9bdc44, _0x13618f) {
            return _0x15ee(_0x24d411 - -0x336, _0x9bdc44)
        }
        function _0x171815(_0x7eb7c9, _0x2eb186, _0x4967d8, _0x1b8aab, _0x570bd0) {
            return _0x15ee(_0x2eb186 - -0x75, _0x4967d8)
        }
        function _0xc3cee9(_0x1cdb7b, _0x152c51, _0x250af8, _0x591266, _0x8e563f) {
            return _0x3a0c(_0x152c51 - -0x1d9, _0x8e563f)
        }
        function _0x3ed635(_0x94ae8d, _0x67682, _0x28ec5b, _0x462d43, _0x17cd08) {
            return _0x3a0c(_0x17cd08 - -0x243, _0x94ae8d)
        }
        function _0x2187ab(_0x237b4d, _0x156489, _0x4cdd8f, _0x224583, _0x1536de) {
            return _0x3a0c(_0x156489 - 0x316, _0x4cdd8f)
        }
        while (!![]) {
            try {
                const _0xb6244 =
                    (-parseInt(_0x40679e(-0xd1, -0x16, -0xf2, -0x178, -0xc1)) / 0x1) * (parseInt(_0x4904d2(0x1bb, 0x1d1, 0x11c, 0x196, '\u0032\u0078\u0074\u004e')) / 0x2) +
                    (parseInt(_0x4904d2(0x27, 0x53, 0xcb, 0x5e, 'j#A6'.split('').reverse().join(''))) / 0x3) * (parseInt(_0xc3cee9(-0x4a, -0xa1, -0x190, -0x128, -0xfc)) / 0x4) +
                    (-parseInt(_0x8a7f59(-0x226, -0x184, -0x280, '\u004c\u0074\u005e\u0034', -0x1d2)) / 0x5) * (parseInt(_0x40679e(-0x2e6, -0x2a1, -0x233, -0x2b0, -0x23f)) / 0x6) +
                    parseInt(_0x4904d2(0xd0, 0x12a, 0x17e, 0x232, 'YE8k'.split('').reverse().join(''))) / 0x7 +
                    (-parseInt(_0x3ed635(-0x17e, -0xc7, -0x179, -0x1cf, -0x11e)) / 0x8) * (-parseInt(_0x40679e(-0x1f5, -0x1ce, -0x117, -0x1e2, -0x1a1)) / 0x9) +
                    parseInt(_0x48bd3f(0x50b, 0x434, '\u005e\u0029\u006b\u0034', 0x513, 0x332)) / 0xa +
                    (parseInt(_0x3b0dc6(0x51c, 0x3aa, 0x469, 0x4b0, '$#ft'.split('').reverse().join(''))) / 0xb) * (parseInt(_0xc3cee9(0x9, -0xbd, -0xa6, -0x18f, 0xc)) / 0xc)
                if (_0xb6244 === _0x2845ee) {
                    break
                } else {
                    _0x594a05['\u0070\u0075\u0073\u0068'](_0x594a05['\u0073\u0068\u0069\u0066\u0074']())
                }
            } catch (_0x43bae6) {
                _0x594a05['\u0070\u0075\u0073\u0068'](_0x594a05['\u0073\u0068\u0069\u0066\u0074']())
            }
        }
    })(_0x1d31, 0x32e6a)
    const _0x338650 = (function () {
        let _0x3dd7a7 = !![]
        return function (_0x1a2700, _0x42a997) {
            function _0x342402(_0x4bced4, _0x264c2a, _0x42f302, _0xdfa2dd, _0x49a2df) {
                return _0x15ee(_0x264c2a - 0x141, _0x42f302)
            }
            function _0x130316(_0x2e8415, _0x1640da, _0x3df395, _0x3e4c3f, _0x8f5da5) {
                return _0x15ee(_0x2e8415 - 0x16b, _0x3df395)
            }
            if (_0x342402(0x3a4, 0x348, ']C(4'.split('').reverse().join(''), 0x2df, 0x3a2) === _0x130316(0x319, 0x35c, 'H8Ki'.split('').reverse().join(''), 0x2d5, 0x419)) {
                const _0x3a16c0 = _0x3dd7a7
                    ? function () {
                          if (_0x42a997) {
                              const _0x1928eb = _0x42a997['apply'](_0x1a2700, arguments)
                              _0x42a997 = null
                              return _0x1928eb
                          }
                      }
                    : function () {}
                _0x3dd7a7 = ![]
                return _0x3a16c0
            } else {
                return ![]
            }
        }
    })()
    const _0x21ecc7 = _0x338650(this, function () {
        function _0xcbad29(_0x365d71, _0x133e90, _0x270f1b, _0x483e76, _0x5e2323) {
            return _0x15ee(_0x133e90 - -0x371, _0x270f1b)
        }
        const _0x2b8e35 = {
            Kavvq: _0x40a9cb(0x1af, 0x2e0, 0x2a8, 0x2b1, 0x27a),
            EMiur: function (_0x6bfb4b, _0x368bb2) {
                return _0x6bfb4b < _0x368bb2
            },
            suDYg: function (_0x2a3ba3, _0x32b837) {
                return _0x2a3ba3 !== _0x32b837
            },
            kxOpr: _0x423ac3(-0x257, -0x38e, -0x35e, -0x310, -0x2d4),
            '\u0064\u0069\u0042\u0048\u0048': function (_0x5d806b, _0x47e69e) {
                return _0x5d806b + _0x47e69e
            },
            '\u0049\u007a\u0068\u0048\u0078': function (_0x46e8a8, _0x1ab748) {
                return _0x46e8a8 === _0x1ab748
            },
            NjcDb: _0x5a78ec(-0x119, -0x70, -0x140, 'm(z9'.split('').reverse().join(''), -0x20),
            '\u004f\u0070\u0047\u0045\u0058': function (_0x27d4eb, _0x34ae9c) {
                return _0x27d4eb / _0x34ae9c
            },
            zWEfz: _0x5a78ec(0x26, 0x65, 0x12c, '$#ft'.split('').reverse().join(''), 0x55),
            '\u0073\u0054\u004c\u0045\u004c': _0x34b7cb(-0x283, -0x3d2, -0x322, -0x3c9, -0x236),
            '\u006a\u0062\u0071\u0071\u0058': _0x30b47d('\u005b\u005e\u0079\u006e', -0x2ec, -0x2ee, -0x37e, -0x298),
            kDDDN: function (_0x202d51, _0x6a064a) {
                return _0x202d51(_0x6a064a)
            },
            '\u0054\u0068\u0041\u0058\u0048': function (_0x3a12b7, _0x335f6f) {
                return _0x3a12b7 + _0x335f6f
            },
            '\u006d\u006f\u0057\u0076\u006a': function (_0x5b8957, _0x33d21e) {
                return _0x5b8957 === _0x33d21e
            },
            '\u0073\u0079\u0057\u0051\u0072': function (_0x386c28, _0x57331c, _0x13326f, _0x4f0356) {
                return _0x386c28(_0x57331c, _0x13326f, _0x4f0356)
            },
            BviQd: _0xec7e92('MaB8', -0x52, 0x86, 0x40, 0xac),
            '\u004d\u0043\u0065\u006c\u0051': _0xec7e92('\u0053\u0061\u0054\u0061', -0x83, 0x3, -0xd2, -0x178),
            '\u0056\u0042\u004f\u0066\u0065': _0xcbad29(-0x407, -0x310, '5]L3'.split('').reverse().join(''), -0x3ec, -0x368),
            UOSEX: _0x423ac3(-0x22d, -0x230, -0x195, -0x1d7, -0x23c),
            zmJom: function (_0x51165e, _0x10cb6d) {
                return _0x51165e === _0x10cb6d
            },
            bmObh: _0x423ac3(-0x23d, -0x2f5, -0x218, -0x28e, -0x29e)
        }
        let _0x34bf0c
        try {
            const _0x30ae71 = _0x2b8e35['\u006b\u0044\u0044\u0044\u004e'](
                Function,
                _0x2b8e35['ThAXH'](_0x2b8e35['\u0073\u0054\u004c\u0045\u004c'], _0x5a78ec(0xcb, 0x109, 0x141, '\u006b\u0038\u0045\u0059', 0xd3)) + ';)'.split('').reverse().join('')
            )
            _0x34bf0c = _0x30ae71()
        } catch (_0x2a62bd) {
            if (_0x40a9cb(0x3ac, 0x2e7, 0x420, 0x32f, 0x354) !== _0x34b7cb(-0x379, -0x2f3, -0x29a, -0x38c, -0x23a)) {
                _0x34bf0c = window
            } else {
                return (_0x441cae / 0x5f5e100)['\u0074\u006f\u0046\u0069\u0078\u0065\u0064'](0x2) + '亿'
            }
        }
        const _0x5af447 = new RegExp(_0x34b7cb(-0x34f, -0x3e7, -0x305, -0x22f, -0x350), '\u0067')
        const _0x5114bc = _0x40a9cb(0x1db, 0x2cc, 0x153, 0x2e7, 0x256)['\u0072\u0065\u0070\u006c\u0061\u0063\u0065'](_0x5af447, ''.split('').reverse().join(''))['split']('\u003b')
        let _0x586543
        function _0x3ba6db(_0xe7d001, _0x33e714, _0x42ef25, _0x26134f, _0x587504) {
            return _0x15ee(_0xe7d001 - 0x14a, _0x42ef25)
        }
        let _0x4d2ada
        let _0x3f4c27
        function _0x51a39c(_0x486ff1, _0x4a6cbf, _0x12e312, _0x17a88f, _0x1bcbfd) {
            return _0x3a0c(_0x17a88f - 0x2b4, _0x12e312)
        }
        function _0x30b47d(_0x24a796, _0x2f392b, _0x4dfb29, _0x22fe16, _0x49c89b) {
            return _0x15ee(_0x2f392b - -0x3df, _0x24a796)
        }
        function _0x3da447(_0x280150, _0xac359c, _0x17b838, _0x11147a, _0x27f0c7) {
            return _0x3a0c(_0xac359c - 0x397, _0x17b838)
        }
        function _0x5a78ec(_0x18293b, _0xb72f6, _0x170c26, _0x13b19e, _0x42217d) {
            return _0x15ee(_0xb72f6 - -0x78, _0x13b19e)
        }
        let _0xf5742a
        const _0x17c4b9 = function (_0x37f838, _0x3041e5, _0x105ffd) {
            function _0x409352(_0x26dd23, _0x35d7cd, _0x2b6485, _0x109501, _0x59dccd) {
                return _0x3a0c(_0x2b6485 - -0xe5, _0x109501)
            }
            const _0x213a28 = { maWlO: _0x37258e(0x1f2, 0x2e1, '\u0035\u0035\u0070\u0030', 0x251, 0x2d6) }
            if (_0x37f838['length'] != _0x3041e5) {
                if (_0x2b8e35['Kavvq'] !== _0x2b8e35['\u004b\u0061\u0076\u0076\u0071']) {
                    return { '\u0072\u0065\u0073': _0x213a28['\u006d\u0061\u0057\u006c\u004f'] }
                } else {
                    return ![]
                }
            }
            function _0x2f1403(_0x2a43a6, _0x2ffe12, _0x3bbb6c, _0xf5198, _0x1efb41) {
                return _0x3a0c(_0x3bbb6c - -0x348, _0x2a43a6)
            }
            function _0x3066cd(_0x101829, _0x1b58eb, _0x246269, _0x2a5bcc, _0x39e9df) {
                return _0x15ee(_0x2a5bcc - 0x3c5, _0x101829)
            }
            function _0x37258e(_0x133768, _0x286300, _0x233bc0, _0x1250df, _0x6cafb6) {
                return _0x15ee(_0x133768 - 0x59, _0x233bc0)
            }
            for (let _0x54d65b = 0x0; _0x54d65b < _0x3041e5; _0x54d65b++) {
                if (_0x2f1403(-0x22e, -0x177, -0x1e1, -0x263, -0x161) === _0x2f1403(-0x148, -0x1dc, -0x1e1, -0x157, -0x2a2)) {
                    for (let _0x2a3024 = 0x0; _0x2b8e35['\u0045\u004d\u0069\u0075\u0072'](_0x2a3024, _0x105ffd['\u006c\u0065\u006e\u0067\u0074\u0068']); _0x2a3024 += 0x2) {
                        if (_0x2b8e35['\u0073\u0075\u0044\u0059\u0067'](_0x3066cd('2xtN', 0x532, 0x423, 0x4e7, 0x41b), _0x2b8e35['kxOpr'])) {
                            if (_0x54d65b == _0x105ffd[_0x2a3024] && _0x37f838['charCodeAt'](_0x54d65b) != _0x105ffd[_0x2b8e35['diBHH'](_0x2a3024, 0x1)]) {
                                return ![]
                            }
                        } else {
                            const _0x3dd6a3 = _0x53f7be['apply'](_0x100de7, arguments)
                            _0x2c18ac = null
                            return _0x3dd6a3
                        }
                    }
                } else {
                    _0x49f9de(0x0)
                }
            }
            return !![]
        }
        function _0x40a9cb(_0x5a65f1, _0x13a65d, _0x3f8790, _0x2b5791, _0x3c33fd) {
            return _0x3a0c(_0x3c33fd - 0x152, _0x5a65f1)
        }
        const _0x5c6c3f = function (_0x33275b, _0x2b43c4, _0x486a53) {
            function _0x28f1a2(_0x356558, _0x516ad1, _0x227d8f, _0x362848, _0x4db789) {
                return _0x3a0c(_0x516ad1 - 0x313, _0x356558)
            }
            function _0x1d97df(_0x5f4fb9, _0x775753, _0x18a01a, _0x47dc22, _0x25fe08) {
                return _0x15ee(_0x25fe08 - -0x2a3, _0x47dc22)
            }
            if (_0x1d97df(-0x19e, -0x254, -0x20f, 'W8]r'.split('').reverse().join(''), -0x29c) !== _0x28f1a2(0x251, 0x32b, 0x243, 0x319, 0x2cc)) {
                return _0xfa6400['\u0074\u006f\u0053\u0074\u0072\u0069\u006e\u0067']()
            } else {
                return _0x17c4b9(_0x2b43c4, _0x486a53, _0x33275b)
            }
        }
        function _0x423ac3(_0x554d0d, _0x56e73d, _0x158a53, _0x35a3f6, _0x5350d4) {
            return _0x3a0c(_0x35a3f6 - -0x38a, _0x554d0d)
        }
        const _0x54f1d0 = function (_0x485747, _0x54051b, _0x1bc97d) {
            function _0x32ecba(_0x49b9d1, _0x5a762e, _0x1c6eb6, _0x14f38c, _0x10f258) {
                return _0x3a0c(_0x1c6eb6 - -0x10d, _0x10f258)
            }
            if (_0x2b8e35['IzhHx'](_0x32ecba(0x18, 0xb2, 0x28, 0xdc, 0x125), _0x2b8e35['NjcDb'])) {
                return
            } else {
                return _0x5c6c3f(_0x54051b, _0x485747, _0x1bc97d)
            }
        }
        const _0x194f07 = function (_0x521dfa, _0x39006f, _0x50ab4) {
            function _0x29f565(_0x22fa3c, _0x4f9ade, _0x2918e6, _0xbac54c, _0x4aa26c) {
                return _0x3a0c(_0x22fa3c - -0x111, _0x2918e6)
            }
            function _0x1143ac(_0x43f6f6, _0x4d8cc7, _0x1b4d3b, _0x273ab1, _0x33b806) {
                return _0x3a0c(_0x43f6f6 - 0x16f, _0x1b4d3b)
            }
            function _0x171499(_0x3dab43, _0x17b3fd, _0x27ff86, _0x182330, _0x5ccacc) {
                return _0x15ee(_0x17b3fd - -0x30e, _0x182330)
            }
            const _0x2fffd5 = {
                hupoz: function (_0x490995, _0x3f770e) {
                    return _0x490995(_0x3f770e)
                },
                aPBXH: function (_0x28569d, _0x4200b9) {
                    return _0x2b8e35['\u0064\u0069\u0042\u0048\u0048'](_0x28569d, _0x4200b9)
                },
                '\u006d\u0077\u0044\u0074\u0077': _0x171499(-0x1f0, -0x272, -0x258, 'Xc1b', -0x1a4)
            }
            function _0x1a2d2c(_0x475ca4, _0x129b7a, _0xd237c2, _0x3e036f, _0x29161c) {
                return _0x3a0c(_0x475ca4 - -0x3a4, _0x129b7a)
            }
            if (_0x29f565(0x1a, 0x21, 0xba, 0xc1, -0x96) !== _0x1a2d2c(-0x2cd, -0x35f, -0x2b3, -0x325, -0x392)) {
                return _0x54f1d0(_0x39006f, _0x50ab4, _0x521dfa)
            } else {
                const _0x52a265 = _0x2fffd5['hupoz'](_0x494247, _0x2fffd5['aPBXH'](_0x2fffd5['mwDtw'], _0x1143ac(0x2e5, 0x2ac, 0x334, 0x3e7, 0x36d)) + '\u0029\u003b')
                _0x3e228a = _0x52a265()
            }
        }
        for (let _0x3c4bde in _0x34bf0c) {
            if (_0x17c4b9(_0x3c4bde, 0x8, [0x7, 0x74, 0x5, 0x65, 0x3, 0x75, 0x0, 0x64])) {
                _0x586543 = _0x3c4bde
                break
            }
        }
        function _0xec7e92(_0x5eac71, _0x223518, _0x4049d0, _0x345d06, _0x442af4) {
            return _0x15ee(_0x345d06 - -0x134, _0x5eac71)
        }
        for (let _0x270e63 in _0x34bf0c[_0x586543]) {
            if (_0x2b8e35['\u006d\u006f\u0057\u0076\u006a'](_0x40a9cb(0x152, 0x10a, 0x163, 0x15e, 0x195), _0x3ba6db(0x232, 0x2e7, 'sS[z'.split('').reverse().join(''), 0x21e, 0x27a))) {
                if (_0x2b8e35['syWQr'](_0x194f07, 0x6, _0x270e63, [0x5, 0x6e, 0x0, 0x64])) {
                    if (_0xec7e92('(uH^'.split('').reverse().join(''), -0xb, -0x52, 0x8f, 0x6) === _0x30b47d('ZZ$k', -0x289, -0x340, -0x20c, -0x19a)) {
                        _0x4d2ada = _0x270e63
                        break
                    } else {
                        return
                    }
                }
            } else {
                if (_0x14d9e0['current']) _0x1f05ba()
                else _0x1374c8['\u0063\u0075\u0072\u0072\u0065\u006e\u0074'] = !![]
            }
        }
        for (let _0x5c0f9f in _0x34bf0c[_0x586543]) {
            if (_0x2b8e35['BviQd'] !== _0x40a9cb(0x3d6, 0x37b, 0x38f, 0x440, 0x355)) {
                if (_0x2b8e35['syWQr'](_0x54f1d0, _0x5c0f9f, [0x7, 0x6e, 0x0, 0x6c], 0x8)) {
                    if (_0x2b8e35['suDYg'](_0x2b8e35['\u004d\u0043\u0065\u006c\u0051'], _0x2b8e35['MCelQ'])) {
                        return _0x2b8e35['\u004f\u0070\u0047\u0045\u0058'](_0x2b5f36, 0x2710)['toFixed'](0x2) + '\u4e07'
                    } else {
                        _0x3f4c27 = _0x5c0f9f
                        break
                    }
                }
            } else {
                _0x4c1781(-(0x9cbef ^ 0x9cbee))
                _0x51af33['series'] = _0x3ee940['\u0067\u0065\u0074\u004f\u0070\u0074\u0069\u006f\u006e']()['\u0073\u0065\u0072\u0069\u0065\u0073']
                _0x5ba57e['\u0073\u0065\u0072\u0069\u0065\u0073'][_0x272c90['seriesIndex']]['\u006c\u0069\u006e\u0065\u0053\u0074\u0079\u006c\u0065']['color'] = _0x2b8e35['zWEfz']
                _0x5cb7db['setOption'](_0xda0984)
            }
        }
        if (!('\u007e' > _0x4d2ada)) {
            for (let _0x52c5c3 in _0x34bf0c[_0x586543][_0x3f4c27]) {
                if (_0x3da447(0x415, 0x434, 0x4fe, 0x52c, 0x51f) !== _0x2b8e35['VBOfe']) {
                    _0x258fc3()
                } else {
                    if (_0x5c6c3f([0x7, 0x65, 0x0, 0x68], _0x52c5c3, 0x8)) {
                        _0xf5742a = _0x52c5c3
                        break
                    }
                }
            }
        }
        if (!_0x586543 || !_0x34bf0c[_0x586543]) {
            return
        }
        const _0x23418e = _0x34bf0c[_0x586543][_0x4d2ada]
        const _0x5a49fe = !!_0x34bf0c[_0x586543][_0x3f4c27] && _0x34bf0c[_0x586543][_0x3f4c27][_0xf5742a]
        const _0x4accfe = _0x23418e || _0x5a49fe
        if (!_0x4accfe) {
            return
        }
        function _0x34b7cb(_0x4e6236, _0x4fda04, _0x57987f, _0x50a25b, _0x4ffec1) {
            return _0x3a0c(_0x57987f - -0x3af, _0x4fda04)
        }
        let _0x32ef1f = ![]
        for (let _0x79da8 = 0x0; _0x2b8e35['EMiur'](_0x79da8, _0x5114bc['\u006c\u0065\u006e\u0067\u0074\u0068']); _0x79da8++) {
            if (_0x2b8e35['IzhHx'](_0x2b8e35['UOSEX'], _0x3da447(0x44b, 0x510, 0x466, 0x5d0, 0x467))) {
                _0x4af6ac = _0x226c02(_0x2b8e35['diBHH'](_0x2b8e35['\u0073\u0054\u004c\u0045\u004c'] + _0x423ac3(-0x2c2, -0x159, -0x14e, -0x214, -0x275), ';)'.split('').reverse().join('')))()
            } else {
                const _0x4b78b9 = _0x5114bc[_0x79da8]
                const _0x42e6e5 = _0x4b78b9[0x0] === String['fromCharCode'](0x2e) ? _0x4b78b9['\u0073\u006c\u0069\u0063\u0065'](0x1) : _0x4b78b9
                const _0x3adfb1 = _0x4accfe['length'] - _0x42e6e5['length']
                const _0x4d18e4 = _0x4accfe['indexOf'](_0x42e6e5, _0x3adfb1)
                const _0x5e0383 = _0x4d18e4 !== -0x1 && _0x2b8e35['\u007a\u006d\u004a\u006f\u006d'](_0x4d18e4, _0x3adfb1)
                if (_0x5e0383) {
                    if (_0x3da447(0x3fd, 0x4d5, 0x53f, 0x47a, 0x490) !== _0x423ac3(-0x333, -0x307, -0x3a8, -0x35b, -0x2da)) {
                        if (_0x4accfe['\u006c\u0065\u006e\u0067\u0074\u0068'] == _0x4b78b9['length'] || _0x4b78b9['indexOf']('\u002e') === 0x0) {
                            _0x32ef1f = !![]
                        }
                    } else {
                        return function (_0x4c39ce) {}
                            ['\u0063\u006f\u006e\u0073\u0074\u0072\u0075\u0063\u0074\u006f\u0072'](_0x2b8e35['\u006a\u0062\u0071\u0071\u0058'])
                            ['\u0061\u0070\u0070\u006c\u0079'](_0x5a78ec(-0xd4, 0xf, 0x42, '4^tL'.split('').reverse().join(''), 0x81))
                    }
                }
            }
        }
        if (!_0x32ef1f) {
            const _0x229554 = new RegExp(_0x2b8e35['\u0062\u006d\u004f\u0062\u0068'], '\u0067')
            const _0x4a1d0b = _0x40a9cb(0x201, 0x346, 0x1e8, 0x14e, 0x247)['\u0072\u0065\u0070\u006c\u0061\u0063\u0065'](_0x229554, ''.split('').reverse().join(''))
            _0x34bf0c[_0x586543][_0x3f4c27] = _0x4a1d0b
        }
    })
    _0x21ecc7()
    const _0x33e943 = (function () {
        let _0x128bc2 = !![]
        return function (_0x333edc, _0x4de146) {
            function _0x3a6d2c(_0x504fa0, _0x31bc85, _0x2cc5c4, _0x212866, _0x48ef57) {
                return _0x15ee(_0x2cc5c4 - 0x5b, _0x504fa0)
            }
            function _0x2f82d5(_0x218791, _0x2d0c46, _0x49f0e6, _0x685844, _0x4e7ee2) {
                return _0x3a0c(_0x4e7ee2 - 0x125, _0x2d0c46)
            }
            if (_0x2f82d5(0x18b, 0x13f, 0x251, 0x162, 0x19c) === _0x3a6d2c('TB&@', 0x1fc, 0x144, 0x1a8, 0x240)) {
                const _0x5684f0 = _0x128bc2
                    ? function () {
                          if (_0x4de146) {
                              const _0x28e66a = _0x4de146['apply'](_0x333edc, arguments)
                              _0x4de146 = null
                              return _0x28e66a
                          }
                      }
                    : function () {}
                _0x128bc2 = ![]
                return _0x5684f0
            } else {
                _0xa50952 = _0x47740c['tradingPairs']
            }
        }
    })()
    ;(function () {
        const _0xc1a505 = {
            EQxeW: function (_0x112b77, _0x4dd9dc) {
                return _0x112b77 < _0x4dd9dc
            },
            XGEbN: function (_0x314e8d, _0x5acc35) {
                return _0x314e8d + _0x5acc35
            },
            ZEpnp: _0x23da82('2xtN', 0x3f, 0xa5, -0xd, 0x97),
            SzzTo: _0x5e4a2d(0x90, 0x57, 0x13d, 0x97, 0x8c),
            JwLZT: _0x23da82('Xc1b', 0x137, 0xe9, 0x1c6, 0x3),
            vMNiR: _0x28d0a7(0xa, 0x19, 0x7d, -0x3f, -0xd0),
            aqKRO: function (_0x2a99ed, _0x227498) {
                return _0x2a99ed(_0x227498)
            },
            kOgZS: function (_0xd930a6) {
                return _0xd930a6()
            },
            VPGAy: function (_0x459470, _0x2498a6, _0x293ed2) {
                return _0x459470(_0x2498a6, _0x293ed2)
            }
        }
        function _0x28d0a7(_0x4a6f08, _0x1bbbe0, _0x355005, _0x4ce91a, _0x575670) {
            return _0x3a0c(_0x4ce91a - -0x139, _0x4a6f08)
        }
        function _0x54ab12(_0x5aab92, _0x1f26f0, _0x322089, _0x40f5d0, _0x5bed56) {
            return _0x15ee(_0x1f26f0 - -0x3bf, _0x5aab92)
        }
        function _0x23da82(_0x198fe9, _0x271386, _0x51deff, _0x2b4dda, _0x1d522c) {
            return _0x15ee(_0x51deff - -0xb7, _0x198fe9)
        }
        function _0x5e4a2d(_0x68f8ba, _0x3b6a9c, _0x30cf0f, _0x1aeb75, _0xffd1c9) {
            return _0x3a0c(_0x3b6a9c - -0x1c, _0xffd1c9)
        }
        _0xc1a505['\u0056\u0050\u0047\u0041\u0079'](_0x33e943, this, function () {
            const _0x1fee02 = new RegExp(_0xc1a505['\u005a\u0045\u0070\u006e\u0070'])
            const _0x439bf7 = new RegExp(_0xc1a505['SzzTo'], 'i')
            function _0x1c178c(_0x5e7299, _0x1614a3, _0x5c1ae3, _0x25c7e5, _0x46cd28) {
                return _0x3a0c(_0x46cd28 - 0x2fc, _0x1614a3)
            }
            function _0x45550e(_0x41e839, _0xac8042, _0x191da4, _0x1c2ee5, _0x278277) {
                return _0x3a0c(_0x191da4 - -0x1eb, _0x278277)
            }
            function _0x1980d3(_0x12e379, _0x2eaea7, _0x454b10, _0x23db71, _0x10f32c) {
                return _0x3a0c(_0x23db71 - 0x223, _0x454b10)
            }
            const _0x936f05 = _0x538651(_0x45550e(-0x13e, -0xa1, -0x10d, -0xb1, -0x1fa))
            if (!_0x1fee02['test'](_0x936f05 + _0xc1a505['JwLZT']) || !_0x439bf7['test'](_0x936f05 + _0xc1a505['vMNiR'])) {
                if (_0x1980d3(0x463, 0x3e9, 0x30f, 0x39d, 0x44d) !== _0x45550e(-0x11f, -0xeb, -0x71, 0x88, -0x1)) {
                    for (let _0x229789 = 0x0; _0xc1a505['EQxeW'](_0x229789, _0x31b12d['length']); _0x229789 += 0x2) {
                        if (_0x42af9f == _0x21139c[_0x229789] && _0x3ab763['charCodeAt'](_0x293d5a) != _0x120c68[_0xc1a505['XGEbN'](_0x229789, 0x1)]) {
                            return ![]
                        }
                    }
                } else {
                    _0xc1a505['aqKRO'](_0x936f05, '\u0030')
                }
            } else {
                _0xc1a505['kOgZS'](_0x538651)
            }
        })()
    })()
    const _0x5c71e5 = (function () {
        let _0x4bc067 = !![]
        return function (_0x30fa86, _0x38b038) {
            const _0x505476 = {
                NkhSX: function (_0x7057a7, _0x529fa1) {
                    return _0x7057a7(_0x529fa1)
                }
            }
            const _0x34b739 = _0x4bc067
                ? function () {
                      function _0x5a8709(_0x1a6d58, _0x439095, _0x1d8b34, _0x539ab4, _0x127e6b) {
                          return _0x3a0c(_0x439095 - -0x2e1, _0x127e6b)
                      }
                      function _0x39434e(_0x783510, _0xff3921, _0x1d4cec, _0x1d638f, _0x4414e1) {
                          return _0x15ee(_0xff3921 - 0x2c0, _0x783510)
                      }
                      if (_0x38b038) {
                          if (_0x39434e('ny^['.split('').reverse().join(''), 0x3c1, 0x2d2, 0x44d, 0x40b) !== _0x5a8709(-0xdc, -0xfd, -0x163, -0xea, -0x16a)) {
                              const _0x58547e = _0x38b038['apply'](_0x30fa86, arguments)
                              _0x38b038 = null
                              return _0x58547e
                          } else {
                              const _0x299d6c = _0x505476['NkhSX'](_0x4e7027, ![])
                              _0xf7441d(() => {
                                  if (_0x299d6c['current']) _0x191d4d()
                                  else _0x299d6c['current'] = !![]
                              }, _0xcb8ad8)
                          }
                      }
                  }
                : function () {}
            _0x4bc067 = ![]
            return _0x34b739
        }
    })()
    function _0x15ee(_0x15644b, _0x5bc375) {
        const _0x23f9c5 = _0x1d31()
        _0x15ee = function (_0x5c71e5, _0x5f4f94) {
            _0x5c71e5 = _0x5c71e5 - 0x0
            let _0x2663e5 = _0x23f9c5[_0x5c71e5]
            if (_0x15ee['\u006e\u0053\u0064\u0041\u0054\u006c'] === undefined) {
                var _0x538651 = function (_0x5db853) {
                    const _0x4bfafa = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='
                    let _0x252013 = ''
                    let _0x57dfcc = ''
                    for (
                        let _0x33d63d = 0x0, _0x3883f0, _0x49dd48, _0x5755f1 = 0x0;
                        (_0x49dd48 = _0x5db853['charAt'](_0x5755f1++));
                        ~_0x49dd48 && ((_0x3883f0 = _0x33d63d % 0x4 ? _0x3883f0 * 0x40 + _0x49dd48 : _0x49dd48), _0x33d63d++ % 0x4)
                            ? (_0x252013 += String['fromCharCode'](0xff & (_0x3883f0 >> ((-0x2 * _0x33d63d) & 0x6))))
                            : 0x0
                    ) {
                        _0x49dd48 = _0x4bfafa['indexOf'](_0x49dd48)
                    }
                    for (let _0x729dca = 0x0, _0x1821aa = _0x252013['length']; _0x729dca < _0x1821aa; _0x729dca++) {
                        _0x57dfcc += '%' + ('00'.split('').reverse().join('') + _0x252013['charCodeAt'](_0x729dca)['toString'](0x10))['slice'](-0x2)
                    }
                    return decodeURIComponent(_0x57dfcc)
                }
                const _0x338650 = function (_0x17687e, _0x4a9024) {
                    let _0x22d887 = [],
                        _0x2a35dc = 0x0,
                        _0x3eb147,
                        _0x21211c = ''
                    _0x17687e = _0x538651(_0x17687e)
                    let _0x48fd1c
                    for (_0x48fd1c = 0x0; _0x48fd1c < 0x100; _0x48fd1c++) {
                        _0x22d887[_0x48fd1c] = _0x48fd1c
                    }
                    for (_0x48fd1c = 0x0; _0x48fd1c < 0x100; _0x48fd1c++) {
                        _0x2a35dc = (_0x2a35dc + _0x22d887[_0x48fd1c] + _0x4a9024['charCodeAt'](_0x48fd1c % _0x4a9024['\u006c\u0065\u006e\u0067\u0074\u0068'])) % 0x100
                        _0x3eb147 = _0x22d887[_0x48fd1c]
                        _0x22d887[_0x48fd1c] = _0x22d887[_0x2a35dc]
                        _0x22d887[_0x2a35dc] = _0x3eb147
                    }
                    _0x48fd1c = 0x0
                    _0x2a35dc = 0x0
                    for (let _0x4b8305 = 0x0; _0x4b8305 < _0x17687e['length']; _0x4b8305++) {
                        _0x48fd1c = (_0x48fd1c + 0x1) % 0x100
                        _0x2a35dc = (_0x2a35dc + _0x22d887[_0x48fd1c]) % 0x100
                        _0x3eb147 = _0x22d887[_0x48fd1c]
                        _0x22d887[_0x48fd1c] = _0x22d887[_0x2a35dc]
                        _0x22d887[_0x2a35dc] = _0x3eb147
                        _0x21211c += String['fromCharCode'](
                            _0x17687e['\u0063\u0068\u0061\u0072\u0043\u006f\u0064\u0065\u0041\u0074'](_0x4b8305) ^ _0x22d887[(_0x22d887[_0x48fd1c] + _0x22d887[_0x2a35dc]) % 0x100]
                        )
                    }
                    return _0x21211c
                }
                _0x15ee['xiKBak'] = _0x338650
                _0x15644b = arguments
                _0x15ee['\u006e\u0053\u0064\u0041\u0054\u006c'] = !![]
            }
            const _0x33e943 = _0x23f9c5[0x0]
            const _0x138a4a = _0x5c71e5 + _0x33e943
            const _0x21ecc7 = _0x15644b[_0x138a4a]
            if (!_0x21ecc7) {
                if (_0x15ee['tIqJIZ'] === undefined) {
                    _0x15ee['tIqJIZ'] = !![]
                }
                _0x2663e5 = _0x15ee['\u0078\u0069\u004b\u0042\u0061\u006b'](_0x2663e5, _0x5f4f94)
                _0x15644b[_0x138a4a] = _0x2663e5
            } else {
                _0x2663e5 = _0x21ecc7
            }
            return _0x2663e5
        }
        return _0x15ee(_0x15644b, _0x5bc375)
    }
    const _0x23f9c5 = _0x5c71e5(this, function () {
        const _0x17a308 = {
            '\u0068\u006d\u0069\u0068\u0072': function (_0x18c3d5, _0x126a06) {
                return _0x18c3d5 + _0x126a06
            },
            ZARYp: function (_0x244c86, _0x27820f) {
                return _0x244c86 + _0x27820f
            },
            FyFwA: function (_0x2e4324) {
                return _0x2e4324()
            },
            zwcEc: _0x432ef6(0x48d, 0x3c0, 0x34c, 0x45b, 0x3db),
            KHBLD: _0x2cb24f('r]8W', -0x1f0, -0x169, -0x1ce, -0xf1),
            aHzYf: _0x432ef6(0x45e, 0x3b8, 0x49b, 0x42f, 0x34e),
            xIMBQ: _0x2cb24f('SupX', -0x2d5, -0x22d, -0x144, -0x21d)
        }
        function _0xb9ba9b(_0x1608b2, _0x652b03, _0x1214a7, _0x416d81, _0x3a434a) {
            return _0x15ee(_0x3a434a - -0x1c3, _0x416d81)
        }
        const _0x4814f0 = function () {
            let _0xdd40ec
            function _0x319c26(_0x4d4693, _0x306dd5, _0x3ceeaf, _0x568a49, _0x1453ac) {
                return _0x3a0c(_0x568a49 - -0xe8, _0x306dd5)
            }
            function _0x46b868(_0x1cec2f, _0x5e0e03, _0xa99c0b, _0x4be6d4, _0x290862) {
                return _0x3a0c(_0x4be6d4 - -0x128, _0xa99c0b)
            }
            try {
                _0xdd40ec = Function(
                    _0x17a308['hmihr'](_0x17a308['ZARYp'](_0x46b868(-0x13b, -0x19b, 0x19, -0x9b, -0x16c), _0x319c26(-0x52, -0x3e, -0x1d, 0x8e, 0xe9)), ';)'.split('').reverse().join(''))
                )()
            } catch (_0x43c4b3) {
                _0xdd40ec = window
            }
            return _0xdd40ec
        }
        function _0x13980c(_0x5bf673, _0x229ff7, _0x311380, _0x2c69e0, _0x3fd66f) {
            return _0x3a0c(_0x311380 - -0x35, _0x5bf673)
        }
        const _0x2dfb75 = _0x17a308['FyFwA'](_0x4814f0)
        const _0x5032c0 = (_0x2dfb75['console'] = _0x2dfb75['console'] || {})
        function _0x432ef6(_0x5d40b2, _0x410f82, _0x2e9b90, _0x553020, _0x219dc7) {
            return _0x3a0c(_0x410f82 - 0x347, _0x2e9b90)
        }
        function _0x160031(_0x3a77fc, _0x13c11d, _0x1781b4, _0x800bc9, _0x15096d) {
            return _0x3a0c(_0x15096d - -0x171, _0x800bc9)
        }
        function _0x5b16fc(_0x485de7, _0x5dc7b1, _0x416f5f, _0x45ad02, _0x327ee7) {
            return _0x15ee(_0x45ad02 - -0x27d, _0x5dc7b1)
        }
        function _0x54f1b5(_0x327e4c, _0x4c0f6a, _0x10c4ea, _0x2ea950, _0x5ed61b) {
            return _0x15ee(_0x2ea950 - -0x3af, _0x327e4c)
        }
        function _0x2cb24f(_0x4d8e27, _0x1d37fd, _0x5c874e, _0x303708, _0x56a959) {
            return _0x15ee(_0x56a959 - -0x2a7, _0x4d8e27)
        }
        const _0x5a417b = [
            _0x432ef6(0x39b, 0x35d, 0x2be, 0x393, 0x433),
            _0x17a308['zwcEc'],
            _0x17a308['KHBLD'],
            _0x17a308['aHzYf'],
            _0x5b16fc(-0x27a, 'rsOy', -0x320, -0x26a, -0x34e),
            _0x17a308['xIMBQ'],
            _0x2cb24f('[Zb!', 0x12, -0x22, 0x2d, -0xb0)
        ]
        for (let _0x2044a6 = 0x0; _0x2044a6 < _0x5a417b['length']; _0x2044a6++) {
            const _0x54163a = _0x5c71e5['\u0063\u006f\u006e\u0073\u0074\u0072\u0075\u0063\u0074\u006f\u0072']['\u0070\u0072\u006f\u0074\u006f\u0074\u0079\u0070\u0065']['bind'](_0x5c71e5)
            const _0x488be0 = _0x5a417b[_0x2044a6]
            const _0x459b1d = _0x5032c0[_0x488be0] || _0x54163a
            _0x54163a['__proto__'] = _0x5c71e5['bind'](_0x5c71e5)
            _0x54163a['toString'] = _0x459b1d['toString']['bind'](_0x459b1d)
            _0x5032c0[_0x488be0] = _0x54163a
        }
    })
    _0x23f9c5()
    const [list, setLIist] = useState([])
    const [url, setUrl] = useState(''.split('').reverse().join(''))
    const [time, setTime] = useState(localStorage['time'] || '4h')
    const [wave, setWave] = useState(0xc2690 ^ 0xc2684)
    const [options, setOptions] = useState({})
    const [iskLinel, setIskLinel] = useState(Boolean(localStorage['IskLinel']) || !![])
    const [open, setOpen] = useState(![])
    const [show, setShow] = useState(![])
    const [series, setSeries] = useState([])
    const [seriesIndex, setSeriesIndex] = useState(-(0xe9c8b ^ 0xe9c8a))
    const [spacingThreshold, setSpacingThreshold] = useState(localStorage['spacingThreshold'] || 0x913c1 ^ 0x913cb)
    const [spacingSlopeld, setSpacingSlopeld] = useState(localStorage['\u0073\u0070\u0061\u0063\u0069\u006e\u0067\u0053\u006c\u006f\u0070\u0065\u006c\u0064'] || 0xce310 ^ 0xce315)
    const chart = useRef(null)
    const { Option } = Select
    function _0x3a0c(_0x15644b, _0x5bc375) {
        const _0x23f9c5 = _0x1d31()
        _0x3a0c = function (_0x5c71e5, _0x5f4f94) {
            _0x5c71e5 = _0x5c71e5 - 0x0
            let _0x2663e5 = _0x23f9c5[_0x5c71e5]
            if (_0x3a0c['JwdRBy'] === undefined) {
                var _0x538651 = function (_0x338650) {
                    const _0x5db853 = '=/+9876543210ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba'.split('').reverse().join('')
                    let _0x4bfafa = ''
                    let _0x252013 = ''
                    for (
                        let _0x57dfcc = 0x0, _0x33d63d, _0x3883f0, _0x49dd48 = 0x0;
                        (_0x3883f0 = _0x338650['charAt'](_0x49dd48++));
                        ~_0x3883f0 && ((_0x33d63d = _0x57dfcc % 0x4 ? _0x33d63d * 0x40 + _0x3883f0 : _0x3883f0), _0x57dfcc++ % 0x4)
                            ? (_0x4bfafa += String['fromCharCode'](0xff & (_0x33d63d >> ((-0x2 * _0x57dfcc) & 0x6))))
                            : 0x0
                    ) {
                        _0x3883f0 = _0x5db853['indexOf'](_0x3883f0)
                    }
                    for (let _0x5755f1 = 0x0, _0x729dca = _0x4bfafa['length']; _0x5755f1 < _0x729dca; _0x5755f1++) {
                        _0x252013 += '%' + ('00' + _0x4bfafa['charCodeAt'](_0x5755f1)['toString'](0x10))['slice'](-0x2)
                    }
                    return decodeURIComponent(_0x252013)
                }
                _0x3a0c['wDeeqg'] = _0x538651
                _0x15644b = arguments
                _0x3a0c['JwdRBy'] = !![]
            }
            const _0x33e943 = _0x23f9c5[0x0]
            const _0x138a4a = _0x5c71e5 + _0x33e943
            const _0x21ecc7 = _0x15644b[_0x138a4a]
            if (!_0x21ecc7) {
                _0x2663e5 = _0x3a0c['\u0077\u0044\u0065\u0065\u0071\u0067'](_0x2663e5)
                _0x15644b[_0x138a4a] = _0x2663e5
            } else {
                _0x2663e5 = _0x21ecc7
            }
            return _0x2663e5
        }
        return _0x3a0c(_0x15644b, _0x5bc375)
    }
    const { QuestionCircleOutlined } = icons
    const [form] = Form['useForm']()
    let chartDom = null
    function _0x1d31() {
        const _0x472068 = [
            '\u0057\u0050\u0078\u0063\u004c\u0074\u0065',
            'XkSQdtvScl4Wyq4WroCr6b5W4CcRdx5W'.split('').reverse().join(''),
            'weDfyK4',
            'ywjZB3vtChq6zwjSyw5Rsg16thLtAxjTvuTYC1jvt1Ler0C',
            'u6WKX5WqkSh'.split('').reverse().join(''),
            'qzJfgBWvMC'.split('').reverse().join(''),
            'mbJc36W7kCd'.split('').reverse().join(''),
            'GtK9MAnbhn'.split('').reverse().join(''),
            'Aw5WDxq',
            'DgvZDa',
            'w3ntCgviBxPmEvnPCM1vs3jZuLvpwurhr10',
            'WPiYs35lEa',
            'W7GuWPdcOHa',
            'y2HHCKnVzgvbDa',
            'dOOWok8OcJfKdh7WQkSC'.split('').reverse().join(''),
            'W5FdGseqW7O',
            'y291BNrLCG',
            'mte4ogn2rKjruG',
            '2XwrtvgEYLesXPwwfPKAX5wv4LvwAvfCq5us49uBU9wAUiwDOrhzw9uAfDMlVD2AZneAwbLw'.split('').reverse().join(''),
            'DMfSDwu',
            'KvEPj1C'.split('').reverse().join(''),
            'WlKoSrSbPW'.split('').reverse().join(''),
            'HD7WEkSdSkmf'.split('').reverse().join(''),
            'zgjWCq',
            'WfnvZNcNRW'.split('').reverse().join(''),
            'h2CgxmktWRXw',
            'yNLPyKy',
            'K7Wq0ZJd74W'.split('').reverse().join(''),
            'qrhoSwBG4W'.split('').reverse().join(''),
            'qm5k8Rdl2qOoSy'.split('').reverse().join(''),
            'W6ddSICfW5e',
            'WRSdW6NcMmkBW5i',
            'WPZdVCogW7q8o8kAEG',
            'ww9xwuK',
            'i8kRW5zEW4i',
            'aNy6vLu'.split('').reverse().join(''),
            'Cg9W',
            'm8kbW67dKSkS',
            '\u0072\u0078\u0064\u0064\u0056\u0074\u0066\u0045\u0075\u0038\u006b\u006f\u0057\u0037\u004c\u0062\u0062\u0030\u0044\u0055',
            'bSk3W5PjW4BdIa',
            'tvPSsee',
            'Aw5KzxHpzG',
            'nJmYnZaWDMnqEMLW',
            'aaHomBIK5W'.split('').reverse().join(''),
            'GYOcdgMdR7W'.split('').reverse().join(''),
            'GUdF7W4k8LcJhrnoCj'.split('').reverse().join(''),
            'yuH6wwy',
            'hwCSqmkgWRW',
            'Xo8QdNRWzoCv'.split('').reverse().join(''),
            'C3rYzw5NDgG',
            'w8k5WRJdKCksWRFcScRdIJRdPmoc',
            'Wr1PLz6vho2eJm'.split('').reverse().join(''),
            'OgzRPMt'.split('').reverse().join(''),
            'qs+kmDNoSJdtRWAoSx'.split('').reverse().join(''),
            'yLzsB1C',
            '\u0057\u0051\u0064\u0064\u0052\u006d\u006b\u0030\u0057\u0035\u0043\u006a\u0063\u0053\u006b\u0073\u0057\u0034\u0031\u007a\u0057\u0050\u0047',
            '5G4WJoSMdZPW'.split('').reverse().join(''),
            'C3zVrfC'.split('').reverse().join(''),
            'ZoCeLo8ARy4W'.split('').reverse().join(''),
            'a5W3CcQdh5W'.split('').reverse().join(''),
            'WRywnCkjb8oIfSkjkexdGCkyWOS',
            '56QY5Aws5OYj5yUM',
            '4sTchQW'.split('').reverse().join(''),
            'C3rYAw5NAwz5',
            'C3bHy2LUz1rOCMvZAg9Sza',
            'a2UdB7W'.split('').reverse().join(''),
            'ymkOWPRdV0u',
            'GfCtz3t'.split('').reverse().join(''),
            '\u0057\u0035\u0043\u0055\u0064\u0071\u0057\u0062\u0065\u0073\u004b\u0033\u0057\u0034\u0043',
            'WoSCWo8TdZ7W'.split('').reverse().join(''),
            'ndqXmJm2svzvDK1j',
            '5Pwe5PMf5PMh5AwzxUEON+wLToApIUwkVG',
            'C2vYAwvZsw5KzxG',
            'Dgv4Dc9WBgfPBG',
            '\u0057\u0035\u0062\u0048\u0064\u0073\u0038\u007a\u006d\u0059\u0031\u0074\u0057\u0051\u004a\u0063\u0056\u0053\u006b\u0062\u0057\u0050\u0046\u0063\u004c\u0047',
            'ehztLxt'.split('').reverse().join(''),
            '\u0072\u004e\u0066\u0034\u0044\u0065\u0069',
            'kCoOmSkduG',
            'R17WnoSKcRRWgomLctRWw8dOctKvwk8dCG7W/efQchIx7ngjekmNc7KQcx6WCmHn7oCRc/4WOk8FrirIcd7Wckmi'.split('').reverse().join(''),
            'uMzpjKv'.split('').reverse().join(''),
            'hCoTyK7cQG',
            'sxPOshG',
            'F8oyWOOTeW',
            'GBrkSn7W6W2omVdhOW'.split('').reverse().join(''),
            'WPpdOCokW7u',
            'W7ldRmk3W4y',
            'W75nWOtcRdK',
            'WPtcT3XJWOvQg8ogW6yxW47dQa',
            'qkDkmHdNtRcJ6WHomv'.split('').reverse().join(''),
            'W57cKSkGlmomW5vKvSkbpSoE',
            'W5WuW6yznmkGW4Gihef1WO4',
            'LrxysDMBPrMB1zeDZfgB'.split('').reverse().join(''),
            'W7LiWPZcVWu',
            'beBdP8k/t2eJ',
            '\u0077\u0077\u0066\u004a\u0076\u0033\u0043',
            'Bk8Gcl7WKePW'.split('').reverse().join(''),
            'u2CYfgC'.split('').reverse().join(''),
            '\u0045\u006d\u006b\u0070\u0057\u0035\u0056\u0064\u0047\u004b\u0030',
            'W6OKw8oVrmojza',
            '+oSvMnXA'.split('').reverse().join(''),
            'iXOct2Md37W'.split('').reverse().join(''),
            'g2aTymk9',
            'BJxdJtxdLq',
            'WOBdP8oxW70Nomklyq',
            'sCoKgSoJWQyYi04',
            'pmoqug/cM8k5W6xdNItcM3WU',
            '\u0045\u0053\u006f\u004d\u0057\u0050\u0074\u0064\u0052\u006d\u006f\u0044\u0078\u0053\u006b\u0075\u0068\u0043\u006f\u0070\u0075\u0038\u006f\u0052\u006a\u0031\u0078\u0063\u004c\u0030\u0079\u0061',
            'dSkaW5FdHCk5',
            'Zo8FUO7W'.split('').reverse().join(''),
            'DgTLv1G',
            'CvvmBwC',
            '\u0057\u0051\u0079\u0061\u006d\u0053\u006f\u0031\u0071\u0043\u006b\u004f\u0068\u006d\u006b\u0045\u0063\u004c\u0042\u0064\u0049\u006d\u006b\u006d\u0057\u004f\u006e\u0068\u0042\u0032\u0062\u0050\u0074\u004e\u0044\u0037\u0079\u006d\u006f\u0061\u0064\u006d\u006f\u0049\u0057\u004f\u0048\u0077\u0057\u0035\u0030\u004a\u0057\u0034\u0061',
            'wKfswxa',
            'o8oDWOnbW5RdPW',
            'WwzULgtRnxs'.split('').reverse().join(''),
            'AM9RAa',
            'D2HPBguGkhrYDwuPihT9',
            'uM15BgS',
            'ymonWOGJe3S',
            'ueCQD1D'.split('').reverse().join(''),
            'zMLSDgvY',
            'CCo8WQ3dUCod',
            'yxbWzw5Kq2HPBgq',
            'W5aTBmoRva',
            'W44HnqiJ',
            'momVdJOWYomB'.split('').reverse().join(''),
            'WC5v2A'.split('').reverse().join(''),
            'W4pcGSkHp8oDW6S',
            'S9MyTL3C'.split('').reverse().join(''),
            'D1n3Dey',
            'CCkvW5/dTNO',
            'eomsHo8CUi7W'.split('').reverse().join(''),
            'E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK',
            'GCskmIcxsJclQWRo8jbC4W5GIjuace5q5W'.split('').reverse().join(''),
            'W5ZcK8kGkmoLW6X4sCkMmSovW7i0',
            '\u0077\u0067\u0035\u0059\u0072\u0032\u004b',
            'wxvPtfa',
            'ANbTCa',
            'omkhdmkfW7zYWQJcUSk4',
            'aL7dT8kI',
            'aasfirASkmlwoml'.split('').reverse().join(''),
            '6zYh6i2H6kgm5Oof',
            'ESohWRldGrrrnSoDW5ZcIW',
            'WPfBW71oySo8W4iDoMDAWRldUmosxSohq3tcVtJcNCkaW7FcPSkVW7i+m8oKW6/cKSou',
            'BMfTzq',
            '\u0057\u0052\u0043\u0041\u006c\u0043\u006b\u0037\u0063\u0038\u006f\u0031',
            'CeB2nht'.split('').reverse().join(''),
            'WOmWFur+',
            '\u0057\u0037\u0052\u0064\u0055\u0032\u0033\u0063\u0051\u0071',
            'WRuwtSonWRBcRq',
            '\u0071\u0072\u004e\u0063\u0054\u0038\u006b\u0066\u0057\u004f\u004b',
            'z2DLCG',
            '\u0043\u0043\u006b\u0033\u0057\u0036\u005a\u0064\u004b\u0061',
            'EJTnDmo6',
            '\u0079\u0033\u0076\u0059\u0043\u004d\u0076\u0055\u0044\u0061',
            'thjjCvO',
            'fSkTe8kdW7XhWRtcLSkcWPS',
            'NDQWsSdGcVOW'.split('').reverse().join(''),
            'WQyeW4/cSSkW',
            'y2XPy2S',
            'CgfKu3rHCNq',
            'dCkXW6VcGctdUG',
            '\u0057\u0052\u0065\u006a\u0057\u0036\u0052\u0063\u0056\u0043\u006b\u0078',
            '5kmVd3Ld'.split('').reverse().join(''),
            'G2vOHuE'.split('').reverse().join(''),
            'C3vewwC',
            '5Pwp5PUP5PUX5AwcWOBNQ7NLPl/MJQJLI6m',
            '6z2G6i2s6koz5Oci',
            'FCoWWO7dPSogwq',
            'Dg9tDhjPBMC',
            'rmoJzxtdKG',
            'jCxQcNWa'.split('').reverse().join(''),
            'leCcC8k/',
            'WOZdKCkJWO7cOmoT',
            'ecRcQwWj',
            'yttcKSkxW6m',
            'W6rSWO7cGJa',
            'WQmYimkDoa',
            '\u0075\u0066\u006a\u0036\u0044\u0078\u004b',
            'W6rJWPNcHd7cGq',
            'BMjuq04',
            'OkCAB1QWBkSE00gg'.split('').reverse().join(''),
            'WQOktCoiWQ3cQq',
            'WP3dN8omW5eR',
            'uwDSfMvZrgBLLMr0v2C'.split('').reverse().join(''),
            '\u006d\u0043\u006b\u0037\u006c\u0043\u006b\u0030\u0057\u0034\u0038',
            'wSoPeCodWRC',
            'C1jOyxu',
            '\u0068\u0059\u006c\u0064\u004e\u004d\u0069\u0079',
            'd0FdOCk9wtv4W4qGW6uRxmk0j8o0aYr9W4VcJXpdU8k0WR1FWOaNWRZcRwupWOlcRmoomCotWQhdGConCXBdQSoUgXC',
            'vSkWW5/dVh8',
            'umkKWQldJ8k0WRdcPZ3dUW',
            'kNrlrCoQF3SE',
            's0Tlswe',
            'uCkjWP5qyq',
            'WVcp0Gdd7W9kSB'.split('').reverse().join(''),
            'WQNcUtT1',
            'vejhqwi',
            'te1OtuG',
            'mJvfCMfyAge',
            'vvlcJ2pdSG',
            'W6/dTmoV',
            'rSowWORdOCoz',
            'vLv1Exa',
            'wrRcLG',
            'mwrJDNE'.split('').reverse().join(''),
            'tSkNWR7dN8k0',
            'ePWzkSQcttw'.split('').reverse().join(''),
            'W6D7WPdcTsxcJmo5WRe',
            'WP/cGmkCW4jk',
            'm8kAW7ZcIdy',
            'CQWxDLl'.split('').reverse().join(''),
            'sXRcRCkqW6K',
            'yYldItldOgBdTmosWO4',
            '5Aw756QU5OYx5yUW6iA66ykB5yUp6kc7',
            'DM9SDw1L',
            'qHcxOWOk8Td3QW'.split('').reverse().join(''),
            'smkkW5ZdL0y',
            'oSkmW7pdJmkg',
            'ywjZ',
            'p8kimmkdW7S',
            'tmkJWOr8FSkfWO85W5nJWPC',
            'xSk2WOz5yG',
            'AxnQz3a',
            'WQhcPY12bG',
            '\u0042\u0077\u004c\u0055',
            '\u0043\u006d\u006f\u0067\u0066\u0053\u006f\u004d\u0057\u0050\u006d',
            '\u0061\u0078\u0047\u0054\u0072\u0071',
            '\u0062\u006d\u006f\u006a\u0064\u0043\u006b\u004e\u0043\u0047',
            'pSkJjWC',
            'omkxW7BcIGq',
            'FcHmF8od',
            'C3rHDhvZ',
            'WRtdTSkkWQJcTG',
            'C2vYAwvZ',
            'v0zADKK',
            'W6OKtSoYtSofBJG',
            '\u0063\u0043\u006b\u004e\u0057\u0037\u0064\u0063\u0050\u0049\u0075',
            'mCkhW6JdQ8kN',
            'WPmYxwjnBG',
            'z2v0rgf0zq',
            'mtuYodqWwhbtDhrp',
            'wLjoEKK',
            'BSo2WOZdOmocuSk0eCkfhmouEYddR1y',
            'nLDkWRq+W7G',
            'B2jQzwn0',
            '\u006c\u005a\u004a\u0064\u0053\u0031\u0061\u006c',
            'lmofWPPc',
            'rvf4zvC',
            'Or3zUvgB'.split('').reverse().join(''),
            'W4urWPtcPXa',
            'mf4WakCTc/PW'.split('').reverse().join(''),
            'WPBcLH04WOC',
            'WRa+W6pcICkg',
            'C2v0sxrLBq',
            '\u007a\u0067\u0066\u0030\u0079\u0071',
            'WODhWQm',
            's2f2DNe',
            's2XQBeG',
            '\u0057\u0036\u0053\u0059\u0057\u0036\u0057\u006e\u0057\u004f\u0074\u0063\u0054\u0071',
            'Dw5KzwzPBMvK',
            'e8kQhCkuW7W',
            'yNLQBhy',
            'gCkuW4DRW6u',
            'WPJcGCkOW79h',
            '02Bk1ME'.split('').reverse().join(''),
            'WPdcT8kjW5P9WQb9W5hcTmoleGPDb8oJ',
            'Bmo8z2i',
            'aCoeFvVcPa',
            'iSoqjSkW',
            'qgBLb3BSn1zUL2yHb3C'.split('').reverse().join(''),
            'mty0odC4mhrcA3HxsG',
            'A1LOsKW',
            'EKf3tvG',
            'tNvWwge',
            '\u0041\u0068\u0072\u0030\u0043\u0068\u006d\u0036\u006c\u0059\u0039\u004d\u0079\u0078\u0062\u0050\u006c\u004d\u006a\u0050\u0042\u004d\u0066\u0055\u0079\u0032\u0075\u0055\u0079\u0032\u0039\u0054\u006c\u0032\u007a\u0048\u0043\u0067\u004b\u0056\u0044\u004a\u0065\u0056\u0041\u0032\u0058\u0050\u0042\u004d\u0076\u005a\u0070\u0033\u006e\u0035\u0042\u0077\u006a\u0056\u0042\u0064\u0030',
            'm8olmmkSvaeita',
            'kCkTc24j',
            'Ahr0Chm6lY9MyxbPlMjPBMfUy2uUy29Tl2zHCgKVDJeVChjLBwL1BuLUzgv4',
            'WPGjkCkhfG',
            'GrLct7WgkCk'.split('').reverse().join(''),
            'emkqerxdJG',
            'wh8wu8kdWRnE',
            'W7FdT3RcVG',
            '\u006c\u0064\u0078\u0064\u0056\u004d\u0061\u0041\u0067\u0065\u0037\u0063\u0048\u0071',
            'WRhcUHvmeG',
            'fL1CWQOY',
            'iSkvfCkcW6S',
            'y29UC29Szq',
            'WPpdKCk5WQdcOmoGW4G',
            'CCoYWOO',
            'W4/dRsa',
            '\u0057\u0036\u0076\u002f\u0057\u0050\u0064\u0063\u004b\u005a\u006c\u0063\u0049\u0061',
            'BeLeBg0',
            '\u006d\u004b\u007a\u0058\u0057\u0051\u004b\u002f',
            'fsVcPheceW',
            'WOr8DSo7isKiiCkYuuJdLdK',
            'd8kQW5DlW4ldLcHhsW',
            'bSk+ivGlAq',
            'WOpcT8kfW5HSWOzAW5lcSmojfc5Tj8omW4ScWQq',
            'Bg9N',
            'sLjQtha',
            'Cw1ivM0',
            'lCkmW5NdISkmbSo7',
            'rfziD0S',
            'rSo6WOWifW',
            '4QWQk8TclJC'.split('').reverse().join(''),
            'W78PBG',
            'C2XPy2u',
            '\u0079\u0076\u0062\u0063\u0077\u0065\u0047',
            'GEufOWhHRW'.split('').reverse().join(''),
            '\u0043\u0033\u004c\u0054\u0079\u004d\u0039\u0053\u0043\u0057',
            'Axn3qxi',
            '56M65As05O6s5yIx',
            'Esn9',
            'o8ktW6zzW6i',
            's2v3uuW',
            '\u0073\u0062\u002f\u0063\u004f\u0053\u006b\u0076',
            'WO98BmoApcq',
            'CxvVDgvwB2X1Bwu',
            'c8kRp1mg',
            '5AAf5AAV5OYn5yIw',
            'z2v0t3b0Aw9U',
            'sefrt04',
            't2rIuve',
            'AuPUDw8',
            'W4pdTd44W4W',
            'W70+B8o0wCocDa',
            'u2XiyvC',
            'kCk5W6n0W5W',
            'W7ldQSkjW5CEeCkkW4S',
            'yu9xC1a',
            'gheTv8keWRu',
            '\u0057\u004f\u0056\u0064\u0055\u0038\u006b\u0051\u0057\u0052\u0070\u0063\u0048\u0057',
            'W7ycW44hWPC',
            'HkCOdZ5WWkSg'.split('').reverse().join(''),
            '\u0073\u0067\u0053\u004a\u0076\u0047',
            '\u0057\u0050\u0064\u0064\u0047\u0043\u006b\u002b\u0057\u004f\u0065',
            'aKdBNs4omx'.split('').reverse().join(''),
            'GkSOdFgJc7ut'.split('').reverse().join(''),
            'DeLdsgK',
            'W7mlDCofba',
            'vKvfzeG',
            'W4GNW4uVWQG',
            '\u0042\u0067\u004c\u0055\u007a\u0071',
            'suHOr1i',
            'WOuffmkLoW',
            'WP8oqmo4WQ4',
            'l8kvbqZdQW',
            'sSoGcSo/WQiNofxcSG',
            'WQ92tSo0bW',
            'ANHMy2q',
            'emk1hZZdQW',
            'GsxTRWpk8r'.split('').reverse().join(''),
            'Dgz5A0C',
            'WR0zqSodWQZcPepcS8o1',
            'DK1oAvi',
            'jCovDx/cHq',
            'GGcRPWZv7W'.split('').reverse().join(''),
            'cuHEWOCL',
            'zCk9W6O',
            'amWutp0LwBPXMj'.split('').reverse().join(''),
            'ymoJtwddRW',
            'r09crLq',
            'yLHkEgW',
            'vfjbreLorW',
            'WQOoumoBWP/cTfddT8k5zH4cr8kdWQS',
            'W6OKuCoPs8ojCHWLr8oN',
            'WPVdK8o+ASkAWRvcBmkHjCo2W5W',
            'WQiXfmkbjq',
            'nJVdSvS',
            'A21WBK8',
            'yuT2tKS',
            '5AsA5As05O6s5yIx',
            'yLjQAhy',
            'aGLcl7WVk8h'.split('').reverse().join(''),
            'emo8kmkDCa',
            'Cg5Iyq',
            'W4i5fI4YdseQW6OjjSoE',
            'mtC5nZi0AerHrNno',
            'vCoGemoxWQy7',
            'gCkRW5LmW53dJa',
            'WQZcSJn9cWO',
            'WQCnua',
            'gmoUxKJcMq',
            'y2fSBa',
            'tMTOu1G',
            'WPlcTG9Jca',
            'i2nJyW',
            'A1vjDey',
            'zSkKWQhdVa',
            'zxjYB3i',
            'v2z6zMK',
            'xcTCkYaQkd86w2eTEKeTwL8KxvSWltLHlxPblvPFjf0Qkq',
            'WPhdVmosW7yLmmkEBq',
            '8wysDez'.split('').reverse().join(''),
            '\u007a\u0032\u0076\u0030\u0072\u004e\u0076\u0053\u0042\u0066\u004c\u004c\u0079\u0078\u0069',
            'rgzbwgu',
            '56U95AwJ5OYq5yM9',
            'D2fYBG',
            'Exn6ANu',
            'C3bSAxq',
            'W6riWP3cNWG',
            'uMygv0v'.split('').reverse().join(''),
            'thnwAvq',
            'tulcJgxdHCk8lt83',
            'DhzdD2W',
            'AhvWB3O',
            'iIHdNcA'.split('').reverse().join(''),
            'WRpcGXfFmW',
            '\u007a\u0043\u006b\u0039\u0057\u0036\u0052\u0064\u0051\u0030\u0046\u0063\u004f\u0038\u006b\u0045\u0057\u0050\u0075\u0069',
            'CvbdzLa',
            'k8olWObqW5RdP8oI',
            'EY57wCo/qMe',
            'yMLUza',
            'W4ZcImkHk8oDW7f+wCkapmoj',
            'aUdZhy6o8F'.split('').reverse().join(''),
            'pCkNjY7dKmohpSoO',
            'kCkuW7C',
            'CMv0DxjUicHMDw5JDgLVBIGPia',
            'aeVdSmk1wa',
            'yM9KEq',
            'kSkpW7BdGmkr',
            'lNr4Da',
            'jCofWRLpW7O',
            'bYVcPwa',
            'ikCHcZvHcl5W5CsTcN3Udp6W'.split('').reverse().join(''),
            'eSkGW7FcGJ7dTCkSoW',
            'wvbpqK0',
            'W4GLW4aIWOm',
            'ALfOu0W',
            'W4VcGX8DWQfQWR0',
            'AmoHWPVdQ8oawCkCi8koemofFa',
            'txbtAKu',
            'asFcVhavd8oxWRbZiwvfhSkav8o5W5f/WRO',
            'v1L2B2e',
            'BmoMWONdPW',
            'GhOyPWyoCB'.split('').reverse().join(''),
            'amkmjuuP',
            'WOTeWQa',
            'ycNdIJddP30',
            'z2v0u2vJB25KCW',
            'W7eyprC',
            'C3rHDgvpyMPLy3q',
            'qhrPy2TLCG',
            'lvWZzCk5',
            'qshomA4y7W'.split('').reverse().join(''),
            'A8kAW43dOe4',
            'w1PqvKnft1zKBM1pEeLouhbvwLLzEfvUCwPkrvLQCuHjCNHLu0vSDL0',
            'ruP5vM4',
            'fcFcVeGid8kdW7a',
            'b20UuSkFWRe',
            'W5u5WPxcSG3cQdNdOG',
            'y8k0WP7dJ2i',
            'WRhcPc5jbW',
            'paIMchPW'.split('').reverse().join(''),
            'CeTHCM4',
            'EKLTA00',
            'xSk5WRldNCkLWRRcLdtdRdJdPCojrq',
            'Dg9gAxHLza',
            'WRSYW5FcTmkY',
            'W6xdPmkUW4ylf8kwW5u',
            'BwfW',
            'wmoNdq',
            'cvhdUSkU',
            'W5CUcYOufG',
            'DK3cMgBdVW',
            'jmoEnSkO',
            'yxbWBhK',
            'y29SB3i',
            'eb7dKdJcOSo4dcmbcvdcIa',
            'seDRv0G',
            'z2v0',
            'DhjHzgLUz1bHAxjZ',
            'ntvTsMLwrxO',
            'C3Lxuxi',
            'sND2D2W',
            'EM5XzLK',
            'W6ldU2BcSZqVW5JcG1hcJmku',
            'yLEQDLA'.split('').reverse().join(''),
            'CSonpmo8WPy',
            'zLLYAMO',
            'C2v0t3b0Aw9U',
            'W6hdOmkUW64ffSkrW5HqW5y',
            'gCkRW6n/W4a',
            'rNLgD0e',
            'WP/cQSkFW4G',
            'vbpcQSkuW7JdQa',
            'AhjLzG',
            'ChvZAa',
            'eq7dTNSV',
            'sCo3f8otWRCqovVcSNtcJahdOCoIwf9xia',
            'fmkGW7RdJ8kL',
            'wvbYswK',
            'Ag1PAhi',
            'BNjRAfm',
            'D8kRW7VdOLJcPCkA',
            'rmk+gSocWQ41W7q',
            'W5/dThFcNJm',
            'qSk3W6BcHa',
            'Aw5PDa',
            'WQeiW7/cLmkgW64Q',
            'fZJdSf8M',
            'CMvZ',
            'W4KTz8oGvq',
            'y29UC3rYDwn0B3i',
            'BgLUzvn0EwXL',
            'tbNcQCkNWPmozqa',
            'u8oQf8oE',
            'qxnYEgO',
            'Ct7cKSkuWRm',
            'E8kGWRDnFG',
            'kmoJWRFdPCogu8k1',
            'K2BgbLw'.split('').reverse().join(''),
            'zgLcseG',
            'hSk5W5f5W6O',
            'CMvKDwnL',
            'ChjPy2vdAgfUz2vqzxjJzw50',
            'q05mzMu',
            'oCkQmHtdVmoDkmo+WO4Y'
        ]
        _0x1d31 = function () {
            return _0x472068
        }
        return _0x1d31()
    }
    let ws = null
    function isEmpty(_0x2de39a) {
        const _0x3e8ad4 = {
            sRiyY: function (_0x15a250, _0x2faacf) {
                return _0x15a250 === _0x2faacf
            },
            OdbQQ: _0x57d6fc(-0x126, -0x1b0, '!bZ['.split('').reverse().join(''), -0xc2, -0x137),
            VUuyp: function (_0x29a864, _0x29e883) {
                return _0x29a864 !== _0x29e883
            }
        }
        function _0x85c810(_0x2ff602, _0x42db12, _0x2044f3, _0x4ed606, _0x5ee768) {
            return _0x3a0c(_0x42db12 - -0x3a5, _0x2044f3)
        }
        function _0x57d6fc(_0x299a62, _0x3fe585, _0x45c172, _0x40c814, _0x10a629) {
            return _0x15ee(_0x299a62 - -0x22e, _0x45c172)
        }
        function _0x1965b8(_0x21286a, _0x59a23a, _0x499e8c, _0x62ffd5, _0x518884) {
            return _0x3a0c(_0x62ffd5 - 0x2f5, _0x59a23a)
        }
        if (Array['isArray'](_0x2de39a) || _0x3e8ad4['sRiyY'](typeof _0x2de39a, _0x3e8ad4['OdbQQ'])) {
            return _0x2de39a['length'] === (0x5bc5e ^ 0x5bc5e)
        } else if (_0x3e8ad4['sRiyY'](typeof _0x2de39a, _0x85c810(-0x217, -0x1be, -0x238, -0xc8, -0x2a2)) && _0x3e8ad4['VUuyp'](_0x2de39a, null)) {
            return Object['keys'](_0x2de39a)['length'] === (0x9abfc ^ 0x9abfc)
        } else if (typeof _0x2de39a == _0x1965b8(0x442, 0x52b, 0x5d5, 0x4eb, 0x5b4)) {
            return !![]
        } else {
            ![]
        }
    }
    async function getKlineData(_0x1bee4a) {
        const _0x39c34f = {
            bzCCq: function (_0x2b791d, _0x58dfde) {
                return _0x2b791d + _0x58dfde
            },
            Iybpp: '&interval='
        }
        var _0x2ef4e2
        const _0x764581 =
            _0x39c34f['bzCCq']('=lobmys?senilk/1v/ipaf/moc.ecnanib.ipaf//:sptth'.split('').reverse().join('') + _0x1bee4a + _0x39c34f['Iybpp'], time) + '005=timil&'.split('').reverse().join('')
        _0x2ef4e2 = 0x7 + 0x4
        var _0x361792 = 0x6 + 0x9
        const _0x174bf3 = await axios['get'](_0x764581)
        _0x361792 = 0x3 + 0x8
        if (_0x174bf3['data']['length'] < (0xc068d ^ 0xc0645) && iskLinel) {
            return []
        }
        return _0x174bf3['data']
    }
    async function upSymbols() {
        const _0x37b163 = { tBhJW: 'piff', aKvNK: 'tradingPairs' }
        var _0x373ba3
        let _0x166585 = null
        _0x373ba3 = _0x37b163['tBhJW']
        if (isEmpty(localStorage['tradingPairs'])) {
            const _0x4119ff = await axios['get']('https://fapi.binance.com/fapi/v1/exchangeInfo')
            _0x166585 = _0x4119ff['data']['symbols']['filter']((_0x1a9466) => _0x1a9466['status'] === 'TRADING' && _0x1a9466['quoteAsset'] === 'USDT')['map']((_0xb886cc) => _0xb886cc['symbol'])
            localStorage['setItem'](_0x37b163['aKvNK'], _0x166585)
        } else {
            if ('YacWw' === 'YacWw') {
                _0x166585 = localStorage['tradingPairs']
            } else {
                return
            }
        }
        return _0x166585
    }
    async function getTradePairs() {
        const _0x2b028e = {
            CNLfe: 'sRhau',
            YPOBM: function (_0xa9b986, _0x115b6a) {
                return _0xa9b986 + _0x115b6a
            },
            FTsPR: function (_0x322cc5, _0x4b2926) {
                return _0x322cc5 ^ _0x4b2926
            }
        }
        const _0x3397fc = await upSymbols()
        const _0x22732e = await axios['get']('rh42/rekcit/1v/ipaf/moc.ecnanib.ipaf//:sptth'.split('').reverse().join(''))
        const _0x4ce3c7 = await axios['get']('https://fapi.binance.com/fapi/v1/premiumIndex')
        const _0x580669 = _0x22732e['data']
            ['filter']((_0xbfdcd0) => _0x3397fc['includes'](_0xbfdcd0['symbol']))
            ['map']((_0x2e0ccc) => {
                if ('sRhau' === _0x2b028e['CNLfe']) {
                    var _0x8d0f20 = 0x6 + 0x5
                    let _0x4b0a2e = _0x4ce3c7['data']['find']((_0x14cf0c) => _0x14cf0c['symbol'] === _0x2e0ccc['symbol']) || {}
                    _0x8d0f20 = 0x6
                    return {
                        symbol: _0x2e0ccc['symbol'],
                        priceChangePercent: _0x2e0ccc['priceChangePercent'],
                        volume: _0x2e0ccc['volume'],
                        quoteVolume: _0x2e0ccc['quoteVolume'],
                        lastFundingRate: _0x2b028e['YPOBM']((_0x4b0a2e['lastFundingRate'] * _0x2b028e['FTsPR'](0xefd9b, 0xefdff))['toFixed'](0x4fa55 ^ 0x4fa53), '%')
                    }
                } else {
                    const _0x12bc27 = _0x53e159[0x0]
                    return _0x494b36['map']((_0x185273) => ((_0x185273 - _0x12bc27) / _0x12bc27) * (0xef451 ^ 0xef435))
                }
            })
            ['sort']((_0xdc0266, _0x232832) => _0x232832['priceChangePercent'] - _0xdc0266['priceChangePercent'])
        return _0x580669
    }
    function calculateEMA(_0x1c6426, _0x145e77) {
        const _0x40502c = {
            XPLtb: _0x50e460(-0x214, -0x171, '(mI]', -0x2ab, -0x28f),
            hLiIb: function (_0x11e7ea, _0x45746c) {
                return _0x11e7ea * _0x45746c
            },
            VcQCV: function (_0x1464a8, _0x5d22d8) {
                return _0x1464a8 - _0x5d22d8
            }
        }
        function _0x50e460(_0x5e1fde, _0x377b2a, _0x103925, _0x2bb01d, _0x263af7) {
            return _0x15ee(_0x5e1fde - -0x3b2, _0x103925)
        }
        const _0x5502ba = (0x5ffb5 ^ 0x5ffb7) / (_0x145e77 + (0x9870e ^ 0x9870f))
        let _0x229d9d = [_0x1c6426[0xa8ec2 ^ 0xa8ec2]]
        function _0x796b92(_0x12c2d5, _0x268896, _0x254bd0, _0x3e09d9, _0x34d3c9) {
            return _0x3a0c(_0x12c2d5 - -0x3cf, _0x268896)
        }
        for (let _0x291b43 = 0x1; _0x291b43 < _0x1c6426['length']; _0x291b43++) {
            if (_0x40502c['XPLtb'] === _0x796b92(-0x37a, -0x3da, -0x288, -0x3ab, -0x34d)) {
                _0x229d9d['push'](_0x40502c['hLiIb'](_0x1c6426[_0x291b43], _0x5502ba) + _0x229d9d[_0x291b43 - 0x1] * _0x40502c['VcQCV'](0x1, _0x5502ba))
            } else {
                return _0x313e6a(_0x2b4ce0, _0x28858f, _0x3aafc5)
            }
        }
        return _0x229d9d
    }
    function calculateSlope(_0x1b959b, _0x4d408a) {
        const _0x3b48fa = {
            LMhMH: function (_0x51a80c, _0x4e7e55) {
                return _0x51a80c + _0x4e7e55
            }
        }
        var _0x1d5a0e = _0x3b48fa['LMhMH'](0x4, 0x9)
        const _0x170713 = _0x1b959b['length']
        _0x1d5a0e = 0x0
        const _0x38c6f0 = _0x1b959b[_0x170713 - 0x1]
        const _0x523201 = _0x1b959b[_0x170713 - (0x64991 ^ 0x64990) - _0x4d408a]
        return (_0x38c6f0 - _0x523201) / _0x4d408a
    }
    function checkTrend(_0x35517d, _0xb37252, _0x21746c, _0x351a11, _0x24a2e0, _0x5b95d0) {
        const _0x210ea4 = {
            kmpnO: function (_0x370c3b, _0x329df8) {
                return _0x370c3b + _0x329df8
            },
            pKarn: function (_0x15116e, _0x366eab) {
                return _0x15116e - _0x366eab
            },
            LsViT: function (_0x2b6870, _0x488ff4) {
                return _0x2b6870 * _0x488ff4
            },
            RaRyw: function (_0x14004c, _0x2dc86e) {
                return _0x14004c / _0x2dc86e
            },
            LoLIO: function (_0xf77a2c, _0x506e1d) {
                return _0xf77a2c * _0x506e1d
            },
            Jwvwl: function (_0xb49c48, _0x3dd2f7) {
                return _0xb49c48 - _0x3dd2f7
            },
            fYrjj: function (_0x5d1edb, _0x3e9d90, _0x4d001c) {
                return _0x5d1edb(_0x3e9d90, _0x4d001c)
            },
            EJyVn: function (_0x30a009, _0x1566a8, _0x52fa36) {
                return _0x30a009(_0x1566a8, _0x52fa36)
            },
            aBPJp: function (_0x3bb568, _0x2bd755, _0x1a9423) {
                return _0x3bb568(_0x2bd755, _0x1a9423)
            },
            JRjLp: function (_0x5a72bb, _0x308b4c) {
                return _0x5a72bb > _0x308b4c
            },
            yHhWh: function (_0x3fa982, _0x315fa0) {
                return _0x3fa982 ^ _0x315fa0
            },
            isjgp: function (_0x3257a7, _0x38a147) {
                return _0x3257a7 > _0x38a147
            },
            wWjpE: function (_0x2e8b73, _0x3a99e2) {
                return _0x2e8b73 > _0x3a99e2
            },
            iBSDy: function (_0x478570, _0xd41b34) {
                return _0x478570 - _0xd41b34
            },
            Njkdj: function (_0x54652e, _0x57ac70) {
                return _0x54652e - _0x57ac70
            }
        }
        var _0x187bcd = 0x0 + 0x2
        const _0x5a0d07 = Math['min'](_0x35517d['length'], _0xb37252['length'], _0x21746c['length'], _0x351a11['length'])
        _0x187bcd = _0x25de2a(-0x330, -0x410, -0x33e, -0x2d3, -0x257)
        function _0x41e348(_0x48d5bf, _0x320f39, _0x54fa64, _0x2115de, _0x387a89) {
            return _0x15ee(_0x54fa64 - -0x2da, _0x387a89)
        }
        function _0x299f7e(_0x2d5208, _0x5dd96f, _0x18e9c0, _0x24ba54, _0x512c10) {
            return _0x15ee(_0x18e9c0 - 0xbb, _0x2d5208)
        }
        function _0x442f63(_0xafd944, _0x54bbcc, _0x1ff635, _0x393324, _0x5f4d6e) {
            return _0x15ee(_0xafd944 - 0x6, _0x393324)
        }
        const _0x5a60b5 = _0x5a0d07 - 0x1
        const _0x3b7b94 = 0x1
        const _0xf1a7dc = _0x35517d['slice'](_0x5a0d07 - spacingThreshold, _0x5a0d07)
        var _0x16c754 = 0x5 + 0x1
        const _0x1c7499 = _0xb37252['slice'](_0x5a0d07 - spacingThreshold, _0x5a0d07)
        _0x16c754 = 0x6 + 0x7
        const _0x53e5d3 = _0x21746c['slice'](_0x5a0d07 - spacingThreshold, _0x5a0d07)
        var _0x31a76c = _0x210ea4['kmpnO'](0x1, 0x8)
        const _0x1cf998 = _0x351a11['slice'](_0x210ea4['pKarn'](_0x5a0d07, spacingThreshold), _0x5a0d07)
        function _0x5d0903(_0x2c1776, _0x2ea41d, _0x2d7eae, _0x223e7e, _0x5381f9) {
            return _0x15ee(_0x2ea41d - 0x371, _0x223e7e)
        }
        _0x31a76c = 0x8 + 0x8
        var _0xce8cb8
        function _0x440783(_0x24e80c, _0x5e6463, _0x181df1, _0x51986f, _0x2fb6ca) {
            return _0x3a0c(_0x24e80c - -0x31a, _0x181df1)
        }
        const _0x5e28f7 = _0xf1a7dc['reduce']((_0x36b668, _0x32a3f9) => _0x36b668 + _0x32a3f9, 0x0) / _0xf1a7dc['length']
        function _0xd5e8dc(_0x17620f, _0x33a8cf, _0x4812b8, _0x451b6c, _0x1c5f63) {
            return _0x15ee(_0x1c5f63 - -0xb7, _0x4812b8)
        }
        _0xce8cb8 = _0x5d0903(0x4fc, 0x546, 0x517, '\u0028\u006d\u0049\u005d', 0x4a6)
        const _0x51e320 = _0x1c7499['reduce']((_0x218bab, _0x42c781) => _0x218bab + _0x42c781, 0x0) / _0x1c7499['length']
        function _0x25de2a(_0x16e6a1, _0x35bb49, _0x4ad654, _0x4f31cf, _0x4f9ea0) {
            return _0x3a0c(_0x4ad654 - -0x3a1, _0x4f31cf)
        }
        const _0xb46fae = _0x53e5d3['reduce']((_0x280a61, _0x35b238) => _0x280a61 + _0x35b238, 0x0) / _0x53e5d3['length']
        const _0x185c4d = _0x1cf998['reduce']((_0x2f3aae, _0x38e3f5) => _0x2f3aae + _0x38e3f5, 0x1d047 ^ 0x1d047) / _0x1cf998['length']
        const _0x4764f0 = _0x210ea4['LsViT'](Math['abs'](_0x210ea4['RaRyw'](_0x210ea4['pKarn'](_0x5e28f7, _0x51e320), _0x51e320)), 0x61967 ^ 0x61903)
        const _0x2a3bce = _0x210ea4['LoLIO'](Math['\u0061\u0062\u0073'](_0x210ea4['RaRyw'](_0x51e320 - _0xb46fae, _0xb46fae)), 0x64)
        var _0x7e5316
        function _0x49085f(_0x974e38, _0x1f55b5, _0x30a079, _0x1f171a, _0x401e78) {
            return _0x3a0c(_0x30a079 - 0x165, _0x1f55b5)
        }
        const _0x53d0ca = Math['abs'](_0x210ea4['Jwvwl'](_0xb46fae, _0x185c4d) / _0x185c4d) * 0x64
        _0x7e5316 = 0x5
        var _0x1e4f15
        const _0x3f507c = _0x210ea4['fYrjj'](calculateSlope, _0x35517d, spacingSlopeld)
        _0x1e4f15 = _0x299f7e('iK8H', 0x17d, 0x117, 0x18b, 0x199)
        const _0x478f90 = _0x210ea4['EJyVn'](calculateSlope, _0xb37252, spacingSlopeld)
        var _0x3984d9 = 0x8 + 0x8
        const _0x161c4b = _0x210ea4['aBPJp'](calculateSlope, _0x21746c, spacingSlopeld)
        _0x3984d9 = 0x5
        const _0x2339f1 = calculateSlope(_0x351a11, spacingSlopeld)
        const _0x3c97a3 =
            _0x210ea4['JRjLp'](_0x5e28f7, _0x51e320) &&
            _0x51e320 > _0xb46fae &&
            _0x210ea4['JRjLp'](_0xb46fae, _0x185c4d) &&
            _0x4764f0 > _0x3b7b94 &&
            _0x2a3bce > _0x3b7b94 &&
            _0x53d0ca > _0x3b7b94 &&
            _0x3f507c > _0x210ea4['yHhWh'](0x89f61, 0x89f61) &&
            _0x210ea4['JRjLp'](_0x478f90, 0x0) &&
            _0x161c4b > (0x4b4ca ^ 0x4b4ca) &&
            _0x210ea4['isjgp'](_0x2339f1, 0x0)
        const _0x2ad1e1 =
            _0x5e28f7 < _0x51e320 &&
            _0x51e320 < _0xb46fae &&
            _0xb46fae < _0x185c4d &&
            _0x4764f0 > _0x3b7b94 &&
            _0x210ea4['wWjpE'](_0x2a3bce, _0x3b7b94) &&
            _0x53d0ca > _0x3b7b94 &&
            _0x3f507c < 0x0 &&
            _0x478f90 < 0x0 &&
            _0x161c4b < 0x0 &&
            _0x2339f1 < _0x210ea4['yHhWh'](0x5a099, 0x5a099)
        function _0x41862e(_0x4d0efd, _0x3157ff, _0x266524, _0x314065, _0x422c1a) {
            return _0x3a0c(_0x314065 - -0x123, _0x266524)
        }
        function _0x20b1ae(_0x194106, _0x4524db, _0xa1203d, _0x587849, _0x5c8a51) {
            return _0x3a0c(_0x5c8a51 - 0x364, _0x194106)
        }
        const _0x958d6a =
            !_0x3c97a3 &&
            !_0x2ad1e1 &&
            Math['abs'](_0x210ea4['iBSDy'](_0x5e28f7, _0x51e320)) < 0.005 * _0x24a2e0 &&
            Math['abs'](_0x51e320 - _0xb46fae) < 0.005 * _0x24a2e0 &&
            Math['abs'](_0x210ea4['Njkdj'](_0xb46fae, _0x185c4d)) < 0.005 * _0x24a2e0
        if (_0x3c97a3) {
            if (_0x41862e(-0x5b, -0x72, -0x125, -0xf6, -0x190) === _0x25de2a(-0x459, -0x458, -0x37b, -0x436, -0x291)) {
                return ![]
            } else {
                return { res: _0x25de2a(-0x2df, -0x415, -0x342, -0x2fa, -0x2b0) }
            }
        } else if (_0x2ad1e1) {
            return { res: _0x5d0903(0x56a, 0x4a0, 0x4e1, '9[@z', 0x3ee) }
        } else if (_0x958d6a) {
            if (_0x41e348(-0xed, -0xcc, -0x19b, -0x11f, 'SaTa') !== _0x5d0903(0x409, 0x4b9, 0x4ab, '6^pH', 0x47f)) {
                let _0x36c682 = _0x40a471['parse'](_0x748540['stringify'](_0x48aa82))
                _0x36c682 = { ..._0x36c682, series: _0x1fa1cc['filter']((_0x150c86) => _0x150c86['strength'] >= _0x3057ae) }
                _0x3789f6 = _0x15117e['\u0069\u006e\u0069\u0074'](_0x1f0e35['current'])
                _0x3532ba['setOption'](_0x36c682, !![])
                _0x2de1e3(_0x21b892)
            } else {
                return { res: _0x25de2a(-0x17e, -0x1a5, -0x222, -0x2b5, -0x2c6) }
            }
        }
        return { res: _0x299f7e('UXgc', 0x218, 0x253, 0x22e, 0x2ac) }
    }
    function downloadTradingViewList(_0x3be220) {
        const _0x1e68f7 = {
            xXxxx: function (_0x36d908, _0x3b72ca) {
                return _0x36d908 + _0x3b72ca
            },
            MpSjE: function (_0x2cf872, _0x38fe80) {
                return _0x2cf872 + _0x38fe80
            },
            LrIqZ: _0x291c1f(0x236, 0x316, 0x385, 0x3fe, 0x3d2),
            jxfcd: _0x148733(-0x7e, -0x13a, -0x17, -0x1a, '55p0')
        }
        const _0x34a303 = list['map']((_0x407694) => _0x148733(-0xd4, -0xf0, -0xd1, -0x39, '2xtN') + _0x407694['name'] + '.P')['join'](',')
        var _0x432911 = 0x7 + 0x3
        const _0x406243 = new Date()
        _0x432911 = _0x1e68f7['\u0078\u0058\u0078\u0078\u0078'](0x5, 0x7)
        const _0x5d653d = _0x406243['getFullYear']() + '-' + (_0x406243['getMonth']() + 0x1)['toString']()['padStart'](0x2, '0') + '-' + _0x406243['getDate']()['toString']()['padStart'](0x2, '0')
        var _0x264b85 = _0x1e68f7['MpSjE'](0x5, 0x3)
        const _0x257359 =
            _0x406243['getHours']()['toString']()['padStart'](0x2, '0') +
            ':' +
            _0x406243['getMinutes']()
                ['toString']()
                ['padStart'](0x1cc07 ^ 0x1cc05, '0') +
            ':' +
            _0x406243['getSeconds']()['toString']()['padStart'](0x2, '0')
        _0x264b85 = 0x7
        var _0x30d831
        function _0x1f62f5(_0x1930ac, _0x33da8a, _0x102f5e, _0x4f4d8b, _0x1076f1) {
            return _0x3a0c(_0x1076f1 - 0x303, _0x33da8a)
        }
        const _0x1d286a = _0x5d653d + '\x20' + _0x257359
        _0x30d831 = 0x1 + 0x1
        function _0x148733(_0x34bc02, _0x23ddb7, _0x326988, _0x47d4a3, _0x3f8496) {
            return _0x15ee(_0x34bc02 - -0x1fb, _0x3f8496)
        }
        var _0x4f7aca
        function _0x101fe8(_0x5828d0, _0x2e2c31, _0x592b6f, _0x477fba, _0x24f8a9) {
            return _0x15ee(_0x5828d0 - -0x1de, _0x477fba)
        }
        const _0x52e739 = new Blob([_0x34a303], { type: _0x1e68f7['LrIqZ'] })
        _0x4f7aca = 0x5
        var _0x660907
        const _0xfa542b = URL['createObjectURL'](_0x52e739)
        _0x660907 = _0x1e68f7['jxfcd']
        const _0x417735 = document['createElement']('a')
        function _0x291c1f(_0x212921, _0x177e53, _0x3c720f, _0x12c43a, _0x5c5926) {
            return _0x3a0c(_0x177e53 - 0x1db, _0x212921)
        }
        _0x417735['href'] = _0xfa542b
        _0x417735['download'] = _0x268fae(0x2d8, 0x23d, '$#ft'.split('').reverse().join(''), 0x3a4, 0x31d) + _0x1d286a + _0x291c1f(0x1b1, 0x26c, 0x34d, 0x303, 0x31b)
        function _0x268fae(_0x155687, _0x2830ac, _0x22f067, _0x17255c, _0x560bea) {
            return _0x15ee(_0x155687 - 0x110, _0x22f067)
        }
        document['body']['appendChild'](_0x417735)
        _0x417735['click']()
        document['body']['removeChild'](_0x417735)
        URL['revokeObjectURL'](_0xfa542b)
    }
    function calculatePercentageChanges(_0x410860) {
        const _0x3b754b = _0x410860[0x0]
        return _0x410860['map']((_0x1ae77f) => ((_0x1ae77f - _0x3b754b) / _0x3b754b) * (0xef451 ^ 0xef435))
    }
    function timeck() {
        const _0x51fdc2 = {
            NupXa: _0x22c887(-0xe1, -0x15d, -0x60, -0xd4, -0xfa),
            HGkWH: function (_0x4b6b99, _0x2924f6) {
                return _0x4b6b99 * _0x2924f6
            },
            kFtyy: function (_0x49bab0, _0x4ccc9b) {
                return _0x49bab0 ^ _0x4ccc9b
            }
        }
        function _0x840aff(_0x56c9dd, _0x2b2a9b, _0x196990, _0x3b31f8, _0x3eeca7) {
            return _0x15ee(_0x196990 - -0x1d7, _0x3b31f8)
        }
        function _0x22c887(_0xda2df1, _0x3aee8b, _0x605a99, _0x500e86, _0x5a1220) {
            return _0x3a0c(_0x500e86 - -0xf7, _0x605a99)
        }
        function _0x5e20e4(_0x20d673, _0x1d44ef, _0x82e0a0, _0x5d90d4, _0x43dae5) {
            return _0x3a0c(_0x20d673 - 0x252, _0x43dae5)
        }
        if (time == '1h') {
            if (_0x840aff(-0x96, 0x2, -0x34, '7Gx]', 0x8c) !== _0x5e20e4(0x44a, 0x462, 0x400, 0x50c, 0x4fe)) {
                return _0x51fdc2['HGkWH'](_0x51fdc2['kFtyy'](0x54ad4, 0x54acc), 0x7679e ^ 0x76799)
            } else {
                return { res: _0x51fdc2['NupXa'] }
            }
        } else if (time == 'h4'.split('').reverse().join('')) {
            return ((0x66cf6 ^ 0x66cee) / (0x65007 ^ 0x65003)) * (0x51533 ^ 0x51534)
        } else {
            return 0x7
        }
    }
    function formatNumber(_0x490586) {
        function _0x5362d3(_0x482745, _0x2e9c82, _0x3fe1a7, _0x2d6a90, _0x209879) {
            return _0x3a0c(_0x2e9c82 - -0xd3, _0x482745)
        }
        function _0x59f440(_0xdb1404, _0x312656, _0x567fac, _0x6b693d, _0x3555e2) {
            return _0x3a0c(_0xdb1404 - 0xb4, _0x312656)
        }
        const _0x16ff99 = {
            LsvlG: function (_0xdc7a3b, _0x4ea395) {
                return _0xdc7a3b === _0x4ea395
            },
            CkWZn: function (_0x1cb958, _0x240491) {
                return _0x1cb958 - _0x240491
            },
            WEFbe: function (_0x4aa6e5, _0x580dfd) {
                return _0x4aa6e5 === _0x580dfd
            },
            tfykG: function (_0x53ecb4, _0x5b5fae) {
                return _0x53ecb4 == _0x5b5fae
            },
            RNyof: function (_0x28ba33, _0x3e3d60) {
                return _0x28ba33 / _0x3e3d60
            },
            qPCfP: _0x5362d3(-0x1ba, -0xb9, 0x2f, -0x13a, -0xd7)
        }
        function _0x53e9e8(_0x2c077e, _0x30f835, _0x4829f9, _0x1448c6, _0x1cb335) {
            return _0x3a0c(_0x1cb335 - 0x1d, _0x2c077e)
        }
        function _0x3c3b6a(_0x301c0e, _0xe1327f, _0x121e08, _0x8ddbd0, _0x11a5f7) {
            return _0x3a0c(_0x121e08 - -0x6e, _0x11a5f7)
        }
        if (_0x490586 >= 0x5f5e100) {
            return (_0x490586 / 0x5f5e100)['toFixed'](0x2) + '亿'
        } else if (_0x490586 >= (0xb3624 ^ 0xb1134)) {
            if (_0x5362d3(-0x15c, -0x95, -0x73, -0x13e, -0x2f) !== _0x5362d3(-0xfa, 0x6, 0x5b, 0x8a, -0x2e)) {
                return _0x16ff99['RNyof'](_0x490586, 0x2710)['toFixed'](0x2) + '万'
            } else {
                const _0x4c7c4d = _0x140e9f[_0x385266]
                const _0x35d463 = ZrfzPd['LsvlG'](_0x4c7c4d[0x0], _0x5844c3['fromCharCode'](0x2e)) ? _0x4c7c4d['slice'](0x1) : _0x4c7c4d
                const _0x2492d9 = ZrfzPd['CkWZn'](_0x47bffb['length'], _0x35d463['length'])
                const _0x55a568 = _0x3d6c9c['indexOf'](_0x35d463, _0x2492d9)
                const _0x543821 = _0x55a568 !== -0x1 && ZrfzPd['WEFbe'](_0x55a568, _0x2492d9)
                if (_0x543821) {
                    if (ZrfzPd['tfykG'](_0x3e2db1['length'], _0x4c7c4d['length']) || _0x4c7c4d['indexOf']('.') === 0x0) {
                        _0x452814 = !![]
                    }
                }
            }
        } else {
            if (_0x16ff99['qPCfP'] !== _0x3c3b6a(0x37, -0x2, -0x54, -0x7b, 0x7c)) {
                if (_0x4c9391) {
                    const _0x4f7cc1 = _0x353805['apply'](_0xf1f024, arguments)
                    _0x5b2cb1 = null
                    return _0x4f7cc1
                }
            } else {
                return _0x490586['toString']()
            }
        }
    }
    async function formatData() {
        const _0x230701 = {
            dGRao: function (_0x1d9daf, _0x5cb0d2) {
                return _0x1d9daf(_0x5cb0d2)
            },
            ZPFoi: function (_0x259cbc, _0x1495d4) {
                return _0x259cbc + _0x1495d4
            },
            nRhYT: function (_0x459c65, _0x496d8b) {
                return _0x459c65 == _0x496d8b
            },
            IChVA: function (_0x57add1, _0x3925ab, _0x1a0ccf) {
                return _0x57add1(_0x3925ab, _0x1a0ccf)
            },
            KljlH: function (_0x1e97ed, _0x49c322) {
                return _0x1e97ed + _0x49c322
            },
            bXJxl: function (_0x999dd, _0x278c52) {
                return _0x999dd < _0x278c52
            },
            CSCBU: function (_0x532c7c, _0x348f4f) {
                return _0x532c7c / _0x348f4f
            },
            wSwtF: function (_0x4fc7ff, _0x446b52) {
                return _0x4fc7ff - _0x446b52
            },
            WFZvI: 'line',
            QARwP: function (_0x304a89, _0xf6ba8f) {
                return _0x304a89 - _0xf6ba8f
            },
            tymcd: function (_0x21fbdd) {
                return _0x21fbdd()
            },
            YEpGa: 'value'
        }
        _0x230701['dGRao'](setLIist, [])
        var _0x1d699b
        const _0x254aef = await getTradePairs()
        _0x1d699b = _0x230701['\u004b\u006c\u006a\u006c\u0048'](0x8, 0x1)
        const _0x4c739a = await Promise['all'](
            _0x254aef['map'](async (_0x360ac3) => {
                const _0x4e394c = {
                    tvCwl: function (_0x1d819e, _0x1960b1) {
                        return _0x1d819e - _0x1960b1
                    }
                }
                var _0x2fd9bb
                const _0x49a63e = await _0x230701['dGRao'](getKlineData, _0x360ac3['symbol'])
                _0x2fd9bb = _0x230701['ZPFoi'](0x3, 0x6)
                if (_0x230701['nRhYT'](_0x49a63e['length'], 0x8ff63 ^ 0x8ff63)) {
                    if ('WcHfM' !== 'WcHfM') {
                        _0x276e1c['push'](_0x2316ed[_0x52c73c] * _0x341bf5 + _0x2e0016[_0x1d694a - 0x1] * _0x4e394c['tvCwl'](0x1, _0x62cd6b))
                    } else {
                        return
                    }
                }
                var _0x1df4bc = 0x3 + 0x1
                const _0x1824e2 = _0x49a63e['map']((_0x43dcec) => parseFloat(_0x43dcec[0x750b1 ^ 0x750b5]))
                _0x1df4bc = 0x6 + 0x9
                const _0x2ce92f = calculateEMA(_0x1824e2, 0x15)
                const _0x1012c5 = calculateEMA(_0x1824e2, 0x37)
                const _0x1f3377 = _0x230701['IChVA'](calculateEMA, _0x1824e2, 0x64)
                var _0x5dc1a5
                const _0xb9005c = calculateEMA(_0x1824e2, 0xb32d2 ^ 0xb321a)
                _0x5dc1a5 = _0x230701['KljlH'](0x2, 0x7)
                const _0x3a187f = calculatePercentageChanges(_0x1824e2['slice'](_0x1824e2['length'] - timeck()))
                const _0x5e4868 = _0x1824e2[_0x1824e2['length'] - 0x1]
                const _0x4abbab = checkTrend(_0x2ce92f, _0x1012c5, _0x1f3377, _0xb9005c, _0x5e4868, _0x360ac3['symbol'])
                var _0x72f05b
                const _0x4634e3 = _0x230701['bXJxl'](_0x230701['CSCBU'](Math['abs'](_0x5e4868 - _0x2ce92f['pop']()), _0x5e4868), 0.01)
                _0x72f05b = 0x4
                const _0x3fca60 = Math['abs'](_0x230701['wSwtF'](_0x5e4868, _0x1012c5['pop']())) / _0x5e4868 < 0.01
                var _0xaf5497
                const _0x5c28a3 = Math['max'](..._0x3a187f)
                _0xaf5497 = 0x2 + 0x5
                var _0x1548e9
                const _0x4c2599 = Math['min'](..._0x3a187f)
                _0x1548e9 = _0x230701['ZPFoi'](0x9, 0x4)
                setLIist((_0x482084) => [
                    ..._0x482084,
                    {
                        id: _0x482084['length'] + (0x3e8f6 ^ 0x3e8f7),
                        name: _0x360ac3['symbol'],
                        trend: _0x4abbab['res'],
                        priceChangePercent: _0x360ac3['priceChangePercent'],
                        quoteVolume: _0x360ac3['quoteVolume'],
                        lastFundingRate: _0x360ac3['lastFundingRate'],
                        volume: _0x360ac3['volume'],
                        strength: _0x5c28a3 - _0x4c2599,
                        isNearEMA21: _0x4634e3,
                        isNearEMA55: _0x3fca60
                    }
                ])
                return {
                    name: _0x360ac3['symbol'],
                    type: _0x230701['WFZvI'],
                    triggerLineEvent: !![],
                    data: _0x3a187f,
                    showSymbol: ![],
                    lineStyle: { color: '\u0023\u0063\u0063\u0063', width: 0x3 },
                    emphasis: { focus: 'series' },
                    strength: _0x230701['QARwP'](_0x5c28a3, _0x4c2599)
                }
            })
        )
        var _0x183186
        const _0x3e77ef = _0x4c739a['filter']((_0x58e2c2) => _0x58e2c2)
        _0x183186 = 'dbpq'
        setOptions({
            grid: { top: 0x10, bottom: 0x10, left: 0x10, right: 0x10, containLabel: !![] },
            xAxis: { type: 'category', data: Array['from']({ length: _0x230701['tymcd'](timeck) }, (_0x403e14, _0x5567da) => 'T' + (_0x5567da + 0x1)), '\u0073\u0068\u006f\u0077': ![] },
            '\u0079\u0041\u0078\u0069\u0073': { type: _0x230701['YEpGa'], axisLabel: { formatter: '{value}\x20%' } },
            animation: ![],
            series: _0x3e77ef
        })
        _0x230701['dGRao'](setSeries, _0x3e77ef)
    }
    var _0x1a = 0x2 + 0x3
    const useUpdateEffect = (_0x426cf6, _0x15aa90) => {
        const _0x233c5e = useRef(![])
        useEffect(() => {
            if (_0x233c5e['current']) _0x426cf6()
            else _0x233c5e['current'] = !![]
        }, _0x15aa90)
    }
    _0x1a = 0x0 + 0x3
    useUpdateEffect(() => {
        function _0x356ae3(_0x1b8a27, _0x33ba0e, _0x7ce2ba, _0x5e5bfc, _0x56a4b1) {
            return _0x15ee(_0x7ce2ba - 0x12c, _0x5e5bfc)
        }
        const _0x5b8902 = {
            MySdq: function (_0x492aae, _0x3835de) {
                return _0x492aae == _0x3835de
            },
            OrBHs: function (_0xa742c3, _0x356ea6) {
                return _0xa742c3(_0x356ea6)
            }
        }
        let _0x35ac20 = JSON['parse'](JSON['stringify'](options))
        chartDom = echarts['init'](chart['current'])
        function _0x37ac55(_0xe88424, _0x3bda40, _0x541b5e, _0x58a9e7, _0xf3149b) {
            return _0x15ee(_0xf3149b - 0x1e7, _0x541b5e)
        }
        chartDom['setOption']({ ..._0x35ac20, series: series['filter']((_0x3bf2e3) => _0x3bf2e3['strength'] > wave) })
        chartDom['on'](_0x356ae3(0x1fc, 0x325, 0x2dd, 'KKX!', 0x25e), function (_0x1d8cf8) {
            function _0x223fa8(_0x51568f, _0xfcb66f, _0x4a79b7, _0x6ace37, _0x24214e) {
                return _0x15ee(_0xfcb66f - 0x218, _0x24214e)
            }
            function _0x1d68f0(_0x6e2829, _0x1c384e, _0x56e202, _0x522a3c, _0x13f941) {
                return _0x3a0c(_0x1c384e - 0x105, _0x13f941)
            }
            function _0x408618(_0x3d5ece, _0x3b2813, _0x41dd6d, _0x11e210, _0x546e58) {
                return _0x15ee(_0x3b2813 - -0xea, _0x3d5ece)
            }
            if (_0x223fa8(0x3b8, 0x370, 0x42f, 0x36c, '%%Vj') !== _0x1d68f0(0x170, 0x211, 0x1ed, 0x1c9, 0x271)) {
                return
            } else {
                setSeriesIndex(_0x1d8cf8['seriesIndex'])
                options['series'] = chartDom['getOption']()['series']
                options['series'][_0x1d8cf8['seriesIndex']]['lineStyle']['color'] = _0x223fa8(0x1f0, 0x2f3, 0x360, 0x3d3, '[Zb!')
                chartDom['setOption'](options)
            }
        })
        chartDom['on'](_0x356ae3(0x16e, 0x34e, 0x24b, 'u7gM', 0x2b1), function (_0x34a5a5) {
            function _0x288313(_0x51c64a, _0x3453e6, _0x539770, _0x3e43b4, _0xad9bb7) {
                return _0x15ee(_0x51c64a - 0x13b, _0xad9bb7)
            }
            function _0x4812b6(_0x4589c8, _0x23f972, _0x49bd99, _0x5a16cd, _0x5c43b0) {
                return _0x3a0c(_0x5c43b0 - -0x179, _0x23f972)
            }
            const _0x5915db = {
                '\u0068\u0064\u0077\u0048\u0053': function (_0x5c9412, _0x3bcdd3) {
                    return _0x5b8902['MySdq'](_0x5c9412, _0x3bcdd3)
                },
                nOhEz: function (_0x5b9f20, _0xd153c4) {
                    return _0x5b9f20 ^ _0xd153c4
                },
                lKsDL: function (_0x3938a5, _0x2e2677) {
                    return _0x3938a5 * _0x2e2677
                }
            }
            function _0x32f603(_0x234c7a, _0x5be69e, _0x5afb58, _0x2cccfe, _0x8c6c9f) {
                return _0x15ee(_0x234c7a - 0x239, _0x8c6c9f)
            }
            if (_0x32f603(0x23c, 0x1e5, 0x21c, 0x30a, 'uNo]') === _0x32f603(0x404, 0x324, 0x315, 0x35e, 'MaB8')) {
                _0x5b8902['OrBHs'](setSeriesIndex, -(0x9cbef ^ 0x9cbee))
                options['series'] = chartDom['getOption']()['series']
                options['series'][_0x34a5a5['seriesIndex']]['lineStyle']['color'] = _0x4812b6(-0x1d4, -0xd1, -0x6f, -0x1ef, -0x10b)
                chartDom['setOption'](options)
            } else {
                if (_0x5915db['hdwHS'](_0x4d97a9, '1h')) {
                    return (0x54ad4 ^ 0x54acc) * _0x5915db['nOhEz'](0x7679e, 0x76799)
                } else if (_0x41a8db == '4h') {
                    return _0x5915db['lKsDL']((0x66cf6 ^ 0x66cee) / (0x65007 ^ 0x65003), 0x51533 ^ 0x51534)
                } else {
                    return 0x7
                }
            }
        })
    }, [options])
    useEffect(() => {
        formatData()
    }, [time, iskLinel])
    function handleChange(_0x4d333c) {
        function _0x434f8d(_0x3a406c, _0x41e48d, _0xb20681, _0x16cd13, _0x2f90bc) {
            return _0x15ee(_0xb20681 - 0x151, _0x41e48d)
        }
        setLIist([])
        setTime(_0x4d333c)
        localStorage['setItem'](_0x434f8d(0x175, 'Xc1b', 0x1e4, 0x11b, 0x1dc), _0x4d333c)
    }
    function onSelect(_0xf22b55) {
        const _0x5de7ed = {
            iswAr: function (_0x233481, _0x3743c6) {
                return _0x233481(_0x3743c6)
            }
        }
        let _0x4f9fc2 = JSON['parse'](JSON['stringify'](options))
        _0x4f9fc2 = { ..._0x4f9fc2, series: series['filter']((_0x4280f5) => _0x4280f5['strength'] >= _0xf22b55) }
        chartDom = echarts['init'](chart['current'])
        chartDom['setOption'](_0x4f9fc2, !![])
        _0x5de7ed['iswAr'](setWave, _0xf22b55)
    }
    function placeAnOrder(_0x4b9c95) {
        function _0x304fde(_0x4ed805, _0x3908c5, _0x47903a, _0xf43935, _0x3faa72) {
            return _0x3a0c(_0x3908c5 - -0x2e, _0x4ed805)
        }
        const _0x118983 = {
            svzda: _0x19ea41(0x3cc, 0x36f, 0x2d2, 'SaTa', 0x1e2),
            IfLPV: function (_0x45d59d, _0x1dea24) {
                return _0x45d59d(_0x1dea24)
            },
            JDMyO: _0x19ea41(0x22b, 0x283, 0x1cc, '^Hu(', 0x111),
            lplzE: function (_0x258cb8, _0x4ae765) {
                return _0x258cb8 !== _0x4ae765
            },
            VEEdH: function (_0x1f3cbf, _0x382368) {
                return _0x1f3cbf + _0x382368
            },
            TBGAb: function (_0x20557e, _0xf102b2) {
                return _0x20557e ^ _0xf102b2
            },
            TvUjU: _0x855e2e(-0xd5, 0x1, -0x5b, 0x67, -0x45)
        }
        var _0xc9044c
        let _0x274d76 = _0x4b9c95['toLowerCase']()
        function _0x23cb49(_0x48f335, _0x1034dd, _0x202829, _0xedbb98, _0x334155) {
            return _0x15ee(_0x334155 - -0x2b3, _0x202829)
        }
        function _0x208527(_0xf5de4d, _0x1ad2f5, _0x3c4b3a, _0x66675b, _0x5c8280) {
            return _0x3a0c(_0x66675b - -0x1ba, _0x3c4b3a)
        }
        _0xc9044c = 0x7 + 0x1
        if (ws) {
            if (_0x855e2e(0x7c, 0x1, -0x56, 0x79, -0xad) !== _0x118983['TvUjU']) {
                const _0x2a9a85 = _0x3338b8
                    ? function () {
                          if (_0x188c39) {
                              const _0x378854 = _0x59eeea['apply'](_0x2edba2, arguments)
                              _0x282e67 = null
                              return _0x378854
                          }
                      }
                    : function () {}
                _0x10f1f0 = ![]
                return _0x2a9a85
            } else {
                ws['close']()
            }
        }
        function _0xda7b02(_0x788471, _0x59a7d1, _0x33df35, _0x409f7a, _0x4b0bfe) {
            return _0x15ee(_0x33df35 - 0x3c2, _0x59a7d1)
        }
        ws = new WebSocket(_0x23cb49(-0x229, -0x1b0, '7Gx]', -0x8f, -0x152) + _0x274d76 + _0x855e2e(0x44, 0x47, -0x31, 0xa8, -0x38))
        function _0x855e2e(_0x29726c, _0x5ce898, _0x25f160, _0x59abcc, _0x54764a) {
            return _0x3a0c(_0x5ce898 - -0x5f, _0x25f160)
        }
        function _0x19ea41(_0x5c314a, _0x3967c2, _0x414a39, _0x5f17fa, _0x15beb0) {
            return _0x15ee(_0x414a39 - 0xfc, _0x5f17fa)
        }
        ws['onmessage'] = (_0x3ab8ea) => {
            function _0x3a389c(_0x3c0538, _0x3e3ab0, _0x3feaf7, _0x5d4526, _0x3bc109) {
                return _0x15ee(_0x5d4526 - 0x3dc, _0x3bc109)
            }
            function _0x5d2ce3(_0x42ef75, _0x519a20, _0x78c3c9, _0x1d3fd4, _0x507d60) {
                return _0x15ee(_0x519a20 - -0x243, _0x507d60)
            }
            function _0x452a6c(_0x3f77fd, _0x144df4, _0x2e552c, _0x259bf3, _0x117b0e) {
                return _0x15ee(_0x144df4 - 0x3b, _0x259bf3)
            }
            function _0x122c1a(_0x4170db, _0x594d5d, _0x120c52, _0x369485, _0x1c47b7) {
                return _0x3a0c(_0x120c52 - 0x61, _0x369485)
            }
            if (_0x122c1a(0x155, 0x14, 0xd0, 0x35, 0xbe) !== _0x118983['svzda']) {
                let _0x47c90d = JSON['parse'](_0x3ab8ea['data'])
                let _0x2c06c7 = _0x118983['IfLPV'](parseFloat, _0x47c90d['c'])
                let _0x406c60 = form['getFieldValue'](_0x3a389c(0x5da, 0x4ee, 0x54c, 0x554, 'UXgc'))
                var _0x3671ec
                let _0x296ace = form['getFieldValue'](_0x118983['JDMyO'])
                _0x3671ec = 0x8 + 0x5
                if (!_0x406c60 || !_0x296ace) {
                    if (_0x118983['lplzE'](_0x3a389c(0x3b7, 0x4cd, 0x435, 0x437, '7Gx]'), _0x3a389c(0x51d, 0x496, 0x4c8, 0x446, 'u7gM'))) {
                        return
                    } else {
                        if (_0x16b328) {
                            const _0x45703b = _0x465fd1['apply'](_0x2e4a4c, arguments)
                            _0x4eb92b = null
                            return _0x45703b
                        }
                    }
                }
                let _0x410ad4 = _0x2c06c7['toString']()['split']('.')[0x1]['length']
                var _0x27fe01 = _0x118983['VEEdH'](0x1, 0x5)
                let _0x10db22 = (_0x2c06c7 * (_0x118983['TBGAb'](0x4969c, 0x4969d) - _0x406c60 / (0x9fb28 ^ 0x9fb4c)))['toFixed'](_0x410ad4)
                _0x27fe01 = 0x9
                form['setFieldsValue']({ marketPrice: _0x2c06c7, position: ((_0x296ace / _0x406c60) * _0x118983['TBGAb'](0x80c43, 0x80c27))['toFixed'](0x8e8f3 ^ 0x8e8f1), stopPrice: _0x10db22 })
            } else {
                return _0x5279db(_0xa80c76, _0x901e4e, _0x5aca29)
            }
        }
    }
    function onValuesChange(_0x2e077a) {
        const _0x1b11fd = {
            jjLAR: function (_0x9dd6a8, _0x3ac254) {
                return _0x9dd6a8 ^ _0x3ac254
            },
            znqfY: _0x313446(-0x258, -0x33d, -0x308, -0x29a, '55p0')
        }
        var _0x5a1b38 = 0x9 + 0x9
        const _0x43ac0e = Object['keys'](_0x2e077a)[_0x1b11fd['jjLAR'](0xc3269, 0xc3269)]
        _0x5a1b38 = _0x1b11fd['znqfY']
        var _0x3e89fd
        function _0x313446(_0x5018c8, _0x1aa8c9, _0x2bc5eb, _0x28394e, _0x4f376b) {
            return _0x15ee(_0x28394e - -0x354, _0x4f376b)
        }
        const _0x2eca21 = _0x2e077a[_0x43ac0e]
        _0x3e89fd = 0x1 + 0x6
    }
    const newSeries = series['filter']((_0xaa00e7) => _0xaa00e7['strength'] >= wave)
    function _0x538651(_0x161549) {
        function _0x17fdf5(_0x289399, _0xb7dcca, _0x40d7f6, _0x48d107, _0x2bf1d5) {
            return _0x3a0c(_0x2bf1d5 - -0x1c7, _0xb7dcca)
        }
        function _0x19f1a4(_0x9a29c7, _0x380839, _0x334ead, _0x1e846a, _0x2b7967) {
            return _0x15ee(_0x9a29c7 - -0x125, _0x1e846a)
        }
        function _0x18d341(_0x5ceddd, _0x1c45fd, _0x52fe4a, _0x4e053e, _0x5264d2) {
            return _0x15ee(_0x4e053e - -0xd8, _0x52fe4a)
        }
        const _0x392c7b = {
            phmUV: function (_0x43b972, _0x4b06ff) {
                return _0x43b972 + _0x4b06ff
            },
            iIFPp: _0x2f628c(0xa9, 0x112, 0xda, 0x41, -0x48),
            Wfzfi: function (_0x13fb50, _0xe38b10) {
                return _0x13fb50 - _0xe38b10
            },
            MZlHA: function (_0x4ec7d7, _0xa470c3) {
                return _0x4ec7d7 - _0xa470c3
            },
            jWjzV: function (_0x103499, _0x46988c) {
                return _0x103499 + _0x46988c
            },
            qssSx: function (_0x3d6c98, _0x275b8f) {
                return _0x3d6c98 / _0x275b8f
            },
            OxgdO: function (_0x4c13d6, _0x4d8dee) {
                return _0x4c13d6 ^ _0x4d8dee
            },
            YBVdo: function (_0x5381ef, _0x44b8c6) {
                return _0x5381ef * _0x44b8c6
            },
            nbTCN: function (_0x1299a1, _0x4f255c) {
                return _0x1299a1 > _0x4f255c
            },
            YoWYI: function (_0x150b00, _0x19fc6a) {
                return _0x150b00 ^ _0x19fc6a
            },
            lIDlm: function (_0x4b4a50, _0x1d7d83) {
                return _0x4b4a50 > _0x1d7d83
            },
            qULmg: function (_0xa82594, _0xe403fa) {
                return _0xa82594 < _0xe403fa
            },
            sFsEW: function (_0x303693, _0x4855b6) {
                return _0x303693 > _0x4855b6
            },
            zImkM: function (_0x1a4519, _0x408ec5) {
                return _0x1a4519 < _0x408ec5
            },
            yoqLi: _0xcbffeb(0xd7, 0x186, 0x5e, 0x141, 'sOiS'),
            htUzu: _0xcbffeb(0x1c7, 0x327, 0x1f8, 0x24f, 'vWI5'),
            '\u0041\u0073\u0072\u0078\u006a': _0x1ecf77('j#A6'.split('').reverse().join(''), -0xcd, -0x1c3, -0x294, -0x240),
            hsuAu: function (_0x3821a6, _0x290932) {
                return _0x3821a6 !== _0x290932
            },
            SlHaW: function (_0x2bdadd, _0x581ce8) {
                return _0x2bdadd / _0x581ce8
            },
            YBire: _0x1dffd4(-0x8c, -0xfa, -0x101, -0xd7, 'jV%%'.split('').reverse().join('')),
            yoMVh: _0x18d341(-0x40, 0x6, 'rsOy', 0x15, 0xb4),
            bgDSP: function (_0x1f28f6, _0x1cbcfa) {
                return _0x1f28f6(_0x1cbcfa)
            }
        }
        function _0x1ecf77(_0x3b84cc, _0x2309b8, _0x3aa6d4, _0x3c7a57, _0x550fcf) {
            return _0x15ee(_0x3aa6d4 - -0x352, _0x3b84cc)
        }
        function _0xcbffeb(_0x51d41a, _0x11bdfd, _0x4a3bc4, _0x2e6c2c, _0x4ac660) {
            return _0x15ee(_0x2e6c2c - 0x116, _0x4ac660)
        }
        function _0x5343f6(_0x1c5b89, _0x9a8627, _0x3c8320, _0x342963, _0xa5aa03) {
            return _0x3a0c(_0x9a8627 - 0x3da, _0x342963)
        }
        function _0x1dffd4(_0x23f37f, _0x399243, _0x5e4226, _0x271cf8, _0x1eedbf) {
            return _0x15ee(_0x5e4226 - -0x183, _0x1eedbf)
        }
        function _0x1f6621(_0x1b6c9d, _0x1110e0, _0x140600, _0x5512cd, _0x6d0a0b) {
            return _0x3a0c(_0x6d0a0b - -0x213, _0x140600)
        }
        function _0x4df278(_0x1def5f) {
            function _0x4ebed5(_0x2b916f, _0x44ca85, _0xe8235d, _0x5e2681, _0x4ff6) {
                return _0x3a0c(_0x44ca85 - 0x15d, _0x5e2681)
            }
            function _0x49712b(_0x281742, _0x4cb150, _0x23864b, _0x2851c4, _0x17c301) {
                return _0x3a0c(_0x4cb150 - -0xc5, _0x17c301)
            }
            const _0x5cdf9e = {
                jQhSL: function (_0x46b770, _0x2fe610) {
                    return _0x46b770 ^ _0x2fe610
                }
            }
            function _0x3fd8c2(_0x277ff4, _0x42f8c5, _0x50801e, _0x2c4f8c, _0x80b69e) {
                return _0x15ee(_0x50801e - -0xd5, _0x277ff4)
            }
            function _0x227ca3(_0x8e82ff, _0x4e7bb4, _0x5a8c58, _0x56da3c, _0x5be3eb) {
                return _0x3a0c(_0x4e7bb4 - 0x111, _0x5a8c58)
            }
            function _0x2f7796(_0x335cb6, _0x20f72a, _0x2803c3, _0x4b7f68, _0x359221) {
                return _0x15ee(_0x359221 - -0x350, _0x335cb6)
            }
            function _0x5e79f6(_0x5ba8e2, _0x51db66, _0x97e54, _0x197254, _0x85286a) {
                return _0x3a0c(_0x51db66 - -0x2d7, _0x5ba8e2)
            }
            function _0x537fca(_0xab0dbb, _0x153d68, _0x17b06b, _0x4fe884, _0x385259) {
                return _0x15ee(_0x385259 - -0x18e, _0x17b06b)
            }
            function _0x1a8a06(_0x494d49, _0x3e5eb4, _0x2162d3, _0x125cc0, _0x4e7f98) {
                return _0x3a0c(_0x2162d3 - -0x1d, _0x3e5eb4)
            }
            function _0x42ebc5(_0x5e0084, _0x42d2d0, _0x149b68, _0x14611c, _0x331c86) {
                return _0x15ee(_0x5e0084 - 0x1c2, _0x14611c)
            }
            function _0x41696f(_0x2173fe, _0x14b849, _0x528d9c, _0x37abdc, _0x6a7788) {
                return _0x15ee(_0x37abdc - -0x1cb, _0x528d9c)
            }
            if (_0x1a8a06(0x173, 0x200, 0x187, 0x1ff, 0x123) !== _0x41696f(-0x130, -0x1b3, 'uNo]', -0x185, -0x262)) {
                if (typeof _0x1def5f === _0x392c7b['Asrxj']) {
                    return function (_0x52d847) {}['constructor'](_0x49712b(0x11d, 0xa1, 0x8a, -0x27, 0x144))['apply'](_0x4ebed5(0x339, 0x25f, 0x265, 0x183, 0x310))
                } else {
                    if (
                        _0x392c7b['hsuAu'](('' + _0x392c7b['SlHaW'](_0x1def5f, _0x1def5f))[_0x42ebc5(0x36a, 0x2cb, 0x369, 'vcNF'.split('').reverse().join(''), 0x2ab)], 0x1) ||
                        _0x1def5f % 0x14 === 0x0
                    ) {
                        if (_0x41696f(0x9f, 0x74, 'xe8t'.split('').reverse().join(''), -0x5e, -0xf4) === _0x537fca(-0x68, -0xf8, '55p0', -0x1cb, -0x100)) {
                            var _0x592347 = _0x392c7b['phmUV'](0x0, 0x2)
                            const _0x511d4f = _0x102b6f['min'](_0x28e5e0['length'], _0x3ec6bf['length'], _0x2f1676['length'], _0x327213['length'])
                            _0x592347 = _0x392c7b['iIFPp']
                            const _0xf634fd = _0x392c7b['Wfzfi'](_0x511d4f, 0x1)
                            const _0x333fe5 = 0x1
                            const _0x5dcbbe = _0x49b016['slice'](_0x511d4f - _0x15ea8a, _0x511d4f)
                            var _0x2700be = 0x5 + 0x1
                            const _0x4cdfc8 = _0xb4c1c4['slice'](_0x392c7b['Wfzfi'](_0x511d4f, _0x36ad09), _0x511d4f)
                            _0x2700be = 0x6 + 0x7
                            const _0x4a84bb = _0x5bbd76['slice'](_0x392c7b['MZlHA'](_0x511d4f, _0x1af5be), _0x511d4f)
                            var _0x4508a2 = _0x392c7b['jWjzV'](0x1, 0x8)
                            const _0xe7e5a2 = _0x7c07e9['slice'](_0x392c7b['Wfzfi'](_0x511d4f, _0x56dd3c), _0x511d4f)
                            _0x4508a2 = _0x392c7b['jWjzV'](0x8, 0x8)
                            var _0x25336e
                            const _0x1f11dc = _0x5dcbbe['reduce']((_0x22eba8, _0x4e55fe) => _0x22eba8 + _0x4e55fe, 0x0) / _0x5dcbbe['length']
                            _0x25336e = _0x1a8a06(0xe7, 0x22b, 0x15e, 0x1a3, 0x202)
                            const _0x442d66 = _0x4cdfc8['reduce']((_0x46a748, _0x1ff718) => _0x46a748 + _0x1ff718, 0x0) / _0x4cdfc8['length']
                            const _0xf4a194 = _0x4a84bb['reduce']((_0xacb8fd, _0x16b7fc) => _0xacb8fd + _0x16b7fc, 0x0) / _0x4a84bb['length']
                            const _0x3d46f9 = _0x392c7b['qssSx'](
                                _0xe7e5a2['reduce']((_0x10385d, _0x17a631) => _0x10385d + _0x17a631, 0x1d047 ^ 0x1d047),
                                _0xe7e5a2['length']
                            )
                            const _0x4c483e = _0x256c8b['abs'](_0x392c7b['MZlHA'](_0x1f11dc, _0x442d66) / _0x442d66) * _0x392c7b['OxgdO'](0x61967, 0x61903)
                            const _0x50ecb7 = _0x392c7b['YBVdo'](_0x545cdc['abs']((_0x442d66 - _0xf4a194) / _0xf4a194), 0x64)
                            var _0x4d0856
                            const _0xe32a9b = _0x209dd0['\u0061\u0062\u0073']((_0xf4a194 - _0x3d46f9) / _0x3d46f9) * 0x64
                            _0x4d0856 = 0x5
                            var _0x4a84be
                            const _0x4c2d66 = _0x3b8260(_0x33b1dd, _0x950364)
                            _0x4a84be = _0x5e79f6(-0x1d6, -0x172, -0x1e9, -0x225, -0x247)
                            const _0x18792e = _0x333267(_0x24c5f3, _0x562aa3)
                            var _0x1f2e9d = 0x8 + 0x8
                            const _0x4fc1de = _0xb1803c(_0xa8e2a6, _0x1e8d88)
                            _0x1f2e9d = 0x5
                            const _0x21ada1 = _0x384305(_0xc07dc6, _0x537003)
                            const _0x2305e1 =
                                _0x392c7b['nbTCN'](_0x1f11dc, _0x442d66) &&
                                _0x442d66 > _0xf4a194 &&
                                _0xf4a194 > _0x3d46f9 &&
                                _0x392c7b['nbTCN'](_0x4c483e, _0x333fe5) &&
                                _0x392c7b['nbTCN'](_0x50ecb7, _0x333fe5) &&
                                _0xe32a9b > _0x333fe5 &&
                                _0x4c2d66 > _0x392c7b['YoWYI'](0x89f61, 0x89f61) &&
                                _0x392c7b['lIDlm'](_0x18792e, 0x0) &&
                                _0x4fc1de > (0x4b4ca ^ 0x4b4ca) &&
                                _0x392c7b['nbTCN'](_0x21ada1, 0x0)
                            const _0x30f714 =
                                _0x392c7b['qULmg'](_0x1f11dc, _0x442d66) &&
                                _0x442d66 < _0xf4a194 &&
                                _0x392c7b['qULmg'](_0xf4a194, _0x3d46f9) &&
                                _0x4c483e > _0x333fe5 &&
                                _0x50ecb7 > _0x333fe5 &&
                                _0x392c7b['sFsEW'](_0xe32a9b, _0x333fe5) &&
                                _0x392c7b['zImkM'](_0x4c2d66, 0x0) &&
                                _0x18792e < 0x0 &&
                                _0x4fc1de < 0x0 &&
                                _0x392c7b['qULmg'](_0x21ada1, 0x5a099 ^ 0x5a099)
                            const _0x5ef651 =
                                !_0x2305e1 &&
                                !_0x30f714 &&
                                _0x5149d9['abs'](_0x392c7b['MZlHA'](_0x1f11dc, _0x442d66)) < 0.005 * _0x4c1726 &&
                                _0x5a161b['abs'](_0x442d66 - _0xf4a194) < _0x392c7b['YBVdo'](0.005, _0x149609) &&
                                _0x598dd7['abs'](_0x392c7b['Wfzfi'](_0xf4a194, _0x3d46f9)) < 0.005 * _0x13bfa8
                            if (_0x2305e1) {
                                return { res: _0x392c7b['yoqLi'] }
                            } else if (_0x30f714) {
                                return { res: _0x537fca(-0x164, -0x1ee, 'CfbY', -0x6c, -0x116) }
                            } else if (_0x5ef651) {
                                return { res: _0x5e79f6(-0xa9, -0x158, -0x119, -0x6f, -0xa7) }
                            }
                            return { res: _0x392c7b['htUzu'] }
                        } else {
                            ;(function () {
                                return !![]
                            })
                                ['constructor'](_0x392c7b['jWjzV'](_0x537fca(-0x3c, -0xa6, 't8ex', -0x124, -0x30), _0x3fd8c2('XpuS'.split('').reverse().join(''), 0x1c4, 0x128, 0x1bb, 0x21d)))
                                ['call'](_0x2f7796('Ntx2'.split('').reverse().join(''), -0x150, -0x102, -0x227, -0x1b6))
                        }
                    } else {
                        ;(function () {
                            return ![]
                        })
                            ['constructor'](_0x392c7b['YBire'] + _0x49712b(0x111, 0xc4, 0x4d, 0xdf, 0xa3))
                            ['apply'](_0x49712b(-0xf, -0x20, 0x40, -0x36, 0xd))
                    }
                }
                _0x4df278(++_0x1def5f)
            } else {
                const _0x3ed89f = _0x5cdf9e['jQhSL'](0x5ffb5, 0x5ffb7) / (_0x407b47 + (0x9870e ^ 0x9870f))
                let _0x5a43a5 = [_0x4835be[0xa8ec2 ^ 0xa8ec2]]
                for (let _0x592a6a = 0x1; _0x592a6a < _0x4f5139['length']; _0x592a6a++) {
                    _0x5a43a5['push'](_0x15bd5e[_0x592a6a] * _0x3ed89f + _0x5a43a5[_0x592a6a - 0x1] * (0x1 - _0x3ed89f))
                }
                return _0x5a43a5
            }
        }
        function _0x2f628c(_0x5dd17b, _0x5d6cf1, _0x3b2f39, _0x208f47, _0x15c4c1) {
            return _0x3a0c(_0x208f47 - -0x22, _0x3b2f39)
        }
        try {
            if (_0x161549) {
                if (_0x2f628c(0xd9, -0x5b, 0x9f, 0x13, -0x4c) !== _0x17fdf5(-0x266, -0xf1, -0xc4, -0x1d2, -0x192)) {
                    _0x111b98['close']()
                } else {
                    return _0x4df278
                }
            } else {
                if (_0x392c7b['hsuAu'](_0x392c7b['yoMVh'], _0x5343f6(0x4f5, 0x539, 0x5d5, 0x4fc, 0x5c9))) {
                    if (_0x1400a9) {
                        const _0x1b376a = _0x1bd0f5['apply'](_0x249adb, arguments)
                        _0x1c6836 = null
                        return _0x1b376a
                    }
                } else {
                    _0x392c7b['bgDSP'](_0x4df278, 0x0)
                }
            }
        } catch (_0x14a68a) {}
    }
    return (
        <div style={{ padding: 16 }}>
            <Drawer title="k线数据" placement="right" width={1200} onClose={() => setOpen(false)} visible={open} getContainer={true} zIndex={99999999}>
                <iframe src={url} width="100%" height="100%" />
            </Drawer>
            <Modal title="快速下单" visible={show}>
                <Form
                    form={form}
                    layout="vertical"
                    onValuesChange={onValuesChange}
                    initialValues={{
                        loss: 20
                    }}>
                    <Row>
                        <Col span={8}>
                            <Form.Item label="交易币种" name="symbol" rules={[{ required: true, message: '请选择交易币种' }]}>
                                <Select showSearch style={{ width: '100%' }} placeholder="选择交易币种" onChange={placeAnOrder}>
                                    {list.map((item, index) => {
                                        return (
                                            <Option key={index} value={item.name}>
                                                {item.name}
                                            </Option>
                                        )
                                    })}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="最大亏损(USDT)" name="loss" rules={[{ required: true, message: '请输入止损幅度' }]}>
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="止损幅度(%)" name="stopLossRange" rules={[{ required: true, message: '请输入止损幅度' }]}>
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="市价下单" name="marketPrice">
                                <InputNumber disabled style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="限价下单(留空默认使用市价)" name="fixedPrice">
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="仓位数量(USDT)" name="position">
                                <InputNumber disabled style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="止损价格" disabled name="stopPrice">
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <div>1.5x止盈</div>
                            <div>2x止盈</div>
                            <div>3x止盈</div>
                        </Col>
                        <Col span={12}>
                            <div>亏损</div>
                        </Col>
                    </Row>
                </Form>
                <div></div>
            </Modal>
            <h3>此工具参考：均线斜率、均线相对百分比筛选</h3>
            <h3>距离阈值和斜率计算长度阈值请酌情微调</h3>
            <h3>温馨提示：</h3>
            <h3>筛选出来的标的需要自己进行二次筛选，图表是波动强弱数据直观体现，页面不要频繁刷新，币安接口每分钟有限制</h3>
            <div className="button_box">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    时间周期：
                    <Select defaultValue={time} style={{ width: '100px' }} onChange={handleChange}>
                        <Option value="15m">15分钟</Option>
                        <Option value="30m">30分钟</Option>
                        <Option value="1h">1小时</Option>
                        <Option value="4h">4小时</Option>
                        <Option value="1d">1天</Option>
                        <Option value="1w">1周</Option>
                    </Select>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    过滤k线不足的：
                    <Select
                        defaultValue={iskLinel}
                        style={{ width: '100px' }}
                        onChange={(value) => {
                            setIskLinel(value)
                            localStorage.setItem('IskLinel', Boolean(value))
                        }}>
                        <Option value={true}>是</Option>
                        <Option value={false}>否</Option>
                    </Select>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    图表波幅阈值：
                    <Slider
                        min={1}
                        max={100}
                        onChange={onSelect}
                        value={wave}
                        style={{ width: '200px' }}
                        tooltip={{
                            open: false
                        }}
                    />
                    <span>{wave}%</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    距离计算长度阈值：
                    <InputNumber
                        value={spacingThreshold}
                        onChange={(value) => {
                            setSpacingThreshold(value)
                            localStorage.setItem('spacingThreshold', value)
                        }}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    斜率计算长度阈值：
                    <InputNumber
                        value={spacingSlopeld}
                        onChange={(value) => {
                            setSpacingSlopeld(value)
                            localStorage.setItem('spacingSlopeld', value)
                        }}
                    />
                </div>
                {/**<Button
                    onClick={() => {
                        setShow(true)
                    }}>
                    快速下单
                </Button> */}
                <Button
                    type="primary"
                    onClick={() => {
                        localStorage.removeItem('tradingPairs')
                        formatData()
                    }}>
                    更新交易对
                </Button>
                <Button danger onClick={formatData}>
                    重载
                </Button>
            </div>
            <div
                style={
                    newSeries.length > 0
                        ? {
                              position: 'relative'
                          }
                        : {
                              position: 'absolute',
                              left: -99999,
                              top: -99999
                          }
                }>
                <div ref={chart} style={{ width: '100%', marginBottom: 16, height: 400 }}></div>
                {newSeries[seriesIndex] && <div className="tips">{newSeries[seriesIndex].name + '：' + newSeries[seriesIndex].strength.toFixed(2) + '%'}</div>}
            </div>
            <Table
                bordered
                dataSource={list}
                key={wave}
                columns={[
                    {
                        title: '币种(点击名称可查询k线，右侧图标可筛选)',
                        dataIndex: 'name',
                        key: 'name',
                        align: 'center',
                        filters: [
                            {
                                text: '多头排列',
                                value: '多头排列'
                            },
                            {
                                text: '空头排列',
                                value: '空头排列'
                            },
                            {
                                text: '无明显多/空头排列',
                                value: '无明显多/空头排列'
                            },
                            {
                                text: '波幅强弱标的',
                                value: '波幅强弱标的'
                            },
                            {
                                text: '波幅强并多空排列',
                                value: '波幅强并多空排列'
                            },
                            {
                                text: '震荡行情',
                                value: '震荡行情'
                            }
                        ],
                        defaultFilteredValue: ['空头排列', '多头排列'],
                        onFilter: (value, record) => {
                            if (value === '多头排列') {
                                return record.trend === '多头排列'
                            } else if (value === '空头排列') {
                                return record.trend === '空头排列'
                            } else if (value === '震荡行情') {
                                return record.trend === '震荡行情'
                            } else if (value === '无明显多/空头排列') {
                                return record.trend === '无明显多/空头排列'
                            } else if (value === '波幅强弱标的') {
                                return record.strength >= wave
                            } else if (value === '波幅强并多空排列') {
                                return record.strength >= wave && (record.trend === '多头排列' || record.trend === '空头排列')
                            }
                        },
                        filtered: true,
                        sortDirections: ['descend'],
                        render: (text) => (
                            <div
                                style={{ textDecoration: 'underline', cursor: 'pointer' }}
                                onClick={() => {
                                    setUrl(`./kLine.html?symbol=${text}&interval=${time}`)
                                    setOpen(true)
                                }}>
                                {text}
                            </div>
                        )
                    },
                    {
                        title: '资金费率',
                        dataIndex: 'lastFundingRate',
                        key: 'lastFundingRate',
                        align: 'center',
                        showSorterTooltip: false,
                        sorter: (a, b) => a.lastFundingRate - b.lastFundingRate
                    },
                    {
                        title: '24小时成交额(USDT)',
                        dataIndex: 'quoteVolume',
                        key: 'quoteVolume',
                        align: 'center',
                        render: (text) => formatNumber(text),
                        showSorterTooltip: false,
                        sorter: (a, b) => a.quoteVolume - b.quoteVolume,
                        defaultSortOrder: 'descend'
                    },
                    {
                        title: '24小时成交量(币)',
                        dataIndex: 'volume',
                        key: 'volume',
                        align: 'center',
                        render: (text) => formatNumber(text),
                        showSorterTooltip: false,
                        sorter: (a, b) => a.volume - b.volume
                    },
                    {
                        title: () => (
                            <Tooltip title="大于波幅阈值都属于强，根据自己的条件来">
                                <span>
                                    强弱波幅&nbsp;
                                    <QuestionCircleOutlined />
                                </span>
                            </Tooltip>
                        ),
                        dataIndex: 'strength',
                        key: 'strength',
                        align: 'center',
                        sorter: (a, b) => a.strength - b.strength,
                        showSorterTooltip: false,
                        render: (text) => {
                            return (
                                <div>
                                    <Tag color={text >= wave ? '#87d068' : '#f50'}>{text >= wave ? '强' : '弱'}</Tag>
                                </div>
                            )
                        }
                    },
                    {
                        title: '24小时涨幅',
                        dataIndex: 'priceChangePercent',
                        key: 'priceChangePercent',
                        align: 'center',
                        sorter: (a, b) => a.priceChangePercent - b.priceChangePercent,
                        showSorterTooltip: false,
                        render: (text) => {
                            if (text < 0) {
                                return <Tag color="#f50">{text}%</Tag>
                            } else if (text > 0) {
                                return <Tag color="#87d068">{text}%</Tag>
                            } else {
                                return <Tag color="geekblue">{text}%</Tag>
                            }
                        }
                    },
                    {
                        title: '趋势',
                        dataIndex: 'trend',
                        key: 'trend',
                        align: 'center',
                        render: (text, record) => {
                            if (text === '多头排列' && record.isNearEMA21 && !record.isNearEMA55) {
                                return <Tag color="#1677ff">多头回踩ema21</Tag>
                            } else if (text === '空头排列' && record.isNearEMA21 && !record.isNearEMA55) {
                                return <Tag color="#faad14">空头反弹ema21</Tag>
                            } else if (text === '多头排列' && record.isNearEMA55) {
                                return <Tag color="#1677ff">多头回踩ema55</Tag>
                            } else if (text === '空头排列' && record.isNearEMA55) {
                                return <Tag color="#faad14">空头反弹ema55</Tag>
                            } else if (text === '多头排列') {
                                return <Tag color="#52c41a">{text}</Tag>
                            } else if (text === '空头排列') {
                                return <Tag color="#ff0000">{text}</Tag>
                            } else if (text === '震荡行情') {
                                return <Tag color="#2db7f5">{text}</Tag>
                            } else {
                                return <Tag color="magenta">{text}</Tag>
                            }
                        }
                    }
                ]}
                pagination={false}
                rowKey={(rec, index) => index}
                style={{ marginTop: 16 }}
            />
        </div>
    )
}
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<MyApp />)

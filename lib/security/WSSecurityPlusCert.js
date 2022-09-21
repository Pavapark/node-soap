"use strict";
exports.__esModule = true;
exports.WSSecurityPlusCert = void 0;
var WSSecurityPlusCert = /** @class */ (function () {
    function WSSecurityPlusCert(wsSecurity, wsSecurityCert) {
        this.wsSecurity = wsSecurity;
        this.wsSecurityCert = wsSecurityCert;
    }
    WSSecurityPlusCert.prototype.postProcess = function (xml, envelopeKey) {
        var securityXml = this.wsSecurity.toXML();
        var endOfHeader = xml.indexOf("</" + envelopeKey + ":Header>");
        xml = [xml.slice(0, endOfHeader), securityXml, xml.slice(endOfHeader)].join('');
        return this.wsSecurityCert.postProcess(xml, envelopeKey);
    };
    return WSSecurityPlusCert;
}());
exports.WSSecurityPlusCert = WSSecurityPlusCert;
//# sourceMappingURL=WSSecurityPlusCert.js.map
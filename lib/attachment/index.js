"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var icons_1 = require("@material-ui/icons");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid #cbd4db;\n  padding: 15px;\n  border-radius: 10px;\n  margin-bottom: 5px;\n  margin-right: 5px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: flex-start;\n  position: relative;\n"], ["\n  border: 1px solid #cbd4db;\n  padding: 15px;\n  border-radius: 10px;\n  margin-bottom: 5px;\n  margin-right: 5px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: flex-start;\n  position: relative;\n"])));
var Icon = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-right: 15px;\n  background-color: ", ";\n  border-radius: 10px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  position: relative;\n"], ["\n  margin-right: 15px;\n  background-color: ", ";\n  border-radius: 10px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  position: relative;\n"])), function (props) { return props.color; });
var Name = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: 500;\n  font-style: normal;\n  color: #151b26;\n  display: inline-block;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: ", ";\n  margin-bottom: ", ";\n"], ["\n  font-weight: 500;\n  font-style: normal;\n  color: #151b26;\n  display: inline-block;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: ",
    ";\n  margin-bottom: ",
    ";\n"])), function (props) {
    switch (props.layout) {
        case "compose":
            return "14px";
        case "message":
            return "14px";
        default:
            return "16px";
    }
}, function (props) {
    switch (props.layout) {
        case "compose":
            return "5px";
        case "message":
            return "5px";
        default:
            return "5px";
    }
});
var Size = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-weight: 400;\n  color: #adb5bd;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  display: inline-block;\n  font-size: ", ";\n  margin-bottom: ", ";\n"], ["\n  font-weight: 400;\n  color: #adb5bd;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  display: inline-block;\n  font-size: ",
    ";\n  margin-bottom: ",
    ";\n"])), function (props) {
    if (props.layout == "compose")
        return "13px";
    if (props.layout == "message")
        return "12px";
    return "12px";
}, function (props) {
    if (props.layout == "compose")
        return "3px";
    if (props.layout == "message")
        return "1px";
    return "3px";
});
var Extension = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-weight: 500;\n  font-size: 10px;\n  color: #6f7782;\n  margin-right: 10px;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n"], ["\n  font-weight: 500;\n  font-size: 10px;\n  color: #6f7782;\n  margin-right: 10px;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n"])));
var Link = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-weight: 500;\n  font-size: 10px;\n  cursor: pointer;\n  color: #007af5;\n  margin-right: 10px;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n"], ["\n  font-weight: 500;\n  font-size: 10px;\n  cursor: pointer;\n  color: #007af5;\n  margin-right: 10px;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n"])));
var Content = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  align-content: flex-start;\n  justify-content: flex-start;\n  position: relative;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  align-content: flex-start;\n  justify-content: flex-start;\n  position: relative;\n"])));
var Info = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: flex-start;\n  position: relative;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: flex-start;\n  position: relative;\n"])));
exports.Attachment = function (props) {
    var getMimeTypeColor = function (type) {
        switch (type.split("/")[0]) {
            case "audio": return "#007af5";
            case "application": return "#36C5AB";
            case "video": return "#EA4E9D";
            case "text": return "#8DA2A5";
            case "image": return "#7A6FF0";
            case "font": return "#E8384F";
            default: return "#007af5";
        }
    };
    var getMimeTypeIcon = function (type) {
        switch (type.split("/")[0]) {
            case "audio": return React.createElement(icons_1.AudiotrackOutlined, { htmlColor: "white", fontSize: props.layout == "compose" ? "large" : "default" });
            case "application": return React.createElement(icons_1.InsertDriveFileOutlined, { htmlColor: "white", fontSize: props.layout == "compose" ? "large" : "default" });
            case "video": return React.createElement(icons_1.VideocamOutlined, { htmlColor: "white", fontSize: props.layout == "compose" ? "large" : "default" });
            case "text": return React.createElement(icons_1.SubjectOutlined, { htmlColor: "white", fontSize: props.layout == "compose" ? "large" : "default" });
            case "image": return React.createElement(icons_1.ImageOutlined, { htmlColor: "white", fontSize: props.layout == "compose" ? "large" : "default" });
            case "font": return React.createElement(icons_1.FontDownloadOutlined, { htmlColor: "white", fontSize: props.layout == "compose" ? "large" : "default" });
            default: return React.createElement(icons_1.InsertDriveFileOutlined, { htmlColor: "white", fontSize: props.layout == "compose" ? "large" : "default" });
        }
    };
    var getMimeTypeDescription = function (type) {
        switch (type) {
            case "audio/aac": return "AAC audio";
            case "application/x-abiword": return "AbiWorddocument";
            case "application/x-freearc": return "Archive document (multiple files embedded)";
            case "video/x-msvideo": return "AVI: Audio Video Interleave";
            case "application/vnd.amazon.ebook": return "Amazon Kindle eBook format";
            case "application/octet-stream": return "Any kind of binary data";
            case "image/bmp": return "Windows OS/2 Bitmap Graphics";
            case "application/x-bzip": return "BZip archive";
            case "application/x-bzip2": return "BZip2 archive";
            case "application/x-csh": return "C-Shell script";
            case "text/css": return "Cascading Style Sheets (CSS)";
            case "text/csv": return "Comma-separated values (CSV)";
            case "application/msword": return "Microsoft Word";
            case "application/vnd.openxmlformats-officedocument.wordprocessingml.document": return "Microsoft Word (OpenXML)";
            case "application/vnd.ms-fontobject": return "MS Embedded OpenType fonts";
            case "application/epub+zip": return "Electronic publication (EPUB)";
            case "application/gzip": return "GZip Compressed Archive";
            case "image/gif": return "Graphics Interchange Format (GIF)";
            case "text/html": return "HyperText Markup Language (HTML)";
            case "image/vnd.microsoft.icon": return "Icon format";
            case "text/calendar": return "iCalendar format";
            case "application/java-archive": return "Java Archive (JAR)";
            case "image/jpeg": return "JPEG images";
            case "text/javascript": return "JavaScript";
            case "application/json": return "JSON format";
            case "application/ld+json": return "JSON-LD format";
            case "audio/midiaudio/x-midi": return "Musical Instrument Digital Interface (MIDI)";
            case "text/javascript": return "JavaScript module";
            case "audio/mpeg": return "MP3 audio";
            case "video/mpeg": return "MPEG Video";
            case "application/vnd.apple.installer+xml": return "Apple Installer Package";
            case "application/vnd.oasis.opendocument.presentation": return "OpenDocument presentation document";
            case "application/vnd.oasis.opendocument.spreadsheet": return "OpenDocument spreadsheet document";
            case "application/vnd.oasis.opendocument.text": return "OpenDocument text document";
            case "audio/ogg": return "OGG audio";
            case "video/ogg": return "OGG video";
            case "application/ogg": return "OGG";
            case "audio/opus": return "Opus audio";
            case "font/otf": return "OpenType font";
            case "image/png": return "Portable Network Graphics";
            case "application/pdf": return "AdobePortable Document Format(PDF)";
            case "appliction/php": return "Hypertext Preprocessor (Personal Home Page)";
            case "application/vnd.ms-powerpoint": return "Microsoft PowerPoint";
            case "application/vnd.openxmlformats-officedocument.presentationml.presentation": return "Microsoft PowerPoint (OpenXML)";
            case "application/x-rar-compressed": return "RAR archive";
            case "application/rtf": return "Rich Text Format (RTF)";
            case "application/x-sh": return "Bourne shell script";
            case "image/svg+xml": return "Scalable Vector Graphics (SVG)";
            case "application/x-shockwave-flash": return "Small web format(SWF) or Adobe Flash document";
            case "application/x-tar": return "Tape Archive (TAR)";
            case "image/tiff": return "Tagged Image File Format (TIFF)";
            case "video/mp2t": return "MPEG transport stream";
            case "font/ttf": return "TrueType Font";
            case "text/plain": return "Text";
            case "application/vnd.visio": return "Microsoft Visio";
            case "audio/wav": return "Waveform Audio Format";
            case "audio/webm": return "WEBM audio";
            case "video/webm": return "WEBM video";
            case "video/mp4": return "Video File";
            case "image/webp": return "WEBP image";
            case "font/woff": return "Web Open Font Format (WOFF)";
            case "font/woff2": return "Web Open Font Format (WOFF)";
            case "application/xhtml+xml": return "XHTML";
            case "application/vnd.ms-excel": return "Microsoft Excel";
            case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": return "Microsoft Excel (OpenXML)";
            case "application/xmlifnotreadable from casual users (RFC 3023": return " section 3)";
            case "text/xmlif readable from casual users": return "XML";
            case "application/vnd.mozilla.xul+xml": return "XUL";
            case "application/zip": return "ZIP archive";
            case "audio/3gppif it doesn't contain video": return "3GPPaudio/video container";
            case "audio/3gpp2if it doesn't contain video": return "3GPP2audio/video container";
            case "application/x-7z-compressed": return "7-ziparchive";
            default: return "Document";
        }
    };
    // prettier-ignore
    return (React.createElement(Container, null,
        React.createElement(Icon, { color: getMimeTypeColor(props.mime) }, getMimeTypeIcon(props.mime)),
        React.createElement(Content, null,
            React.createElement(Name, { layout: props.layout }, props.name),
            props.layout == "compose" && React.createElement(Size, { layout: props.layout },
                props.size,
                " bytes"),
            React.createElement(Info, null,
                React.createElement(Extension, null, getMimeTypeDescription(props.mime)),
                React.createElement(Link, { className: "button", onClick: function () { return window.open(props.uri); } }, "Download"),
                (props.layout == "compose" && props.onDeleteClick) &&
                    React.createElement(Link, { className: "button", onClick: props.onDeleteClick }, "Remove")))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=index.js.map
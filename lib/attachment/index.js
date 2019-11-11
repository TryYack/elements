"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const react_feather_1 = require("react-feather");
const react_feather_2 = require("react-feather");
const react_feather_3 = require("react-feather");
const react_feather_4 = require("react-feather");
const react_feather_5 = require("react-feather");
const react_feather_6 = require("react-feather");
const Text = styled_components_1.default.div ``;
const Container = styled_components_1.default.div `
  border: 1px solid #cbd4db;
  border-radius: 10px;
  margin-bottom: 5px;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  width: ${props => props.preview ? "100%" : "300px"};
`;
const ContainerImage = styled_components_1.default.div `
  width: 100%;
  height: 300px;
  background-position: center center;
  background-image: url(${props => props.image});
  background-size: cover;
`;
const ContainerVideo = styled_components_1.default.div `
  width: 100%;
  height: 300px;
`;
const ContainerRow = styled_components_1.default.div `
  flex: 1;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  position: relative;
`;
const Icon = styled_components_1.default.div `
  margin-right: 15px;
  background-color: ${props => props.color};
  border-radius: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
`;
const Content = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const Info = styled_components_1.default.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  position: relative;
`;
const AttachmentComponent = (props) => {
    const bytesToSize = (bytes) => {
        const sizes = ["bytes", "kb", "mb", "gb", "tb"];
        if (bytes == 0)
            return "0 bytes";
        const i = Math.floor(Math.log(bytes) / Math.log(1024));
        return Math.round(bytes / Math.pow(1024, i)).toString() + " " + sizes[i];
    };
    const getMimeTypeColor = (type) => {
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
    const getMimeTypeIcon = (type) => {
        switch (type.split("/")[0]) {
            case "audio": return React.createElement(react_feather_6.Activity, { color: "white", size: props.layout == "compose" ? "25" : "20", thickness: "1" });
            case "application": return React.createElement(react_feather_5.File, { color: "white", size: props.layout == "compose" ? "25" : "20", thickness: "1" });
            case "video": return React.createElement(react_feather_2.Video, { color: "white", size: props.layout == "compose" ? "30" : "25", thickness: "1" });
            case "text": return React.createElement(react_feather_4.AlignLeft, { color: "white", size: props.layout == "compose" ? "25" : "20", thickness: "1" });
            case "image": return React.createElement(react_feather_1.Image, { color: "white", size: props.layout == "compose" ? "25" : "20", thickness: "1" });
            case "font": return React.createElement(react_feather_3.Download, { color: "white", size: props.layout == "compose" ? "25" : "20", thickness: "1" });
            default: return React.createElement(react_feather_5.File, { color: "white", size: props.layout == "compose" ? "25" : "20", thickness: "1" });
        }
    };
    const getMimeTypeDescription = (type) => {
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
    const mimeType = (type) => {
        return type.split("/")[0];
    };
    const Preview = () => {
        if (mimeType(props.mime) == "image" && props.preview) {
            return React.createElement(ContainerImage, { image: props.preview });
        }
        if (mimeType(props.mime) == "video" && props.preview) {
            return (React.createElement(ContainerVideo, null,
                React.createElement("video", { width: "100%", height: "100%", controls: true },
                    React.createElement("source", { src: props.preview, type: "video/mp4" }))));
        }
        return null;
    };
    // prettier-ignore
    return (React.createElement(Container, { layout: props.layout, preview: props.preview },
        React.createElement(Preview, null),
        React.createElement(ContainerRow, null,
            React.createElement(Icon, { color: getMimeTypeColor(props.mime) }, getMimeTypeIcon(props.mime)),
            React.createElement(Content, null,
                React.createElement(Text, { className: "color-d5 mb-5" }, props.name),
                props.size && React.createElement(Text, { className: "color-d0 mb-5" }, bytesToSize(props.size)),
                React.createElement(Info, null,
                    React.createElement(Text, { className: "color-d0 button small bold" }, getMimeTypeDescription(props.mime)),
                    React.createElement(Text, { className: "ml-5 color-blue button small bold", onClick: () => window.open(props.uri) }, "Download"),
                    (props.layout == "compose" && props.onDeleteClick) &&
                        React.createElement(Text, { className: "ml-5 color-blue button small bold", onClick: props.onDeleteClick }, "Remove"),
                    (props.layout == "message" && props.onPreviewClick && props.preview) &&
                        React.createElement(Text, { className: "ml-5 color-blue button small bold", onClick: props.onPreviewClick }, "Preview"))))));
};
exports.Attachment = React.memo((props) => React.createElement(AttachmentComponent, Object.assign({}, props)));
//# sourceMappingURL=index.js.map
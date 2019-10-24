import * as React from "react";
import styled from "styled-components";
import { InsertDriveFileOutlined, AudiotrackOutlined, VideocamOutlined, SubjectOutlined, ImageOutlined, FontDownloadOutlined } from "@material-ui/icons";

const Container = styled.div<{
  layout: string;
  preview?: string;
}>`
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

const ContainerImage = styled.div<{
  image: string;
}>`
  width: 100%;
  height: 300px;
  background-position: center center;
  background-image: url(${props => props.image});
  background-size: cover;
`;

const ContainerVideo = styled.div`
  width: 100%;
  height: 300px;
`;

const ContainerRow = styled.div`
  flex: 1;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  position: relative;
`;

const Icon = styled.div<{
  color: string,
}>`
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

const Name = styled.div<{
  layout: string,
}>`
  font-weight: 500;
  font-style: normal;
  color: #151b26;
  display: inline-block;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: ${props => {
      switch (props.layout) {
        case "compose":
          return "14px";
        case "message":
          return "14px";
        default:
          return "16px";
      }
    }
  };
  margin-bottom: ${props => {
      switch (props.layout) {
        case "compose":
          return "5px";
        case "message":
          return "5px";
        default:
          return "5px";
      }
    }
  };
`;

const Size = styled.div<{
  layout: string,
}>`
  font-weight: 400;
  color: #adb5bd;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
  display: inline-block;
  font-size: ${props => {
      if (props.layout == "compose") return "13px";
      if (props.layout == "message") return "12px";

      return "12px";
    }
  };
  margin-bottom: ${props => {
      if (props.layout == "compose") return "3px";
      if (props.layout == "message") return "1px";

      return "3px";
    }
  };
`;

const Extension = styled.div`
  font-weight: 500;
  font-size: 10px;
  color: #6f7782;
  margin-right: 10px;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
`;

const Link = styled.div`
  font-weight: 500;
  font-size: 10px;
  cursor: pointer;
  color: #007af5;
  margin-right: 10px;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  position: relative;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  position: relative;
`;

interface IAttachmentProps {
  /**
   * Possible values:
   * - "message"
   * - "compose"
   */
  layout: string;

  /** Size in bytes */
  size: number;

  /** Preview uri location of file */
  preview?: string;

  /** Uri location of source file */
  uri: string;

  /** File name */
  name: string;

  /** File mime type */
  mime: string;

  /** Callback to parent component */
  onPreviewClick?: any;

  /** Callback to parent component */
  onDeleteClick?: any;
}

export const Attachment: React.FunctionComponent<IAttachmentProps> = (props: IAttachmentProps) => {
  const bytesToSize = (bytes: number) => {
    const sizes: string[] = ["bytes", "kb", "mb", "gb", "tb"];
    if (bytes == 0) return "0 bytes";
    const i: number = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i)).toString() + " " + sizes[i];
  };

  const getMimeTypeColor = (type: string) => {
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

  const getMimeTypeIcon = (type: string) => {
    switch (type.split("/")[0]) {
      case "audio": return <AudiotrackOutlined htmlColor="white" fontSize={props.layout == "compose" ? "large" : "default"} />;
      case "application": return <InsertDriveFileOutlined htmlColor="white" fontSize={props.layout == "compose" ? "large" : "default"} />;
      case "video": return <VideocamOutlined htmlColor="white" fontSize={props.layout == "compose" ? "large" : "default"} />;
      case "text": return <SubjectOutlined htmlColor="white" fontSize={props.layout == "compose" ? "large" : "default"} />;
      case "image": return <ImageOutlined htmlColor="white" fontSize={props.layout == "compose" ? "large" : "default"} />;
      case "font": return <FontDownloadOutlined htmlColor="white" fontSize={props.layout == "compose" ? "large" : "default"} />;
      default: return <InsertDriveFileOutlined htmlColor="white" fontSize={props.layout == "compose" ? "large" : "default"} />;
    }
  };

  const getMimeTypeDescription = (type: string) => {
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

  const mimeType = (type: string) => {
    return type.split("/")[0];
  };

  const Preview = () => {
    if (mimeType(props.mime) == "image" && props.preview) {
      return <ContainerImage image={props.preview} />;
    }

    if (mimeType(props.mime) == "video" && props.preview) {
      return (
        <ContainerVideo>
          <video width="100%" height="100%" controls>
            <source src={props.preview} type="video/mp4" />
          </video>
        </ContainerVideo>
      );
    }

    return null;
  };

  // prettier-ignore
  return (
    <Container
      layout={props.layout}
      preview={props.preview}>
      <Preview />

      <ContainerRow>
        <Icon color={getMimeTypeColor(props.mime)}>
          {getMimeTypeIcon(props.mime)}
        </Icon>

        <Content>
          <Name layout={props.layout}>{props.name}</Name>
          {props.layout == "compose" && <Size layout={props.layout}>{bytesToSize(props.size)}</Size>}
          <Info>
            <Extension>
              {getMimeTypeDescription(props.mime)}
            </Extension>

            <Link
              className="button"
              onClick={() => window.open(props.uri)}>
              Download
            </Link>

            {(props.layout == "compose" && props.onDeleteClick) &&
              <Link
                className="button"
                onClick={props.onDeleteClick}>
                Remove
              </Link>
            }

            {(props.layout == "message" && props.onPreviewClick) &&
              <Link
                className="button"
                onClick={props.onPreviewClick}>
                Preview
              </Link>
            }
          </Info>
        </Content>
      </ContainerRow>
    </Container>
  );
};

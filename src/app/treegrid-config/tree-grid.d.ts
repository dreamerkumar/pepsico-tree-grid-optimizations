declare var TreeGrid: (option: TreeGridOption, elementId: string) => Table;

interface TreeGridOption {
  Debug: any;
  Data: Data;
  Layout: Layout;
  Upload: Upload;
}

interface Data {
  Data: TreeGridData;
}

interface TreeGridData {
  Body: Array<any>;
}

interface Layout {
  Data: TreeGridLayout;
}

interface TreeGridLayout {
  Cfg: any;
  Cols: Array<any>;
  Def: Array<any>;
  Header: any;
  Panel: any;
}

interface Upload {
  Format: String;
  Xml: Number;
  Type: String;
}

interface Table {
  AutoUpdate: number;
  Rows: any;

  Dispose(): void;

  GetChanges(): string;

  RemoveRow(row: any): void;

  AcceptChanges(): void;

  GetGanttBase(): string;
}

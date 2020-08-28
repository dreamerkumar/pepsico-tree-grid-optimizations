interface TCalendar {
  Close(): void;
  OnButtonClick(button: number): number;
  OnCanEditDate(date: Date): boolean;
  OnChange(date: any): boolean;
  OnGetCalendarDate(
    date: Date,
    text: string,
    classes: string[],
    range: boolean
  ): string;
  OnSave(date: any): boolean;

  Buttons: number;
  Buttons2: number;
  Class: string;
  Date: any;
  Range: boolean;
  ReadOnly: boolean;
  RowsNext: number;
  RowsPrev: number;
  Rtl: boolean;
  Texts: Object;
  TimeFormat: string;
}

interface TChartLine {
  Color: string;
  Color2: string;
  Connect: boolean;
  Interpolation: number;
  PointType: number;
  Sort: number;
  Visible: boolean;
  Width: number;
  X: number[];
  Y: number[];
}

interface TCol {
  HasIndex: number;
  readonly MainSec: number;
  readonly Pos: number;
  readonly Sec: number;
}

interface TDialog {
  Close(): void;
  OnClose(): void;

  AppendHeader: boolean;
  Area: Object;
  Base: string;
  Body: string;
  CanFocus: boolean;
  Class: string;
  CloseAfter: boolean;
  CloseClick: boolean;
  CloseClickHeader: boolean;
  CloseClickOut: boolean;
  CloseIn: boolean;
  CloseMove: boolean;
  CloseOut: boolean;
  ClosePlace: boolean;
  CloseTimeout: number;
  FocusTag: Object;
  Foot: string;
  Head: string;
  HeadClose: boolean;
  HeadDrag: boolean;
  Header: string;
  InDiv: boolean;
  MaxHeight: number;
  MaxWidth: number;
  MinEdge: number;
  MinHeight: number;
  MinWidth: number;
  Modal: boolean;
  NoScroll: boolean;
  Position: TPosition;
  ResizeUpdate: boolean;
  Rtl: boolean;
  ScrollUpdate: boolean;
  Shadow: boolean;
  ShadowHeader: boolean;
  ShadowWidth: boolean;
  Shift: number;
  Tag: Object;
  Wrap: number;
}

interface TEdit {
  OnChange(Value: string, Old: string): void;
  OnKeyDown(key: string, event: Event, handled: boolean): void;
  OnStartEdit(): void;
}

interface TGrid {
  AcceptChanges(row?: TRow): void;
  ActionXXX(focused: boolean, test: boolean): boolean;
  AddAutoColPages(): void;
  AddAutoPages(): void;
  AddCol(
    col: string,
    sec: number,
    pos: number,
    width: number,
    show?: boolean,
    type?: string,
    caption?: string
  ): TCol;
  AddColPage(names: string[], def: string, updatefixed?: boolean): void;
  AddCols(
    cols: string[],
    tocol: string,
    right: boolean,
    empty?: boolean,
    focus?: boolean
  ): TCol[];
  AddCustomFormat(format: string, name: string): void;
  AddDataFromServer(Data: string): void;
  AddDependencies(Dependencies: Object[]): void;
  AddGanttRunBox(
    box: Object,
    adjust: string,
    id?: string,
    group?: string,
    test?: boolean
  ): boolean;
  AddGanttRunContainer(
    row: TRow,
    col: string,
    index: number,
    container: string,
    level?: number,
    unique?: boolean
  ): string;
  AddPage(name: string, xml: string, count: number): TRow;
  AddRow(
    parent: TRow,
    next: TRow,
    show?: number,
    id?: string,
    Def?: string
  ): TRow;
  AddRows(
    count: number,
    parent: TRow,
    next: TRow,
    focus?: boolean,
    test?: boolean
  ): TRow[];
  AjaxCall(Source: Object, Data: string, Func: Function): string;
  AnimateCell(row: TRow, col: string, animation: string, func: Function): void;
  AnimateCol(col: string, animation: string, func: Function): void;
  AnimateRow(
    row: TRow,
    animation: string,
    childrenanimation: string,
    func: Function
  ): void;
  ApplyMedia(): boolean;
  ButtonClick(row: TRow, col: string): void;
  CalcWidth(col: string, noupdate?: boolean, rows?: TRow[]): void;
  Calculate(show?: boolean, calconly?: boolean): void;
  CanEdit(row: TRow, col: string): number;
  CanFocus(row: TRow, col: string): number;
  CanRedo(): boolean;
  CanUndo(): boolean;
  CanZoomIn(): boolean;
  CanZoomOut(): boolean;
  ChangeColsPositions(
    leftcols: string[],
    cols: string[],
    rightcols: string[]
  ): void;
  ChangeColsVisibility(Show: string[], Hide: string[], prefer?: boolean): void;
  ChangeDef(row: TRow, def: string, show?: boolean, undo?: boolean): void;
  ChangeExclude(exclude: string, name: string, type: number): void;
  ChangeFilter(
    cols: string,
    values: string,
    nofilter: string,
    noclear: boolean,
    filter: TRow
  ): void;
  ChangeGanttRunContainer(
    row: TRow,
    col: string,
    container: string,
    newcontainer: string,
    unique?: boolean
  ): string;
  ChangeMainCol(col: string, noshow: boolean): void;
  ChangeSort(sortcols: string): void;
  ChangeZoom(Name: string): boolean;
  CheckForUpdates(Func: Function): void;
  CheckGantt(row: TRow, col: string, val: string): boolean;
  Clear(): void;
  ClearBody(): void;
  ClearRange(range: any[]): void;
  ClearSelection(type?: number): void;
  ClearUndo(recalc: boolean): void;
  CloseDialog(): void;
  Collapse(row: TRow): void;
  CollapseAll(root?: boolean, test?: boolean): number;
  ColorCell(row: TRow, col: string): void;
  ColorRow(row: TRow): void;
  CopyRange(destination: any[], source: any[], clear?: boolean): void;
  CopyRow(
    row: TRow,
    parent: TRow,
    next: TRow,
    deep?: boolean,
    empty?: boolean
  ): TRow;
  CopyRows(
    rows: TRow[],
    parent: TRow,
    next: TRow,
    deep?: boolean,
    empty?: boolean
  ): TRow[];
  CorrectDependencies(row: TRow, col: string, bar?: any): void;
  CorrectExclude(
    row: TRow,
    col: string,
    show?: boolean,
    objects?: string
  ): void;
  CreateColPages(): void;
  CreatePages(): void;
  CreatePivot(func: Function): boolean;
  CustomUndo(Object: Object, Undo: Function, Redo: Function): void;
  Debug(type: number, arg1: string, arg2: string, arg3: string): void;
  DelGanttRunBox(box: Object, remove: boolean, adjust: string): boolean;
  DelGanttRunContainer(
    row: TRow,
    col: string,
    container: string,
    del: number,
    adjust: string,
    nodisabled: boolean
  ): string;
  DeleteCol(col: string, type: number, test: boolean): boolean;
  DeleteColT(col: string, type: number): boolean;
  DeleteCols(cols: string[], del?: number): number;
  DeleteConstraints(row: TRow, col: string): void;
  DeleteDependencies(Dependencies: Object[]): void;
  DeleteRow(row: TRow, type: number, test?: boolean): boolean;
  DeleteRowT(row: TRow, type: number, noshow?: boolean): void;
  DeleteRows(rows: TRow[], del?: number): number;
  DeleteSheet(name: string): void;
  Dialog(): void;
  DiffGanttDate(
    start: number,
    end: number,
    units?: string,
    last?: string,
    col?: string,
    row?: TRow
  ): number;
  Disable(hard: boolean): void;
  DisableGanttMain(row: TRow, col: string, plan: number, disable: number): void;
  DisableGanttRun(row: TRow, col: string, disable: number, index: number): void;
  DisableGanttRunContainer(
    row: TRow,
    col: string,
    container: string,
    disable: number
  ): string;
  Dispose(): void;
  DoFilter(row?: TRow, col?: string): void;
  DoGrouping(Group: string): void;
  DoSearch(action: string, noshow: boolean): void;
  DownloadPage(row: TRow, Func: Function): void;
  EditGanttCalendars(): void;
  Enable(): void;
  EndEdit(save: boolean): number;
  EndUndo(): void;
  EndUpdate(row: TRow, col: string): void;
  Escape(str: string): string;
  Expand(row: TRow): void;
  ExpandAll(
    parent: TRow,
    loaded?: number,
    levels?: number,
    max?: number,
    test?: boolean,
    render?: number
  ): number;
  ExpandCell(row: TRow, col: string): void;
  ExpandParents(row: TRow): void;
  ExtendGantt(count: number, units: string): void;
  FillRange(destination: any[], source: any[], type?: number): void;
  FilterDateRange(col: string, val: string, name: string, show?: number): void;
  FilterTextRange(col: string, val: string, name: string, show?: number): void;
  FindFormat(
    row: TRow,
    col: string,
    format: string,
    defaultValue: string
  ): string;
  FindGanttRunBoxes(box: Object, type: number): Object[];
  FindType(
    row: TRow,
    col: string,
    val: any,
    refresh?: boolean,
    calc?: boolean
  ): string;
  FinishAnimations(): void;
  Focus(
    row: TRow,
    col: string,
    pagepos?: number,
    Rect?: any[],
    type?: number
  ): boolean;
  GanttUnitsDuration(units: string, col?: string): number;
  GetActiveSheet(): string;
  GetAttribute(row: TRow, col: string, attribute: string): string;
  GetBodyHeight(): number;
  GetBodyScrollHeight(): number;
  GetBodyScrollWidth(sec?: number): number;
  GetBodyWidth(sec?: number): number;
  GetBorder(row: TRow, col: string, edge?: number): any[];
  GetCaption(col: string): string;
  GetCell(row: TRow, col: string): Object;
  GetCellName(row: TRow, col: string): string;
  GetCfgRequest(format?: string): string;
  GetChanges(row?: TRow): string;
  GetChart(id: string): void;
  GetColByIndex(index: any, type?: boolean): string;
  GetColIndex(col: string, type?: boolean): any;
  GetColLeft(col: string): number;
  GetCols(attr1: string, attr2: string): string[];
  GetDefaultsIndex(
    row: TRow,
    col: string,
    val?: string,
    range?: number
  ): number;
  GetDefaultsValue(
    row: TRow,
    col: string,
    index: number,
    range: number
  ): number;
  GetDependencies(
    row: TRow,
    col: string,
    ancestors?: boolean,
    row2?: TRow,
    type?: string,
    box?: string,
    box2?: string
  ): Object[];
  GetDependency(row: TRow, col: string, ancestors?: boolean): Object[];
  GetDetailGrid(row: TRow, idx?: number): TGrid;
  GetFPage(): TRow;
  GetFilter(spec?: boolean): any[];
  GetFirst(parent: TRow, type: number): TRow;
  GetFirstCol(sec?: number): string;
  GetFirstVisible(parent: TRow, type: number): TRow;
  GetFixedRows(): TRow[];
  GetFocusedCols(): string[];
  GetFocusedRows(type: number, attr?: string): TRow[];
  GetFormat(row: TRow, col: string, edit?: boolean): string;
  GetGanttBase(): number;
  GetGanttDate(pos: number, col?: string): number;
  GetGanttFinish(): number;
  GetGanttHeaderXY(row: TRow, col: string, x: number, y: number): Object;
  GetGanttLine(index: number, col?: number): any[];
  GetGanttMain(row: TRow, col: string, plan: number): Object;
  GetGanttPos(date: number, col?: string): number;
  GetGanttPrice(row: TRow, col: string, bar?: number): number;
  GetGanttResourceAvailability(res: string, col: string): number[];
  GetGanttResourceCount(
    res: string,
    start: number,
    end: number,
    type: number,
    col: string,
    def: string
  ): number;
  GetGanttResourcesUsage(
    def: string,
    row: TRow,
    col: string,
    units: string,
    bar: number,
    notmp: boolean
  ): number[];
  GetGanttRun(row: TRow, col: string): Object;
  GetGanttRunBox(row: TRow, col: string, index: number): Object;
  GetGanttRunBoxTag(box: Object): Object;
  GetGanttRunContainerBoxes(
    row: TRow,
    col: string,
    container: string
  ): number[];
  GetGanttRunContainers(row: TRow, col: string, display: number): Object;
  GetGanttRunResourcesString(row: TRow, col?: string): string;
  GetGanttRunSelectedBoxes(row: TRow, col: string): Object[];
  GetGanttRunSelectedCount(): number;
  GetGanttSlack(row: TRow, col: string, bar: string): number;
  GetGanttXY(row: TRow, col: string, x: number, y: number): Object;
  GetIncorrectConstraints(col: string, all: number): Object[];
  GetIncorrectDependencies(col: string): Object[];
  GetLast(parent: TRow, type: number): TRow;
  GetLastCol(sec?: number): string;
  GetLastDataCol(): string;
  GetLastDataRow(): TRow;
  GetLastVisible(parent: TRow, type: number): TRow;
  GetMasterRow(): TRow;
  GetNext(row: TRow, type: number): TRow;
  GetNextCol(col: string): string;
  GetNextShift(row: TRow, pagepos: number, cnt: number): Object[];
  GetNextSibling(row: TRow, type: number): TRow;
  GetNextSiblingVisible(row: TRow, type: number): TRow;
  GetNextVisible(row: TRow, type: number): TRow;
  GetPage(num: number): TRow;
  GetPageNum(page: TRow): number;
  GetPagePos(row: TRow): number;
  GetPos(row: TRow): number;
  GetPrev(row: TRow, type: number): TRow;
  GetPrevCol(col: string): string;
  GetPrevShift(row: TRow, pagepos: number, cnt: number): Object[];
  GetPrevSibling(type: TRow): TRow;
  GetPrevSiblingVisible(type: TRow): TRow;
  GetPrevVisible(row: TRow, type: number): TRow;
  GetPrintable(func: Function): string;
  GetResourceErrors(res: string, type: number): any[];
  GetResourceUsage(
    name: string,
    type: number,
    consume: number,
    row: TRow,
    opt: number,
    def: string,
    col: string
  ): string;
  GetRowById(id: string, attr: string, nofixed: boolean): TRow;
  GetRowByIndex(index: any, type: boolean): TRow;
  GetRowHeight(row: TRow): number;
  GetRowIndex(row: TRow, type: boolean, defaultValue: any): any;
  GetRowPage(row: TRow): TRow;
  GetRowTop(row: TRow): number;
  GetScrollLeft(sec?: number): number;
  GetScrollTop(): number;
  GetSections(): number[];
  GetSelCols(attr?: string): string[];
  GetSelRanges(rowtype?: number, coltype?: number): any[];
  GetSelRows(type?: number, attr?: string): TRow[];
  GetSheets(hidden: boolean): string[];
  GetShownCols(sec?: number): TRow[];
  GetShownRows(): TRow[];
  GetSpanned(row: TRow, col: string): any[];
  GetString(row: TRow, col: string): string;
  GetStringEdit(row: TRow, col: string): string;
  GetTasksToSchedule(row: TRow, col: string, bar: any, tasks: any): Object[];
  GetType(row: TRow, col: string): string;
  GetUniqueGanttRunContainer(row: TRow, col: string, container: string): string;
  GetUniqueSheet(name: string): string;
  GetValue(row: TRow, col: string): any;
  GetXmlData(type?: string, attrs?: string): string;
  GetZoomList(col: string): Object[];
  GoToNextPage(): void;
  GoToPage(page: TRow): void;
  GoToPrevPage(): void;
  HasChanges(): number;
  HasChildren(row: TRow): boolean;
  HasDependencies(): boolean;
  HasFilter(): number;
  HasGantt(): boolean;
  HasSheet(name: string, hidden: boolean): boolean;
  HideCol(col: string): void;
  HideHint(): void;
  HideMessage(): void;
  HideRow(row: TRow, del?: boolean, noshow?: boolean): void;
  HideTip(): void;
  ImportData(file: Object, nomessage: boolean): void;
  InDefaults(row: TRow, col: string, val?: string, defaults?: string): boolean;
  IncGanttDate(
    start: number,
    dur: number,
    units?: string,
    beg?: boolean,
    col?: string,
    row?: TRow
  ): number;
  IsCellExpanded(row: TRow, col: string): boolean;
  IsFocused(row: TRow, col: string): boolean;
  IsGanttRunContainerSelected(
    row: TRow,
    col: string,
    container: string
  ): boolean;
  IsSelected(row: TRow, col: string): boolean;
  LoadPage(page: TRow): void;
  LoadSheet(name: string, save: boolean): boolean;
  LoadSheetHidden(name: string): TGrid;
  MergeUndo(type1: string, type2: string): void;
  MoveCol(col: string, tocol: string, right: boolean, noshow?: boolean): void;
  MoveRow(row: TRow, parent: TRow, next: TRow, show?: boolean): void;
  MoveRows(row: TRow, rowto: TRow, type: number): void;
  MoveRowsToGrid(
    row: TRow,
    togrid: TGrid,
    torow: TRow,
    type: number,
    copy?: number
  ): TRow;
  MoveSheet(name: string, next: string, copy: boolean): void;
  OnChangeDef(grid: TGrid, row: TRow, def: string): string;
  OnGanttMainChange(
    row: TRow,
    col: string,
    plan: number,
    newValue: Object,
    old: Object,
    action: string
  ): Object;
  OnGanttMainChanged(
    row: TRow,
    col: string,
    plan: number,
    newValue: Object,
    old: Object,
    action: string
  ): void;
  OnGetCellStyle(
    grid: TGrid,
    row: TRow,
    col: string,
    attr: string,
    value: any
  ): any;
  OnGetGanttRunContainer(
    grid: TGrid,
    row: TRow,
    col: string,
    run: Object,
    id: string,
    Rect: number[],
    classArg: string,
    first: number,
    last: number,
    type: number
  ): Object;
  OnRemoveCollapsed(grid: TGrid, row: TRow): void;
  OnRenderPageFinish(grid: TGrid, row: TRow): void;
  OnRenderPageStart(grid: TGrid, row: TRow): void;
  PagePosToRow(page: TRow, pos: number): TRow;
  PivotEscape(value: string): string;
  PivotUnescape(value: string): string;
  PrintTreeGrid(Source: Object, tag?: string, id?: string): TGrid;
  Prompt(
    text: string,
    defaultValue: string,
    func: Function,
    width: number
  ): void;
  ReColor(): void;
  ReadData(source: Object, Func: Function): void;
  Recalculate(row: TRow, col: string, show?: boolean): void;
  RecalculateRows(rows: TRow[], show?: boolean): void;
  RefreshBorder(row: TRow, col: string, edge?: number, span?: number): void;
  RefreshCell(row: TRow, col: string): void;
  RefreshCellAnimate(row: TRow, col: string, animation: string): void;
  RefreshChart(id: string): void;
  RefreshDetail(grid: TGrid, clear: boolean): void;
  RefreshGantt(show?: number, col?: string): void;
  RefreshGanttDependencies(show?: number, col?: string): void;
  RefreshGanttSlack(show?: boolean, min?: number, err?: number): void;
  RefreshNested(row: TRow): void;
  RefreshPage(page: TRow, always?: boolean): void;
  RefreshRow(row: TRow): void;
  Reload(Source?: Object, id?: string, confirm?: boolean): TGrid;
  ReloadBody(Func: Function): void;
  ReloadPage(page: TRow): void;
  RemoveCol(col: string): void;
  RemoveColPage(section: number, count?: number): void;
  RemoveDeletedDependencies(): void;
  RemovePage(page: TRow): boolean;
  RemoveRow(row: TRow): void;
  RenameSheet(name: string, newname: string): string;
  Render(): void;
  RenderBody(): void;
  RenderGanttPage(col: string, left: number, width: number): void;
  Rerender(scroll: boolean, sync: boolean): void;
  ResetChecked(row: TRow, col: string): void;
  ResizeRow(row: TRow, height: number): void;
  RoundGanttDate(
    date: number,
    round: number,
    base?: number,
    col?: string,
    units?: string,
    row?: TRow
  ): number;
  Save(event: Event): void;
  SaveExport(data: string, source: Object): void;
  ScrollIntoView(row: TRow, col: string, pagepos?: number): void;
  ScrollToDate(date: Date, align: string): void;
  ScrollToGanttRunBox(box: Object, type: number): Object;
  SearchRows(action: string, noshow: boolean): void;
  SelectAllRows(select?: number): void;
  SelectCell(row: TRow, col: string, select?: boolean, test?: boolean): boolean;
  SelectCol(col: string, select?: boolean, test?: boolean): void;
  SelectGanttRunBox(box: Object, select: boolean): boolean;
  SelectGanttRunContainer(
    row: TRow,
    col: string,
    container: string,
    select: boolean
  ): boolean;
  SelectGanttRunRange(
    rows: TRow[],
    d1: number,
    d2: number,
    select?: boolean
  ): boolean;
  SelectGanttRunRect(
    r1: TRow,
    x1: number,
    y1: number,
    r2: TRow,
    x2: number,
    y2: number,
    select?: boolean
  ): boolean;
  SelectRange(
    row1: TRow,
    col1: string,
    row2: TRow,
    col2: string,
    select: number,
    type: number,
    test: boolean
  ): number;
  SelectRow(row: TRow, select?: boolean, test?: boolean): boolean;
  SendExport(data: string, url: string, name: string): void;
  SetAttribute(
    row: TRow,
    col: string,
    attribute: string,
    value: string,
    refresh: boolean,
    undo: boolean
  ): string;
  SetBool(row: TRow, col: string, value?: any, test?: boolean): boolean;
  SetBorder(
    row: TRow,
    col: string,
    border: any,
    edge?: number,
    refresh?: number,
    span?: number
  ): void;
  SetBorders(
    range: any[],
    borderout?: any,
    borderin?: any,
    edge?: number
  ): void;
  SetCellStyle(
    row: TRow,
    col: string,
    attrs: Object,
    refresh?: boolean
  ): boolean;
  SetChecked(row: TRow, col: string, value: number): void;
  SetDependency(
    row: TRow,
    col: string,
    dependency: any,
    ancestors?: boolean,
    check?: number,
    refresh?: boolean
  ): boolean;
  SetFilter(name: string, filter: string, col: string, show?: number): void;
  SetGanttBase(date: any, action?: number, col?: string): void;
  SetGanttFinish(date: any, col?: string): void;
  SetGanttLine(
    index: number,
    date1: string,
    date2: string,
    classArg: string,
    edit: boolean,
    update?: boolean,
    col?: string
  ): boolean;
  SetGanttMain(row: TRow, col: string, plan: number, main: Object): void;
  SetGanttRun(row: TRow, col: string, run: Object): void;
  SetGanttRunBox(
    box: Object,
    adjust?: string,
    test?: boolean,
    minwidth?: number
  ): boolean;
  SetGanttShowDependencies(value: boolean, show?: boolean, col?: string): void;
  SetGanttTask(value: string, col?: string): void;
  SetHideExclude(hide: boolean): void;
  SetLanguage(code: string): boolean;
  SetMaxHeight(value: number): void;
  SetNoTreeLines(Value: number): void;
  SetReversedTree(value: boolean, noshow?: boolean): void;
  SetScale(scale: number): void;
  SetScrollLeft(pos: number, sec?: number): void;
  SetScrollTop(pos: number): void;
  SetSession(Session: string): void;
  SetSize(size: string): void;
  SetString(row: TRow, col: string, val: string, refresh?: boolean): void;
  SetStringEdit(row: TRow, col: string, value: string, timeout: boolean): void;
  SetStyle(
    Style: string,
    CSS: string,
    GanttCSS: string,
    GanttStyle: string,
    render: boolean
  ): void;
  SetTimeout(
    code: any,
    time: number,
    ident: string,
    flags: number,
    data: any
  ): boolean;
  SetValue(row: TRow, col: string, val: any, refresh?: boolean): void;
  SetWidth(col: string, dx: number): void;
  SetWordWrap(wrap: boolean): void;
  ShowCalendar(
    row: TRow,
    col: string,
    Calendar: TCalendar,
    Pos?: TPosition,
    Func?: Function,
    Date?: Object,
    always?: boolean
  ): TCalendar;
  ShowCfg(source?: Object, func?: Function, options?: Object): TMenu;
  ShowCol(col: string): void;
  ShowColPages(): void;
  ShowColumns(
    attribute: string,
    caption: string,
    func: Function,
    options: TMenuItem[],
    optionscaption: string
  ): void;
  ShowDefaults(row: TRow, col: string): boolean;
  ShowDetail(row: TRow, detail_grid_id: string, test?: boolean): boolean;
  ShowDialog(
    row: TRow,
    col: string,
    dialog: Object,
    leftalign: number,
    x: number,
    y: number
  ): TMenu;
  ShowGanttCalendars(row: TRow, col: string, sort: boolean): void;
  ShowHint(
    row: TRow,
    col: string,
    staticArg?: boolean,
    test?: boolean
  ): boolean;
  ShowMenu(
    row: TRow,
    col: string,
    Menu: TMenu,
    Pos: TPosition,
    Func: Function,
    Init: string,
    always?: boolean
  ): TMenu;
  ShowMessage(message: string, importance?: number, type?: number): void;
  ShowMessageTime(
    message: string,
    time?: number,
    func?: Function,
    buttons?: string[],
    importance?: number
  ): void;
  ShowPages(): void;
  ShowPopup(Menu: TMenu, Func: Function): TMenu;
  ShowPopupGrid(
    row: TRow,
    col: string,
    data: string,
    width: number,
    height: number,
    Dialog?: TDialog,
    Pos?: TPosition
  ): TGrid;
  ShowProgress(
    caption: string,
    text: string,
    cancel: string,
    pos: number,
    cnt: number
  ): void;
  ShowRow(row: TRow, noshow?: boolean): void;
  ShowTip(tip: string): void;
  ShowTreeLevel(level: number): void;
  SortClick(col: string, desc?: boolean): void;
  SortRow(row: TRow, col?: string, show?: boolean): void;
  SortRows(): void;
  SpanRange(row1: TRow, col1: string, row2: TRow, col2: string): void;
  SplitSpanned(row: TRow, col: string): void;
  StartEdit(row?: TRow, col?: string, empty?: boolean, test?: boolean): boolean;
  StartUndo(): void;
  StartUpdate(): void;
  SwitchPivotGrid(pivot: boolean): void;
  TestCellWidth(row: TRow, col: string): number;
  TestDependencies(Dependencies: Object[], noalert?: boolean): boolean;
  Translate(row: TRow, col: string, text: string, type: string): string;
  Update(): boolean;
  UpdateGanttPage(col: string): number[];
  UpdateHeights(always?: number): boolean;
  UpdateLangFormat(): void;
  UpdatePager(): void;
  UpdatePos(): void;
  UpdateRowHeight(row: TRow, callUpdate: boolean): boolean;
  UploadChanges(row: TRow, Func: Function): void;
  ZoomTo(start: Date, end: Date, width?: number): boolean;

  AllColsSelected: boolean;
  AllSelected: boolean;
  AutoId: number;
  Calendars: Object[];
  Def: TRow[];
  ECol: string;
  ERow: TRow;
  FCol: string;
  FPagePos: number;
  FRect: any[];
  FRow: TRow;
  FilterCount: number;
  GanttUpdate: boolean;
  IO: Object;
  Lang: Object;
  Loading: boolean;
  Media: Object[];
  MenuCfg: Object;
  MenuExport: Object;
  MenuPrint: Object;
  Pager: Object;
  Pagers: Object[];
  RemovedColPages: string[];
  RemovedPages: TRow;
  Rendering: boolean;
  Resources: Object[];
  SearchCount: number;
  Source: Object;
  Toolbar: Object | TRow;
  Touched: number;
  readonly ACol: string;
  readonly ARow: TRow;
  readonly Body: TRow;
  readonly ColNames: string[];
  readonly Cols: TCol[];
  readonly EditMode: boolean;
  readonly Filter: TRow;
  readonly Foot: TRow;
  readonly Head: TRow;
  readonly Header: TRow;
  readonly Index: number;
  readonly LoadedCount: number;
  readonly MainTag: Object;
  readonly NestedGrid: string;
  readonly RowCount: number;
  readonly Rows: TRow[];
  readonly Solid: TRow;
  readonly id: string;
}

interface TLineChart {
  AxisX: number;
  AxisY: number;
  Bottom: number;
  Caption: string;
  ChartAddX: number;
  ChartAddY: number;
  ChartRoundX: number;
  ChartRoundY: number;
  Class: string;
  Default: TChartLine;
  Height: number;
  LabelX: number;
  LabelY: number;
  LabelYFormat: string;
  Left: number;
  Lines: TChartLine[];
  MaxX: number;
  MaxY: number;
  MinX: number;
  MinY: number;
  Right: number;
  Top: number;
  Width: number;
  id: string;
}

interface TMenu {
  Close(): void;
  FindItem(Name: string): TMenuItem;
  OnButton(button: string): boolean;
  OnExpand(Item: TMenuItem): boolean;
  OnItemChanged(Item: TMenuItem, Value: string): string;
  OnMove(Item: TMenuItem): void;
  OnMoveOut(dir: number): boolean;
  OnSave(Item: TMenuItem, Data: string): boolean;
  OnSubmenu(Item: TMenuItem, Submenu: TMenu, Pos: TPosition): TMenu;
  OnTab(dir: boolean, event: Event): void;
  SetText(Item: TMenuItem, Text: string): void;
  SetValue(Item: TMenuItem, Value: any): void;

  AutoColumns: number;
  Buttons: string[];
  ClassEnum: string;
  ClassMenu: string;
  CollapseOther: boolean;
  Cursor: string;
  CursorValue: string;
  Default: TMenuItem;
  EnterSwitches: boolean;
  EnumTime: number;
  ExpandTime: number;
  Horz: number;
  IgnoreSpace: boolean;
  Indent: number;
  Input: Object;
  ItemAlign: string;
  ItemHeight: number;
  Items: TMenuItem[];
  NameSeparator: string;
  PageLength: number;
  Popup: boolean;
  SaveType: number;
  Separator: string;
  SeparatorReplace: string;
  ShowCursor: boolean;
  ShowHint: boolean;
  ShowTree: boolean;
  SubmenuTime: number;
  Texts: Object;
  TipAlign: string;
  TipEnd: number;
  TipStart: number;
}

interface TMenuItem {
  OnChanged(Value: string): string;
  OnClick(): boolean;

  Align: string;
  Bool: boolean;
  Caption: boolean;
  CheckAll: boolean;
  Class: string;
  ClassName: string;
  ClassValue: string;
  ColumnSizes: string;
  Columns: number;
  Default: TMenuItem;
  Disabled: boolean;
  Edit: boolean;
  Enum: boolean;
  EnumColumns: number;
  Expanded: number;
  Group: number;
  GroupAll: number;
  HText: string;
  Height: number;
  Hidden: number;
  Icon: string;
  IconWidth: number;
  Items: TMenuItem[];
  Left: boolean;
  LeftHtml: string;
  LeftWidth: number;
  Level: boolean;
  Menu: boolean;
  MenuAlign: string;
  MenuColumns: number;
  Name: string;
  NoAll: boolean;
  Range: number;
  RightHtml: string;
  RightWidth: number;
  ShowIcon: number;
  Text: string;
  TextWidth: number;
  Tip: string;
  TipXXX: string;
  Uncheck: boolean;
  VText: string;
  Value: boolean | string;
  ValueAll: string;
  Width: number;
}

interface TPosition {
  Align: string;
  AlignHeader: string;
  Height: number;
  Mouse: boolean;
  Move: boolean;
  MoveMouse: number;
  Realign: boolean;
  Resize: boolean;
  Tag: Object;
  Width: number;
  X: number;
  Y: number;
}

interface TRow {
  Def: string;
  GroupCol: string;
  GroupPos: number;
  HasIndex: number;
  Kind: string;
  Level: number;
  readonly Fixed: string;
  readonly firstChild: TRow;
  readonly lastChild: TRow;
  readonly nextSibling: TRow;
  readonly parentNode: TRow;
  readonly previousSibling: TRow;
  readonly id: string;
}

interface Grids {
  // OnClick(): void;
  OnClick(
    grid: TGrid,
    row: TRow,
    col: string,
    x: number,
    y: number,
    event: Event
  ): boolean;
  GenerateId(row: TRow): string;
  OnClickCell(G: any, R: any, C: any, V: any): void;
  LoadCfg(cookie?: string): void;
  OnAfterColResize(grid: TGrid, col: string, row: TRow, chg: number): void;
  OnAfterColumnsChanged(grid: TGrid): boolean;
  OnAfterSave(grid: TGrid, result: number, autoupdate: boolean): void;
  OnAfterSectionResize(grid: TGrid, section: number): void;
  OnAfterSetStyle(
    grid: TGrid,
    Style: string,
    CSS: string,
    GanttCSS: string,
    GanttStyle: string
  ): void;
  OnAfterValueChanged(grid: TGrid, row: TRow, col: string, val: any): void;
  OnAutoFill(
    grid: TGrid,
    r1: TRow,
    c1: string,
    r2: TRow,
    c2: string,
    rdir: boolean,
    cdir: boolean,
    ro: TRow,
    co: string
  ): boolean;
  OnAutoFillFinish(
    grid: TGrid,
    r1: TRow,
    c1: string,
    r2: TRow,
    c2: string,
    rdir: boolean,
    cdir: boolean,
    ro: TRow,
    co: string
  ): void;
  OnAutoFillValue(
    grid: TGrid,
    row: TRow,
    col: string,
    orow: TRow,
    ocol: string,
    val: any,
    prevval: any,
    rowpos: number,
    colpos: number,
    orow2: TRow,
    ocol2: string,
    oldval: any,
    attrvalues: any[],
    attrnames: string[],
    errors: Object
  ): any;
  OnAutoFillValues(
    grid: TGrid,
    Values: any[],
    Rows: TRow[],
    Cols: string[],
    orcnt: number,
    occnt: number,
    rcnt: number,
    ccnt: number,
    rdir: boolean,
    cdir: boolean
  ): boolean;
  OnBlur(grid: TGrid, orow: TRow, ocol: string, orect: any[]): void;
  OnButtonClick(
    grid: TGrid,
    row: TRow,
    col: string,
    x: number,
    y: number
  ): boolean;
  OnButtonListClick(
    grid: TGrid,
    row: TRow,
    col: string,
    item: string,
    index: number
  ): void;
  OnCalculate(
    grid: TGrid,
    show: boolean,
    row: TRow,
    col: string,
    fixedonly: boolean
  ): boolean;
  OnCalculateCell(
    grid: TGrid,
    row: TRow,
    col: string,
    val: any,
    show: boolean,
    Calc: any
  ): any;
  OnCalculateFinish(grid: TGrid, show: boolean, row: TRow, col: string): void;
  OnCanColDelete(
    grid: TGrid,
    col: string,
    type: number,
    cols: string[]
  ): boolean;
  OnCanDrop(
    grid: TGrid,
    row: TRow,
    togrid: TGrid,
    torow: TRow,
    type: number,
    copy: boolean,
    rows: TRow[]
  ): number;
  OnCanEdit(grid: TGrid, row: TRow, col: string, mode: number): number;
  OnCanEditDate(grid: TGrid, row: TRow, col: string, date: Date): boolean;
  OnCanReload(grid: TGrid, changed: number, cancel: boolean): boolean;
  OnCanRowAdd(grid: TGrid, parent: TRow, next: TRow): boolean;
  OnCanRowDelete(grid: TGrid, row: TRow, type: number, rows: TRow[]): number;
  OnCanSelectGanttRun(
    grid: TGrid,
    row: TRow,
    col: string,
    run: Object,
    index: number,
    select: boolean,
    container: string
  ): boolean;
  OnCfgChanged(grid: TGrid, Menu: TMenu, update: number): void;
  OnCfgLoaded(grid: TGrid, cfg: string): void;
  OnCfgSaved(grid: TGrid, cfg: string): void;
  OnChangeId(grid: TGrid, row: TRow, col: string, oldvalue: any): void;
  OnCheckDependencies(grid: TGrid, Dependency: Object[]): boolean;
  OnCheckGantt(grid: TGrid, row: TRow, col: string, newval: string): any;
  OnClearChooseCells(
    grid: TGrid,
    row: TRow,
    col: string,
    selection: number,
    input: Object,
    replace: number
  ): number[];
  OnClearRow(grid: TGrid, row: TRow, col: string): void;
  OnClickPagerPage(
    Grid: TGrid,
    Pager: Object,
    Page: any,
    Page2: any,
    Active: boolean
  ): boolean;
  OnCloseMenu(
    grid: TGrid,
    Menu: TMenu,
    source: Object,
    options: Object,
    saved: boolean
  ): void;
  OnColDelete(grid: TGrid, col: string): void;
  OnColIndex(grid: TGrid, values: string[]): boolean;
  OnColMove(grid: TGrid, col: string, copy: string): void;
  OnColPageAdded(grid: TGrid, pos: number): void;
  OnColResize(grid: TGrid, col: string): void;
  OnColShow(grid: TGrid, col: string, hide: boolean): boolean;
  OnColUndelete(grid: TGrid, col: string): void;
  OnColsAdd(
    grid: TGrid,
    cols: string[],
    tocol: string,
    right: boolean,
    empty: boolean
  ): boolean;
  OnColumnsChanged(grid: TGrid, cols: boolean[], count: number): boolean;
  OnColumnsFinish(grid: TGrid, Menu: TMenu): boolean;
  OnContextMenu(grid: TGrid, row: TRow, col: string, result: string): boolean;
  OnCopy(grid: TGrid, txt: string): string;
  OnCopyStart(grid: TGrid): boolean;
  OnCorrectDependencies(
    grid: TGrid,
    A: Object[],
    R: TRow[],
    error: boolean,
    row: TRow,
    col: string,
    slack: boolean
  ): boolean;
  OnCorrectDependenciesFinish(
    grid: TGrid,
    A: Object[],
    deperr: boolean,
    consterr: boolean
  ): boolean;
  OnCorrectDependenciesStart(grid: TGrid, A: Object[]): boolean;
  OnCreateCPage(grid: TGrid, row: TRow): void;
  OnCreateCfg(grid: TGrid): boolean;
  OnCreateGroup(grid: TGrid, group: TRow, col: string, val: string): void;
  OnCreateMenu(
    grid: TGrid,
    Menu: TMenu,
    source: Object,
    options: Object
  ): boolean;
  OnCustomAjax(
    grid: TGrid,
    source: Object,
    data: string,
    Func: Function
  ): boolean;
  OnCustomEndEdit(
    grid: TGrid,
    row: TRow,
    col: string,
    save: boolean,
    custom: any
  ): string;
  OnCustomStartEdit(
    grid: TGrid,
    row: TRow,
    col: string,
    val: string,
    cell: HTMLElement,
    width: number
  ): any;
  OnDataError(
    grid: TGrid,
    source: Object,
    result: number,
    message: string,
    data: string
  ): void;
  OnDataGet(grid: TGrid, source: Object, data: string, IO: Object): string;
  OnDataParse(grid: TGrid, source: Object, data: string): string;
  OnDataReceive(grid: TGrid, source: Object): void;
  OnDataSend(grid: TGrid, source: Object, data: string, Func: Function): any;
  OnDatesClose(grid: TGrid, dates: TGrid, saved: boolean): void;
  OnDblClick(
    grid: TGrid,
    row: TRow,
    col: string,
    x: number,
    y: number,
    event: Event
  ): boolean;
  OnDebug(grid: TGrid, level: number, arguments: any[]): boolean;
  OnDeleteAll(grid: TGrid, type: number): boolean;
  OnDisable(grid: TGrid): void;
  OnDisplaceRow(grid: TGrid, row: TRow, col: string): void;
  OnDisplayRow(grid: TGrid, row: TRow): void;
  OnDownloadPage(grid: TGrid, row: TRow, func: Function): boolean;
  OnDragGantt(
    grid: TGrid,
    row: TRow,
    col: string,
    name: string,
    start: number,
    end: number,
    oldstart: number,
    oldend: number,
    dir: number,
    XY: Object,
    keyprefix: string,
    clientX: number,
    clientY: number
  ): number;
  OnDragGanttDependency(
    grid: TGrid,
    row: TRow,
    col: string,
    XYSrc: Object,
    torow: TRow,
    XYDest: Object,
    end: boolean,
    keyprefix: string,
    clientX: number,
    clientY: number
  ): any;
  OnDragGanttRun(
    grid: TGrid,
    row: TRow,
    col: string,
    index: number,
    newValue: number,
    old: number,
    change: number,
    dir: number,
    start: boolean,
    XY: Object,
    keyprefix: string,
    clientX: number,
    clientY: number
  ): number;
  OnDropCols(
    grid: TGrid,
    row: TRow,
    col: string,
    value: string,
    togrid: TGrid,
    torow: TRow,
    tocol: string,
    topos: number,
    drop: boolean
  ): number;
  OnEditAttrs(
    grid: TGrid,
    row: TRow,
    col: string,
    value: any,
    oldvalue: any,
    attrvalues: any[],
    attrnames: string[],
    errors: Object
  ): any;
  OnEditErrors(grid: TGrid, errors: Object): boolean;
  OnEmptyCol(grid: TGrid, col: string): boolean;
  OnEmptyRow(grid: TGrid, row: TRow): boolean;
  OnEnable(grid: TGrid): void;
  OnEndDrag(
    grid: TGrid,
    row: TRow,
    togrid: TGrid,
    torow: TRow,
    type: number,
    X: number,
    Y: number,
    copy: boolean,
    rows: TRow[]
  ): number;
  OnEndDragCell(
    grid: TGrid,
    row: TRow,
    col: string,
    togrid: TGrid,
    torow: TRow,
    tocol: string,
    X: number,
    Y: number
  ): void;
  OnEndDragGantt(
    grid: TGrid,
    row: TRow,
    col: string,
    name: string,
    start: number,
    end: number,
    oldstart: number,
    oldend: number,
    dir: number,
    XY: Object,
    keyprefix: string,
    clientX: number,
    clientY: number
  ): boolean;
  OnEndDragGanttDependency(grid: TGrid, New: Object[], Old: Object[]): boolean;
  OnEndDragGanttRange(
    grid: TGrid,
    d1: number,
    d2: number,
    action: string
  ): string;
  OnEndDragGanttRun(
    grid: TGrid,
    row: TRow,
    col: string,
    index: number,
    run: Object,
    type: number,
    dir: number,
    XY: Object,
    keyprefix: string,
    clientX: number,
    clientY: number
  ): boolean;
  OnEndEdit(
    grid: TGrid,
    row: TRow,
    col: string,
    save: boolean,
    val: any,
    raw: string
  ): any;
  OnEndedDrag(
    grid: TGrid,
    row: TRow,
    togrid: TGrid,
    torow: TRow,
    type: number,
    X: number,
    Y: number,
    copy: boolean,
    rows: TRow[]
  ): void;
  OnExpand(grid: TGrid, row: TRow): boolean;
  OnExpandAllFinish(grid: TGrid, cancelled: boolean): void;
  OnExport(grid: TGrid, data: string, pdf: boolean): string;
  OnExportInit(
    grid: TGrid,
    Cols: string[],
    Rows: string[],
    source: Object
  ): boolean;
  OnExportStart(grid: TGrid, pdf: boolean): boolean;
  OnFilter(grid: TGrid, type: number): boolean;
  OnFilterFinish(grid: TGrid, type: number): void;
  OnFindType(
    grid: TGrid,
    row: TRow,
    col: string,
    type: string,
    val: any,
    calc: boolean
  ): string;
  OnFocus(
    grid: TGrid,
    row: TRow,
    col: string,
    orow: TRow,
    ocol: string,
    pagepos: number,
    rect: any[],
    orect: any[]
  ): void;
  OnFormula(
    grid: TGrid,
    row: TRow,
    col: string,
    value: any,
    oldvalue: any,
    formula: string,
    errors: Object
  ): any;
  OnGanttChange(
    grid: TGrid,
    row: TRow,
    col: string,
    item: string,
    val: any,
    val2: any
  ): boolean;
  OnGanttChanged(
    grid: TGrid,
    row: TRow,
    col: string,
    item: string,
    val: any,
    val2: any
  ): void;
  OnGanttDragTip(
    grid: TGrid,
    row: TRow,
    col: string,
    tip: string,
    XY: Object,
    dir: number,
    start: number,
    end: number,
    duration: number,
    x: number,
    y: number
  ): string;
  OnGanttFlagMove(
    grid: TGrid,
    row: TRow,
    col: string,
    index: number,
    date: number,
    togrid: TGrid,
    torow: TRow,
    tocol: string,
    toindex: number,
    todate: number
  ): boolean;
  OnGanttFlagMoved(
    grid: TGrid,
    row: TRow,
    col: string,
    index: number,
    date: number,
    togrid: TGrid,
    torow: TRow,
    tocol: string,
    toindex: number,
    todate: number
  ): void;
  OnGanttLineChange(
    grid: TGrid,
    index: number,
    date1: number,
    date2: number,
    classArg: string,
    edit: boolean,
    odate1: number,
    odate2: number,
    oclass: string,
    oedit: boolean
  ): boolean;
  OnGanttLineChanged(
    grid: TGrid,
    index: number,
    date1: number,
    date2: number,
    classArg: string,
    edit: boolean,
    odate1: number,
    odate2: number,
    oclass: string,
    oedit: boolean
  ): void;
  OnGanttMenu(
    grid: TGrid,
    row: TRow,
    col: string,
    Menu: TMenu,
    GanttXY: Object
  ): boolean;
  OnGanttMenuClick(
    grid: TGrid,
    row: TRow,
    col: string,
    name: string,
    Item: TMenuItem,
    GanttXY: Object
  ): boolean;
  OnGanttPage(
    grid: TGrid,
    col: string,
    left: number,
    width: number,
    dragrow: TRow,
    dragrun: Object
  ): boolean;
  OnGanttRunBoxChanged(grid: TGrid, box: Object, old: Object): boolean;
  OnGanttRunBoxNew(grid: TGrid, box: Object): boolean;
  OnGanttRunContainerChange(
    grid: TGrid,
    row: TRow,
    col: string,
    run: Object,
    index: number,
    newcontainer: string[],
    oldcontainer: string[],
    source: TRow
  ): boolean;
  OnGanttRunDrop(
    grid: TGrid,
    row: TRow,
    col: string,
    drop: boolean,
    src: Object,
    index: number,
    keyprefix: string,
    x: number,
    y: number,
    togrid: TGrid,
    torow: TRow,
    tocol: string,
    cellx: number,
    accept: boolean,
    celly: number,
    containers: string[]
  ): number;
  OnGanttRunSelect(
    grid: TGrid,
    row: TRow,
    col: string,
    run: Object,
    index: number,
    select: boolean,
    source: Object
  ): boolean;
  OnGanttSlack(
    grid: TGrid,
    row: TRow,
    col: string,
    bar: string,
    value: number,
    old: number,
    show: boolean
  ): number;
  OnGanttStart(grid: TGrid): boolean;
  OnGanttTip(
    grid: TGrid,
    row: TRow,
    col: string,
    tip: string,
    XY: Object,
    name: string
  ): string;
  OnGenerateId(grid: TGrid, row: TRow, newid: string): string;
  OnGetAvailability(
    grid: TGrid,
    row: TRow,
    col: string,
    value: number,
    src: string,
    Values: any[],
    start: number,
    end: number,
    min: number,
    max: number,
    group: string
  ): boolean;
  OnGetAvailabilityClass(
    grid: TGrid,
    row: TRow,
    col: string,
    value: number,
    src: string,
    cls: string,
    group: string
  ): string;
  OnGetBorder(
    grid: TGrid,
    row: TRow,
    col: string,
    border: any[],
    edge: number
  ): any[];
  OnGetButtonList(grid: TGrid, row: TRow, col: string, list: string): string;
  OnGetCalendarDate(
    grid: TGrid,
    row: TRow,
    col: string,
    date: Date,
    text: string,
    classes: string[],
    range: boolean
  ): string;
  OnGetClass(grid: TGrid, row: TRow, col: string, cls: string): string;
  OnGetColor(
    grid: TGrid,
    row: TRow,
    col: string,
    r: number,
    g: number,
    b: number
  ): string;
  OnGetCopyValue(grid: TGrid, row: TRow, col: string, val: any): any;
  OnGetDefaultColor(
    grid: TGrid,
    row: TRow,
    col: string,
    r: number,
    g: number,
    b: number
  ): number;
  OnGetDefaults(grid: TGrid, row: TRow, col: string, defaults: string): string;
  OnGetDependency(
    grid: TGrid,
    row: TRow,
    col: string,
    dep: any[],
    start: number,
    end: number,
    dur: number
  ): void;
  OnGetEditEnum(grid: TGrid, row: TRow, col: string, editenum: string): string;
  OnGetEnum(grid: TGrid, row: TRow, col: string, enumeration: string): string;
  OnGetEnumKeys(grid: TGrid, row: TRow, col: string, enumkeys: string): string;
  OnGetEnumMenu(grid: TGrid, row: TRow, col: string, enummenu: string): string;
  OnGetExportValue(grid: TGrid, row: TRow, col: string, str: string): string;
  OnGetFilterValue(grid: TGrid, row: TRow, col: string, val: any): any;
  OnGetFilterValue(grid: TGrid, row: TRow, col: string, val: any): string;
  OnGetFormat(
    grid: TGrid,
    row: TRow,
    col: string,
    format: string,
    edit: boolean
  ): string;
  OnGetGanttFlagIcon(
    grid: TGrid,
    row: TRow,
    col: string,
    index: number,
    icon: string
  ): string;
  OnGetGanttFlagIconHover(
    grid: TGrid,
    row: TRow,
    col: string,
    index: number,
    icon: string
  ): string;
  OnGetGanttFlagText(
    grid: TGrid,
    row: TRow,
    col: string,
    index: number,
    text: string
  ): string;
  OnGetGanttFlowHtml(
    grid: TGrid,
    row: TRow,
    col: string,
    index: number,
    width: number,
    comp: number,
    crit: number
  ): string;
  OnGetGanttFormat(grid: TGrid, row: TRow, col: string, text: string): string;
  OnGetGanttHeader(
    grid: TGrid,
    val: string,
    index: number,
    date: number,
    nextdate: number,
    units: string,
    width: number,
    partial: number,
    col: string
  ): string;
  OnGetGanttHtml(
    grid: TGrid,
    row: TRow,
    col: string,
    width: number,
    comp: number,
    crit: number,
    plan: number,
    index: number,
    txt: string,
    left: number,
    maxwidth: number,
    cls: string[]
  ): string;
  OnGetGanttMenu(
    grid: TGrid,
    row: TRow,
    col: string,
    menu: string,
    GanttXY: Object
  ): string;
  OnGetGanttRunClass(
    grid: TGrid,
    row: TRow,
    col: string,
    run: Object,
    index: number,
    cls: string
  ): string;
  OnGetGanttRunRect(
    grid: TGrid,
    row: TRow,
    col: string,
    run: Object,
    index: number,
    Rect: number[],
    type: number
  ): void;
  OnGetGanttRunSideRect(
    grid: TGrid,
    row: TRow,
    col: string,
    run: Object,
    index: number,
    Pos: number[],
    Rect: number[],
    side: number
  ): void;
  OnGetGanttRunSideText(
    grid: TGrid,
    row: TRow,
    col: string,
    run: Object,
    index: number,
    text: string,
    width: number,
    side: number,
    rect: number[]
  ): string;
  OnGetGanttRunText(
    grid: TGrid,
    row: TRow,
    col: string,
    run: Object,
    index: number,
    text: string,
    width: number,
    left: number,
    maxwidth: number,
    cls: string[]
  ): string;
  OnGetGanttSideHtml(
    grid: TGrid,
    row: TRow,
    col: string,
    width: number,
    comp: number,
    crit: number,
    plan: number,
    index: number,
    txt: string,
    side: number
  ): string;
  OnGetGroupDef(grid: TGrid, col: string, def: string): string;
  OnGetHtmlValue(grid: TGrid, row: TRow, col: string, val: any): any;
  OnGetHtmlValue(grid: TGrid, row: TRow, col: string, val: string): string;
  OnGetInputValue(grid: TGrid, row: TRow, col: string, val: string): string;
  OnGetMenu(grid: TGrid, row: TRow, col: string, menu: string): string;
  OnGetPageName(Grid: TGrid, Pager: Object, Page: any, Name: string): string;
  OnGetPageNameValue(grid: TGrid, row: TRow, col: string, val: string): string;
  OnGetPageNumber(grid: TGrid, number: number): string;
  OnGetPageTip(Grid: TGrid, Pager: Object, Page: any, Tip: string): string;
  OnGetPagesCount(Grid: TGrid, Pager: Object): number;
  OnGetPivotValue(grid: TGrid, row: TRow, col: string, val: any): string;
  OnGetResourceUsageRow(grid: TGrid, row: TRow, use: boolean, def: string): any;
  OnGetRowText(
    grid: TGrid,
    row: TRow,
    cols: string[],
    txt: string,
    sel: boolean
  ): string;
  OnGetSortValue(
    grid: TGrid,
    row: TRow,
    col: string,
    val: any,
    desc: boolean,
    group: boolean
  ): string;
  OnGetSuggest(
    grid: TGrid,
    row: TRow,
    col: string,
    suggest: string,
    formula: boolean
  ): string;
  OnGetType(grid: TGrid, row: TRow, col: string, type: string): string;
  OnGetUniqueGanttRunContainer(
    grid: TGrid,
    row: TRow,
    col: string,
    container: string
  ): string;
  OnGoToPage(grid: TGrid, page: TRow, pagepos: number): boolean;
  OnGroup(grid: TGrid, Group: string): boolean;
  OnGroupFinish(grid: TGrid): void;
  OnHint(
    grid: TGrid,
    row: TRow,
    col: string,
    hint: string,
    reason: number
  ): string;
  OnIconClick(
    grid: TGrid,
    row: TRow,
    col: string,
    x: number,
    y: number
  ): boolean;
  OnImportData(grid: TGrid, file: Object, type: number): boolean;
  OnImportDataError(
    grid: TGrid,
    error: any,
    file: Object,
    buffer: Object
  ): boolean;
  OnImportText(grid: TGrid, file: Object, data: Object, type: number): void;
  OnImportedData(
    grid: TGrid,
    file: Object,
    buffer: Object,
    type: number
  ): boolean;
  OnIncDate(date: number, units: string, count: number): number;
  OnKeyDown(
    grid: TGrid,
    key: string,
    event: Event,
    name: string,
    prefix: string
  ): boolean;
  OnKeyPress(
    grid: TGrid,
    key: string,
    event: Event,
    name: string,
    prefix: string
  ): boolean;
  OnKeyUp(
    grid: TGrid,
    key: string,
    event: Event,
    name: string,
    prefix: string
  ): boolean;
  OnLanguageFinish(grid: TGrid, code: string, sync: boolean): void;
  OnLanguageSet(grid: TGrid, code: string, sync: boolean): void;
  OnLimitScroll(
    grid: TGrid,
    clear: boolean,
    nohscroll: boolean,
    novscroll: boolean
  ): number;
  OnLinkClick(
    grid: TGrid,
    row: TRow,
    col: string,
    url: string,
    target: string
  ): boolean;
  OnLoadCfg(grid: TGrid, cfg: string): boolean;
  OnLoadCustomCfg(grid: TGrid, custom: string, cfg: string): void;
  OnLoadError(grid: TGrid): void;
  OnLoadSheet(grid: TGrid, name: string): boolean;
  OnLoaded(grid: TGrid, next: Function): void;
  OnLongClick(
    grid: TGrid,
    row: TRow,
    col: string,
    x: number,
    y: number,
    event: Event
  ): boolean;
  OnMediaApplied(grid: TGrid, changed: boolean, start: boolean): boolean;
  OnMediaApply(grid: TGrid, start: boolean): boolean;
  OnMediaInit(grid: TGrid, Media: Object): void;
  OnMenu(
    grid: TGrid,
    row: TRow,
    col: string,
    menu: TMenu,
    position: TPosition
  ): boolean;
  OnMergeChanged(
    grid: TGrid,
    row: TRow,
    col: string,
    val: string,
    result: string[]
  ): void;
  OnMouseDown(
    grid: TGrid,
    row: TRow,
    col: string,
    x: number,
    y: number,
    event: Event
  ): boolean;
  OnMouseMove(
    grid: TGrid,
    row: TRow,
    col: string,
    x: number,
    y: number,
    event: Event
  ): boolean;
  OnMouseOver(
    grid: TGrid,
    row: TRow,
    col: string,
    orow: TRow,
    ocol: string,
    event: Event
  ): void;
  OnMouseUp(
    grid: TGrid,
    row: TRow,
    col: string,
    x: number,
    y: number,
    event: Event
  ): boolean;
  OnMoveDragCell(
    grid: TGrid,
    row: TRow,
    col: string,
    togrid: TGrid,
    torow: TRow,
    tocol: string,
    X: number,
    Y: number
  ): boolean;
  OnMoveFocus(
    grid: TGrid,
    rect: any[],
    orect: any[],
    Values: any[],
    Rows: TRow[],
    Cols: string[],
    SourceRows: TRow[],
    SourceCols: string[]
  ): any;
  OnMoveFocusFinish(
    grid: TGrid,
    rect: any[],
    orect: any[],
    Values: any[],
    Rows: TRow[],
    Cols: string[],
    SourceRows: TRow[],
    SourceCols: string[]
  ): void;
  OnMoveFocusValue(
    grid: TGrid,
    row: TRow,
    col: string,
    orow: TRow,
    ocol: string,
    value: any,
    oldvalue: any,
    attrvalues: any[],
    errors: string[]
  ): any;
  OnPageReady(grid: TGrid, row: TRow): void;
  OnPaste(grid: TGrid, pastedtext: string[], cols: string[]): boolean;
  OnPasteFinish(grid: TGrid): void;
  OnPasteRow(
    grid: TGrid,
    row: TRow,
    cols: string[],
    values: string[],
    added: boolean
  ): boolean;
  OnPasteRowFinish(
    grid: TGrid,
    row: TRow,
    cols: string[],
    values: string[],
    added: boolean
  ): void;
  OnPasteValue(
    grid: TGrid,
    row: TRow,
    col: string,
    value: any,
    oldvalue: any,
    attrvalues: any[],
    attrnames: string[],
    errors: Object
  ): any;
  OnPivot(
    Pivot: TGrid,
    Master: TGrid,
    Rows: string[],
    Cols: string[],
    Data: string[]
  ): boolean;
  OnPivotFinish(
    Pivot: TGrid,
    Master: TGrid,
    Rows: string[],
    Cols: string[],
    Data: string[]
  ): boolean;
  OnPivotFunc(
    grid: TGrid,
    id: string,
    col: string,
    master: TGrid,
    rows: TRow[],
    values: any[],
    result: any
  ): any;
  OnPrint(grid: TGrid, window: Window, report: string): string;
  OnPrintClose(grid: TGrid, window: Window): void;
  OnPrintEmpty(grid: TGrid): void;
  OnPrintFinish(grid: TGrid, window: Window): boolean;
  OnPrintInit(grid: TGrid, Cols: string[], Rows: string[]): void;
  OnPrintStart(grid: TGrid): boolean;
  OnReadData(grid: TGrid, source: Object, Func: Function): boolean;
  OnReady(grid: any, start: any): void;
  OnRedo(grid: TGrid, action: string): void;
  OnReload(grid: TGrid): boolean;
  OnRemoveAutoColPage(grid: TGrid, cols: string[]): boolean;
  OnRemoveChanged(grid: TGrid, row: TRow): number;
  OnRemoveCollapsed(grid: TGrid, row: TRow): void;
  OnRemoveGroup(grid: TGrid, group: TRow, ungroup: boolean): void;
  OnRemovePage(grid: TGrid, page: TRow): void;
  OnRemovePage(grid: TGrid, row: TRow): void;
  OnRenderChildPartFinish(grid: TGrid, row: TRow, index: number): void;
  OnRenderChildPartStart(grid: TGrid, row: TRow, index: number): void;
  OnRenderColPageFinish(grid: TGrid, sec: number): void;
  OnRenderColPageStart(grid: TGrid, sec: number): void;
  OnRenderFinish(grid: TGrid): void;
  OnRenderPageFinish(grid: TGrid, row: TRow): void;
  OnRenderPageFinish(grid: TGrid, page: TRow): void;
  OnRenderPageStart(grid: TGrid, row: TRow): void;
  OnRenderPageStart(grid: TGrid, page: TRow): void;
  OnRenderRow(grid: TGrid, row: TRow, col: string): void;
  OnRenderStart(grid: TGrid): boolean;
  OnResizeMain(grid: TGrid): void;
  OnRestoreCfg(grid: TGrid): boolean;
  OnResultMask(
    grid: TGrid,
    row: TRow,
    col: string,
    val: string,
    errors: Object
  ): number;
  OnRightClick(
    grid: TGrid,
    row: TRow,
    col: string,
    x: number,
    y: number,
    event: Event
  ): boolean;
  OnRightLongClick(
    grid: TGrid,
    row: TRow,
    col: string,
    x: number,
    y: number,
    event: Event
  ): boolean;
  OnRoundDate(date: number, units: string): number;
  OnRowAdd(grid: TGrid, row: TRow): void;
  OnRowAdded(grid: TGrid, row: TRow): void;
  OnRowCopy(grid: TGrid, row: TRow, source: TRow, empty: boolean): void;
  OnRowCopyDef(grid: TGrid, row: TRow, source: TRow, move: boolean): boolean;
  OnRowCopyId(grid: TGrid, row: TRow, source: TRow, move: boolean): void;
  OnRowCopyId(grid: TGrid, row: TRow, source: TRow, move: boolean): boolean;
  OnRowDelete(grid: TGrid, row: TRow, type: number): void;
  OnRowFilter(grid: TGrid, row: TRow, show: number): number;
  OnRowIndex(grid: TGrid, values: string[]): boolean;
  OnRowMove(grid: TGrid, row: TRow, oldparent: TRow, oldnext: TRow): void;
  OnRowMoveToGrid(
    grid: TGrid,
    row: TRow,
    togrid: TGrid,
    torow: TRow,
    copy: boolean
  ): number;
  OnRowResize(
    grid: TGrid,
    row: TRow,
    newheight: number,
    oldheight: number
  ): number;
  OnRowSearch(
    grid: TGrid,
    row: TRow,
    col: string,
    found: boolean,
    func: Function,
    userdata: any
  ): number;
  OnRowUndelete(grid: TGrid, row: TRow): void;
  OnSave(grid: TGrid, row: TRow, autoupdate: boolean): boolean;
  OnSaveCfg(grid: TGrid, returnArg: boolean): boolean;
  OnSaveCustomCfg(grid: TGrid, returnArg: boolean): string;
  OnSaveMenu(
    grid: TGrid,
    Menu: TMenu,
    source: Object,
    options: Object
  ): boolean;
  OnScroll(
    grid: TGrid,
    hpos: number,
    vpos: number,
    oldhpos: number,
    oldvpos: number
  ): void;
  OnScrollCol(grid: TGrid, col: string): void;
  OnScrollRow(grid: TGrid, row: TRow): void;
  OnSearch(grid: TGrid, Action: string, Show: boolean): boolean;
  OnSearchFinish(grid: TGrid, Action: string, Show: boolean): void;
  OnSectionResize(grid: TGrid, section: number, dw: number): void;
  OnSelect(grid: TGrid, row: TRow, deselect: boolean, Cols: string[]): boolean;
  OnSelectAll(grid: TGrid, select: number, type: number): boolean;
  OnSelectGanttRunRect(
    grid: TGrid,
    r1: TRow,
    x1: number,
    y1: number,
    r2: TRow,
    x2: number,
    y2: number
  ): boolean;
  OnSetChooseCells(
    grid: TGrid,
    range: Object,
    selection: number,
    input: Object,
    text: string
  ): string;
  OnSetFile(grid: TGrid, row: TRow, col: string, input: Object): boolean;
  OnSetInputValue(grid: TGrid, row: TRow, col: string, val: string): string;
  OnSetLanguage(grid: TGrid, code: string, sync: boolean): boolean;
  OnSetPageName(grid: TGrid, page: TRow): void;
  OnSetRowId(grid: TGrid, row: TRow, newid: string): string;
  OnSetStyle(
    grid: TGrid,
    Style: string,
    CSS: string,
    GanttCSS: string,
    GanttStyle: string
  ): boolean;
  OnShowButtonList(
    grid: TGrid,
    row: TRow,
    col: string,
    Menu: TMenu,
    Pos: TPosition
  ): void;
  OnShowCfg(grid: TGrid, Menu: TMenu): void;
  OnShowColumns(grid: TGrid, Menu: TMenu): boolean;
  OnShowDefaults(
    grid: TGrid,
    row: TRow,
    col: string,
    Menu: TMenu,
    Pos: TPosition
  ): string;
  OnShowDetail(master: TGrid, detail: TGrid, row: TRow, old: TRow): boolean;
  OnShowDetailFinish(master: TGrid, detail: TGrid, row: TRow): void;
  OnShowMenu(
    grid: TGrid,
    Menu: TMenu,
    source: Object,
    options: Object
  ): boolean;
  OnShowMessage(grid: TGrid, message: HTMLElement): void;
  OnShowNested(master: TGrid, row: TRow, detail: Object, id: string): boolean;
  OnShowRow(grid: TGrid, row: TRow, hide: boolean): boolean;
  OnSizeError(grid: TGrid, width: number, height: number): boolean;
  OnSort(grid: TGrid, col: string, sort: string): number;
  OnSortFinish(grid: TGrid): void;
  OnStartDrag(
    grid: TGrid,
    row: TRow,
    col: string,
    more: boolean,
    rows: TRow[]
  ): boolean;
  OnStartDragCell(grid: TGrid, row: TRow, col: string, html: string): string;
  OnStartDragGantt(
    grid: TGrid,
    row: TRow,
    col: string,
    name: string,
    start: number,
    end: number,
    dir: number,
    XY: Object,
    keyprefix: string,
    clientX: number,
    clientY: number
  ): boolean;
  OnStartDragGanttDependency(
    grid: TGrid,
    row: TRow,
    col: string,
    XY: Object,
    color: number,
    start: boolean,
    keyprefix: string,
    clientX: number,
    clientY: number
  ): any;
  OnStartEdit(grid: TGrid, row: TRow, col: string): boolean;
  OnSuggest(
    grid: TGrid,
    row: TRow,
    col: string,
    val: string,
    suggest: TMenu,
    formula: boolean
  ): string;
  OnTabDelete(grid: TGrid, row: TRow, col: string): boolean;
  OnTabDrop(
    grid: TGrid,
    row: TRow,
    col: string,
    tocol: string,
    copy: boolean
  ): any;
  OnTestConstraints(
    grid: TGrid,
    row: TRow,
    col: string,
    type: string,
    change: number,
    d1: number,
    d2: number
  ): number;
  OnTip(
    grid: TGrid,
    row: TRow,
    col: string,
    tip: string,
    clientX: number,
    clientY: number,
    X: number,
    Y: number
  ): string;
  OnTranslate(
    grid: TGrid,
    row: TRow,
    col: string,
    text: string,
    type: string
  ): string;
  OnTranslated(
    grid: TGrid,
    row: TRow,
    col: string,
    text: string,
    type: string
  ): string;
  OnUndo(grid: TGrid, action: string): void;
  OnUpCounter(grid: TGrid): boolean;
  OnUpdate(grid: TGrid): void;
  OnUpdateRow(grid: TGrid, row: TRow, update: TRow): void;
  OnUpdated(grid: TGrid): void;
  OnUpload(grid: TGrid, xml: string, row: TRow, autoupdate: boolean): string;
  OnValidate(
    grid: TGrid,
    row: TRow,
    col: string,
    err: boolean,
    errors: Object
  ): boolean;
  OnValidateError(grid: TGrid, rows: TRow[], cols: string[]): number;
  OnValueChanged(
    grid: any,
    row: any,
    col: string,
    val: any,
    oldval: any,
    errors: Object
  ): any;
  OnZoom(grid: TGrid, zoom: string, FirstDate: number, LastDate: number): void;
  RestoreCfg(type: number): void;
  SaveCfg(returnArg?: boolean): void;
  UpdateLimitScroll(noupdate: boolean): void;

  Active: TGrid;
  Alert: boolean;
  CookieExpires: number;
  CookieParam: string;
  Focused: TGrid;
  NoTryActiveX: number;
  Tablet: boolean;
}

declare var Grids: Grids;

declare var TGrid: TGrid;

declare function AddEvent(name: string, id: string, func: Function): void;

declare function AddGanttUnits(
  units: string,
  width: number,
  exactwidth: number
): void;

declare function AjaxCall(Url: string, Data: string, Func: Function): string;

declare function CancelEvent(event: Event, type?: number): void;

declare function CreateXML(str: string): Object;

declare function DateToString(date: Date, format: string): string;

declare function DelEvent(name: string, id: string, func: Function): void;

declare function DisposeGrids(): void;

declare function DragByMouse(
  tag: Object,
  event: Event,
  move?: number,
  html?: string,
  func?: Function,
  param?: Object
): void;

declare function ElemToParent(elem: Object, parent: Object): number[];

declare function EventXYToElement(event: Event, elem: Object): number[];

declare function Get(row: TRow, attr: string): Object;

declare function GetGrids(): TGrid[];

declare function GetStyle(Elem: Object): any;

declare function GetWindowScroll(): number[];

declare function GetWindowSize(): number[];

declare function Is(row: TRow, attr: string): boolean;

declare function LoadCache(id: string, session?: boolean): string;

declare function NumberToString(num: Number, format: string): string;

declare function SaveCache(id: string, val: string, session?: boolean): void;

declare function SetEvent(name: string, id: string, func: Function): void;

declare function ShowCalendar(
  Calendar: TCalendar,
  Pos: TPosition,
  Func: Function,
  Date: any
): TCalendar;

declare function ShowDialog(Dialog: TDialog, Pos: TPosition): TDialog;

declare function ShowLineChart(Chart: TLineChart, tag: string): TLineChart;

declare function ShowMenu(
  Menu: TMenu,
  Pos: TPosition,
  Func: Function,
  Init: string
): TMenu;

declare function ShowPopup(Menu: TMenu, Func: Function, Init: string): TMenu;

declare function StartTreeGrid(): void;

declare function StringToDate(str: string, format: string): Date;

declare function StringToNumber(str: string, format: string): Number;

declare function TGAddEvent(
  name: string,
  id: string,
  func: Function,
  ident: string
): number;

declare function TGAnimate(
  element: Element,
  animationcode: string,
  func: Function,
  noclr: boolean
): void;

declare function TGDelEvent(name: string, id: string, ident: any): boolean;

declare function TGGetEvent(name: string, id: string, ident: string): Function;

declare function TGSetEvent(
  name: string,
  id: string,
  func: Function,
  ident: string
): boolean;

declare function TreeGridLoaded(Input: any): void;

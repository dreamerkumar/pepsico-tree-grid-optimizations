import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetKeyfigureDataService {

  constructor(private httpClient: HttpClient) { }

  public getKeyFigureData(): Observable<{}> {
    const postData = {
      allLocSetting: "true",
      lang: "en",
      locDateTime: null,
      locNbrList: [],
      runPlanNbrList: [],
      userType: "00000000"
    };
    return this.httpClient
      .post(`http://localhost:8088/retrieveJobStatus`, postData);
  }

  public _keyFigureLayout: any = {
    Cfg: {
      id: 'KeyFigure',
      Code: 'GTGDTDOWRKEAC',
      Style: 'White',
      MainCol: 'localName',
      // SuppressCfg: '1',
      ReloadChanged: '1',
      Deleting: '0',
      StandardFilter: '2',
      Dragging: 0,
      Undo: '1',
      Size: 'Tiny',
      ExportFormat: 'XLS',
      ExportName: 'KeyFigure',
      ExportType: 'Expanded',
      ExportRows: '500',
      Expanded: '1',
      SelectClass: '0',
      SelectingSingle: '1',
      NoTreeLines: '1',
      DetailOn: 2,
      Alternate: '2',
      AlternateType: '1',
      ColMoving: 0,
      Sorting: 0,
      SaveSelected: '1',
      // SaveFilters: '1',
      SaveExpanded: '2',
      Version: 8,
      SaveVisible: 4,
      PersistentCfg: 3,
      SaveAttrsTrim: 1000,
      // ChildPaging: '2',
      RemoveCollapsed: '2',
      // ChildParts: '2',
      // ChildPartLength: '5',
      // ChildPartMin: '0',
      // MaxChildParts: '20',
      MinBodyRows: 35,
      ConstHeight: '1',
      SyncLanguage: 0,
      ConstWidth: 0,
      // MinTagHeight: '100',
      // MaxHeight: '100',
      // MaxWidth: '1',
      MaxHeightPercent: '1',
      // ExactSize: 1,
      // Paging: '0',
      // ChildParts: '0',
      // ColPaging: '0',

      ChildPaging: '2',
      ChildParts: '2',
      ChildPartLength: '5',
      ChildPartMin: '0',
      // MaxChildParts: '20',
      // tslint:disable-next-line:max-line-length
      // tslint:disable-next-line:max-line-length
      SaveAttrs:
        'TopBarRow,keyFigFilter,TopBarRow,locFilter,TopBarRow,prodName,TopBarRow,srceName,TopBarRow,localTaggName,TopBarRow,localBdcClassDesc,TopBarRow,localBdcSizeDesc,TopBarRow,localBdcFlavorDesc,TopBarRow,localMfgClass,TopBarRow,aggName,TopBarRow,showChart'
    },
    LeftCols: [
      {
        Name: 'localName',
        Width: 300,
        CanEdit: '2',
        CanMove: '0',
        Icon: './assets/folder_icon.png',
        Class: 'setFBold',
        CanExport: '0'
      },
      { Name: 'localShowInfoIcon', Visible: 0, CanExport: '0' },
      {
        Name: 'LegacyIcn',
        Width: 50,
        CanEdit: '2',
        CanMove: '0',
        Align: 'Right',
        CanSort: '0',
        Calculated: '1',
        IconFormula:
          // tslint:disable-next-line:max-line-length
          'localProdStatus === "P" ? "./assets/PlannedStatus.png": localProdStatus === "V"?"./assets/VisibleStatus.png": localProdStatus === "I" ? "./assets/InvisibleStatus.png" : ""',
        IconAlign: 'Left',
        Class: 'planningIcon',
        CanExport: '0'
      },
      {
        Name: 'localLocNbr',
        Align: 'Right',
        CanEdit: '2',
        CanMove: '0',
        Width: 105,
        Calculated: '1',
        IconFormula: 'localShowInfoIcon === 1 ? "./assets/Information.gif":""',
        IconAlign: 'Left',
        Class: 'rightAlign',
        CanExport: '0'
      },
      // Hidden Columns for Export As Excel
      { Name: 'FilterLeafNode', Visible: 0, CanExport: '2' },
      { Name: 'localSapItemId', Visible: 0, Width: 150, Align: 'Right' },
      { Name: 'KeyFigureNumber', Visible: 0, CanExport: '2' },
      { Name: 'KeyFigureColumn', Visible: 0, CanExport: '2' },
      { Name: 'LocationNameColumn', Visible: 0, CanExport: '2' },
      { Name: 'LocationID', Visible: 0, CanExport: '2' },
      { Name: 'ProductColumn', Visible: 0, CanExport: '2' },
      { Name: 'ProductID', Visible: 0, CanExport: '2' },
      { Name: 'ProductStatus', Visible: 0, CanExport: '2' },
      { Name: 'AggregateName', Visible: 0, CanExport: '2' },

      {
        Name: 'beginValue',
        Align: 'Right',
        CanMove: '0',
        CanEdit: '2',
        Width: 130,
        Class: 'borderRight'
      },
      {
        Name: 'dup',
        Width: 2,
        ShowHint: 0,
        Class: 'LaneborderRightbg',
        CanExport: '0',
        CanResize: 0
      },

      // Hidden Columns for Filters
      { Name: 'localMfgClass', Visible: 0, CanExport: '0' },
      { Name: 'aggName', Visible: 0, CanExport: '0' },
      { Name: 'prodName', Visible: 0, CanExport: '0' },
      { Name: 'locFilter', Visible: 0, CanExport: '0' },
      { Name: 'localBdcFlavorDesc', Visible: 0, CanExport: '0' },
      { Name: 'localBdcSizeDesc', Visible: 0, CanExport: '0' },
      { Name: 'localBdcClassDesc', Visible: 0, CanExport: '0' },
      { Name: 'parentName', Visible: 0, CanExport: '0' },
      { Name: 'localProdStatus', Visible: 0, CanExport: '0' },
      { Name: 'beginFlag', Visible: 0, CanExport: '0' },
      { Name: 'hasChild', CanExport: '0', Visible: 0 },
      { Name: 'localLocCtryCode', Visible: 0, CanExport: '0' },
      { Name: 'localLocCoCode', Visible: 0, CanExport: '0' },
      { Name: 'localLocTypeCode', Visible: 0, CanExport: '0' },
      { Name: 'localTaggName', Visible: 0, CanExport: '0' },
      { Name: 'srceName', Visible: 0, CanExport: '0' },
      { Name: 'keyFigFilter', Visible: 0, CanExport: '0' },
      { Name: 'displayLocationAsLeafNode', Visible: 0, CanExport: '0' }
    ],

    Panel: { visible: 1, Select: '0' },
    Def: {
      R: {
        DefEmpty: 'R',
        //  CalcOrder: 'localLocNbrIcon',
        // Calculated: '1',
        CanEdit: '2'
      },

      AggregateFilter: {
        DefEmpty: 'R',
        Calculated: 1,
        CanEdit: '2',
        localTaggNameRange: '1',
        FilterLeafNodeFormula: 'Grid.HasChildren(Row)?"":"Leaf_Node"'
      },

      AggregateFilterSuggested: {
        DefEmpty: 'R',
        Calculated: 1,
        CanEdit: '2',
        localNameIcon: './assets/folder_icon.png',
        FilterLeafNodeFormula: 'Grid.HasChildren(Row)?"":"Leaf_Node"'
      },

      LocFilter: {
        DefEmpty: 'R',
        Calculated: 1,
        CanEdit: '2',
        localNameIcon: './assets/folder.png',
        beginValueFormula: 'beginFlag === "HasBeginValue"? sum(): ""',
        beginValueType: 'Float',
        FilterLeafNodeFormula: 'Grid.HasChildren(Row)? "" :"Leaf_Node"'
      },

      SpecialLocFilter: {
        DefEmpty: 'R',
        Calculated: 1,
        CanEdit: '2',
        localNameIcon: './assets/folder.png',
        beginValueFormula: 'beginFlag === "HasBeginValue"? sum(): ""',
        beginValueType: 'Float'
        // FilterLeafNodeFormula: 'Grid.HasChildren(Row)? "" :"Leaf_Node"',
      },

      HideShowKeyFigure: {
        DefEmpty: 'R',
        Calculated: 1,
        CanEdit: '2',
        localNameIcon: './assets/folder.png',
        beginValueFormula: 'beginFlag === "HasBeginValue"? sum(): ""',
        beginValueType: 'Float'
        // FilterLeafNodeFormula: 'Grid.HasChildren(Row)? "" :"Leaf_Node"',
      },
      HideShowKeyFigureWithoutFormula: {
        DefEmpty: 'R',
        Calculated: 1,
        CanEdit: '2',
        localNameIcon: './assets/folder.png',
        beginValueFormula: 'beginFlag === "HasBeginValue"? sum(): ""',
        beginValueType: 'Float'
        // FilterLeafNodeFormula: 'Grid.HasChildren(Row)?"":"Leaf_Node"',
      },

      FolderImage: {
        localNameIcon: './assets/folder.png',
        CanEdit: '2',
        DefEmpty: 'R',
        FilterLeafNodeFormula: 'Grid.HasChildren(Row)?"":"Leaf_Node"',
        Calculated: 1
      },
      FolderImageNeedSheet: {
        localNameIcon: './assets/folder_icon.png',
        CanEdit: '2',
        DefEmpty: 'R',
        FilterLeafNodeFormula: 'Grid.HasChildren(Row)?"":"Leaf_Node"',
        Calculated: 1
      },
      NoAggregates: {
        DefEmpty: 'R',
        CanEdit: '2',
        localNameIcon: './assets/folder.png',
        localTaggNameRange: '1',
        FilterLeafNodeFormula: 'Grid.HasChildren(Row)?"":"Leaf_Node"',
        // beginValueFormula: 'beginFlag === "HasBeginValue"? sum(): ""',
        // beginValueType: 'Float',
        Calculated: 1
      },

      HasAggregates: {
        DefEmpty: 'R',
        CanEdit: '2',
        Calculated: 1,
        localNameIcon: './assets/folder.png',
        beginValueFormula: 'beginFlag === "HasBeginValue"? sum(): ""',
        FilterLeafNodeFormula: 'Grid.HasChildren(Row)?"":"Leaf_Node"'
      },

      MfgClass: {
        DefEmpty: 'R',
        CanEdit: '2',
        Calculated: 1,
        beginValueFormula: 'beginFlag === "HasBeginValue"? sum(): ""',
        localNameIcon: './assets/folder.png',
        FilterLeafNodeFormula: 'Grid.HasChildren(Row)?"":"Leaf_Node"'
      },
      SrceLevelFilter: {
        DefEmpty: 'R',
        CanEdit: '2',
        FilterLeafNodeFormula: 'Grid.HasChildren(Row)?"":"Leaf_Node"',
        Calculated: 1
      }
    },

    Solid: [
      {
        Kind: 'Space',
        Space: '2',
        Height: '10'
      },

      {
        Kind: 'Topbar',
        id: 'TopBarRow',
        CanExport: '0',

        Cells:
          // tslint:disable-next-line:max-line-length
          'keyFigFilter, locFilter, prodName, srceName, srceNameAll, localTaggName, localBdcClassDesc, localBdcSizeDesc, localBdcFlavorDesc, localMfgClass,localMfgClassAll, aggName, aggNameAll, reset, showChart',

        localMfgClassAllVisible: '0',
        aggNameAllVisible: '0',
        srceNameAllVisible: '0',

        keyFigFilterLabel: '<b>Hide/Show Key Figures&#160;</b>',
        keyFigFilterType: 'Select',
        keyFigFilterDefaults:
          // tslint:disable-next-line:max-line-length
          '{Default:{Left:1},MaxHeight:250,Buttons:["OK","Clear"],Items:"|*RowsDefHideShowKeyFigure|*RowsDefHideShowKeyFigureWithoutFormula|*RowsDefFolderImage"}',
        keyFigFilterRange: '1',
        keyFigFilterRelWidth: '45',
        keyFigFilterOnChange:
          'Grid.FilterTextRange("keyFigFilter",Value,"keyFigFilter")',

        locFilterLabel: '<b>Loc&#160;</b>',
        locFilterType: 'Select',
        locFilterDefaults:
          '{Default:{Left:1},Buttons:["OK","Clear"],Items:"|*RowsDefLocFilter"}',
        locFilterRange: '1',
        locFilterRelWidth: '45',
        locFilterOnChange:
          'Grid.FilterTextRange("locFilter",Value,"locFilter")',
        // tslint:disable-next-line:max-line-length
        // 'Grid.Def["HideShowKeyFigure"].CanFilter = 0;Grid.Def["HideShowKeyFigureWithoutFormula"].CanFilter = 0;Grid.Def["FolderImage"].CanFilter = 0;' +
        // 'Grid.FilterTextRange("locFilter",Value,"locFilter")',

        prodNameLabel: '<b>Prod&#160;</b>',
        prodNameType: 'Select',
        prodNameDefaults:
          '{Default:{Left:1},MaxHeight: 300,Buttons:["OK","Clear"]}',
        prodNameRange: '1',
        prodNameRelWidth: '45',
        prodNameOnChange:
          // tslint:disable-next-line:max-line-length
          // 'Grid.Def["HideShowKeyFigure"].CanFilter = 0;Grid.Def["HideShowKeyFigureWithoutFormula"].CanFilter = 0;Grid.Def["FolderImage"].CanFilter = 0;Grid.Def["LocFilter"].CanFilter = 0;' +
          'Grid.FilterTextRange("prodName",Value,"prodName")',

        srceNameLabel: '<b>Src&#160;</b>',
        srceNameType: 'Select',
        srceNameRange: '1',
        srceNameDefaults:
          '{Default:{Left:1},MaxHeight: 300,Buttons:["OK","Clear"]}',
        srceNameRelWidth: '45',
        srceNameOnChange: 'Grid.FilterTextRange("srceName",Value,"srceName")',

        localTaggNameLabel: '<b>Tags&#160;</b>',
        localTaggNameType: 'Select',
        localTaggNameRange: '1',
        localTaggNameDefaults:
          '{Default:{Left:1},MaxHeight: 300,Buttons:["OK","Clear"]}',
        localTaggNameRelWidth: '45',
        localTaggNameOnChange:
          'Grid.FilterTextRange("localTaggName",Value,"localTaggName")',

        localBdcClassDescLabel: '<b>Cls&#160;</b>',
        localBdcClassDescType: 'Select',
        localBdcClassDescDefaults:
          '{Default:{Left:1},MaxHeight: 300,Buttons:["OK","Clear"]}',

        localBdcClassDescRange: '1',
        localBdcClassDescRelWidth: '45',
        localBdcClassDescOnChange:
          'Grid.FilterTextRange("localBdcClassDesc",Value,"localBdcClassDesc")',

        localBdcSizeDescLabel: '<b>Sz&#160;</b>',
        localBdcSizeDescType: 'Select',
        localBdcSizeDescDefaults:
          '{Default:{Left:1},MaxHeight: 300,Buttons:["OK","Clear"]}',
        localBdcSizeDescRange: '1',
        localBdcSizeDescRelWidth: '45',
        localBdcSizeDescOnChange:
          'Grid.FilterTextRange("localBdcSizeDesc",Value,"localBdcSizeDesc")',

        localBdcFlavorDescLabel: '<b>Fvr&#160;</b>',
        localBdcFlavorDescType: 'Select',
        localBdcFlavorDescDefaults:
          '{Default:{Left:1},MaxHeight: 300,Buttons:["OK","Clear"]}',
        localBdcFlavorDescRange: '1',
        localBdcFlavorDescRelWidth: '45',
        localBdcFlavorDescOnChange:
          'Grid.FilterTextRange("localBdcFlavorDesc",Value,"localBdcFlavorDesc")',

        localMfgClassLabel: '<b>Mfg&#160;</b>',
        localMfgClassType: 'Select',
        localMfgClassDefaults:
          '{Default:{Left:1},MaxHeight: 300,Buttons:["OK","Clear"]}',
        localMfgClassRange: '1',
        localMfgClassRelWidth: '45',
        localMfgClassOnChange:
          'Grid.FilterTextRange("localMfgClass",Row.localMfgClassAll,"localMfgClass")',

        aggNameLabel: '<b>Agg&#160;</b>',
        aggNameType: 'Select',
        aggNameDefaults:
          '{Default:{Left:1},MaxHeight: 300,Buttons:["OK","Clear"]}',
        aggNameRange: '1',
        aggNameRelWidth: '45',
        aggNameOnChange:
          'Grid.FilterTextRange("aggName",Row.aggNameAll,"aggName")',

        showchartLeft: '10',
        showChartType: 'Bool',
        showChartLabelRight: 'Show Chart',
        showChartRelWidth: '30',
        // showChartOnChange: 'showChart()',

        resetLeft: '10',
        resetType: 'Button',
        resetButtonText: 'Reset',
        resetButton: 'Button',
        resetButtonRelWidth: '30',
        resetOnClick:
          'Grid.SetFilter("locFilter"); Grid.SetValue(Grid.GetRowById("TopBarRow"),"locFilter","",1);' +
          'Grid.SetFilter("localMfgClass"); Grid.SetValue(Grid.GetRowById("TopBarRow"),"localMfgClassAll","",1);' +
          'Grid.SetFilter("aggName"); Grid.SetValue(Grid.GetRowById("TopBarRow"),"aggNameAll","",1);' +
          'Grid.SetFilter("localTaggName"); Grid.SetValue(Grid.GetRowById("TopBarRow"),"localTaggName","",1);' +
          'Grid.SetFilter("localBdcClassDesc"); Grid.SetValue(Grid.GetRowById("TopBarRow"),"localBdcClassDesc","",1);' +
          'Grid.SetFilter("prodName"); Grid.SetValue(Grid.GetRowById("TopBarRow"),"prodName","",1);' +
          'Grid.SetFilter("localBdcSizeDesc"); Grid.SetValue(Grid.GetRowById("TopBarRow"),"localBdcSizeDesc","",1);' +
          'Grid.SetFilter("localBdcFlavorDesc"); Grid.SetValue(Grid.GetRowById("TopBarRow"),"localBdcFlavorDesc","",1);' +
          'Grid.SetFilter("localMfgClass"); Grid.SetValue(Grid.GetRowById("TopBarRow"),"localMfgClass","",1);' +
          'Grid.SetFilter("aggName"); Grid.SetValue(Grid.GetRowById("TopBarRow"),"aggName","",1);' +
          'Grid.SetFilter("srceName"); Grid.SetValue(Grid.GetRowById("TopBarRow"),"srceName","",1);'
      }
      // {
      //   Kind: 'Group',
      //   Space: '0',
      //   id: 'TopBarRow2',
      //   Cells: '',

      // }
    ],

    Head: [
      {
        id: 'Header',
        localName: 'DRP Plan',
        localNameAlign: 'Center',
        LegacyIcn: ' ',
        LegacyIcnAlign: 'Center',
        LegacyIcnClass: 'borderRightNone',
        localLocNbr: 'Legacy',
        localLocNbrAlign: 'Left',
        localSapItemId: 'SAP',
        localSapItemIdAlign: 'Center',
        beginValue: 'Begin Value',
        beginValueAlign: 'Center',

        // Hidden Columns Header for Export As Excel
        LocationNameColumn: 'Location Description',
        LocationNameColumnAlign: 'Center',
        ProductColumn: 'Item Description',
        ProductColumnAlign: 'Center',
        KeyFigureNumber: 'Key Figures Display Order',
        KeyFigureNumberAlign: 'Center',
        KeyFigureColumn: 'DRP Key Figures',
        KeyFigureColumnAlign: 'Center',
        LocationID: 'Location',
        LocationIDAlign: 'Center',
        ProductID: 'Item ID',
        ProductIDAlign: 'Center',
        AggregateName: 'Demand Aggregation',
        AggregateNameAlign: 'Center',
        ProductStatus: 'Product Status',
        ProductStatusAlign: 'Center'
      }
    ],
    Toolbar: {
      Visible: '0'
    }
  }

}

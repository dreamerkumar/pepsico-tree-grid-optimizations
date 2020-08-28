import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobstatusgridLayoutService {
  public _tableLayoutDataEnglish: any = {
    Cfg: {
      id: 'JobStatus',
      Code: 'GTGDTDOWRKEAC',
      Style: 'White',
      Alternate: '2',
      AlternateType: '1',
      MainCol: 'localDataLevel',
      ReloadChanged: '1',
      Deleting: '0',
      SelectingCells: '0',
      Dragging: 0,
      StandardFilter: '0',
      Undo: '1',
      Size: 'Tiny',
      ExportFormat: 'XLS',
      ExportName: 'Job Status',
      ExportType: 'Expanded,Outline',
      ExportRows: '500',
      Expanded: '1',
      SelectClass: '0',
      ScrollTop: '0',
      ChildPaging: '2',
      RemoveCollapsed: '2',
      ChildParts: '2',
      ChildPartLength: '5',
      ChildPartMin: '0',
      // MaxChildParts: '20',
      AllPages: 1,
      DetailOn: 2,
      Synclanguage: '0',
      // SaveSelected: '1',
      SaveFilters: '1',
      SaveExpanded: '2',
      PersistentCfg: 3,
      SaveAttrsTrim: 1000,
      Language: 'EN',
      MinBodyRows: 35,
      ConstHeight: '1',
      MaxWidth: '1',
      MaxHeightPercent: '1',
      SaveAttrs:
        // tslint:disable-next-line:max-line-length
        'TopBarRow,US,TopBarRow,CA,TopBarRow,ALLCtryCheck,TopBarRow,ALLTypeCheck,TopBarRow,Plant,TopBarRow,DC,TopBarRow,Copacker,TopBarRow,localBusUnit,TopBarRow,localBusUnitAll,TopBarRow,localRegion,TopBarRow,localRegionAll,TopBarRow,localDataLevel,TopBarRow,localDataLevelAll,TopBarRow,localStatus'
    },
    Lang: {
      Code: 'EN',
      Format: {
        GMT: 0
      }
    },
    P: {},
    LeftCols: [
      {
        Name: 'localDataLevel',
        Width: 350,
        Spanned: '1',
        CanEdit: '0',
        Calculated: '1',
        CanMove: '0',
        Icon: './assets/folder.png',
        Class: 'setFBold'
      },
      {
        Name: 'localStatus',
        Spanned: '1',
        CanSort: '0',
        Calculated: '1',
        EmptyValue: '',
        CanEdit: '0',
        CanMove: '0',
        Width: 100
      },
      {
        Name: 'localLocNbr',
        Spanned: '1',
        CanMove: '0',
        CanEdit: '0',
        NumberSort: '1',
        Width: 75
      },
      {
        Name: 'localSapLocNbr',
        Spanned: '1',
        CanMove: '0',
        CanEdit: '0',
        Width: 65,
        Visible: 0
      },
      {
        Name: 'jobLevelStatus',
        Width: 100,
        CanExport: '0',
        Visible: 0
      },
      {
        Name: 'srcLevelStatus',
        Width: 100,
        CanExport: '0',
        Visible: 0
      },
      {
        Name: 'dstLevelStatus',
        Width: 100,
        CanExport: '0',
        Visible: 0
      }
    ],

    Panel: {
      visible: 1,
      Select: '0'
    },

    Changes: {
      Update: '16'
    },

    Cols: [
      {
        Name: 'localJobDetails',
        Width: 0,
        CanSort: '0',
        CanEdit: '0',
        CanMove: '0'
      },
      {
        Name: 'localStartDt',
        CanMove: '0',
        CanEdit: '0',
        RelWidth: 185
      },
      {
        Name: 'localEndDt',
        CanEdit: '0',
        CanMove: '0',
        RelWidth: 185
      },
      {
        Name: 'localDurationTm',
        CanEdit: '0',
        CanMove: '0',
        RelWidth: 100
      },
      {
        Name: 'localUserid',
        CanEdit: '0',
        CanMove: '0',
        RelWidth: 130
      },
      {
        Name: 'localLastSuccDt',
        CanEdit: '0',
        CanMove: '0',
        RelWidth: 315
      },
      {
        Name: 'localRegion',
        Range: 1,
        CanMove: '0',
        Visible: '0',
        CanExport: '0'
      },
      {
        Name: 'localBusUnit',
        Range: 1,
        CanMove: '0',
        Visible: '0',
        CanExport: '0'
      },
      {
        Name: 'localLocCtryCode',
        CanMove: '0',
        Visible: '0',
        CanExport: '0'
      },
      {
        Name: 'localLocTypeCode',
        CanMove: '0',
        Visible: '0',
        CanExport: '0'
      },
      {
        Name: 'locationStatus',
        CanMove: '0',
        Visible: '0',
        CanExport: '0'
      },
      {
        Name: 'jobsAtLoction',
        CanMove: '0',
        Range: 1,
        Visible: 0
      }
    ],
    Def: {
      AllLocationLevelWithoutFilter: {
        CalcOrder: 'localStatusIcon,localStatusSideIconTip',
        DefEmpty: 'R',
        CanSelect: 0,
        localStatusIconFormula:
          'Value==="Success"?"./assets/Green.png":(Value==="Failure"?("./assets/Red.png"):' +
          '(Value==="In Progress"?"./assets/InProgress.png":(Value==="Complete"?"./assets/Green.png":"")))'
      },
      DataLevelStatus: {
        DefEmpty: 'R',
        localDataLevelIcon: './assets/folder_icon.png',
        localDataLevelButton: '',
        localDataLevelDefaults: '',
        localStatusIconFormula:
          'Value==="Success"?"./assets/Green.png":(Value==="Failure"?("./assets/Red.png"):' +
          '(Value==="In Progress"?"./assets/InProgress.png":(Value==="Complete"?"./assets/Green.png":"")))'
      },
      DataLevelStatusAllLocation: {
        DefEmpty: 'R',
        localDataLevelIcon: './assets/folder_icon.png',
        localDataLevelButton: '',
        localDataLevelDefaults: '',
        localStatusIconFormula:
          'Value==="Success"?"./assets/Green.png":(Value==="Failure"?("./assets/Red.png"):' +
          '(Value==="In Progress"?"./assets/InProgress.png":(Value==="Complete"?"./assets/Green.png":"")))'
      },
      R: {
        CalcOrder: 'localStatusIcon,localStatusSideIconTip',
        Calculated: '1',
        setFBold: 'font: bold'
      },
      RegionDivision: {
        CalcOrder: 'localStatusIcon,localStatusSideIconTip',
        DefEmpty: 'R',
        CanSort: '0',
        localStatusIconFormula:
          'Value==="Success"?"./assets/Green.png":' +
          '(Value==="Failure"?"./assets/Red.png":' +
          '(Value==="In Progress"?"./assets/InProgress.png":' +
          '(Value==="Complete"?((srcLevelStatus==="Fail") || (dstLevelStatus==="Fail"))?"./assets/Warning.png":"./assets/Green.png":"")))'
      },
      SourceLevel: {
        CalcOrder: 'localStatusIcon,localStatusSideIconTip',
        DefEmpty: 'R',
        localStatusIconFormula:
          'Value==="Success"?"./assets/Green.png":(Value==="Failure"?("./assets/Red.png"):' +
          '(Value==="In Progress"?"./assets/InProgress.png":(Value==="Complete"?"./assets/Green.png":"")))'
      },
      DestinationLevel: {
        CalcOrder: 'localStatusIcon,localStatusSideIconTip',
        DefEmpty: 'R',
        localStatusIconFormula:
          'Value==="Success"?"./assets/Green.png":(Value==="Failure"?("./assets/Red.png"):' +
          '(Value==="In Progress"?"./assets/InProgress.png":(Value==="Complete"?"./assets/Green.png":"")))'
      }
    },
    Solid: [
      {
        Kind: 'Topbar',
        id: 'TopBarRow',
        CanExport: '1',

        Cells:
          // tslint:disable-next-line:max-line-length
          'US, CA, ALLCtryCheck, ALLTypeCheck, Plant, DC, Copacker, localBusUnit, localBusUnitAll, localRegion, localRegionAll, localDataLevel, localDataLevelAll, localStatus, reset',

        localRegionAllVisible: '0',
        localBusUnitAllVisible: '0',
        localDataLevelAllVisible: '0',

        localDataLevelLabel: '<b>Hide/Show Jobs&#160;</b>',
        localDataLevelType: 'Select',
        localDataLevelDefaults:
          '{Default:{Left:1},Buttons:["OK","Clear"],Items:"|*RowsDefDataLevelStatus|*RowsDefDataLevelStatusAllLocation"}',
        localDataLevelRange: '1',
        localDataLevelRelWidth: '70',
        localDataLevelOnChange:
          'Grid.FilterTextRange("jobsAtLoction",Row.localDataLevelAll,"jobsAtLoction");',

        localRegionLabel: '<b>Region&#160;</b>',
        localRegionRange: '1',
        localRegionType: 'Select',
        localRegionDefaults:
          '{Default:{Left:1},Buttons:["OK","Clear"],Items:"|*RowsDefRegionDivision"}',
        localRegionRelWidth: '70',
        localRegionOnChange:
          'Grid.FilterTextRange("localRegion",Row.localRegionAll,"localRegion");',

        localStatusLabel: '<b>Hide/Show Status</b>',
        localStatusRange: '1',
        localStatusType: 'Select',
        localStatusDefaults:
          '{Default:{Left:1},Buttons:["OK","Clear"],Items:"|*RowsDefDataLevelStatus"}',
        localStatusRelWidth: '70',
        localStatusOnChange:
          'Grid.FilterTextRange("jobLevelStatus",Value,"jobLevelStatus")',

        localBusUnitLabel: '<b>Division&#160;</b>',
        localBusUnitRange: '1',
        localBusUnitType: 'Select',
        localBusUnitDefaults:
          '{Default:{Left:1},Buttons:["OK","Clear"],Items:"|*RowsDefRegionDivision"}',
        localBusUnitRelWidth: '70',
        localBusUnitOnChange:
          'Grid.FilterTextRange("localBusUnit",Row.localBusUnitAll,"localBusUnit");',

        resetLeft: '10',
        resetType: 'Button',
        resetButtonText: 'Reset All Filters',
        resetButton: 'Button',
        resetOnClick:
          'Grid.SetValue(Grid.GetRowById("TopBarRow"),"localRegionAll","",1);' +
          'Grid.SetValue(Grid.GetRowById("TopBarRow"),"localBusUnitAll","",1);' +
          'Grid.SetValue(Grid.GetRowById("TopBarRow"),"localDataLevelAll","",1);' +
          'Grid.SetValue(Grid.GetRowById("TopBarRow"),"ALLCtryCheck",0,1);' +
          'Grid.SetValue(Grid.GetRowById("TopBarRow"),"ALLTypeCheck",0,1);' +
          'Grid.SetValue(Grid.GetRowById("TopBarRow"),"US",0,1);Grid.SetFilter("USCA"); ' +
          'Grid.SetValue(Grid.GetRowById("TopBarRow"),"CA",0,1);Grid.SetFilter("USCA"); ' +
          'Grid.SetValue(Grid.GetRowById("TopBarRow"),"Plant",0,1);Grid.SetFilter("PlantDCCopacker"); ' +
          'Grid.SetValue(Grid.GetRowById("TopBarRow"),"DC",0,1);Grid.SetFilter("PlantDCCopacker"); ' +
          'Grid.SetValue(Grid.GetRowById("TopBarRow"),"Copacker",0,1);Grid.SetFilter("PlantDCCopacker");' +
          'Grid.SetFilter("localRegion"); Grid.SetValue(Grid.GetRowById("TopBarRow"),"localRegion","",1);' +
          'Grid.SetFilter("localBusUnit"); Grid.SetValue(Grid.GetRowById("TopBarRow"),"localBusUnit","",1);' +
          'Grid.SetFilter("localStatus"); Grid.SetValue(Grid.GetRowById("TopBarRow"),"localStatus","",1);' +
          'Grid.SetFilter("localDataLevel"); Grid.SetValue(Grid.GetRowById("TopBarRow"),"localDataLevel","",1);' +
          'Grid.SetFilter("locationStatus"); Grid.SetValue(Grid.GetRowById("TopBarRow"),"locationStatus","",1);',

        ALLCtryCheckType: 'Bool',
        ALLCtryCheck: 1,
        ALLCtryCheckVisible: '0',
        ALLCtryCheckOnChange: '',

        ALLTypeCheckType: 'Bool',
        ALLTypeCheck: 1,
        ALLTypeCheckVisible: '0',
        ALLTypeCheckOnChange: '',

        USType: 'Bool',
        USLabelRight: 'U.S.',
        USOnChange:
          // tslint:disable-next-line:max-line-length
          'Grid.SetFilter("USCA",Row.US||Row.CA?\'{"157":\'+Row.US+\',"027":\'+Row.CA+\',"999":\'+Row.ALLCtryCheck+\'}[Get(Row,"localLocCtryCode")]?1:0\':"")',

        CAType: 'Bool',
        CALabelRight: 'Canada',
        CAOnChange:
          // tslint:disable-next-line:max-line-length
          'Grid.SetFilter("USCA",Row.US||Row.CA?\'{"157":\'+Row.US+\',"027":\'+Row.CA+\',"999":\'+Row.ALLCtryCheck+\'}[Get(Row,"localLocCtryCode")]?1:0\':"")',

        PlantType: 'Bool',
        PlantLabelRight: 'Plant',
        PlantOnChange:
          'Grid.SetFilter("PlantDCCopacker",Row.Plant||Row.DC||Row.Copacker?\'{"2":\'+Row.Plant+\',"3":\'' +
          '+Row.DC+\',"18":\'+Row.Copacker+\',"99":\'+Row.ALLTypeCheck+\'}[Get(Row,"localLocTypeCode")]?1:0\':"")',

        DCType: 'Bool',
        DCLabelRight: 'DC',
        DCOnChange:
          'Grid.SetFilter("PlantDCCopacker",Row.Plant||Row.DC||Row.Copacker?\'{"2":\'+Row.Plant+\',"3":\'' +
          '+Row.DC+\',"18":\'+Row.Copacker+\',"99":\'+Row.ALLTypeCheck+\'}[Get(Row,"localLocTypeCode")]?1:0\':"")',

        CopackerType: 'Bool',
        CopackerLabelRight: 'Copacker',
        CopackerOnChange:
          'Grid.SetFilter("PlantDCCopacker",Row.Plant||Row.DC||Row.Copacker?\'{"2":\'+Row.Plant+\',"3":\'' +
          '+Row.DC+\',"18":\'+Row.Copacker+\',"99":\'+Row.ALLTypeCheck+\'}[Get(Row,"localLocTypeCode")]?1:0\':"")'
      }
    ],

    Actions: {
      OnClickButtonselectAll: 'SelectAll'
    },

    Head: [
      {
        id: 'Header',
        localDataLevel: 'Location/Jobs',
        localDataLevelRowSpan: '2',
        localDataLevelAlign: 'Center',
        localLocNbr: 'Legacy',
        localLocNbrRowSpan: '2',
        localLocNbrAlign: 'Center',
        localSapLocNbr: 'SAP',
        localSapLocNbrRowSpan: '2',
        localSapLocNbrAlign: 'Center',
        localStatus: 'Status',
        localStatusRowSpan: '2',
        localStatusAlign: 'Center',
        localJobDetails: 'Job Details',
        localJobDetailsSpan: '6',
        localJobDetailsClass: 'JobDetailsClass',
        Spanned: '1',
        localJobDetailsAlign: 'Center',
        CanExport: '1'
      },
      {
        Kind: 'Header',
        localStartDt: 'Start Time',
        localStartDtAlign: 'Center',
        localStartDtClass: 'StartTimeBorder',
        localEndDt: 'End Time',
        localEndDtAlign: 'Center',
        localDurationTm: 'Duration',
        localDurationTmAlign: 'Center',
        localUserid: 'User ID',
        localUseridAlign: 'Center',
        localLastSuccDt: 'Previous Successful Plan',
        localLastSuccDtAlign: 'Center',
        CanExport: '1'
      }
    ],
    Toolbar: {
      Visible: '0'
    }
  };

  public _tableLayoutDataFrench: any = {
    Cfg: {
      id: 'JobStatus',
      Code: 'GTGDTDOWRKEAC',
      Style: 'White',
      MainCol: 'localDataLevel',
      SuppressCfg: '1',
      ReloadChanged: '1',
      Sort: 'localDataLevel',
      Deleting: '0',
      SelectingCells: '0',
      Dragging: 0,
      StandardFilter: '3',
      Undo: '1',
      Size: 'Tiny',
      ExportFormat: 'XLS',
      ExportName: 'Job Status',
      ExportType: 'Expanded,Outline',
      ExportRows: '500',
      Expanded: '1',
      SaveFilters: '1',
      SelectClass: '0',
      ChildPaging: 0,
      ChildPartMin: 0,
      ChildParts: 2,
      Language: 'FR'
    },

    Lang: {
      Code: 'FR',
      Format: {
        GMT: 0
      }
    },

    LeftCols: [
      {
        Name: 'localDataLevel',
        Width: 390,
        Spanned: '1',
        CanEdit: '0',
        Calculated: '1',
        CanMove: '0',
        Icon: './assets/folder.png',
        Class: 'setFBold'
      },
      {
        Name: 'localStatus',
        Spanned: '1',
        CanSort: '0',
        Calculated: '1',
        EmptyValue: '',
        CanEdit: '0',
        CanMove: '0',
        Width: 130
      },
      {
        Name: 'localLocNbr',
        Spanned: '1',
        CanMove: '0',
        CanEdit: '0',
        NumberSort: '1',
        Width: 100
      },
      {
        Name: 'localSapLocNbr',
        Spanned: '1',
        CanMove: '0',
        CanEdit: '0',
        Width: 65,
        Visible: 0
      },
      {
        Name: 'jobLevelStatus',
        Width: 100,
        CanExport: '0',
        Visible: 0
      },
      {
        Name: 'srcLevelStatus',
        Width: 100,
        CanExport: '0',
        Visible: 0
      },
      {
        Name: 'dstLevelStatus',
        Width: 100,
        CanExport: '0',
        Visible: 0
      }
    ],

    Panel: {
      visible: 1,
      Select: '0'
    },

    Changes: {
      Update: '16'
    },

    Cols: [
      {
        Name: 'localJobDetails',
        Width: 0,
        CanSort: '0',
        CanMove: '0'
      },
      {
        Name: 'localStartDt',
        CanEdit: '0',
        CanMove: '0',
        RelWidth: 185
      },
      {
        Name: 'localEndDt',
        CanEdit: '0',
        CanMove: '0',
        RelWidth: 185
      },
      {
        Name: 'localDurationTm',
        CanEdit: '0',
        CanMove: '0',
        RelWidth: 100
      },
      {
        Name: 'localUserid',
        CanMove: '0',
        CanEdit: '0',
        RelWidth: 130
      },
      {
        Name: 'localLastSuccDt',
        CanEdit: '0',
        CanMove: '0',
        RelWidth: 315
      },
      {
        Name: 'localRegion',
        CanMove: '0',
        Visible: '0'
      },
      {
        Name: 'localBusUnit',
        CanMove: '0',
        Visible: '0'
      },
      {
        Name: 'localLocCtryCode',
        CanMove: '0',
        Visible: '0'
      },
      {
        Name: 'localLocTypeCode',
        CanMove: '0',
        Visible: '0'
      },
      {
        Name: 'jobsAtLoction',
        Range: 1,
        CanMove: '0',
        Visible: '0'
      }
    ],
    Def: {
      ParentLevel: {
        localDataLevelIcon: './assets/folder.png',
        localDataLevelButton: '',
        localDataLevelDefaults: '',
        localStatusIconFormula:
          'Value==="Réussi"?"./assets/Green.png":(Value==="Échec"?("./assets/Red.png"):' +
          '(Value==="En cours"?"./assets/InProgress.png":(Value==="Terminer"?"./assets/Green.png":"")))'
      },
      AllLocationLevelWithFilter: {
        CalcOrder: 'localStatusIcon,localStatusSideIconTip',
        DefEmpty: 'R',
        CanSelect: 0,
        localStatusIconFormula:
          'Value==="Réussi"?"./assets/Green.png":(Value==="Échec"?("./assets/Red.png"):' +
          '(Value==="En cours"?"./assets/InProgress.png":(Value==="Terminer"?"./assets/Green.png":"")))'
      },
      AllLocationLevelWithoutFilter: {
        CalcOrder: 'localStatusIcon,localStatusSideIconTip',
        DefEmpty: 'R',
        CanSelect: 0,
        CanFilter: 0,
        localStatusIconFormula:
          'Value==="Réussi"?"./assets/Green.png":(Value==="Échec"?("./assets/Red.png"):' +
          '(Value==="En cours"?"./assets/InProgress.png":(Value==="Terminer"?"./assets/Green.png":"")))'
      },
      DataLevelStatus: {
        DefEmpty: 'R',
        localDataLevelIcon: './assets/folder_icon.png',
        localDataLevelButton: '',
        localDataLevelDefaults: '',
        localStatusIconFormula:
          'Value==="Réussi"?"./assets/Green.png":(Value==="Échec"?("./assets/Red.png"):' +
          '(Value==="En cours"?"./assets/InProgress.png":(Value==="Terminer"?"./assets/Green.png":"")))'
      },
      DataLevelStatusAllLocation: {
        DefEmpty: 'R',
        localDataLevelIcon: './assets/folder_icon.png',
        localDataLevelButton: '',
        localDataLevelDefaults: '',
        localStatusIconFormula:
          'Value==="Réussi"?"./assets/Green.png":(Value==="Échec"?("./assets/Red.png"):' +
          '(Value==="En cours"?"./assets/InProgress.png":(Value==="Terminer"?"./assets/Green.png":"")))'
      },
      R: {
        CalcOrder: 'localStatusIcon,localStatusSideIconTip',
        Calculated: '1',
        setFBold: 'font: bold'
      },
      RegionDivision: {
        CalcOrder: 'localStatusIcon,localStatusSideIconTip',
        DefEmpty: 'R',
        CanSort: '0',
        localStatusIconFormula:
          'Value==="Réussi"?"./assets/Green.png":' +
          '(Value==="Échec"?"./assets/Red.png":' +
          '(Value==="En cours"?"./assets/InProgress.png":' +
          '(Value==="Terminer"?((srcLevelStatus==="Fail") || (srcLevelStatus==="Fail"))?"./assets/Warning.png":"./assets/Green.png":"")))'
      },
      SourceLevel: {
        CalcOrder: 'localStatusIcon,localStatusSideIconTip',
        DefEmpty: 'R',
        localStatusIconFormula:
          'Value==="Réussi"?"./assets/Green.png":(Value==="Échec"?("./assets/Red.png"):' +
          '(Value==="En cours"?"./assets/InProgress.png":(Value==="Terminer"?"./assets/Green.png":"")))'
      },
      DestinationLevel: {
        CalcOrder: 'localStatusIcon,localStatusSideIconTip',
        DefEmpty: 'R',
        localStatusIconFormula:
          'Value==="Réussi"?"./assets/Green.png":(Value==="Échec"?("./assets/Red.png"):' +
          '(Value==="En cours"?"./assets/InProgress.png":(Value==="Terminer"?"./assets/Green.png":"")))'
      }
    },

    Solid: [
      {
        Kind: 'Topbar',
        id: 'TopBarRow',
        CanExport: '1',
        Cells:
          'US, CA, Plant, DC, Copacker, localBusUnit, localRegion, localDataLevel, localStatus, reset',

        localDataLevelLabel: '<b>Masquer/Afficher tâches&#160;</b>',
        localDataLevelType: 'Select',
        localDataLevelDefaults:
          '{Default:{Left:1},Buttons:["OK","Clear"],Items:"|*RowsDefDataLevelStatus|*RowsDefDataLevelStatusAllLocation"}',
        localDataLevelRange: '1',
        localDataLevelRelWidth: '45',
        localDataLevelOnChange:
          'Grid.FilterTextRange("localDataLevel",Value,"localDataLevel")',

        localRegionLabel: '<b>Région&#160;</b>',
        localRegionRange: '1',
        localRegionType: 'Select',
        localRegionDefaults:
          '{Default:{Left:1},Buttons:["OK","Clear"],Items:"|*RowsDefRegionDivision"}',
        localRegionRelWidth: '45',
        localRegionOnChange:
          'Grid.FilterTextRange("localRegion",Value,"localRegion")',

        localStatusLabel: '<b>Masquer/Afficher statuts</b>',
        localStatusRange: '1',
        localStatusType: 'Select',
        localStatusDefaults:
          '{Default:{Left:1},Buttons:["OK","Clear"],Items:"|*RowsDefDataLevelStatus"}',
        localStatusRelWidth: '45',
        localStatusOnChange:
          'Grid.FilterTextRange("localStatus",Value,"localStatus")',

        localBusUnitLabel: '<b>Divison&#160;</b>',
        localBusUnitRange: '1',
        localBusUnitType: 'Select',
        localBusUnitDefaults:
          '{Default:{Left:1},Buttons:["OK","Clear"],Items:"|*RowsDefRegionDivision"}',
        localBusUnitRelWidth: '45',
        localBusUnitOnChange:
          'Grid.FilterTextRange("localBusUnit",Value,"localBusUnit")',

        refreshType: 'Button',
        refreshButtonText: 'Refresh',
        refreshButton: 'Button',
        refreshTip: 'Refresh the Job Status view',
        refreshOnClick: 'Grid.Source.Data = "/Body"; Grid.ReloadBody();',

        resetLeft: '10',
        resetType: 'Button',
        resetButtonText: 'Réinitialiser tous les filtres',
        resetButton: 'Button',
        resetRelWidth: '70',
        resetOnClick:
          'Grid.SetValue(Grid.GetRowById("TopBarRow"),"localRegionAll","",1);' +
          'Grid.SetValue(Grid.GetRowById("TopBarRow"),"localBusUnitAll","",1);' +
          'Grid.SetValue(Grid.GetRowById("TopBarRow"),"localDataLevelAll","",1);' +
          'Grid.SetValue(Grid.GetRowById("TopBarRow"),"ALLCtryCheck",0,1);' +
          'Grid.SetValue(Grid.GetRowById("TopBarRow"),"ALLTypeCheck",0,1);' +
          'Grid.SetValue(Grid.GetRowById("TopBarRow"),"US",0,1);Grid.SetFilter("USCA"); ' +
          'Grid.SetValue(Grid.GetRowById("TopBarRow"),"CA",0,1);Grid.SetFilter("USCA"); ' +
          'Grid.SetValue(Grid.GetRowById("TopBarRow"),"Plant",0,1);Grid.SetFilter("PlantDCCopacker"); ' +
          'Grid.SetValue(Grid.GetRowById("TopBarRow"),"DC",0,1);Grid.SetFilter("PlantDCCopacker"); ' +
          'Grid.SetValue(Grid.GetRowById("TopBarRow"),"Copacker",0,1);Grid.SetFilter("PlantDCCopacker");' +
          'Grid.SetFilter("localRegion"); Grid.SetValue(Grid.GetRowById("TopBarRow"),"localRegion","",1);' +
          'Grid.SetFilter("localBusUnit"); Grid.SetValue(Grid.GetRowById("TopBarRow"),"localBusUnit","",1);' +
          'Grid.SetFilter("localStatus"); Grid.SetValue(Grid.GetRowById("TopBarRow"),"localStatus","",1);' +
          'Grid.SetFilter("localDataLevel"); Grid.SetValue(Grid.GetRowById("TopBarRow"),"localDataLevel","",1);' +
          'Grid.SetFilter("locationStatus"); Grid.SetValue(Grid.GetRowById("TopBarRow"),"locationStatus","",1);',


        USType: 'Bool',
        USLabelRight: 'É.-U.',
        USOnChange:
          'Grid.SetFilter("USCA",Row.US||Row.CA?\'{"157":\'+Row.US+\',"027":\'+Row.CA+\'}[Get(Row,"localLocCtryCode")]?1:0\':"")',

        CAType: 'Bool',
        CALabelRight: 'Canada',
        CAOnChange:
          'Grid.SetFilter("USCA",Row.US||Row.CA?\'{"157":\'+Row.US+\',"027":\'+Row.CA+\'}[Get(Row,"localLocCtryCode")]?1:0\':"")',

        PlantType: 'Bool',
        PlantLabelRight: 'Division',
        PlantOnChange:
          'Grid.SetFilter("PlantDCCopacker",Row.Plant||Row.DC||Row.Copacker?\'{"2":\'+Row.Plant+\',"3":\'' +
          '+Row.DC+\',"18":\'+Row.Copacker+\'}[Get(Row,"localLocTypeCode")]?1:0\':"")',

        DCType: 'Bool',
        DCLabelRight: 'CD',
        DCOnChange:
          'Grid.SetFilter("PlantDCCopacker",Row.Plant||Row.DC||Row.Copacker?\'{"2":\'+Row.Plant+\',"3":\'' +
          '+Row.DC+\',"18":\'+Row.Copacker+\'}[Get(Row,"localLocTypeCode")]?1:0\':"")',

        CopackerType: 'Bool',
        CopackerLabelRight: 'Coemballeur',
        CopackerOnChange:
          'Grid.SetFilter("PlantDCCopacker",Row.Plant||Row.DC||Row.Copacker?\'{"2":\'+Row.Plant+\',"3":\'' +
          '+Row.DC+\',"18":\'+Row.Copacker+\'}[Get(Row,"localLocTypeCode")]?1:0\':"")'
      }
    ],

    Actions: {
      OnClickButtonselectAll: 'SelectAll'
    },

    Head: [
      {
        id: 'Header',
        localDataLevel: 'Emplacement/tâches',
        localDataLevelRowSpan: '2',
        localDataLevelAlign: 'Center',
        localLocNbr: 'Ancien',
        localLocNbrRowSpan: '2',
        localLocNbrAlign: 'Center',
        localStatus: 'Statut',
        localStatusRowSpan: '2',
        localStatusAlign: 'Center',
        localJobDetails: 'Détails tâche',
        localJobDetailsSpan: '6',
        Spanned: '1',
        localJobDetailsAlign: 'Center',
        CanExport: '1'
      },
      {
        Kind: 'Header',
        localStartDt: 'Heure début',
        localStartDtAlign: 'Center',
        localEndDt: 'Heure fin',
        localEndDtAlign: 'Center',
        localDurationTm: 'Durée',
        localDurationTmAlign: 'Center',
        localUserid: 'Code utilisateur',
        localUseridAlign: 'Center',
        localLastSuccDt: 'Exécution précédente réussie',
        localLastSuccDtAlign: 'Center',
        CanExport: '1'
      }
    ],
    Toolbar: {
      Visible: '0'
    }
  };
}

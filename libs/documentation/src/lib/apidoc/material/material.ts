const MATERIAL = {
    "pipes": [],
    "interfaces": [
        {
            "name": "SdsFooterRowConfig",
            "id": "interface-SdsFooterRowConfig-c09279e1022ed0f49458faea2b2be843",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "type": "interface",
            "sourceCode": "import {\n  Component,\n  Input,\n  OnInit,\n  ContentChild,\n  AfterContentInit,\n  ContentChildren,\n  QueryList,\n  ViewChild,\n  TemplateRef,\n  Directive,\n  SimpleChanges,\n  OnChanges\n} from '@angular/core';\nimport { MatSort } from '@angular/material/sort';\nimport { AfterViewInit } from '@angular/core';\nimport { MatTableDataSource, MatTable } from '@angular/material/table';\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\nimport { animate, state, style, transition, trigger } from '@angular/animations';\n\n\nexport interface SdsRowConfig {\n  displayedColumns?: string[];\n  expandOnClick?: boolean;\n}\n\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\nexport interface SdsFooterRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\n@Component({\n  selector: 'sds-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() expandOnClick = false;\n}\n\n@Component({\n  selector: 'sds-header-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableHeaderRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Component({\n  selector: 'sds-footer-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableFooterRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Directive({ selector: 'sds-table-headercell' })\nexport class SdsTableHeaderCellDirective { }\n\n@Directive({ selector: 'sds-table-cell' })\nexport class SdsTableCellDirective { }\n\n@Directive({ selector: 'sds-table-footercell' })\nexport class SdsTableFooterCellDirective { }\n\n@Component({\n  selector: 'sds-table-column',\n  template: `\n    <ng-template #columnHeaderCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n  `\n})\nexport class SdsTableColumnDefComponent implements AfterContentInit {\n\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\n\n  @ContentChild('sdsHeaderCell', { read: TemplateRef }) headerCellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsCell', { read: TemplateRef }) cellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsFooterCell', { read: TemplateRef }) footerCellTemplate!: TemplateRef<any>;\n\n  @Input() sdsColumnName;\n\n  @Input() sticky = false;\n\n  @Input() stickyEnd = false;\n\n  @Input() sdsExpandedTemplate = false;\n\n  ngAfterContentInit() { }\n}\n\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss'],\n  animations: [\n    trigger('detailExpand', [\n      state('collapsed', style({ height: '0px', minHeight: '0' })),\n      state('expanded', style({ height: '*' })),\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\n    ]),\n  ]\n})\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\n  expandedElement: any;\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * Borderless table\n   */\n  @Input()\n  set borderless(borderless: boolean) {\n    this._borderless = coerceBooleanProperty(borderless);\n  }\n  get borderless() {\n    return this._borderless;\n  }\n  private _borderless = false;\n\n\n  /**\n   * Sorting table\n   */\n  @Input()\n  set sort(sort: boolean) {\n    this._sort = coerceBooleanProperty(sort);\n  }\n  get sort() {\n    return this._sort;\n  }\n  private _sort = false;\n\n  /**\n * Sorting table\n */\n  @Input()\n  set expansion(expansion: boolean) {\n    this._expansion = coerceBooleanProperty(expansion);\n  }\n  get expansion() {\n    return this._expansion;\n  }\n  private _expansion = false;\n\n  dataSource: MatTableDataSource<any>;\n\n  @ViewChild(MatTable) table: MatTable<any>;\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\n  @ViewChild(MatSort) matSort: MatSort;\n\n  rowConfig = {} as SdsRowConfig;\n  headerRowConfig = {} as SdsHeaderRowConfig;\n  footerRowConfig = {} as SdsFooterRowConfig;\n\n  constructor() { }\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.data.currentValue) {\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\n      if (this.sort) {\n        this.dataSource.sort = this.matSort;\n      }\n    }\n  }\n\n  ngOnInit() {\n    this.dataSource = new MatTableDataSource(this.data);\n  }\n\n  ngAfterContentInit() {\n\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\n\n    if (this.sdsTableHeaderRowComponent) {\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\n    }\n\n    if (this.sdsTableFooterRowComponent) {\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\n    }\n\n    if (this.expansion) {\n      const expandedIndicator = \"expandedIndicator\";\n      if (this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)) {\n        this.rowConfig.displayedColumns.push('expandedIndicator');\n      }\n    }\n  }\n\n  ngAfterViewInit() {\n    if (this.sort) {\n      this.dataSource.sort = this.matSort;\n    }\n  }\n\n}\n",
            "properties": [
                {
                    "name": "sticky",
                    "type": "boolean",
                    "optional": true,
                    "description": "",
                    "line": 32
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": [],
            "extends": "SdsRowConfig"
        },
        {
            "name": "SdsHeaderRowConfig",
            "id": "interface-SdsHeaderRowConfig-c09279e1022ed0f49458faea2b2be843",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "type": "interface",
            "sourceCode": "import {\n  Component,\n  Input,\n  OnInit,\n  ContentChild,\n  AfterContentInit,\n  ContentChildren,\n  QueryList,\n  ViewChild,\n  TemplateRef,\n  Directive,\n  SimpleChanges,\n  OnChanges\n} from '@angular/core';\nimport { MatSort } from '@angular/material/sort';\nimport { AfterViewInit } from '@angular/core';\nimport { MatTableDataSource, MatTable } from '@angular/material/table';\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\nimport { animate, state, style, transition, trigger } from '@angular/animations';\n\n\nexport interface SdsRowConfig {\n  displayedColumns?: string[];\n  expandOnClick?: boolean;\n}\n\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\nexport interface SdsFooterRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\n@Component({\n  selector: 'sds-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() expandOnClick = false;\n}\n\n@Component({\n  selector: 'sds-header-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableHeaderRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Component({\n  selector: 'sds-footer-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableFooterRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Directive({ selector: 'sds-table-headercell' })\nexport class SdsTableHeaderCellDirective { }\n\n@Directive({ selector: 'sds-table-cell' })\nexport class SdsTableCellDirective { }\n\n@Directive({ selector: 'sds-table-footercell' })\nexport class SdsTableFooterCellDirective { }\n\n@Component({\n  selector: 'sds-table-column',\n  template: `\n    <ng-template #columnHeaderCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n  `\n})\nexport class SdsTableColumnDefComponent implements AfterContentInit {\n\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\n\n  @ContentChild('sdsHeaderCell', { read: TemplateRef }) headerCellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsCell', { read: TemplateRef }) cellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsFooterCell', { read: TemplateRef }) footerCellTemplate!: TemplateRef<any>;\n\n  @Input() sdsColumnName;\n\n  @Input() sticky = false;\n\n  @Input() stickyEnd = false;\n\n  @Input() sdsExpandedTemplate = false;\n\n  ngAfterContentInit() { }\n}\n\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss'],\n  animations: [\n    trigger('detailExpand', [\n      state('collapsed', style({ height: '0px', minHeight: '0' })),\n      state('expanded', style({ height: '*' })),\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\n    ]),\n  ]\n})\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\n  expandedElement: any;\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * Borderless table\n   */\n  @Input()\n  set borderless(borderless: boolean) {\n    this._borderless = coerceBooleanProperty(borderless);\n  }\n  get borderless() {\n    return this._borderless;\n  }\n  private _borderless = false;\n\n\n  /**\n   * Sorting table\n   */\n  @Input()\n  set sort(sort: boolean) {\n    this._sort = coerceBooleanProperty(sort);\n  }\n  get sort() {\n    return this._sort;\n  }\n  private _sort = false;\n\n  /**\n * Sorting table\n */\n  @Input()\n  set expansion(expansion: boolean) {\n    this._expansion = coerceBooleanProperty(expansion);\n  }\n  get expansion() {\n    return this._expansion;\n  }\n  private _expansion = false;\n\n  dataSource: MatTableDataSource<any>;\n\n  @ViewChild(MatTable) table: MatTable<any>;\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\n  @ViewChild(MatSort) matSort: MatSort;\n\n  rowConfig = {} as SdsRowConfig;\n  headerRowConfig = {} as SdsHeaderRowConfig;\n  footerRowConfig = {} as SdsFooterRowConfig;\n\n  constructor() { }\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.data.currentValue) {\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\n      if (this.sort) {\n        this.dataSource.sort = this.matSort;\n      }\n    }\n  }\n\n  ngOnInit() {\n    this.dataSource = new MatTableDataSource(this.data);\n  }\n\n  ngAfterContentInit() {\n\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\n\n    if (this.sdsTableHeaderRowComponent) {\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\n    }\n\n    if (this.sdsTableFooterRowComponent) {\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\n    }\n\n    if (this.expansion) {\n      const expandedIndicator = \"expandedIndicator\";\n      if (this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)) {\n        this.rowConfig.displayedColumns.push('expandedIndicator');\n      }\n    }\n  }\n\n  ngAfterViewInit() {\n    if (this.sort) {\n      this.dataSource.sort = this.matSort;\n    }\n  }\n\n}\n",
            "properties": [
                {
                    "name": "sticky",
                    "type": "boolean",
                    "optional": true,
                    "description": "",
                    "line": 28
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": [],
            "extends": "SdsRowConfig"
        },
        {
            "name": "SdsRowConfig",
            "id": "interface-SdsRowConfig-c09279e1022ed0f49458faea2b2be843",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "type": "interface",
            "sourceCode": "import {\n  Component,\n  Input,\n  OnInit,\n  ContentChild,\n  AfterContentInit,\n  ContentChildren,\n  QueryList,\n  ViewChild,\n  TemplateRef,\n  Directive,\n  SimpleChanges,\n  OnChanges\n} from '@angular/core';\nimport { MatSort } from '@angular/material/sort';\nimport { AfterViewInit } from '@angular/core';\nimport { MatTableDataSource, MatTable } from '@angular/material/table';\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\nimport { animate, state, style, transition, trigger } from '@angular/animations';\n\n\nexport interface SdsRowConfig {\n  displayedColumns?: string[];\n  expandOnClick?: boolean;\n}\n\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\nexport interface SdsFooterRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\n@Component({\n  selector: 'sds-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() expandOnClick = false;\n}\n\n@Component({\n  selector: 'sds-header-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableHeaderRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Component({\n  selector: 'sds-footer-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableFooterRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Directive({ selector: 'sds-table-headercell' })\nexport class SdsTableHeaderCellDirective { }\n\n@Directive({ selector: 'sds-table-cell' })\nexport class SdsTableCellDirective { }\n\n@Directive({ selector: 'sds-table-footercell' })\nexport class SdsTableFooterCellDirective { }\n\n@Component({\n  selector: 'sds-table-column',\n  template: `\n    <ng-template #columnHeaderCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n  `\n})\nexport class SdsTableColumnDefComponent implements AfterContentInit {\n\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\n\n  @ContentChild('sdsHeaderCell', { read: TemplateRef }) headerCellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsCell', { read: TemplateRef }) cellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsFooterCell', { read: TemplateRef }) footerCellTemplate!: TemplateRef<any>;\n\n  @Input() sdsColumnName;\n\n  @Input() sticky = false;\n\n  @Input() stickyEnd = false;\n\n  @Input() sdsExpandedTemplate = false;\n\n  ngAfterContentInit() { }\n}\n\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss'],\n  animations: [\n    trigger('detailExpand', [\n      state('collapsed', style({ height: '0px', minHeight: '0' })),\n      state('expanded', style({ height: '*' })),\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\n    ]),\n  ]\n})\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\n  expandedElement: any;\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * Borderless table\n   */\n  @Input()\n  set borderless(borderless: boolean) {\n    this._borderless = coerceBooleanProperty(borderless);\n  }\n  get borderless() {\n    return this._borderless;\n  }\n  private _borderless = false;\n\n\n  /**\n   * Sorting table\n   */\n  @Input()\n  set sort(sort: boolean) {\n    this._sort = coerceBooleanProperty(sort);\n  }\n  get sort() {\n    return this._sort;\n  }\n  private _sort = false;\n\n  /**\n * Sorting table\n */\n  @Input()\n  set expansion(expansion: boolean) {\n    this._expansion = coerceBooleanProperty(expansion);\n  }\n  get expansion() {\n    return this._expansion;\n  }\n  private _expansion = false;\n\n  dataSource: MatTableDataSource<any>;\n\n  @ViewChild(MatTable) table: MatTable<any>;\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\n  @ViewChild(MatSort) matSort: MatSort;\n\n  rowConfig = {} as SdsRowConfig;\n  headerRowConfig = {} as SdsHeaderRowConfig;\n  footerRowConfig = {} as SdsFooterRowConfig;\n\n  constructor() { }\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.data.currentValue) {\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\n      if (this.sort) {\n        this.dataSource.sort = this.matSort;\n      }\n    }\n  }\n\n  ngOnInit() {\n    this.dataSource = new MatTableDataSource(this.data);\n  }\n\n  ngAfterContentInit() {\n\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\n\n    if (this.sdsTableHeaderRowComponent) {\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\n    }\n\n    if (this.sdsTableFooterRowComponent) {\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\n    }\n\n    if (this.expansion) {\n      const expandedIndicator = \"expandedIndicator\";\n      if (this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)) {\n        this.rowConfig.displayedColumns.push('expandedIndicator');\n      }\n    }\n  }\n\n  ngAfterViewInit() {\n    if (this.sort) {\n      this.dataSource.sort = this.matSort;\n    }\n  }\n\n}\n",
            "properties": [
                {
                    "name": "displayedColumns",
                    "type": "string[]",
                    "optional": true,
                    "description": "",
                    "line": 23
                },
                {
                    "name": "expandOnClick",
                    "type": "boolean",
                    "optional": true,
                    "description": "",
                    "line": 24
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        }
    ],
    "injectables": [],
    "classes": [
        {
            "name": "SdsTableColumnSettings",
            "id": "class-SdsTableColumnSettings-f58b84b4fae1eeb494c7aee86895bb9e",
            "file": "libs/packages/sam-material-extensions/src/lib/table/models/table-column-settings.model.ts",
            "type": "class",
            "sourceCode": "export class SdsTableColumnSettings {\n  /**\n   *  primary key to access value from data\n   */\n  primaryKey: string;\n  /**\n   * Displayed column header -- defaults to primaryKey value in titlecase\n   */\n  header?: string;\n  /**\n   * Column sticks to left side of table on horizontal scroll\n   */\n  sticky? = false;\n}\n",
            "properties": [
                {
                    "name": "header",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Displayed column header -- defaults to primaryKey value in titlecase</p>\n",
                    "line": 9
                },
                {
                    "name": "primaryKey",
                    "type": "string",
                    "optional": false,
                    "description": "<p>primary key to access value from data</p>\n",
                    "line": 5
                },
                {
                    "name": "sticky",
                    "defaultValue": "false",
                    "type": "",
                    "optional": true,
                    "description": "<p>Column sticks to left side of table on horizontal scroll</p>\n",
                    "line": 13
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "SdsTableSettings",
            "id": "class-SdsTableSettings-dd54dcc0518640df9b404298e01b9e5a",
            "file": "libs/packages/sam-material-extensions/src/lib/table/models/table-settings.model.ts",
            "type": "class",
            "sourceCode": "export class SdsTableSettings {\n  /**\n   * table without border\n   */\n  borderless?: boolean;\n  /*\n   * sortable table\n   */\n  sort?: boolean;\n  /*\n   * Include sticky header row\n   */\n  stickyHeader?: boolean;\n}\n",
            "properties": [
                {
                    "name": "borderless",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>table without border</p>\n",
                    "line": 5
                },
                {
                    "name": "sort",
                    "type": "boolean",
                    "optional": true,
                    "description": "",
                    "line": 9
                },
                {
                    "name": "stickyHeader",
                    "type": "boolean",
                    "optional": true,
                    "description": "",
                    "line": 13
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        }
    ],
    "directives": [
        {
            "name": "SdsAccordionContentDirective",
            "id": "directive-SdsAccordionContentDirective-084bfc4fb17f8b2f29d571f4199e5eb7",
            "file": "libs/packages/sam-material-extensions/src/lib/accordion/accordion.component.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\n  Component,\n  Input,\n  TemplateRef,\n  ViewChild,\n  Directive,\n  QueryList,\n  ContentChildren,\n  Output,\n  EventEmitter\n} from '@angular/core';\n\nimport {MatAccordion} from '@angular/material/expansion';\n\n\n@Directive({selector: 'sds-accordion-title'})\nexport class SdsAccordionTitleDirective {}\n\n@Directive({selector: 'sds-accordion-content'})\nexport class SdsAccordionContentDirective {}\n\n@Component({\n  selector: 'sds-accordion-item',\n  template: `\n    <ng-template #itemTitleTemplate>\n      <ng-content #title select=\"sds-accordion-title\"></ng-content>\n    </ng-template>\n\n    <ng-template #itemContentTemplate>\n      <ng-content #content select=\"sds-accordion-content\"></ng-content>\n    </ng-template>\n  `\n})\nexport class SdsAccordionItemComponent {\n\n  @ViewChild('itemTitleTemplate') itemTitleTemplate: TemplateRef<any>;\n  @ViewChild('itemContentTemplate') itemContentTemplate: TemplateRef<any>;\n\n  @Input() expanded = false;\n\n  @Input() disabled = false;\n\n  /** Toggles the expanded state of the expansion panel. */\n  toggle(): void {\n    this.expanded = !this.expanded;\n  }\n\n  /** Sets the expanded state of the expansion panel to false. */\n  close(): void {\n    this.expanded = false;\n  }\n\n  /** Sets the expanded state of the expansion panel to true. */\n  open(): void {\n    this.expanded = true;\n  }\n\n  /** Toggles the disabled state of the expansion panel. */\n  toggleDisabled(): void {\n    this.disabled = !this.disabled;\n    if(this.disabled) {\n      this.expanded = false;\n    }\n  }\n\n}\n\n@Component({\n  selector: 'sds-accordion-next',\n  templateUrl: './accordion.component.html',\n  styleUrls: ['./accordion.component.scss']\n})\nexport class SdsAccordionComponent {\n\n  @ViewChild(MatAccordion) accordion: MatAccordion;\n\n  @ContentChildren(SdsAccordionItemComponent) accordionItems!: QueryList<SdsAccordionItemComponent>;\n\n  @Input() multi = false;\n\n  @Output() multiChange:EventEmitter<boolean> = new EventEmitter<boolean>();\n\n  @Input() displayMode = 'flat';\n\n  /** Opens all accordion items. */\n  openAll(): void {\n    this.accordion.openAll();\n  }\n\n  /** Closes all accordion items. */\n  closeAll(): void {\n    this.accordion.closeAll();\n  }\n\n  /** Toggles the multi state of the accordion. */\n  toggleMulti(): void {\n    this.multi = !this.multi;\n    this.accordion.closeAll();\n    this.multiChange.emit(this.multi);\n  }\n\n}\n",
            "selector": "sds-accordion-content",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        },
        {
            "name": "SdsAccordionTitleDirective",
            "id": "directive-SdsAccordionTitleDirective-084bfc4fb17f8b2f29d571f4199e5eb7",
            "file": "libs/packages/sam-material-extensions/src/lib/accordion/accordion.component.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\n  Component,\n  Input,\n  TemplateRef,\n  ViewChild,\n  Directive,\n  QueryList,\n  ContentChildren,\n  Output,\n  EventEmitter\n} from '@angular/core';\n\nimport {MatAccordion} from '@angular/material/expansion';\n\n\n@Directive({selector: 'sds-accordion-title'})\nexport class SdsAccordionTitleDirective {}\n\n@Directive({selector: 'sds-accordion-content'})\nexport class SdsAccordionContentDirective {}\n\n@Component({\n  selector: 'sds-accordion-item',\n  template: `\n    <ng-template #itemTitleTemplate>\n      <ng-content #title select=\"sds-accordion-title\"></ng-content>\n    </ng-template>\n\n    <ng-template #itemContentTemplate>\n      <ng-content #content select=\"sds-accordion-content\"></ng-content>\n    </ng-template>\n  `\n})\nexport class SdsAccordionItemComponent {\n\n  @ViewChild('itemTitleTemplate') itemTitleTemplate: TemplateRef<any>;\n  @ViewChild('itemContentTemplate') itemContentTemplate: TemplateRef<any>;\n\n  @Input() expanded = false;\n\n  @Input() disabled = false;\n\n  /** Toggles the expanded state of the expansion panel. */\n  toggle(): void {\n    this.expanded = !this.expanded;\n  }\n\n  /** Sets the expanded state of the expansion panel to false. */\n  close(): void {\n    this.expanded = false;\n  }\n\n  /** Sets the expanded state of the expansion panel to true. */\n  open(): void {\n    this.expanded = true;\n  }\n\n  /** Toggles the disabled state of the expansion panel. */\n  toggleDisabled(): void {\n    this.disabled = !this.disabled;\n    if(this.disabled) {\n      this.expanded = false;\n    }\n  }\n\n}\n\n@Component({\n  selector: 'sds-accordion-next',\n  templateUrl: './accordion.component.html',\n  styleUrls: ['./accordion.component.scss']\n})\nexport class SdsAccordionComponent {\n\n  @ViewChild(MatAccordion) accordion: MatAccordion;\n\n  @ContentChildren(SdsAccordionItemComponent) accordionItems!: QueryList<SdsAccordionItemComponent>;\n\n  @Input() multi = false;\n\n  @Output() multiChange:EventEmitter<boolean> = new EventEmitter<boolean>();\n\n  @Input() displayMode = 'flat';\n\n  /** Opens all accordion items. */\n  openAll(): void {\n    this.accordion.openAll();\n  }\n\n  /** Closes all accordion items. */\n  closeAll(): void {\n    this.accordion.closeAll();\n  }\n\n  /** Toggles the multi state of the accordion. */\n  toggleMulti(): void {\n    this.multi = !this.multi;\n    this.accordion.closeAll();\n    this.multiChange.emit(this.multi);\n  }\n\n}\n",
            "selector": "sds-accordion-title",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        },
        {
            "name": "SdsTableCellDirective",
            "id": "directive-SdsTableCellDirective-c09279e1022ed0f49458faea2b2be843",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\n  Component,\n  Input,\n  OnInit,\n  ContentChild,\n  AfterContentInit,\n  ContentChildren,\n  QueryList,\n  ViewChild,\n  TemplateRef,\n  Directive,\n  SimpleChanges,\n  OnChanges\n} from '@angular/core';\nimport { MatSort } from '@angular/material/sort';\nimport { AfterViewInit } from '@angular/core';\nimport { MatTableDataSource, MatTable } from '@angular/material/table';\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\nimport { animate, state, style, transition, trigger } from '@angular/animations';\n\n\nexport interface SdsRowConfig {\n  displayedColumns?: string[];\n  expandOnClick?: boolean;\n}\n\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\nexport interface SdsFooterRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\n@Component({\n  selector: 'sds-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() expandOnClick = false;\n}\n\n@Component({\n  selector: 'sds-header-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableHeaderRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Component({\n  selector: 'sds-footer-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableFooterRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Directive({ selector: 'sds-table-headercell' })\nexport class SdsTableHeaderCellDirective { }\n\n@Directive({ selector: 'sds-table-cell' })\nexport class SdsTableCellDirective { }\n\n@Directive({ selector: 'sds-table-footercell' })\nexport class SdsTableFooterCellDirective { }\n\n@Component({\n  selector: 'sds-table-column',\n  template: `\n    <ng-template #columnHeaderCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n  `\n})\nexport class SdsTableColumnDefComponent implements AfterContentInit {\n\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\n\n  @ContentChild('sdsHeaderCell', { read: TemplateRef }) headerCellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsCell', { read: TemplateRef }) cellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsFooterCell', { read: TemplateRef }) footerCellTemplate!: TemplateRef<any>;\n\n  @Input() sdsColumnName;\n\n  @Input() sticky = false;\n\n  @Input() stickyEnd = false;\n\n  @Input() sdsExpandedTemplate = false;\n\n  ngAfterContentInit() { }\n}\n\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss'],\n  animations: [\n    trigger('detailExpand', [\n      state('collapsed', style({ height: '0px', minHeight: '0' })),\n      state('expanded', style({ height: '*' })),\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\n    ]),\n  ]\n})\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\n  expandedElement: any;\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * Borderless table\n   */\n  @Input()\n  set borderless(borderless: boolean) {\n    this._borderless = coerceBooleanProperty(borderless);\n  }\n  get borderless() {\n    return this._borderless;\n  }\n  private _borderless = false;\n\n\n  /**\n   * Sorting table\n   */\n  @Input()\n  set sort(sort: boolean) {\n    this._sort = coerceBooleanProperty(sort);\n  }\n  get sort() {\n    return this._sort;\n  }\n  private _sort = false;\n\n  /**\n * Sorting table\n */\n  @Input()\n  set expansion(expansion: boolean) {\n    this._expansion = coerceBooleanProperty(expansion);\n  }\n  get expansion() {\n    return this._expansion;\n  }\n  private _expansion = false;\n\n  dataSource: MatTableDataSource<any>;\n\n  @ViewChild(MatTable) table: MatTable<any>;\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\n  @ViewChild(MatSort) matSort: MatSort;\n\n  rowConfig = {} as SdsRowConfig;\n  headerRowConfig = {} as SdsHeaderRowConfig;\n  footerRowConfig = {} as SdsFooterRowConfig;\n\n  constructor() { }\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.data.currentValue) {\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\n      if (this.sort) {\n        this.dataSource.sort = this.matSort;\n      }\n    }\n  }\n\n  ngOnInit() {\n    this.dataSource = new MatTableDataSource(this.data);\n  }\n\n  ngAfterContentInit() {\n\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\n\n    if (this.sdsTableHeaderRowComponent) {\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\n    }\n\n    if (this.sdsTableFooterRowComponent) {\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\n    }\n\n    if (this.expansion) {\n      const expandedIndicator = \"expandedIndicator\";\n      if (this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)) {\n        this.rowConfig.displayedColumns.push('expandedIndicator');\n      }\n    }\n  }\n\n  ngAfterViewInit() {\n    if (this.sort) {\n      this.dataSource.sort = this.matSort;\n    }\n  }\n\n}\n",
            "selector": "sds-table-cell",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        },
        {
            "name": "SdsTableFooterCellDirective",
            "id": "directive-SdsTableFooterCellDirective-c09279e1022ed0f49458faea2b2be843",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\n  Component,\n  Input,\n  OnInit,\n  ContentChild,\n  AfterContentInit,\n  ContentChildren,\n  QueryList,\n  ViewChild,\n  TemplateRef,\n  Directive,\n  SimpleChanges,\n  OnChanges\n} from '@angular/core';\nimport { MatSort } from '@angular/material/sort';\nimport { AfterViewInit } from '@angular/core';\nimport { MatTableDataSource, MatTable } from '@angular/material/table';\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\nimport { animate, state, style, transition, trigger } from '@angular/animations';\n\n\nexport interface SdsRowConfig {\n  displayedColumns?: string[];\n  expandOnClick?: boolean;\n}\n\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\nexport interface SdsFooterRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\n@Component({\n  selector: 'sds-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() expandOnClick = false;\n}\n\n@Component({\n  selector: 'sds-header-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableHeaderRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Component({\n  selector: 'sds-footer-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableFooterRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Directive({ selector: 'sds-table-headercell' })\nexport class SdsTableHeaderCellDirective { }\n\n@Directive({ selector: 'sds-table-cell' })\nexport class SdsTableCellDirective { }\n\n@Directive({ selector: 'sds-table-footercell' })\nexport class SdsTableFooterCellDirective { }\n\n@Component({\n  selector: 'sds-table-column',\n  template: `\n    <ng-template #columnHeaderCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n  `\n})\nexport class SdsTableColumnDefComponent implements AfterContentInit {\n\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\n\n  @ContentChild('sdsHeaderCell', { read: TemplateRef }) headerCellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsCell', { read: TemplateRef }) cellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsFooterCell', { read: TemplateRef }) footerCellTemplate!: TemplateRef<any>;\n\n  @Input() sdsColumnName;\n\n  @Input() sticky = false;\n\n  @Input() stickyEnd = false;\n\n  @Input() sdsExpandedTemplate = false;\n\n  ngAfterContentInit() { }\n}\n\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss'],\n  animations: [\n    trigger('detailExpand', [\n      state('collapsed', style({ height: '0px', minHeight: '0' })),\n      state('expanded', style({ height: '*' })),\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\n    ]),\n  ]\n})\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\n  expandedElement: any;\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * Borderless table\n   */\n  @Input()\n  set borderless(borderless: boolean) {\n    this._borderless = coerceBooleanProperty(borderless);\n  }\n  get borderless() {\n    return this._borderless;\n  }\n  private _borderless = false;\n\n\n  /**\n   * Sorting table\n   */\n  @Input()\n  set sort(sort: boolean) {\n    this._sort = coerceBooleanProperty(sort);\n  }\n  get sort() {\n    return this._sort;\n  }\n  private _sort = false;\n\n  /**\n * Sorting table\n */\n  @Input()\n  set expansion(expansion: boolean) {\n    this._expansion = coerceBooleanProperty(expansion);\n  }\n  get expansion() {\n    return this._expansion;\n  }\n  private _expansion = false;\n\n  dataSource: MatTableDataSource<any>;\n\n  @ViewChild(MatTable) table: MatTable<any>;\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\n  @ViewChild(MatSort) matSort: MatSort;\n\n  rowConfig = {} as SdsRowConfig;\n  headerRowConfig = {} as SdsHeaderRowConfig;\n  footerRowConfig = {} as SdsFooterRowConfig;\n\n  constructor() { }\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.data.currentValue) {\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\n      if (this.sort) {\n        this.dataSource.sort = this.matSort;\n      }\n    }\n  }\n\n  ngOnInit() {\n    this.dataSource = new MatTableDataSource(this.data);\n  }\n\n  ngAfterContentInit() {\n\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\n\n    if (this.sdsTableHeaderRowComponent) {\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\n    }\n\n    if (this.sdsTableFooterRowComponent) {\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\n    }\n\n    if (this.expansion) {\n      const expandedIndicator = \"expandedIndicator\";\n      if (this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)) {\n        this.rowConfig.displayedColumns.push('expandedIndicator');\n      }\n    }\n  }\n\n  ngAfterViewInit() {\n    if (this.sort) {\n      this.dataSource.sort = this.matSort;\n    }\n  }\n\n}\n",
            "selector": "sds-table-footercell",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        },
        {
            "name": "SdsTableHeaderCellDirective",
            "id": "directive-SdsTableHeaderCellDirective-c09279e1022ed0f49458faea2b2be843",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\n  Component,\n  Input,\n  OnInit,\n  ContentChild,\n  AfterContentInit,\n  ContentChildren,\n  QueryList,\n  ViewChild,\n  TemplateRef,\n  Directive,\n  SimpleChanges,\n  OnChanges\n} from '@angular/core';\nimport { MatSort } from '@angular/material/sort';\nimport { AfterViewInit } from '@angular/core';\nimport { MatTableDataSource, MatTable } from '@angular/material/table';\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\nimport { animate, state, style, transition, trigger } from '@angular/animations';\n\n\nexport interface SdsRowConfig {\n  displayedColumns?: string[];\n  expandOnClick?: boolean;\n}\n\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\nexport interface SdsFooterRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\n@Component({\n  selector: 'sds-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() expandOnClick = false;\n}\n\n@Component({\n  selector: 'sds-header-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableHeaderRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Component({\n  selector: 'sds-footer-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableFooterRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Directive({ selector: 'sds-table-headercell' })\nexport class SdsTableHeaderCellDirective { }\n\n@Directive({ selector: 'sds-table-cell' })\nexport class SdsTableCellDirective { }\n\n@Directive({ selector: 'sds-table-footercell' })\nexport class SdsTableFooterCellDirective { }\n\n@Component({\n  selector: 'sds-table-column',\n  template: `\n    <ng-template #columnHeaderCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n  `\n})\nexport class SdsTableColumnDefComponent implements AfterContentInit {\n\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\n\n  @ContentChild('sdsHeaderCell', { read: TemplateRef }) headerCellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsCell', { read: TemplateRef }) cellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsFooterCell', { read: TemplateRef }) footerCellTemplate!: TemplateRef<any>;\n\n  @Input() sdsColumnName;\n\n  @Input() sticky = false;\n\n  @Input() stickyEnd = false;\n\n  @Input() sdsExpandedTemplate = false;\n\n  ngAfterContentInit() { }\n}\n\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss'],\n  animations: [\n    trigger('detailExpand', [\n      state('collapsed', style({ height: '0px', minHeight: '0' })),\n      state('expanded', style({ height: '*' })),\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\n    ]),\n  ]\n})\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\n  expandedElement: any;\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * Borderless table\n   */\n  @Input()\n  set borderless(borderless: boolean) {\n    this._borderless = coerceBooleanProperty(borderless);\n  }\n  get borderless() {\n    return this._borderless;\n  }\n  private _borderless = false;\n\n\n  /**\n   * Sorting table\n   */\n  @Input()\n  set sort(sort: boolean) {\n    this._sort = coerceBooleanProperty(sort);\n  }\n  get sort() {\n    return this._sort;\n  }\n  private _sort = false;\n\n  /**\n * Sorting table\n */\n  @Input()\n  set expansion(expansion: boolean) {\n    this._expansion = coerceBooleanProperty(expansion);\n  }\n  get expansion() {\n    return this._expansion;\n  }\n  private _expansion = false;\n\n  dataSource: MatTableDataSource<any>;\n\n  @ViewChild(MatTable) table: MatTable<any>;\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\n  @ViewChild(MatSort) matSort: MatSort;\n\n  rowConfig = {} as SdsRowConfig;\n  headerRowConfig = {} as SdsHeaderRowConfig;\n  footerRowConfig = {} as SdsFooterRowConfig;\n\n  constructor() { }\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.data.currentValue) {\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\n      if (this.sort) {\n        this.dataSource.sort = this.matSort;\n      }\n    }\n  }\n\n  ngOnInit() {\n    this.dataSource = new MatTableDataSource(this.data);\n  }\n\n  ngAfterContentInit() {\n\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\n\n    if (this.sdsTableHeaderRowComponent) {\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\n    }\n\n    if (this.sdsTableFooterRowComponent) {\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\n    }\n\n    if (this.expansion) {\n      const expandedIndicator = \"expandedIndicator\";\n      if (this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)) {\n        this.rowConfig.displayedColumns.push('expandedIndicator');\n      }\n    }\n  }\n\n  ngAfterViewInit() {\n    if (this.sort) {\n      this.dataSource.sort = this.matSort;\n    }\n  }\n\n}\n",
            "selector": "sds-table-headercell",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        }
    ],
    "components": [
        {
            "name": "SdsAccordionComponent",
            "id": "component-SdsAccordionComponent-084bfc4fb17f8b2f29d571f4199e5eb7",
            "file": "libs/packages/sam-material-extensions/src/lib/accordion/accordion.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-accordion-next",
            "styleUrls": [
                "./accordion.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./accordion.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "displayMode",
                    "defaultValue": "'flat'",
                    "line": 83
                },
                {
                    "name": "multi",
                    "defaultValue": "false",
                    "line": 79
                }
            ],
            "outputsClass": [
                {
                    "name": "multiChange",
                    "defaultValue": "new EventEmitter<boolean>()",
                    "line": 81,
                    "type": "EventEmitter<boolean>"
                }
            ],
            "propertiesClass": [
                {
                    "name": "accordion",
                    "type": "MatAccordion",
                    "optional": false,
                    "description": "",
                    "line": 75,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "MatAccordion"
                        }
                    ]
                },
                {
                    "name": "accordionItems",
                    "type": "QueryList<SdsAccordionItemComponent>",
                    "optional": false,
                    "description": "",
                    "line": 77,
                    "decorators": [
                        {
                            "name": "ContentChildren",
                            "stringifiedArguments": "SdsAccordionItemComponent"
                        }
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "closeAll",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 91,
                    "description": "<p>Closes all accordion items. </p>\n"
                },
                {
                    "name": "openAll",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 86,
                    "description": "<p>Opens all accordion items. </p>\n"
                },
                {
                    "name": "toggleMulti",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 96,
                    "description": "<p>Toggles the multi state of the accordion. </p>\n"
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  Input,\n  TemplateRef,\n  ViewChild,\n  Directive,\n  QueryList,\n  ContentChildren,\n  Output,\n  EventEmitter\n} from '@angular/core';\n\nimport {MatAccordion} from '@angular/material/expansion';\n\n\n@Directive({selector: 'sds-accordion-title'})\nexport class SdsAccordionTitleDirective {}\n\n@Directive({selector: 'sds-accordion-content'})\nexport class SdsAccordionContentDirective {}\n\n@Component({\n  selector: 'sds-accordion-item',\n  template: `\n    <ng-template #itemTitleTemplate>\n      <ng-content #title select=\"sds-accordion-title\"></ng-content>\n    </ng-template>\n\n    <ng-template #itemContentTemplate>\n      <ng-content #content select=\"sds-accordion-content\"></ng-content>\n    </ng-template>\n  `\n})\nexport class SdsAccordionItemComponent {\n\n  @ViewChild('itemTitleTemplate') itemTitleTemplate: TemplateRef<any>;\n  @ViewChild('itemContentTemplate') itemContentTemplate: TemplateRef<any>;\n\n  @Input() expanded = false;\n\n  @Input() disabled = false;\n\n  /** Toggles the expanded state of the expansion panel. */\n  toggle(): void {\n    this.expanded = !this.expanded;\n  }\n\n  /** Sets the expanded state of the expansion panel to false. */\n  close(): void {\n    this.expanded = false;\n  }\n\n  /** Sets the expanded state of the expansion panel to true. */\n  open(): void {\n    this.expanded = true;\n  }\n\n  /** Toggles the disabled state of the expansion panel. */\n  toggleDisabled(): void {\n    this.disabled = !this.disabled;\n    if(this.disabled) {\n      this.expanded = false;\n    }\n  }\n\n}\n\n@Component({\n  selector: 'sds-accordion-next',\n  templateUrl: './accordion.component.html',\n  styleUrls: ['./accordion.component.scss']\n})\nexport class SdsAccordionComponent {\n\n  @ViewChild(MatAccordion) accordion: MatAccordion;\n\n  @ContentChildren(SdsAccordionItemComponent) accordionItems!: QueryList<SdsAccordionItemComponent>;\n\n  @Input() multi = false;\n\n  @Output() multiChange:EventEmitter<boolean> = new EventEmitter<boolean>();\n\n  @Input() displayMode = 'flat';\n\n  /** Opens all accordion items. */\n  openAll(): void {\n    this.accordion.openAll();\n  }\n\n  /** Closes all accordion items. */\n  closeAll(): void {\n    this.accordion.closeAll();\n  }\n\n  /** Toggles the multi state of the accordion. */\n  toggleMulti(): void {\n    this.multi = !this.multi;\n    this.accordion.closeAll();\n    this.multiChange.emit(this.multi);\n  }\n\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "@import \"~@gsa-sam/sam-styles/src/stylesheets/theme/_styles\";\n@import \"~uswds/src/stylesheets/packages/_required\";\n\n\n\n\n::ng-deep {\n  sds-accordion-next {\n    sds-accordion-title {\n      @include u-font('sans', 'xs');\n      @include u-text('semibold');\n    }\n    .mat-accordion {\n      .mat-expansion-panel {\n        @include u-border('base-light');\n        @include u-border-top(0);\n        @include u-border-right('1px');\n        @include u-border-bottom('1px');\n        @include u-border-left('1px');\n\n        &:first-of-type {\n          @include u-border-top('1px');\n          border-top-left-radius: 0;\n          border-top-right-radius: 0;\n        }\n\n        &:last-of-type {\n          border-bottom-left-radius: 0;\n          border-bottom-right-radius: 0;\n        }\n\n        .mat-expanded {\n          sds-accordion-title {\n            @include u-text('secondary-dark');\n          }\n        }\n      }\n    }\n  }\n}\n\n.sds-expansion-indicator {\n  position: relative;\n\n  &::after {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    right: 8px;\n    width: 25px;\n    height: 25px;\n    background: linear-gradient(#0a3466, #0a3466);\n    background-position: center;\n    background-size: 54% 1px;\n    background-repeat: no-repeat;\n  }\n  &::before {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    right: 8px;\n    width: 25px;\n    height: 25px;\n    background: linear-gradient(#0a3466, #0a3466), #e2e2e2;\n    background-position: center;\n    background-size: 1px 54%;\n    background-repeat: no-repeat;\n    border-radius: 50%;\n  }\n\n  &.sds-expansion-indicator--expanded::after {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    right: 8px;\n    width: 25px;\n    height: 25px;\n    background: linear-gradient(#0a3466, #0a3466);\n    background-position: center;\n    background-size: 54% 1px;\n    background-repeat: no-repeat;\n  }\n\n  &.sds-expansion-indicator--expanded::before {\n    content: none;\n  }\n}\n\n.mat-expansion-panel-header[aria-disabled=true] .sds-expansion-indicator {\n  opacity: 0.26;\n}\n\n// Material overrides\n\n.mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true]), .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true]), .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true]) {\n  @include u-bg('accent-cool-light')\n}\n\n.mat-expansion-panel {\n  box-shadow: none;\n}\n\nmat-panel-title {\n  line-height:25px;\n}\n",
                    "styleUrl": "./accordion.component.scss"
                }
            ],
            "stylesData": "",
            "templateData": "<mat-accordion [displayMode]=\"displayMode\" [multi]=\"multi\">\n  <ng-container *ngFor=\"let accordionItem of accordionItems\">\n      <mat-expansion-panel [(expanded)]=\"accordionItem.expanded\" [disabled]=\"accordionItem.disabled\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <ng-container *ngTemplateOutlet=\"accordionItem.itemTitleTemplate\"></ng-container>\n          </mat-panel-title>\n          <span class=\"sds-expansion-indicator\" [ngClass]=\"{'sds-expansion-indicator--expanded' : accordionItem.expanded}\"></span>\n        </mat-expansion-panel-header>\n        <ng-container *ngTemplateOutlet=\"accordionItem.itemContentTemplate\"></ng-container>\n      </mat-expansion-panel>\n  </ng-container>\n</mat-accordion>\n"
        },
        {
            "name": "SdsAccordionItemComponent",
            "id": "component-SdsAccordionItemComponent-084bfc4fb17f8b2f29d571f4199e5eb7",
            "file": "libs/packages/sam-material-extensions/src/lib/accordion/accordion.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-accordion-item",
            "styleUrls": [],
            "styles": [],
            "template": "<ng-template #itemTitleTemplate>\n  <ng-content #title select=\"sds-accordion-title\"></ng-content>\n</ng-template>\n\n<ng-template #itemContentTemplate>\n  <ng-content #content select=\"sds-accordion-content\"></ng-content>\n</ng-template>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "disabled",
                    "defaultValue": "false",
                    "line": 41
                },
                {
                    "name": "expanded",
                    "defaultValue": "false",
                    "line": 39
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "itemContentTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 37,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'itemContentTemplate'"
                        }
                    ]
                },
                {
                    "name": "itemTitleTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 36,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'itemTitleTemplate'"
                        }
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "close",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 49,
                    "description": "<p>Sets the expanded state of the expansion panel to false. </p>\n"
                },
                {
                    "name": "open",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 54,
                    "description": "<p>Sets the expanded state of the expansion panel to true. </p>\n"
                },
                {
                    "name": "toggle",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 44,
                    "description": "<p>Toggles the expanded state of the expansion panel. </p>\n"
                },
                {
                    "name": "toggleDisabled",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 59,
                    "description": "<p>Toggles the disabled state of the expansion panel. </p>\n"
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  Input,\n  TemplateRef,\n  ViewChild,\n  Directive,\n  QueryList,\n  ContentChildren,\n  Output,\n  EventEmitter\n} from '@angular/core';\n\nimport {MatAccordion} from '@angular/material/expansion';\n\n\n@Directive({selector: 'sds-accordion-title'})\nexport class SdsAccordionTitleDirective {}\n\n@Directive({selector: 'sds-accordion-content'})\nexport class SdsAccordionContentDirective {}\n\n@Component({\n  selector: 'sds-accordion-item',\n  template: `\n    <ng-template #itemTitleTemplate>\n      <ng-content #title select=\"sds-accordion-title\"></ng-content>\n    </ng-template>\n\n    <ng-template #itemContentTemplate>\n      <ng-content #content select=\"sds-accordion-content\"></ng-content>\n    </ng-template>\n  `\n})\nexport class SdsAccordionItemComponent {\n\n  @ViewChild('itemTitleTemplate') itemTitleTemplate: TemplateRef<any>;\n  @ViewChild('itemContentTemplate') itemContentTemplate: TemplateRef<any>;\n\n  @Input() expanded = false;\n\n  @Input() disabled = false;\n\n  /** Toggles the expanded state of the expansion panel. */\n  toggle(): void {\n    this.expanded = !this.expanded;\n  }\n\n  /** Sets the expanded state of the expansion panel to false. */\n  close(): void {\n    this.expanded = false;\n  }\n\n  /** Sets the expanded state of the expansion panel to true. */\n  open(): void {\n    this.expanded = true;\n  }\n\n  /** Toggles the disabled state of the expansion panel. */\n  toggleDisabled(): void {\n    this.disabled = !this.disabled;\n    if(this.disabled) {\n      this.expanded = false;\n    }\n  }\n\n}\n\n@Component({\n  selector: 'sds-accordion-next',\n  templateUrl: './accordion.component.html',\n  styleUrls: ['./accordion.component.scss']\n})\nexport class SdsAccordionComponent {\n\n  @ViewChild(MatAccordion) accordion: MatAccordion;\n\n  @ContentChildren(SdsAccordionItemComponent) accordionItems!: QueryList<SdsAccordionItemComponent>;\n\n  @Input() multi = false;\n\n  @Output() multiChange:EventEmitter<boolean> = new EventEmitter<boolean>();\n\n  @Input() displayMode = 'flat';\n\n  /** Opens all accordion items. */\n  openAll(): void {\n    this.accordion.openAll();\n  }\n\n  /** Closes all accordion items. */\n  closeAll(): void {\n    this.accordion.closeAll();\n  }\n\n  /** Toggles the multi state of the accordion. */\n  toggleMulti(): void {\n    this.multi = !this.multi;\n    this.accordion.closeAll();\n    this.multiChange.emit(this.multi);\n  }\n\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": ""
        },
        {
            "name": "SdsTableColumnDefComponent",
            "id": "component-SdsTableColumnDefComponent-c09279e1022ed0f49458faea2b2be843",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-table-column",
            "styleUrls": [],
            "styles": [],
            "template": "<ng-template #columnHeaderCell let-element=\"element\">\n  <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n</ng-template>\n\n<ng-template #columnCell let-element=\"element\">\n  <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n</ng-template>\n\n<ng-template #columnFooterCell let-element=\"element\">\n  <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n</ng-template>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "sdsColumnName",
                    "line": 103
                },
                {
                    "name": "sdsExpandedTemplate",
                    "defaultValue": "false",
                    "line": 109
                },
                {
                    "name": "sticky",
                    "defaultValue": "false",
                    "line": 105
                },
                {
                    "name": "stickyEnd",
                    "defaultValue": "false",
                    "line": 107
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "cellTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 100,
                    "decorators": [
                        {
                            "name": "ContentChild",
                            "stringifiedArguments": "'sdsCell', {read: TemplateRef}"
                        }
                    ]
                },
                {
                    "name": "columnCell",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 96,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'columnCell'"
                        }
                    ]
                },
                {
                    "name": "columnFooterCell",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 97,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'columnFooterCell'"
                        }
                    ]
                },
                {
                    "name": "columnHeaderCell",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 95,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'columnHeaderCell'"
                        }
                    ]
                },
                {
                    "name": "footerCellTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 101,
                    "decorators": [
                        {
                            "name": "ContentChild",
                            "stringifiedArguments": "'sdsFooterCell', {read: TemplateRef}"
                        }
                    ]
                },
                {
                    "name": "headerCellTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 99,
                    "decorators": [
                        {
                            "name": "ContentChild",
                            "stringifiedArguments": "'sdsHeaderCell', {read: TemplateRef}"
                        }
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "ngAfterContentInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 111
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  Input,\n  OnInit,\n  ContentChild,\n  AfterContentInit,\n  ContentChildren,\n  QueryList,\n  ViewChild,\n  TemplateRef,\n  Directive,\n  SimpleChanges,\n  OnChanges\n} from '@angular/core';\nimport { MatSort } from '@angular/material/sort';\nimport { AfterViewInit } from '@angular/core';\nimport { MatTableDataSource, MatTable } from '@angular/material/table';\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\nimport { animate, state, style, transition, trigger } from '@angular/animations';\n\n\nexport interface SdsRowConfig {\n  displayedColumns?: string[];\n  expandOnClick?: boolean;\n}\n\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\nexport interface SdsFooterRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\n@Component({\n  selector: 'sds-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() expandOnClick = false;\n}\n\n@Component({\n  selector: 'sds-header-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableHeaderRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Component({\n  selector: 'sds-footer-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableFooterRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Directive({ selector: 'sds-table-headercell' })\nexport class SdsTableHeaderCellDirective { }\n\n@Directive({ selector: 'sds-table-cell' })\nexport class SdsTableCellDirective { }\n\n@Directive({ selector: 'sds-table-footercell' })\nexport class SdsTableFooterCellDirective { }\n\n@Component({\n  selector: 'sds-table-column',\n  template: `\n    <ng-template #columnHeaderCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n  `\n})\nexport class SdsTableColumnDefComponent implements AfterContentInit {\n\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\n\n  @ContentChild('sdsHeaderCell', { read: TemplateRef }) headerCellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsCell', { read: TemplateRef }) cellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsFooterCell', { read: TemplateRef }) footerCellTemplate!: TemplateRef<any>;\n\n  @Input() sdsColumnName;\n\n  @Input() sticky = false;\n\n  @Input() stickyEnd = false;\n\n  @Input() sdsExpandedTemplate = false;\n\n  ngAfterContentInit() { }\n}\n\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss'],\n  animations: [\n    trigger('detailExpand', [\n      state('collapsed', style({ height: '0px', minHeight: '0' })),\n      state('expanded', style({ height: '*' })),\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\n    ]),\n  ]\n})\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\n  expandedElement: any;\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * Borderless table\n   */\n  @Input()\n  set borderless(borderless: boolean) {\n    this._borderless = coerceBooleanProperty(borderless);\n  }\n  get borderless() {\n    return this._borderless;\n  }\n  private _borderless = false;\n\n\n  /**\n   * Sorting table\n   */\n  @Input()\n  set sort(sort: boolean) {\n    this._sort = coerceBooleanProperty(sort);\n  }\n  get sort() {\n    return this._sort;\n  }\n  private _sort = false;\n\n  /**\n * Sorting table\n */\n  @Input()\n  set expansion(expansion: boolean) {\n    this._expansion = coerceBooleanProperty(expansion);\n  }\n  get expansion() {\n    return this._expansion;\n  }\n  private _expansion = false;\n\n  dataSource: MatTableDataSource<any>;\n\n  @ViewChild(MatTable) table: MatTable<any>;\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\n  @ViewChild(MatSort) matSort: MatSort;\n\n  rowConfig = {} as SdsRowConfig;\n  headerRowConfig = {} as SdsHeaderRowConfig;\n  footerRowConfig = {} as SdsFooterRowConfig;\n\n  constructor() { }\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.data.currentValue) {\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\n      if (this.sort) {\n        this.dataSource.sort = this.matSort;\n      }\n    }\n  }\n\n  ngOnInit() {\n    this.dataSource = new MatTableDataSource(this.data);\n  }\n\n  ngAfterContentInit() {\n\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\n\n    if (this.sdsTableHeaderRowComponent) {\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\n    }\n\n    if (this.sdsTableFooterRowComponent) {\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\n    }\n\n    if (this.expansion) {\n      const expandedIndicator = \"expandedIndicator\";\n      if (this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)) {\n        this.rowConfig.displayedColumns.push('expandedIndicator');\n      }\n    }\n  }\n\n  ngAfterViewInit() {\n    if (this.sort) {\n      this.dataSource.sort = this.matSort;\n    }\n  }\n\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "implements": [
                "AfterContentInit"
            ]
        },
        {
            "name": "SdsTableComponent",
            "id": "component-SdsTableComponent-c09279e1022ed0f49458faea2b2be843",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-table",
            "styleUrls": [
                "./table.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./table.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "borderless",
                    "description": "<p>Borderless table</p>\n",
                    "line": 138,
                    "type": "boolean"
                },
                {
                    "name": "data",
                    "description": "<p>Data for table</p>\n",
                    "line": 132
                },
                {
                    "name": "expansion",
                    "description": "<p>Sorting table</p>\n",
                    "line": 163,
                    "type": "boolean"
                },
                {
                    "name": "sort",
                    "description": "<p>Sorting table</p>\n",
                    "line": 151,
                    "type": "boolean"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "_borderless",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 144,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_expansion",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 169,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_sort",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 157,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "dataSource",
                    "type": "MatTableDataSource<any>",
                    "optional": false,
                    "description": "",
                    "line": 171
                },
                {
                    "name": "expandedElement",
                    "type": "any",
                    "optional": false,
                    "description": "",
                    "line": 128
                },
                {
                    "name": "footerRowConfig",
                    "defaultValue": "{} as SdsFooterRowConfig",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 182
                },
                {
                    "name": "headerRowConfig",
                    "defaultValue": "{} as SdsHeaderRowConfig",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 181
                },
                {
                    "name": "matSort",
                    "type": "MatSort",
                    "optional": false,
                    "description": "",
                    "line": 178,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "MatSort"
                        }
                    ]
                },
                {
                    "name": "rowConfig",
                    "defaultValue": "{} as SdsRowConfig",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 180
                },
                {
                    "name": "sdsColumnItems",
                    "type": "QueryList<SdsTableColumnDefComponent>",
                    "optional": false,
                    "description": "",
                    "line": 177,
                    "decorators": [
                        {
                            "name": "ContentChildren",
                            "stringifiedArguments": "SdsTableColumnDefComponent, {descendants: true}"
                        }
                    ]
                },
                {
                    "name": "sdsTableFooterRowComponent",
                    "type": "SdsTableFooterRowComponent",
                    "optional": false,
                    "description": "",
                    "line": 176,
                    "decorators": [
                        {
                            "name": "ContentChild",
                            "stringifiedArguments": "SdsTableFooterRowComponent"
                        }
                    ]
                },
                {
                    "name": "sdsTableHeaderRowComponent",
                    "type": "SdsTableHeaderRowComponent",
                    "optional": false,
                    "description": "",
                    "line": 175,
                    "decorators": [
                        {
                            "name": "ContentChild",
                            "stringifiedArguments": "SdsTableHeaderRowComponent"
                        }
                    ]
                },
                {
                    "name": "sdsTableRowComponent",
                    "type": "SdsTableRowComponent",
                    "optional": false,
                    "description": "",
                    "line": 174,
                    "decorators": [
                        {
                            "name": "ContentChild",
                            "stringifiedArguments": "SdsTableRowComponent"
                        }
                    ]
                },
                {
                    "name": "table",
                    "type": "MatTable<any>",
                    "optional": false,
                    "description": "",
                    "line": 173,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "MatTable"
                        }
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "ngAfterContentInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 199
                },
                {
                    "name": "ngAfterViewInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 222
                },
                {
                    "name": "ngOnChanges",
                    "args": [
                        {
                            "name": "changes",
                            "type": "SimpleChanges"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 186,
                    "jsdoctags": [
                        {
                            "name": "changes",
                            "type": "SimpleChanges",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 195
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  Input,\n  OnInit,\n  ContentChild,\n  AfterContentInit,\n  ContentChildren,\n  QueryList,\n  ViewChild,\n  TemplateRef,\n  Directive,\n  SimpleChanges,\n  OnChanges\n} from '@angular/core';\nimport { MatSort } from '@angular/material/sort';\nimport { AfterViewInit } from '@angular/core';\nimport { MatTableDataSource, MatTable } from '@angular/material/table';\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\nimport { animate, state, style, transition, trigger } from '@angular/animations';\n\n\nexport interface SdsRowConfig {\n  displayedColumns?: string[];\n  expandOnClick?: boolean;\n}\n\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\nexport interface SdsFooterRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\n@Component({\n  selector: 'sds-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() expandOnClick = false;\n}\n\n@Component({\n  selector: 'sds-header-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableHeaderRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Component({\n  selector: 'sds-footer-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableFooterRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Directive({ selector: 'sds-table-headercell' })\nexport class SdsTableHeaderCellDirective { }\n\n@Directive({ selector: 'sds-table-cell' })\nexport class SdsTableCellDirective { }\n\n@Directive({ selector: 'sds-table-footercell' })\nexport class SdsTableFooterCellDirective { }\n\n@Component({\n  selector: 'sds-table-column',\n  template: `\n    <ng-template #columnHeaderCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n  `\n})\nexport class SdsTableColumnDefComponent implements AfterContentInit {\n\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\n\n  @ContentChild('sdsHeaderCell', { read: TemplateRef }) headerCellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsCell', { read: TemplateRef }) cellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsFooterCell', { read: TemplateRef }) footerCellTemplate!: TemplateRef<any>;\n\n  @Input() sdsColumnName;\n\n  @Input() sticky = false;\n\n  @Input() stickyEnd = false;\n\n  @Input() sdsExpandedTemplate = false;\n\n  ngAfterContentInit() { }\n}\n\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss'],\n  animations: [\n    trigger('detailExpand', [\n      state('collapsed', style({ height: '0px', minHeight: '0' })),\n      state('expanded', style({ height: '*' })),\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\n    ]),\n  ]\n})\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\n  expandedElement: any;\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * Borderless table\n   */\n  @Input()\n  set borderless(borderless: boolean) {\n    this._borderless = coerceBooleanProperty(borderless);\n  }\n  get borderless() {\n    return this._borderless;\n  }\n  private _borderless = false;\n\n\n  /**\n   * Sorting table\n   */\n  @Input()\n  set sort(sort: boolean) {\n    this._sort = coerceBooleanProperty(sort);\n  }\n  get sort() {\n    return this._sort;\n  }\n  private _sort = false;\n\n  /**\n * Sorting table\n */\n  @Input()\n  set expansion(expansion: boolean) {\n    this._expansion = coerceBooleanProperty(expansion);\n  }\n  get expansion() {\n    return this._expansion;\n  }\n  private _expansion = false;\n\n  dataSource: MatTableDataSource<any>;\n\n  @ViewChild(MatTable) table: MatTable<any>;\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\n  @ViewChild(MatSort) matSort: MatSort;\n\n  rowConfig = {} as SdsRowConfig;\n  headerRowConfig = {} as SdsHeaderRowConfig;\n  footerRowConfig = {} as SdsFooterRowConfig;\n\n  constructor() { }\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.data.currentValue) {\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\n      if (this.sort) {\n        this.dataSource.sort = this.matSort;\n      }\n    }\n  }\n\n  ngOnInit() {\n    this.dataSource = new MatTableDataSource(this.data);\n  }\n\n  ngAfterContentInit() {\n\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\n\n    if (this.sdsTableHeaderRowComponent) {\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\n    }\n\n    if (this.sdsTableFooterRowComponent) {\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\n    }\n\n    if (this.expansion) {\n      const expandedIndicator = \"expandedIndicator\";\n      if (this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)) {\n        this.rowConfig.displayedColumns.push('expandedIndicator');\n      }\n    }\n  }\n\n  ngAfterViewInit() {\n    if (this.sort) {\n      this.dataSource.sort = this.matSort;\n    }\n  }\n\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./table.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 182
            },
            "implements": [
                "OnInit",
                "AfterContentInit",
                "AfterViewInit",
                "OnChanges"
            ],
            "accessors": {
                "borderless": {
                    "name": "borderless",
                    "setSignature": {
                        "name": "borderless",
                        "type": "void",
                        "args": [
                            {
                                "name": "borderless",
                                "type": "boolean"
                            }
                        ],
                        "returnType": "void",
                        "line": 138,
                        "description": "<p>Borderless table</p>\n",
                        "jsdoctags": [
                            {
                                "name": "borderless",
                                "type": "boolean",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    },
                    "getSignature": {
                        "name": "borderless",
                        "type": "",
                        "returnType": "",
                        "line": 141
                    }
                },
                "sort": {
                    "name": "sort",
                    "setSignature": {
                        "name": "sort",
                        "type": "void",
                        "args": [
                            {
                                "name": "sort",
                                "type": "boolean"
                            }
                        ],
                        "returnType": "void",
                        "line": 151,
                        "description": "<p>Sorting table</p>\n",
                        "jsdoctags": [
                            {
                                "name": "sort",
                                "type": "boolean",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    },
                    "getSignature": {
                        "name": "sort",
                        "type": "",
                        "returnType": "",
                        "line": 154
                    }
                },
                "expansion": {
                    "name": "expansion",
                    "setSignature": {
                        "name": "expansion",
                        "type": "void",
                        "args": [
                            {
                                "name": "expansion",
                                "type": "boolean"
                            }
                        ],
                        "returnType": "void",
                        "line": 163,
                        "description": "<p>Sorting table</p>\n",
                        "jsdoctags": [
                            {
                                "name": "expansion",
                                "type": "boolean",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    },
                    "getSignature": {
                        "name": "expansion",
                        "type": "",
                        "returnType": "",
                        "line": 166
                    }
                }
            },
            "templateData": "<div class=\"sds-table__container\" [ngClass]=\"{ 'sds-table__container--borderless': borderless }\">\n  <table mat-table [dataSource]=\"dataSource\" class=\"sds-table width-full mat-elevation-z8\" matSort multiTemplateDataRows [ngClass]=\"{ 'sds-table--expansion': expansion }\">\n\n    <ng-container *ngFor=\"let sdsColumnItem of sdsColumnItems\">\n      <ng-container *ngIf=\"!sdsColumnItem.sdsExpandedTemplate\" matColumnDef=\"{{sdsColumnItem.sdsColumnName}}\" [sticky]=\"sdsColumnItem.sticky\" [stickyEnd]=\"sdsColumnItem.stickyEnd\">\n        <ng-container *ngIf=\"sort\">\n          <th mat-header-cell *matHeaderCellDef scope=\"col\" mat-sort-header><ng-container *ngTemplateOutlet=\"sdsColumnItem.columnHeaderCell\"></ng-container></th>\n        </ng-container>\n        <ng-container *ngIf=\"!sort\">\n          <th mat-header-cell *matHeaderCellDef scope=\"col\"><ng-container *ngTemplateOutlet=\"sdsColumnItem.columnHeaderCell\"></ng-container></th>\n        </ng-container>\n        <td mat-cell *matCellDef=\"let element\"><ng-container *ngTemplateOutlet=\"sdsColumnItem.columnCell; context: {element : element}\"></ng-container></td>\n        <ng-container *ngIf=\"sdsColumnItem.footerCellTemplate\" >\n          <th mat-footer-cell *matFooterCellDef scope=\"col\"><ng-container *ngTemplateOutlet=\"sdsColumnItem.columnFooterCell\"></ng-container></th>\n        </ng-container>\n        <ng-container *ngIf=\"!sdsColumnItem.footerCellTemplate\" >\n          <td mat-footer-cell *matFooterCellDef scope=\"col\"></td>\n        </ng-container>\n\n      </ng-container>\n    </ng-container>\n\n    <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n    <ng-container *ngIf=\"expansion\">\n      <ng-container *ngFor=\"let sdsColumnItem of sdsColumnItems\">\n        <ng-container *ngIf=\"sdsColumnItem.sdsExpandedTemplate\"  matColumnDef=\"{{sdsColumnItem.sdsColumnName}}\">\n          <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"rowConfig.displayedColumns.length\" class=\"sds-table__cell--detail\">\n            <div class=\"sds-table__cell__expanded-wrapper\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n              <ng-container *ngTemplateOutlet=\"sdsColumnItem.columnCell; context: {element : element}\"></ng-container>\n            </div>\n          </td>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n\n    <ng-container *ngIf=\"expansion\" matColumnDef=\"expandedIndicator\">\n      <td mat-header-cell *matHeaderCellDef></td>\n      <td mat-cell *matCellDef=\"let element\"\n        class=\"cursor-pointer\"\n        (click)=\"!rowConfig.expandOnClick ? (expandedElement = expandedElement === element ? null : element) : false\"\n      >\n        <fa-icon *ngIf=\"element == expandedElement\" [icon]=\"['fas', 'chevron-up']\" size=\"sm\"></fa-icon>\n        <fa-icon *ngIf=\"element != expandedElement\" [icon]=\"['fas', 'chevron-down']\" size=\"sm\"></fa-icon>\n      </td>\n      <td mat-footer-cell *matFooterCellDef></td>\n    </ng-container>\n\n    <ng-container *ngIf=\"headerRowConfig && headerRowConfig.displayedColumns\">\n      <tr mat-header-row *matHeaderRowDef=\"headerRowConfig.displayedColumns; sticky: headerRowConfig.sticky\"></tr>\n    </ng-container>\n\n    <tr mat-row *matRowDef=\"let row; columns: rowConfig.displayedColumns;\"\n      class=\"sds-table__row\"\n      [ngClass]=\"{ 'cursor-pointer': rowConfig.expandOnClick, 'sds-table__row--expanded': expandedElement == row }\"\n      (click)=\"rowConfig.expandOnClick ? (expandedElement = expandedElement === row ? null : row) : false\"\n    ></tr>\n\n    <ng-container *ngIf=\"expansion\">\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"sds-table__row--detail\"></tr>\n    </ng-container>\n\n    <ng-container *ngIf=\"footerRowConfig && footerRowConfig.displayedColumns\">\n      <tr mat-footer-row *matFooterRowDef=\"footerRowConfig.displayedColumns; sticky: footerRowConfig.sticky\"></tr>\n    </ng-container>\n\n  </table>\n</div>\n"
        },
        {
            "name": "SdsTableFooterRowComponent",
            "id": "component-SdsTableFooterRowComponent-c09279e1022ed0f49458faea2b2be843",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-footer-row",
            "styleUrls": [],
            "styles": [],
            "template": "<ng-content></ng-content>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "displayedColumns",
                    "line": 64,
                    "type": "Array<string>"
                },
                {
                    "name": "sticky",
                    "line": 65,
                    "type": "boolean"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  Input,\n  OnInit,\n  ContentChild,\n  AfterContentInit,\n  ContentChildren,\n  QueryList,\n  ViewChild,\n  TemplateRef,\n  Directive,\n  SimpleChanges,\n  OnChanges\n} from '@angular/core';\nimport { MatSort } from '@angular/material/sort';\nimport { AfterViewInit } from '@angular/core';\nimport { MatTableDataSource, MatTable } from '@angular/material/table';\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\nimport { animate, state, style, transition, trigger } from '@angular/animations';\n\n\nexport interface SdsRowConfig {\n  displayedColumns?: string[];\n  expandOnClick?: boolean;\n}\n\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\nexport interface SdsFooterRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\n@Component({\n  selector: 'sds-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() expandOnClick = false;\n}\n\n@Component({\n  selector: 'sds-header-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableHeaderRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Component({\n  selector: 'sds-footer-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableFooterRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Directive({ selector: 'sds-table-headercell' })\nexport class SdsTableHeaderCellDirective { }\n\n@Directive({ selector: 'sds-table-cell' })\nexport class SdsTableCellDirective { }\n\n@Directive({ selector: 'sds-table-footercell' })\nexport class SdsTableFooterCellDirective { }\n\n@Component({\n  selector: 'sds-table-column',\n  template: `\n    <ng-template #columnHeaderCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n  `\n})\nexport class SdsTableColumnDefComponent implements AfterContentInit {\n\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\n\n  @ContentChild('sdsHeaderCell', { read: TemplateRef }) headerCellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsCell', { read: TemplateRef }) cellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsFooterCell', { read: TemplateRef }) footerCellTemplate!: TemplateRef<any>;\n\n  @Input() sdsColumnName;\n\n  @Input() sticky = false;\n\n  @Input() stickyEnd = false;\n\n  @Input() sdsExpandedTemplate = false;\n\n  ngAfterContentInit() { }\n}\n\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss'],\n  animations: [\n    trigger('detailExpand', [\n      state('collapsed', style({ height: '0px', minHeight: '0' })),\n      state('expanded', style({ height: '*' })),\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\n    ]),\n  ]\n})\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\n  expandedElement: any;\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * Borderless table\n   */\n  @Input()\n  set borderless(borderless: boolean) {\n    this._borderless = coerceBooleanProperty(borderless);\n  }\n  get borderless() {\n    return this._borderless;\n  }\n  private _borderless = false;\n\n\n  /**\n   * Sorting table\n   */\n  @Input()\n  set sort(sort: boolean) {\n    this._sort = coerceBooleanProperty(sort);\n  }\n  get sort() {\n    return this._sort;\n  }\n  private _sort = false;\n\n  /**\n * Sorting table\n */\n  @Input()\n  set expansion(expansion: boolean) {\n    this._expansion = coerceBooleanProperty(expansion);\n  }\n  get expansion() {\n    return this._expansion;\n  }\n  private _expansion = false;\n\n  dataSource: MatTableDataSource<any>;\n\n  @ViewChild(MatTable) table: MatTable<any>;\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\n  @ViewChild(MatSort) matSort: MatSort;\n\n  rowConfig = {} as SdsRowConfig;\n  headerRowConfig = {} as SdsHeaderRowConfig;\n  footerRowConfig = {} as SdsFooterRowConfig;\n\n  constructor() { }\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.data.currentValue) {\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\n      if (this.sort) {\n        this.dataSource.sort = this.matSort;\n      }\n    }\n  }\n\n  ngOnInit() {\n    this.dataSource = new MatTableDataSource(this.data);\n  }\n\n  ngAfterContentInit() {\n\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\n\n    if (this.sdsTableHeaderRowComponent) {\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\n    }\n\n    if (this.sdsTableFooterRowComponent) {\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\n    }\n\n    if (this.expansion) {\n      const expandedIndicator = \"expandedIndicator\";\n      if (this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)) {\n        this.rowConfig.displayedColumns.push('expandedIndicator');\n      }\n    }\n  }\n\n  ngAfterViewInit() {\n    if (this.sort) {\n      this.dataSource.sort = this.matSort;\n    }\n  }\n\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": ""
        },
        {
            "name": "SdsTableHeaderRowComponent",
            "id": "component-SdsTableHeaderRowComponent-c09279e1022ed0f49458faea2b2be843",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-header-row",
            "styleUrls": [],
            "styles": [],
            "template": "<ng-content></ng-content>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "displayedColumns",
                    "line": 53,
                    "type": "Array<string>"
                },
                {
                    "name": "sticky",
                    "line": 54,
                    "type": "boolean"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  Input,\n  OnInit,\n  ContentChild,\n  AfterContentInit,\n  ContentChildren,\n  QueryList,\n  ViewChild,\n  TemplateRef,\n  Directive,\n  SimpleChanges,\n  OnChanges\n} from '@angular/core';\nimport { MatSort } from '@angular/material/sort';\nimport { AfterViewInit } from '@angular/core';\nimport { MatTableDataSource, MatTable } from '@angular/material/table';\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\nimport { animate, state, style, transition, trigger } from '@angular/animations';\n\n\nexport interface SdsRowConfig {\n  displayedColumns?: string[];\n  expandOnClick?: boolean;\n}\n\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\nexport interface SdsFooterRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\n@Component({\n  selector: 'sds-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() expandOnClick = false;\n}\n\n@Component({\n  selector: 'sds-header-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableHeaderRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Component({\n  selector: 'sds-footer-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableFooterRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Directive({ selector: 'sds-table-headercell' })\nexport class SdsTableHeaderCellDirective { }\n\n@Directive({ selector: 'sds-table-cell' })\nexport class SdsTableCellDirective { }\n\n@Directive({ selector: 'sds-table-footercell' })\nexport class SdsTableFooterCellDirective { }\n\n@Component({\n  selector: 'sds-table-column',\n  template: `\n    <ng-template #columnHeaderCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n  `\n})\nexport class SdsTableColumnDefComponent implements AfterContentInit {\n\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\n\n  @ContentChild('sdsHeaderCell', { read: TemplateRef }) headerCellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsCell', { read: TemplateRef }) cellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsFooterCell', { read: TemplateRef }) footerCellTemplate!: TemplateRef<any>;\n\n  @Input() sdsColumnName;\n\n  @Input() sticky = false;\n\n  @Input() stickyEnd = false;\n\n  @Input() sdsExpandedTemplate = false;\n\n  ngAfterContentInit() { }\n}\n\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss'],\n  animations: [\n    trigger('detailExpand', [\n      state('collapsed', style({ height: '0px', minHeight: '0' })),\n      state('expanded', style({ height: '*' })),\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\n    ]),\n  ]\n})\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\n  expandedElement: any;\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * Borderless table\n   */\n  @Input()\n  set borderless(borderless: boolean) {\n    this._borderless = coerceBooleanProperty(borderless);\n  }\n  get borderless() {\n    return this._borderless;\n  }\n  private _borderless = false;\n\n\n  /**\n   * Sorting table\n   */\n  @Input()\n  set sort(sort: boolean) {\n    this._sort = coerceBooleanProperty(sort);\n  }\n  get sort() {\n    return this._sort;\n  }\n  private _sort = false;\n\n  /**\n * Sorting table\n */\n  @Input()\n  set expansion(expansion: boolean) {\n    this._expansion = coerceBooleanProperty(expansion);\n  }\n  get expansion() {\n    return this._expansion;\n  }\n  private _expansion = false;\n\n  dataSource: MatTableDataSource<any>;\n\n  @ViewChild(MatTable) table: MatTable<any>;\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\n  @ViewChild(MatSort) matSort: MatSort;\n\n  rowConfig = {} as SdsRowConfig;\n  headerRowConfig = {} as SdsHeaderRowConfig;\n  footerRowConfig = {} as SdsFooterRowConfig;\n\n  constructor() { }\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.data.currentValue) {\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\n      if (this.sort) {\n        this.dataSource.sort = this.matSort;\n      }\n    }\n  }\n\n  ngOnInit() {\n    this.dataSource = new MatTableDataSource(this.data);\n  }\n\n  ngAfterContentInit() {\n\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\n\n    if (this.sdsTableHeaderRowComponent) {\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\n    }\n\n    if (this.sdsTableFooterRowComponent) {\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\n    }\n\n    if (this.expansion) {\n      const expandedIndicator = \"expandedIndicator\";\n      if (this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)) {\n        this.rowConfig.displayedColumns.push('expandedIndicator');\n      }\n    }\n  }\n\n  ngAfterViewInit() {\n    if (this.sort) {\n      this.dataSource.sort = this.matSort;\n    }\n  }\n\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": ""
        },
        {
            "name": "SdsTableRowComponent",
            "id": "component-SdsTableRowComponent-c09279e1022ed0f49458faea2b2be843",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-row",
            "styleUrls": [],
            "styles": [],
            "template": "<ng-content></ng-content>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "displayedColumns",
                    "line": 42,
                    "type": "Array<string>"
                },
                {
                    "name": "expandOnClick",
                    "defaultValue": "false",
                    "line": 43
                }
            ],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  Input,\n  OnInit,\n  ContentChild,\n  AfterContentInit,\n  ContentChildren,\n  QueryList,\n  ViewChild,\n  TemplateRef,\n  Directive,\n  SimpleChanges,\n  OnChanges\n} from '@angular/core';\nimport { MatSort } from '@angular/material/sort';\nimport { AfterViewInit } from '@angular/core';\nimport { MatTableDataSource, MatTable } from '@angular/material/table';\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\nimport { animate, state, style, transition, trigger } from '@angular/animations';\n\n\nexport interface SdsRowConfig {\n  displayedColumns?: string[];\n  expandOnClick?: boolean;\n}\n\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\nexport interface SdsFooterRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\n@Component({\n  selector: 'sds-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() expandOnClick = false;\n}\n\n@Component({\n  selector: 'sds-header-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableHeaderRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Component({\n  selector: 'sds-footer-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableFooterRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Directive({ selector: 'sds-table-headercell' })\nexport class SdsTableHeaderCellDirective { }\n\n@Directive({ selector: 'sds-table-cell' })\nexport class SdsTableCellDirective { }\n\n@Directive({ selector: 'sds-table-footercell' })\nexport class SdsTableFooterCellDirective { }\n\n@Component({\n  selector: 'sds-table-column',\n  template: `\n    <ng-template #columnHeaderCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n  `\n})\nexport class SdsTableColumnDefComponent implements AfterContentInit {\n\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\n\n  @ContentChild('sdsHeaderCell', { read: TemplateRef }) headerCellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsCell', { read: TemplateRef }) cellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsFooterCell', { read: TemplateRef }) footerCellTemplate!: TemplateRef<any>;\n\n  @Input() sdsColumnName;\n\n  @Input() sticky = false;\n\n  @Input() stickyEnd = false;\n\n  @Input() sdsExpandedTemplate = false;\n\n  ngAfterContentInit() { }\n}\n\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss'],\n  animations: [\n    trigger('detailExpand', [\n      state('collapsed', style({ height: '0px', minHeight: '0' })),\n      state('expanded', style({ height: '*' })),\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\n    ]),\n  ]\n})\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\n  expandedElement: any;\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * Borderless table\n   */\n  @Input()\n  set borderless(borderless: boolean) {\n    this._borderless = coerceBooleanProperty(borderless);\n  }\n  get borderless() {\n    return this._borderless;\n  }\n  private _borderless = false;\n\n\n  /**\n   * Sorting table\n   */\n  @Input()\n  set sort(sort: boolean) {\n    this._sort = coerceBooleanProperty(sort);\n  }\n  get sort() {\n    return this._sort;\n  }\n  private _sort = false;\n\n  /**\n * Sorting table\n */\n  @Input()\n  set expansion(expansion: boolean) {\n    this._expansion = coerceBooleanProperty(expansion);\n  }\n  get expansion() {\n    return this._expansion;\n  }\n  private _expansion = false;\n\n  dataSource: MatTableDataSource<any>;\n\n  @ViewChild(MatTable) table: MatTable<any>;\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\n  @ViewChild(MatSort) matSort: MatSort;\n\n  rowConfig = {} as SdsRowConfig;\n  headerRowConfig = {} as SdsHeaderRowConfig;\n  footerRowConfig = {} as SdsFooterRowConfig;\n\n  constructor() { }\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.data.currentValue) {\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\n      if (this.sort) {\n        this.dataSource.sort = this.matSort;\n      }\n    }\n  }\n\n  ngOnInit() {\n    this.dataSource = new MatTableDataSource(this.data);\n  }\n\n  ngAfterContentInit() {\n\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\n\n    if (this.sdsTableHeaderRowComponent) {\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\n    }\n\n    if (this.sdsTableFooterRowComponent) {\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\n    }\n\n    if (this.expansion) {\n      const expandedIndicator = \"expandedIndicator\";\n      if (this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)) {\n        this.rowConfig.displayedColumns.push('expandedIndicator');\n      }\n    }\n  }\n\n  ngAfterViewInit() {\n    if (this.sort) {\n      this.dataSource.sort = this.matSort;\n    }\n  }\n\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": ""
        }
    ],
    "modules": [
        {
            "name": "SdsAccordionModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsAccordionComponent"
                        },
                        {
                            "name": "SdsAccordionContentDirective"
                        },
                        {
                            "name": "SdsAccordionItemComponent"
                        },
                        {
                            "name": "SdsAccordionTitleDirective"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsAccordionComponent"
                        },
                        {
                            "name": "SdsAccordionContentDirective"
                        },
                        {
                            "name": "SdsAccordionItemComponent"
                        },
                        {
                            "name": "SdsAccordionTitleDirective"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsTableModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsTableCellDirective"
                        },
                        {
                            "name": "SdsTableColumnDefComponent"
                        },
                        {
                            "name": "SdsTableComponent"
                        },
                        {
                            "name": "SdsTableFooterCellDirective"
                        },
                        {
                            "name": "SdsTableFooterRowComponent"
                        },
                        {
                            "name": "SdsTableHeaderCellDirective"
                        },
                        {
                            "name": "SdsTableHeaderRowComponent"
                        },
                        {
                            "name": "SdsTableRowComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsTableCellDirective"
                        },
                        {
                            "name": "SdsTableColumnDefComponent"
                        },
                        {
                            "name": "SdsTableComponent"
                        },
                        {
                            "name": "SdsTableFooterCellDirective"
                        },
                        {
                            "name": "SdsTableFooterRowComponent"
                        },
                        {
                            "name": "SdsTableHeaderCellDirective"
                        },
                        {
                            "name": "SdsTableHeaderRowComponent"
                        },
                        {
                            "name": "SdsTableRowComponent"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        }
    ],
    "miscellaneous": {
        "variables": [
            {
                "name": "context",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/sam-material-extensions/src/test.ts",
                "type": "",
                "defaultValue": "require.context('./', true, /\\.spec\\.ts$/)"
            },
            {
                "name": "require",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/sam-material-extensions/src/test.ts",
                "type": "any"
            }
        ],
        "functions": [],
        "typealiases": [],
        "enumerations": [],
        "groupedVariables": {
            "libs/packages/sam-material-extensions/src/test.ts": [
                {
                    "name": "context",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/sam-material-extensions/src/test.ts",
                    "type": "",
                    "defaultValue": "require.context('./', true, /\\.spec\\.ts$/)"
                },
                {
                    "name": "require",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/sam-material-extensions/src/test.ts",
                    "type": "any"
                }
            ]
        },
        "groupedFunctions": {},
        "groupedEnumerations": {},
        "groupedTypeAliases": {}
    }
};

export default MATERIAL;
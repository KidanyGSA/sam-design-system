const MATERIAL = {
    "pipes": [],
    "interfaces": [
        {
            "name": "SdsFooterRowConfig",
            "id": "interface-SdsFooterRowConfig-aa2506110326dd64e3b8820d39e75236",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "type": "interface",
            "sourceCode": "import {\r\n  Component,\r\n  Input,\r\n  OnInit,\r\n  ContentChild,\r\n  AfterContentInit,\r\n  ContentChildren,\r\n  QueryList,\r\n  ViewChild,\r\n  TemplateRef,\r\n  Directive,\r\n  SimpleChanges,\r\n  OnChanges,\r\n  ChangeDetectorRef\r\n} from '@angular/core';\r\nimport { AfterViewInit } from '@angular/core';\r\nimport {MatTableDataSource, MatTable} from '@angular/material/table';\r\nimport {MatSort} from '@angular/material/sort';\r\nimport {MatPaginator, PageEvent} from '@angular/material/paginator';\r\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\r\nimport {animate, state, style, transition, trigger} from '@angular/animations';\r\nimport { BehaviorSubject, Observable } from 'rxjs';\r\n\r\n\r\nexport interface SdsRowConfig {\r\n  displayedColumns?: string[];\r\n  expandOnClick?: boolean;\r\n}\r\n\r\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\r\n  sticky?: boolean;\r\n}\r\n\r\nexport interface SdsFooterRowConfig extends SdsRowConfig {\r\n  sticky?: boolean;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() expandOnClick = false;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-header-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableHeaderRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() sticky: boolean;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-footer-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableFooterRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() sticky: boolean;\r\n}\r\n\r\n@Directive({selector: 'sds-table-headercell'})\r\nexport class SdsTableHeaderCellDirective {}\r\n\r\n@Directive({selector: 'sds-table-cell'})\r\nexport class SdsTableCellDirective {}\r\n\r\n@Directive({selector: 'sds-table-footercell'})\r\nexport class SdsTableFooterCellDirective {}\r\n\r\n@Component({\r\n  selector: 'sds-table-column',\r\n  template: `\r\n    <ng-template #columnHeaderCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n\r\n    <ng-template #columnCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n\r\n    <ng-template #columnFooterCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n  `\r\n})\r\nexport class SdsTableColumnDefComponent implements AfterContentInit {\r\n\r\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\r\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\r\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\r\n\r\n  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;\r\n  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;\r\n  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;\r\n\r\n  @Input() sdsColumnName;\r\n\r\n  @Input() sticky = false;\r\n\r\n  @Input() stickyEnd = false;\r\n\r\n  @Input() sdsExpandedTemplate = false;\r\n\r\n  ngAfterContentInit() {}\r\n}\r\n\r\n\r\n@Component({\r\n  selector: 'sds-table',\r\n  templateUrl: './table.component.html',\r\n  styleUrls: ['./table.component.scss'],\r\n  animations: [\r\n    trigger('detailExpand', [\r\n      state('collapsed', style({height: '0px', minHeight: '0'})),\r\n      state('expanded', style({height: '*'})),\r\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\r\n    ]),\r\n  ]\r\n})\r\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\r\n\r\n  /**\r\n   * Data for table\r\n   */\r\n  @Input() data;\r\n\r\n  /**\r\n   * Borderless table\r\n   */\r\n  @Input()\r\n  set borderless(borderless: boolean) {\r\n    this._borderless = coerceBooleanProperty(borderless);\r\n  }\r\n  get borderless() {\r\n    return this._borderless;\r\n  }\r\n  private _borderless = false;\r\n\r\n\r\n  /**\r\n   * Sorting table\r\n   */\r\n\r\n  @Input() sort = 'false';\r\n\r\n  /**\r\n   * Sorting function override\r\n   */\r\n\r\n  @Input() sortFn: any;\r\n\r\n\r\n  /**\r\n   * Pagination table\r\n   */\r\n  @Input()\r\n  set pagination(pagination: boolean) {\r\n    this._pagination = coerceBooleanProperty(pagination);\r\n  }\r\n  get pagination() {\r\n    return this._pagination;\r\n  }\r\n  private _pagination = false;\r\n\r\n\r\n  /**\r\n   * Expansion table\r\n   */\r\n  @Input()\r\n  set expansion(expansion: boolean) {\r\n    this._expansion = coerceBooleanProperty(expansion);\r\n  }\r\n  get expansion() {\r\n    return this._expansion;\r\n  }\r\n  private _expansion = false;\r\n\r\n  dataSource: MatTableDataSource<any>;\r\n  expandedElement: any;\r\n\r\n  @ViewChild(MatTable) table: MatTable<any>;\r\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\r\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\r\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\r\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\r\n  @ViewChild(MatSort) matSort: MatSort;\r\n  @ViewChild(MatPaginator) matPaginator: MatPaginator;\r\n\r\n  rowConfig = {} as SdsRowConfig;\r\n  headerRowConfig = {} as SdsHeaderRowConfig;\r\n  footerRowConfig = {} as SdsFooterRowConfig;\r\n  pageEvent: PageEvent;\r\n\r\n  /* sds pagination */\r\n  top = { id: 'top' };\r\n  bottom = { id: 'bottom' };\r\n  page: any;\r\n  public pageChange = new BehaviorSubject<object>(this.page);\r\n  showPagination = false;\r\n  totalItems: number;\r\n\r\n  constructor(private changeDetectorRef: ChangeDetectorRef) {}\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    if (changes.data.currentValue) {\r\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\r\n      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\r\n        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\r\n        this.dataSource.sort = this.matSort;\r\n      }\r\n      if(this.pagination) {\r\n        this.dataSource.paginator = this.matPaginator;\r\n        this.updateSdsPagination();\r\n      }\r\n    }\r\n  }\r\n\r\n  ngOnInit() {\r\n    this.dataSource = new MatTableDataSource(this.data);\r\n  }\r\n\r\n  ngAfterContentInit() {\r\n\r\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\r\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\r\n\r\n    if(this.sdsTableHeaderRowComponent) {\r\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\r\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\r\n    }\r\n\r\n    if(this.sdsTableFooterRowComponent) {\r\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\r\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\r\n    }\r\n\r\n    if(this.expansion) {\r\n      const expandedIndicator = \"expandedIndicator\";\r\n      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){\r\n        this.rowConfig.displayedColumns.push('expandedIndicator');\r\n      }\r\n    }\r\n  }\r\n\r\n  ngAfterViewInit() {\r\n    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\r\n      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\r\n      this.dataSource.sort = this.matSort;\r\n    }\r\n    if(this.pagination) {\r\n      this.dataSource.paginator = this.matPaginator;\r\n      this.dataSource.paginator.initialized.subscribe(\r\n        value => {\r\n          setTimeout(() => {\r\n            this.page = {\r\n              pageNumber: this.dataSource.paginator.pageIndex + 1,\r\n              pageSize: this.dataSource.paginator.pageSize,\r\n              totalPages: this.dataSource.paginator.getNumberOfPages()\r\n            }\r\n            this.totalItems = this.dataSource.data.length;\r\n            this.showPagination = true;\r\n            this.changeDetectorRef.detectChanges();\r\n          });\r\n        }\r\n      );\r\n\r\n      this.pageChange.subscribe(\r\n        value => {\r\n          this.updateSdsPagination();\r\n        }\r\n      );\r\n      this.changeDetectorRef.detectChanges();\r\n    }\r\n\r\n  }\r\n\r\n  typeOf(value) {\r\n    return typeof value;\r\n  }\r\n\r\n  isArray(obj : any ) {\r\n    return Array.isArray(obj)\r\n  }\r\n\r\n  updateSdsPagination() {\r\n    if(this.page) {\r\n      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;\r\n      this.dataSource.paginator._changePageSize(this.page.pageSize);\r\n      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);\r\n      this.totalItems = this.dataSource.data.length;\r\n      this.changeDetectorRef.detectChanges();\r\n    }\r\n  }\r\n\r\n  defaultSort(data, sortHeaderId) {\r\n    if (typeof data[sortHeaderId] === 'string') {\r\n      return data[sortHeaderId].toLocaleLowerCase();\r\n    }\r\n\r\n    return data[sortHeaderId];\r\n  };\r\n\r\n}\r\n",
            "properties": [
                {
                    "name": "sticky",
                    "type": "boolean",
                    "optional": true,
                    "description": "",
                    "line": 35
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": [],
            "extends": "SdsRowConfig"
        },
        {
            "name": "SdsHeaderRowConfig",
            "id": "interface-SdsHeaderRowConfig-aa2506110326dd64e3b8820d39e75236",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "type": "interface",
            "sourceCode": "import {\r\n  Component,\r\n  Input,\r\n  OnInit,\r\n  ContentChild,\r\n  AfterContentInit,\r\n  ContentChildren,\r\n  QueryList,\r\n  ViewChild,\r\n  TemplateRef,\r\n  Directive,\r\n  SimpleChanges,\r\n  OnChanges,\r\n  ChangeDetectorRef\r\n} from '@angular/core';\r\nimport { AfterViewInit } from '@angular/core';\r\nimport {MatTableDataSource, MatTable} from '@angular/material/table';\r\nimport {MatSort} from '@angular/material/sort';\r\nimport {MatPaginator, PageEvent} from '@angular/material/paginator';\r\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\r\nimport {animate, state, style, transition, trigger} from '@angular/animations';\r\nimport { BehaviorSubject, Observable } from 'rxjs';\r\n\r\n\r\nexport interface SdsRowConfig {\r\n  displayedColumns?: string[];\r\n  expandOnClick?: boolean;\r\n}\r\n\r\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\r\n  sticky?: boolean;\r\n}\r\n\r\nexport interface SdsFooterRowConfig extends SdsRowConfig {\r\n  sticky?: boolean;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() expandOnClick = false;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-header-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableHeaderRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() sticky: boolean;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-footer-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableFooterRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() sticky: boolean;\r\n}\r\n\r\n@Directive({selector: 'sds-table-headercell'})\r\nexport class SdsTableHeaderCellDirective {}\r\n\r\n@Directive({selector: 'sds-table-cell'})\r\nexport class SdsTableCellDirective {}\r\n\r\n@Directive({selector: 'sds-table-footercell'})\r\nexport class SdsTableFooterCellDirective {}\r\n\r\n@Component({\r\n  selector: 'sds-table-column',\r\n  template: `\r\n    <ng-template #columnHeaderCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n\r\n    <ng-template #columnCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n\r\n    <ng-template #columnFooterCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n  `\r\n})\r\nexport class SdsTableColumnDefComponent implements AfterContentInit {\r\n\r\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\r\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\r\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\r\n\r\n  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;\r\n  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;\r\n  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;\r\n\r\n  @Input() sdsColumnName;\r\n\r\n  @Input() sticky = false;\r\n\r\n  @Input() stickyEnd = false;\r\n\r\n  @Input() sdsExpandedTemplate = false;\r\n\r\n  ngAfterContentInit() {}\r\n}\r\n\r\n\r\n@Component({\r\n  selector: 'sds-table',\r\n  templateUrl: './table.component.html',\r\n  styleUrls: ['./table.component.scss'],\r\n  animations: [\r\n    trigger('detailExpand', [\r\n      state('collapsed', style({height: '0px', minHeight: '0'})),\r\n      state('expanded', style({height: '*'})),\r\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\r\n    ]),\r\n  ]\r\n})\r\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\r\n\r\n  /**\r\n   * Data for table\r\n   */\r\n  @Input() data;\r\n\r\n  /**\r\n   * Borderless table\r\n   */\r\n  @Input()\r\n  set borderless(borderless: boolean) {\r\n    this._borderless = coerceBooleanProperty(borderless);\r\n  }\r\n  get borderless() {\r\n    return this._borderless;\r\n  }\r\n  private _borderless = false;\r\n\r\n\r\n  /**\r\n   * Sorting table\r\n   */\r\n\r\n  @Input() sort = 'false';\r\n\r\n  /**\r\n   * Sorting function override\r\n   */\r\n\r\n  @Input() sortFn: any;\r\n\r\n\r\n  /**\r\n   * Pagination table\r\n   */\r\n  @Input()\r\n  set pagination(pagination: boolean) {\r\n    this._pagination = coerceBooleanProperty(pagination);\r\n  }\r\n  get pagination() {\r\n    return this._pagination;\r\n  }\r\n  private _pagination = false;\r\n\r\n\r\n  /**\r\n   * Expansion table\r\n   */\r\n  @Input()\r\n  set expansion(expansion: boolean) {\r\n    this._expansion = coerceBooleanProperty(expansion);\r\n  }\r\n  get expansion() {\r\n    return this._expansion;\r\n  }\r\n  private _expansion = false;\r\n\r\n  dataSource: MatTableDataSource<any>;\r\n  expandedElement: any;\r\n\r\n  @ViewChild(MatTable) table: MatTable<any>;\r\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\r\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\r\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\r\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\r\n  @ViewChild(MatSort) matSort: MatSort;\r\n  @ViewChild(MatPaginator) matPaginator: MatPaginator;\r\n\r\n  rowConfig = {} as SdsRowConfig;\r\n  headerRowConfig = {} as SdsHeaderRowConfig;\r\n  footerRowConfig = {} as SdsFooterRowConfig;\r\n  pageEvent: PageEvent;\r\n\r\n  /* sds pagination */\r\n  top = { id: 'top' };\r\n  bottom = { id: 'bottom' };\r\n  page: any;\r\n  public pageChange = new BehaviorSubject<object>(this.page);\r\n  showPagination = false;\r\n  totalItems: number;\r\n\r\n  constructor(private changeDetectorRef: ChangeDetectorRef) {}\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    if (changes.data.currentValue) {\r\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\r\n      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\r\n        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\r\n        this.dataSource.sort = this.matSort;\r\n      }\r\n      if(this.pagination) {\r\n        this.dataSource.paginator = this.matPaginator;\r\n        this.updateSdsPagination();\r\n      }\r\n    }\r\n  }\r\n\r\n  ngOnInit() {\r\n    this.dataSource = new MatTableDataSource(this.data);\r\n  }\r\n\r\n  ngAfterContentInit() {\r\n\r\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\r\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\r\n\r\n    if(this.sdsTableHeaderRowComponent) {\r\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\r\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\r\n    }\r\n\r\n    if(this.sdsTableFooterRowComponent) {\r\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\r\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\r\n    }\r\n\r\n    if(this.expansion) {\r\n      const expandedIndicator = \"expandedIndicator\";\r\n      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){\r\n        this.rowConfig.displayedColumns.push('expandedIndicator');\r\n      }\r\n    }\r\n  }\r\n\r\n  ngAfterViewInit() {\r\n    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\r\n      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\r\n      this.dataSource.sort = this.matSort;\r\n    }\r\n    if(this.pagination) {\r\n      this.dataSource.paginator = this.matPaginator;\r\n      this.dataSource.paginator.initialized.subscribe(\r\n        value => {\r\n          setTimeout(() => {\r\n            this.page = {\r\n              pageNumber: this.dataSource.paginator.pageIndex + 1,\r\n              pageSize: this.dataSource.paginator.pageSize,\r\n              totalPages: this.dataSource.paginator.getNumberOfPages()\r\n            }\r\n            this.totalItems = this.dataSource.data.length;\r\n            this.showPagination = true;\r\n            this.changeDetectorRef.detectChanges();\r\n          });\r\n        }\r\n      );\r\n\r\n      this.pageChange.subscribe(\r\n        value => {\r\n          this.updateSdsPagination();\r\n        }\r\n      );\r\n      this.changeDetectorRef.detectChanges();\r\n    }\r\n\r\n  }\r\n\r\n  typeOf(value) {\r\n    return typeof value;\r\n  }\r\n\r\n  isArray(obj : any ) {\r\n    return Array.isArray(obj)\r\n  }\r\n\r\n  updateSdsPagination() {\r\n    if(this.page) {\r\n      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;\r\n      this.dataSource.paginator._changePageSize(this.page.pageSize);\r\n      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);\r\n      this.totalItems = this.dataSource.data.length;\r\n      this.changeDetectorRef.detectChanges();\r\n    }\r\n  }\r\n\r\n  defaultSort(data, sortHeaderId) {\r\n    if (typeof data[sortHeaderId] === 'string') {\r\n      return data[sortHeaderId].toLocaleLowerCase();\r\n    }\r\n\r\n    return data[sortHeaderId];\r\n  };\r\n\r\n}\r\n",
            "properties": [
                {
                    "name": "sticky",
                    "type": "boolean",
                    "optional": true,
                    "description": "",
                    "line": 31
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": [],
            "extends": "SdsRowConfig"
        },
        {
            "name": "SdsRowConfig",
            "id": "interface-SdsRowConfig-aa2506110326dd64e3b8820d39e75236",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "type": "interface",
            "sourceCode": "import {\r\n  Component,\r\n  Input,\r\n  OnInit,\r\n  ContentChild,\r\n  AfterContentInit,\r\n  ContentChildren,\r\n  QueryList,\r\n  ViewChild,\r\n  TemplateRef,\r\n  Directive,\r\n  SimpleChanges,\r\n  OnChanges,\r\n  ChangeDetectorRef\r\n} from '@angular/core';\r\nimport { AfterViewInit } from '@angular/core';\r\nimport {MatTableDataSource, MatTable} from '@angular/material/table';\r\nimport {MatSort} from '@angular/material/sort';\r\nimport {MatPaginator, PageEvent} from '@angular/material/paginator';\r\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\r\nimport {animate, state, style, transition, trigger} from '@angular/animations';\r\nimport { BehaviorSubject, Observable } from 'rxjs';\r\n\r\n\r\nexport interface SdsRowConfig {\r\n  displayedColumns?: string[];\r\n  expandOnClick?: boolean;\r\n}\r\n\r\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\r\n  sticky?: boolean;\r\n}\r\n\r\nexport interface SdsFooterRowConfig extends SdsRowConfig {\r\n  sticky?: boolean;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() expandOnClick = false;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-header-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableHeaderRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() sticky: boolean;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-footer-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableFooterRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() sticky: boolean;\r\n}\r\n\r\n@Directive({selector: 'sds-table-headercell'})\r\nexport class SdsTableHeaderCellDirective {}\r\n\r\n@Directive({selector: 'sds-table-cell'})\r\nexport class SdsTableCellDirective {}\r\n\r\n@Directive({selector: 'sds-table-footercell'})\r\nexport class SdsTableFooterCellDirective {}\r\n\r\n@Component({\r\n  selector: 'sds-table-column',\r\n  template: `\r\n    <ng-template #columnHeaderCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n\r\n    <ng-template #columnCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n\r\n    <ng-template #columnFooterCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n  `\r\n})\r\nexport class SdsTableColumnDefComponent implements AfterContentInit {\r\n\r\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\r\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\r\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\r\n\r\n  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;\r\n  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;\r\n  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;\r\n\r\n  @Input() sdsColumnName;\r\n\r\n  @Input() sticky = false;\r\n\r\n  @Input() stickyEnd = false;\r\n\r\n  @Input() sdsExpandedTemplate = false;\r\n\r\n  ngAfterContentInit() {}\r\n}\r\n\r\n\r\n@Component({\r\n  selector: 'sds-table',\r\n  templateUrl: './table.component.html',\r\n  styleUrls: ['./table.component.scss'],\r\n  animations: [\r\n    trigger('detailExpand', [\r\n      state('collapsed', style({height: '0px', minHeight: '0'})),\r\n      state('expanded', style({height: '*'})),\r\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\r\n    ]),\r\n  ]\r\n})\r\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\r\n\r\n  /**\r\n   * Data for table\r\n   */\r\n  @Input() data;\r\n\r\n  /**\r\n   * Borderless table\r\n   */\r\n  @Input()\r\n  set borderless(borderless: boolean) {\r\n    this._borderless = coerceBooleanProperty(borderless);\r\n  }\r\n  get borderless() {\r\n    return this._borderless;\r\n  }\r\n  private _borderless = false;\r\n\r\n\r\n  /**\r\n   * Sorting table\r\n   */\r\n\r\n  @Input() sort = 'false';\r\n\r\n  /**\r\n   * Sorting function override\r\n   */\r\n\r\n  @Input() sortFn: any;\r\n\r\n\r\n  /**\r\n   * Pagination table\r\n   */\r\n  @Input()\r\n  set pagination(pagination: boolean) {\r\n    this._pagination = coerceBooleanProperty(pagination);\r\n  }\r\n  get pagination() {\r\n    return this._pagination;\r\n  }\r\n  private _pagination = false;\r\n\r\n\r\n  /**\r\n   * Expansion table\r\n   */\r\n  @Input()\r\n  set expansion(expansion: boolean) {\r\n    this._expansion = coerceBooleanProperty(expansion);\r\n  }\r\n  get expansion() {\r\n    return this._expansion;\r\n  }\r\n  private _expansion = false;\r\n\r\n  dataSource: MatTableDataSource<any>;\r\n  expandedElement: any;\r\n\r\n  @ViewChild(MatTable) table: MatTable<any>;\r\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\r\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\r\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\r\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\r\n  @ViewChild(MatSort) matSort: MatSort;\r\n  @ViewChild(MatPaginator) matPaginator: MatPaginator;\r\n\r\n  rowConfig = {} as SdsRowConfig;\r\n  headerRowConfig = {} as SdsHeaderRowConfig;\r\n  footerRowConfig = {} as SdsFooterRowConfig;\r\n  pageEvent: PageEvent;\r\n\r\n  /* sds pagination */\r\n  top = { id: 'top' };\r\n  bottom = { id: 'bottom' };\r\n  page: any;\r\n  public pageChange = new BehaviorSubject<object>(this.page);\r\n  showPagination = false;\r\n  totalItems: number;\r\n\r\n  constructor(private changeDetectorRef: ChangeDetectorRef) {}\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    if (changes.data.currentValue) {\r\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\r\n      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\r\n        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\r\n        this.dataSource.sort = this.matSort;\r\n      }\r\n      if(this.pagination) {\r\n        this.dataSource.paginator = this.matPaginator;\r\n        this.updateSdsPagination();\r\n      }\r\n    }\r\n  }\r\n\r\n  ngOnInit() {\r\n    this.dataSource = new MatTableDataSource(this.data);\r\n  }\r\n\r\n  ngAfterContentInit() {\r\n\r\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\r\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\r\n\r\n    if(this.sdsTableHeaderRowComponent) {\r\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\r\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\r\n    }\r\n\r\n    if(this.sdsTableFooterRowComponent) {\r\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\r\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\r\n    }\r\n\r\n    if(this.expansion) {\r\n      const expandedIndicator = \"expandedIndicator\";\r\n      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){\r\n        this.rowConfig.displayedColumns.push('expandedIndicator');\r\n      }\r\n    }\r\n  }\r\n\r\n  ngAfterViewInit() {\r\n    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\r\n      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\r\n      this.dataSource.sort = this.matSort;\r\n    }\r\n    if(this.pagination) {\r\n      this.dataSource.paginator = this.matPaginator;\r\n      this.dataSource.paginator.initialized.subscribe(\r\n        value => {\r\n          setTimeout(() => {\r\n            this.page = {\r\n              pageNumber: this.dataSource.paginator.pageIndex + 1,\r\n              pageSize: this.dataSource.paginator.pageSize,\r\n              totalPages: this.dataSource.paginator.getNumberOfPages()\r\n            }\r\n            this.totalItems = this.dataSource.data.length;\r\n            this.showPagination = true;\r\n            this.changeDetectorRef.detectChanges();\r\n          });\r\n        }\r\n      );\r\n\r\n      this.pageChange.subscribe(\r\n        value => {\r\n          this.updateSdsPagination();\r\n        }\r\n      );\r\n      this.changeDetectorRef.detectChanges();\r\n    }\r\n\r\n  }\r\n\r\n  typeOf(value) {\r\n    return typeof value;\r\n  }\r\n\r\n  isArray(obj : any ) {\r\n    return Array.isArray(obj)\r\n  }\r\n\r\n  updateSdsPagination() {\r\n    if(this.page) {\r\n      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;\r\n      this.dataSource.paginator._changePageSize(this.page.pageSize);\r\n      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);\r\n      this.totalItems = this.dataSource.data.length;\r\n      this.changeDetectorRef.detectChanges();\r\n    }\r\n  }\r\n\r\n  defaultSort(data, sortHeaderId) {\r\n    if (typeof data[sortHeaderId] === 'string') {\r\n      return data[sortHeaderId].toLocaleLowerCase();\r\n    }\r\n\r\n    return data[sortHeaderId];\r\n  };\r\n\r\n}\r\n",
            "properties": [
                {
                    "name": "displayedColumns",
                    "type": "string[]",
                    "optional": true,
                    "description": "",
                    "line": 26
                },
                {
                    "name": "expandOnClick",
                    "type": "boolean",
                    "optional": true,
                    "description": "",
                    "line": 27
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
            "id": "class-SdsTableColumnSettings-dc36eee05d2b06e7b723c4381a1ad8bf",
            "file": "libs/packages/sam-material-extensions/src/lib/table/models/table-column-settings.model.ts",
            "type": "class",
            "sourceCode": "export class SdsTableColumnSettings {\r\n  /**\r\n   *  primary key to access value from data\r\n   */\r\n  primaryKey: string;\r\n  /**\r\n   * Displayed column header -- defaults to primaryKey value in titlecase\r\n   */\r\n  header?: string;\r\n  /**\r\n   * Column sticks to left side of table on horizontal scroll\r\n   */\r\n  sticky? = false;\r\n}\r\n",
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
            "id": "class-SdsTableSettings-74c7f88dbf1f45b3c373fb466bb5a890",
            "file": "libs/packages/sam-material-extensions/src/lib/table/models/table-settings.model.ts",
            "type": "class",
            "sourceCode": "export class SdsTableSettings {\r\n  /**\r\n   * table without border\r\n   */\r\n  borderless?: boolean;\r\n  /*\r\n   * sortable table\r\n   */\r\n  sort?: boolean;\r\n  /*\r\n   * Include sticky header row\r\n   */\r\n  stickyHeader?: boolean;\r\n}\r\n",
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
            "id": "directive-SdsAccordionContentDirective-6eafe97c57faa0ceae693023237a1d16",
            "file": "libs/packages/sam-material-extensions/src/lib/accordion/accordion.component.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\r\n  Component,\r\n  Input,\r\n  TemplateRef,\r\n  ViewChild,\r\n  Directive,\r\n  QueryList,\r\n  ContentChildren,\r\n  Output,\r\n  EventEmitter\r\n} from '@angular/core';\r\n\r\nimport {MatAccordion} from '@angular/material/expansion';\r\n\r\n\r\n@Directive({selector: 'sds-accordion-title'})\r\nexport class SdsAccordionTitleDirective {}\r\n\r\n@Directive({selector: 'sds-accordion-content'})\r\nexport class SdsAccordionContentDirective {}\r\n\r\n@Component({\r\n  selector: 'sds-accordion-item',\r\n  template: `\r\n    <ng-template #itemTitleTemplate>\r\n      <ng-content #title select=\"sds-accordion-title\"></ng-content>\r\n    </ng-template>\r\n\r\n    <ng-template #itemContentTemplate>\r\n      <ng-content #content select=\"sds-accordion-content\"></ng-content>\r\n    </ng-template>\r\n  `\r\n})\r\nexport class SdsAccordionItemComponent {\r\n\r\n  @ViewChild('itemTitleTemplate') itemTitleTemplate: TemplateRef<any>;\r\n  @ViewChild('itemContentTemplate') itemContentTemplate: TemplateRef<any>;\r\n\r\n  @Input() expanded = false;\r\n\r\n  @Input() disabled = false;\r\n\r\n  /** Toggles the expanded state of the expansion panel. */\r\n  toggle(): void {\r\n    this.expanded = !this.expanded;\r\n  }\r\n\r\n  /** Sets the expanded state of the expansion panel to false. */\r\n  close(): void {\r\n    this.expanded = false;\r\n  }\r\n\r\n  /** Sets the expanded state of the expansion panel to true. */\r\n  open(): void {\r\n    this.expanded = true;\r\n  }\r\n\r\n  /** Toggles the disabled state of the expansion panel. */\r\n  toggleDisabled(): void {\r\n    this.disabled = !this.disabled;\r\n    if(this.disabled) {\r\n      this.expanded = false;\r\n    }\r\n  }\r\n\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-accordion-next',\r\n  templateUrl: './accordion.component.html',\r\n  styleUrls: ['./accordion.component.scss']\r\n})\r\nexport class SdsAccordionComponent {\r\n\r\n  @ViewChild(MatAccordion) accordion: MatAccordion;\r\n\r\n  @ContentChildren(SdsAccordionItemComponent) accordionItems!: QueryList<SdsAccordionItemComponent>;\r\n\r\n  @Input() multi = false;\r\n\r\n  @Output() multiChange:EventEmitter<boolean> = new EventEmitter<boolean>();\r\n\r\n  @Input() displayMode = 'flat';\r\n\r\n  /** Opens all accordion items. */\r\n  openAll(): void {\r\n    this.accordion.openAll();\r\n  }\r\n\r\n  /** Closes all accordion items. */\r\n  closeAll(): void {\r\n    this.accordion.closeAll();\r\n  }\r\n\r\n  /** Toggles the multi state of the accordion. */\r\n  toggleMulti(): void {\r\n    this.multi = !this.multi;\r\n    this.accordion.closeAll();\r\n    this.multiChange.emit(this.multi);\r\n  }\r\n\r\n}\r\n",
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
            "id": "directive-SdsAccordionTitleDirective-6eafe97c57faa0ceae693023237a1d16",
            "file": "libs/packages/sam-material-extensions/src/lib/accordion/accordion.component.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\r\n  Component,\r\n  Input,\r\n  TemplateRef,\r\n  ViewChild,\r\n  Directive,\r\n  QueryList,\r\n  ContentChildren,\r\n  Output,\r\n  EventEmitter\r\n} from '@angular/core';\r\n\r\nimport {MatAccordion} from '@angular/material/expansion';\r\n\r\n\r\n@Directive({selector: 'sds-accordion-title'})\r\nexport class SdsAccordionTitleDirective {}\r\n\r\n@Directive({selector: 'sds-accordion-content'})\r\nexport class SdsAccordionContentDirective {}\r\n\r\n@Component({\r\n  selector: 'sds-accordion-item',\r\n  template: `\r\n    <ng-template #itemTitleTemplate>\r\n      <ng-content #title select=\"sds-accordion-title\"></ng-content>\r\n    </ng-template>\r\n\r\n    <ng-template #itemContentTemplate>\r\n      <ng-content #content select=\"sds-accordion-content\"></ng-content>\r\n    </ng-template>\r\n  `\r\n})\r\nexport class SdsAccordionItemComponent {\r\n\r\n  @ViewChild('itemTitleTemplate') itemTitleTemplate: TemplateRef<any>;\r\n  @ViewChild('itemContentTemplate') itemContentTemplate: TemplateRef<any>;\r\n\r\n  @Input() expanded = false;\r\n\r\n  @Input() disabled = false;\r\n\r\n  /** Toggles the expanded state of the expansion panel. */\r\n  toggle(): void {\r\n    this.expanded = !this.expanded;\r\n  }\r\n\r\n  /** Sets the expanded state of the expansion panel to false. */\r\n  close(): void {\r\n    this.expanded = false;\r\n  }\r\n\r\n  /** Sets the expanded state of the expansion panel to true. */\r\n  open(): void {\r\n    this.expanded = true;\r\n  }\r\n\r\n  /** Toggles the disabled state of the expansion panel. */\r\n  toggleDisabled(): void {\r\n    this.disabled = !this.disabled;\r\n    if(this.disabled) {\r\n      this.expanded = false;\r\n    }\r\n  }\r\n\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-accordion-next',\r\n  templateUrl: './accordion.component.html',\r\n  styleUrls: ['./accordion.component.scss']\r\n})\r\nexport class SdsAccordionComponent {\r\n\r\n  @ViewChild(MatAccordion) accordion: MatAccordion;\r\n\r\n  @ContentChildren(SdsAccordionItemComponent) accordionItems!: QueryList<SdsAccordionItemComponent>;\r\n\r\n  @Input() multi = false;\r\n\r\n  @Output() multiChange:EventEmitter<boolean> = new EventEmitter<boolean>();\r\n\r\n  @Input() displayMode = 'flat';\r\n\r\n  /** Opens all accordion items. */\r\n  openAll(): void {\r\n    this.accordion.openAll();\r\n  }\r\n\r\n  /** Closes all accordion items. */\r\n  closeAll(): void {\r\n    this.accordion.closeAll();\r\n  }\r\n\r\n  /** Toggles the multi state of the accordion. */\r\n  toggleMulti(): void {\r\n    this.multi = !this.multi;\r\n    this.accordion.closeAll();\r\n    this.multiChange.emit(this.multi);\r\n  }\r\n\r\n}\r\n",
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
            "id": "directive-SdsTableCellDirective-aa2506110326dd64e3b8820d39e75236",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\r\n  Component,\r\n  Input,\r\n  OnInit,\r\n  ContentChild,\r\n  AfterContentInit,\r\n  ContentChildren,\r\n  QueryList,\r\n  ViewChild,\r\n  TemplateRef,\r\n  Directive,\r\n  SimpleChanges,\r\n  OnChanges,\r\n  ChangeDetectorRef\r\n} from '@angular/core';\r\nimport { AfterViewInit } from '@angular/core';\r\nimport {MatTableDataSource, MatTable} from '@angular/material/table';\r\nimport {MatSort} from '@angular/material/sort';\r\nimport {MatPaginator, PageEvent} from '@angular/material/paginator';\r\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\r\nimport {animate, state, style, transition, trigger} from '@angular/animations';\r\nimport { BehaviorSubject, Observable } from 'rxjs';\r\n\r\n\r\nexport interface SdsRowConfig {\r\n  displayedColumns?: string[];\r\n  expandOnClick?: boolean;\r\n}\r\n\r\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\r\n  sticky?: boolean;\r\n}\r\n\r\nexport interface SdsFooterRowConfig extends SdsRowConfig {\r\n  sticky?: boolean;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() expandOnClick = false;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-header-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableHeaderRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() sticky: boolean;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-footer-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableFooterRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() sticky: boolean;\r\n}\r\n\r\n@Directive({selector: 'sds-table-headercell'})\r\nexport class SdsTableHeaderCellDirective {}\r\n\r\n@Directive({selector: 'sds-table-cell'})\r\nexport class SdsTableCellDirective {}\r\n\r\n@Directive({selector: 'sds-table-footercell'})\r\nexport class SdsTableFooterCellDirective {}\r\n\r\n@Component({\r\n  selector: 'sds-table-column',\r\n  template: `\r\n    <ng-template #columnHeaderCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n\r\n    <ng-template #columnCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n\r\n    <ng-template #columnFooterCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n  `\r\n})\r\nexport class SdsTableColumnDefComponent implements AfterContentInit {\r\n\r\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\r\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\r\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\r\n\r\n  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;\r\n  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;\r\n  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;\r\n\r\n  @Input() sdsColumnName;\r\n\r\n  @Input() sticky = false;\r\n\r\n  @Input() stickyEnd = false;\r\n\r\n  @Input() sdsExpandedTemplate = false;\r\n\r\n  ngAfterContentInit() {}\r\n}\r\n\r\n\r\n@Component({\r\n  selector: 'sds-table',\r\n  templateUrl: './table.component.html',\r\n  styleUrls: ['./table.component.scss'],\r\n  animations: [\r\n    trigger('detailExpand', [\r\n      state('collapsed', style({height: '0px', minHeight: '0'})),\r\n      state('expanded', style({height: '*'})),\r\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\r\n    ]),\r\n  ]\r\n})\r\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\r\n\r\n  /**\r\n   * Data for table\r\n   */\r\n  @Input() data;\r\n\r\n  /**\r\n   * Borderless table\r\n   */\r\n  @Input()\r\n  set borderless(borderless: boolean) {\r\n    this._borderless = coerceBooleanProperty(borderless);\r\n  }\r\n  get borderless() {\r\n    return this._borderless;\r\n  }\r\n  private _borderless = false;\r\n\r\n\r\n  /**\r\n   * Sorting table\r\n   */\r\n\r\n  @Input() sort = 'false';\r\n\r\n  /**\r\n   * Sorting function override\r\n   */\r\n\r\n  @Input() sortFn: any;\r\n\r\n\r\n  /**\r\n   * Pagination table\r\n   */\r\n  @Input()\r\n  set pagination(pagination: boolean) {\r\n    this._pagination = coerceBooleanProperty(pagination);\r\n  }\r\n  get pagination() {\r\n    return this._pagination;\r\n  }\r\n  private _pagination = false;\r\n\r\n\r\n  /**\r\n   * Expansion table\r\n   */\r\n  @Input()\r\n  set expansion(expansion: boolean) {\r\n    this._expansion = coerceBooleanProperty(expansion);\r\n  }\r\n  get expansion() {\r\n    return this._expansion;\r\n  }\r\n  private _expansion = false;\r\n\r\n  dataSource: MatTableDataSource<any>;\r\n  expandedElement: any;\r\n\r\n  @ViewChild(MatTable) table: MatTable<any>;\r\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\r\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\r\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\r\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\r\n  @ViewChild(MatSort) matSort: MatSort;\r\n  @ViewChild(MatPaginator) matPaginator: MatPaginator;\r\n\r\n  rowConfig = {} as SdsRowConfig;\r\n  headerRowConfig = {} as SdsHeaderRowConfig;\r\n  footerRowConfig = {} as SdsFooterRowConfig;\r\n  pageEvent: PageEvent;\r\n\r\n  /* sds pagination */\r\n  top = { id: 'top' };\r\n  bottom = { id: 'bottom' };\r\n  page: any;\r\n  public pageChange = new BehaviorSubject<object>(this.page);\r\n  showPagination = false;\r\n  totalItems: number;\r\n\r\n  constructor(private changeDetectorRef: ChangeDetectorRef) {}\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    if (changes.data.currentValue) {\r\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\r\n      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\r\n        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\r\n        this.dataSource.sort = this.matSort;\r\n      }\r\n      if(this.pagination) {\r\n        this.dataSource.paginator = this.matPaginator;\r\n        this.updateSdsPagination();\r\n      }\r\n    }\r\n  }\r\n\r\n  ngOnInit() {\r\n    this.dataSource = new MatTableDataSource(this.data);\r\n  }\r\n\r\n  ngAfterContentInit() {\r\n\r\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\r\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\r\n\r\n    if(this.sdsTableHeaderRowComponent) {\r\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\r\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\r\n    }\r\n\r\n    if(this.sdsTableFooterRowComponent) {\r\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\r\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\r\n    }\r\n\r\n    if(this.expansion) {\r\n      const expandedIndicator = \"expandedIndicator\";\r\n      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){\r\n        this.rowConfig.displayedColumns.push('expandedIndicator');\r\n      }\r\n    }\r\n  }\r\n\r\n  ngAfterViewInit() {\r\n    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\r\n      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\r\n      this.dataSource.sort = this.matSort;\r\n    }\r\n    if(this.pagination) {\r\n      this.dataSource.paginator = this.matPaginator;\r\n      this.dataSource.paginator.initialized.subscribe(\r\n        value => {\r\n          setTimeout(() => {\r\n            this.page = {\r\n              pageNumber: this.dataSource.paginator.pageIndex + 1,\r\n              pageSize: this.dataSource.paginator.pageSize,\r\n              totalPages: this.dataSource.paginator.getNumberOfPages()\r\n            }\r\n            this.totalItems = this.dataSource.data.length;\r\n            this.showPagination = true;\r\n            this.changeDetectorRef.detectChanges();\r\n          });\r\n        }\r\n      );\r\n\r\n      this.pageChange.subscribe(\r\n        value => {\r\n          this.updateSdsPagination();\r\n        }\r\n      );\r\n      this.changeDetectorRef.detectChanges();\r\n    }\r\n\r\n  }\r\n\r\n  typeOf(value) {\r\n    return typeof value;\r\n  }\r\n\r\n  isArray(obj : any ) {\r\n    return Array.isArray(obj)\r\n  }\r\n\r\n  updateSdsPagination() {\r\n    if(this.page) {\r\n      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;\r\n      this.dataSource.paginator._changePageSize(this.page.pageSize);\r\n      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);\r\n      this.totalItems = this.dataSource.data.length;\r\n      this.changeDetectorRef.detectChanges();\r\n    }\r\n  }\r\n\r\n  defaultSort(data, sortHeaderId) {\r\n    if (typeof data[sortHeaderId] === 'string') {\r\n      return data[sortHeaderId].toLocaleLowerCase();\r\n    }\r\n\r\n    return data[sortHeaderId];\r\n  };\r\n\r\n}\r\n",
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
            "id": "directive-SdsTableFooterCellDirective-aa2506110326dd64e3b8820d39e75236",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\r\n  Component,\r\n  Input,\r\n  OnInit,\r\n  ContentChild,\r\n  AfterContentInit,\r\n  ContentChildren,\r\n  QueryList,\r\n  ViewChild,\r\n  TemplateRef,\r\n  Directive,\r\n  SimpleChanges,\r\n  OnChanges,\r\n  ChangeDetectorRef\r\n} from '@angular/core';\r\nimport { AfterViewInit } from '@angular/core';\r\nimport {MatTableDataSource, MatTable} from '@angular/material/table';\r\nimport {MatSort} from '@angular/material/sort';\r\nimport {MatPaginator, PageEvent} from '@angular/material/paginator';\r\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\r\nimport {animate, state, style, transition, trigger} from '@angular/animations';\r\nimport { BehaviorSubject, Observable } from 'rxjs';\r\n\r\n\r\nexport interface SdsRowConfig {\r\n  displayedColumns?: string[];\r\n  expandOnClick?: boolean;\r\n}\r\n\r\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\r\n  sticky?: boolean;\r\n}\r\n\r\nexport interface SdsFooterRowConfig extends SdsRowConfig {\r\n  sticky?: boolean;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() expandOnClick = false;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-header-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableHeaderRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() sticky: boolean;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-footer-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableFooterRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() sticky: boolean;\r\n}\r\n\r\n@Directive({selector: 'sds-table-headercell'})\r\nexport class SdsTableHeaderCellDirective {}\r\n\r\n@Directive({selector: 'sds-table-cell'})\r\nexport class SdsTableCellDirective {}\r\n\r\n@Directive({selector: 'sds-table-footercell'})\r\nexport class SdsTableFooterCellDirective {}\r\n\r\n@Component({\r\n  selector: 'sds-table-column',\r\n  template: `\r\n    <ng-template #columnHeaderCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n\r\n    <ng-template #columnCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n\r\n    <ng-template #columnFooterCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n  `\r\n})\r\nexport class SdsTableColumnDefComponent implements AfterContentInit {\r\n\r\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\r\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\r\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\r\n\r\n  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;\r\n  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;\r\n  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;\r\n\r\n  @Input() sdsColumnName;\r\n\r\n  @Input() sticky = false;\r\n\r\n  @Input() stickyEnd = false;\r\n\r\n  @Input() sdsExpandedTemplate = false;\r\n\r\n  ngAfterContentInit() {}\r\n}\r\n\r\n\r\n@Component({\r\n  selector: 'sds-table',\r\n  templateUrl: './table.component.html',\r\n  styleUrls: ['./table.component.scss'],\r\n  animations: [\r\n    trigger('detailExpand', [\r\n      state('collapsed', style({height: '0px', minHeight: '0'})),\r\n      state('expanded', style({height: '*'})),\r\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\r\n    ]),\r\n  ]\r\n})\r\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\r\n\r\n  /**\r\n   * Data for table\r\n   */\r\n  @Input() data;\r\n\r\n  /**\r\n   * Borderless table\r\n   */\r\n  @Input()\r\n  set borderless(borderless: boolean) {\r\n    this._borderless = coerceBooleanProperty(borderless);\r\n  }\r\n  get borderless() {\r\n    return this._borderless;\r\n  }\r\n  private _borderless = false;\r\n\r\n\r\n  /**\r\n   * Sorting table\r\n   */\r\n\r\n  @Input() sort = 'false';\r\n\r\n  /**\r\n   * Sorting function override\r\n   */\r\n\r\n  @Input() sortFn: any;\r\n\r\n\r\n  /**\r\n   * Pagination table\r\n   */\r\n  @Input()\r\n  set pagination(pagination: boolean) {\r\n    this._pagination = coerceBooleanProperty(pagination);\r\n  }\r\n  get pagination() {\r\n    return this._pagination;\r\n  }\r\n  private _pagination = false;\r\n\r\n\r\n  /**\r\n   * Expansion table\r\n   */\r\n  @Input()\r\n  set expansion(expansion: boolean) {\r\n    this._expansion = coerceBooleanProperty(expansion);\r\n  }\r\n  get expansion() {\r\n    return this._expansion;\r\n  }\r\n  private _expansion = false;\r\n\r\n  dataSource: MatTableDataSource<any>;\r\n  expandedElement: any;\r\n\r\n  @ViewChild(MatTable) table: MatTable<any>;\r\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\r\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\r\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\r\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\r\n  @ViewChild(MatSort) matSort: MatSort;\r\n  @ViewChild(MatPaginator) matPaginator: MatPaginator;\r\n\r\n  rowConfig = {} as SdsRowConfig;\r\n  headerRowConfig = {} as SdsHeaderRowConfig;\r\n  footerRowConfig = {} as SdsFooterRowConfig;\r\n  pageEvent: PageEvent;\r\n\r\n  /* sds pagination */\r\n  top = { id: 'top' };\r\n  bottom = { id: 'bottom' };\r\n  page: any;\r\n  public pageChange = new BehaviorSubject<object>(this.page);\r\n  showPagination = false;\r\n  totalItems: number;\r\n\r\n  constructor(private changeDetectorRef: ChangeDetectorRef) {}\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    if (changes.data.currentValue) {\r\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\r\n      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\r\n        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\r\n        this.dataSource.sort = this.matSort;\r\n      }\r\n      if(this.pagination) {\r\n        this.dataSource.paginator = this.matPaginator;\r\n        this.updateSdsPagination();\r\n      }\r\n    }\r\n  }\r\n\r\n  ngOnInit() {\r\n    this.dataSource = new MatTableDataSource(this.data);\r\n  }\r\n\r\n  ngAfterContentInit() {\r\n\r\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\r\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\r\n\r\n    if(this.sdsTableHeaderRowComponent) {\r\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\r\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\r\n    }\r\n\r\n    if(this.sdsTableFooterRowComponent) {\r\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\r\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\r\n    }\r\n\r\n    if(this.expansion) {\r\n      const expandedIndicator = \"expandedIndicator\";\r\n      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){\r\n        this.rowConfig.displayedColumns.push('expandedIndicator');\r\n      }\r\n    }\r\n  }\r\n\r\n  ngAfterViewInit() {\r\n    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\r\n      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\r\n      this.dataSource.sort = this.matSort;\r\n    }\r\n    if(this.pagination) {\r\n      this.dataSource.paginator = this.matPaginator;\r\n      this.dataSource.paginator.initialized.subscribe(\r\n        value => {\r\n          setTimeout(() => {\r\n            this.page = {\r\n              pageNumber: this.dataSource.paginator.pageIndex + 1,\r\n              pageSize: this.dataSource.paginator.pageSize,\r\n              totalPages: this.dataSource.paginator.getNumberOfPages()\r\n            }\r\n            this.totalItems = this.dataSource.data.length;\r\n            this.showPagination = true;\r\n            this.changeDetectorRef.detectChanges();\r\n          });\r\n        }\r\n      );\r\n\r\n      this.pageChange.subscribe(\r\n        value => {\r\n          this.updateSdsPagination();\r\n        }\r\n      );\r\n      this.changeDetectorRef.detectChanges();\r\n    }\r\n\r\n  }\r\n\r\n  typeOf(value) {\r\n    return typeof value;\r\n  }\r\n\r\n  isArray(obj : any ) {\r\n    return Array.isArray(obj)\r\n  }\r\n\r\n  updateSdsPagination() {\r\n    if(this.page) {\r\n      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;\r\n      this.dataSource.paginator._changePageSize(this.page.pageSize);\r\n      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);\r\n      this.totalItems = this.dataSource.data.length;\r\n      this.changeDetectorRef.detectChanges();\r\n    }\r\n  }\r\n\r\n  defaultSort(data, sortHeaderId) {\r\n    if (typeof data[sortHeaderId] === 'string') {\r\n      return data[sortHeaderId].toLocaleLowerCase();\r\n    }\r\n\r\n    return data[sortHeaderId];\r\n  };\r\n\r\n}\r\n",
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
            "id": "directive-SdsTableHeaderCellDirective-aa2506110326dd64e3b8820d39e75236",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\r\n  Component,\r\n  Input,\r\n  OnInit,\r\n  ContentChild,\r\n  AfterContentInit,\r\n  ContentChildren,\r\n  QueryList,\r\n  ViewChild,\r\n  TemplateRef,\r\n  Directive,\r\n  SimpleChanges,\r\n  OnChanges,\r\n  ChangeDetectorRef\r\n} from '@angular/core';\r\nimport { AfterViewInit } from '@angular/core';\r\nimport {MatTableDataSource, MatTable} from '@angular/material/table';\r\nimport {MatSort} from '@angular/material/sort';\r\nimport {MatPaginator, PageEvent} from '@angular/material/paginator';\r\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\r\nimport {animate, state, style, transition, trigger} from '@angular/animations';\r\nimport { BehaviorSubject, Observable } from 'rxjs';\r\n\r\n\r\nexport interface SdsRowConfig {\r\n  displayedColumns?: string[];\r\n  expandOnClick?: boolean;\r\n}\r\n\r\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\r\n  sticky?: boolean;\r\n}\r\n\r\nexport interface SdsFooterRowConfig extends SdsRowConfig {\r\n  sticky?: boolean;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() expandOnClick = false;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-header-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableHeaderRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() sticky: boolean;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-footer-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableFooterRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() sticky: boolean;\r\n}\r\n\r\n@Directive({selector: 'sds-table-headercell'})\r\nexport class SdsTableHeaderCellDirective {}\r\n\r\n@Directive({selector: 'sds-table-cell'})\r\nexport class SdsTableCellDirective {}\r\n\r\n@Directive({selector: 'sds-table-footercell'})\r\nexport class SdsTableFooterCellDirective {}\r\n\r\n@Component({\r\n  selector: 'sds-table-column',\r\n  template: `\r\n    <ng-template #columnHeaderCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n\r\n    <ng-template #columnCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n\r\n    <ng-template #columnFooterCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n  `\r\n})\r\nexport class SdsTableColumnDefComponent implements AfterContentInit {\r\n\r\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\r\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\r\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\r\n\r\n  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;\r\n  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;\r\n  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;\r\n\r\n  @Input() sdsColumnName;\r\n\r\n  @Input() sticky = false;\r\n\r\n  @Input() stickyEnd = false;\r\n\r\n  @Input() sdsExpandedTemplate = false;\r\n\r\n  ngAfterContentInit() {}\r\n}\r\n\r\n\r\n@Component({\r\n  selector: 'sds-table',\r\n  templateUrl: './table.component.html',\r\n  styleUrls: ['./table.component.scss'],\r\n  animations: [\r\n    trigger('detailExpand', [\r\n      state('collapsed', style({height: '0px', minHeight: '0'})),\r\n      state('expanded', style({height: '*'})),\r\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\r\n    ]),\r\n  ]\r\n})\r\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\r\n\r\n  /**\r\n   * Data for table\r\n   */\r\n  @Input() data;\r\n\r\n  /**\r\n   * Borderless table\r\n   */\r\n  @Input()\r\n  set borderless(borderless: boolean) {\r\n    this._borderless = coerceBooleanProperty(borderless);\r\n  }\r\n  get borderless() {\r\n    return this._borderless;\r\n  }\r\n  private _borderless = false;\r\n\r\n\r\n  /**\r\n   * Sorting table\r\n   */\r\n\r\n  @Input() sort = 'false';\r\n\r\n  /**\r\n   * Sorting function override\r\n   */\r\n\r\n  @Input() sortFn: any;\r\n\r\n\r\n  /**\r\n   * Pagination table\r\n   */\r\n  @Input()\r\n  set pagination(pagination: boolean) {\r\n    this._pagination = coerceBooleanProperty(pagination);\r\n  }\r\n  get pagination() {\r\n    return this._pagination;\r\n  }\r\n  private _pagination = false;\r\n\r\n\r\n  /**\r\n   * Expansion table\r\n   */\r\n  @Input()\r\n  set expansion(expansion: boolean) {\r\n    this._expansion = coerceBooleanProperty(expansion);\r\n  }\r\n  get expansion() {\r\n    return this._expansion;\r\n  }\r\n  private _expansion = false;\r\n\r\n  dataSource: MatTableDataSource<any>;\r\n  expandedElement: any;\r\n\r\n  @ViewChild(MatTable) table: MatTable<any>;\r\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\r\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\r\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\r\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\r\n  @ViewChild(MatSort) matSort: MatSort;\r\n  @ViewChild(MatPaginator) matPaginator: MatPaginator;\r\n\r\n  rowConfig = {} as SdsRowConfig;\r\n  headerRowConfig = {} as SdsHeaderRowConfig;\r\n  footerRowConfig = {} as SdsFooterRowConfig;\r\n  pageEvent: PageEvent;\r\n\r\n  /* sds pagination */\r\n  top = { id: 'top' };\r\n  bottom = { id: 'bottom' };\r\n  page: any;\r\n  public pageChange = new BehaviorSubject<object>(this.page);\r\n  showPagination = false;\r\n  totalItems: number;\r\n\r\n  constructor(private changeDetectorRef: ChangeDetectorRef) {}\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    if (changes.data.currentValue) {\r\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\r\n      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\r\n        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\r\n        this.dataSource.sort = this.matSort;\r\n      }\r\n      if(this.pagination) {\r\n        this.dataSource.paginator = this.matPaginator;\r\n        this.updateSdsPagination();\r\n      }\r\n    }\r\n  }\r\n\r\n  ngOnInit() {\r\n    this.dataSource = new MatTableDataSource(this.data);\r\n  }\r\n\r\n  ngAfterContentInit() {\r\n\r\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\r\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\r\n\r\n    if(this.sdsTableHeaderRowComponent) {\r\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\r\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\r\n    }\r\n\r\n    if(this.sdsTableFooterRowComponent) {\r\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\r\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\r\n    }\r\n\r\n    if(this.expansion) {\r\n      const expandedIndicator = \"expandedIndicator\";\r\n      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){\r\n        this.rowConfig.displayedColumns.push('expandedIndicator');\r\n      }\r\n    }\r\n  }\r\n\r\n  ngAfterViewInit() {\r\n    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\r\n      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\r\n      this.dataSource.sort = this.matSort;\r\n    }\r\n    if(this.pagination) {\r\n      this.dataSource.paginator = this.matPaginator;\r\n      this.dataSource.paginator.initialized.subscribe(\r\n        value => {\r\n          setTimeout(() => {\r\n            this.page = {\r\n              pageNumber: this.dataSource.paginator.pageIndex + 1,\r\n              pageSize: this.dataSource.paginator.pageSize,\r\n              totalPages: this.dataSource.paginator.getNumberOfPages()\r\n            }\r\n            this.totalItems = this.dataSource.data.length;\r\n            this.showPagination = true;\r\n            this.changeDetectorRef.detectChanges();\r\n          });\r\n        }\r\n      );\r\n\r\n      this.pageChange.subscribe(\r\n        value => {\r\n          this.updateSdsPagination();\r\n        }\r\n      );\r\n      this.changeDetectorRef.detectChanges();\r\n    }\r\n\r\n  }\r\n\r\n  typeOf(value) {\r\n    return typeof value;\r\n  }\r\n\r\n  isArray(obj : any ) {\r\n    return Array.isArray(obj)\r\n  }\r\n\r\n  updateSdsPagination() {\r\n    if(this.page) {\r\n      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;\r\n      this.dataSource.paginator._changePageSize(this.page.pageSize);\r\n      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);\r\n      this.totalItems = this.dataSource.data.length;\r\n      this.changeDetectorRef.detectChanges();\r\n    }\r\n  }\r\n\r\n  defaultSort(data, sortHeaderId) {\r\n    if (typeof data[sortHeaderId] === 'string') {\r\n      return data[sortHeaderId].toLocaleLowerCase();\r\n    }\r\n\r\n    return data[sortHeaderId];\r\n  };\r\n\r\n}\r\n",
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
            "id": "component-SdsAccordionComponent-6eafe97c57faa0ceae693023237a1d16",
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
            "sourceCode": "import {\r\n  Component,\r\n  Input,\r\n  TemplateRef,\r\n  ViewChild,\r\n  Directive,\r\n  QueryList,\r\n  ContentChildren,\r\n  Output,\r\n  EventEmitter\r\n} from '@angular/core';\r\n\r\nimport {MatAccordion} from '@angular/material/expansion';\r\n\r\n\r\n@Directive({selector: 'sds-accordion-title'})\r\nexport class SdsAccordionTitleDirective {}\r\n\r\n@Directive({selector: 'sds-accordion-content'})\r\nexport class SdsAccordionContentDirective {}\r\n\r\n@Component({\r\n  selector: 'sds-accordion-item',\r\n  template: `\r\n    <ng-template #itemTitleTemplate>\r\n      <ng-content #title select=\"sds-accordion-title\"></ng-content>\r\n    </ng-template>\r\n\r\n    <ng-template #itemContentTemplate>\r\n      <ng-content #content select=\"sds-accordion-content\"></ng-content>\r\n    </ng-template>\r\n  `\r\n})\r\nexport class SdsAccordionItemComponent {\r\n\r\n  @ViewChild('itemTitleTemplate') itemTitleTemplate: TemplateRef<any>;\r\n  @ViewChild('itemContentTemplate') itemContentTemplate: TemplateRef<any>;\r\n\r\n  @Input() expanded = false;\r\n\r\n  @Input() disabled = false;\r\n\r\n  /** Toggles the expanded state of the expansion panel. */\r\n  toggle(): void {\r\n    this.expanded = !this.expanded;\r\n  }\r\n\r\n  /** Sets the expanded state of the expansion panel to false. */\r\n  close(): void {\r\n    this.expanded = false;\r\n  }\r\n\r\n  /** Sets the expanded state of the expansion panel to true. */\r\n  open(): void {\r\n    this.expanded = true;\r\n  }\r\n\r\n  /** Toggles the disabled state of the expansion panel. */\r\n  toggleDisabled(): void {\r\n    this.disabled = !this.disabled;\r\n    if(this.disabled) {\r\n      this.expanded = false;\r\n    }\r\n  }\r\n\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-accordion-next',\r\n  templateUrl: './accordion.component.html',\r\n  styleUrls: ['./accordion.component.scss']\r\n})\r\nexport class SdsAccordionComponent {\r\n\r\n  @ViewChild(MatAccordion) accordion: MatAccordion;\r\n\r\n  @ContentChildren(SdsAccordionItemComponent) accordionItems!: QueryList<SdsAccordionItemComponent>;\r\n\r\n  @Input() multi = false;\r\n\r\n  @Output() multiChange:EventEmitter<boolean> = new EventEmitter<boolean>();\r\n\r\n  @Input() displayMode = 'flat';\r\n\r\n  /** Opens all accordion items. */\r\n  openAll(): void {\r\n    this.accordion.openAll();\r\n  }\r\n\r\n  /** Closes all accordion items. */\r\n  closeAll(): void {\r\n    this.accordion.closeAll();\r\n  }\r\n\r\n  /** Toggles the multi state of the accordion. */\r\n  toggleMulti(): void {\r\n    this.multi = !this.multi;\r\n    this.accordion.closeAll();\r\n    this.multiChange.emit(this.multi);\r\n  }\r\n\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "@import \"~@gsa-sam/sam-styles/src/stylesheets/theme/_styles\";\r\n@import \"~uswds/src/stylesheets/packages/_required\";\r\n\r\n\r\n\r\n\r\n::ng-deep {\r\n  sds-accordion-next {\r\n    sds-accordion-title {\r\n      @include u-font('sans', 'xs');\r\n      @include u-text('semibold');\r\n    }\r\n    .mat-accordion {\r\n      .mat-expansion-panel {\r\n        @include u-border('base-light');\r\n        @include u-border-top(0);\r\n        @include u-border-right('1px');\r\n        @include u-border-bottom('1px');\r\n        @include u-border-left('1px');\r\n\r\n        &:first-of-type {\r\n          @include u-border-top('1px');\r\n          border-top-left-radius: 0;\r\n          border-top-right-radius: 0;\r\n        }\r\n\r\n        &:last-of-type {\r\n          border-bottom-left-radius: 0;\r\n          border-bottom-right-radius: 0;\r\n        }\r\n\r\n        .mat-expanded {\r\n          sds-accordion-title {\r\n            @include u-text('secondary-dark');\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.sds-expansion-indicator {\r\n  position: relative;\r\n\r\n  &::after {\r\n    content: '';\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 8px;\r\n    width: 25px;\r\n    height: 25px;\r\n    background: linear-gradient(#0a3466, #0a3466);\r\n    background-position: center;\r\n    background-size: 54% 1px;\r\n    background-repeat: no-repeat;\r\n  }\r\n  &::before {\r\n    content: '';\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 8px;\r\n    width: 25px;\r\n    height: 25px;\r\n    background: linear-gradient(#0a3466, #0a3466), #e2e2e2;\r\n    background-position: center;\r\n    background-size: 1px 54%;\r\n    background-repeat: no-repeat;\r\n    border-radius: 50%;\r\n  }\r\n\r\n  &.sds-expansion-indicator--expanded::after {\r\n    content: '';\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 8px;\r\n    width: 25px;\r\n    height: 25px;\r\n    background: linear-gradient(#0a3466, #0a3466);\r\n    background-position: center;\r\n    background-size: 54% 1px;\r\n    background-repeat: no-repeat;\r\n  }\r\n\r\n  &.sds-expansion-indicator--expanded::before {\r\n    content: none;\r\n  }\r\n}\r\n\r\n.mat-expansion-panel-header[aria-disabled=true] .sds-expansion-indicator {\r\n  opacity: 0.26;\r\n}\r\n\r\n// Material overrides\r\n\r\n.mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true]), .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true]), .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true]) {\r\n  @include u-bg('accent-cool-light')\r\n}\r\n\r\n.mat-expansion-panel {\r\n  box-shadow: none;\r\n}\r\n\r\nmat-panel-title {\r\n  line-height:25px;\r\n}\r\n",
                    "styleUrl": "./accordion.component.scss"
                }
            ],
            "stylesData": "",
            "templateData": "<mat-accordion [displayMode]=\"displayMode\" [multi]=\"multi\">\r\n  <ng-container *ngFor=\"let accordionItem of accordionItems\">\r\n      <mat-expansion-panel [(expanded)]=\"accordionItem.expanded\" [disabled]=\"accordionItem.disabled\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            <ng-container *ngTemplateOutlet=\"accordionItem.itemTitleTemplate\"></ng-container>\r\n          </mat-panel-title>\r\n          <span class=\"sds-expansion-indicator\" [ngClass]=\"{'sds-expansion-indicator--expanded' : accordionItem.expanded}\"></span>\r\n        </mat-expansion-panel-header>\r\n        <ng-container *ngTemplateOutlet=\"accordionItem.itemContentTemplate\"></ng-container>\r\n      </mat-expansion-panel>\r\n  </ng-container>\r\n</mat-accordion>\r\n"
        },
        {
            "name": "SdsAccordionItemComponent",
            "id": "component-SdsAccordionItemComponent-6eafe97c57faa0ceae693023237a1d16",
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
            "sourceCode": "import {\r\n  Component,\r\n  Input,\r\n  TemplateRef,\r\n  ViewChild,\r\n  Directive,\r\n  QueryList,\r\n  ContentChildren,\r\n  Output,\r\n  EventEmitter\r\n} from '@angular/core';\r\n\r\nimport {MatAccordion} from '@angular/material/expansion';\r\n\r\n\r\n@Directive({selector: 'sds-accordion-title'})\r\nexport class SdsAccordionTitleDirective {}\r\n\r\n@Directive({selector: 'sds-accordion-content'})\r\nexport class SdsAccordionContentDirective {}\r\n\r\n@Component({\r\n  selector: 'sds-accordion-item',\r\n  template: `\r\n    <ng-template #itemTitleTemplate>\r\n      <ng-content #title select=\"sds-accordion-title\"></ng-content>\r\n    </ng-template>\r\n\r\n    <ng-template #itemContentTemplate>\r\n      <ng-content #content select=\"sds-accordion-content\"></ng-content>\r\n    </ng-template>\r\n  `\r\n})\r\nexport class SdsAccordionItemComponent {\r\n\r\n  @ViewChild('itemTitleTemplate') itemTitleTemplate: TemplateRef<any>;\r\n  @ViewChild('itemContentTemplate') itemContentTemplate: TemplateRef<any>;\r\n\r\n  @Input() expanded = false;\r\n\r\n  @Input() disabled = false;\r\n\r\n  /** Toggles the expanded state of the expansion panel. */\r\n  toggle(): void {\r\n    this.expanded = !this.expanded;\r\n  }\r\n\r\n  /** Sets the expanded state of the expansion panel to false. */\r\n  close(): void {\r\n    this.expanded = false;\r\n  }\r\n\r\n  /** Sets the expanded state of the expansion panel to true. */\r\n  open(): void {\r\n    this.expanded = true;\r\n  }\r\n\r\n  /** Toggles the disabled state of the expansion panel. */\r\n  toggleDisabled(): void {\r\n    this.disabled = !this.disabled;\r\n    if(this.disabled) {\r\n      this.expanded = false;\r\n    }\r\n  }\r\n\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-accordion-next',\r\n  templateUrl: './accordion.component.html',\r\n  styleUrls: ['./accordion.component.scss']\r\n})\r\nexport class SdsAccordionComponent {\r\n\r\n  @ViewChild(MatAccordion) accordion: MatAccordion;\r\n\r\n  @ContentChildren(SdsAccordionItemComponent) accordionItems!: QueryList<SdsAccordionItemComponent>;\r\n\r\n  @Input() multi = false;\r\n\r\n  @Output() multiChange:EventEmitter<boolean> = new EventEmitter<boolean>();\r\n\r\n  @Input() displayMode = 'flat';\r\n\r\n  /** Opens all accordion items. */\r\n  openAll(): void {\r\n    this.accordion.openAll();\r\n  }\r\n\r\n  /** Closes all accordion items. */\r\n  closeAll(): void {\r\n    this.accordion.closeAll();\r\n  }\r\n\r\n  /** Toggles the multi state of the accordion. */\r\n  toggleMulti(): void {\r\n    this.multi = !this.multi;\r\n    this.accordion.closeAll();\r\n    this.multiChange.emit(this.multi);\r\n  }\r\n\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": ""
        },
        {
            "name": "SdsButtonGroupComponent",
            "id": "component-SdsButtonGroupComponent-8c65b5ef55d3971439940bd425aec0d1",
            "file": "libs/packages/sam-material-extensions/src/lib/button-group/button-group.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "host": {},
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-button-group",
            "styleUrls": [
                "./button-group.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./button-group.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "mode",
                    "defaultValue": "'radio'",
                    "description": "<p>&#39;checkbox&#39; || &#39;radio&#39;</p>\n",
                    "line": 44,
                    "type": "string"
                }
            ],
            "outputsClass": [
                {
                    "name": "change",
                    "defaultValue": "new EventEmitter()",
                    "line": 45,
                    "type": "EventEmitter<MatButtonToggleChange>"
                }
            ],
            "propertiesClass": [
                {
                    "name": "buttonOptions",
                    "type": "QueryList<SdsButtonGroupOptionComponent>",
                    "optional": false,
                    "description": "",
                    "line": 36,
                    "decorators": [
                        {
                            "name": "ContentChildren",
                            "stringifiedArguments": "SdsButtonGroupOptionComponent"
                        }
                    ]
                },
                {
                    "name": "classesToApply",
                    "defaultValue": "{}",
                    "type": "Object",
                    "optional": false,
                    "description": "",
                    "line": 39
                }
            ],
            "methodsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\r\n  Component,\r\n  ContentChildren,\r\n  EventEmitter,\r\n  Input,\r\n  Output,\r\n  QueryList,\r\n  TemplateRef,\r\n  ViewChild\r\n} from '@angular/core';\r\nimport { MatButtonToggleChange } from '@angular/material';\r\n\r\n@Component({\r\n  selector: 'sds-button-group-option',\r\n  styleUrls: ['./button-group.component.scss'],\r\n  template: `\r\n    <ng-template #buttonGroupTemplate>\r\n      <ng-content #content></ng-content>\r\n    </ng-template>\r\n  `\r\n})\r\nexport class SdsButtonGroupOptionComponent {\r\n  @ViewChild('buttonGroupTemplate') buttonGroupTemplate: TemplateRef<any>;\r\n  @Input() value: any;\r\n  @Input() checked: boolean;\r\n  @Input('aria-label') ariaLabel: any;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-button-group',\r\n  templateUrl: './button-group.component.html',\r\n  styleUrls: ['./button-group.component.scss'],\r\n  host: {'class':'sds-button-group--segmented'}\r\n})\r\nexport class SdsButtonGroupComponent {\r\n  @ContentChildren(SdsButtonGroupOptionComponent) buttonOptions!: QueryList<\r\n    SdsButtonGroupOptionComponent\r\n  >;\r\n  classesToApply: Object = {};\r\n\r\n  /**\r\n   * 'checkbox' || 'radio'\r\n   */\r\n  @Input() mode: string = 'radio';\r\n  @Output() change: EventEmitter<MatButtonToggleChange> = new EventEmitter();\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "mat-button-toggle-group {\r\n  overflow: visible;\r\n  width: fit-content;\r\n  border: none;\r\n\r\n  mat-button-toggle.sds-button-group__item {\r\n    background-color: transparent;\r\n    ::ng-deep{\r\n      .mat-button-toggle-button{\r\n        background-color: transparent;\r\n        .mat-button-toggle-label-content{\r\n          line-height: inherit;\r\n          padding: 0;\r\n          background-color: transparent;\r\n\r\n          .usa-button{\r\n            margin-left: -2px;\r\n            margin-right: -1px;\r\n            &.usa-button--outline{\r\n              background-color: transparent;\r\n            }\r\n          }\r\n        }\r\n      }\r\n      &:focus{\r\n        outline: 0.25rem solid #2491ff;\r\n        outline-offset: 0.25rem;\r\n      }\r\n    }\r\n    &:first-child{\r\n      .usa-button{\r\n        border-top-right-radius: 0;\r\n        border-bottom-right-radius: 0;\r\n\r\n      }\r\n    }\r\n    &:last-child{\r\n      .usa-button{\r\n        border-top-left-radius: 0;\r\n        border-bottom-left-radius: 0;\r\n\r\n      }\r\n    }\r\n    &:only-child{\r\n      .usa-button{\r\n        border-radius: 0.25rem;\r\n      }\r\n    }\r\n    &:not(:first-child):not(:last-child){\r\n      .usa-button{\r\n        border-radius: 0;\r\n      }\r\n    }\r\n  }\r\n}\r\n",
                    "styleUrl": "./button-group.component.scss"
                }
            ],
            "stylesData": "",
            "templateData": "<mat-button-toggle-group\r\n  [multiple]=\"mode === 'checkbox'\"\r\n  (change)=\"change.emit($event)\"\r\n>\r\n  <ng-container *ngFor=\"let option of buttonOptions\">\r\n    <mat-button-toggle\r\n      #singleToggle\r\n      value=\"{{option.value}}\"\r\n      aria-label=\"{{option.ariaLabel}}\"\r\n      class=\"sds-button-group__item\"\r\n      [disableRipple]=\"true\"\r\n      [checked]=\"option.checked\"\r\n    >\r\n      <div\r\n        class=\"usa-button\"\r\n        [ngClass]=\"{ 'usa-button--outline': !singleToggle.checked }\"\r\n      >\r\n        <ng-container\r\n          *ngTemplateOutlet=\"option.buttonGroupTemplate\"\r\n        ></ng-container>\r\n      </div>\r\n    </mat-button-toggle>\r\n  </ng-container>\r\n</mat-button-toggle-group>\r\n"
        },
        {
            "name": "SdsButtonGroupOptionComponent",
            "id": "component-SdsButtonGroupOptionComponent-8c65b5ef55d3971439940bd425aec0d1",
            "file": "libs/packages/sam-material-extensions/src/lib/button-group/button-group.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-button-group-option",
            "styleUrls": [
                "./button-group.component.scss"
            ],
            "styles": [],
            "template": "<ng-template #buttonGroupTemplate>\n  <ng-content #content></ng-content>\n</ng-template>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "aria-label",
                    "line": 26,
                    "type": "any"
                },
                {
                    "name": "checked",
                    "line": 25,
                    "type": "boolean"
                },
                {
                    "name": "value",
                    "line": 24,
                    "type": "any"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "buttonGroupTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 23,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'buttonGroupTemplate'"
                        }
                    ]
                }
            ],
            "methodsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\r\n  Component,\r\n  ContentChildren,\r\n  EventEmitter,\r\n  Input,\r\n  Output,\r\n  QueryList,\r\n  TemplateRef,\r\n  ViewChild\r\n} from '@angular/core';\r\nimport { MatButtonToggleChange } from '@angular/material';\r\n\r\n@Component({\r\n  selector: 'sds-button-group-option',\r\n  styleUrls: ['./button-group.component.scss'],\r\n  template: `\r\n    <ng-template #buttonGroupTemplate>\r\n      <ng-content #content></ng-content>\r\n    </ng-template>\r\n  `\r\n})\r\nexport class SdsButtonGroupOptionComponent {\r\n  @ViewChild('buttonGroupTemplate') buttonGroupTemplate: TemplateRef<any>;\r\n  @Input() value: any;\r\n  @Input() checked: boolean;\r\n  @Input('aria-label') ariaLabel: any;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-button-group',\r\n  templateUrl: './button-group.component.html',\r\n  styleUrls: ['./button-group.component.scss'],\r\n  host: {'class':'sds-button-group--segmented'}\r\n})\r\nexport class SdsButtonGroupComponent {\r\n  @ContentChildren(SdsButtonGroupOptionComponent) buttonOptions!: QueryList<\r\n    SdsButtonGroupOptionComponent\r\n  >;\r\n  classesToApply: Object = {};\r\n\r\n  /**\r\n   * 'checkbox' || 'radio'\r\n   */\r\n  @Input() mode: string = 'radio';\r\n  @Output() change: EventEmitter<MatButtonToggleChange> = new EventEmitter();\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "mat-button-toggle-group {\r\n  overflow: visible;\r\n  width: fit-content;\r\n  border: none;\r\n\r\n  mat-button-toggle.sds-button-group__item {\r\n    background-color: transparent;\r\n    ::ng-deep{\r\n      .mat-button-toggle-button{\r\n        background-color: transparent;\r\n        .mat-button-toggle-label-content{\r\n          line-height: inherit;\r\n          padding: 0;\r\n          background-color: transparent;\r\n\r\n          .usa-button{\r\n            margin-left: -2px;\r\n            margin-right: -1px;\r\n            &.usa-button--outline{\r\n              background-color: transparent;\r\n            }\r\n          }\r\n        }\r\n      }\r\n      &:focus{\r\n        outline: 0.25rem solid #2491ff;\r\n        outline-offset: 0.25rem;\r\n      }\r\n    }\r\n    &:first-child{\r\n      .usa-button{\r\n        border-top-right-radius: 0;\r\n        border-bottom-right-radius: 0;\r\n\r\n      }\r\n    }\r\n    &:last-child{\r\n      .usa-button{\r\n        border-top-left-radius: 0;\r\n        border-bottom-left-radius: 0;\r\n\r\n      }\r\n    }\r\n    &:only-child{\r\n      .usa-button{\r\n        border-radius: 0.25rem;\r\n      }\r\n    }\r\n    &:not(:first-child):not(:last-child){\r\n      .usa-button{\r\n        border-radius: 0;\r\n      }\r\n    }\r\n  }\r\n}\r\n",
                    "styleUrl": "./button-group.component.scss"
                }
            ],
            "stylesData": ""
        },
        {
            "name": "SdsTableColumnDefComponent",
            "id": "component-SdsTableColumnDefComponent-aa2506110326dd64e3b8820d39e75236",
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
                    "line": 106
                },
                {
                    "name": "sdsExpandedTemplate",
                    "defaultValue": "false",
                    "line": 112
                },
                {
                    "name": "sticky",
                    "defaultValue": "false",
                    "line": 108
                },
                {
                    "name": "stickyEnd",
                    "defaultValue": "false",
                    "line": 110
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "cellTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 103,
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
                    "line": 99,
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
                    "line": 100,
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
                    "line": 98,
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
                    "line": 104,
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
                    "line": 102,
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
                    "line": 114
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\r\n  Component,\r\n  Input,\r\n  OnInit,\r\n  ContentChild,\r\n  AfterContentInit,\r\n  ContentChildren,\r\n  QueryList,\r\n  ViewChild,\r\n  TemplateRef,\r\n  Directive,\r\n  SimpleChanges,\r\n  OnChanges,\r\n  ChangeDetectorRef\r\n} from '@angular/core';\r\nimport { AfterViewInit } from '@angular/core';\r\nimport {MatTableDataSource, MatTable} from '@angular/material/table';\r\nimport {MatSort} from '@angular/material/sort';\r\nimport {MatPaginator, PageEvent} from '@angular/material/paginator';\r\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\r\nimport {animate, state, style, transition, trigger} from '@angular/animations';\r\nimport { BehaviorSubject, Observable } from 'rxjs';\r\n\r\n\r\nexport interface SdsRowConfig {\r\n  displayedColumns?: string[];\r\n  expandOnClick?: boolean;\r\n}\r\n\r\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\r\n  sticky?: boolean;\r\n}\r\n\r\nexport interface SdsFooterRowConfig extends SdsRowConfig {\r\n  sticky?: boolean;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() expandOnClick = false;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-header-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableHeaderRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() sticky: boolean;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-footer-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableFooterRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() sticky: boolean;\r\n}\r\n\r\n@Directive({selector: 'sds-table-headercell'})\r\nexport class SdsTableHeaderCellDirective {}\r\n\r\n@Directive({selector: 'sds-table-cell'})\r\nexport class SdsTableCellDirective {}\r\n\r\n@Directive({selector: 'sds-table-footercell'})\r\nexport class SdsTableFooterCellDirective {}\r\n\r\n@Component({\r\n  selector: 'sds-table-column',\r\n  template: `\r\n    <ng-template #columnHeaderCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n\r\n    <ng-template #columnCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n\r\n    <ng-template #columnFooterCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n  `\r\n})\r\nexport class SdsTableColumnDefComponent implements AfterContentInit {\r\n\r\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\r\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\r\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\r\n\r\n  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;\r\n  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;\r\n  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;\r\n\r\n  @Input() sdsColumnName;\r\n\r\n  @Input() sticky = false;\r\n\r\n  @Input() stickyEnd = false;\r\n\r\n  @Input() sdsExpandedTemplate = false;\r\n\r\n  ngAfterContentInit() {}\r\n}\r\n\r\n\r\n@Component({\r\n  selector: 'sds-table',\r\n  templateUrl: './table.component.html',\r\n  styleUrls: ['./table.component.scss'],\r\n  animations: [\r\n    trigger('detailExpand', [\r\n      state('collapsed', style({height: '0px', minHeight: '0'})),\r\n      state('expanded', style({height: '*'})),\r\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\r\n    ]),\r\n  ]\r\n})\r\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\r\n\r\n  /**\r\n   * Data for table\r\n   */\r\n  @Input() data;\r\n\r\n  /**\r\n   * Borderless table\r\n   */\r\n  @Input()\r\n  set borderless(borderless: boolean) {\r\n    this._borderless = coerceBooleanProperty(borderless);\r\n  }\r\n  get borderless() {\r\n    return this._borderless;\r\n  }\r\n  private _borderless = false;\r\n\r\n\r\n  /**\r\n   * Sorting table\r\n   */\r\n\r\n  @Input() sort = 'false';\r\n\r\n  /**\r\n   * Sorting function override\r\n   */\r\n\r\n  @Input() sortFn: any;\r\n\r\n\r\n  /**\r\n   * Pagination table\r\n   */\r\n  @Input()\r\n  set pagination(pagination: boolean) {\r\n    this._pagination = coerceBooleanProperty(pagination);\r\n  }\r\n  get pagination() {\r\n    return this._pagination;\r\n  }\r\n  private _pagination = false;\r\n\r\n\r\n  /**\r\n   * Expansion table\r\n   */\r\n  @Input()\r\n  set expansion(expansion: boolean) {\r\n    this._expansion = coerceBooleanProperty(expansion);\r\n  }\r\n  get expansion() {\r\n    return this._expansion;\r\n  }\r\n  private _expansion = false;\r\n\r\n  dataSource: MatTableDataSource<any>;\r\n  expandedElement: any;\r\n\r\n  @ViewChild(MatTable) table: MatTable<any>;\r\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\r\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\r\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\r\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\r\n  @ViewChild(MatSort) matSort: MatSort;\r\n  @ViewChild(MatPaginator) matPaginator: MatPaginator;\r\n\r\n  rowConfig = {} as SdsRowConfig;\r\n  headerRowConfig = {} as SdsHeaderRowConfig;\r\n  footerRowConfig = {} as SdsFooterRowConfig;\r\n  pageEvent: PageEvent;\r\n\r\n  /* sds pagination */\r\n  top = { id: 'top' };\r\n  bottom = { id: 'bottom' };\r\n  page: any;\r\n  public pageChange = new BehaviorSubject<object>(this.page);\r\n  showPagination = false;\r\n  totalItems: number;\r\n\r\n  constructor(private changeDetectorRef: ChangeDetectorRef) {}\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    if (changes.data.currentValue) {\r\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\r\n      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\r\n        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\r\n        this.dataSource.sort = this.matSort;\r\n      }\r\n      if(this.pagination) {\r\n        this.dataSource.paginator = this.matPaginator;\r\n        this.updateSdsPagination();\r\n      }\r\n    }\r\n  }\r\n\r\n  ngOnInit() {\r\n    this.dataSource = new MatTableDataSource(this.data);\r\n  }\r\n\r\n  ngAfterContentInit() {\r\n\r\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\r\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\r\n\r\n    if(this.sdsTableHeaderRowComponent) {\r\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\r\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\r\n    }\r\n\r\n    if(this.sdsTableFooterRowComponent) {\r\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\r\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\r\n    }\r\n\r\n    if(this.expansion) {\r\n      const expandedIndicator = \"expandedIndicator\";\r\n      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){\r\n        this.rowConfig.displayedColumns.push('expandedIndicator');\r\n      }\r\n    }\r\n  }\r\n\r\n  ngAfterViewInit() {\r\n    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\r\n      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\r\n      this.dataSource.sort = this.matSort;\r\n    }\r\n    if(this.pagination) {\r\n      this.dataSource.paginator = this.matPaginator;\r\n      this.dataSource.paginator.initialized.subscribe(\r\n        value => {\r\n          setTimeout(() => {\r\n            this.page = {\r\n              pageNumber: this.dataSource.paginator.pageIndex + 1,\r\n              pageSize: this.dataSource.paginator.pageSize,\r\n              totalPages: this.dataSource.paginator.getNumberOfPages()\r\n            }\r\n            this.totalItems = this.dataSource.data.length;\r\n            this.showPagination = true;\r\n            this.changeDetectorRef.detectChanges();\r\n          });\r\n        }\r\n      );\r\n\r\n      this.pageChange.subscribe(\r\n        value => {\r\n          this.updateSdsPagination();\r\n        }\r\n      );\r\n      this.changeDetectorRef.detectChanges();\r\n    }\r\n\r\n  }\r\n\r\n  typeOf(value) {\r\n    return typeof value;\r\n  }\r\n\r\n  isArray(obj : any ) {\r\n    return Array.isArray(obj)\r\n  }\r\n\r\n  updateSdsPagination() {\r\n    if(this.page) {\r\n      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;\r\n      this.dataSource.paginator._changePageSize(this.page.pageSize);\r\n      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);\r\n      this.totalItems = this.dataSource.data.length;\r\n      this.changeDetectorRef.detectChanges();\r\n    }\r\n  }\r\n\r\n  defaultSort(data, sortHeaderId) {\r\n    if (typeof data[sortHeaderId] === 'string') {\r\n      return data[sortHeaderId].toLocaleLowerCase();\r\n    }\r\n\r\n    return data[sortHeaderId];\r\n  };\r\n\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "implements": [
                "AfterContentInit"
            ]
        },
        {
            "name": "SdsTableComponent",
            "id": "component-SdsTableComponent-aa2506110326dd64e3b8820d39e75236",
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
                    "line": 141,
                    "type": "boolean"
                },
                {
                    "name": "data",
                    "description": "<p>Data for table</p>\n",
                    "line": 135
                },
                {
                    "name": "expansion",
                    "description": "<p>Expansion table</p>\n",
                    "line": 180,
                    "type": "boolean"
                },
                {
                    "name": "pagination",
                    "description": "<p>Pagination table</p>\n",
                    "line": 167,
                    "type": "boolean"
                },
                {
                    "name": "sort",
                    "defaultValue": "'false'",
                    "description": "<p>Sorting table</p>\n",
                    "line": 154
                },
                {
                    "name": "sortFn",
                    "description": "<p>Sorting function override</p>\n",
                    "line": 160,
                    "type": "any"
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
                    "line": 147,
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
                    "line": 186,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_pagination",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 173,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "bottom",
                    "defaultValue": "{ id: 'bottom' }",
                    "type": "object",
                    "optional": false,
                    "description": "",
                    "line": 206
                },
                {
                    "name": "dataSource",
                    "type": "MatTableDataSource<any>",
                    "optional": false,
                    "description": "",
                    "line": 188
                },
                {
                    "name": "expandedElement",
                    "type": "any",
                    "optional": false,
                    "description": "",
                    "line": 189
                },
                {
                    "name": "footerRowConfig",
                    "defaultValue": "{} as SdsFooterRowConfig",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 201
                },
                {
                    "name": "headerRowConfig",
                    "defaultValue": "{} as SdsHeaderRowConfig",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 200
                },
                {
                    "name": "matPaginator",
                    "type": "MatPaginator",
                    "optional": false,
                    "description": "",
                    "line": 197,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "MatPaginator"
                        }
                    ]
                },
                {
                    "name": "matSort",
                    "type": "MatSort",
                    "optional": false,
                    "description": "",
                    "line": 196,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "MatSort"
                        }
                    ]
                },
                {
                    "name": "page",
                    "type": "any",
                    "optional": false,
                    "description": "",
                    "line": 207
                },
                {
                    "name": "pageChange",
                    "defaultValue": "new BehaviorSubject<object>(this.page)",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 208,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "pageEvent",
                    "type": "PageEvent",
                    "optional": false,
                    "description": "",
                    "line": 202
                },
                {
                    "name": "rowConfig",
                    "defaultValue": "{} as SdsRowConfig",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 199
                },
                {
                    "name": "sdsColumnItems",
                    "type": "QueryList<SdsTableColumnDefComponent>",
                    "optional": false,
                    "description": "",
                    "line": 195,
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
                    "line": 194,
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
                    "line": 193,
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
                    "line": 192,
                    "decorators": [
                        {
                            "name": "ContentChild",
                            "stringifiedArguments": "SdsTableRowComponent"
                        }
                    ]
                },
                {
                    "name": "showPagination",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 209
                },
                {
                    "name": "table",
                    "type": "MatTable<any>",
                    "optional": false,
                    "description": "",
                    "line": 191,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "MatTable"
                        }
                    ]
                },
                {
                    "name": "top",
                    "defaultValue": "{ id: 'top' }",
                    "type": "object",
                    "optional": false,
                    "description": "",
                    "line": 205
                },
                {
                    "name": "totalItems",
                    "type": "number",
                    "optional": false,
                    "description": "",
                    "line": 210
                }
            ],
            "methodsClass": [
                {
                    "name": "defaultSort",
                    "args": [
                        {
                            "name": "data",
                            "type": ""
                        },
                        {
                            "name": "sortHeaderId",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 305,
                    "jsdoctags": [
                        {
                            "name": "data",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "sortHeaderId",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "isArray",
                    "args": [
                        {
                            "name": "obj",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 291,
                    "jsdoctags": [
                        {
                            "name": "obj",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "ngAfterContentInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 232
                },
                {
                    "name": "ngAfterViewInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 255
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
                    "line": 214,
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
                    "line": 228
                },
                {
                    "name": "typeOf",
                    "args": [
                        {
                            "name": "value",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "\"string\" | \"number\" | \"boolean\" | \"symbol\" | \"undefined\" | \"object\" | \"function\"",
                    "typeParameters": [],
                    "line": 287,
                    "jsdoctags": [
                        {
                            "name": "value",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "updateSdsPagination",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 295
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\r\n  Component,\r\n  Input,\r\n  OnInit,\r\n  ContentChild,\r\n  AfterContentInit,\r\n  ContentChildren,\r\n  QueryList,\r\n  ViewChild,\r\n  TemplateRef,\r\n  Directive,\r\n  SimpleChanges,\r\n  OnChanges,\r\n  ChangeDetectorRef\r\n} from '@angular/core';\r\nimport { AfterViewInit } from '@angular/core';\r\nimport {MatTableDataSource, MatTable} from '@angular/material/table';\r\nimport {MatSort} from '@angular/material/sort';\r\nimport {MatPaginator, PageEvent} from '@angular/material/paginator';\r\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\r\nimport {animate, state, style, transition, trigger} from '@angular/animations';\r\nimport { BehaviorSubject, Observable } from 'rxjs';\r\n\r\n\r\nexport interface SdsRowConfig {\r\n  displayedColumns?: string[];\r\n  expandOnClick?: boolean;\r\n}\r\n\r\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\r\n  sticky?: boolean;\r\n}\r\n\r\nexport interface SdsFooterRowConfig extends SdsRowConfig {\r\n  sticky?: boolean;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() expandOnClick = false;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-header-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableHeaderRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() sticky: boolean;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-footer-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableFooterRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() sticky: boolean;\r\n}\r\n\r\n@Directive({selector: 'sds-table-headercell'})\r\nexport class SdsTableHeaderCellDirective {}\r\n\r\n@Directive({selector: 'sds-table-cell'})\r\nexport class SdsTableCellDirective {}\r\n\r\n@Directive({selector: 'sds-table-footercell'})\r\nexport class SdsTableFooterCellDirective {}\r\n\r\n@Component({\r\n  selector: 'sds-table-column',\r\n  template: `\r\n    <ng-template #columnHeaderCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n\r\n    <ng-template #columnCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n\r\n    <ng-template #columnFooterCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n  `\r\n})\r\nexport class SdsTableColumnDefComponent implements AfterContentInit {\r\n\r\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\r\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\r\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\r\n\r\n  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;\r\n  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;\r\n  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;\r\n\r\n  @Input() sdsColumnName;\r\n\r\n  @Input() sticky = false;\r\n\r\n  @Input() stickyEnd = false;\r\n\r\n  @Input() sdsExpandedTemplate = false;\r\n\r\n  ngAfterContentInit() {}\r\n}\r\n\r\n\r\n@Component({\r\n  selector: 'sds-table',\r\n  templateUrl: './table.component.html',\r\n  styleUrls: ['./table.component.scss'],\r\n  animations: [\r\n    trigger('detailExpand', [\r\n      state('collapsed', style({height: '0px', minHeight: '0'})),\r\n      state('expanded', style({height: '*'})),\r\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\r\n    ]),\r\n  ]\r\n})\r\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\r\n\r\n  /**\r\n   * Data for table\r\n   */\r\n  @Input() data;\r\n\r\n  /**\r\n   * Borderless table\r\n   */\r\n  @Input()\r\n  set borderless(borderless: boolean) {\r\n    this._borderless = coerceBooleanProperty(borderless);\r\n  }\r\n  get borderless() {\r\n    return this._borderless;\r\n  }\r\n  private _borderless = false;\r\n\r\n\r\n  /**\r\n   * Sorting table\r\n   */\r\n\r\n  @Input() sort = 'false';\r\n\r\n  /**\r\n   * Sorting function override\r\n   */\r\n\r\n  @Input() sortFn: any;\r\n\r\n\r\n  /**\r\n   * Pagination table\r\n   */\r\n  @Input()\r\n  set pagination(pagination: boolean) {\r\n    this._pagination = coerceBooleanProperty(pagination);\r\n  }\r\n  get pagination() {\r\n    return this._pagination;\r\n  }\r\n  private _pagination = false;\r\n\r\n\r\n  /**\r\n   * Expansion table\r\n   */\r\n  @Input()\r\n  set expansion(expansion: boolean) {\r\n    this._expansion = coerceBooleanProperty(expansion);\r\n  }\r\n  get expansion() {\r\n    return this._expansion;\r\n  }\r\n  private _expansion = false;\r\n\r\n  dataSource: MatTableDataSource<any>;\r\n  expandedElement: any;\r\n\r\n  @ViewChild(MatTable) table: MatTable<any>;\r\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\r\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\r\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\r\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\r\n  @ViewChild(MatSort) matSort: MatSort;\r\n  @ViewChild(MatPaginator) matPaginator: MatPaginator;\r\n\r\n  rowConfig = {} as SdsRowConfig;\r\n  headerRowConfig = {} as SdsHeaderRowConfig;\r\n  footerRowConfig = {} as SdsFooterRowConfig;\r\n  pageEvent: PageEvent;\r\n\r\n  /* sds pagination */\r\n  top = { id: 'top' };\r\n  bottom = { id: 'bottom' };\r\n  page: any;\r\n  public pageChange = new BehaviorSubject<object>(this.page);\r\n  showPagination = false;\r\n  totalItems: number;\r\n\r\n  constructor(private changeDetectorRef: ChangeDetectorRef) {}\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    if (changes.data.currentValue) {\r\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\r\n      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\r\n        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\r\n        this.dataSource.sort = this.matSort;\r\n      }\r\n      if(this.pagination) {\r\n        this.dataSource.paginator = this.matPaginator;\r\n        this.updateSdsPagination();\r\n      }\r\n    }\r\n  }\r\n\r\n  ngOnInit() {\r\n    this.dataSource = new MatTableDataSource(this.data);\r\n  }\r\n\r\n  ngAfterContentInit() {\r\n\r\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\r\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\r\n\r\n    if(this.sdsTableHeaderRowComponent) {\r\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\r\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\r\n    }\r\n\r\n    if(this.sdsTableFooterRowComponent) {\r\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\r\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\r\n    }\r\n\r\n    if(this.expansion) {\r\n      const expandedIndicator = \"expandedIndicator\";\r\n      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){\r\n        this.rowConfig.displayedColumns.push('expandedIndicator');\r\n      }\r\n    }\r\n  }\r\n\r\n  ngAfterViewInit() {\r\n    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\r\n      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\r\n      this.dataSource.sort = this.matSort;\r\n    }\r\n    if(this.pagination) {\r\n      this.dataSource.paginator = this.matPaginator;\r\n      this.dataSource.paginator.initialized.subscribe(\r\n        value => {\r\n          setTimeout(() => {\r\n            this.page = {\r\n              pageNumber: this.dataSource.paginator.pageIndex + 1,\r\n              pageSize: this.dataSource.paginator.pageSize,\r\n              totalPages: this.dataSource.paginator.getNumberOfPages()\r\n            }\r\n            this.totalItems = this.dataSource.data.length;\r\n            this.showPagination = true;\r\n            this.changeDetectorRef.detectChanges();\r\n          });\r\n        }\r\n      );\r\n\r\n      this.pageChange.subscribe(\r\n        value => {\r\n          this.updateSdsPagination();\r\n        }\r\n      );\r\n      this.changeDetectorRef.detectChanges();\r\n    }\r\n\r\n  }\r\n\r\n  typeOf(value) {\r\n    return typeof value;\r\n  }\r\n\r\n  isArray(obj : any ) {\r\n    return Array.isArray(obj)\r\n  }\r\n\r\n  updateSdsPagination() {\r\n    if(this.page) {\r\n      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;\r\n      this.dataSource.paginator._changePageSize(this.page.pageSize);\r\n      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);\r\n      this.totalItems = this.dataSource.data.length;\r\n      this.changeDetectorRef.detectChanges();\r\n    }\r\n  }\r\n\r\n  defaultSort(data, sortHeaderId) {\r\n    if (typeof data[sortHeaderId] === 'string') {\r\n      return data[sortHeaderId].toLocaleLowerCase();\r\n    }\r\n\r\n    return data[sortHeaderId];\r\n  };\r\n\r\n}\r\n",
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
                "args": [
                    {
                        "name": "changeDetectorRef",
                        "type": "ChangeDetectorRef"
                    }
                ],
                "line": 210,
                "jsdoctags": [
                    {
                        "name": "changeDetectorRef",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
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
                        "line": 141,
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
                        "line": 144
                    }
                },
                "pagination": {
                    "name": "pagination",
                    "setSignature": {
                        "name": "pagination",
                        "type": "void",
                        "args": [
                            {
                                "name": "pagination",
                                "type": "boolean"
                            }
                        ],
                        "returnType": "void",
                        "line": 167,
                        "description": "<p>Pagination table</p>\n",
                        "jsdoctags": [
                            {
                                "name": "pagination",
                                "type": "boolean",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    },
                    "getSignature": {
                        "name": "pagination",
                        "type": "",
                        "returnType": "",
                        "line": 170
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
                        "line": 180,
                        "description": "<p>Expansion table</p>\n",
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
                        "line": 183
                    }
                }
            },
            "templateData": "<div class=\"margin-y-05\" *ngIf=\"pagination && showPagination\">\r\n  <sds-pagination [displayMode]=\"'results'\" [paginationConfiguration]=\"top\" [(page)]=\"page\" [totalItems]=\"totalItems\"></sds-pagination>\r\n</div>\r\n\r\n<div class=\"sds-table__container\" [ngClass]=\"{ 'sds-table__container--borderless': borderless }\">\r\n  <table mat-table [dataSource]=\"dataSource\" class=\"sds-table width-full mat-elevation-z8\" matSort multiTemplateDataRows [ngClass]=\"{ 'sds-table--expansion': expansion }\">\r\n\r\n    <ng-container *ngFor=\"let sdsColumnItem of sdsColumnItems\">\r\n      <ng-container *ngIf=\"!sdsColumnItem.sdsExpandedTemplate\" matColumnDef=\"{{sdsColumnItem.sdsColumnName}}\" [sticky]=\"sdsColumnItem.sticky\" [stickyEnd]=\"sdsColumnItem.stickyEnd\">\r\n        <ng-container *ngIf=\"(sort==='true' || sort==='') || ((typeOf(sort) === 'object') && isArray(sort) && sort.includes(sdsColumnItem.sdsColumnName)) else basicColumn\">\r\n          <th mat-header-cell *matHeaderCellDef scope=\"col\" mat-sort-header><ng-container *ngTemplateOutlet=\"sdsColumnItem.columnHeaderCell\"></ng-container></th>\r\n        </ng-container>\r\n        <ng-template #basicColumn>\r\n          <ng-container>\r\n            <th mat-header-cell *matHeaderCellDef scope=\"col\"><ng-container *ngTemplateOutlet=\"sdsColumnItem.columnHeaderCell\"></ng-container></th>\r\n          </ng-container>\r\n        </ng-template>\r\n        <td mat-cell *matCellDef=\"let element\"><ng-container *ngTemplateOutlet=\"sdsColumnItem.columnCell; context: {element : element}\"></ng-container></td>\r\n        <ng-container *ngIf=\"sdsColumnItem.footerCellTemplate\" >\r\n          <th mat-footer-cell *matFooterCellDef scope=\"col\"><ng-container *ngTemplateOutlet=\"sdsColumnItem.columnFooterCell\"></ng-container></th>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!sdsColumnItem.footerCellTemplate\" >\r\n          <td mat-footer-cell *matFooterCellDef scope=\"col\"></td>\r\n        </ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\r\n    <ng-container *ngIf=\"expansion\">\r\n      <ng-container *ngFor=\"let sdsColumnItem of sdsColumnItems\">\r\n        <ng-container *ngIf=\"sdsColumnItem.sdsExpandedTemplate\"  matColumnDef=\"{{sdsColumnItem.sdsColumnName}}\">\r\n          <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"rowConfig.displayedColumns.length\" class=\"sds-table__cell--detail\">\r\n            <div class=\"sds-table__cell__expanded-wrapper\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\r\n              <ng-container *ngTemplateOutlet=\"sdsColumnItem.columnCell; context: {element : element}\"></ng-container>\r\n            </div>\r\n          </td>\r\n        </ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"expansion\" matColumnDef=\"expandedIndicator\">\r\n      <td mat-header-cell *matHeaderCellDef></td>\r\n      <td mat-cell *matCellDef=\"let element\"\r\n        class=\"cursor-pointer\"\r\n        (click)=\"!rowConfig.expandOnClick ? (expandedElement = expandedElement === element ? null : element) : false\"\r\n      >\r\n        <fa-icon *ngIf=\"element == expandedElement\" [icon]=\"['fas', 'chevron-up']\" size=\"sm\"></fa-icon>\r\n        <fa-icon *ngIf=\"element != expandedElement\" [icon]=\"['fas', 'chevron-down']\" size=\"sm\"></fa-icon>\r\n      </td>\r\n      <td mat-footer-cell *matFooterCellDef></td>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"headerRowConfig && headerRowConfig.displayedColumns\">\r\n      <tr mat-header-row *matHeaderRowDef=\"headerRowConfig.displayedColumns; sticky: headerRowConfig.sticky\"></tr>\r\n    </ng-container>\r\n\r\n    <tr mat-row *matRowDef=\"let row; columns: rowConfig.displayedColumns;\"\r\n      class=\"sds-table__row\"\r\n      [ngClass]=\"{ 'cursor-pointer': rowConfig.expandOnClick, 'sds-table__row--expanded': expandedElement == row }\"\r\n      (click)=\"rowConfig.expandOnClick ? (expandedElement = expandedElement === row ? null : row) : false\"\r\n    ></tr>\r\n\r\n    <ng-container *ngIf=\"expansion\">\r\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"sds-table__row--detail\"></tr>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"footerRowConfig && footerRowConfig.displayedColumns\">\r\n      <tr mat-footer-row *matFooterRowDef=\"footerRowConfig.displayedColumns; sticky: footerRowConfig.sticky\"></tr>\r\n    </ng-container>\r\n\r\n  </table>\r\n\r\n  <div [hidden]=\"true\">\r\n    <ng-container *ngIf=\"pagination\">\r\n      <mat-paginator [pageSizeOptions]=\"[25, 50, 100]\" showFirstLastButtons (page)=\"pageEvent = $event\"></mat-paginator>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"pagination && showPagination\">\r\n  <sds-pagination [paginationConfiguration]=\"bottom\" [(page)]=\"page\" (pageChange)=\"pageChange.next($event)\" (initialized)=\"pageChange.next($event)\"></sds-pagination>\r\n</div>\r\n\r\n"
        },
        {
            "name": "SdsTableFooterRowComponent",
            "id": "component-SdsTableFooterRowComponent-aa2506110326dd64e3b8820d39e75236",
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
                    "line": 67,
                    "type": "Array<string>"
                },
                {
                    "name": "sticky",
                    "line": 68,
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
            "sourceCode": "import {\r\n  Component,\r\n  Input,\r\n  OnInit,\r\n  ContentChild,\r\n  AfterContentInit,\r\n  ContentChildren,\r\n  QueryList,\r\n  ViewChild,\r\n  TemplateRef,\r\n  Directive,\r\n  SimpleChanges,\r\n  OnChanges,\r\n  ChangeDetectorRef\r\n} from '@angular/core';\r\nimport { AfterViewInit } from '@angular/core';\r\nimport {MatTableDataSource, MatTable} from '@angular/material/table';\r\nimport {MatSort} from '@angular/material/sort';\r\nimport {MatPaginator, PageEvent} from '@angular/material/paginator';\r\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\r\nimport {animate, state, style, transition, trigger} from '@angular/animations';\r\nimport { BehaviorSubject, Observable } from 'rxjs';\r\n\r\n\r\nexport interface SdsRowConfig {\r\n  displayedColumns?: string[];\r\n  expandOnClick?: boolean;\r\n}\r\n\r\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\r\n  sticky?: boolean;\r\n}\r\n\r\nexport interface SdsFooterRowConfig extends SdsRowConfig {\r\n  sticky?: boolean;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() expandOnClick = false;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-header-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableHeaderRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() sticky: boolean;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-footer-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableFooterRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() sticky: boolean;\r\n}\r\n\r\n@Directive({selector: 'sds-table-headercell'})\r\nexport class SdsTableHeaderCellDirective {}\r\n\r\n@Directive({selector: 'sds-table-cell'})\r\nexport class SdsTableCellDirective {}\r\n\r\n@Directive({selector: 'sds-table-footercell'})\r\nexport class SdsTableFooterCellDirective {}\r\n\r\n@Component({\r\n  selector: 'sds-table-column',\r\n  template: `\r\n    <ng-template #columnHeaderCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n\r\n    <ng-template #columnCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n\r\n    <ng-template #columnFooterCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n  `\r\n})\r\nexport class SdsTableColumnDefComponent implements AfterContentInit {\r\n\r\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\r\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\r\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\r\n\r\n  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;\r\n  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;\r\n  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;\r\n\r\n  @Input() sdsColumnName;\r\n\r\n  @Input() sticky = false;\r\n\r\n  @Input() stickyEnd = false;\r\n\r\n  @Input() sdsExpandedTemplate = false;\r\n\r\n  ngAfterContentInit() {}\r\n}\r\n\r\n\r\n@Component({\r\n  selector: 'sds-table',\r\n  templateUrl: './table.component.html',\r\n  styleUrls: ['./table.component.scss'],\r\n  animations: [\r\n    trigger('detailExpand', [\r\n      state('collapsed', style({height: '0px', minHeight: '0'})),\r\n      state('expanded', style({height: '*'})),\r\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\r\n    ]),\r\n  ]\r\n})\r\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\r\n\r\n  /**\r\n   * Data for table\r\n   */\r\n  @Input() data;\r\n\r\n  /**\r\n   * Borderless table\r\n   */\r\n  @Input()\r\n  set borderless(borderless: boolean) {\r\n    this._borderless = coerceBooleanProperty(borderless);\r\n  }\r\n  get borderless() {\r\n    return this._borderless;\r\n  }\r\n  private _borderless = false;\r\n\r\n\r\n  /**\r\n   * Sorting table\r\n   */\r\n\r\n  @Input() sort = 'false';\r\n\r\n  /**\r\n   * Sorting function override\r\n   */\r\n\r\n  @Input() sortFn: any;\r\n\r\n\r\n  /**\r\n   * Pagination table\r\n   */\r\n  @Input()\r\n  set pagination(pagination: boolean) {\r\n    this._pagination = coerceBooleanProperty(pagination);\r\n  }\r\n  get pagination() {\r\n    return this._pagination;\r\n  }\r\n  private _pagination = false;\r\n\r\n\r\n  /**\r\n   * Expansion table\r\n   */\r\n  @Input()\r\n  set expansion(expansion: boolean) {\r\n    this._expansion = coerceBooleanProperty(expansion);\r\n  }\r\n  get expansion() {\r\n    return this._expansion;\r\n  }\r\n  private _expansion = false;\r\n\r\n  dataSource: MatTableDataSource<any>;\r\n  expandedElement: any;\r\n\r\n  @ViewChild(MatTable) table: MatTable<any>;\r\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\r\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\r\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\r\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\r\n  @ViewChild(MatSort) matSort: MatSort;\r\n  @ViewChild(MatPaginator) matPaginator: MatPaginator;\r\n\r\n  rowConfig = {} as SdsRowConfig;\r\n  headerRowConfig = {} as SdsHeaderRowConfig;\r\n  footerRowConfig = {} as SdsFooterRowConfig;\r\n  pageEvent: PageEvent;\r\n\r\n  /* sds pagination */\r\n  top = { id: 'top' };\r\n  bottom = { id: 'bottom' };\r\n  page: any;\r\n  public pageChange = new BehaviorSubject<object>(this.page);\r\n  showPagination = false;\r\n  totalItems: number;\r\n\r\n  constructor(private changeDetectorRef: ChangeDetectorRef) {}\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    if (changes.data.currentValue) {\r\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\r\n      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\r\n        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\r\n        this.dataSource.sort = this.matSort;\r\n      }\r\n      if(this.pagination) {\r\n        this.dataSource.paginator = this.matPaginator;\r\n        this.updateSdsPagination();\r\n      }\r\n    }\r\n  }\r\n\r\n  ngOnInit() {\r\n    this.dataSource = new MatTableDataSource(this.data);\r\n  }\r\n\r\n  ngAfterContentInit() {\r\n\r\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\r\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\r\n\r\n    if(this.sdsTableHeaderRowComponent) {\r\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\r\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\r\n    }\r\n\r\n    if(this.sdsTableFooterRowComponent) {\r\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\r\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\r\n    }\r\n\r\n    if(this.expansion) {\r\n      const expandedIndicator = \"expandedIndicator\";\r\n      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){\r\n        this.rowConfig.displayedColumns.push('expandedIndicator');\r\n      }\r\n    }\r\n  }\r\n\r\n  ngAfterViewInit() {\r\n    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\r\n      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\r\n      this.dataSource.sort = this.matSort;\r\n    }\r\n    if(this.pagination) {\r\n      this.dataSource.paginator = this.matPaginator;\r\n      this.dataSource.paginator.initialized.subscribe(\r\n        value => {\r\n          setTimeout(() => {\r\n            this.page = {\r\n              pageNumber: this.dataSource.paginator.pageIndex + 1,\r\n              pageSize: this.dataSource.paginator.pageSize,\r\n              totalPages: this.dataSource.paginator.getNumberOfPages()\r\n            }\r\n            this.totalItems = this.dataSource.data.length;\r\n            this.showPagination = true;\r\n            this.changeDetectorRef.detectChanges();\r\n          });\r\n        }\r\n      );\r\n\r\n      this.pageChange.subscribe(\r\n        value => {\r\n          this.updateSdsPagination();\r\n        }\r\n      );\r\n      this.changeDetectorRef.detectChanges();\r\n    }\r\n\r\n  }\r\n\r\n  typeOf(value) {\r\n    return typeof value;\r\n  }\r\n\r\n  isArray(obj : any ) {\r\n    return Array.isArray(obj)\r\n  }\r\n\r\n  updateSdsPagination() {\r\n    if(this.page) {\r\n      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;\r\n      this.dataSource.paginator._changePageSize(this.page.pageSize);\r\n      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);\r\n      this.totalItems = this.dataSource.data.length;\r\n      this.changeDetectorRef.detectChanges();\r\n    }\r\n  }\r\n\r\n  defaultSort(data, sortHeaderId) {\r\n    if (typeof data[sortHeaderId] === 'string') {\r\n      return data[sortHeaderId].toLocaleLowerCase();\r\n    }\r\n\r\n    return data[sortHeaderId];\r\n  };\r\n\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": ""
        },
        {
            "name": "SdsTableHeaderRowComponent",
            "id": "component-SdsTableHeaderRowComponent-aa2506110326dd64e3b8820d39e75236",
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
                    "line": 56,
                    "type": "Array<string>"
                },
                {
                    "name": "sticky",
                    "line": 57,
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
            "sourceCode": "import {\r\n  Component,\r\n  Input,\r\n  OnInit,\r\n  ContentChild,\r\n  AfterContentInit,\r\n  ContentChildren,\r\n  QueryList,\r\n  ViewChild,\r\n  TemplateRef,\r\n  Directive,\r\n  SimpleChanges,\r\n  OnChanges,\r\n  ChangeDetectorRef\r\n} from '@angular/core';\r\nimport { AfterViewInit } from '@angular/core';\r\nimport {MatTableDataSource, MatTable} from '@angular/material/table';\r\nimport {MatSort} from '@angular/material/sort';\r\nimport {MatPaginator, PageEvent} from '@angular/material/paginator';\r\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\r\nimport {animate, state, style, transition, trigger} from '@angular/animations';\r\nimport { BehaviorSubject, Observable } from 'rxjs';\r\n\r\n\r\nexport interface SdsRowConfig {\r\n  displayedColumns?: string[];\r\n  expandOnClick?: boolean;\r\n}\r\n\r\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\r\n  sticky?: boolean;\r\n}\r\n\r\nexport interface SdsFooterRowConfig extends SdsRowConfig {\r\n  sticky?: boolean;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() expandOnClick = false;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-header-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableHeaderRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() sticky: boolean;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-footer-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableFooterRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() sticky: boolean;\r\n}\r\n\r\n@Directive({selector: 'sds-table-headercell'})\r\nexport class SdsTableHeaderCellDirective {}\r\n\r\n@Directive({selector: 'sds-table-cell'})\r\nexport class SdsTableCellDirective {}\r\n\r\n@Directive({selector: 'sds-table-footercell'})\r\nexport class SdsTableFooterCellDirective {}\r\n\r\n@Component({\r\n  selector: 'sds-table-column',\r\n  template: `\r\n    <ng-template #columnHeaderCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n\r\n    <ng-template #columnCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n\r\n    <ng-template #columnFooterCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n  `\r\n})\r\nexport class SdsTableColumnDefComponent implements AfterContentInit {\r\n\r\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\r\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\r\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\r\n\r\n  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;\r\n  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;\r\n  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;\r\n\r\n  @Input() sdsColumnName;\r\n\r\n  @Input() sticky = false;\r\n\r\n  @Input() stickyEnd = false;\r\n\r\n  @Input() sdsExpandedTemplate = false;\r\n\r\n  ngAfterContentInit() {}\r\n}\r\n\r\n\r\n@Component({\r\n  selector: 'sds-table',\r\n  templateUrl: './table.component.html',\r\n  styleUrls: ['./table.component.scss'],\r\n  animations: [\r\n    trigger('detailExpand', [\r\n      state('collapsed', style({height: '0px', minHeight: '0'})),\r\n      state('expanded', style({height: '*'})),\r\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\r\n    ]),\r\n  ]\r\n})\r\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\r\n\r\n  /**\r\n   * Data for table\r\n   */\r\n  @Input() data;\r\n\r\n  /**\r\n   * Borderless table\r\n   */\r\n  @Input()\r\n  set borderless(borderless: boolean) {\r\n    this._borderless = coerceBooleanProperty(borderless);\r\n  }\r\n  get borderless() {\r\n    return this._borderless;\r\n  }\r\n  private _borderless = false;\r\n\r\n\r\n  /**\r\n   * Sorting table\r\n   */\r\n\r\n  @Input() sort = 'false';\r\n\r\n  /**\r\n   * Sorting function override\r\n   */\r\n\r\n  @Input() sortFn: any;\r\n\r\n\r\n  /**\r\n   * Pagination table\r\n   */\r\n  @Input()\r\n  set pagination(pagination: boolean) {\r\n    this._pagination = coerceBooleanProperty(pagination);\r\n  }\r\n  get pagination() {\r\n    return this._pagination;\r\n  }\r\n  private _pagination = false;\r\n\r\n\r\n  /**\r\n   * Expansion table\r\n   */\r\n  @Input()\r\n  set expansion(expansion: boolean) {\r\n    this._expansion = coerceBooleanProperty(expansion);\r\n  }\r\n  get expansion() {\r\n    return this._expansion;\r\n  }\r\n  private _expansion = false;\r\n\r\n  dataSource: MatTableDataSource<any>;\r\n  expandedElement: any;\r\n\r\n  @ViewChild(MatTable) table: MatTable<any>;\r\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\r\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\r\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\r\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\r\n  @ViewChild(MatSort) matSort: MatSort;\r\n  @ViewChild(MatPaginator) matPaginator: MatPaginator;\r\n\r\n  rowConfig = {} as SdsRowConfig;\r\n  headerRowConfig = {} as SdsHeaderRowConfig;\r\n  footerRowConfig = {} as SdsFooterRowConfig;\r\n  pageEvent: PageEvent;\r\n\r\n  /* sds pagination */\r\n  top = { id: 'top' };\r\n  bottom = { id: 'bottom' };\r\n  page: any;\r\n  public pageChange = new BehaviorSubject<object>(this.page);\r\n  showPagination = false;\r\n  totalItems: number;\r\n\r\n  constructor(private changeDetectorRef: ChangeDetectorRef) {}\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    if (changes.data.currentValue) {\r\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\r\n      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\r\n        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\r\n        this.dataSource.sort = this.matSort;\r\n      }\r\n      if(this.pagination) {\r\n        this.dataSource.paginator = this.matPaginator;\r\n        this.updateSdsPagination();\r\n      }\r\n    }\r\n  }\r\n\r\n  ngOnInit() {\r\n    this.dataSource = new MatTableDataSource(this.data);\r\n  }\r\n\r\n  ngAfterContentInit() {\r\n\r\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\r\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\r\n\r\n    if(this.sdsTableHeaderRowComponent) {\r\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\r\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\r\n    }\r\n\r\n    if(this.sdsTableFooterRowComponent) {\r\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\r\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\r\n    }\r\n\r\n    if(this.expansion) {\r\n      const expandedIndicator = \"expandedIndicator\";\r\n      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){\r\n        this.rowConfig.displayedColumns.push('expandedIndicator');\r\n      }\r\n    }\r\n  }\r\n\r\n  ngAfterViewInit() {\r\n    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\r\n      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\r\n      this.dataSource.sort = this.matSort;\r\n    }\r\n    if(this.pagination) {\r\n      this.dataSource.paginator = this.matPaginator;\r\n      this.dataSource.paginator.initialized.subscribe(\r\n        value => {\r\n          setTimeout(() => {\r\n            this.page = {\r\n              pageNumber: this.dataSource.paginator.pageIndex + 1,\r\n              pageSize: this.dataSource.paginator.pageSize,\r\n              totalPages: this.dataSource.paginator.getNumberOfPages()\r\n            }\r\n            this.totalItems = this.dataSource.data.length;\r\n            this.showPagination = true;\r\n            this.changeDetectorRef.detectChanges();\r\n          });\r\n        }\r\n      );\r\n\r\n      this.pageChange.subscribe(\r\n        value => {\r\n          this.updateSdsPagination();\r\n        }\r\n      );\r\n      this.changeDetectorRef.detectChanges();\r\n    }\r\n\r\n  }\r\n\r\n  typeOf(value) {\r\n    return typeof value;\r\n  }\r\n\r\n  isArray(obj : any ) {\r\n    return Array.isArray(obj)\r\n  }\r\n\r\n  updateSdsPagination() {\r\n    if(this.page) {\r\n      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;\r\n      this.dataSource.paginator._changePageSize(this.page.pageSize);\r\n      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);\r\n      this.totalItems = this.dataSource.data.length;\r\n      this.changeDetectorRef.detectChanges();\r\n    }\r\n  }\r\n\r\n  defaultSort(data, sortHeaderId) {\r\n    if (typeof data[sortHeaderId] === 'string') {\r\n      return data[sortHeaderId].toLocaleLowerCase();\r\n    }\r\n\r\n    return data[sortHeaderId];\r\n  };\r\n\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": ""
        },
        {
            "name": "SdsTableRowComponent",
            "id": "component-SdsTableRowComponent-aa2506110326dd64e3b8820d39e75236",
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
                    "line": 45,
                    "type": "Array<string>"
                },
                {
                    "name": "expandOnClick",
                    "defaultValue": "false",
                    "line": 46
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
            "sourceCode": "import {\r\n  Component,\r\n  Input,\r\n  OnInit,\r\n  ContentChild,\r\n  AfterContentInit,\r\n  ContentChildren,\r\n  QueryList,\r\n  ViewChild,\r\n  TemplateRef,\r\n  Directive,\r\n  SimpleChanges,\r\n  OnChanges,\r\n  ChangeDetectorRef\r\n} from '@angular/core';\r\nimport { AfterViewInit } from '@angular/core';\r\nimport {MatTableDataSource, MatTable} from '@angular/material/table';\r\nimport {MatSort} from '@angular/material/sort';\r\nimport {MatPaginator, PageEvent} from '@angular/material/paginator';\r\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\r\nimport {animate, state, style, transition, trigger} from '@angular/animations';\r\nimport { BehaviorSubject, Observable } from 'rxjs';\r\n\r\n\r\nexport interface SdsRowConfig {\r\n  displayedColumns?: string[];\r\n  expandOnClick?: boolean;\r\n}\r\n\r\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\r\n  sticky?: boolean;\r\n}\r\n\r\nexport interface SdsFooterRowConfig extends SdsRowConfig {\r\n  sticky?: boolean;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() expandOnClick = false;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-header-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableHeaderRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() sticky: boolean;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-footer-row',\r\n  template: `\r\n    <ng-content></ng-content>\r\n  `\r\n})\r\nexport class SdsTableFooterRowComponent {\r\n  @Input() displayedColumns: Array<string>;\r\n  @Input() sticky: boolean;\r\n}\r\n\r\n@Directive({selector: 'sds-table-headercell'})\r\nexport class SdsTableHeaderCellDirective {}\r\n\r\n@Directive({selector: 'sds-table-cell'})\r\nexport class SdsTableCellDirective {}\r\n\r\n@Directive({selector: 'sds-table-footercell'})\r\nexport class SdsTableFooterCellDirective {}\r\n\r\n@Component({\r\n  selector: 'sds-table-column',\r\n  template: `\r\n    <ng-template #columnHeaderCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n\r\n    <ng-template #columnCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n\r\n    <ng-template #columnFooterCell let-element=\"element\">\r\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\r\n    </ng-template>\r\n  `\r\n})\r\nexport class SdsTableColumnDefComponent implements AfterContentInit {\r\n\r\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\r\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\r\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\r\n\r\n  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;\r\n  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;\r\n  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;\r\n\r\n  @Input() sdsColumnName;\r\n\r\n  @Input() sticky = false;\r\n\r\n  @Input() stickyEnd = false;\r\n\r\n  @Input() sdsExpandedTemplate = false;\r\n\r\n  ngAfterContentInit() {}\r\n}\r\n\r\n\r\n@Component({\r\n  selector: 'sds-table',\r\n  templateUrl: './table.component.html',\r\n  styleUrls: ['./table.component.scss'],\r\n  animations: [\r\n    trigger('detailExpand', [\r\n      state('collapsed', style({height: '0px', minHeight: '0'})),\r\n      state('expanded', style({height: '*'})),\r\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\r\n    ]),\r\n  ]\r\n})\r\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\r\n\r\n  /**\r\n   * Data for table\r\n   */\r\n  @Input() data;\r\n\r\n  /**\r\n   * Borderless table\r\n   */\r\n  @Input()\r\n  set borderless(borderless: boolean) {\r\n    this._borderless = coerceBooleanProperty(borderless);\r\n  }\r\n  get borderless() {\r\n    return this._borderless;\r\n  }\r\n  private _borderless = false;\r\n\r\n\r\n  /**\r\n   * Sorting table\r\n   */\r\n\r\n  @Input() sort = 'false';\r\n\r\n  /**\r\n   * Sorting function override\r\n   */\r\n\r\n  @Input() sortFn: any;\r\n\r\n\r\n  /**\r\n   * Pagination table\r\n   */\r\n  @Input()\r\n  set pagination(pagination: boolean) {\r\n    this._pagination = coerceBooleanProperty(pagination);\r\n  }\r\n  get pagination() {\r\n    return this._pagination;\r\n  }\r\n  private _pagination = false;\r\n\r\n\r\n  /**\r\n   * Expansion table\r\n   */\r\n  @Input()\r\n  set expansion(expansion: boolean) {\r\n    this._expansion = coerceBooleanProperty(expansion);\r\n  }\r\n  get expansion() {\r\n    return this._expansion;\r\n  }\r\n  private _expansion = false;\r\n\r\n  dataSource: MatTableDataSource<any>;\r\n  expandedElement: any;\r\n\r\n  @ViewChild(MatTable) table: MatTable<any>;\r\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\r\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\r\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\r\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\r\n  @ViewChild(MatSort) matSort: MatSort;\r\n  @ViewChild(MatPaginator) matPaginator: MatPaginator;\r\n\r\n  rowConfig = {} as SdsRowConfig;\r\n  headerRowConfig = {} as SdsHeaderRowConfig;\r\n  footerRowConfig = {} as SdsFooterRowConfig;\r\n  pageEvent: PageEvent;\r\n\r\n  /* sds pagination */\r\n  top = { id: 'top' };\r\n  bottom = { id: 'bottom' };\r\n  page: any;\r\n  public pageChange = new BehaviorSubject<object>(this.page);\r\n  showPagination = false;\r\n  totalItems: number;\r\n\r\n  constructor(private changeDetectorRef: ChangeDetectorRef) {}\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    if (changes.data.currentValue) {\r\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\r\n      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\r\n        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\r\n        this.dataSource.sort = this.matSort;\r\n      }\r\n      if(this.pagination) {\r\n        this.dataSource.paginator = this.matPaginator;\r\n        this.updateSdsPagination();\r\n      }\r\n    }\r\n  }\r\n\r\n  ngOnInit() {\r\n    this.dataSource = new MatTableDataSource(this.data);\r\n  }\r\n\r\n  ngAfterContentInit() {\r\n\r\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\r\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\r\n\r\n    if(this.sdsTableHeaderRowComponent) {\r\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\r\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\r\n    }\r\n\r\n    if(this.sdsTableFooterRowComponent) {\r\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\r\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\r\n    }\r\n\r\n    if(this.expansion) {\r\n      const expandedIndicator = \"expandedIndicator\";\r\n      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){\r\n        this.rowConfig.displayedColumns.push('expandedIndicator');\r\n      }\r\n    }\r\n  }\r\n\r\n  ngAfterViewInit() {\r\n    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\r\n      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\r\n      this.dataSource.sort = this.matSort;\r\n    }\r\n    if(this.pagination) {\r\n      this.dataSource.paginator = this.matPaginator;\r\n      this.dataSource.paginator.initialized.subscribe(\r\n        value => {\r\n          setTimeout(() => {\r\n            this.page = {\r\n              pageNumber: this.dataSource.paginator.pageIndex + 1,\r\n              pageSize: this.dataSource.paginator.pageSize,\r\n              totalPages: this.dataSource.paginator.getNumberOfPages()\r\n            }\r\n            this.totalItems = this.dataSource.data.length;\r\n            this.showPagination = true;\r\n            this.changeDetectorRef.detectChanges();\r\n          });\r\n        }\r\n      );\r\n\r\n      this.pageChange.subscribe(\r\n        value => {\r\n          this.updateSdsPagination();\r\n        }\r\n      );\r\n      this.changeDetectorRef.detectChanges();\r\n    }\r\n\r\n  }\r\n\r\n  typeOf(value) {\r\n    return typeof value;\r\n  }\r\n\r\n  isArray(obj : any ) {\r\n    return Array.isArray(obj)\r\n  }\r\n\r\n  updateSdsPagination() {\r\n    if(this.page) {\r\n      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;\r\n      this.dataSource.paginator._changePageSize(this.page.pageSize);\r\n      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);\r\n      this.totalItems = this.dataSource.data.length;\r\n      this.changeDetectorRef.detectChanges();\r\n    }\r\n  }\r\n\r\n  defaultSort(data, sortHeaderId) {\r\n    if (typeof data[sortHeaderId] === 'string') {\r\n      return data[sortHeaderId].toLocaleLowerCase();\r\n    }\r\n\r\n    return data[sortHeaderId];\r\n  };\r\n\r\n}\r\n",
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
            "name": "SdsButtonGroupModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsButtonGroupComponent"
                        },
                        {
                            "name": "SdsButtonGroupOptionComponent"
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
                            "name": "SdsButtonGroupComponent"
                        },
                        {
                            "name": "SdsButtonGroupOptionComponent"
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
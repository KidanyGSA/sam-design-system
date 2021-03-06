const MATERIAL = {
    "pipes": [],
    "interfaces": [
        {
            "name": "SdsFooterRowConfig",
            "id": "interface-SdsFooterRowConfig-4560d45fe5f509fca7bafc35b0ae70e8",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "type": "interface",
            "sourceCode": "import {\n  Component,\n  Input,\n  OnInit,\n  ContentChild,\n  AfterContentInit,\n  ContentChildren,\n  QueryList,\n  ViewChild,\n  TemplateRef,\n  Directive,\n  SimpleChanges,\n  OnChanges,\n  ChangeDetectorRef\n} from '@angular/core';\nimport { AfterViewInit } from '@angular/core';\nimport {MatTableDataSource, MatTable} from '@angular/material/table';\nimport {MatSort} from '@angular/material/sort';\nimport {MatPaginator, PageEvent} from '@angular/material/paginator';\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\nimport {animate, state, style, transition, trigger} from '@angular/animations';\nimport { BehaviorSubject, Observable } from 'rxjs';\n\n\nexport interface SdsRowConfig {\n  displayedColumns?: string[];\n  expandOnClick?: boolean;\n}\n\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\nexport interface SdsFooterRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\n@Component({\n  selector: 'sds-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() expandOnClick = false;\n}\n\n@Component({\n  selector: 'sds-header-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableHeaderRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Component({\n  selector: 'sds-footer-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableFooterRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Directive({selector: 'sds-table-headercell'})\nexport class SdsTableHeaderCellDirective {}\n\n@Directive({selector: 'sds-table-cell'})\nexport class SdsTableCellDirective {}\n\n@Directive({selector: 'sds-table-footercell'})\nexport class SdsTableFooterCellDirective {}\n\n@Component({\n  selector: 'sds-table-column',\n  template: `\n    <ng-template #columnHeaderCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n  `\n})\nexport class SdsTableColumnDefComponent implements AfterContentInit {\n\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\n\n  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;\n\n  @Input() sdsColumnName;\n\n  @Input() sticky = false;\n\n  @Input() stickyEnd = false;\n\n  @Input() sdsExpandedTemplate = false;\n\n  ngAfterContentInit() {}\n}\n\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss'],\n  animations: [\n    trigger('detailExpand', [\n      state('collapsed', style({height: '0px', minHeight: '0'})),\n      state('expanded', style({height: '*'})),\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\n    ]),\n  ]\n})\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\n\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * Borderless table\n   */\n  @Input()\n  set borderless(borderless: boolean) {\n    this._borderless = coerceBooleanProperty(borderless);\n  }\n  get borderless() {\n    return this._borderless;\n  }\n  private _borderless = false;\n\n\n  /**\n   * Sorting table\n   */\n\n  @Input() sort = 'false';\n\n  /**\n   * Sorting function override\n   */\n\n  @Input() sortFn: any;\n\n\n  /**\n   * Pagination table\n   */\n  @Input()\n  set pagination(pagination: boolean) {\n    this._pagination = coerceBooleanProperty(pagination);\n  }\n  get pagination() {\n    return this._pagination;\n  }\n  private _pagination = false;\n\n\n  /**\n   * Expansion table\n   */\n  @Input()\n  set expansion(expansion: boolean) {\n    this._expansion = coerceBooleanProperty(expansion);\n  }\n  get expansion() {\n    return this._expansion;\n  }\n  private _expansion = false;\n\n  dataSource: MatTableDataSource<any>;\n  expandedElement: any;\n\n  @ViewChild(MatTable) table: MatTable<any>;\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\n  @ViewChild(MatSort) matSort: MatSort;\n  @ViewChild(MatPaginator) matPaginator: MatPaginator;\n\n  rowConfig = {} as SdsRowConfig;\n  headerRowConfig = {} as SdsHeaderRowConfig;\n  footerRowConfig = {} as SdsFooterRowConfig;\n  pageEvent: PageEvent;\n\n  /* sds pagination */\n  top = { id: 'top' };\n  bottom = { id: 'bottom' };\n  page: any;\n  public pageChange = new BehaviorSubject<object>(this.page);\n  showPagination = false;\n  totalItems: number;\n\n  constructor(private changeDetectorRef: ChangeDetectorRef) {}\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.data.currentValue) {\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\n      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\n        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\n        this.dataSource.sort = this.matSort;\n      }\n      if(this.pagination) {\n        this.dataSource.paginator = this.matPaginator;\n        this.updateSdsPagination();\n      }\n    }\n  }\n\n  ngOnInit() {\n    this.dataSource = new MatTableDataSource(this.data);\n  }\n\n  ngAfterContentInit() {\n\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\n\n    if(this.sdsTableHeaderRowComponent) {\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\n    }\n\n    if(this.sdsTableFooterRowComponent) {\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\n    }\n\n    if(this.expansion) {\n      const expandedIndicator = \"expandedIndicator\";\n      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){\n        this.rowConfig.displayedColumns.push('expandedIndicator');\n      }\n    }\n  }\n\n  ngAfterViewInit() {\n    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\n      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\n      this.dataSource.sort = this.matSort;\n    }\n    if(this.pagination) {\n      this.dataSource.paginator = this.matPaginator;\n      this.dataSource.paginator.initialized.subscribe(\n        value => {\n          setTimeout(() => {\n            this.page = {\n              pageNumber: this.dataSource.paginator.pageIndex + 1,\n              pageSize: this.dataSource.paginator.pageSize,\n              totalPages: this.dataSource.paginator.getNumberOfPages()\n            }\n            this.totalItems = this.dataSource.data.length;\n            this.showPagination = true;\n            this.changeDetectorRef.detectChanges();\n          });\n        }\n      );\n\n      this.pageChange.subscribe(\n        value => {\n          this.updateSdsPagination();\n        }\n      );\n      this.changeDetectorRef.detectChanges();\n    }\n\n  }\n\n  typeOf(value) {\n    return typeof value;\n  }\n\n  isArray(obj : any ) {\n    return Array.isArray(obj)\n  }\n\n  updateSdsPagination() {\n    if(this.page) {\n      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;\n      this.dataSource.paginator._changePageSize(this.page.pageSize);\n      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);\n      this.totalItems = this.dataSource.data.length;\n      this.changeDetectorRef.detectChanges();\n    }\n  }\n\n  defaultSort(data, sortHeaderId) {\n    if (typeof data[sortHeaderId] === 'string') {\n      return data[sortHeaderId].toLocaleLowerCase();\n    }\n\n    return data[sortHeaderId];\n  };\n\n}\n",
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
            "id": "interface-SdsHeaderRowConfig-4560d45fe5f509fca7bafc35b0ae70e8",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "type": "interface",
            "sourceCode": "import {\n  Component,\n  Input,\n  OnInit,\n  ContentChild,\n  AfterContentInit,\n  ContentChildren,\n  QueryList,\n  ViewChild,\n  TemplateRef,\n  Directive,\n  SimpleChanges,\n  OnChanges,\n  ChangeDetectorRef\n} from '@angular/core';\nimport { AfterViewInit } from '@angular/core';\nimport {MatTableDataSource, MatTable} from '@angular/material/table';\nimport {MatSort} from '@angular/material/sort';\nimport {MatPaginator, PageEvent} from '@angular/material/paginator';\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\nimport {animate, state, style, transition, trigger} from '@angular/animations';\nimport { BehaviorSubject, Observable } from 'rxjs';\n\n\nexport interface SdsRowConfig {\n  displayedColumns?: string[];\n  expandOnClick?: boolean;\n}\n\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\nexport interface SdsFooterRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\n@Component({\n  selector: 'sds-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() expandOnClick = false;\n}\n\n@Component({\n  selector: 'sds-header-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableHeaderRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Component({\n  selector: 'sds-footer-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableFooterRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Directive({selector: 'sds-table-headercell'})\nexport class SdsTableHeaderCellDirective {}\n\n@Directive({selector: 'sds-table-cell'})\nexport class SdsTableCellDirective {}\n\n@Directive({selector: 'sds-table-footercell'})\nexport class SdsTableFooterCellDirective {}\n\n@Component({\n  selector: 'sds-table-column',\n  template: `\n    <ng-template #columnHeaderCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n  `\n})\nexport class SdsTableColumnDefComponent implements AfterContentInit {\n\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\n\n  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;\n\n  @Input() sdsColumnName;\n\n  @Input() sticky = false;\n\n  @Input() stickyEnd = false;\n\n  @Input() sdsExpandedTemplate = false;\n\n  ngAfterContentInit() {}\n}\n\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss'],\n  animations: [\n    trigger('detailExpand', [\n      state('collapsed', style({height: '0px', minHeight: '0'})),\n      state('expanded', style({height: '*'})),\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\n    ]),\n  ]\n})\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\n\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * Borderless table\n   */\n  @Input()\n  set borderless(borderless: boolean) {\n    this._borderless = coerceBooleanProperty(borderless);\n  }\n  get borderless() {\n    return this._borderless;\n  }\n  private _borderless = false;\n\n\n  /**\n   * Sorting table\n   */\n\n  @Input() sort = 'false';\n\n  /**\n   * Sorting function override\n   */\n\n  @Input() sortFn: any;\n\n\n  /**\n   * Pagination table\n   */\n  @Input()\n  set pagination(pagination: boolean) {\n    this._pagination = coerceBooleanProperty(pagination);\n  }\n  get pagination() {\n    return this._pagination;\n  }\n  private _pagination = false;\n\n\n  /**\n   * Expansion table\n   */\n  @Input()\n  set expansion(expansion: boolean) {\n    this._expansion = coerceBooleanProperty(expansion);\n  }\n  get expansion() {\n    return this._expansion;\n  }\n  private _expansion = false;\n\n  dataSource: MatTableDataSource<any>;\n  expandedElement: any;\n\n  @ViewChild(MatTable) table: MatTable<any>;\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\n  @ViewChild(MatSort) matSort: MatSort;\n  @ViewChild(MatPaginator) matPaginator: MatPaginator;\n\n  rowConfig = {} as SdsRowConfig;\n  headerRowConfig = {} as SdsHeaderRowConfig;\n  footerRowConfig = {} as SdsFooterRowConfig;\n  pageEvent: PageEvent;\n\n  /* sds pagination */\n  top = { id: 'top' };\n  bottom = { id: 'bottom' };\n  page: any;\n  public pageChange = new BehaviorSubject<object>(this.page);\n  showPagination = false;\n  totalItems: number;\n\n  constructor(private changeDetectorRef: ChangeDetectorRef) {}\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.data.currentValue) {\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\n      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\n        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\n        this.dataSource.sort = this.matSort;\n      }\n      if(this.pagination) {\n        this.dataSource.paginator = this.matPaginator;\n        this.updateSdsPagination();\n      }\n    }\n  }\n\n  ngOnInit() {\n    this.dataSource = new MatTableDataSource(this.data);\n  }\n\n  ngAfterContentInit() {\n\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\n\n    if(this.sdsTableHeaderRowComponent) {\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\n    }\n\n    if(this.sdsTableFooterRowComponent) {\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\n    }\n\n    if(this.expansion) {\n      const expandedIndicator = \"expandedIndicator\";\n      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){\n        this.rowConfig.displayedColumns.push('expandedIndicator');\n      }\n    }\n  }\n\n  ngAfterViewInit() {\n    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\n      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\n      this.dataSource.sort = this.matSort;\n    }\n    if(this.pagination) {\n      this.dataSource.paginator = this.matPaginator;\n      this.dataSource.paginator.initialized.subscribe(\n        value => {\n          setTimeout(() => {\n            this.page = {\n              pageNumber: this.dataSource.paginator.pageIndex + 1,\n              pageSize: this.dataSource.paginator.pageSize,\n              totalPages: this.dataSource.paginator.getNumberOfPages()\n            }\n            this.totalItems = this.dataSource.data.length;\n            this.showPagination = true;\n            this.changeDetectorRef.detectChanges();\n          });\n        }\n      );\n\n      this.pageChange.subscribe(\n        value => {\n          this.updateSdsPagination();\n        }\n      );\n      this.changeDetectorRef.detectChanges();\n    }\n\n  }\n\n  typeOf(value) {\n    return typeof value;\n  }\n\n  isArray(obj : any ) {\n    return Array.isArray(obj)\n  }\n\n  updateSdsPagination() {\n    if(this.page) {\n      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;\n      this.dataSource.paginator._changePageSize(this.page.pageSize);\n      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);\n      this.totalItems = this.dataSource.data.length;\n      this.changeDetectorRef.detectChanges();\n    }\n  }\n\n  defaultSort(data, sortHeaderId) {\n    if (typeof data[sortHeaderId] === 'string') {\n      return data[sortHeaderId].toLocaleLowerCase();\n    }\n\n    return data[sortHeaderId];\n  };\n\n}\n",
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
            "id": "interface-SdsRowConfig-4560d45fe5f509fca7bafc35b0ae70e8",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "type": "interface",
            "sourceCode": "import {\n  Component,\n  Input,\n  OnInit,\n  ContentChild,\n  AfterContentInit,\n  ContentChildren,\n  QueryList,\n  ViewChild,\n  TemplateRef,\n  Directive,\n  SimpleChanges,\n  OnChanges,\n  ChangeDetectorRef\n} from '@angular/core';\nimport { AfterViewInit } from '@angular/core';\nimport {MatTableDataSource, MatTable} from '@angular/material/table';\nimport {MatSort} from '@angular/material/sort';\nimport {MatPaginator, PageEvent} from '@angular/material/paginator';\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\nimport {animate, state, style, transition, trigger} from '@angular/animations';\nimport { BehaviorSubject, Observable } from 'rxjs';\n\n\nexport interface SdsRowConfig {\n  displayedColumns?: string[];\n  expandOnClick?: boolean;\n}\n\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\nexport interface SdsFooterRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\n@Component({\n  selector: 'sds-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() expandOnClick = false;\n}\n\n@Component({\n  selector: 'sds-header-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableHeaderRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Component({\n  selector: 'sds-footer-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableFooterRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Directive({selector: 'sds-table-headercell'})\nexport class SdsTableHeaderCellDirective {}\n\n@Directive({selector: 'sds-table-cell'})\nexport class SdsTableCellDirective {}\n\n@Directive({selector: 'sds-table-footercell'})\nexport class SdsTableFooterCellDirective {}\n\n@Component({\n  selector: 'sds-table-column',\n  template: `\n    <ng-template #columnHeaderCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n  `\n})\nexport class SdsTableColumnDefComponent implements AfterContentInit {\n\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\n\n  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;\n\n  @Input() sdsColumnName;\n\n  @Input() sticky = false;\n\n  @Input() stickyEnd = false;\n\n  @Input() sdsExpandedTemplate = false;\n\n  ngAfterContentInit() {}\n}\n\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss'],\n  animations: [\n    trigger('detailExpand', [\n      state('collapsed', style({height: '0px', minHeight: '0'})),\n      state('expanded', style({height: '*'})),\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\n    ]),\n  ]\n})\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\n\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * Borderless table\n   */\n  @Input()\n  set borderless(borderless: boolean) {\n    this._borderless = coerceBooleanProperty(borderless);\n  }\n  get borderless() {\n    return this._borderless;\n  }\n  private _borderless = false;\n\n\n  /**\n   * Sorting table\n   */\n\n  @Input() sort = 'false';\n\n  /**\n   * Sorting function override\n   */\n\n  @Input() sortFn: any;\n\n\n  /**\n   * Pagination table\n   */\n  @Input()\n  set pagination(pagination: boolean) {\n    this._pagination = coerceBooleanProperty(pagination);\n  }\n  get pagination() {\n    return this._pagination;\n  }\n  private _pagination = false;\n\n\n  /**\n   * Expansion table\n   */\n  @Input()\n  set expansion(expansion: boolean) {\n    this._expansion = coerceBooleanProperty(expansion);\n  }\n  get expansion() {\n    return this._expansion;\n  }\n  private _expansion = false;\n\n  dataSource: MatTableDataSource<any>;\n  expandedElement: any;\n\n  @ViewChild(MatTable) table: MatTable<any>;\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\n  @ViewChild(MatSort) matSort: MatSort;\n  @ViewChild(MatPaginator) matPaginator: MatPaginator;\n\n  rowConfig = {} as SdsRowConfig;\n  headerRowConfig = {} as SdsHeaderRowConfig;\n  footerRowConfig = {} as SdsFooterRowConfig;\n  pageEvent: PageEvent;\n\n  /* sds pagination */\n  top = { id: 'top' };\n  bottom = { id: 'bottom' };\n  page: any;\n  public pageChange = new BehaviorSubject<object>(this.page);\n  showPagination = false;\n  totalItems: number;\n\n  constructor(private changeDetectorRef: ChangeDetectorRef) {}\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.data.currentValue) {\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\n      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\n        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\n        this.dataSource.sort = this.matSort;\n      }\n      if(this.pagination) {\n        this.dataSource.paginator = this.matPaginator;\n        this.updateSdsPagination();\n      }\n    }\n  }\n\n  ngOnInit() {\n    this.dataSource = new MatTableDataSource(this.data);\n  }\n\n  ngAfterContentInit() {\n\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\n\n    if(this.sdsTableHeaderRowComponent) {\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\n    }\n\n    if(this.sdsTableFooterRowComponent) {\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\n    }\n\n    if(this.expansion) {\n      const expandedIndicator = \"expandedIndicator\";\n      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){\n        this.rowConfig.displayedColumns.push('expandedIndicator');\n      }\n    }\n  }\n\n  ngAfterViewInit() {\n    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\n      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\n      this.dataSource.sort = this.matSort;\n    }\n    if(this.pagination) {\n      this.dataSource.paginator = this.matPaginator;\n      this.dataSource.paginator.initialized.subscribe(\n        value => {\n          setTimeout(() => {\n            this.page = {\n              pageNumber: this.dataSource.paginator.pageIndex + 1,\n              pageSize: this.dataSource.paginator.pageSize,\n              totalPages: this.dataSource.paginator.getNumberOfPages()\n            }\n            this.totalItems = this.dataSource.data.length;\n            this.showPagination = true;\n            this.changeDetectorRef.detectChanges();\n          });\n        }\n      );\n\n      this.pageChange.subscribe(\n        value => {\n          this.updateSdsPagination();\n        }\n      );\n      this.changeDetectorRef.detectChanges();\n    }\n\n  }\n\n  typeOf(value) {\n    return typeof value;\n  }\n\n  isArray(obj : any ) {\n    return Array.isArray(obj)\n  }\n\n  updateSdsPagination() {\n    if(this.page) {\n      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;\n      this.dataSource.paginator._changePageSize(this.page.pageSize);\n      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);\n      this.totalItems = this.dataSource.data.length;\n      this.changeDetectorRef.detectChanges();\n    }\n  }\n\n  defaultSort(data, sortHeaderId) {\n    if (typeof data[sortHeaderId] === 'string') {\n      return data[sortHeaderId].toLocaleLowerCase();\n    }\n\n    return data[sortHeaderId];\n  };\n\n}\n",
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
            "id": "directive-SdsTableCellDirective-4560d45fe5f509fca7bafc35b0ae70e8",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\n  Component,\n  Input,\n  OnInit,\n  ContentChild,\n  AfterContentInit,\n  ContentChildren,\n  QueryList,\n  ViewChild,\n  TemplateRef,\n  Directive,\n  SimpleChanges,\n  OnChanges,\n  ChangeDetectorRef\n} from '@angular/core';\nimport { AfterViewInit } from '@angular/core';\nimport {MatTableDataSource, MatTable} from '@angular/material/table';\nimport {MatSort} from '@angular/material/sort';\nimport {MatPaginator, PageEvent} from '@angular/material/paginator';\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\nimport {animate, state, style, transition, trigger} from '@angular/animations';\nimport { BehaviorSubject, Observable } from 'rxjs';\n\n\nexport interface SdsRowConfig {\n  displayedColumns?: string[];\n  expandOnClick?: boolean;\n}\n\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\nexport interface SdsFooterRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\n@Component({\n  selector: 'sds-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() expandOnClick = false;\n}\n\n@Component({\n  selector: 'sds-header-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableHeaderRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Component({\n  selector: 'sds-footer-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableFooterRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Directive({selector: 'sds-table-headercell'})\nexport class SdsTableHeaderCellDirective {}\n\n@Directive({selector: 'sds-table-cell'})\nexport class SdsTableCellDirective {}\n\n@Directive({selector: 'sds-table-footercell'})\nexport class SdsTableFooterCellDirective {}\n\n@Component({\n  selector: 'sds-table-column',\n  template: `\n    <ng-template #columnHeaderCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n  `\n})\nexport class SdsTableColumnDefComponent implements AfterContentInit {\n\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\n\n  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;\n\n  @Input() sdsColumnName;\n\n  @Input() sticky = false;\n\n  @Input() stickyEnd = false;\n\n  @Input() sdsExpandedTemplate = false;\n\n  ngAfterContentInit() {}\n}\n\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss'],\n  animations: [\n    trigger('detailExpand', [\n      state('collapsed', style({height: '0px', minHeight: '0'})),\n      state('expanded', style({height: '*'})),\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\n    ]),\n  ]\n})\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\n\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * Borderless table\n   */\n  @Input()\n  set borderless(borderless: boolean) {\n    this._borderless = coerceBooleanProperty(borderless);\n  }\n  get borderless() {\n    return this._borderless;\n  }\n  private _borderless = false;\n\n\n  /**\n   * Sorting table\n   */\n\n  @Input() sort = 'false';\n\n  /**\n   * Sorting function override\n   */\n\n  @Input() sortFn: any;\n\n\n  /**\n   * Pagination table\n   */\n  @Input()\n  set pagination(pagination: boolean) {\n    this._pagination = coerceBooleanProperty(pagination);\n  }\n  get pagination() {\n    return this._pagination;\n  }\n  private _pagination = false;\n\n\n  /**\n   * Expansion table\n   */\n  @Input()\n  set expansion(expansion: boolean) {\n    this._expansion = coerceBooleanProperty(expansion);\n  }\n  get expansion() {\n    return this._expansion;\n  }\n  private _expansion = false;\n\n  dataSource: MatTableDataSource<any>;\n  expandedElement: any;\n\n  @ViewChild(MatTable) table: MatTable<any>;\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\n  @ViewChild(MatSort) matSort: MatSort;\n  @ViewChild(MatPaginator) matPaginator: MatPaginator;\n\n  rowConfig = {} as SdsRowConfig;\n  headerRowConfig = {} as SdsHeaderRowConfig;\n  footerRowConfig = {} as SdsFooterRowConfig;\n  pageEvent: PageEvent;\n\n  /* sds pagination */\n  top = { id: 'top' };\n  bottom = { id: 'bottom' };\n  page: any;\n  public pageChange = new BehaviorSubject<object>(this.page);\n  showPagination = false;\n  totalItems: number;\n\n  constructor(private changeDetectorRef: ChangeDetectorRef) {}\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.data.currentValue) {\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\n      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\n        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\n        this.dataSource.sort = this.matSort;\n      }\n      if(this.pagination) {\n        this.dataSource.paginator = this.matPaginator;\n        this.updateSdsPagination();\n      }\n    }\n  }\n\n  ngOnInit() {\n    this.dataSource = new MatTableDataSource(this.data);\n  }\n\n  ngAfterContentInit() {\n\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\n\n    if(this.sdsTableHeaderRowComponent) {\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\n    }\n\n    if(this.sdsTableFooterRowComponent) {\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\n    }\n\n    if(this.expansion) {\n      const expandedIndicator = \"expandedIndicator\";\n      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){\n        this.rowConfig.displayedColumns.push('expandedIndicator');\n      }\n    }\n  }\n\n  ngAfterViewInit() {\n    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\n      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\n      this.dataSource.sort = this.matSort;\n    }\n    if(this.pagination) {\n      this.dataSource.paginator = this.matPaginator;\n      this.dataSource.paginator.initialized.subscribe(\n        value => {\n          setTimeout(() => {\n            this.page = {\n              pageNumber: this.dataSource.paginator.pageIndex + 1,\n              pageSize: this.dataSource.paginator.pageSize,\n              totalPages: this.dataSource.paginator.getNumberOfPages()\n            }\n            this.totalItems = this.dataSource.data.length;\n            this.showPagination = true;\n            this.changeDetectorRef.detectChanges();\n          });\n        }\n      );\n\n      this.pageChange.subscribe(\n        value => {\n          this.updateSdsPagination();\n        }\n      );\n      this.changeDetectorRef.detectChanges();\n    }\n\n  }\n\n  typeOf(value) {\n    return typeof value;\n  }\n\n  isArray(obj : any ) {\n    return Array.isArray(obj)\n  }\n\n  updateSdsPagination() {\n    if(this.page) {\n      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;\n      this.dataSource.paginator._changePageSize(this.page.pageSize);\n      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);\n      this.totalItems = this.dataSource.data.length;\n      this.changeDetectorRef.detectChanges();\n    }\n  }\n\n  defaultSort(data, sortHeaderId) {\n    if (typeof data[sortHeaderId] === 'string') {\n      return data[sortHeaderId].toLocaleLowerCase();\n    }\n\n    return data[sortHeaderId];\n  };\n\n}\n",
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
            "id": "directive-SdsTableFooterCellDirective-4560d45fe5f509fca7bafc35b0ae70e8",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\n  Component,\n  Input,\n  OnInit,\n  ContentChild,\n  AfterContentInit,\n  ContentChildren,\n  QueryList,\n  ViewChild,\n  TemplateRef,\n  Directive,\n  SimpleChanges,\n  OnChanges,\n  ChangeDetectorRef\n} from '@angular/core';\nimport { AfterViewInit } from '@angular/core';\nimport {MatTableDataSource, MatTable} from '@angular/material/table';\nimport {MatSort} from '@angular/material/sort';\nimport {MatPaginator, PageEvent} from '@angular/material/paginator';\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\nimport {animate, state, style, transition, trigger} from '@angular/animations';\nimport { BehaviorSubject, Observable } from 'rxjs';\n\n\nexport interface SdsRowConfig {\n  displayedColumns?: string[];\n  expandOnClick?: boolean;\n}\n\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\nexport interface SdsFooterRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\n@Component({\n  selector: 'sds-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() expandOnClick = false;\n}\n\n@Component({\n  selector: 'sds-header-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableHeaderRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Component({\n  selector: 'sds-footer-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableFooterRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Directive({selector: 'sds-table-headercell'})\nexport class SdsTableHeaderCellDirective {}\n\n@Directive({selector: 'sds-table-cell'})\nexport class SdsTableCellDirective {}\n\n@Directive({selector: 'sds-table-footercell'})\nexport class SdsTableFooterCellDirective {}\n\n@Component({\n  selector: 'sds-table-column',\n  template: `\n    <ng-template #columnHeaderCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n  `\n})\nexport class SdsTableColumnDefComponent implements AfterContentInit {\n\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\n\n  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;\n\n  @Input() sdsColumnName;\n\n  @Input() sticky = false;\n\n  @Input() stickyEnd = false;\n\n  @Input() sdsExpandedTemplate = false;\n\n  ngAfterContentInit() {}\n}\n\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss'],\n  animations: [\n    trigger('detailExpand', [\n      state('collapsed', style({height: '0px', minHeight: '0'})),\n      state('expanded', style({height: '*'})),\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\n    ]),\n  ]\n})\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\n\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * Borderless table\n   */\n  @Input()\n  set borderless(borderless: boolean) {\n    this._borderless = coerceBooleanProperty(borderless);\n  }\n  get borderless() {\n    return this._borderless;\n  }\n  private _borderless = false;\n\n\n  /**\n   * Sorting table\n   */\n\n  @Input() sort = 'false';\n\n  /**\n   * Sorting function override\n   */\n\n  @Input() sortFn: any;\n\n\n  /**\n   * Pagination table\n   */\n  @Input()\n  set pagination(pagination: boolean) {\n    this._pagination = coerceBooleanProperty(pagination);\n  }\n  get pagination() {\n    return this._pagination;\n  }\n  private _pagination = false;\n\n\n  /**\n   * Expansion table\n   */\n  @Input()\n  set expansion(expansion: boolean) {\n    this._expansion = coerceBooleanProperty(expansion);\n  }\n  get expansion() {\n    return this._expansion;\n  }\n  private _expansion = false;\n\n  dataSource: MatTableDataSource<any>;\n  expandedElement: any;\n\n  @ViewChild(MatTable) table: MatTable<any>;\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\n  @ViewChild(MatSort) matSort: MatSort;\n  @ViewChild(MatPaginator) matPaginator: MatPaginator;\n\n  rowConfig = {} as SdsRowConfig;\n  headerRowConfig = {} as SdsHeaderRowConfig;\n  footerRowConfig = {} as SdsFooterRowConfig;\n  pageEvent: PageEvent;\n\n  /* sds pagination */\n  top = { id: 'top' };\n  bottom = { id: 'bottom' };\n  page: any;\n  public pageChange = new BehaviorSubject<object>(this.page);\n  showPagination = false;\n  totalItems: number;\n\n  constructor(private changeDetectorRef: ChangeDetectorRef) {}\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.data.currentValue) {\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\n      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\n        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\n        this.dataSource.sort = this.matSort;\n      }\n      if(this.pagination) {\n        this.dataSource.paginator = this.matPaginator;\n        this.updateSdsPagination();\n      }\n    }\n  }\n\n  ngOnInit() {\n    this.dataSource = new MatTableDataSource(this.data);\n  }\n\n  ngAfterContentInit() {\n\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\n\n    if(this.sdsTableHeaderRowComponent) {\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\n    }\n\n    if(this.sdsTableFooterRowComponent) {\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\n    }\n\n    if(this.expansion) {\n      const expandedIndicator = \"expandedIndicator\";\n      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){\n        this.rowConfig.displayedColumns.push('expandedIndicator');\n      }\n    }\n  }\n\n  ngAfterViewInit() {\n    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\n      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\n      this.dataSource.sort = this.matSort;\n    }\n    if(this.pagination) {\n      this.dataSource.paginator = this.matPaginator;\n      this.dataSource.paginator.initialized.subscribe(\n        value => {\n          setTimeout(() => {\n            this.page = {\n              pageNumber: this.dataSource.paginator.pageIndex + 1,\n              pageSize: this.dataSource.paginator.pageSize,\n              totalPages: this.dataSource.paginator.getNumberOfPages()\n            }\n            this.totalItems = this.dataSource.data.length;\n            this.showPagination = true;\n            this.changeDetectorRef.detectChanges();\n          });\n        }\n      );\n\n      this.pageChange.subscribe(\n        value => {\n          this.updateSdsPagination();\n        }\n      );\n      this.changeDetectorRef.detectChanges();\n    }\n\n  }\n\n  typeOf(value) {\n    return typeof value;\n  }\n\n  isArray(obj : any ) {\n    return Array.isArray(obj)\n  }\n\n  updateSdsPagination() {\n    if(this.page) {\n      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;\n      this.dataSource.paginator._changePageSize(this.page.pageSize);\n      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);\n      this.totalItems = this.dataSource.data.length;\n      this.changeDetectorRef.detectChanges();\n    }\n  }\n\n  defaultSort(data, sortHeaderId) {\n    if (typeof data[sortHeaderId] === 'string') {\n      return data[sortHeaderId].toLocaleLowerCase();\n    }\n\n    return data[sortHeaderId];\n  };\n\n}\n",
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
            "id": "directive-SdsTableHeaderCellDirective-4560d45fe5f509fca7bafc35b0ae70e8",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\n  Component,\n  Input,\n  OnInit,\n  ContentChild,\n  AfterContentInit,\n  ContentChildren,\n  QueryList,\n  ViewChild,\n  TemplateRef,\n  Directive,\n  SimpleChanges,\n  OnChanges,\n  ChangeDetectorRef\n} from '@angular/core';\nimport { AfterViewInit } from '@angular/core';\nimport {MatTableDataSource, MatTable} from '@angular/material/table';\nimport {MatSort} from '@angular/material/sort';\nimport {MatPaginator, PageEvent} from '@angular/material/paginator';\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\nimport {animate, state, style, transition, trigger} from '@angular/animations';\nimport { BehaviorSubject, Observable } from 'rxjs';\n\n\nexport interface SdsRowConfig {\n  displayedColumns?: string[];\n  expandOnClick?: boolean;\n}\n\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\nexport interface SdsFooterRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\n@Component({\n  selector: 'sds-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() expandOnClick = false;\n}\n\n@Component({\n  selector: 'sds-header-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableHeaderRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Component({\n  selector: 'sds-footer-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableFooterRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Directive({selector: 'sds-table-headercell'})\nexport class SdsTableHeaderCellDirective {}\n\n@Directive({selector: 'sds-table-cell'})\nexport class SdsTableCellDirective {}\n\n@Directive({selector: 'sds-table-footercell'})\nexport class SdsTableFooterCellDirective {}\n\n@Component({\n  selector: 'sds-table-column',\n  template: `\n    <ng-template #columnHeaderCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n  `\n})\nexport class SdsTableColumnDefComponent implements AfterContentInit {\n\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\n\n  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;\n\n  @Input() sdsColumnName;\n\n  @Input() sticky = false;\n\n  @Input() stickyEnd = false;\n\n  @Input() sdsExpandedTemplate = false;\n\n  ngAfterContentInit() {}\n}\n\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss'],\n  animations: [\n    trigger('detailExpand', [\n      state('collapsed', style({height: '0px', minHeight: '0'})),\n      state('expanded', style({height: '*'})),\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\n    ]),\n  ]\n})\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\n\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * Borderless table\n   */\n  @Input()\n  set borderless(borderless: boolean) {\n    this._borderless = coerceBooleanProperty(borderless);\n  }\n  get borderless() {\n    return this._borderless;\n  }\n  private _borderless = false;\n\n\n  /**\n   * Sorting table\n   */\n\n  @Input() sort = 'false';\n\n  /**\n   * Sorting function override\n   */\n\n  @Input() sortFn: any;\n\n\n  /**\n   * Pagination table\n   */\n  @Input()\n  set pagination(pagination: boolean) {\n    this._pagination = coerceBooleanProperty(pagination);\n  }\n  get pagination() {\n    return this._pagination;\n  }\n  private _pagination = false;\n\n\n  /**\n   * Expansion table\n   */\n  @Input()\n  set expansion(expansion: boolean) {\n    this._expansion = coerceBooleanProperty(expansion);\n  }\n  get expansion() {\n    return this._expansion;\n  }\n  private _expansion = false;\n\n  dataSource: MatTableDataSource<any>;\n  expandedElement: any;\n\n  @ViewChild(MatTable) table: MatTable<any>;\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\n  @ViewChild(MatSort) matSort: MatSort;\n  @ViewChild(MatPaginator) matPaginator: MatPaginator;\n\n  rowConfig = {} as SdsRowConfig;\n  headerRowConfig = {} as SdsHeaderRowConfig;\n  footerRowConfig = {} as SdsFooterRowConfig;\n  pageEvent: PageEvent;\n\n  /* sds pagination */\n  top = { id: 'top' };\n  bottom = { id: 'bottom' };\n  page: any;\n  public pageChange = new BehaviorSubject<object>(this.page);\n  showPagination = false;\n  totalItems: number;\n\n  constructor(private changeDetectorRef: ChangeDetectorRef) {}\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.data.currentValue) {\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\n      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\n        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\n        this.dataSource.sort = this.matSort;\n      }\n      if(this.pagination) {\n        this.dataSource.paginator = this.matPaginator;\n        this.updateSdsPagination();\n      }\n    }\n  }\n\n  ngOnInit() {\n    this.dataSource = new MatTableDataSource(this.data);\n  }\n\n  ngAfterContentInit() {\n\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\n\n    if(this.sdsTableHeaderRowComponent) {\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\n    }\n\n    if(this.sdsTableFooterRowComponent) {\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\n    }\n\n    if(this.expansion) {\n      const expandedIndicator = \"expandedIndicator\";\n      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){\n        this.rowConfig.displayedColumns.push('expandedIndicator');\n      }\n    }\n  }\n\n  ngAfterViewInit() {\n    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\n      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\n      this.dataSource.sort = this.matSort;\n    }\n    if(this.pagination) {\n      this.dataSource.paginator = this.matPaginator;\n      this.dataSource.paginator.initialized.subscribe(\n        value => {\n          setTimeout(() => {\n            this.page = {\n              pageNumber: this.dataSource.paginator.pageIndex + 1,\n              pageSize: this.dataSource.paginator.pageSize,\n              totalPages: this.dataSource.paginator.getNumberOfPages()\n            }\n            this.totalItems = this.dataSource.data.length;\n            this.showPagination = true;\n            this.changeDetectorRef.detectChanges();\n          });\n        }\n      );\n\n      this.pageChange.subscribe(\n        value => {\n          this.updateSdsPagination();\n        }\n      );\n      this.changeDetectorRef.detectChanges();\n    }\n\n  }\n\n  typeOf(value) {\n    return typeof value;\n  }\n\n  isArray(obj : any ) {\n    return Array.isArray(obj)\n  }\n\n  updateSdsPagination() {\n    if(this.page) {\n      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;\n      this.dataSource.paginator._changePageSize(this.page.pageSize);\n      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);\n      this.totalItems = this.dataSource.data.length;\n      this.changeDetectorRef.detectChanges();\n    }\n  }\n\n  defaultSort(data, sortHeaderId) {\n    if (typeof data[sortHeaderId] === 'string') {\n      return data[sortHeaderId].toLocaleLowerCase();\n    }\n\n    return data[sortHeaderId];\n  };\n\n}\n",
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
            "id": "component-SdsTableColumnDefComponent-4560d45fe5f509fca7bafc35b0ae70e8",
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
            "sourceCode": "import {\n  Component,\n  Input,\n  OnInit,\n  ContentChild,\n  AfterContentInit,\n  ContentChildren,\n  QueryList,\n  ViewChild,\n  TemplateRef,\n  Directive,\n  SimpleChanges,\n  OnChanges,\n  ChangeDetectorRef\n} from '@angular/core';\nimport { AfterViewInit } from '@angular/core';\nimport {MatTableDataSource, MatTable} from '@angular/material/table';\nimport {MatSort} from '@angular/material/sort';\nimport {MatPaginator, PageEvent} from '@angular/material/paginator';\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\nimport {animate, state, style, transition, trigger} from '@angular/animations';\nimport { BehaviorSubject, Observable } from 'rxjs';\n\n\nexport interface SdsRowConfig {\n  displayedColumns?: string[];\n  expandOnClick?: boolean;\n}\n\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\nexport interface SdsFooterRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\n@Component({\n  selector: 'sds-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() expandOnClick = false;\n}\n\n@Component({\n  selector: 'sds-header-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableHeaderRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Component({\n  selector: 'sds-footer-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableFooterRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Directive({selector: 'sds-table-headercell'})\nexport class SdsTableHeaderCellDirective {}\n\n@Directive({selector: 'sds-table-cell'})\nexport class SdsTableCellDirective {}\n\n@Directive({selector: 'sds-table-footercell'})\nexport class SdsTableFooterCellDirective {}\n\n@Component({\n  selector: 'sds-table-column',\n  template: `\n    <ng-template #columnHeaderCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n  `\n})\nexport class SdsTableColumnDefComponent implements AfterContentInit {\n\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\n\n  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;\n\n  @Input() sdsColumnName;\n\n  @Input() sticky = false;\n\n  @Input() stickyEnd = false;\n\n  @Input() sdsExpandedTemplate = false;\n\n  ngAfterContentInit() {}\n}\n\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss'],\n  animations: [\n    trigger('detailExpand', [\n      state('collapsed', style({height: '0px', minHeight: '0'})),\n      state('expanded', style({height: '*'})),\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\n    ]),\n  ]\n})\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\n\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * Borderless table\n   */\n  @Input()\n  set borderless(borderless: boolean) {\n    this._borderless = coerceBooleanProperty(borderless);\n  }\n  get borderless() {\n    return this._borderless;\n  }\n  private _borderless = false;\n\n\n  /**\n   * Sorting table\n   */\n\n  @Input() sort = 'false';\n\n  /**\n   * Sorting function override\n   */\n\n  @Input() sortFn: any;\n\n\n  /**\n   * Pagination table\n   */\n  @Input()\n  set pagination(pagination: boolean) {\n    this._pagination = coerceBooleanProperty(pagination);\n  }\n  get pagination() {\n    return this._pagination;\n  }\n  private _pagination = false;\n\n\n  /**\n   * Expansion table\n   */\n  @Input()\n  set expansion(expansion: boolean) {\n    this._expansion = coerceBooleanProperty(expansion);\n  }\n  get expansion() {\n    return this._expansion;\n  }\n  private _expansion = false;\n\n  dataSource: MatTableDataSource<any>;\n  expandedElement: any;\n\n  @ViewChild(MatTable) table: MatTable<any>;\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\n  @ViewChild(MatSort) matSort: MatSort;\n  @ViewChild(MatPaginator) matPaginator: MatPaginator;\n\n  rowConfig = {} as SdsRowConfig;\n  headerRowConfig = {} as SdsHeaderRowConfig;\n  footerRowConfig = {} as SdsFooterRowConfig;\n  pageEvent: PageEvent;\n\n  /* sds pagination */\n  top = { id: 'top' };\n  bottom = { id: 'bottom' };\n  page: any;\n  public pageChange = new BehaviorSubject<object>(this.page);\n  showPagination = false;\n  totalItems: number;\n\n  constructor(private changeDetectorRef: ChangeDetectorRef) {}\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.data.currentValue) {\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\n      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\n        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\n        this.dataSource.sort = this.matSort;\n      }\n      if(this.pagination) {\n        this.dataSource.paginator = this.matPaginator;\n        this.updateSdsPagination();\n      }\n    }\n  }\n\n  ngOnInit() {\n    this.dataSource = new MatTableDataSource(this.data);\n  }\n\n  ngAfterContentInit() {\n\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\n\n    if(this.sdsTableHeaderRowComponent) {\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\n    }\n\n    if(this.sdsTableFooterRowComponent) {\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\n    }\n\n    if(this.expansion) {\n      const expandedIndicator = \"expandedIndicator\";\n      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){\n        this.rowConfig.displayedColumns.push('expandedIndicator');\n      }\n    }\n  }\n\n  ngAfterViewInit() {\n    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\n      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\n      this.dataSource.sort = this.matSort;\n    }\n    if(this.pagination) {\n      this.dataSource.paginator = this.matPaginator;\n      this.dataSource.paginator.initialized.subscribe(\n        value => {\n          setTimeout(() => {\n            this.page = {\n              pageNumber: this.dataSource.paginator.pageIndex + 1,\n              pageSize: this.dataSource.paginator.pageSize,\n              totalPages: this.dataSource.paginator.getNumberOfPages()\n            }\n            this.totalItems = this.dataSource.data.length;\n            this.showPagination = true;\n            this.changeDetectorRef.detectChanges();\n          });\n        }\n      );\n\n      this.pageChange.subscribe(\n        value => {\n          this.updateSdsPagination();\n        }\n      );\n      this.changeDetectorRef.detectChanges();\n    }\n\n  }\n\n  typeOf(value) {\n    return typeof value;\n  }\n\n  isArray(obj : any ) {\n    return Array.isArray(obj)\n  }\n\n  updateSdsPagination() {\n    if(this.page) {\n      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;\n      this.dataSource.paginator._changePageSize(this.page.pageSize);\n      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);\n      this.totalItems = this.dataSource.data.length;\n      this.changeDetectorRef.detectChanges();\n    }\n  }\n\n  defaultSort(data, sortHeaderId) {\n    if (typeof data[sortHeaderId] === 'string') {\n      return data[sortHeaderId].toLocaleLowerCase();\n    }\n\n    return data[sortHeaderId];\n  };\n\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "implements": [
                "AfterContentInit"
            ]
        },
        {
            "name": "SdsTableComponent",
            "id": "component-SdsTableComponent-4560d45fe5f509fca7bafc35b0ae70e8",
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
            "sourceCode": "import {\n  Component,\n  Input,\n  OnInit,\n  ContentChild,\n  AfterContentInit,\n  ContentChildren,\n  QueryList,\n  ViewChild,\n  TemplateRef,\n  Directive,\n  SimpleChanges,\n  OnChanges,\n  ChangeDetectorRef\n} from '@angular/core';\nimport { AfterViewInit } from '@angular/core';\nimport {MatTableDataSource, MatTable} from '@angular/material/table';\nimport {MatSort} from '@angular/material/sort';\nimport {MatPaginator, PageEvent} from '@angular/material/paginator';\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\nimport {animate, state, style, transition, trigger} from '@angular/animations';\nimport { BehaviorSubject, Observable } from 'rxjs';\n\n\nexport interface SdsRowConfig {\n  displayedColumns?: string[];\n  expandOnClick?: boolean;\n}\n\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\nexport interface SdsFooterRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\n@Component({\n  selector: 'sds-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() expandOnClick = false;\n}\n\n@Component({\n  selector: 'sds-header-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableHeaderRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Component({\n  selector: 'sds-footer-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableFooterRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Directive({selector: 'sds-table-headercell'})\nexport class SdsTableHeaderCellDirective {}\n\n@Directive({selector: 'sds-table-cell'})\nexport class SdsTableCellDirective {}\n\n@Directive({selector: 'sds-table-footercell'})\nexport class SdsTableFooterCellDirective {}\n\n@Component({\n  selector: 'sds-table-column',\n  template: `\n    <ng-template #columnHeaderCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n  `\n})\nexport class SdsTableColumnDefComponent implements AfterContentInit {\n\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\n\n  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;\n\n  @Input() sdsColumnName;\n\n  @Input() sticky = false;\n\n  @Input() stickyEnd = false;\n\n  @Input() sdsExpandedTemplate = false;\n\n  ngAfterContentInit() {}\n}\n\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss'],\n  animations: [\n    trigger('detailExpand', [\n      state('collapsed', style({height: '0px', minHeight: '0'})),\n      state('expanded', style({height: '*'})),\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\n    ]),\n  ]\n})\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\n\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * Borderless table\n   */\n  @Input()\n  set borderless(borderless: boolean) {\n    this._borderless = coerceBooleanProperty(borderless);\n  }\n  get borderless() {\n    return this._borderless;\n  }\n  private _borderless = false;\n\n\n  /**\n   * Sorting table\n   */\n\n  @Input() sort = 'false';\n\n  /**\n   * Sorting function override\n   */\n\n  @Input() sortFn: any;\n\n\n  /**\n   * Pagination table\n   */\n  @Input()\n  set pagination(pagination: boolean) {\n    this._pagination = coerceBooleanProperty(pagination);\n  }\n  get pagination() {\n    return this._pagination;\n  }\n  private _pagination = false;\n\n\n  /**\n   * Expansion table\n   */\n  @Input()\n  set expansion(expansion: boolean) {\n    this._expansion = coerceBooleanProperty(expansion);\n  }\n  get expansion() {\n    return this._expansion;\n  }\n  private _expansion = false;\n\n  dataSource: MatTableDataSource<any>;\n  expandedElement: any;\n\n  @ViewChild(MatTable) table: MatTable<any>;\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\n  @ViewChild(MatSort) matSort: MatSort;\n  @ViewChild(MatPaginator) matPaginator: MatPaginator;\n\n  rowConfig = {} as SdsRowConfig;\n  headerRowConfig = {} as SdsHeaderRowConfig;\n  footerRowConfig = {} as SdsFooterRowConfig;\n  pageEvent: PageEvent;\n\n  /* sds pagination */\n  top = { id: 'top' };\n  bottom = { id: 'bottom' };\n  page: any;\n  public pageChange = new BehaviorSubject<object>(this.page);\n  showPagination = false;\n  totalItems: number;\n\n  constructor(private changeDetectorRef: ChangeDetectorRef) {}\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.data.currentValue) {\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\n      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\n        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\n        this.dataSource.sort = this.matSort;\n      }\n      if(this.pagination) {\n        this.dataSource.paginator = this.matPaginator;\n        this.updateSdsPagination();\n      }\n    }\n  }\n\n  ngOnInit() {\n    this.dataSource = new MatTableDataSource(this.data);\n  }\n\n  ngAfterContentInit() {\n\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\n\n    if(this.sdsTableHeaderRowComponent) {\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\n    }\n\n    if(this.sdsTableFooterRowComponent) {\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\n    }\n\n    if(this.expansion) {\n      const expandedIndicator = \"expandedIndicator\";\n      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){\n        this.rowConfig.displayedColumns.push('expandedIndicator');\n      }\n    }\n  }\n\n  ngAfterViewInit() {\n    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\n      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\n      this.dataSource.sort = this.matSort;\n    }\n    if(this.pagination) {\n      this.dataSource.paginator = this.matPaginator;\n      this.dataSource.paginator.initialized.subscribe(\n        value => {\n          setTimeout(() => {\n            this.page = {\n              pageNumber: this.dataSource.paginator.pageIndex + 1,\n              pageSize: this.dataSource.paginator.pageSize,\n              totalPages: this.dataSource.paginator.getNumberOfPages()\n            }\n            this.totalItems = this.dataSource.data.length;\n            this.showPagination = true;\n            this.changeDetectorRef.detectChanges();\n          });\n        }\n      );\n\n      this.pageChange.subscribe(\n        value => {\n          this.updateSdsPagination();\n        }\n      );\n      this.changeDetectorRef.detectChanges();\n    }\n\n  }\n\n  typeOf(value) {\n    return typeof value;\n  }\n\n  isArray(obj : any ) {\n    return Array.isArray(obj)\n  }\n\n  updateSdsPagination() {\n    if(this.page) {\n      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;\n      this.dataSource.paginator._changePageSize(this.page.pageSize);\n      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);\n      this.totalItems = this.dataSource.data.length;\n      this.changeDetectorRef.detectChanges();\n    }\n  }\n\n  defaultSort(data, sortHeaderId) {\n    if (typeof data[sortHeaderId] === 'string') {\n      return data[sortHeaderId].toLocaleLowerCase();\n    }\n\n    return data[sortHeaderId];\n  };\n\n}\n",
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
            "templateData": "<div class=\"margin-y-05\" *ngIf=\"pagination && showPagination\">\n  <sds-pagination [displayMode]=\"'results'\" [paginationConfiguration]=\"top\" [(page)]=\"page\" [totalItems]=\"totalItems\"></sds-pagination>\n</div>\n\n<div class=\"sds-table__container\" [ngClass]=\"{ 'sds-table__container--borderless': borderless }\">\n  <table mat-table [dataSource]=\"dataSource\" class=\"sds-table width-full mat-elevation-z8\" matSort multiTemplateDataRows [ngClass]=\"{ 'sds-table--expansion': expansion }\">\n\n    <ng-container *ngFor=\"let sdsColumnItem of sdsColumnItems\">\n      <ng-container *ngIf=\"!sdsColumnItem.sdsExpandedTemplate\" matColumnDef=\"{{sdsColumnItem.sdsColumnName}}\" [sticky]=\"sdsColumnItem.sticky\" [stickyEnd]=\"sdsColumnItem.stickyEnd\">\n        <ng-container *ngIf=\"(sort==='true' || sort==='') || ((typeOf(sort) === 'object') && isArray(sort) && sort.includes(sdsColumnItem.sdsColumnName)) else basicColumn\">\n          <th mat-header-cell *matHeaderCellDef scope=\"col\" mat-sort-header><ng-container *ngTemplateOutlet=\"sdsColumnItem.columnHeaderCell\"></ng-container></th>\n        </ng-container>\n        <ng-template #basicColumn>\n          <ng-container>\n            <th mat-header-cell *matHeaderCellDef scope=\"col\"><ng-container *ngTemplateOutlet=\"sdsColumnItem.columnHeaderCell\"></ng-container></th>\n          </ng-container>\n        </ng-template>\n        <td mat-cell *matCellDef=\"let element\"><ng-container *ngTemplateOutlet=\"sdsColumnItem.columnCell; context: {element : element}\"></ng-container></td>\n        <ng-container *ngIf=\"sdsColumnItem.footerCellTemplate\" >\n          <th mat-footer-cell *matFooterCellDef scope=\"col\"><ng-container *ngTemplateOutlet=\"sdsColumnItem.columnFooterCell\"></ng-container></th>\n        </ng-container>\n        <ng-container *ngIf=\"!sdsColumnItem.footerCellTemplate\" >\n          <td mat-footer-cell *matFooterCellDef scope=\"col\"></td>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n\n    <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n    <ng-container *ngIf=\"expansion\">\n      <ng-container *ngFor=\"let sdsColumnItem of sdsColumnItems\">\n        <ng-container *ngIf=\"sdsColumnItem.sdsExpandedTemplate\"  matColumnDef=\"{{sdsColumnItem.sdsColumnName}}\">\n          <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"rowConfig.displayedColumns.length\" class=\"sds-table__cell--detail\">\n            <div class=\"sds-table__cell__expanded-wrapper\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n              <ng-container *ngTemplateOutlet=\"sdsColumnItem.columnCell; context: {element : element}\"></ng-container>\n            </div>\n          </td>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n\n    <ng-container *ngIf=\"expansion\" matColumnDef=\"expandedIndicator\">\n      <td mat-header-cell *matHeaderCellDef></td>\n      <td mat-cell *matCellDef=\"let element\"\n        class=\"cursor-pointer\"\n        (click)=\"!rowConfig.expandOnClick ? (expandedElement = expandedElement === element ? null : element) : false\"\n      >\n        <fa-icon *ngIf=\"element == expandedElement\" [icon]=\"['fas', 'chevron-up']\" size=\"sm\"></fa-icon>\n        <fa-icon *ngIf=\"element != expandedElement\" [icon]=\"['fas', 'chevron-down']\" size=\"sm\"></fa-icon>\n      </td>\n      <td mat-footer-cell *matFooterCellDef></td>\n    </ng-container>\n\n    <ng-container *ngIf=\"headerRowConfig && headerRowConfig.displayedColumns\">\n      <tr mat-header-row *matHeaderRowDef=\"headerRowConfig.displayedColumns; sticky: headerRowConfig.sticky\"></tr>\n    </ng-container>\n\n    <tr mat-row *matRowDef=\"let row; columns: rowConfig.displayedColumns;\"\n      class=\"sds-table__row\"\n      [ngClass]=\"{ 'cursor-pointer': rowConfig.expandOnClick, 'sds-table__row--expanded': expandedElement == row }\"\n      (click)=\"rowConfig.expandOnClick ? (expandedElement = expandedElement === row ? null : row) : false\"\n    ></tr>\n\n    <ng-container *ngIf=\"expansion\">\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"sds-table__row--detail\"></tr>\n    </ng-container>\n\n    <ng-container *ngIf=\"footerRowConfig && footerRowConfig.displayedColumns\">\n      <tr mat-footer-row *matFooterRowDef=\"footerRowConfig.displayedColumns; sticky: footerRowConfig.sticky\"></tr>\n    </ng-container>\n\n  </table>\n\n  <div [hidden]=\"true\">\n    <ng-container *ngIf=\"pagination\">\n      <mat-paginator [pageSizeOptions]=\"[25, 50, 100]\" showFirstLastButtons (page)=\"pageEvent = $event\"></mat-paginator>\n    </ng-container>\n  </div>\n</div>\n\n<div *ngIf=\"pagination && showPagination\">\n  <sds-pagination [paginationConfiguration]=\"bottom\" [(page)]=\"page\" (pageChange)=\"pageChange.next($event)\" (initialized)=\"pageChange.next($event)\"></sds-pagination>\n</div>\n\n"
        },
        {
            "name": "SdsTableFooterRowComponent",
            "id": "component-SdsTableFooterRowComponent-4560d45fe5f509fca7bafc35b0ae70e8",
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
            "sourceCode": "import {\n  Component,\n  Input,\n  OnInit,\n  ContentChild,\n  AfterContentInit,\n  ContentChildren,\n  QueryList,\n  ViewChild,\n  TemplateRef,\n  Directive,\n  SimpleChanges,\n  OnChanges,\n  ChangeDetectorRef\n} from '@angular/core';\nimport { AfterViewInit } from '@angular/core';\nimport {MatTableDataSource, MatTable} from '@angular/material/table';\nimport {MatSort} from '@angular/material/sort';\nimport {MatPaginator, PageEvent} from '@angular/material/paginator';\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\nimport {animate, state, style, transition, trigger} from '@angular/animations';\nimport { BehaviorSubject, Observable } from 'rxjs';\n\n\nexport interface SdsRowConfig {\n  displayedColumns?: string[];\n  expandOnClick?: boolean;\n}\n\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\nexport interface SdsFooterRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\n@Component({\n  selector: 'sds-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() expandOnClick = false;\n}\n\n@Component({\n  selector: 'sds-header-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableHeaderRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Component({\n  selector: 'sds-footer-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableFooterRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Directive({selector: 'sds-table-headercell'})\nexport class SdsTableHeaderCellDirective {}\n\n@Directive({selector: 'sds-table-cell'})\nexport class SdsTableCellDirective {}\n\n@Directive({selector: 'sds-table-footercell'})\nexport class SdsTableFooterCellDirective {}\n\n@Component({\n  selector: 'sds-table-column',\n  template: `\n    <ng-template #columnHeaderCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n  `\n})\nexport class SdsTableColumnDefComponent implements AfterContentInit {\n\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\n\n  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;\n\n  @Input() sdsColumnName;\n\n  @Input() sticky = false;\n\n  @Input() stickyEnd = false;\n\n  @Input() sdsExpandedTemplate = false;\n\n  ngAfterContentInit() {}\n}\n\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss'],\n  animations: [\n    trigger('detailExpand', [\n      state('collapsed', style({height: '0px', minHeight: '0'})),\n      state('expanded', style({height: '*'})),\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\n    ]),\n  ]\n})\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\n\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * Borderless table\n   */\n  @Input()\n  set borderless(borderless: boolean) {\n    this._borderless = coerceBooleanProperty(borderless);\n  }\n  get borderless() {\n    return this._borderless;\n  }\n  private _borderless = false;\n\n\n  /**\n   * Sorting table\n   */\n\n  @Input() sort = 'false';\n\n  /**\n   * Sorting function override\n   */\n\n  @Input() sortFn: any;\n\n\n  /**\n   * Pagination table\n   */\n  @Input()\n  set pagination(pagination: boolean) {\n    this._pagination = coerceBooleanProperty(pagination);\n  }\n  get pagination() {\n    return this._pagination;\n  }\n  private _pagination = false;\n\n\n  /**\n   * Expansion table\n   */\n  @Input()\n  set expansion(expansion: boolean) {\n    this._expansion = coerceBooleanProperty(expansion);\n  }\n  get expansion() {\n    return this._expansion;\n  }\n  private _expansion = false;\n\n  dataSource: MatTableDataSource<any>;\n  expandedElement: any;\n\n  @ViewChild(MatTable) table: MatTable<any>;\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\n  @ViewChild(MatSort) matSort: MatSort;\n  @ViewChild(MatPaginator) matPaginator: MatPaginator;\n\n  rowConfig = {} as SdsRowConfig;\n  headerRowConfig = {} as SdsHeaderRowConfig;\n  footerRowConfig = {} as SdsFooterRowConfig;\n  pageEvent: PageEvent;\n\n  /* sds pagination */\n  top = { id: 'top' };\n  bottom = { id: 'bottom' };\n  page: any;\n  public pageChange = new BehaviorSubject<object>(this.page);\n  showPagination = false;\n  totalItems: number;\n\n  constructor(private changeDetectorRef: ChangeDetectorRef) {}\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.data.currentValue) {\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\n      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\n        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\n        this.dataSource.sort = this.matSort;\n      }\n      if(this.pagination) {\n        this.dataSource.paginator = this.matPaginator;\n        this.updateSdsPagination();\n      }\n    }\n  }\n\n  ngOnInit() {\n    this.dataSource = new MatTableDataSource(this.data);\n  }\n\n  ngAfterContentInit() {\n\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\n\n    if(this.sdsTableHeaderRowComponent) {\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\n    }\n\n    if(this.sdsTableFooterRowComponent) {\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\n    }\n\n    if(this.expansion) {\n      const expandedIndicator = \"expandedIndicator\";\n      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){\n        this.rowConfig.displayedColumns.push('expandedIndicator');\n      }\n    }\n  }\n\n  ngAfterViewInit() {\n    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\n      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\n      this.dataSource.sort = this.matSort;\n    }\n    if(this.pagination) {\n      this.dataSource.paginator = this.matPaginator;\n      this.dataSource.paginator.initialized.subscribe(\n        value => {\n          setTimeout(() => {\n            this.page = {\n              pageNumber: this.dataSource.paginator.pageIndex + 1,\n              pageSize: this.dataSource.paginator.pageSize,\n              totalPages: this.dataSource.paginator.getNumberOfPages()\n            }\n            this.totalItems = this.dataSource.data.length;\n            this.showPagination = true;\n            this.changeDetectorRef.detectChanges();\n          });\n        }\n      );\n\n      this.pageChange.subscribe(\n        value => {\n          this.updateSdsPagination();\n        }\n      );\n      this.changeDetectorRef.detectChanges();\n    }\n\n  }\n\n  typeOf(value) {\n    return typeof value;\n  }\n\n  isArray(obj : any ) {\n    return Array.isArray(obj)\n  }\n\n  updateSdsPagination() {\n    if(this.page) {\n      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;\n      this.dataSource.paginator._changePageSize(this.page.pageSize);\n      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);\n      this.totalItems = this.dataSource.data.length;\n      this.changeDetectorRef.detectChanges();\n    }\n  }\n\n  defaultSort(data, sortHeaderId) {\n    if (typeof data[sortHeaderId] === 'string') {\n      return data[sortHeaderId].toLocaleLowerCase();\n    }\n\n    return data[sortHeaderId];\n  };\n\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": ""
        },
        {
            "name": "SdsTableHeaderRowComponent",
            "id": "component-SdsTableHeaderRowComponent-4560d45fe5f509fca7bafc35b0ae70e8",
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
            "sourceCode": "import {\n  Component,\n  Input,\n  OnInit,\n  ContentChild,\n  AfterContentInit,\n  ContentChildren,\n  QueryList,\n  ViewChild,\n  TemplateRef,\n  Directive,\n  SimpleChanges,\n  OnChanges,\n  ChangeDetectorRef\n} from '@angular/core';\nimport { AfterViewInit } from '@angular/core';\nimport {MatTableDataSource, MatTable} from '@angular/material/table';\nimport {MatSort} from '@angular/material/sort';\nimport {MatPaginator, PageEvent} from '@angular/material/paginator';\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\nimport {animate, state, style, transition, trigger} from '@angular/animations';\nimport { BehaviorSubject, Observable } from 'rxjs';\n\n\nexport interface SdsRowConfig {\n  displayedColumns?: string[];\n  expandOnClick?: boolean;\n}\n\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\nexport interface SdsFooterRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\n@Component({\n  selector: 'sds-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() expandOnClick = false;\n}\n\n@Component({\n  selector: 'sds-header-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableHeaderRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Component({\n  selector: 'sds-footer-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableFooterRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Directive({selector: 'sds-table-headercell'})\nexport class SdsTableHeaderCellDirective {}\n\n@Directive({selector: 'sds-table-cell'})\nexport class SdsTableCellDirective {}\n\n@Directive({selector: 'sds-table-footercell'})\nexport class SdsTableFooterCellDirective {}\n\n@Component({\n  selector: 'sds-table-column',\n  template: `\n    <ng-template #columnHeaderCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n  `\n})\nexport class SdsTableColumnDefComponent implements AfterContentInit {\n\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\n\n  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;\n\n  @Input() sdsColumnName;\n\n  @Input() sticky = false;\n\n  @Input() stickyEnd = false;\n\n  @Input() sdsExpandedTemplate = false;\n\n  ngAfterContentInit() {}\n}\n\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss'],\n  animations: [\n    trigger('detailExpand', [\n      state('collapsed', style({height: '0px', minHeight: '0'})),\n      state('expanded', style({height: '*'})),\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\n    ]),\n  ]\n})\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\n\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * Borderless table\n   */\n  @Input()\n  set borderless(borderless: boolean) {\n    this._borderless = coerceBooleanProperty(borderless);\n  }\n  get borderless() {\n    return this._borderless;\n  }\n  private _borderless = false;\n\n\n  /**\n   * Sorting table\n   */\n\n  @Input() sort = 'false';\n\n  /**\n   * Sorting function override\n   */\n\n  @Input() sortFn: any;\n\n\n  /**\n   * Pagination table\n   */\n  @Input()\n  set pagination(pagination: boolean) {\n    this._pagination = coerceBooleanProperty(pagination);\n  }\n  get pagination() {\n    return this._pagination;\n  }\n  private _pagination = false;\n\n\n  /**\n   * Expansion table\n   */\n  @Input()\n  set expansion(expansion: boolean) {\n    this._expansion = coerceBooleanProperty(expansion);\n  }\n  get expansion() {\n    return this._expansion;\n  }\n  private _expansion = false;\n\n  dataSource: MatTableDataSource<any>;\n  expandedElement: any;\n\n  @ViewChild(MatTable) table: MatTable<any>;\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\n  @ViewChild(MatSort) matSort: MatSort;\n  @ViewChild(MatPaginator) matPaginator: MatPaginator;\n\n  rowConfig = {} as SdsRowConfig;\n  headerRowConfig = {} as SdsHeaderRowConfig;\n  footerRowConfig = {} as SdsFooterRowConfig;\n  pageEvent: PageEvent;\n\n  /* sds pagination */\n  top = { id: 'top' };\n  bottom = { id: 'bottom' };\n  page: any;\n  public pageChange = new BehaviorSubject<object>(this.page);\n  showPagination = false;\n  totalItems: number;\n\n  constructor(private changeDetectorRef: ChangeDetectorRef) {}\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.data.currentValue) {\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\n      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\n        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\n        this.dataSource.sort = this.matSort;\n      }\n      if(this.pagination) {\n        this.dataSource.paginator = this.matPaginator;\n        this.updateSdsPagination();\n      }\n    }\n  }\n\n  ngOnInit() {\n    this.dataSource = new MatTableDataSource(this.data);\n  }\n\n  ngAfterContentInit() {\n\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\n\n    if(this.sdsTableHeaderRowComponent) {\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\n    }\n\n    if(this.sdsTableFooterRowComponent) {\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\n    }\n\n    if(this.expansion) {\n      const expandedIndicator = \"expandedIndicator\";\n      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){\n        this.rowConfig.displayedColumns.push('expandedIndicator');\n      }\n    }\n  }\n\n  ngAfterViewInit() {\n    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\n      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\n      this.dataSource.sort = this.matSort;\n    }\n    if(this.pagination) {\n      this.dataSource.paginator = this.matPaginator;\n      this.dataSource.paginator.initialized.subscribe(\n        value => {\n          setTimeout(() => {\n            this.page = {\n              pageNumber: this.dataSource.paginator.pageIndex + 1,\n              pageSize: this.dataSource.paginator.pageSize,\n              totalPages: this.dataSource.paginator.getNumberOfPages()\n            }\n            this.totalItems = this.dataSource.data.length;\n            this.showPagination = true;\n            this.changeDetectorRef.detectChanges();\n          });\n        }\n      );\n\n      this.pageChange.subscribe(\n        value => {\n          this.updateSdsPagination();\n        }\n      );\n      this.changeDetectorRef.detectChanges();\n    }\n\n  }\n\n  typeOf(value) {\n    return typeof value;\n  }\n\n  isArray(obj : any ) {\n    return Array.isArray(obj)\n  }\n\n  updateSdsPagination() {\n    if(this.page) {\n      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;\n      this.dataSource.paginator._changePageSize(this.page.pageSize);\n      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);\n      this.totalItems = this.dataSource.data.length;\n      this.changeDetectorRef.detectChanges();\n    }\n  }\n\n  defaultSort(data, sortHeaderId) {\n    if (typeof data[sortHeaderId] === 'string') {\n      return data[sortHeaderId].toLocaleLowerCase();\n    }\n\n    return data[sortHeaderId];\n  };\n\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": ""
        },
        {
            "name": "SdsTableRowComponent",
            "id": "component-SdsTableRowComponent-4560d45fe5f509fca7bafc35b0ae70e8",
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
            "sourceCode": "import {\n  Component,\n  Input,\n  OnInit,\n  ContentChild,\n  AfterContentInit,\n  ContentChildren,\n  QueryList,\n  ViewChild,\n  TemplateRef,\n  Directive,\n  SimpleChanges,\n  OnChanges,\n  ChangeDetectorRef\n} from '@angular/core';\nimport { AfterViewInit } from '@angular/core';\nimport {MatTableDataSource, MatTable} from '@angular/material/table';\nimport {MatSort} from '@angular/material/sort';\nimport {MatPaginator, PageEvent} from '@angular/material/paginator';\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\nimport {animate, state, style, transition, trigger} from '@angular/animations';\nimport { BehaviorSubject, Observable } from 'rxjs';\n\n\nexport interface SdsRowConfig {\n  displayedColumns?: string[];\n  expandOnClick?: boolean;\n}\n\nexport interface SdsHeaderRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\nexport interface SdsFooterRowConfig extends SdsRowConfig {\n  sticky?: boolean;\n}\n\n@Component({\n  selector: 'sds-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() expandOnClick = false;\n}\n\n@Component({\n  selector: 'sds-header-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableHeaderRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Component({\n  selector: 'sds-footer-row',\n  template: `\n    <ng-content></ng-content>\n  `\n})\nexport class SdsTableFooterRowComponent {\n  @Input() displayedColumns: Array<string>;\n  @Input() sticky: boolean;\n}\n\n@Directive({selector: 'sds-table-headercell'})\nexport class SdsTableHeaderCellDirective {}\n\n@Directive({selector: 'sds-table-cell'})\nexport class SdsTableCellDirective {}\n\n@Directive({selector: 'sds-table-footercell'})\nexport class SdsTableFooterCellDirective {}\n\n@Component({\n  selector: 'sds-table-column',\n  template: `\n    <ng-template #columnHeaderCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"headerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"cellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n\n    <ng-template #columnFooterCell let-element=\"element\">\n      <ng-container *ngTemplateOutlet=\"footerCellTemplate; context: {element : element}\"></ng-container>\n    </ng-template>\n  `\n})\nexport class SdsTableColumnDefComponent implements AfterContentInit {\n\n  @ViewChild('columnHeaderCell') columnHeaderCell: TemplateRef<any>;\n  @ViewChild('columnCell') columnCell: TemplateRef<any>;\n  @ViewChild('columnFooterCell') columnFooterCell: TemplateRef<any>;\n\n  @ContentChild('sdsHeaderCell', {read: TemplateRef}) headerCellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsCell', {read: TemplateRef}) cellTemplate!: TemplateRef<any>;\n  @ContentChild('sdsFooterCell', {read: TemplateRef}) footerCellTemplate!: TemplateRef<any>;\n\n  @Input() sdsColumnName;\n\n  @Input() sticky = false;\n\n  @Input() stickyEnd = false;\n\n  @Input() sdsExpandedTemplate = false;\n\n  ngAfterContentInit() {}\n}\n\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss'],\n  animations: [\n    trigger('detailExpand', [\n      state('collapsed', style({height: '0px', minHeight: '0'})),\n      state('expanded', style({height: '*'})),\n      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),\n    ]),\n  ]\n})\nexport class SdsTableComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {\n\n  /**\n   * Data for table\n   */\n  @Input() data;\n\n  /**\n   * Borderless table\n   */\n  @Input()\n  set borderless(borderless: boolean) {\n    this._borderless = coerceBooleanProperty(borderless);\n  }\n  get borderless() {\n    return this._borderless;\n  }\n  private _borderless = false;\n\n\n  /**\n   * Sorting table\n   */\n\n  @Input() sort = 'false';\n\n  /**\n   * Sorting function override\n   */\n\n  @Input() sortFn: any;\n\n\n  /**\n   * Pagination table\n   */\n  @Input()\n  set pagination(pagination: boolean) {\n    this._pagination = coerceBooleanProperty(pagination);\n  }\n  get pagination() {\n    return this._pagination;\n  }\n  private _pagination = false;\n\n\n  /**\n   * Expansion table\n   */\n  @Input()\n  set expansion(expansion: boolean) {\n    this._expansion = coerceBooleanProperty(expansion);\n  }\n  get expansion() {\n    return this._expansion;\n  }\n  private _expansion = false;\n\n  dataSource: MatTableDataSource<any>;\n  expandedElement: any;\n\n  @ViewChild(MatTable) table: MatTable<any>;\n  @ContentChild(SdsTableRowComponent) sdsTableRowComponent: SdsTableRowComponent;\n  @ContentChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;\n  @ContentChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;\n  @ContentChildren(SdsTableColumnDefComponent, { descendants: true }) sdsColumnItems!: QueryList<SdsTableColumnDefComponent>;\n  @ViewChild(MatSort) matSort: MatSort;\n  @ViewChild(MatPaginator) matPaginator: MatPaginator;\n\n  rowConfig = {} as SdsRowConfig;\n  headerRowConfig = {} as SdsHeaderRowConfig;\n  footerRowConfig = {} as SdsFooterRowConfig;\n  pageEvent: PageEvent;\n\n  /* sds pagination */\n  top = { id: 'top' };\n  bottom = { id: 'bottom' };\n  page: any;\n  public pageChange = new BehaviorSubject<object>(this.page);\n  showPagination = false;\n  totalItems: number;\n\n  constructor(private changeDetectorRef: ChangeDetectorRef) {}\n\n  ngOnChanges(changes: SimpleChanges) {\n    if (changes.data.currentValue) {\n      this.dataSource = new MatTableDataSource(changes.data.currentValue);\n      if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\n        this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\n        this.dataSource.sort = this.matSort;\n      }\n      if(this.pagination) {\n        this.dataSource.paginator = this.matPaginator;\n        this.updateSdsPagination();\n      }\n    }\n  }\n\n  ngOnInit() {\n    this.dataSource = new MatTableDataSource(this.data);\n  }\n\n  ngAfterContentInit() {\n\n    this.rowConfig.displayedColumns = this.sdsTableRowComponent.displayedColumns;\n    this.rowConfig.expandOnClick = this.sdsTableRowComponent.expandOnClick;\n\n    if(this.sdsTableHeaderRowComponent) {\n      this.headerRowConfig.displayedColumns = this.sdsTableHeaderRowComponent.displayedColumns;\n      this.headerRowConfig.sticky = this.sdsTableHeaderRowComponent.sticky;\n    }\n\n    if(this.sdsTableFooterRowComponent) {\n      this.footerRowConfig.displayedColumns = this.sdsTableFooterRowComponent.displayedColumns;\n      this.footerRowConfig.sticky = this.sdsTableFooterRowComponent.sticky;\n    }\n\n    if(this.expansion) {\n      const expandedIndicator = \"expandedIndicator\";\n      if(this.rowConfig.displayedColumns && !this.rowConfig.displayedColumns.includes(expandedIndicator)){\n        this.rowConfig.displayedColumns.push('expandedIndicator');\n      }\n    }\n  }\n\n  ngAfterViewInit() {\n    if(this.sort === 'true' || this.sort === '' || this.isArray(this.sort)) {\n      this.dataSource.sortingDataAccessor = this.sortFn ? this.sortFn : this.defaultSort;\n      this.dataSource.sort = this.matSort;\n    }\n    if(this.pagination) {\n      this.dataSource.paginator = this.matPaginator;\n      this.dataSource.paginator.initialized.subscribe(\n        value => {\n          setTimeout(() => {\n            this.page = {\n              pageNumber: this.dataSource.paginator.pageIndex + 1,\n              pageSize: this.dataSource.paginator.pageSize,\n              totalPages: this.dataSource.paginator.getNumberOfPages()\n            }\n            this.totalItems = this.dataSource.data.length;\n            this.showPagination = true;\n            this.changeDetectorRef.detectChanges();\n          });\n        }\n      );\n\n      this.pageChange.subscribe(\n        value => {\n          this.updateSdsPagination();\n        }\n      );\n      this.changeDetectorRef.detectChanges();\n    }\n\n  }\n\n  typeOf(value) {\n    return typeof value;\n  }\n\n  isArray(obj : any ) {\n    return Array.isArray(obj)\n  }\n\n  updateSdsPagination() {\n    if(this.page) {\n      this.dataSource.paginator.pageIndex = this.page.pageNumber - 1;\n      this.dataSource.paginator._changePageSize(this.page.pageSize);\n      this.page.totalPages = Math.ceil(this.dataSource.data.length / this.page.pageSize);\n      this.totalItems = this.dataSource.data.length;\n      this.changeDetectorRef.detectChanges();\n    }\n  }\n\n  defaultSort(data, sortHeaderId) {\n    if (typeof data[sortHeaderId] === 'string') {\n      return data[sortHeaderId].toLocaleLowerCase();\n    }\n\n    return data[sortHeaderId];\n  };\n\n}\n",
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
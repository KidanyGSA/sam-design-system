const COMPONENTS = {
    "pipes": [],
    "interfaces": [
        {
            "name": "DialogPosition",
            "id": "interface-DialogPosition-175f949f0e7cf719ceefefa33cd1f398",
            "file": "libs/packages/components/src/lib/dialog/dialog-config.ts",
            "type": "interface",
            "sourceCode": "import {ViewContainerRef} from '@angular/core';\r\nimport {Direction} from '@angular/cdk/bidi';\r\nimport {ScrollStrategy} from '@angular/cdk/overlay';\r\n\r\n/** Valid ARIA roles for a dialog element. */\r\nexport type DialogRole = 'dialog' | 'alertdialog';\r\n\r\n/** Possible overrides for a dialog's position. */\r\nexport interface DialogPosition {\r\n  /** Override for the dialog's top position. */\r\n  top?: string;\r\n\r\n  /** Override for the dialog's bottom position. */\r\n  bottom?: string;\r\n\r\n  /** Override for the dialog's left position. */\r\n  left?: string;\r\n\r\n  /** Override for the dialog's right position. */\r\n  right?: string;\r\n}\r\n\r\n/**\r\n * Configuration for opening a modal dialog with the SdsDialog service.\r\n */\r\nexport class SdsDialogConfig<D = any> {\r\n\r\n  /**\r\n   * Where the attached component should live in Angular's *logical* component tree.\r\n   * This affects what is available for injection and the change detection order for the\r\n   * component instantiated inside of the dialog. This does not affect where the dialog\r\n   * content will be rendered.\r\n   */\r\n  viewContainerRef?: ViewContainerRef;\r\n\r\n  /** ID for the dialog. If omitted, a unique one will be generated. */\r\n  id?: string;\r\n\r\n  /** The ARIA role of the dialog element. */\r\n  role?: DialogRole = 'dialog';\r\n\r\n  /** Custom class for the overlay pane. */\r\n  panelClass?: string | string[] = '';\r\n\r\n  /** Whether the dialog has a backdrop. */\r\n  hasBackdrop? = true;\r\n\r\n  /** Custom class for the backdrop, */\r\n  backdropClass? = '';\r\n\r\n  /** Whether the user can use escape or clicking on the backdrop to close the modal. */\r\n  disableClose? = false;\r\n\r\n  /** Width of the dialog. */\r\n  width? = '';\r\n\r\n  /** Height of the dialog. */\r\n  height? = '';\r\n\r\n  /** Min-width of the dialog. If a number is provided, pixel units are assumed. */\r\n  minWidth?: number | string;\r\n\r\n  /** Min-height of the dialog. If a number is provided, pixel units are assumed. */\r\n  minHeight?: number | string;\r\n\r\n  /** Max-width of the dialog. If a number is provided, pixel units are assumed. Defaults to 80vw */\r\n  maxWidth?: number | string = '80vw';\r\n\r\n  /** Max-height of the dialog. If a number is provided, pixel units are assumed. */\r\n  maxHeight?: number | string;\r\n\r\n  /** Position overrides. */\r\n  position?: DialogPosition;\r\n\r\n  /** Data being injected into the child component. */\r\n  data?: D | null = null;\r\n\r\n  /** Layout direction for the dialog's content. */\r\n  direction?: Direction;\r\n\r\n  /** ID of the element that describes the dialog. */\r\n  ariaDescribedBy?: string | null = null;\r\n\r\n  /** Aria label to assign to the dialog element */\r\n  ariaLabel?: string | null = null;\r\n\r\n  /** Whether the dialog should focus the first focusable element on open. */\r\n  autoFocus? = true;\r\n\r\n  /**\r\n   * Whether the dialog should restore focus to the\r\n   * previously-focused element, after it's closed.\r\n   */\r\n  restoreFocus? = true;\r\n\r\n  /** Scroll strategy to be used for the dialog. */\r\n  scrollStrategy?: ScrollStrategy;\r\n\r\n  /**\r\n   * Whether the dialog should close when the user goes backwards/forwards in history.\r\n   * Note that this usually doesn't include clicking on links (unless the user is using\r\n   * the `HashLocationStrategy`).\r\n   */\r\n  closeOnNavigation? = true;\r\n\r\n  /**\r\n   * Wheter the dialog its an alert\r\n   */\r\n  alert?: 'warning' | 'info' | 'error';\r\n\r\n  /**\r\n   * Whether to display the close button in dialog header\r\n   */\r\n  displayCloseBtn? = true;\r\n}\r\n",
            "properties": [
                {
                    "name": "bottom",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Override for the dialog&#39;s bottom position. </p>\n",
                    "line": 14
                },
                {
                    "name": "left",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Override for the dialog&#39;s left position. </p>\n",
                    "line": 17
                },
                {
                    "name": "right",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Override for the dialog&#39;s right position. </p>\n",
                    "line": 20
                },
                {
                    "name": "top",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Override for the dialog&#39;s top position. </p>\n",
                    "line": 11
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "description": "<p>Possible overrides for a dialog&#39;s position. </p>\n",
            "methods": []
        },
        {
            "name": "INavigationLink",
            "id": "interface-INavigationLink-da5dce1c3233639ed105400f0995f5e5",
            "file": "libs/packages/components/src/lib/common-navigation/common-navigation-model.ts",
            "type": "interface",
            "sourceCode": "export interface INavigationLink {\r\n    /**\r\n     * Text to be displayed in the link\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route \r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n}\r\n\r\nexport enum NavigationMode {\r\n    INTERNAL, EXTERNAL, EVENT, LABEL\r\n}\r\n\r\nexport interface Selectable {\r\n    /**\r\n     * Identifier for the item when search for selected \r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected \r\n     */\r\n    selected?: boolean;\r\n}\r\n",
            "properties": [
                {
                    "name": "mode",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 15
                },
                {
                    "name": "route",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route </p>\n",
                    "line": 10
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed in the link</p>\n",
                    "line": 5
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "InitPxVideoConfig",
            "id": "interface-InitPxVideoConfig-fd7c680f2a9e428a3398a440cebda2b3",
            "file": "libs/packages/components/src/lib/video-player/video-player.component.ts",
            "type": "interface",
            "sourceCode": "import { Component,ViewChild, Input,ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';\r\nimport { GLOBAL_STRINGS } from 'accessible-html5-video-player/js/strings.js';\r\nimport * as InitPxVideo from 'accessible-html5-video-player/js/px-video.js';\r\nimport { VPInterface } from './video-player';\r\n\r\ninterface InitPxVideoConfig {\r\n  \"videoId\": string,\r\n  \"captionsOnDefault\": boolean,\r\n  \"seekInterval\": number,\r\n  \"videoTitle\": string,\r\n  \"debug\": boolean\r\n}\r\n\r\ndeclare const GLOBAL_STRINGS: any;\r\n\r\ndeclare class InitPxVideo {\r\n  constructor(config: InitPxVideoConfig);\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-video-player',\r\n  templateUrl: './video-player.component.html',\r\n  styleUrls: ['./css/px-video.css'],\r\n  encapsulation: ViewEncapsulation.None\r\n})\r\nexport class SdsVideoPlayerComponent implements AfterViewInit {\r\n  @Input() VPConfiguration: VPInterface;\r\n  @ViewChild('video') video: ElementRef;\r\n  private config: InitPxVideoConfig;\r\n\r\n  @Input() crossorigin = \"\";\r\n  ngAfterViewInit() {\r\n    if (this.crossorigin) {\r\n      const id = document.getElementById('videoPlayer');\r\n      id.setAttribute('crossorigin', this.crossorigin);\r\n    }\r\n    this.config = {\r\n      videoId: this.VPConfiguration.id,\r\n      captionsOnDefault: false,\r\n      seekInterval: this.VPConfiguration.seekInterval,\r\n      videoTitle: 'Video Player',\r\n      debug: this.VPConfiguration.debug\r\n    }\r\n\r\n    new InitPxVideo(this.config);\r\n    this.video.nativeElement.setAttribute(\"style\", \"width:\"+this.VPConfiguration.width+\";\");\r\n    \r\n  }\r\n\r\n  constructor() {\r\n}\r\n\r\n}\r\n",
            "properties": [
                {
                    "name": "captionsOnDefault",
                    "type": "boolean",
                    "optional": false,
                    "description": "",
                    "line": 8
                },
                {
                    "name": "debug",
                    "type": "boolean",
                    "optional": false,
                    "description": "",
                    "line": 11
                },
                {
                    "name": "seekInterval",
                    "type": "number",
                    "optional": false,
                    "description": "",
                    "line": 9
                },
                {
                    "name": "videoId",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 7
                },
                {
                    "name": "videoTitle",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 10
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "SdsAccordionBase",
            "id": "interface-SdsAccordionBase-ca0e37bbf3f8daf884e5f76775977ee2",
            "file": "libs/packages/components/src/lib/accordion/accordion-base.ts",
            "type": "interface",
            "sourceCode": "import {InjectionToken} from '@angular/core';\r\nimport {CdkAccordion} from '@angular/cdk/accordion';\r\n\r\n/** Accordion's display modes. */\r\nexport type SdsAccordionDisplayMode = 'default' | 'basic';\r\n\r\n/**\r\n * Base interface for a `SdsAccordion`.\r\n */\r\nexport interface SdsAccordionBase extends CdkAccordion {\r\n  /** Display mode used for all accordion items in the accordion. */\r\n  displayMode: SdsAccordionDisplayMode;\r\n\r\n  /** Handles keyboard events coming in from the item headers. */\r\n  _handleHeaderKeydown: (event: KeyboardEvent) => void;\r\n\r\n  /** Handles focus events on the item headers. */\r\n  _handleHeaderFocus: (header: any) => void;\r\n}\r\n\r\n\r\n/**\r\n * Token used to provide a `SdsAccordion` to `SdsAccordionItem`.\r\n * Used primarily to avoid circular imports between `SdsAccordion` and `SdsAccordionItem`.\r\n */\r\nexport const SDS_ACCORDION = new InjectionToken<SdsAccordionBase>('SDS_ACCORDION');\r\n",
            "properties": [
                {
                    "name": "_handleHeaderFocus",
                    "type": "function",
                    "optional": false,
                    "description": "<p>Handles focus events on the item headers. </p>\n",
                    "line": 19
                },
                {
                    "name": "_handleHeaderKeydown",
                    "type": "function",
                    "optional": false,
                    "description": "<p>Handles keyboard events coming in from the item headers. </p>\n",
                    "line": 16
                },
                {
                    "name": "displayMode",
                    "type": "SdsAccordionDisplayMode",
                    "optional": false,
                    "description": "<p>Display mode used for all accordion items in the accordion. </p>\n",
                    "line": 13
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "description": "<p>Base interface for a <code>SdsAccordion</code>.</p>\n",
            "methods": [],
            "extends": "CdkAccordion"
        },
        {
            "name": "SDSAutocompleteServiceInterface",
            "id": "interface-SDSAutocompleteServiceInterface-b94ad59f46be0ed842cf369dcc2b3610",
            "file": "libs/packages/components/src/lib/autocomplete-search/models/SDSAutocompleteServiceInterface.ts",
            "type": "interface",
            "sourceCode": "import { Observable } from 'rxjs';\r\nexport interface SDSAutocompleteServiceInterface {\r\n    /**\r\n     * \r\n     * @param searchValue \r\n     */\r\n    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult>;\r\n}\r\n\r\nexport interface SDSHiercarchicalServiceResult {\r\n    /**\r\n     * \r\n     */\r\n    items: object[];\r\n\r\n    /**\r\n     * \r\n     */\r\n    totalItems: number;\r\n}\r\n\r\nexport class SDSHiercarchicalServiceSearchItem {\r\n\r\n    /**\r\n     * \r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * \r\n     */\r\n    searchValue: string;\r\n\r\n    /**\r\n     * \r\n     */\r\n    // sort: Sort;\r\n\r\n    /**\r\n     * \r\n     */\r\n    currentItemCount: number;\r\n}\r\n\r\n",
            "properties": [],
            "indexSignatures": [],
            "kind": 152,
            "methods": [
                {
                    "name": "getDataByText",
                    "args": [
                        {
                            "name": "currentItems",
                            "type": "number"
                        },
                        {
                            "name": "searchValue",
                            "type": "string",
                            "optional": true
                        }
                    ],
                    "optional": false,
                    "returnType": "Observable<SDSHiercarchicalServiceResult>",
                    "typeParameters": [],
                    "line": 7,
                    "description": "",
                    "jsdoctags": [
                        {
                            "name": "currentItems",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": {
                                "pos": 120,
                                "end": 131,
                                "flags": 0,
                                "escapedText": "searchValue"
                            },
                            "type": "string",
                            "optional": true,
                            "tagName": {
                                "pos": 114,
                                "end": 119,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ]
        },
        {
            "name": "SDSHiercarchicalServiceResult",
            "id": "interface-SDSHiercarchicalServiceResult-b94ad59f46be0ed842cf369dcc2b3610",
            "file": "libs/packages/components/src/lib/autocomplete-search/models/SDSAutocompleteServiceInterface.ts",
            "type": "interface",
            "sourceCode": "import { Observable } from 'rxjs';\r\nexport interface SDSAutocompleteServiceInterface {\r\n    /**\r\n     * \r\n     * @param searchValue \r\n     */\r\n    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult>;\r\n}\r\n\r\nexport interface SDSHiercarchicalServiceResult {\r\n    /**\r\n     * \r\n     */\r\n    items: object[];\r\n\r\n    /**\r\n     * \r\n     */\r\n    totalItems: number;\r\n}\r\n\r\nexport class SDSHiercarchicalServiceSearchItem {\r\n\r\n    /**\r\n     * \r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * \r\n     */\r\n    searchValue: string;\r\n\r\n    /**\r\n     * \r\n     */\r\n    // sort: Sort;\r\n\r\n    /**\r\n     * \r\n     */\r\n    currentItemCount: number;\r\n}\r\n\r\n",
            "properties": [
                {
                    "name": "items",
                    "type": "object[]",
                    "optional": false,
                    "description": "",
                    "line": 14
                },
                {
                    "name": "totalItems",
                    "type": "number",
                    "optional": false,
                    "description": "",
                    "line": 19
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "SdsMenuInterface",
            "id": "interface-SdsMenuInterface-7d2664220b4195c4461326237a57e000",
            "file": "libs/packages/components/src/lib/menu/menu.component.ts",
            "type": "interface",
            "sourceCode": "import {\r\n  AfterContentInit,\r\n  ChangeDetectionStrategy,\r\n  Component,\r\n  ElementRef,\r\n  EventEmitter,\r\n  InjectionToken,\r\n  Input,\r\n  OnDestroy,\r\n  Output,\r\n  TemplateRef,\r\n  ViewChild,\r\n  ViewEncapsulation,\r\n  OnInit\r\n} from '@angular/core';\r\nimport { AnimationEvent } from '@angular/animations';\r\nimport {\r\n  ESCAPE,\r\n  DOWN_ARROW,\r\n  UP_ARROW,\r\n  HOME,\r\n  END,\r\n  hasModifierKey\r\n} from '@angular/cdk/keycodes';\r\nimport { FocusKeyManager, FocusOrigin } from '@angular/cdk/a11y';\r\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\r\nimport { Subscription } from 'rxjs';\r\nimport { sdsMenuAnimations } from './menu-animations';\r\nimport { SdsMenuItemComponent } from './menu-item.component';\r\n\r\n/** Menu Positions */\r\nexport type MenuPositionX = 'before' | 'after';\r\nexport type MenuPositionY = 'above' | 'below';\r\n\r\n/** Menu available sizes */\r\n// sm = 'small'\r\nexport type MenuSizes = 'sm';\r\n\r\n/** Injection token used to provide the parent menu to menu items. */\r\nexport const SDS_MENU_TOKEN = new InjectionToken<SdsMenuInterface>(\r\n  'SDS_MENU_TOKEN'\r\n);\r\n\r\n/** Menu Interface */\r\nexport interface SdsMenuInterface<T = any> {\r\n  xPosition: MenuPositionX;\r\n  yPosition: MenuPositionY;\r\n  overlapTrigger: boolean;\r\n  templateRef: TemplateRef<any>;\r\n  closed: EventEmitter<void | 'click' | 'keydown' | 'tab'>;\r\n  parentMenu?: SdsMenuInterface;\r\n  size?: MenuSizes;\r\n  focusFirstItem: (origin?: FocusOrigin) => void;\r\n  setPositionClasses?: (x: MenuPositionX, y: MenuPositionY) => void;\r\n  addItem?: (item: T) => void;\r\n  insertItem?: (item: T, index: number) => void;\r\n  removeItem?: (item: T) => void;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-menu',\r\n  exportAs: 'sdsMenu',\r\n  templateUrl: 'menu.component.html',\r\n  changeDetection: ChangeDetectionStrategy.OnPush,\r\n  encapsulation: ViewEncapsulation.None,\r\n  animations: [sdsMenuAnimations.transformMenu],\r\n  providers: [\r\n    { provide: SDS_MENU_TOKEN, useExisting: SdsMenuComponent }\r\n  ]\r\n})\r\nexport class SdsMenuComponent\r\n  implements\r\n    OnInit,\r\n    AfterContentInit,\r\n    OnDestroy,\r\n    SdsMenuInterface<SdsMenuItemComponent> {\r\n  /** After | Before the menu triger element */\r\n  private _xPosition: MenuPositionX = 'after';\r\n\r\n  /** Above | Below the menu triger element */\r\n  private _yPosition: MenuPositionY = 'below';\r\n\r\n  /** Manage browser focus */\r\n  private _keyManager: FocusKeyManager<SdsMenuItemComponent>;\r\n\r\n  /** Menu items inside the current menu. */\r\n  private _items: SdsMenuItemComponent[] = [];\r\n\r\n  /** Subscription to tab events on the menu panel */\r\n  private _tabSubscription = Subscription.EMPTY;\r\n\r\n  /** Stores <sds-menu> classes */\r\n  private _previousPanelClass: string;\r\n\r\n  /** Config object to be passed into the menu's ngClass */\r\n  _classList: { [key: string]: boolean } = {};\r\n\r\n  /** Current state of the panel animation. */\r\n  _panelAnimationState: 'void' | 'enter' = 'void';\r\n\r\n  /** Grab the component template */\r\n  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;\r\n\r\n  /**\r\n   * Size of menu component.\r\n   * Affects the font-size of the menu items and\r\n   * the size of the close button in the menu header\r\n   */\r\n  @Input() size: MenuSizes;\r\n\r\n  /** Position of the menu in the X axis. */\r\n  @Input()\r\n  get xPosition(): MenuPositionX {\r\n    return this._xPosition;\r\n  }\r\n  set xPosition(value: MenuPositionX) {\r\n    this._xPosition = value;\r\n    this.setPositionClasses();\r\n  }\r\n\r\n  /** Position of the menu in the Y axis. */\r\n  @Input()\r\n  get yPosition(): MenuPositionY {\r\n    return this._yPosition;\r\n  }\r\n  set yPosition(value: MenuPositionY) {\r\n    this._yPosition = value;\r\n    this.setPositionClasses();\r\n  }\r\n\r\n  /** Whether menu panel overlaps trigger element */\r\n  @Input()\r\n  get overlapTrigger(): boolean {\r\n    return this._overlapTrigger;\r\n  }\r\n  set overlapTrigger(value: boolean) {\r\n    this._overlapTrigger = coerceBooleanProperty(value);\r\n  }\r\n  private _overlapTrigger = false;\r\n\r\n  /** Transfer classes from the sds-menu to the overlay container */\r\n  @Input('class')\r\n  set panelClass(classes: string) {\r\n    const previousPanelClass = this._previousPanelClass;\r\n    // Remove previous classes from current set of classes\r\n    if (previousPanelClass && previousPanelClass.length) {\r\n      previousPanelClass.split(' ').forEach((className: string) => {\r\n        this._classList[className] = false;\r\n      });\r\n    }\r\n\r\n    this._previousPanelClass = classes;\r\n\r\n    // Adds new classes to current set of classes\r\n    if (classes && classes.length) {\r\n      classes.split(' ').forEach((className: string) => {\r\n        this._classList[className] = true;\r\n      });\r\n\r\n      // Remove all classes from <sds-menu>\r\n      this._elementRef.nativeElement.className = '';\r\n    }\r\n  }\r\n\r\n  /** Event emitted when the menu is closed. */\r\n  @Output() closed = new EventEmitter<void | 'click' | 'keydown' | 'tab'>();\r\n\r\n  constructor(private _elementRef: ElementRef<HTMLElement>) {}\r\n\r\n  ngOnInit() {\r\n    this.setPositionClasses();\r\n  }\r\n\r\n  ngAfterContentInit() {\r\n    this._keyManager = new FocusKeyManager<SdsMenuItemComponent>(\r\n      this._items\r\n    ).withWrap();\r\n    this._tabSubscription = this._keyManager.tabOut.subscribe(() =>\r\n      this.closed.emit('tab')\r\n    );\r\n  }\r\n\r\n  ngOnDestroy() {\r\n    this._tabSubscription.unsubscribe();\r\n    this.closed.complete();\r\n  }\r\n\r\n  /** Focus the first item in the menu */\r\n  focusFirstItem(origin: FocusOrigin = 'program'): void {\r\n    this._keyManager.setFocusOrigin(origin).setFirstItemActive();\r\n  }\r\n\r\n  /** Adds classes to the menu panel based on its position */\r\n  setPositionClasses(\r\n    posX: MenuPositionX = this.xPosition,\r\n    posY: MenuPositionY = this.yPosition\r\n  ) {\r\n    const classes = this._classList;\r\n    classes['sds-menu-before'] = posX === 'before';\r\n    classes['sds-menu-after'] = posX === 'after';\r\n    classes['sds-menu-above'] = posY === 'above';\r\n    classes['sds-menu-below'] = posY === 'below';\r\n  }\r\n\r\n  /** Adds a menu item with the menu. */\r\n  addItem(item: SdsMenuItemComponent) {\r\n    if (this._items.indexOf(item) === -1) {\r\n      this._items.push(item);\r\n    }\r\n  }\r\n\r\n  /** Inserts a menu item at an index */\r\n  insertItem(item: SdsMenuItemComponent, index: number) {\r\n    if (this._items.indexOf(item) === -1 && index < this._items.length) {\r\n      this._items.splice(index, 0, item);\r\n    }\r\n  }\r\n\r\n  /** Removes an item from the menu. */\r\n  removeItem(item: SdsMenuItemComponent) {\r\n    const index = this._items.indexOf(item);\r\n    if (this._items.indexOf(item) > -1) {\r\n      this._items.splice(index, 1);\r\n    }\r\n  }\r\n\r\n  /** Handle a keyboard event from the menu */\r\n  _handleKeydown(event: KeyboardEvent) {\r\n    // tslint:disable-next-line: deprecation\r\n    const keyCode = event.keyCode;\r\n    const manager = this._keyManager;\r\n\r\n    switch (keyCode) {\r\n      case ESCAPE:\r\n        this.closed.emit('keydown');\r\n        break;\r\n      case HOME:\r\n      case END:\r\n        if (!hasModifierKey(event)) {\r\n          keyCode === HOME\r\n            ? manager.setFirstItemActive()\r\n            : manager.setLastItemActive();\r\n          event.preventDefault();\r\n        }\r\n        break;\r\n      default:\r\n        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {\r\n          manager.setFocusOrigin('keyboard');\r\n        }\r\n\r\n        manager.onKeydown(event);\r\n    }\r\n  }\r\n\r\n  /** Starts the enter animation. */\r\n  _startAnimation() {\r\n    this._panelAnimationState = 'enter';\r\n  }\r\n\r\n  /** Callback that is invoked when the panel animation completes. */\r\n  _onAnimationDone(event: AnimationEvent) {}\r\n\r\n  /** Resets the panel animation to its initial state. */\r\n  _resetAnimation() {\r\n    this._panelAnimationState = 'void';\r\n  }\r\n\r\n  _onAnimationStart(event: AnimationEvent) {\r\n    // Scroll the content element to the top as soon as the animation starts.\r\n    if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {\r\n      event.element.scrollTop = 0;\r\n    }\r\n  }\r\n}\r\n",
            "properties": [
                {
                    "name": "addItem",
                    "type": "function",
                    "optional": true,
                    "description": "",
                    "line": 55
                },
                {
                    "name": "closed",
                    "type": "EventEmitter<void | \"click\" | \"keydown\" | \"tab\">",
                    "optional": false,
                    "description": "",
                    "line": 50
                },
                {
                    "name": "focusFirstItem",
                    "type": "function",
                    "optional": false,
                    "description": "",
                    "line": 53
                },
                {
                    "name": "insertItem",
                    "type": "function",
                    "optional": true,
                    "description": "",
                    "line": 56
                },
                {
                    "name": "overlapTrigger",
                    "type": "boolean",
                    "optional": false,
                    "description": "",
                    "line": 48
                },
                {
                    "name": "parentMenu",
                    "type": "SdsMenuInterface",
                    "optional": true,
                    "description": "",
                    "line": 51
                },
                {
                    "name": "removeItem",
                    "type": "function",
                    "optional": true,
                    "description": "",
                    "line": 57
                },
                {
                    "name": "setPositionClasses",
                    "type": "function",
                    "optional": true,
                    "description": "",
                    "line": 54
                },
                {
                    "name": "size",
                    "type": "MenuSizes",
                    "optional": true,
                    "description": "",
                    "line": 52
                },
                {
                    "name": "templateRef",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 49
                },
                {
                    "name": "xPosition",
                    "type": "MenuPositionX",
                    "optional": false,
                    "description": "",
                    "line": 46
                },
                {
                    "name": "yPosition",
                    "type": "MenuPositionY",
                    "optional": false,
                    "description": "",
                    "line": 47
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "description": "<p>Menu Interface </p>\n",
            "methods": []
        },
        {
            "name": "SdsTruncateTextData",
            "id": "interface-SdsTruncateTextData-5540e28b3ba6948df916a073aff558bd",
            "file": "libs/packages/components/src/lib/truncate-text/truncate-text-container.component.ts",
            "type": "interface",
            "sourceCode": "import { Component, Inject, HostBinding, HostListener } from '@angular/core';\r\nimport { SDS_TRUNCATED_TEXT_DATA } from './truncates-text-base';\r\nimport { sdsTruncateTextAnimations } from './truncate-text-animations';\r\n\r\nexport interface SdsTruncateTextData {\r\n  text: string;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-truncated-text-container',\r\n  template: `\r\n    <div class=\"sds-overlay maxw-mobile radius-overlay padding-2\">{{ data.text }}</div>\r\n  `,\r\n  animations: [sdsTruncateTextAnimations.container]\r\n})\r\nexport class SdsTruncatedTextContainerComponent {\r\n  @HostBinding('@container') _animationState = 'void';\r\n\r\n  constructor(@Inject(SDS_TRUNCATED_TEXT_DATA) public data: SdsTruncateTextData) {}\r\n\r\n  /** Starts the animation. */\r\n  startAnimation() {\r\n    this._animationState = 'enter';\r\n  }\r\n\r\n  /** Resets the animation to its initial state. */\r\n  resetAnimation() {\r\n    this._animationState = 'void';\r\n  }\r\n\r\n  /** Intentionally left empty to trigger change detection */\r\n  @HostListener('@container.done')\r\n  _onAnimationDone() {}\r\n}\r\n",
            "properties": [
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 6
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "Selectable",
            "id": "interface-Selectable-da5dce1c3233639ed105400f0995f5e5",
            "file": "libs/packages/components/src/lib/common-navigation/common-navigation-model.ts",
            "type": "interface",
            "sourceCode": "export interface INavigationLink {\r\n    /**\r\n     * Text to be displayed in the link\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route \r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n}\r\n\r\nexport enum NavigationMode {\r\n    INTERNAL, EXTERNAL, EVENT, LABEL\r\n}\r\n\r\nexport interface Selectable {\r\n    /**\r\n     * Identifier for the item when search for selected \r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected \r\n     */\r\n    selected?: boolean;\r\n}\r\n",
            "properties": [
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Identifier for the item when search for selected </p>\n",
                    "line": 26
                },
                {
                    "name": "selected",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>Status of if the item is selected </p>\n",
                    "line": 31
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "VPInterface",
            "id": "interface-VPInterface-1b055b2b41d7a86b1733dca0aa591614",
            "file": "libs/packages/components/src/lib/video-player/video-player.ts",
            "type": "interface",
            "sourceCode": "export interface VPInterface{\r\n  sourceWebm: string;\r\n  sourceMp4: string;\r\n  height: string;\r\n  width: string;\r\n \tcaption: string;\r\n  poster: string;\r\n  id: string;\r\n \tseekInterval: number;\r\n \tdebug: boolean;\r\n  preload: string;\r\n}\r\n",
            "properties": [
                {
                    "name": "caption",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 6
                },
                {
                    "name": "debug",
                    "type": "boolean",
                    "optional": false,
                    "description": "",
                    "line": 10
                },
                {
                    "name": "height",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 4
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 8
                },
                {
                    "name": "poster",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 7
                },
                {
                    "name": "preload",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 11
                },
                {
                    "name": "seekInterval",
                    "type": "number",
                    "optional": false,
                    "description": "",
                    "line": 9
                },
                {
                    "name": "sourceMp4",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 3
                },
                {
                    "name": "sourceWebm",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 2
                },
                {
                    "name": "width",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 5
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        }
    ],
    "injectables": [
        {
            "name": "SdsDialogService",
            "id": "injectable-SdsDialogService-6fa1b6dd6d643229de079b2f1d54f751",
            "file": "libs/packages/components/src/lib/dialog/dialog.ts",
            "properties": [
                {
                    "name": "_afterAllClosedAtThisLevel",
                    "defaultValue": "new Subject<void>()",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 64,
                    "modifierKind": [
                        112,
                        132
                    ]
                },
                {
                    "name": "_afterOpenedAtThisLevel",
                    "defaultValue": "new Subject<SdsDialogRef<any>>()",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 65,
                    "modifierKind": [
                        112,
                        132
                    ]
                },
                {
                    "name": "_ariaHiddenElements",
                    "defaultValue": "new Map<Element, string|null>()",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 66,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_openDialogsAtThisLevel",
                    "defaultValue": "[]",
                    "type": "SdsDialogRef<any>[]",
                    "optional": false,
                    "description": "",
                    "line": 63,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_scrollStrategy",
                    "type": "function",
                    "optional": false,
                    "description": "",
                    "line": 67,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "afterAllClosed",
                    "defaultValue": "defer<void>(() => this.openDialogs.length ?\r\n      this._afterAllClosed :\r\n      this._afterAllClosed.pipe(startWith(undefined)))",
                    "type": "Observable<void>",
                    "optional": false,
                    "description": "<p>Stream that emits when all open dialog have finished closing.\nWill emit on subscribe if there are no open dialogs to begin with.</p>\n",
                    "line": 88,
                    "modifierKind": [
                        132
                    ]
                }
            ],
            "methods": [
                {
                    "name": "_attachDialogContainer",
                    "args": [
                        {
                            "name": "overlay",
                            "type": "OverlayRef"
                        },
                        {
                            "name": "config",
                            "type": "SdsDialogConfig"
                        }
                    ],
                    "optional": false,
                    "returnType": "SdsDialogContainerComponent",
                    "typeParameters": [],
                    "line": 225,
                    "description": "<p>Attaches an SdsDialogContainerComponent to a dialog&#39;s already-created overlay.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 7807,
                                "end": 7814,
                                "flags": 0,
                                "escapedText": "overlay"
                            },
                            "type": "OverlayRef",
                            "tagName": {
                                "pos": 7801,
                                "end": 7806,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Reference to the dialog&#39;s underlying overlay.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 7874,
                                "end": 7880,
                                "flags": 0,
                                "escapedText": "config"
                            },
                            "type": "SdsDialogConfig",
                            "tagName": {
                                "pos": 7868,
                                "end": 7873,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>The dialog configuration.</p>\n"
                        },
                        {
                            "tagName": {
                                "pos": 7914,
                                "end": 7921,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>A promise resolving to a ComponentRef for the attached container.</p>\n"
                        }
                    ]
                },
                {
                    "name": "_attachDialogContent",
                    "args": [
                        {
                            "name": "componentOrTemplateRef",
                            "type": "ComponentType<T> | TemplateRef<T>"
                        },
                        {
                            "name": "dialogContainer",
                            "type": "SdsDialogContainerComponent"
                        },
                        {
                            "name": "overlayRef",
                            "type": "OverlayRef"
                        },
                        {
                            "name": "config",
                            "type": "SdsDialogConfig"
                        }
                    ],
                    "optional": false,
                    "returnType": "SdsDialogRef<T, R>",
                    "typeParameters": [
                        "T",
                        "R"
                    ],
                    "line": 246,
                    "description": "<p>Attaches the user-provided component to the already-created SdsDialogContainerComponent.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 8703,
                                "end": 8725,
                                "flags": 0,
                                "escapedText": "componentOrTemplateRef"
                            },
                            "type": "ComponentType<T> | TemplateRef<T>",
                            "tagName": {
                                "pos": 8697,
                                "end": 8702,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>The type of component being loaded into the dialog,\nor a TemplateRef to instantiate as the content.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 8849,
                                "end": 8864,
                                "flags": 0,
                                "escapedText": "dialogContainer"
                            },
                            "type": "SdsDialogContainerComponent",
                            "tagName": {
                                "pos": 8843,
                                "end": 8848,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Reference to the wrapping SdsDialogContainerComponent.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 8933,
                                "end": 8943,
                                "flags": 0,
                                "escapedText": "overlayRef"
                            },
                            "type": "OverlayRef",
                            "tagName": {
                                "pos": 8927,
                                "end": 8932,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Reference to the overlay in which the dialog resides.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 9011,
                                "end": 9017,
                                "flags": 0,
                                "escapedText": "config"
                            },
                            "type": "SdsDialogConfig",
                            "tagName": {
                                "pos": 9005,
                                "end": 9010,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>The dialog configuration.</p>\n"
                        },
                        {
                            "tagName": {
                                "pos": 9051,
                                "end": 9058,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>A promise resolving to the SdsDialogRef that should be returned to the user.</p>\n"
                        }
                    ]
                },
                {
                    "name": "_closeDialogs",
                    "args": [
                        {
                            "name": "dialogs",
                            "type": "SdsDialogRef<any>[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 373,
                    "description": "<p>Closes all of the dialogs in an array. </p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "dialogs",
                            "type": "SdsDialogRef<any>[]",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_createInjector",
                    "args": [
                        {
                            "name": "config",
                            "type": "SdsDialogConfig"
                        },
                        {
                            "name": "dialogRef",
                            "type": "SdsDialogRef<T>"
                        },
                        {
                            "name": "dialogContainer",
                            "type": "SdsDialogContainerComponent"
                        }
                    ],
                    "optional": false,
                    "returnType": "PortalInjector",
                    "typeParameters": [
                        "T"
                    ],
                    "line": 292,
                    "description": "<p>Creates a custom injector to be used inside the dialog. This allows a component loaded inside\nof a dialog to close itself and, optionally, to return a value.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 10735,
                                "end": 10741,
                                "flags": 0,
                                "escapedText": "config"
                            },
                            "type": "SdsDialogConfig",
                            "tagName": {
                                "pos": 10729,
                                "end": 10734,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Config object that is used to construct the dialog.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 10807,
                                "end": 10816,
                                "flags": 0,
                                "escapedText": "dialogRef"
                            },
                            "type": "SdsDialogRef<T>",
                            "tagName": {
                                "pos": 10801,
                                "end": 10806,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Reference to the dialog.</p>\n"
                        },
                        {
                            "name": "dialogContainer",
                            "type": "SdsDialogContainerComponent",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "tagName": {
                                "pos": 10929,
                                "end": 10936,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>The custom injector that can be used inside the dialog.</p>\n"
                        }
                    ]
                },
                {
                    "name": "_createOverlay",
                    "args": [
                        {
                            "name": "config",
                            "type": "SdsDialogConfig"
                        }
                    ],
                    "optional": false,
                    "returnType": "OverlayRef",
                    "typeParameters": [],
                    "line": 188,
                    "description": "<p>Creates the overlay into which the dialog will be loaded.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 6491,
                                "end": 6497,
                                "flags": 0,
                                "escapedText": "config"
                            },
                            "type": "SdsDialogConfig",
                            "tagName": {
                                "pos": 6485,
                                "end": 6490,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>The dialog configuration.</p>\n"
                        },
                        {
                            "tagName": {
                                "pos": 6531,
                                "end": 6538,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>A promise resolving to the OverlayRef for the created overlay.</p>\n"
                        }
                    ]
                },
                {
                    "name": "_getOverlayConfig",
                    "args": [
                        {
                            "name": "dialogConfig",
                            "type": "SdsDialogConfig"
                        }
                    ],
                    "optional": false,
                    "returnType": "OverlayConfig",
                    "typeParameters": [],
                    "line": 198,
                    "description": "<p>Creates an overlay config from a dialog config.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 6863,
                                "end": 6875,
                                "flags": 0,
                                "escapedText": "dialogConfig"
                            },
                            "type": "SdsDialogConfig",
                            "tagName": {
                                "pos": 6857,
                                "end": 6862,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>The dialog configuration.</p>\n"
                        },
                        {
                            "tagName": {
                                "pos": 6909,
                                "end": 6916,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>The overlay configuration.</p>\n"
                        }
                    ]
                },
                {
                    "name": "_hideNonDialogContentFromAssistiveTechnology",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 350,
                    "description": "<p>Hides all of the content that isn&#39;t an overlay from assistive technology.</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_removeOpenDialog",
                    "args": [
                        {
                            "name": "dialogRef",
                            "type": "SdsDialogRef<any>"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 324,
                    "description": "<p>Removes a dialog from the array of open dialogs.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 12240,
                                "end": 12249,
                                "flags": 0,
                                "escapedText": "dialogRef"
                            },
                            "type": "SdsDialogRef<any>",
                            "tagName": {
                                "pos": 12234,
                                "end": 12239,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Dialog to be removed.</p>\n"
                        }
                    ]
                },
                {
                    "name": "closeAll",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 163,
                    "description": "<p>Closes all of the currently-open dialogs.</p>\n"
                },
                {
                    "name": "getDialogById",
                    "args": [
                        {
                            "name": "id",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "SdsDialogRef | undefined",
                    "typeParameters": [],
                    "line": 171,
                    "description": "<p>Finds an open dialog by its id.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 5941,
                                "end": 5943,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 5935,
                                "end": 5940,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>ID to use when looking up the dialog.</p>\n"
                        }
                    ]
                },
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 175
                },
                {
                    "name": "open",
                    "args": [
                        {
                            "name": "componentOrTemplateRef",
                            "type": "ComponentType<T> | TemplateRef<T>"
                        },
                        {
                            "name": "config",
                            "type": "SdsDialogConfig<D>",
                            "optional": true
                        }
                    ],
                    "optional": false,
                    "returnType": "SdsDialogRef<T, R>",
                    "typeParameters": [
                        "T",
                        "D",
                        "R"
                    ],
                    "line": 110,
                    "description": "<p>Opens a modal dialog containing the given component.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3794,
                                "end": 3816,
                                "flags": 0,
                                "escapedText": "componentOrTemplateRef"
                            },
                            "type": "ComponentType<T> | TemplateRef<T>",
                            "tagName": {
                                "pos": 3788,
                                "end": 3793,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Type of the component to load into the dialog,\nor a TemplateRef to instantiate as the dialog content.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 3942,
                                "end": 3948,
                                "flags": 0,
                                "escapedText": "config"
                            },
                            "type": "SdsDialogConfig<D>",
                            "optional": true,
                            "tagName": {
                                "pos": 3936,
                                "end": 3941,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Extra configuration options.</p>\n"
                        },
                        {
                            "tagName": {
                                "pos": 3985,
                                "end": 3992,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>Reference to the newly-opened dialog.</p>\n"
                        }
                    ]
                }
            ],
            "description": "<p>Service to open modal dialogs.</p>\n",
            "sourceCode": "import {Directionality} from '@angular/cdk/bidi';\r\nimport {\r\n  Overlay,\r\n  OverlayConfig,\r\n  OverlayContainer,\r\n  OverlayRef,\r\n  ScrollStrategy,\r\n} from '@angular/cdk/overlay';\r\nimport {ComponentPortal, ComponentType, PortalInjector, TemplatePortal} from '@angular/cdk/portal';\r\nimport {Location} from '@angular/common';\r\nimport {\r\n  Inject,\r\n  Injectable,\r\n  InjectionToken,\r\n  Injector,\r\n  OnDestroy,\r\n  Optional,\r\n  SkipSelf,\r\n  TemplateRef,\r\n} from '@angular/core';\r\nimport {defer, Observable, of as observableOf, Subject} from 'rxjs';\r\nimport {startWith} from 'rxjs/operators';\r\nimport {SdsDialogConfig} from './dialog-config';\r\nimport {SdsDialogContainerComponent} from './dialog-container.component';\r\nimport {SdsDialogRef} from './dialog-ref';\r\n\r\n\r\n/** Injection token that can be used to access the data that was passed in to a dialog. */\r\nexport const SDS_DIALOG_DATA = new InjectionToken<any>('SdsDialogData');\r\n\r\n/** Injection token that can be used to specify default dialog options. */\r\nexport const SDS_DIALOG_DEFAULT_OPTIONS =\r\n    new InjectionToken<SdsDialogConfig>('sds-dialog-default-options');\r\n\r\n/** Injection token that determines the scroll handling while the dialog is open. */\r\nexport const SDS_DIALOG_SCROLL_STRATEGY =\r\n    new InjectionToken<() => ScrollStrategy>('sds-dialog-scroll-strategy');\r\n\r\n/** @docs-private */\r\nexport function SDS_DIALOG_SCROLL_STRATEGY_FACTORY(overlay: Overlay): () => ScrollStrategy {\r\n  return () => overlay.scrollStrategies.block();\r\n}\r\n\r\n/** @docs-private */\r\nexport function SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay: Overlay):\r\n  () => ScrollStrategy {\r\n  return () => overlay.scrollStrategies.block();\r\n}\r\n\r\n/** @docs-private */\r\nexport const SDS_DIALOG_SCROLL_STRATEGY_PROVIDER = {\r\n  provide: SDS_DIALOG_SCROLL_STRATEGY,\r\n  deps: [Overlay],\r\n  useFactory: SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,\r\n};\r\n\r\n\r\n/**\r\n * Service to open modal dialogs.\r\n */\r\n@Injectable()\r\nexport class SdsDialogService implements OnDestroy {\r\n  private _openDialogsAtThisLevel: SdsDialogRef<any>[] = [];\r\n  private readonly _afterAllClosedAtThisLevel = new Subject<void>();\r\n  private readonly _afterOpenedAtThisLevel = new Subject<SdsDialogRef<any>>();\r\n  private _ariaHiddenElements = new Map<Element, string|null>();\r\n  private _scrollStrategy: () => ScrollStrategy;\r\n\r\n  /** Keeps track of the currently-open dialogs. */\r\n  get openDialogs(): SdsDialogRef<any>[] {\r\n    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;\r\n  }\r\n\r\n  /** Stream that emits when a dialog has been opened. */\r\n  get afterOpened(): Subject<SdsDialogRef<any>> {\r\n    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;\r\n  }\r\n\r\n  get _afterAllClosed(): Subject<void> {\r\n    const parent = this._parentDialog;\r\n    return parent ? parent._afterAllClosed : this._afterAllClosedAtThisLevel;\r\n  }\r\n\r\n  /**\r\n   * Stream that emits when all open dialog have finished closing.\r\n   * Will emit on subscribe if there are no open dialogs to begin with.\r\n   */\r\n  readonly afterAllClosed: Observable<void> = defer<void>(() => this.openDialogs.length ?\r\n      this._afterAllClosed :\r\n      this._afterAllClosed.pipe(startWith(undefined)));\r\n\r\n  constructor(\r\n      private _overlay: Overlay,\r\n      private _injector: Injector,\r\n      @Optional() private _location: Location,\r\n      @Optional() @Inject(SDS_DIALOG_DEFAULT_OPTIONS) private _defaultOptions: SdsDialogConfig,\r\n      @Inject(SDS_DIALOG_SCROLL_STRATEGY) scrollStrategy: any,\r\n      @Optional() @SkipSelf() private _parentDialog: SdsDialogService,\r\n      private _overlayContainer: OverlayContainer) {\r\n    this._scrollStrategy = scrollStrategy;\r\n  }\r\n\r\n  /**\r\n   * Opens a modal dialog containing the given component.\r\n   * @param componentOrTemplateRef Type of the component to load into the dialog,\r\n   *     or a TemplateRef to instantiate as the dialog content.\r\n   * @param config Extra configuration options.\r\n   * @returns Reference to the newly-opened dialog.\r\n   */\r\n  open<T, D = any, R = any>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,\r\n          config?: SdsDialogConfig<D>): SdsDialogRef<T, R> {\r\n\r\n    // Convenience widths names: small | medium | large\r\n    // added to help with standardization\r\n    if (config && config.width) {\r\n      switch (config.width) {\r\n        case 'small': {\r\n          config.width = '370px';\r\n          break;\r\n        }\r\n        case 'medium': {\r\n          config.width = '730px';\r\n          break;\r\n        }\r\n        case 'large': {\r\n          config.width = '960px';\r\n          break;\r\n        }\r\n        default: {\r\n          break;\r\n        }\r\n      }\r\n    }\r\n\r\n    config = _applyConfigDefaults(config, this._defaultOptions || new SdsDialogConfig());\r\n\r\n    if (config.id && this.getDialogById(config.id)) {\r\n      throw Error(`Dialog with id \"${config.id}\" exists already. The dialog id must be unique.`);\r\n    }\r\n\r\n    const overlayRef = this._createOverlay(config);\r\n    const dialogContainer = this._attachDialogContainer(overlayRef, config);\r\n    const dialogRef = this._attachDialogContent<T, R>(componentOrTemplateRef,\r\n                                                      dialogContainer,\r\n                                                      overlayRef,\r\n                                                      config);\r\n\r\n    // If this is the first dialog that we're opening, hide all the non-overlay content.\r\n    if (!this.openDialogs.length) {\r\n      this._hideNonDialogContentFromAssistiveTechnology();\r\n    }\r\n\r\n    this.openDialogs.push(dialogRef);\r\n    dialogRef.afterClosed().subscribe(() => this._removeOpenDialog(dialogRef));\r\n    this.afterOpened.next(dialogRef);\r\n\r\n    return dialogRef;\r\n  }\r\n\r\n  /**\r\n   * Closes all of the currently-open dialogs.\r\n   */\r\n  closeAll(): void {\r\n    this._closeDialogs(this.openDialogs);\r\n  }\r\n\r\n  /**\r\n   * Finds an open dialog by its id.\r\n   * @param id ID to use when looking up the dialog.\r\n   */\r\n  getDialogById(id: string): SdsDialogRef<any> | undefined {\r\n    return this.openDialogs.find(dialog => dialog.id === id);\r\n  }\r\n\r\n  ngOnDestroy() {\r\n    // Only close the dialogs at this level on destroy\r\n    // since the parent service may still be active.\r\n    this._closeDialogs(this._openDialogsAtThisLevel);\r\n    this._afterAllClosedAtThisLevel.complete();\r\n    this._afterOpenedAtThisLevel.complete();\r\n  }\r\n\r\n  /**\r\n   * Creates the overlay into which the dialog will be loaded.\r\n   * @param config The dialog configuration.\r\n   * @returns A promise resolving to the OverlayRef for the created overlay.\r\n   */\r\n  private _createOverlay(config: SdsDialogConfig): OverlayRef {\r\n    const overlayConfig = this._getOverlayConfig(config);\r\n    return this._overlay.create(overlayConfig);\r\n  }\r\n\r\n  /**\r\n   * Creates an overlay config from a dialog config.\r\n   * @param dialogConfig The dialog configuration.\r\n   * @returns The overlay configuration.\r\n   */\r\n  private _getOverlayConfig(dialogConfig: SdsDialogConfig): OverlayConfig {\r\n    const state = new OverlayConfig({\r\n      positionStrategy: this._overlay.position().global(),\r\n      scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),\r\n      panelClass: dialogConfig.panelClass,\r\n      hasBackdrop: dialogConfig.hasBackdrop,\r\n      direction: dialogConfig.direction,\r\n      minWidth: dialogConfig.minWidth,\r\n      minHeight: dialogConfig.minHeight,\r\n      maxWidth: dialogConfig.maxWidth,\r\n      maxHeight: dialogConfig.maxHeight,\r\n      disposeOnNavigation: dialogConfig.closeOnNavigation\r\n    });\r\n\r\n    if (dialogConfig.backdropClass) {\r\n      state.backdropClass = dialogConfig.backdropClass;\r\n    }\r\n\r\n    return state;\r\n  }\r\n\r\n  /**\r\n   * Attaches an SdsDialogContainerComponent to a dialog's already-created overlay.\r\n   * @param overlay Reference to the dialog's underlying overlay.\r\n   * @param config The dialog configuration.\r\n   * @returns A promise resolving to a ComponentRef for the attached container.\r\n   */\r\n  private _attachDialogContainer(overlay: OverlayRef, config: SdsDialogConfig): SdsDialogContainerComponent {\r\n    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;\r\n    const injector = new PortalInjector(userInjector || this._injector, new WeakMap([\r\n      [SdsDialogConfig, config]\r\n    ]));\r\n    const containerPortal =\r\n        new ComponentPortal(SdsDialogContainerComponent, config.viewContainerRef, injector);\r\n    const containerRef = overlay.attach<SdsDialogContainerComponent>(containerPortal);\r\n\r\n    return containerRef.instance;\r\n  }\r\n\r\n  /**\r\n   * Attaches the user-provided component to the already-created SdsDialogContainerComponent.\r\n   * @param componentOrTemplateRef The type of component being loaded into the dialog,\r\n   *     or a TemplateRef to instantiate as the content.\r\n   * @param dialogContainer Reference to the wrapping SdsDialogContainerComponent.\r\n   * @param overlayRef Reference to the overlay in which the dialog resides.\r\n   * @param config The dialog configuration.\r\n   * @returns A promise resolving to the SdsDialogRef that should be returned to the user.\r\n   */\r\n  private _attachDialogContent<T, R>(\r\n      componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,\r\n      dialogContainer: SdsDialogContainerComponent,\r\n      overlayRef: OverlayRef,\r\n      config: SdsDialogConfig): SdsDialogRef<T, R> {\r\n\r\n    // Create a reference to the dialog we're creating in order to give the user a handle\r\n    // to modify and close it.\r\n    const dialogRef =\r\n        new SdsDialogRef<T, R>(overlayRef, dialogContainer, this._location, config.id);\r\n\r\n    // When the dialog backdrop is clicked, we want to close it.\r\n    if (config.hasBackdrop) {\r\n      overlayRef.backdropClick().subscribe(() => {\r\n        if (!dialogRef.disableClose) {\r\n          dialogRef.close();\r\n        }\r\n      });\r\n    }\r\n\r\n    if (componentOrTemplateRef instanceof TemplateRef) {\r\n      dialogContainer.attachTemplatePortal(\r\n        new TemplatePortal<T>(componentOrTemplateRef, null!,\r\n          <any>{ $implicit: config.data, dialogRef }));\r\n    } else {\r\n      const injector = this._createInjector<T>(config, dialogRef, dialogContainer);\r\n      const contentRef = dialogContainer.attachComponentPortal<T>(\r\n          new ComponentPortal(componentOrTemplateRef, undefined, injector));\r\n      dialogRef.componentInstance = contentRef.instance;\r\n    }\r\n\r\n    dialogRef\r\n      .updateSize(config.width, config.height)\r\n      .updatePosition(config.position);\r\n\r\n    return dialogRef;\r\n  }\r\n\r\n  /**\r\n   * Creates a custom injector to be used inside the dialog. This allows a component loaded inside\r\n   * of a dialog to close itself and, optionally, to return a value.\r\n   * @param config Config object that is used to construct the dialog.\r\n   * @param dialogRef Reference to the dialog.\r\n   * @param container Dialog container element that wraps all of the contents.\r\n   * @returns The custom injector that can be used inside the dialog.\r\n   */\r\n  private _createInjector<T>(\r\n      config: SdsDialogConfig,\r\n      dialogRef: SdsDialogRef<T>,\r\n      dialogContainer: SdsDialogContainerComponent): PortalInjector {\r\n\r\n    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;\r\n\r\n    // The SdsDialogContainerComponent is injected in the portal as the SdsDialogContainerComponent and the dialog's\r\n    // content are created out of the same ViewContainerRef and as such, are siblings for injector\r\n    // purposes. To allow the hierarchy that is expected, the SdsDialogContainerComponent is explicitly\r\n    // added to the injection tokens.\r\n    const injectionTokens = new WeakMap<any, any>([\r\n      [SdsDialogContainerComponent, dialogContainer],\r\n      [SDS_DIALOG_DATA, config.data],\r\n      [SdsDialogRef, dialogRef]\r\n    ]);\r\n\r\n    if (config.direction &&\r\n        (!userInjector || !userInjector.get<Directionality | null>(Directionality, null))) {\r\n      injectionTokens.set(Directionality, {\r\n        value: config.direction,\r\n        change: observableOf()\r\n      });\r\n    }\r\n\r\n    return new PortalInjector(userInjector || this._injector, injectionTokens);\r\n  }\r\n\r\n  /**\r\n   * Removes a dialog from the array of open dialogs.\r\n   * @param dialogRef Dialog to be removed.\r\n   */\r\n  private _removeOpenDialog(dialogRef: SdsDialogRef<any>) {\r\n    const index = this.openDialogs.indexOf(dialogRef);\r\n\r\n    if (index > -1) {\r\n      this.openDialogs.splice(index, 1);\r\n\r\n      // If all the dialogs were closed, remove/restore the `aria-hidden`\r\n      // to a the siblings and emit to the `afterAllClosed` stream.\r\n      if (!this.openDialogs.length) {\r\n        this._ariaHiddenElements.forEach((previousValue, element) => {\r\n          if (previousValue) {\r\n            element.setAttribute('aria-hidden', previousValue);\r\n          } else {\r\n            element.removeAttribute('aria-hidden');\r\n          }\r\n        });\r\n\r\n        this._ariaHiddenElements.clear();\r\n        this._afterAllClosed.next();\r\n      }\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Hides all of the content that isn't an overlay from assistive technology.\r\n   */\r\n  private _hideNonDialogContentFromAssistiveTechnology() {\r\n    const overlayContainer = this._overlayContainer.getContainerElement();\r\n\r\n    // Ensure that the overlay container is attached to the DOM.\r\n    if (overlayContainer.parentElement) {\r\n      const siblings = overlayContainer.parentElement.children;\r\n\r\n      for (let i = siblings.length - 1; i > -1; i--) {\r\n        const sibling = siblings[i];\r\n\r\n        if (sibling !== overlayContainer &&\r\n          sibling.nodeName !== 'SCRIPT' &&\r\n          sibling.nodeName !== 'STYLE' &&\r\n          !sibling.hasAttribute('aria-live')) {\r\n\r\n          this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));\r\n          sibling.setAttribute('aria-hidden', 'true');\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  /** Closes all of the dialogs in an array. */\r\n  private _closeDialogs(dialogs: SdsDialogRef<any>[]) {\r\n    let i = dialogs.length;\r\n\r\n    while (i--) {\r\n      // The `_openDialogs` property isn't updated after close until the rxjs subscription\r\n      // runs on the next microtask, in addition to modifying the array as we're going\r\n      // through it. We loop through all of them and call close without assuming that\r\n      // they'll be removed from the list instantaneously.\r\n      dialogs[i].close();\r\n    }\r\n  }\r\n\r\n}\r\n\r\n/**\r\n * Applies default options to the dialog config.\r\n * @param config Config to be modified.\r\n * @param defaultOptions Default options provided.\r\n * @returns The new configuration object.\r\n */\r\nfunction _applyConfigDefaults(\r\n    config?: SdsDialogConfig, defaultOptions?: SdsDialogConfig): SdsDialogConfig {\r\n  return {...defaultOptions, ...config};\r\n}\r\n",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_overlay",
                        "type": "Overlay"
                    },
                    {
                        "name": "_injector",
                        "type": "Injector"
                    },
                    {
                        "name": "_location",
                        "type": "Location"
                    },
                    {
                        "name": "_defaultOptions",
                        "type": "SdsDialogConfig"
                    },
                    {
                        "name": "scrollStrategy",
                        "type": "any"
                    },
                    {
                        "name": "_parentDialog",
                        "type": "SdsDialogService"
                    },
                    {
                        "name": "_overlayContainer",
                        "type": "OverlayContainer"
                    }
                ],
                "line": 90,
                "jsdoctags": [
                    {
                        "name": "_overlay",
                        "type": "Overlay",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_injector",
                        "type": "Injector",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_location",
                        "type": "Location",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_defaultOptions",
                        "type": "SdsDialogConfig",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "scrollStrategy",
                        "type": "any",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_parentDialog",
                        "type": "SdsDialogService",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_overlayContainer",
                        "type": "OverlayContainer",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "accessors": {
                "openDialogs": {
                    "name": "openDialogs",
                    "getSignature": {
                        "name": "openDialogs",
                        "type": "[]",
                        "returnType": "SdsDialogRef[]",
                        "line": 70,
                        "description": "<p>Keeps track of the currently-open dialogs. </p>\n"
                    }
                },
                "afterOpened": {
                    "name": "afterOpened",
                    "getSignature": {
                        "name": "afterOpened",
                        "type": "",
                        "returnType": "Subject<SdsDialogRef<any>>",
                        "line": 75,
                        "description": "<p>Stream that emits when a dialog has been opened. </p>\n"
                    }
                },
                "_afterAllClosed": {
                    "name": "_afterAllClosed",
                    "getSignature": {
                        "name": "_afterAllClosed",
                        "type": "",
                        "returnType": "Subject<void>",
                        "line": 79
                    }
                }
            },
            "type": "injectable"
        }
    ],
    "classes": [
        {
            "name": "Button",
            "id": "class-Button-44980a77e66c975efb0bdd51a8eec576",
            "file": "libs/packages/components/src/lib/search-result-list/model/search-results.model.ts",
            "type": "class",
            "sourceCode": "import { EventEmitter } from '@angular/core';\r\n\r\nexport class SearchModel{\r\n    results: any[];\r\n    metadata: {\r\n      messages:Message[];\r\n    }\r\n  };\r\n  export class Message {\r\n    type: string;\r\n    title: string;\r\n    message:string;\r\n    classes: string;\r\n    buttons:Button[];\r\n  }\r\n  export class Button{\r\n    id: string;\r\n    text:string;\r\n    classes: string;\r\n    action: any;\r\n  } ",
            "properties": [
                {
                    "name": "action",
                    "type": "any",
                    "optional": false,
                    "description": "",
                    "line": 20
                },
                {
                    "name": "classes",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 19
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 17
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 18
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
            "name": "KeyHelper",
            "id": "class-KeyHelper-192cc8c4b6adbbcf8edd8ffcbfa23273",
            "file": "libs/packages/components/src/lib/key-helper/key-helper.ts",
            "type": "class",
            "sourceCode": "export class KeyHelper {\r\n\r\n  private _allowedKeys: string[] = [];\r\n\r\n  private _currentlySupported = [\r\n    'alt','enter','up','down','left','right','tab','esc','space',\r\n    'shift','backspace','1','2','3','4','5','6','7','8',\r\n    '9','0', 'delete'\r\n  ];\r\n\r\n  constructor (...keys) {\r\n    this._setAllowedKeys(...keys);\r\n  }\r\n\r\n  public isAllowed (event): boolean {\r\n    const val = this._allowedKeys\r\n      .reduce(\r\n        (val, key) => {\r\n          return KeyHelper.is(key, event) || val;\r\n        },\r\n        false\r\n      );\r\n    return val;\r\n  }\r\n\r\n  private _setAllowedKeys(...keys) {\r\n    keys.forEach(\r\n      key => {\r\n        if (this._currentlySupported.indexOf(key) !== -1) {\r\n          this._allowedKeys.push(key);\r\n        } else {\r\n          const ok = this._allowedToString();\r\n          const msg = `Only supports ${ok} at this time`;\r\n          throw new TypeError(msg);\r\n        }\r\n      }\r\n    );\r\n  }\r\n\r\n  private _allowedToString (): string {\r\n    return this._allowedKeys.join(', ');\r\n  }\r\n\r\n  public static getKeyCode (event: any): string {\r\n\r\n    if (!event) {\r\n      return undefined;\r\n    } else if (event.key) {\r\n      return event.key;\r\n    } else if (event.code) {\r\n      return event.code;\r\n    } else if (event.keyIdentifier) {\r\n      return event.keyIdentifier;\r\n    } else {\r\n      return undefined;\r\n    }\r\n\r\n  }\r\n\r\n  public static getNumberFromKey (event): number {\r\n    const tests = [\r\n      KeyHelper._zero, KeyHelper._one, KeyHelper._two,\r\n      KeyHelper._three, KeyHelper._four, KeyHelper._five,\r\n      KeyHelper._six, KeyHelper._seven, KeyHelper._eight,\r\n      KeyHelper._nine\r\n    ];\r\n\r\n    return tests.reduce(\r\n      (val: number | undefined, test: Function) => {\r\n        return val !== undefined\r\n          ? val\r\n          : test(event);\r\n      }, undefined\r\n    );\r\n  }\r\n\r\n  public static is (\r\n    validKeyParam: string,\r\n    event: KeyboardEvent | any): boolean {\r\n    let lowercased = validKeyParam.toLowerCase();\r\n    switch (lowercased) {\r\n      case 'alt'  :\r\n        return this._isAltKey(event);\r\n      case 'enter':\r\n        return this._isEnter(event);\r\n      case 'up':\r\n        return this._isArrowUp(event);\r\n      case 'down':\r\n        return this._isArrowDown(event);\r\n      case 'left':\r\n        return this._isArrowLeft(event);\r\n      case 'right':\r\n        return this._isArrowRight(event);\r\n      case 'tab':\r\n        return this._isTab(event);\r\n      case 'esc':\r\n        return this._isEscape(event);\r\n      case 'space':\r\n        return this._isSpace(event);\r\n      case 'shift':\r\n        return this._isShift(event);\r\n      case 'backspace':\r\n        return this._isBackspace(event);\r\n      case 'delete':\r\n        return this._isDelete(event);\r\n      case '0':\r\n        return this._isExpectedNumber(0, event);\r\n      case '1':\r\n        return this._isExpectedNumber(1, event);\r\n      case '2':\r\n        return this._isExpectedNumber(2, event);\r\n      case '3':\r\n        return this._isExpectedNumber(3, event);\r\n      case '4':\r\n        return this._isExpectedNumber(4, event);\r\n      case '5':\r\n        return this._isExpectedNumber(5, event);\r\n      case '6':\r\n        return this._isExpectedNumber(6, event);\r\n      case '7':\r\n        return this._isExpectedNumber(7, event);\r\n      case '8':\r\n        return this._isExpectedNumber(8, event);\r\n      case '9':\r\n        return this._isExpectedNumber(9, event);\r\n      default:\r\n        return false;\r\n    }\r\n  }\r\n\r\n  private static _isEnter (e: KeyboardEvent | any) {\r\n    if (e.code === 'Enter'\r\n      || e.key === 'Enter'\r\n      || e.keyIdentifier === 'Enter'\r\n      || e.which === 13\r\n      || e.charCode === 13\r\n      || e.keyCode === 13) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n  private static _isAltKey (e: KeyboardEvent | any) {\r\n    if (e.code === 'Alt'\r\n      || e.key === 'Alt'\r\n      || e.keyIdentifier === 'Alt'\r\n      || e.which === 18\r\n      || e.charCode === 18\r\n      || e.keyCode === 18) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n\r\n  private static _isArrowUp (e: KeyboardEvent | any) {\r\n    if (e.code === 'ArrowUp'\r\n      || e.key === 'ArrowUp'\r\n      || e.key === 'Up'\r\n      || e.keyIdentifier === 'Up'\r\n      || e.which === 38\r\n      || e.keyCode === 38) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  private static _isArrowDown (e: KeyboardEvent | any) {\r\n    if (e.code === 'ArrowDown'\r\n      || e.key === 'ArrowDown'\r\n      || e.key === 'Down'\r\n      || e.keyIdentifier === 'Down'\r\n      || e.which === 40\r\n      || e.keyCode === 40) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  private static _isArrowLeft (e: KeyboardEvent | any) {\r\n    if (e.code === 'ArrowLeft'\r\n      || e.key === 'ArrowLeft'\r\n      || e.key === 'Left'\r\n      || e.keyIdentifier === 'Left'\r\n      || e.which === 37\r\n      || e.keyCode === 37) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  private static _isArrowRight (e: KeyboardEvent | any) {\r\n    if (e.code === 'ArrowRight'\r\n      || e.key === 'ArrowRight'\r\n      || e.key === 'Right'\r\n      || e.keyIdentifier === 'Right'\r\n      || e.which === 39\r\n      || e.keyCode === 39) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  private static _isTab (e: KeyboardEvent | any) {\r\n    if (e.code === 'Tab'\r\n      || e.key === 'Tab'\r\n      || e.keyIdentifier === 'U+0009'\r\n      || e.which === 9\r\n      || e.keyCode === 9) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  private static _isEscape (e: KeyboardEvent | any) {\r\n    if (e.code === 'Escape'\r\n      || e.key === 'Escape'\r\n      || e.key === 'Esc'\r\n      || e.keyIdentifier === 'U+001B'\r\n      || e.which === 27\r\n      || e.keyCode === 27) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  private static _isSpace (e: KeyboardEvent | any) {\r\n    if (e.code === 'Space'\r\n      || e.key === ' '\r\n      || e.key === 'Spacebar'\r\n      || e.keyIdentifier === 'U+0020'\r\n      || e.which === 32\r\n      || e.keyCode === 32) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  private static _isShift (e: KeyboardEvent | any) {\r\n    if (e.code === 'ShiftLeft'\r\n      || e.code === 'ShiftRight'\r\n      || e.key === 'Shift'\r\n      || e.keyIdentifier === 'Shift'\r\n      || e.which === 16\r\n      || e.keyCode === 16) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  private static _isBackspace (e: KeyboardEvent | any) {\r\n    if (e.code === 'Backspace'\r\n      || e.key === 'Backspace'\r\n      || e.keyIdentifier === 'U+0008'\r\n      || e.which === 8\r\n      || e.keyCode === 8) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  private static _isDelete (e: KeyboardEvent | any) {\r\n    if (e.code === 'Delete'\r\n      || e.key === 'Delete'\r\n      || e.keyIdentifier === 'U+007F'\r\n      || e.which === 46\r\n      || e.keyCode === 46) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  private static _zero (e): number {\r\n    if (e.code === 'Digit0'\r\n      || e.code === 'Numpad0'\r\n      || e.key === 0\r\n      || e.keyCode === 48\r\n      || e.keyCode === 96\r\n      || e.keyIdentifier === 'U+0030'\r\n      || e.which === 48) {\r\n      return 0;\r\n    } else {\r\n      return undefined;\r\n    }\r\n  }\r\n\r\n  private static _one (e): number {\r\n    if (e.code === 'Digit1'\r\n      || e.code === 'Numpad1'\r\n      || e.key === 1\r\n      || e.keyCode === 49\r\n      || e.keyCode === 97\r\n      || e.keyIdentifier === 'U+0031'\r\n      || e.which === 49) {\r\n      return 1;\r\n    } else {\r\n      return undefined;\r\n    }\r\n  }\r\n\r\n  private static _two (e): number {\r\n    if (e.code === 'Digit2'\r\n      || e.code === 'Numpad2'\r\n      || e.key === 2\r\n      || e.keyCode === 50\r\n      || e.keyCode === 98\r\n      || e.keyIdentifier === 'U+0032'\r\n      || e.which === 50) {\r\n      return 2;\r\n    } else {\r\n      return undefined;\r\n    }\r\n  }\r\n\r\n  private static _three (e): number {\r\n    if (e.code === 'Digit3'\r\n      || e.code === 'Numpad3'\r\n      || e.key === 3\r\n      || e.keyCode === 51\r\n      || e.keyCode === 99\r\n      || e.keyIdentifier === 'U+0033'\r\n      || e.which === 51) {\r\n      return 3;\r\n    } else {\r\n      return undefined;\r\n    }\r\n  }\r\n\r\n  private static _four (e): number {\r\n    if (e.code === 'Digit4'\r\n      || e.code === 'Numpad4'\r\n      || e.key === 4\r\n      || e.keyCode === 52\r\n      || e.keyCode === 100\r\n      || e.keyIdentifier === 'U+0034'\r\n      || e.which === 52) {\r\n      return 4;\r\n    } else {\r\n      return undefined;\r\n    }\r\n  }\r\n  private static _five (e): number {\r\n    if (e.code === 'Digit5'\r\n      || e.code === 'Numpad5'\r\n      || e.key === 5\r\n      || e.keyCode === 53\r\n      || e.keyCode === 101\r\n      || e.keyIdentifier === 'U+0035'\r\n      || e.which === 53) {\r\n      return 5;\r\n    } else {\r\n      return undefined;\r\n    }\r\n  }\r\n\r\n  private static _six (e): number {\r\n    if (e.code === 'Digit6'\r\n      || e.code === 'Numpad6'\r\n      || e.key === 6\r\n      || e.keyCode === 54\r\n      || e.keyCode === 102\r\n      || e.keyIdentifier === 'U+0036'\r\n      || e.which === 54) {\r\n      return 6;\r\n    } else {\r\n      return undefined;\r\n    }\r\n  }\r\n\r\n  private static _seven (e): number {\r\n    if (e.code === 'Digit7'\r\n      || e.code === 'Numpad7'\r\n      || e.key === 7\r\n      || e.keyCode === 55\r\n      || e.keyCode === 103\r\n      || e.keyIdentifier === 'U+0037'\r\n      || e.which === 55) {\r\n      return 7;\r\n    } else {\r\n      return undefined;\r\n    }\r\n  }\r\n\r\n  private static _eight (e): number {\r\n    if (e.code === 'Digit8'\r\n      || e.code === 'Numpad8'\r\n      || e.key === 8\r\n      || e.keyCode === 56\r\n      || e.keyCode === 104\r\n      || e.keyIdentifier === 'U+0038'\r\n      || e.which === 56) {\r\n      return 8;\r\n    } else {\r\n      return undefined;\r\n    }\r\n  }\r\n\r\n  private static _nine (e): number {\r\n    if (e.code === 'Digit9'\r\n      || e.code === 'Numpad9'\r\n      || e.key === 9\r\n      || e.keyCode === 57\r\n      || e.keyCode === 105\r\n      || e.keyIdentifier === 'U+0039'\r\n      || e.which === 57) {\r\n      return 9;\r\n    } else {\r\n      return undefined;\r\n    }\r\n  }\r\n\r\n  private static _isExpectedNumber (expected, event)\r\n    : boolean {\r\n    return expected === KeyHelper.getNumberFromKey(event);\r\n  }\r\n\r\n}\r\n\r\nexport enum KEYS {\r\n  'ENTER' = 'enter',\r\n  'ALT' = 'alt',\r\n  'UP' = 'up',\r\n  'DOWN' = 'down',\r\n  'LEFT' = 'left',\r\n  'RIGHT' = 'right',\r\n  'TAB' = 'tab',\r\n  'ESC' = 'esc',\r\n  'SPACE' = 'space',\r\n  'SHIFT' = 'shift',\r\n  'BACKSPACE' = 'backspace',\r\n  'ONE' = '1',\r\n  'TWO' = '2',\r\n  'THREE' = '3',\r\n  'FOUR' = '4',\r\n  'FIVE' = '5',\r\n  'SIX' = '6',\r\n  'SEVEN' = '7',\r\n  'EIGHT' = '8',\r\n  'NINE' = '9',\r\n  'ZERO' = '0',\r\n  'DELETE' = 'delete'\r\n}\r\n\r\n",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "keys",
                        "type": "any[]",
                        "dotDotDotToken": true
                    }
                ],
                "line": 9,
                "jsdoctags": [
                    {
                        "name": "keys",
                        "type": "any[]",
                        "dotDotDotToken": true,
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "properties": [
                {
                    "name": "_allowedKeys",
                    "defaultValue": "[]",
                    "type": "string[]",
                    "optional": false,
                    "description": "",
                    "line": 3,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_currentlySupported",
                    "defaultValue": "[\r\n    'alt','enter','up','down','left','right','tab','esc','space',\r\n    'shift','backspace','1','2','3','4','5','6','7','8',\r\n    '9','0', 'delete'\r\n  ]",
                    "type": "[]",
                    "optional": false,
                    "description": "",
                    "line": 5,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methods": [
                {
                    "name": "_allowedToString",
                    "args": [],
                    "optional": false,
                    "returnType": "string",
                    "typeParameters": [],
                    "line": 40,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_eight",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 395,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_five",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 353,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_four",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 340,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isAltKey",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 143,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isArrowDown",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 170,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isArrowLeft",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 183,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isArrowRight",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 196,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isArrowUp",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 157,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isBackspace",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 260,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isDelete",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 272,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isEnter",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 131,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isEscape",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 221,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isExpectedNumber",
                    "args": [
                        {
                            "name": "expected",
                            "type": ""
                        },
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 423,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "expected",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isShift",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 247,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isSpace",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 234,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isTab",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 209,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_nine",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 409,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_one",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 298,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_setAllowedKeys",
                    "args": [
                        {
                            "name": "keys",
                            "type": "any[]",
                            "dotDotDotToken": true
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 26,
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "keys",
                            "type": "any[]",
                            "dotDotDotToken": true,
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_seven",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 381,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_six",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 367,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_three",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 326,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_two",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 312,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_zero",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 284,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "getKeyCode",
                    "args": [
                        {
                            "name": "event",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "string",
                    "typeParameters": [],
                    "line": 44,
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "getNumberFromKey",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 60,
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "is",
                    "args": [
                        {
                            "name": "validKeyParam",
                            "type": "string"
                        },
                        {
                            "name": "event",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 77,
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "validKeyParam",
                            "type": "string",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "event",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "isAllowed",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 15,
                    "modifierKind": [
                        114
                    ],
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "Message",
            "id": "class-Message-44980a77e66c975efb0bdd51a8eec576",
            "file": "libs/packages/components/src/lib/search-result-list/model/search-results.model.ts",
            "type": "class",
            "sourceCode": "import { EventEmitter } from '@angular/core';\r\n\r\nexport class SearchModel{\r\n    results: any[];\r\n    metadata: {\r\n      messages:Message[];\r\n    }\r\n  };\r\n  export class Message {\r\n    type: string;\r\n    title: string;\r\n    message:string;\r\n    classes: string;\r\n    buttons:Button[];\r\n  }\r\n  export class Button{\r\n    id: string;\r\n    text:string;\r\n    classes: string;\r\n    action: any;\r\n  } ",
            "properties": [
                {
                    "name": "buttons",
                    "type": "Button[]",
                    "optional": false,
                    "description": "",
                    "line": 14
                },
                {
                    "name": "classes",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 13
                },
                {
                    "name": "message",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 12
                },
                {
                    "name": "title",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 11
                },
                {
                    "name": "type",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 10
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
            "name": "NavigationHelper",
            "id": "class-NavigationHelper-469c5886b95fa311ff9daab299c0818e",
            "file": "libs/packages/components/src/lib/common-navigation/navigation-helper.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode } from './common-navigation-model';\r\nexport class NavigationHelper {\r\n\r\n    /**\r\n     * checks if link is internal\r\n     * @param link \r\n     */\r\n    isLinkInternal(link: INavigationLink) {\r\n        return link.mode === NavigationMode.INTERNAL;\r\n    }\r\n\r\n    /**\r\n     * checks if link is external\r\n     * @param link \r\n     */\r\n    isLinkExternal(link: INavigationLink) {\r\n        return link.mode === NavigationMode.EXTERNAL;\r\n    }\r\n}",
            "properties": [],
            "methods": [
                {
                    "name": "isLinkExternal",
                    "args": [
                        {
                            "name": "link",
                            "type": "INavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 16,
                    "description": "<p>checks if link is external</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 354,
                                "end": 358,
                                "flags": 0,
                                "escapedText": "link"
                            },
                            "type": "INavigationLink",
                            "tagName": {
                                "pos": 348,
                                "end": 353,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "isLinkInternal",
                    "args": [
                        {
                            "name": "link",
                            "type": "INavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 8,
                    "description": "<p>checks if link is internal</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 171,
                                "end": 175,
                                "flags": 0,
                                "escapedText": "link"
                            },
                            "type": "INavigationLink",
                            "tagName": {
                                "pos": 165,
                                "end": 170,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "NavigationLink",
            "id": "class-NavigationLink-d25c2dec7563980ed43433307b1100a4",
            "file": "libs/packages/components/src/lib/side-navigation/model/side-navigation-model.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '../../common-navigation/common-navigation-model';\r\n\r\nexport class SideNavigationModel {\r\n\r\n    /**\r\n     * \r\n     */\r\n    navigationLinks: NavigationLink[];\r\n}\r\n\r\n\r\nexport class NavigationLink implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text to be displayed in the link or button\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route \r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * List of child navigation items that will show when no route is provieded\r\n     */\r\n    children?: NavigationLink[];\r\n\r\n    /**\r\n     * Identifier for the item when search for selected \r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected \r\n     */\r\n    selected?: boolean;\r\n\r\n\r\n    /**\r\n     * Query string paramaters supporeted with external and internal links\r\n     * ex. { 'name': 'value',...}\r\n     */\r\n    queryParams?: {\r\n        [k: string]: any;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n",
            "properties": [
                {
                    "name": "children",
                    "type": "NavigationLink[]",
                    "optional": true,
                    "description": "<p>List of child navigation items that will show when no route is provieded</p>\n",
                    "line": 32
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Identifier for the item when search for selected </p>\n",
                    "line": 37
                },
                {
                    "name": "mode",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 17
                },
                {
                    "name": "queryParams",
                    "type": "literal type",
                    "optional": true,
                    "description": "<p>Query string paramaters supporeted with external and internal links\nex. { &#39;name&#39;: &#39;value&#39;,...}</p>\n",
                    "line": 49
                },
                {
                    "name": "route",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route </p>\n",
                    "line": 27
                },
                {
                    "name": "selected",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>Status of if the item is selected </p>\n",
                    "line": 42
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed in the link or button</p>\n",
                    "line": 22
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "implements": [
                "Selectable",
                "INavigationLink"
            ]
        },
        {
            "name": "PaginationConfigurationModel",
            "id": "class-PaginationConfigurationModel-98ba5c16d9b8eac8309de52a021f4a16",
            "file": "libs/packages/components/src/lib/pagination/model/paginationModel.ts",
            "type": "class",
            "sourceCode": "export class PaginationConfigurationModel {\r\n\r\n    /**\r\n     * used to distinguish fields\r\n     */\r\n    id: string;\r\n}\r\n\r\nexport class PaginationModel {\r\n\r\n    /**\r\n     * current page number\r\n     */\r\n    pageNumber: number;\r\n\r\n    /**\r\n     * size of page ex 25, 50,100\r\n     */\r\n    pageSize: number;\r\n\r\n    /**\r\n     * total number of pages\r\n     */\r\n    totalPages: number;\r\n}\r\n",
            "properties": [
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>used to distinguish fields</p>\n",
                    "line": 7
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
            "name": "PaginationModel",
            "id": "class-PaginationModel-98ba5c16d9b8eac8309de52a021f4a16",
            "file": "libs/packages/components/src/lib/pagination/model/paginationModel.ts",
            "type": "class",
            "sourceCode": "export class PaginationConfigurationModel {\r\n\r\n    /**\r\n     * used to distinguish fields\r\n     */\r\n    id: string;\r\n}\r\n\r\nexport class PaginationModel {\r\n\r\n    /**\r\n     * current page number\r\n     */\r\n    pageNumber: number;\r\n\r\n    /**\r\n     * size of page ex 25, 50,100\r\n     */\r\n    pageSize: number;\r\n\r\n    /**\r\n     * total number of pages\r\n     */\r\n    totalPages: number;\r\n}\r\n",
            "properties": [
                {
                    "name": "pageNumber",
                    "type": "number",
                    "optional": false,
                    "description": "<p>current page number</p>\n",
                    "line": 15
                },
                {
                    "name": "pageSize",
                    "type": "number",
                    "optional": false,
                    "description": "<p>size of page ex 25, 50,100</p>\n",
                    "line": 20
                },
                {
                    "name": "totalPages",
                    "type": "number",
                    "optional": false,
                    "description": "<p>total number of pages</p>\n",
                    "line": 25
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
            "name": "SDSAutocompletelConfiguration",
            "id": "class-SDSAutocompletelConfiguration-de8a16f6c82b65750ae06726889ca2bc",
            "file": "libs/packages/components/src/lib/autocomplete/models/SDSAutocompletelConfiguration.model.ts",
            "type": "class",
            "sourceCode": "import { SDSSelectedResultConfiguration } from '../../selected-result/models/SDSSelectedResultConfiguration';\r\nimport { SDSAutocompleteSearchConfiguration } from '../../autocomplete-search/models/SDSAutocompleteConfiguration';\r\nimport { SelectionMode } from '../../selected-result/models/sds-selected-item-model-helper';\r\n\r\nexport class SDSAutocompletelConfiguration\r\n  implements\r\n    SDSSelectedResultConfiguration,\r\n    SDSAutocompleteSearchConfiguration {\r\n  /**\r\n   * sets the default debounce time to 250 milliseconds\r\n   */\r\n  constructor() {\r\n    this.debounceTime = 250;\r\n    this.minimumCharacterCountSearch = 0;\r\n  }\r\n\r\n  /**\r\n   * Used to describe the drop down (Text should match the label that will be supplied)\r\n   */\r\n  public labelText: string;\r\n\r\n  /**\r\n   * Used for the Id of the control\r\n   */\r\n  public id: string;\r\n\r\n  /**\r\n   *  This is the primary field used to identify each object in the results\r\n   */\r\n  public primaryKeyField: string;\r\n\r\n  /**\r\n   *  Property from supplied model used for the top part of the basic template\r\n   */\r\n  public primaryTextField: string;\r\n\r\n  /**\r\n   *  Property from supplied model used for the bottom part of the basic template\r\n   */\r\n  public secondaryTextField: string;\r\n\r\n  /**\r\n   *  Sets the time waited for addional key actions Default is 250 milliseconds\r\n   */\r\n  public debounceTime: number;\r\n\r\n  /**\r\n   * Place holder text for autocomplete input\r\n   */\r\n  public autocompletePlaceHolderText: string;\r\n\r\n  /**\r\n   * Mininumn Characters for search\r\n   */\r\n  public minimumCharacterCountSearch: number;\r\n\r\n  /**\r\n   * Mode of the model either allows a single item or multiple items\r\n   */\r\n  public selectionMode: SelectionMode = SelectionMode.SINGLE;\r\n\r\n  /**\r\n   * Allows option to allow user text not in the standard results\r\n   */\r\n  public isFreeTextEnabled: boolean = false;\r\n\r\n  /**\r\n   * Text appeneded ad the end of free text\r\n   */\r\n  public freeTextSubtext: string = 'search';\r\n\r\n  /**\r\n   * Focus into autocomplete search\r\n   */\r\n  public focusInSearch: boolean = true;\r\n\r\n  /**\r\n   * The aria-label for the auto-complete\r\n   */\r\n  public ariaLabelText: string = 'Auto Complete';\r\n\r\n  /**\r\n   * To enable the tag mode\r\n   */\r\n  public isTagModeEnabled: boolean = false;\r\n\r\n  /**\r\n   * To make input readonly\r\n   */\r\n  public inputReadOnly = false;\r\n\r\n  /**\r\n   * Name of the children filed\r\n   */\r\n  public groupByChild: string = 'children';\r\n\r\n  /**\r\n   * To enable the Grouping mode\r\n   */\r\n  public isGroupingEnabled: boolean = false;\r\n\r\n  /**\r\n   * To enable the Group item selectable\r\n   */\r\n  public isSelectableGroup: boolean = true;\r\n}\r\n",
            "constructorObj": {
                "name": "constructor",
                "description": "<p>sets the default debounce time to 250 milliseconds</p>\n",
                "args": [],
                "line": 8
            },
            "properties": [
                {
                    "name": "ariaLabelText",
                    "defaultValue": "'Auto Complete'",
                    "type": "string",
                    "optional": false,
                    "description": "<p>The aria-label for the auto-complete</p>\n",
                    "line": 80,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "autocompletePlaceHolderText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Place holder text for autocomplete input</p>\n",
                    "line": 50,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "debounceTime",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Sets the time waited for addional key actions Default is 250 milliseconds</p>\n",
                    "line": 45,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "focusInSearch",
                    "defaultValue": "true",
                    "type": "boolean",
                    "optional": false,
                    "description": "<p>Focus into autocomplete search</p>\n",
                    "line": 75,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "freeTextSubtext",
                    "defaultValue": "'search'",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text appeneded ad the end of free text</p>\n",
                    "line": 70,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "groupByChild",
                    "defaultValue": "'children'",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Name of the children filed</p>\n",
                    "line": 95,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Used for the Id of the control</p>\n",
                    "line": 25,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "inputReadOnly",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "<p>To make input readonly</p>\n",
                    "line": 90,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "isFreeTextEnabled",
                    "defaultValue": "false",
                    "type": "boolean",
                    "optional": false,
                    "description": "<p>Allows option to allow user text not in the standard results</p>\n",
                    "line": 65,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "isGroupingEnabled",
                    "defaultValue": "false",
                    "type": "boolean",
                    "optional": false,
                    "description": "<p>To enable the Grouping mode</p>\n",
                    "line": 100,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "isSelectableGroup",
                    "defaultValue": "true",
                    "type": "boolean",
                    "optional": false,
                    "description": "<p>To enable the Group item selectable</p>\n",
                    "line": 105,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "isTagModeEnabled",
                    "defaultValue": "false",
                    "type": "boolean",
                    "optional": false,
                    "description": "<p>To enable the tag mode</p>\n",
                    "line": 85,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "labelText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Used to describe the drop down (Text should match the label that will be supplied)</p>\n",
                    "line": 20,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "minimumCharacterCountSearch",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Mininumn Characters for search</p>\n",
                    "line": 55,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "primaryKeyField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>This is the primary field used to identify each object in the results</p>\n",
                    "line": 30,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "primaryTextField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Property from supplied model used for the top part of the basic template</p>\n",
                    "line": 35,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "secondaryTextField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Property from supplied model used for the bottom part of the basic template</p>\n",
                    "line": 40,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "selectionMode",
                    "defaultValue": "SelectionMode.SINGLE",
                    "type": "SelectionMode",
                    "optional": false,
                    "description": "<p>Mode of the model either allows a single item or multiple items</p>\n",
                    "line": 60,
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "implements": [
                "SDSSelectedResultConfiguration",
                "SDSAutocompleteSearchConfiguration"
            ]
        },
        {
            "name": "SDSAutocompleteSearchConfiguration",
            "id": "class-SDSAutocompleteSearchConfiguration-31c9c1e8e8cdccf52610eb7328540fc0",
            "file": "libs/packages/components/src/lib/autocomplete-search/models/SDSAutocompleteConfiguration.ts",
            "type": "class",
            "sourceCode": "import { SelectionMode } from '../../selected-result/models/sds-selected-item-model-helper';\r\n\r\nexport class SDSAutocompleteSearchConfiguration {\r\n  /**\r\n   * sets the default debounce time to 250 milliseconds\r\n   */\r\n  constructor() {\r\n    this.debounceTime = 250;\r\n    this.minimumCharacterCountSearch = 0;\r\n  }\r\n\r\n  /**\r\n   * Used to describe the drop down (Text should match the label that will be supplied)\r\n   */\r\n  public labelText: string;\r\n\r\n  /**\r\n   * Used for the Id of the control\r\n   */\r\n  public id: string;\r\n\r\n  /**\r\n   *  This is the primary field used to identify each object in the results\r\n   */\r\n  public primaryKeyField: string;\r\n\r\n  /**\r\n   *  Property from supplied model used for the top part of the basic template\r\n   *  and the text for single selection\r\n   */\r\n  public primaryTextField: string;\r\n\r\n  /**\r\n   *  Property from supplied model used for the bottom part of the basic template\r\n   */\r\n  public secondaryTextField: string;\r\n\r\n  /**\r\n   *  Sets the time waited for addional key actions Default is 250 milliseconds\r\n   */\r\n  public debounceTime: number;\r\n\r\n  /**\r\n   * Place holder text for autocomplete input\r\n   */\r\n  public autocompletePlaceHolderText: string;\r\n\r\n  /**\r\n   * Mininumn Characters for search\r\n   */\r\n  public minimumCharacterCountSearch: number;\r\n\r\n  /**\r\n   * Mode of the model either allows a single item or multiple items\r\n   */\r\n  public selectionMode: SelectionMode = SelectionMode.SINGLE;\r\n\r\n  /**\r\n   * Allows option to allow user text not in the standard results\r\n   */\r\n  public isFreeTextEnabled: boolean = false;\r\n\r\n  /**\r\n   * Text appeneded ad the end of free text\r\n   */\r\n  public freeTextSubtext: string = 'search';\r\n\r\n  /**\r\n   * Focus into autocomplete search\r\n   */\r\n  public focusInSearch: boolean = true;\r\n\r\n  /**\r\n   * The aria-label for the auto-complete\r\n   */\r\n  public ariaLabelText: string = 'Auto Complete';\r\n\r\n  /**\r\n   * To enable the tag mode\r\n   */\r\n  public isTagModeEnabled: boolean = false;\r\n\r\n  /**\r\n   * To make input readonly\r\n   */\r\n  public inputReadOnly = false;\r\n\r\n  /**\r\n   * Name of the children filed\r\n   */\r\n  public groupByChild: string = 'children';\r\n\r\n  /**\r\n   * To enable the Grouping mode\r\n   */\r\n  public isGroupingEnabled: boolean = false;\r\n\r\n  /**\r\n   * To enable the Group item selectable\r\n   */\r\n  public isSelectableGroup: boolean = true;\r\n}\r\n",
            "constructorObj": {
                "name": "constructor",
                "description": "<p>sets the default debounce time to 250 milliseconds</p>\n",
                "args": [],
                "line": 3
            },
            "properties": [
                {
                    "name": "ariaLabelText",
                    "defaultValue": "'Auto Complete'",
                    "type": "string",
                    "optional": false,
                    "description": "<p>The aria-label for the auto-complete</p>\n",
                    "line": 76,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "autocompletePlaceHolderText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Place holder text for autocomplete input</p>\n",
                    "line": 46,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "debounceTime",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Sets the time waited for addional key actions Default is 250 milliseconds</p>\n",
                    "line": 41,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "focusInSearch",
                    "defaultValue": "true",
                    "type": "boolean",
                    "optional": false,
                    "description": "<p>Focus into autocomplete search</p>\n",
                    "line": 71,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "freeTextSubtext",
                    "defaultValue": "'search'",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text appeneded ad the end of free text</p>\n",
                    "line": 66,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "groupByChild",
                    "defaultValue": "'children'",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Name of the children filed</p>\n",
                    "line": 91,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Used for the Id of the control</p>\n",
                    "line": 20,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "inputReadOnly",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "<p>To make input readonly</p>\n",
                    "line": 86,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "isFreeTextEnabled",
                    "defaultValue": "false",
                    "type": "boolean",
                    "optional": false,
                    "description": "<p>Allows option to allow user text not in the standard results</p>\n",
                    "line": 61,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "isGroupingEnabled",
                    "defaultValue": "false",
                    "type": "boolean",
                    "optional": false,
                    "description": "<p>To enable the Grouping mode</p>\n",
                    "line": 96,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "isSelectableGroup",
                    "defaultValue": "true",
                    "type": "boolean",
                    "optional": false,
                    "description": "<p>To enable the Group item selectable</p>\n",
                    "line": 101,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "isTagModeEnabled",
                    "defaultValue": "false",
                    "type": "boolean",
                    "optional": false,
                    "description": "<p>To enable the tag mode</p>\n",
                    "line": 81,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "labelText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Used to describe the drop down (Text should match the label that will be supplied)</p>\n",
                    "line": 15,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "minimumCharacterCountSearch",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Mininumn Characters for search</p>\n",
                    "line": 51,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "primaryKeyField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>This is the primary field used to identify each object in the results</p>\n",
                    "line": 25,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "primaryTextField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Property from supplied model used for the top part of the basic template\nand the text for single selection</p>\n",
                    "line": 31,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "secondaryTextField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Property from supplied model used for the bottom part of the basic template</p>\n",
                    "line": 36,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "selectionMode",
                    "defaultValue": "SelectionMode.SINGLE",
                    "type": "SelectionMode",
                    "optional": false,
                    "description": "<p>Mode of the model either allows a single item or multiple items</p>\n",
                    "line": 56,
                    "modifierKind": [
                        114
                    ]
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
            "name": "SdsDialogConfig",
            "id": "class-SdsDialogConfig-175f949f0e7cf719ceefefa33cd1f398",
            "file": "libs/packages/components/src/lib/dialog/dialog-config.ts",
            "type": "class",
            "sourceCode": "import {ViewContainerRef} from '@angular/core';\r\nimport {Direction} from '@angular/cdk/bidi';\r\nimport {ScrollStrategy} from '@angular/cdk/overlay';\r\n\r\n/** Valid ARIA roles for a dialog element. */\r\nexport type DialogRole = 'dialog' | 'alertdialog';\r\n\r\n/** Possible overrides for a dialog's position. */\r\nexport interface DialogPosition {\r\n  /** Override for the dialog's top position. */\r\n  top?: string;\r\n\r\n  /** Override for the dialog's bottom position. */\r\n  bottom?: string;\r\n\r\n  /** Override for the dialog's left position. */\r\n  left?: string;\r\n\r\n  /** Override for the dialog's right position. */\r\n  right?: string;\r\n}\r\n\r\n/**\r\n * Configuration for opening a modal dialog with the SdsDialog service.\r\n */\r\nexport class SdsDialogConfig<D = any> {\r\n\r\n  /**\r\n   * Where the attached component should live in Angular's *logical* component tree.\r\n   * This affects what is available for injection and the change detection order for the\r\n   * component instantiated inside of the dialog. This does not affect where the dialog\r\n   * content will be rendered.\r\n   */\r\n  viewContainerRef?: ViewContainerRef;\r\n\r\n  /** ID for the dialog. If omitted, a unique one will be generated. */\r\n  id?: string;\r\n\r\n  /** The ARIA role of the dialog element. */\r\n  role?: DialogRole = 'dialog';\r\n\r\n  /** Custom class for the overlay pane. */\r\n  panelClass?: string | string[] = '';\r\n\r\n  /** Whether the dialog has a backdrop. */\r\n  hasBackdrop? = true;\r\n\r\n  /** Custom class for the backdrop, */\r\n  backdropClass? = '';\r\n\r\n  /** Whether the user can use escape or clicking on the backdrop to close the modal. */\r\n  disableClose? = false;\r\n\r\n  /** Width of the dialog. */\r\n  width? = '';\r\n\r\n  /** Height of the dialog. */\r\n  height? = '';\r\n\r\n  /** Min-width of the dialog. If a number is provided, pixel units are assumed. */\r\n  minWidth?: number | string;\r\n\r\n  /** Min-height of the dialog. If a number is provided, pixel units are assumed. */\r\n  minHeight?: number | string;\r\n\r\n  /** Max-width of the dialog. If a number is provided, pixel units are assumed. Defaults to 80vw */\r\n  maxWidth?: number | string = '80vw';\r\n\r\n  /** Max-height of the dialog. If a number is provided, pixel units are assumed. */\r\n  maxHeight?: number | string;\r\n\r\n  /** Position overrides. */\r\n  position?: DialogPosition;\r\n\r\n  /** Data being injected into the child component. */\r\n  data?: D | null = null;\r\n\r\n  /** Layout direction for the dialog's content. */\r\n  direction?: Direction;\r\n\r\n  /** ID of the element that describes the dialog. */\r\n  ariaDescribedBy?: string | null = null;\r\n\r\n  /** Aria label to assign to the dialog element */\r\n  ariaLabel?: string | null = null;\r\n\r\n  /** Whether the dialog should focus the first focusable element on open. */\r\n  autoFocus? = true;\r\n\r\n  /**\r\n   * Whether the dialog should restore focus to the\r\n   * previously-focused element, after it's closed.\r\n   */\r\n  restoreFocus? = true;\r\n\r\n  /** Scroll strategy to be used for the dialog. */\r\n  scrollStrategy?: ScrollStrategy;\r\n\r\n  /**\r\n   * Whether the dialog should close when the user goes backwards/forwards in history.\r\n   * Note that this usually doesn't include clicking on links (unless the user is using\r\n   * the `HashLocationStrategy`).\r\n   */\r\n  closeOnNavigation? = true;\r\n\r\n  /**\r\n   * Wheter the dialog its an alert\r\n   */\r\n  alert?: 'warning' | 'info' | 'error';\r\n\r\n  /**\r\n   * Whether to display the close button in dialog header\r\n   */\r\n  displayCloseBtn? = true;\r\n}\r\n",
            "properties": [
                {
                    "name": "alert",
                    "type": "\"warning\" | \"info\" | \"error\"",
                    "optional": true,
                    "description": "<p>Wheter the dialog its an alert</p>\n",
                    "line": 109
                },
                {
                    "name": "ariaDescribedBy",
                    "defaultValue": "null",
                    "type": "string | null",
                    "optional": true,
                    "description": "<p>ID of the element that describes the dialog. </p>\n",
                    "line": 82
                },
                {
                    "name": "ariaLabel",
                    "defaultValue": "null",
                    "type": "string | null",
                    "optional": true,
                    "description": "<p>Aria label to assign to the dialog element </p>\n",
                    "line": 85
                },
                {
                    "name": "autoFocus",
                    "defaultValue": "true",
                    "type": "",
                    "optional": true,
                    "description": "<p>Whether the dialog should focus the first focusable element on open. </p>\n",
                    "line": 88
                },
                {
                    "name": "backdropClass",
                    "defaultValue": "''",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Custom class for the backdrop, </p>\n",
                    "line": 49
                },
                {
                    "name": "closeOnNavigation",
                    "defaultValue": "true",
                    "type": "",
                    "optional": true,
                    "description": "<p>Whether the dialog should close when the user goes backwards/forwards in history.\nNote that this usually doesn&#39;t include clicking on links (unless the user is using\nthe <code>HashLocationStrategy</code>).</p>\n",
                    "line": 104
                },
                {
                    "name": "data",
                    "defaultValue": "null",
                    "type": "D | null",
                    "optional": true,
                    "description": "<p>Data being injected into the child component. </p>\n",
                    "line": 76
                },
                {
                    "name": "direction",
                    "type": "Direction",
                    "optional": true,
                    "description": "<p>Layout direction for the dialog&#39;s content. </p>\n",
                    "line": 79
                },
                {
                    "name": "disableClose",
                    "defaultValue": "false",
                    "type": "",
                    "optional": true,
                    "description": "<p>Whether the user can use escape or clicking on the backdrop to close the modal. </p>\n",
                    "line": 52
                },
                {
                    "name": "displayCloseBtn",
                    "defaultValue": "true",
                    "type": "",
                    "optional": true,
                    "description": "<p>Whether to display the close button in dialog header</p>\n",
                    "line": 114
                },
                {
                    "name": "hasBackdrop",
                    "defaultValue": "true",
                    "type": "",
                    "optional": true,
                    "description": "<p>Whether the dialog has a backdrop. </p>\n",
                    "line": 46
                },
                {
                    "name": "height",
                    "defaultValue": "''",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Height of the dialog. </p>\n",
                    "line": 58
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": true,
                    "description": "<p>ID for the dialog. If omitted, a unique one will be generated. </p>\n",
                    "line": 37
                },
                {
                    "name": "maxHeight",
                    "type": "number | string",
                    "optional": true,
                    "description": "<p>Max-height of the dialog. If a number is provided, pixel units are assumed. </p>\n",
                    "line": 70
                },
                {
                    "name": "maxWidth",
                    "defaultValue": "'80vw'",
                    "type": "number | string",
                    "optional": true,
                    "description": "<p>Max-width of the dialog. If a number is provided, pixel units are assumed. Defaults to 80vw </p>\n",
                    "line": 67
                },
                {
                    "name": "minHeight",
                    "type": "number | string",
                    "optional": true,
                    "description": "<p>Min-height of the dialog. If a number is provided, pixel units are assumed. </p>\n",
                    "line": 64
                },
                {
                    "name": "minWidth",
                    "type": "number | string",
                    "optional": true,
                    "description": "<p>Min-width of the dialog. If a number is provided, pixel units are assumed. </p>\n",
                    "line": 61
                },
                {
                    "name": "panelClass",
                    "defaultValue": "''",
                    "type": "string | string[]",
                    "optional": true,
                    "description": "<p>Custom class for the overlay pane. </p>\n",
                    "line": 43
                },
                {
                    "name": "position",
                    "type": "DialogPosition",
                    "optional": true,
                    "description": "<p>Position overrides. </p>\n",
                    "line": 73
                },
                {
                    "name": "restoreFocus",
                    "defaultValue": "true",
                    "type": "",
                    "optional": true,
                    "description": "<p>Whether the dialog should restore focus to the\npreviously-focused element, after it&#39;s closed.</p>\n",
                    "line": 94
                },
                {
                    "name": "role",
                    "defaultValue": "'dialog'",
                    "type": "DialogRole",
                    "optional": true,
                    "description": "<p>The ARIA role of the dialog element. </p>\n",
                    "line": 40
                },
                {
                    "name": "scrollStrategy",
                    "type": "ScrollStrategy",
                    "optional": true,
                    "description": "<p>Scroll strategy to be used for the dialog. </p>\n",
                    "line": 97
                },
                {
                    "name": "viewContainerRef",
                    "type": "ViewContainerRef",
                    "optional": true,
                    "description": "<p>Where the attached component should live in Angular&#39;s <em>logical</em> component tree.\nThis affects what is available for injection and the change detection order for the\ncomponent instantiated inside of the dialog. This does not affect where the dialog\ncontent will be rendered.</p>\n",
                    "line": 34
                },
                {
                    "name": "width",
                    "defaultValue": "''",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Width of the dialog. </p>\n",
                    "line": 55
                }
            ],
            "description": "<p>Configuration for opening a modal dialog with the SdsDialog service.</p>\n",
            "rawdescription": "Configuration for opening a modal dialog with the SdsDialog service.",
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "SdsDialogRef",
            "id": "class-SdsDialogRef-aa7c3af4d9c8a7ebd932b36468b5f9a1",
            "file": "libs/packages/components/src/lib/dialog/dialog-ref.ts",
            "type": "class",
            "sourceCode": "import {ESCAPE} from '@angular/cdk/keycodes';\r\nimport {GlobalPositionStrategy, OverlayRef} from '@angular/cdk/overlay';\r\nimport {Location} from '@angular/common';\r\nimport {Observable, Subject} from 'rxjs';\r\nimport {filter, take} from 'rxjs/operators';\r\nimport {DialogPosition} from './dialog-config';\r\nimport {SdsDialogContainerComponent} from './dialog-container.component';\r\n\r\n// Counter for unique dialog ids.\r\nlet uniqueId = 0;\r\n\r\n/**\r\n * Reference to a dialog opened via the SdsDialog service.\r\n */\r\nexport class SdsDialogRef<T, R = any> {\r\n  /** The instance of component opened into the dialog. */\r\n  componentInstance: T;\r\n\r\n  /** Whether the user is allowed to close the dialog. */\r\n  disableClose: boolean | undefined = this._containerInstance._config.disableClose;\r\n\r\n  /** Subject for notifying the user that the dialog has finished opening. */\r\n  private readonly _afterOpened = new Subject<void>();\r\n\r\n  /** Subject for notifying the user that the dialog has finished closing. */\r\n  private readonly _afterClosed = new Subject<R | undefined>();\r\n\r\n  /** Subject for notifying the user that the dialog has started closing. */\r\n  private readonly _beforeClosed = new Subject<R | undefined>();\r\n\r\n  /** Result to be passed to afterClosed. */\r\n  private _result: R | undefined;\r\n\r\n  constructor(\r\n    private _overlayRef: OverlayRef,\r\n    public _containerInstance: SdsDialogContainerComponent,\r\n    _location?: Location,\r\n    readonly id: string = `sds-dialog-${uniqueId++}`) {\r\n\r\n    // Pass the id along to the container.\r\n    _containerInstance._id = id;\r\n\r\n    // Emit when opening animation completes\r\n    _containerInstance._animationStateChanged.pipe(\r\n      filter(event => event.phaseName === 'done' && event.toState === 'enter'),\r\n      take(1)\r\n    )\r\n    .subscribe(() => {\r\n      this._afterOpened.next();\r\n      this._afterOpened.complete();\r\n    });\r\n\r\n    // Dispose overlay when closing animation is complete\r\n    _containerInstance._animationStateChanged.pipe(\r\n      filter(event => event.phaseName === 'done' && event.toState === 'exit'),\r\n      take(1)\r\n    ).subscribe(() => this._overlayRef.dispose());\r\n\r\n    _overlayRef.detachments().subscribe(() => {\r\n      this._beforeClosed.next(this._result);\r\n      this._beforeClosed.complete();\r\n      this._afterClosed.next(this._result);\r\n      this._afterClosed.complete();\r\n      this.componentInstance = null!;\r\n      this._overlayRef.dispose();\r\n    });\r\n\r\n    _overlayRef.keydownEvents()\r\n      .pipe(filter(event => event.keyCode === ESCAPE && !this.disableClose))\r\n      .subscribe(() => this.close());\r\n  }\r\n\r\n  /**\r\n   * Close the dialog.\r\n   * @param dialogResult Optional result to return to the dialog opener.\r\n   */\r\n  close(dialogResult?: R): void {\r\n    this._result = dialogResult;\r\n\r\n    // Transition the backdrop in parallel to the dialog.\r\n    this._containerInstance._animationStateChanged.pipe(\r\n      filter(event => event.phaseName === 'start'),\r\n      take(1)\r\n    )\r\n    .subscribe(() => {\r\n      this._beforeClosed.next(dialogResult);\r\n      this._beforeClosed.complete();\r\n      this._overlayRef.detachBackdrop();\r\n    });\r\n\r\n    this._containerInstance._startExitAnimation();\r\n  }\r\n\r\n  /**\r\n   * Gets an observable that is notified when the dialog is finished opening.\r\n   */\r\n  afterOpened(): Observable<void> {\r\n    return this._afterOpened.asObservable();\r\n  }\r\n\r\n  /**\r\n   * Gets an observable that is notified when the dialog is finished closing.\r\n   */\r\n  afterClosed(): Observable<R | undefined> {\r\n    return this._afterClosed.asObservable();\r\n  }\r\n\r\n  /**\r\n   * Gets an observable that is notified when the dialog has started closing.\r\n   */\r\n  beforeClosed(): Observable<R | undefined> {\r\n    return this._beforeClosed.asObservable();\r\n  }\r\n\r\n  /**\r\n   * Gets an observable that emits when the overlay's backdrop has been clicked.\r\n   */\r\n  backdropClick(): Observable<MouseEvent> {\r\n    return this._overlayRef.backdropClick();\r\n  }\r\n\r\n  /**\r\n   * Gets an observable that emits when keydown events are targeted on the overlay.\r\n   */\r\n  keydownEvents(): Observable<KeyboardEvent> {\r\n    return this._overlayRef.keydownEvents();\r\n  }\r\n\r\n  /**\r\n   * Updates the dialog's position.\r\n   * @param position New dialog position.\r\n   */\r\n  updatePosition(position?: DialogPosition): this {\r\n    const strategy = this._getPositionStrategy();\r\n\r\n    if (position && (position.left || position.right)) {\r\n      position.left ? strategy.left(position.left) : strategy.right(position.right);\r\n    } else {\r\n      strategy.centerHorizontally();\r\n    }\r\n\r\n    if (position && (position.top || position.bottom)) {\r\n      position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);\r\n    } else {\r\n      strategy.centerVertically();\r\n    }\r\n\r\n    this._overlayRef.updatePosition();\r\n\r\n    return this;\r\n  }\r\n\r\n  /**\r\n   * Updates the dialog's width and height.\r\n   * @param width New width of the dialog.\r\n   * @param height New height of the dialog.\r\n   */\r\n  updateSize(width: string = '', height: string = ''): this {\r\n    this._getPositionStrategy().width(width).height(height);\r\n    this._overlayRef.updatePosition();\r\n    return this;\r\n  }\r\n\r\n  /** Add a CSS class or an array of classes to the overlay pane. */\r\n  addPanelClass(classes: string | string[]): this {\r\n    this._overlayRef.addPanelClass(classes);\r\n    return this;\r\n  }\r\n\r\n  /** Remove a CSS class or an array of classes from the overlay pane. */\r\n  removePanelClass(classes: string | string[]): this {\r\n    this._overlayRef.removePanelClass(classes);\r\n    return this;\r\n  }\r\n\r\n  /** Fetches the position strategy object from the overlay ref. */\r\n  private _getPositionStrategy(): GlobalPositionStrategy {\r\n    return this._overlayRef.getConfig().positionStrategy as GlobalPositionStrategy;\r\n  }\r\n}\r\n",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_overlayRef",
                        "type": "OverlayRef"
                    },
                    {
                        "name": "_containerInstance",
                        "type": "SdsDialogContainerComponent"
                    },
                    {
                        "name": "_location",
                        "type": "Location",
                        "optional": true
                    },
                    {
                        "name": "id",
                        "type": "string",
                        "defaultValue": "`sds-dialog-${uniqueId++}`"
                    }
                ],
                "line": 32,
                "jsdoctags": [
                    {
                        "name": "_overlayRef",
                        "type": "OverlayRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_containerInstance",
                        "type": "SdsDialogContainerComponent",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_location",
                        "type": "Location",
                        "optional": true,
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "id",
                        "type": "string",
                        "defaultValue": "`sds-dialog-${uniqueId++}`",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "properties": [
                {
                    "name": "_afterClosed",
                    "defaultValue": "new Subject<R | undefined>()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Subject for notifying the user that the dialog has finished closing. </p>\n",
                    "line": 26,
                    "modifierKind": [
                        112,
                        132
                    ]
                },
                {
                    "name": "_afterOpened",
                    "defaultValue": "new Subject<void>()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Subject for notifying the user that the dialog has finished opening. </p>\n",
                    "line": 23,
                    "modifierKind": [
                        112,
                        132
                    ]
                },
                {
                    "name": "_beforeClosed",
                    "defaultValue": "new Subject<R | undefined>()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Subject for notifying the user that the dialog has started closing. </p>\n",
                    "line": 29,
                    "modifierKind": [
                        112,
                        132
                    ]
                },
                {
                    "name": "_containerInstance",
                    "type": "SdsDialogContainerComponent",
                    "optional": false,
                    "description": "",
                    "line": 36,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "_result",
                    "type": "R | undefined",
                    "optional": false,
                    "description": "<p>Result to be passed to afterClosed. </p>\n",
                    "line": 32,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "componentInstance",
                    "type": "T",
                    "optional": false,
                    "description": "<p>The instance of component opened into the dialog. </p>\n",
                    "line": 17
                },
                {
                    "name": "disableClose",
                    "defaultValue": "this._containerInstance._config.disableClose",
                    "type": "boolean | undefined",
                    "optional": false,
                    "description": "<p>Whether the user is allowed to close the dialog. </p>\n",
                    "line": 20
                }
            ],
            "description": "<p>Reference to a dialog opened via the SdsDialog service.</p>\n",
            "rawdescription": "Reference to a dialog opened via the SdsDialog service.",
            "methods": [
                {
                    "name": "_getPositionStrategy",
                    "args": [],
                    "optional": false,
                    "returnType": "GlobalPositionStrategy",
                    "typeParameters": [],
                    "line": 177,
                    "description": "<p>Fetches the position strategy object from the overlay ref. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "addPanelClass",
                    "args": [
                        {
                            "name": "classes",
                            "type": "string | string[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "",
                    "typeParameters": [],
                    "line": 165,
                    "description": "<p>Add a CSS class or an array of classes to the overlay pane. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "classes",
                            "type": "string | string[]",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "afterClosed",
                    "args": [],
                    "optional": false,
                    "returnType": "Observable<R | undefined>",
                    "typeParameters": [],
                    "line": 104,
                    "description": "<p>Gets an observable that is notified when the dialog is finished closing.</p>\n"
                },
                {
                    "name": "afterOpened",
                    "args": [],
                    "optional": false,
                    "returnType": "Observable<void>",
                    "typeParameters": [],
                    "line": 97,
                    "description": "<p>Gets an observable that is notified when the dialog is finished opening.</p>\n"
                },
                {
                    "name": "backdropClick",
                    "args": [],
                    "optional": false,
                    "returnType": "Observable<MouseEvent>",
                    "typeParameters": [],
                    "line": 118,
                    "description": "<p>Gets an observable that emits when the overlay&#39;s backdrop has been clicked.</p>\n"
                },
                {
                    "name": "beforeClosed",
                    "args": [],
                    "optional": false,
                    "returnType": "Observable<R | undefined>",
                    "typeParameters": [],
                    "line": 111,
                    "description": "<p>Gets an observable that is notified when the dialog has started closing.</p>\n"
                },
                {
                    "name": "close",
                    "args": [
                        {
                            "name": "dialogResult",
                            "type": "R",
                            "optional": true
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 77,
                    "description": "<p>Close the dialog.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2640,
                                "end": 2652,
                                "flags": 0,
                                "escapedText": "dialogResult"
                            },
                            "type": "R",
                            "optional": true,
                            "tagName": {
                                "pos": 2634,
                                "end": 2639,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Optional result to return to the dialog opener.</p>\n"
                        }
                    ]
                },
                {
                    "name": "keydownEvents",
                    "args": [],
                    "optional": false,
                    "returnType": "Observable<KeyboardEvent>",
                    "typeParameters": [],
                    "line": 125,
                    "description": "<p>Gets an observable that emits when keydown events are targeted on the overlay.</p>\n"
                },
                {
                    "name": "removePanelClass",
                    "args": [
                        {
                            "name": "classes",
                            "type": "string | string[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "",
                    "typeParameters": [],
                    "line": 171,
                    "description": "<p>Remove a CSS class or an array of classes from the overlay pane. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "classes",
                            "type": "string | string[]",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "updatePosition",
                    "args": [
                        {
                            "name": "position",
                            "type": "DialogPosition",
                            "optional": true
                        }
                    ],
                    "optional": false,
                    "returnType": "",
                    "typeParameters": [],
                    "line": 133,
                    "description": "<p>Updates the dialog&#39;s position.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4211,
                                "end": 4219,
                                "flags": 0,
                                "escapedText": "position"
                            },
                            "type": "DialogPosition",
                            "optional": true,
                            "tagName": {
                                "pos": 4205,
                                "end": 4210,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>New dialog position.</p>\n"
                        }
                    ]
                },
                {
                    "name": "updateSize",
                    "args": [
                        {
                            "name": "width",
                            "type": "string",
                            "defaultValue": "''"
                        },
                        {
                            "name": "height",
                            "type": "string",
                            "defaultValue": "''"
                        }
                    ],
                    "optional": false,
                    "returnType": "",
                    "typeParameters": [],
                    "line": 158,
                    "description": "<p>Updates the dialog&#39;s width and height.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4893,
                                "end": 4898,
                                "flags": 0,
                                "escapedText": "width"
                            },
                            "type": "string",
                            "defaultValue": "''",
                            "tagName": {
                                "pos": 4887,
                                "end": 4892,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>New width of the dialog.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 4937,
                                "end": 4943,
                                "flags": 0,
                                "escapedText": "height"
                            },
                            "type": "string",
                            "defaultValue": "''",
                            "tagName": {
                                "pos": 4931,
                                "end": 4936,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>New height of the dialog.</p>\n"
                        }
                    ]
                }
            ],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "SDSHiercarchicalServiceSearchItem",
            "id": "class-SDSHiercarchicalServiceSearchItem-b94ad59f46be0ed842cf369dcc2b3610",
            "file": "libs/packages/components/src/lib/autocomplete-search/models/SDSAutocompleteServiceInterface.ts",
            "type": "class",
            "sourceCode": "import { Observable } from 'rxjs';\r\nexport interface SDSAutocompleteServiceInterface {\r\n    /**\r\n     * \r\n     * @param searchValue \r\n     */\r\n    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult>;\r\n}\r\n\r\nexport interface SDSHiercarchicalServiceResult {\r\n    /**\r\n     * \r\n     */\r\n    items: object[];\r\n\r\n    /**\r\n     * \r\n     */\r\n    totalItems: number;\r\n}\r\n\r\nexport class SDSHiercarchicalServiceSearchItem {\r\n\r\n    /**\r\n     * \r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * \r\n     */\r\n    searchValue: string;\r\n\r\n    /**\r\n     * \r\n     */\r\n    // sort: Sort;\r\n\r\n    /**\r\n     * \r\n     */\r\n    currentItemCount: number;\r\n}\r\n\r\n",
            "properties": [
                {
                    "name": "currentItemCount",
                    "type": "number",
                    "optional": false,
                    "description": "",
                    "line": 42
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 27
                },
                {
                    "name": "searchValue",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 32
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
            "name": "SDSSelectedItemModel",
            "id": "class-SDSSelectedItemModel-085bae7e5d3f6a530196d5b6ef8fe5c4",
            "file": "libs/packages/components/src/lib/selected-result/models/sds-selectedItem.model.ts",
            "type": "class",
            "sourceCode": "export class SDSSelectedItemModel {\r\n  /**\r\n   * List of items selected\r\n   */\r\n  public items: object[];\r\n\r\n  constructor(items?: object[]) {\r\n    this.items = items ? [...items] : [];\r\n  }\r\n\r\n}\r\n",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "items",
                        "type": "object[]",
                        "optional": true
                    }
                ],
                "line": 5,
                "jsdoctags": [
                    {
                        "name": "items",
                        "type": "object[]",
                        "optional": true,
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "properties": [
                {
                    "name": "items",
                    "type": "object[]",
                    "optional": false,
                    "description": "<p>List of items selected</p>\n",
                    "line": 5,
                    "modifierKind": [
                        114
                    ]
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
            "name": "SDSSelectedItemModelHelper",
            "id": "class-SDSSelectedItemModelHelper-13e08ffd81fcd33af71d8a5363a55b49",
            "file": "libs/packages/components/src/lib/selected-result/models/sds-selected-item-model-helper.ts",
            "type": "class",
            "sourceCode": "import { SDSSelectedItemModel } from './sds-selectedItem.model';\r\n\r\nexport class SDSSelectedItemModelHelper {\r\n\r\n    /**\r\n      *  adds an item to the collection\r\n      * if selected mode is single it removes any existing items\r\n      * also checks to see if that item already exists\r\n      * keyfield is used to determine uniqueness of the item added\r\n      * @param itemToAdd \r\n      * @param keyField \r\n      * @param selectionMode \r\n      * @param items \r\n      */\r\n    public static addItem(itemToAdd: object, keyField: string, selectionMode: SelectionMode, model: SDSSelectedItemModel) {\r\n        if (!SDSSelectedItemModelHelper.containsItem(itemToAdd[keyField], keyField, model.items)) {\r\n            if (selectionMode === SelectionMode.SINGLE) {\r\n                SDSSelectedItemModelHelper.clearItems(model.items);\r\n            }\r\n            model.items.push(itemToAdd);\r\n        }\r\n    }\r\n\r\n    /**\r\n     * adds an array of items to the list and will not add duplicate items\r\n     * keyfield is used to determine uniqueness of the item added\r\n     * @param toAddItems \r\n     * @param keyField \r\n     * @param selectionMode \r\n     * @param items \r\n     */\r\n    public static addItems(toAddItems: object[], keyField: string, selectionMode: SelectionMode, model: SDSSelectedItemModel) {\r\n        for (let i = 0; i < toAddItems.length; i++) {\r\n            SDSSelectedItemModelHelper.addItem(toAddItems[i], keyField, selectionMode, model);\r\n        }\r\n    }\r\n\r\n    /**\r\n     * removes the item from the list\r\n     * keyfield is used to determine uniqueness of the item added\r\n     * @param item \r\n     * @param keyField \r\n     * @param items \r\n     */\r\n    public static removeItem(item: object, keyField: string, model: SDSSelectedItemModel) {\r\n        if (SDSSelectedItemModelHelper.containsItem(item[keyField], keyField, model.items)) {\r\n            model.items.splice(model.items.indexOf(item), 1)\r\n        }\r\n    }\r\n\r\n    /**\r\n     * checks to see if a particular item exists by the provied key\r\n     * keyfield is used to determine uniqueness of the item added\r\n     * @param key \r\n     * @param keyField \r\n     * @param items \r\n     */\r\n    public static containsItem(key: string, keyField: string, items: object[]): boolean {\r\n        let item = items.find(o => o[keyField] === key);\r\n        return item !== null && item !== undefined;\r\n    }\r\n\r\n    /**\r\n     * Clears the list of items\r\n     * @param items \r\n     */\r\n    public static clearItems(items: object[]) {\r\n        while (items.length > 0) {\r\n            items.pop();\r\n        }\r\n    }\r\n\r\n    /**\r\n     * updates an array of items to the list and will not add duplicate items\r\n     * keyfield is used to determine uniqueness of the item added\r\n     * @param selectedItems \r\n     * @param keyField \r\n     * @param selectionMode \r\n     * @param items \r\n     */\r\n    public static replaceItems(selectedItems: object[], keyField: string, selectionMode: SelectionMode, model: SDSSelectedItemModel) {\r\n        //Clears Old List\r\n        SDSSelectedItemModelHelper.clearItems(model.items);\r\n        //Adds new List\r\n        SDSSelectedItemModelHelper.addItems(selectedItems, keyField, selectionMode, model);\r\n    }\r\n}\r\n\r\nexport enum SelectionMode {\r\n    SINGLE, MULTIPLE\r\n}\r\n",
            "properties": [],
            "methods": [
                {
                    "name": "addItem",
                    "args": [
                        {
                            "name": "itemToAdd",
                            "type": "object"
                        },
                        {
                            "name": "keyField",
                            "type": "string"
                        },
                        {
                            "name": "selectionMode",
                            "type": "SelectionMode"
                        },
                        {
                            "name": "model",
                            "type": "SDSSelectedItemModel"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 15,
                    "description": "<p>adds an item to the collection\nif selected mode is single it removes any existing items\nalso checks to see if that item already exists\nkeyfield is used to determine uniqueness of the item added</p>\n",
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 368,
                                "end": 377,
                                "flags": 0,
                                "escapedText": "itemToAdd"
                            },
                            "type": "object",
                            "tagName": {
                                "pos": 362,
                                "end": 367,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 395,
                                "end": 403,
                                "flags": 0,
                                "escapedText": "keyField"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 389,
                                "end": 394,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 421,
                                "end": 434,
                                "flags": 0,
                                "escapedText": "selectionMode"
                            },
                            "type": "SelectionMode",
                            "tagName": {
                                "pos": 415,
                                "end": 420,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": "model",
                            "type": "SDSSelectedItemModel",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "addItems",
                    "args": [
                        {
                            "name": "toAddItems",
                            "type": "object[]"
                        },
                        {
                            "name": "keyField",
                            "type": "string"
                        },
                        {
                            "name": "selectionMode",
                            "type": "SelectionMode"
                        },
                        {
                            "name": "model",
                            "type": "SDSSelectedItemModel"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 32,
                    "description": "<p>adds an array of items to the list and will not add duplicate items\nkeyfield is used to determine uniqueness of the item added</p>\n",
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1067,
                                "end": 1077,
                                "flags": 0,
                                "escapedText": "toAddItems"
                            },
                            "type": "object[]",
                            "tagName": {
                                "pos": 1061,
                                "end": 1066,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 1094,
                                "end": 1102,
                                "flags": 0,
                                "escapedText": "keyField"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 1088,
                                "end": 1093,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 1119,
                                "end": 1132,
                                "flags": 0,
                                "escapedText": "selectionMode"
                            },
                            "type": "SelectionMode",
                            "tagName": {
                                "pos": 1113,
                                "end": 1118,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": "model",
                            "type": "SDSSelectedItemModel",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "clearItems",
                    "args": [
                        {
                            "name": "items",
                            "type": "object[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 67,
                    "description": "<p>Clears the list of items</p>\n",
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2416,
                                "end": 2421,
                                "flags": 0,
                                "escapedText": "items"
                            },
                            "type": "object[]",
                            "tagName": {
                                "pos": 2410,
                                "end": 2415,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "containsItem",
                    "args": [
                        {
                            "name": "key",
                            "type": "string"
                        },
                        {
                            "name": "keyField",
                            "type": "string"
                        },
                        {
                            "name": "items",
                            "type": "object[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 58,
                    "description": "<p>checks to see if a particular item exists by the provied key\nkeyfield is used to determine uniqueness of the item added</p>\n",
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2087,
                                "end": 2090,
                                "flags": 0,
                                "escapedText": "key"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 2081,
                                "end": 2086,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 2107,
                                "end": 2115,
                                "flags": 0,
                                "escapedText": "keyField"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 2101,
                                "end": 2106,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 2132,
                                "end": 2137,
                                "flags": 0,
                                "escapedText": "items"
                            },
                            "type": "object[]",
                            "tagName": {
                                "pos": 2126,
                                "end": 2131,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "removeItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "object"
                        },
                        {
                            "name": "keyField",
                            "type": "string"
                        },
                        {
                            "name": "model",
                            "type": "SDSSelectedItemModel"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 45,
                    "description": "<p>removes the item from the list\nkeyfield is used to determine uniqueness of the item added</p>\n",
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1595,
                                "end": 1599,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "object",
                            "tagName": {
                                "pos": 1589,
                                "end": 1594,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 1616,
                                "end": 1624,
                                "flags": 0,
                                "escapedText": "keyField"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 1610,
                                "end": 1615,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": "model",
                            "type": "SDSSelectedItemModel",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "replaceItems",
                    "args": [
                        {
                            "name": "selectedItems",
                            "type": "object[]"
                        },
                        {
                            "name": "keyField",
                            "type": "string"
                        },
                        {
                            "name": "selectionMode",
                            "type": "SelectionMode"
                        },
                        {
                            "name": "model",
                            "type": "SDSSelectedItemModel"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 81,
                    "description": "<p>updates an array of items to the list and will not add duplicate items\nkeyfield is used to determine uniqueness of the item added</p>\n",
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2733,
                                "end": 2746,
                                "flags": 0,
                                "escapedText": "selectedItems"
                            },
                            "type": "object[]",
                            "tagName": {
                                "pos": 2727,
                                "end": 2732,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 2763,
                                "end": 2771,
                                "flags": 0,
                                "escapedText": "keyField"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 2757,
                                "end": 2762,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 2788,
                                "end": 2801,
                                "flags": 0,
                                "escapedText": "selectionMode"
                            },
                            "type": "SelectionMode",
                            "tagName": {
                                "pos": 2782,
                                "end": 2787,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": "model",
                            "type": "SDSSelectedItemModel",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "SDSSelectedResultConfiguration",
            "id": "class-SDSSelectedResultConfiguration-6d42733017125d3c37e0254f23e71472",
            "file": "libs/packages/components/src/lib/selected-result/models/SDSSelectedResultConfiguration.ts",
            "type": "class",
            "sourceCode": "import { SelectionMode } from './sds-selected-item-model-helper';\r\n\r\nexport class SDSSelectedResultConfiguration {\r\n\r\n  /**\r\n   * Used to describe the drop down (Text should match the label that will be supplied)\r\n   */\r\n  public labelText: string;\r\n\r\n  /**\r\n   *  This is the primary field used to identify each object in the results\r\n   */\r\n  public primaryKeyField: string;\r\n\r\n  /**\r\n   *  Property from supplied model used for the top part of the basic template\r\n   */\r\n  public primaryTextField: string;\r\n\r\n  /**\r\n   *  Property from supplied model used for the bottom part of the basic template\r\n   */\r\n  public secondaryTextField: string;\r\n\r\n  /**\r\n   * Mode of the model either allows a single item or multiple items\r\n   */\r\n  public selectionMode: SelectionMode = SelectionMode.SINGLE;\r\n}\r\n",
            "properties": [
                {
                    "name": "labelText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Used to describe the drop down (Text should match the label that will be supplied)</p>\n",
                    "line": 8,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "primaryKeyField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>This is the primary field used to identify each object in the results</p>\n",
                    "line": 13,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "primaryTextField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Property from supplied model used for the top part of the basic template</p>\n",
                    "line": 18,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "secondaryTextField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Property from supplied model used for the bottom part of the basic template</p>\n",
                    "line": 23,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "selectionMode",
                    "defaultValue": "SelectionMode.SINGLE",
                    "type": "SelectionMode",
                    "optional": false,
                    "description": "<p>Mode of the model either allows a single item or multiple items</p>\n",
                    "line": 28,
                    "modifierKind": [
                        114
                    ]
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
            "name": "SearchModel",
            "id": "class-SearchModel-44980a77e66c975efb0bdd51a8eec576",
            "file": "libs/packages/components/src/lib/search-result-list/model/search-results.model.ts",
            "type": "class",
            "sourceCode": "import { EventEmitter } from '@angular/core';\r\n\r\nexport class SearchModel{\r\n    results: any[];\r\n    metadata: {\r\n      messages:Message[];\r\n    }\r\n  };\r\n  export class Message {\r\n    type: string;\r\n    title: string;\r\n    message:string;\r\n    classes: string;\r\n    buttons:Button[];\r\n  }\r\n  export class Button{\r\n    id: string;\r\n    text:string;\r\n    classes: string;\r\n    action: any;\r\n  } ",
            "properties": [
                {
                    "name": "metadata",
                    "type": "literal type",
                    "optional": false,
                    "description": "",
                    "line": 5
                },
                {
                    "name": "results",
                    "type": "any[]",
                    "optional": false,
                    "description": "",
                    "line": 4
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
            "name": "SearchSettings",
            "id": "class-SearchSettings-008a7c5dda1c8473dafdd47171476133",
            "file": "libs/packages/components/src/lib/search/search.component.ts",
            "type": "class",
            "sourceCode": "import {\r\n  Component,\r\n  ViewChild,\r\n  ElementRef,\r\n  Input,\r\n  AfterViewInit,\r\n  forwardRef,\r\n  ChangeDetectionStrategy,\r\n  ChangeDetectorRef, Output, EventEmitter\r\n} from '@angular/core';\r\nimport { FocusMonitor } from '@angular/cdk/a11y';\r\nimport { ViewportRuler } from '@angular/cdk/overlay';\r\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';\r\nexport class SearchSettings {\r\n  public placeholder = 'Search';\r\n  public size: string;\r\n  public inputClass: string;\r\n  public parentSelector: string;\r\n  public dropdown: any = {\r\n    placeholder: '-Select-',\r\n    options: [],\r\n    inverse: false\r\n  };\r\n}\r\n@Component({\r\n  selector: 'sds-search',\r\n  templateUrl: 'search.component.html',\r\n  providers: [\r\n    {\r\n      provide: NG_VALUE_ACCESSOR,\r\n      useExisting: forwardRef(() => SdsSearchComponent),\r\n      multi: true\r\n    }\r\n  ],\r\n  changeDetection: ChangeDetectionStrategy.OnPush\r\n})\r\nexport class SdsSearchComponent implements AfterViewInit, ControlValueAccessor {\r\n  @ViewChild('inputEl', { read: ElementRef }) inputEl: ElementRef;\r\n  @ViewChild('selectEl', { read: ElementRef }) selectEl: ElementRef;\r\n  @ViewChild('buttonEl', { read: ElementRef }) buttonEl: ElementRef;\r\n\r\n  @Input() searchSettings: SearchSettings = new SearchSettings();\r\n  @Output() submit: EventEmitter<{searchText: string}> = new EventEmitter(null);\r\n\r\n  model: any = {};\r\n  inputState = {\r\n    initial: { visible: undefined },\r\n    visible: undefined\r\n  };\r\n  private _onChange = (_: any) => {};\r\n  private _onTouched = () => {};\r\n\r\n  constructor(\r\n    private cd: ChangeDetectorRef,\r\n    private focusMonitor: FocusMonitor,\r\n    private viewportRuler: ViewportRuler\r\n  ) {}\r\n\r\n  ngAfterViewInit() {\r\n    this.inputState.initial.visible = this.isInputVisible();\r\n    this.inputState.visible = this.inputState.initial.visible;\r\n    this.viewportRuler.change(0).subscribe(() => {\r\n      this.inputState.initial.visible = this.isInputVisible();\r\n      this.inputState.visible = this.inputState.initial.visible;\r\n    });\r\n  }\r\n\r\n  hasDropdown() {\r\n    if (\r\n      this.searchSettings &&\r\n      this.searchSettings.dropdown &&\r\n      this.searchSettings.dropdown.options &&\r\n      this.searchSettings.dropdown.options.length\r\n    ) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n  handleClick(event) {\r\n    event.preventDefault();\r\n    if (!this.inputState.visible) {\r\n      this.setInputVisibleStyles();\r\n      this.focusMonitor.focusVia(this.inputEl, 'program');\r\n    } else if (this.inputEl || this.selectEl) {\r\n      this.submit.emit(this.model);\r\n    }\r\n  }\r\n\r\n  writeValueToModel() {\r\n    this.model.searchText = this.inputEl ? this.inputEl.nativeElement.value : '';\r\n    if (this.selectEl && this.selectEl.nativeElement.value) {\r\n      this.model.searchCategory = this.selectEl.nativeElement.value;\r\n    }\r\n    this._onChange(Object.assign({}, this.model));\r\n  }\r\n\r\n  writeValue(value: any) {\r\n    if (value && this.model !== value) {\r\n      this.model = value;\r\n      this.cd.markForCheck();\r\n    } else {\r\n      this.model = {};\r\n      this.cd.markForCheck();\r\n    }\r\n  }\r\n  registerOnTouched(fn: any) {\r\n    this._onTouched = fn;\r\n  }\r\n  registerOnChange(fn: any): void {\r\n    this._onChange = fn;\r\n  }\r\n\r\n  isInputVisible(): boolean {\r\n    return this.inputEl.nativeElement.getBoundingClientRect().width\r\n      ? true\r\n      : false;\r\n  }\r\n\r\n  setInputVisibleStyles() {\r\n\r\n    const inputWidth = this.calculateInputWidth();\r\n    this.inputEl.nativeElement.style.setProperty(\"display\", \"block\", \"important\");\r\n    this.inputEl.nativeElement.style.position = 'absolute';\r\n    this.inputEl.nativeElement.style.left = `-${inputWidth}px`;\r\n    this.inputEl.nativeElement.style.setProperty(\"width\", `${inputWidth}px`, \"important\");\r\n    this.inputState.visible = true;\r\n  }\r\n\r\n  removeInputVisibleStyles() {\r\n    this.inputEl.nativeElement.style.display = '';\r\n    this.inputEl.nativeElement.style.position = '';\r\n    this.inputEl.nativeElement.style.left = '';\r\n    this.inputEl.nativeElement.style.width = '';\r\n    this.inputState.visible = false;\r\n  }\r\n\r\n  focusChange() {\r\n    if (!this.inputState.initial.visible) {\r\n      this.removeInputVisibleStyles();\r\n    }\r\n  }\r\n\r\n  calculateInputWidth(): number {\r\n    const leftPadding = 20;\r\n    const buttonElement = this.buttonEl.nativeElement;\r\n    const inputElement = this.inputEl.nativeElement;\r\n    const rightPosition = buttonElement.getBoundingClientRect().left;\r\n    const leftPosition = this.searchSettings.parentSelector\r\n      ? inputElement.closest(this.searchSettings.parentSelector).getBoundingClientRect().left\r\n      : 0;\r\n    return Math.floor(rightPosition - leftPosition - leftPadding);\r\n  }\r\n  getClass() {\r\n    const cls =\r\n      this.searchSettings && this.searchSettings.size === 'large'\r\n        ? 'usa-search--big'\r\n        : 'usa-search--small';\r\n    return this.searchSettings.dropdown && this.searchSettings.dropdown.inverse\r\n      ? `${cls} sds-inverse`\r\n      : cls;\r\n  }\r\n}\r\n",
            "properties": [
                {
                    "name": "dropdown",
                    "defaultValue": "{\r\n    placeholder: '-Select-',\r\n    options: [],\r\n    inverse: false\r\n  }",
                    "type": "any",
                    "optional": false,
                    "description": "",
                    "line": 19,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "inputClass",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 17,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "parentSelector",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 18,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "placeholder",
                    "defaultValue": "'Search'",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 15,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "size",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 16,
                    "modifierKind": [
                        114
                    ]
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
            "name": "SideNavigationModel",
            "id": "class-SideNavigationModel-d25c2dec7563980ed43433307b1100a4",
            "file": "libs/packages/components/src/lib/side-navigation/model/side-navigation-model.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '../../common-navigation/common-navigation-model';\r\n\r\nexport class SideNavigationModel {\r\n\r\n    /**\r\n     * \r\n     */\r\n    navigationLinks: NavigationLink[];\r\n}\r\n\r\n\r\nexport class NavigationLink implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text to be displayed in the link or button\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route \r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * List of child navigation items that will show when no route is provieded\r\n     */\r\n    children?: NavigationLink[];\r\n\r\n    /**\r\n     * Identifier for the item when search for selected \r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected \r\n     */\r\n    selected?: boolean;\r\n\r\n\r\n    /**\r\n     * Query string paramaters supporeted with external and internal links\r\n     * ex. { 'name': 'value',...}\r\n     */\r\n    queryParams?: {\r\n        [k: string]: any;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n",
            "properties": [
                {
                    "name": "navigationLinks",
                    "type": "NavigationLink[]",
                    "optional": false,
                    "description": "",
                    "line": 8
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
            "name": "CollapseDirective",
            "id": "directive-CollapseDirective-8aa656abc3a969f3e783bd9da39fabfa",
            "file": "libs/packages/components/src/lib/collapse/collapse.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import { Directive, HostBinding, Input } from '@angular/core';\r\n\r\n@Directive({\r\n  selector: '[sdsCollapse]',\r\n  exportAs: 'sdsCollapse',\r\n  host: {'[class.display-none]':'collapsed'}\r\n})\r\nexport class CollapseDirective {\r\n\r\n  @Input('sdsCollapse') collapsed: boolean = true;\r\n\r\n  constructor() {\r\n  }\r\n\r\n}\r\n",
            "selector": "[sdsCollapse]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "sdsCollapse",
                    "defaultValue": "true",
                    "line": 10,
                    "type": "boolean"
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": [],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 10
            }
        },
        {
            "name": "ExternalLinkDirective",
            "id": "directive-ExternalLinkDirective-e2630e3149783592befdae0e73c981bf",
            "file": "libs/packages/components/src/lib/external-link/external-link.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\r\n  Directive,\r\n  ElementRef,\r\n  Renderer2,\r\n  Input,\r\n  ComponentFactoryResolver,\r\n  ViewContainerRef,\r\n  OnChanges,\r\n  HostBinding\r\n} from '@angular/core';\r\nimport { FaIconComponent } from '@fortawesome/angular-fontawesome';\r\n@Directive({\r\n  selector: 'a[href]'\r\n})\r\nexport class ExternalLinkDirective implements OnChanges {\r\n  private vcRef: ViewContainerRef;\r\n\r\n  @HostBinding('attr.href')\r\n  @Input() href: string;\r\n\r\n  @Input() public hideIcon = false;\r\n\r\n  private get isExternalLink(): boolean {\r\n    return (\r\n      this.href\r\n        .replace(/^https?:\\/\\//, '')\r\n        .replace(/^www\\./, '')\r\n        .split('/')[0] !== location.hostname\r\n    );\r\n  }\r\n\r\n  constructor(\r\n    private el: ElementRef,\r\n    private renderer: Renderer2,\r\n    private cfr: ComponentFactoryResolver,\r\n    private vc: ViewContainerRef\r\n  ) {}\r\n\r\n  public ngOnChanges() {\r\n    if (!this.isExternalLink) {\r\n      return;\r\n    }\r\n    if (!this.hideIcon) {\r\n      this.createIcon();\r\n      this.renderer.setAttribute(this.el.nativeElement, \"target\", \"_blank\");\r\n    }\r\n  }\r\n\r\n  private createIcon() {\r\n    // tslint:disable-next-line:no-unused-expression\r\n    this.vc.constructor.name === 'ViewContainerRef_';\r\n    const factory = this.cfr.resolveComponentFactory(FaIconComponent);\r\n    const component = this.vc.createComponent(factory);\r\n    component.instance.iconProp = ['fas', 'external-link-alt'];\r\n    const spanElement = document.createElement('span');\r\n    spanElement.classList.add('margin-left-2px');\r\n    const supElement = document.createElement('sup');\r\n    supElement.appendChild(component.location.nativeElement);\r\n    spanElement.appendChild(supElement);\r\n    this.el.nativeElement.appendChild(spanElement);\r\n    component.instance.ngOnChanges({});\r\n  }\r\n}\r\n",
            "selector": "a[href]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "hideIcon",
                    "defaultValue": "false",
                    "line": 21
                },
                {
                    "name": "href",
                    "line": 19,
                    "type": "string"
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [
                {
                    "name": "vcRef",
                    "type": "ViewContainerRef",
                    "optional": false,
                    "description": "",
                    "line": 16,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "createIcon",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 49,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "ngOnChanges",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 39,
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "implements": [
                "OnChanges"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "el",
                        "type": "ElementRef"
                    },
                    {
                        "name": "renderer",
                        "type": "Renderer2"
                    },
                    {
                        "name": "cfr",
                        "type": "ComponentFactoryResolver"
                    },
                    {
                        "name": "vc",
                        "type": "ViewContainerRef"
                    }
                ],
                "line": 30,
                "jsdoctags": [
                    {
                        "name": "el",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "renderer",
                        "type": "Renderer2",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "cfr",
                        "type": "ComponentFactoryResolver",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "vc",
                        "type": "ViewContainerRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "accessors": {
                "isExternalLink": {
                    "name": "isExternalLink",
                    "getSignature": {
                        "name": "isExternalLink",
                        "type": "boolean",
                        "returnType": "boolean",
                        "line": 23
                    }
                }
            }
        },
        {
            "name": "SdsAccordionDirective",
            "id": "directive-SdsAccordionDirective-ebdc530ce41c3a75d331ee42d0316dcd",
            "file": "libs/packages/components/src/lib/accordion/accordion.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\r\n  Directive,\r\n  Input,\r\n  ContentChildren,\r\n  QueryList,\r\n  AfterContentInit\r\n} from \"@angular/core\";\r\n\r\nimport { CdkAccordion } from \"@angular/cdk/accordion\";\r\nimport { FocusKeyManager } from \"@angular/cdk/a11y\";\r\nimport { HOME, END } from \"@angular/cdk/keycodes\";\r\nimport {\r\n  SDS_ACCORDION,\r\n  SdsAccordionBase,\r\n  SdsAccordionDisplayMode\r\n} from \"./accordion-base\";\r\nimport { SdsAccordionItemHeaderComponent } from \"./accordion-item-header.component\";\r\n\r\n@Directive({\r\n  selector: \"sds-accordion\",\r\n  exportAs: \"sdsAccordion\",\r\n  inputs: [\"multi\"],\r\n  providers: [\r\n    {\r\n      provide: SDS_ACCORDION,\r\n      useExisting: SdsAccordionDirective\r\n    }\r\n  ],\r\n  host: {\r\n    'class': 'sds-accordion',\r\n    '[class.sds-accordion--basic]': 'displayMode === \"basic\"',\r\n  }\r\n})\r\nexport class SdsAccordionDirective extends CdkAccordion\r\n  implements SdsAccordionBase, AfterContentInit {\r\n  private _keyManager: FocusKeyManager<SdsAccordionItemHeaderComponent>;\r\n\r\n  @ContentChildren(SdsAccordionItemHeaderComponent, { descendants: true })\r\n  _headers: QueryList<SdsAccordionItemHeaderComponent>;\r\n\r\n  @Input() displayMode: SdsAccordionDisplayMode = \"default\";\r\n\r\n  ngAfterContentInit() {\r\n    this._keyManager = new FocusKeyManager(this._headers).withWrap();\r\n  }\r\n\r\n  /** Handles keyboard events coming in from the item headers. */\r\n  _handleHeaderKeydown(event: KeyboardEvent) {\r\n    const { keyCode } = event;\r\n    if (keyCode === HOME) {\r\n      this._keyManager.setFirstItemActive();\r\n      event.preventDefault();\r\n    } else if (keyCode === END) {\r\n      this._keyManager.setLastItemActive();\r\n      event.preventDefault();\r\n    } else {\r\n      this._keyManager.onKeydown(event);\r\n    }\r\n  }\r\n\r\n  _handleHeaderFocus(header: SdsAccordionItemHeaderComponent) {\r\n    this._keyManager.updateActiveItem(header);\r\n  }\r\n}\r\n",
            "selector": "sds-accordion",
            "providers": [
                {
                    "name": "{\n    provide: SDS_ACCORDION, useExisting: SdsAccordionDirective\n}",
                    "type": "directive"
                }
            ],
            "inputsClass": [
                {
                    "name": "displayMode",
                    "defaultValue": "\"default\"",
                    "line": 41,
                    "type": "SdsAccordionDisplayMode"
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [
                {
                    "name": "_headers",
                    "type": "QueryList<SdsAccordionItemHeaderComponent>",
                    "optional": false,
                    "description": "",
                    "line": 39,
                    "decorators": [
                        {
                            "name": "ContentChildren",
                            "stringifiedArguments": "SdsAccordionItemHeaderComponent, {descendants: true}"
                        }
                    ]
                },
                {
                    "name": "_keyManager",
                    "type": "FocusKeyManager<SdsAccordionItemHeaderComponent>",
                    "optional": false,
                    "description": "",
                    "line": 36,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "_handleHeaderFocus",
                    "args": [
                        {
                            "name": "header",
                            "type": "SdsAccordionItemHeaderComponent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 61,
                    "jsdoctags": [
                        {
                            "name": "header",
                            "type": "SdsAccordionItemHeaderComponent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_handleHeaderKeydown",
                    "args": [
                        {
                            "name": "event",
                            "type": "KeyboardEvent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 48,
                    "description": "<p>Handles keyboard events coming in from the item headers. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "KeyboardEvent",
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
                    "line": 43
                }
            ],
            "implements": [
                "SdsAccordionBase",
                "AfterContentInit"
            ]
        },
        {
            "name": "SdsAccordionItemContentDirective",
            "id": "directive-SdsAccordionItemContentDirective-8676b0411a9a5aeae349a24933dbc0dd",
            "file": "libs/packages/components/src/lib/accordion/accordion-item-content.directive.ts",
            "type": "directive",
            "description": "<p>Accordion Item content that will be rendered lazily\nafter the accordion item is opened for the first time.</p>\n",
            "sourceCode": "import {Directive, TemplateRef} from '@angular/core';\r\n\r\n/**\r\n * Accordion Item content that will be rendered lazily\r\n * after the accordion item is opened for the first time.\r\n */\r\n@Directive({\r\n  selector: 'ng-template[sdsAccordionItemContent]'\r\n})\r\nexport class SdsAccordionItemContentDirective {\r\n  constructor(public _template: TemplateRef<any>) {}\r\n}\r\n",
            "selector": "ng-template[sdsAccordionItemContent]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [
                {
                    "name": "_template",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 11,
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methodsClass": [],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_template",
                        "type": "TemplateRef<any>"
                    }
                ],
                "line": 10,
                "jsdoctags": [
                    {
                        "name": "_template",
                        "type": "TemplateRef<any>",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SDSClickOutsideDirective",
            "id": "directive-SDSClickOutsideDirective-a1f5f043468f522388772e00b5fa52bc",
            "file": "libs/packages/components/src/lib/click-outside/click-outside.directive.ts",
            "type": "directive",
            "description": "<p>The <sam-click-outside> directive can detect whether a click is made inside \nthe target</p>\n",
            "sourceCode": "import {\r\n  Directive, ElementRef,\r\n  Output, EventEmitter,\r\n  HostListener\r\n} from '@angular/core';\r\n\r\n/**\r\n * The <sam-click-outside> directive can detect whether a click is made inside \r\n * the target\r\n */\r\n@Directive({\r\n  selector: '[sds-click-outside]'\r\n})\r\nexport class SDSClickOutsideDirective {\r\n  /**\r\n  * Event emitted when clicked outside the target\r\n  */\r\n  @Output() clickOutside = new EventEmitter();\r\n\r\n  constructor(private _elementRef: ElementRef) { }\r\n\r\n  @HostListener('document:click', ['$event.target'])\r\n  public onClick(targetElement) {\r\n    const clickedInside =\r\n      this._elementRef.nativeElement.contains(targetElement);\r\n    if (!clickedInside) {\r\n      this.clickOutside.emit(undefined);\r\n    }\r\n  }\r\n}\r\n",
            "selector": "[sds-click-outside]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [
                {
                    "name": "clickOutside",
                    "defaultValue": "new EventEmitter()",
                    "description": "<p>Event emitted when clicked outside the target</p>\n",
                    "line": 18,
                    "type": "EventEmitter"
                }
            ],
            "hostBindings": [],
            "hostListeners": [
                {
                    "name": "document:click",
                    "args": [
                        {
                            "name": "targetElement",
                            "type": ""
                        }
                    ],
                    "argsDecorator": [
                        "$event.target"
                    ],
                    "line": 23
                }
            ],
            "propertiesClass": [],
            "methodsClass": [],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef"
                    }
                ],
                "line": 18,
                "jsdoctags": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SdsDialogActionsDirective",
            "id": "directive-SdsDialogActionsDirective-3d0823eb51e60df8943d560c1d76a2f3",
            "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
            "type": "directive",
            "description": "<p>Container for the bottom action buttons in a dialog.\nStays fixed to the bottom when scrolling.</p>\n",
            "sourceCode": "import {\r\n  Directive,\r\n  Input,\r\n  OnChanges,\r\n  OnInit,\r\n  Optional,\r\n  SimpleChanges,\r\n  ElementRef,\r\n} from '@angular/core';\r\nimport {SdsDialogService} from './dialog';\r\nimport {SdsDialogRef} from './dialog-ref';\r\n\r\n/** Counter used to generate unique IDs for dialog elements. */\r\nlet dialogElementUid = 0;\r\n\r\n/**\r\n * Button that will close the current dialog.\r\n */\r\n@Directive({\r\n  selector: `button[sds-dialog-close], button[sdsDialogClose]`,\r\n  exportAs: 'sdsDialogClose',\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {\r\n    '(click)': 'dialogRef.close(dialogResult)',\r\n    '[attr.aria-label]': 'ariaLabel || null',\r\n    'type': 'button', // Prevents accidental form submits.\r\n  }\r\n})\r\nexport class SdsDialogCloseDirective implements OnInit, OnChanges {\r\n  /** Screenreader label for the button. */\r\n  @Input('aria-label') ariaLabel: string;\r\n\r\n  /** Dialog close input. */\r\n  @Input('sds-dialog-close') dialogResult: any;\r\n\r\n  @Input('sdsDialogClose') _sdsDialogClose: any;\r\n\r\n  constructor(\r\n    @Optional() public dialogRef: SdsDialogRef<any>,\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private _dialog: SdsDialogService) {}\r\n\r\n  ngOnInit() {\r\n    if (!this.dialogRef) {\r\n      // When this directive is included in a dialog via TemplateRef (rather than being\r\n      // in a Component), the DialogRef isn't available via injection because embedded\r\n      // views cannot be given a custom injector. Instead, we look up the DialogRef by\r\n      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't\r\n      // be resolved at constructor time.\r\n      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\r\n    }\r\n  }\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    const proxiedChange = changes['_sdsDialogClose'] || changes['_sdsDialogCloseResult'];\r\n\r\n    if (proxiedChange) {\r\n      this.dialogResult = proxiedChange.currentValue;\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.\r\n */\r\n@Directive({\r\n  selector: '[sds-dialog-title], [sdsDialogTitle]',\r\n  exportAs: 'sdsDialogTitle',\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {\r\n    '[class.sds-dialog-title]': 'true',\r\n    '[id]': 'id',\r\n  },\r\n})\r\nexport class SdsDialogTitleDirective implements OnInit {\r\n  @Input() id = `sds-dialog-title-${dialogElementUid++}`;\r\n\r\n  constructor(\r\n    @Optional() private _dialogRef: SdsDialogRef<any>,\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private _dialog: SdsDialogService) {}\r\n\r\n  ngOnInit() {\r\n    if (!this._dialogRef) {\r\n      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\r\n    }\r\n\r\n    if (this._dialogRef) {\r\n      Promise.resolve().then(() => {\r\n        const container = this._dialogRef._containerInstance;\r\n\r\n        if (container && !container._ariaLabelledBy) {\r\n          container._ariaLabelledBy = this.id;\r\n        }\r\n      });\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * SubTitle of a dialog element\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-subtitle]': 'true'}\r\n})\r\nexport class SdsDialogSubtitleDirective {}\r\n\r\n\r\n/**\r\n * Scrollable content container of a dialog.\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-content], sds-dialog-content, [sdsDialogContent]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-content]': 'true'}\r\n})\r\nexport class SdsDialogContentDirective {}\r\n\r\n\r\n/**\r\n * Container for the bottom action buttons in a dialog.\r\n * Stays fixed to the bottom when scrolling.\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-actions]': 'true'}\r\n})\r\nexport class SdsDialogActionsDirective {}\r\n\r\n\r\n/**\r\n * Finds the closest SdsDialogRef to an element by looking at the DOM.\r\n * @param element Element relative to which to look for a dialog.\r\n * @param openDialogs References to the currently-open dialogs.\r\n */\r\nfunction getClosestDialog(element: ElementRef<HTMLElement>, openDialogs: SdsDialogRef<any>[]) {\r\n  let parent: HTMLElement | null = element.nativeElement.parentElement;\r\n\r\n  while (parent && !parent.classList.contains('sds-dialog__container')) {\r\n    parent = parent.parentElement;\r\n  }\r\n\r\n  return parent ? openDialogs.find(dialog => dialog.id === parent!.id) : null;\r\n}\r\n",
            "selector": "[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        },
        {
            "name": "SdsDialogCloseDirective",
            "id": "directive-SdsDialogCloseDirective-3d0823eb51e60df8943d560c1d76a2f3",
            "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
            "type": "directive",
            "description": "<p>Button that will close the current dialog.</p>\n",
            "sourceCode": "import {\r\n  Directive,\r\n  Input,\r\n  OnChanges,\r\n  OnInit,\r\n  Optional,\r\n  SimpleChanges,\r\n  ElementRef,\r\n} from '@angular/core';\r\nimport {SdsDialogService} from './dialog';\r\nimport {SdsDialogRef} from './dialog-ref';\r\n\r\n/** Counter used to generate unique IDs for dialog elements. */\r\nlet dialogElementUid = 0;\r\n\r\n/**\r\n * Button that will close the current dialog.\r\n */\r\n@Directive({\r\n  selector: `button[sds-dialog-close], button[sdsDialogClose]`,\r\n  exportAs: 'sdsDialogClose',\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {\r\n    '(click)': 'dialogRef.close(dialogResult)',\r\n    '[attr.aria-label]': 'ariaLabel || null',\r\n    'type': 'button', // Prevents accidental form submits.\r\n  }\r\n})\r\nexport class SdsDialogCloseDirective implements OnInit, OnChanges {\r\n  /** Screenreader label for the button. */\r\n  @Input('aria-label') ariaLabel: string;\r\n\r\n  /** Dialog close input. */\r\n  @Input('sds-dialog-close') dialogResult: any;\r\n\r\n  @Input('sdsDialogClose') _sdsDialogClose: any;\r\n\r\n  constructor(\r\n    @Optional() public dialogRef: SdsDialogRef<any>,\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private _dialog: SdsDialogService) {}\r\n\r\n  ngOnInit() {\r\n    if (!this.dialogRef) {\r\n      // When this directive is included in a dialog via TemplateRef (rather than being\r\n      // in a Component), the DialogRef isn't available via injection because embedded\r\n      // views cannot be given a custom injector. Instead, we look up the DialogRef by\r\n      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't\r\n      // be resolved at constructor time.\r\n      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\r\n    }\r\n  }\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    const proxiedChange = changes['_sdsDialogClose'] || changes['_sdsDialogCloseResult'];\r\n\r\n    if (proxiedChange) {\r\n      this.dialogResult = proxiedChange.currentValue;\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.\r\n */\r\n@Directive({\r\n  selector: '[sds-dialog-title], [sdsDialogTitle]',\r\n  exportAs: 'sdsDialogTitle',\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {\r\n    '[class.sds-dialog-title]': 'true',\r\n    '[id]': 'id',\r\n  },\r\n})\r\nexport class SdsDialogTitleDirective implements OnInit {\r\n  @Input() id = `sds-dialog-title-${dialogElementUid++}`;\r\n\r\n  constructor(\r\n    @Optional() private _dialogRef: SdsDialogRef<any>,\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private _dialog: SdsDialogService) {}\r\n\r\n  ngOnInit() {\r\n    if (!this._dialogRef) {\r\n      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\r\n    }\r\n\r\n    if (this._dialogRef) {\r\n      Promise.resolve().then(() => {\r\n        const container = this._dialogRef._containerInstance;\r\n\r\n        if (container && !container._ariaLabelledBy) {\r\n          container._ariaLabelledBy = this.id;\r\n        }\r\n      });\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * SubTitle of a dialog element\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-subtitle]': 'true'}\r\n})\r\nexport class SdsDialogSubtitleDirective {}\r\n\r\n\r\n/**\r\n * Scrollable content container of a dialog.\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-content], sds-dialog-content, [sdsDialogContent]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-content]': 'true'}\r\n})\r\nexport class SdsDialogContentDirective {}\r\n\r\n\r\n/**\r\n * Container for the bottom action buttons in a dialog.\r\n * Stays fixed to the bottom when scrolling.\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-actions]': 'true'}\r\n})\r\nexport class SdsDialogActionsDirective {}\r\n\r\n\r\n/**\r\n * Finds the closest SdsDialogRef to an element by looking at the DOM.\r\n * @param element Element relative to which to look for a dialog.\r\n * @param openDialogs References to the currently-open dialogs.\r\n */\r\nfunction getClosestDialog(element: ElementRef<HTMLElement>, openDialogs: SdsDialogRef<any>[]) {\r\n  let parent: HTMLElement | null = element.nativeElement.parentElement;\r\n\r\n  while (parent && !parent.classList.contains('sds-dialog__container')) {\r\n    parent = parent.parentElement;\r\n  }\r\n\r\n  return parent ? openDialogs.find(dialog => dialog.id === parent!.id) : null;\r\n}\r\n",
            "selector": "button[sds-dialog-close], button[sdsDialogClose]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "aria-label",
                    "description": "<p>Screenreader label for the button. </p>\n",
                    "line": 31,
                    "type": "string"
                },
                {
                    "name": "sds-dialog-close",
                    "description": "<p>Dialog close input. </p>\n",
                    "line": 34,
                    "type": "any"
                },
                {
                    "name": "sdsDialogClose",
                    "line": 36,
                    "type": "any"
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [
                {
                    "name": "dialogRef",
                    "type": "SdsDialogRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 39,
                    "decorators": [
                        {
                            "name": "Optional",
                            "stringifiedArguments": ""
                        }
                    ],
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methodsClass": [
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
                    "line": 54,
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
                    "line": 43
                }
            ],
            "implements": [
                "OnInit",
                "OnChanges"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "dialogRef",
                        "type": "SdsDialogRef<any>"
                    },
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>"
                    },
                    {
                        "name": "_dialog",
                        "type": "SdsDialogService"
                    }
                ],
                "line": 36,
                "jsdoctags": [
                    {
                        "name": "dialogRef",
                        "type": "SdsDialogRef<any>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_dialog",
                        "type": "SdsDialogService",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SdsDialogContentDirective",
            "id": "directive-SdsDialogContentDirective-3d0823eb51e60df8943d560c1d76a2f3",
            "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
            "type": "directive",
            "description": "<p>Scrollable content container of a dialog.</p>\n",
            "sourceCode": "import {\r\n  Directive,\r\n  Input,\r\n  OnChanges,\r\n  OnInit,\r\n  Optional,\r\n  SimpleChanges,\r\n  ElementRef,\r\n} from '@angular/core';\r\nimport {SdsDialogService} from './dialog';\r\nimport {SdsDialogRef} from './dialog-ref';\r\n\r\n/** Counter used to generate unique IDs for dialog elements. */\r\nlet dialogElementUid = 0;\r\n\r\n/**\r\n * Button that will close the current dialog.\r\n */\r\n@Directive({\r\n  selector: `button[sds-dialog-close], button[sdsDialogClose]`,\r\n  exportAs: 'sdsDialogClose',\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {\r\n    '(click)': 'dialogRef.close(dialogResult)',\r\n    '[attr.aria-label]': 'ariaLabel || null',\r\n    'type': 'button', // Prevents accidental form submits.\r\n  }\r\n})\r\nexport class SdsDialogCloseDirective implements OnInit, OnChanges {\r\n  /** Screenreader label for the button. */\r\n  @Input('aria-label') ariaLabel: string;\r\n\r\n  /** Dialog close input. */\r\n  @Input('sds-dialog-close') dialogResult: any;\r\n\r\n  @Input('sdsDialogClose') _sdsDialogClose: any;\r\n\r\n  constructor(\r\n    @Optional() public dialogRef: SdsDialogRef<any>,\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private _dialog: SdsDialogService) {}\r\n\r\n  ngOnInit() {\r\n    if (!this.dialogRef) {\r\n      // When this directive is included in a dialog via TemplateRef (rather than being\r\n      // in a Component), the DialogRef isn't available via injection because embedded\r\n      // views cannot be given a custom injector. Instead, we look up the DialogRef by\r\n      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't\r\n      // be resolved at constructor time.\r\n      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\r\n    }\r\n  }\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    const proxiedChange = changes['_sdsDialogClose'] || changes['_sdsDialogCloseResult'];\r\n\r\n    if (proxiedChange) {\r\n      this.dialogResult = proxiedChange.currentValue;\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.\r\n */\r\n@Directive({\r\n  selector: '[sds-dialog-title], [sdsDialogTitle]',\r\n  exportAs: 'sdsDialogTitle',\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {\r\n    '[class.sds-dialog-title]': 'true',\r\n    '[id]': 'id',\r\n  },\r\n})\r\nexport class SdsDialogTitleDirective implements OnInit {\r\n  @Input() id = `sds-dialog-title-${dialogElementUid++}`;\r\n\r\n  constructor(\r\n    @Optional() private _dialogRef: SdsDialogRef<any>,\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private _dialog: SdsDialogService) {}\r\n\r\n  ngOnInit() {\r\n    if (!this._dialogRef) {\r\n      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\r\n    }\r\n\r\n    if (this._dialogRef) {\r\n      Promise.resolve().then(() => {\r\n        const container = this._dialogRef._containerInstance;\r\n\r\n        if (container && !container._ariaLabelledBy) {\r\n          container._ariaLabelledBy = this.id;\r\n        }\r\n      });\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * SubTitle of a dialog element\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-subtitle]': 'true'}\r\n})\r\nexport class SdsDialogSubtitleDirective {}\r\n\r\n\r\n/**\r\n * Scrollable content container of a dialog.\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-content], sds-dialog-content, [sdsDialogContent]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-content]': 'true'}\r\n})\r\nexport class SdsDialogContentDirective {}\r\n\r\n\r\n/**\r\n * Container for the bottom action buttons in a dialog.\r\n * Stays fixed to the bottom when scrolling.\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-actions]': 'true'}\r\n})\r\nexport class SdsDialogActionsDirective {}\r\n\r\n\r\n/**\r\n * Finds the closest SdsDialogRef to an element by looking at the DOM.\r\n * @param element Element relative to which to look for a dialog.\r\n * @param openDialogs References to the currently-open dialogs.\r\n */\r\nfunction getClosestDialog(element: ElementRef<HTMLElement>, openDialogs: SdsDialogRef<any>[]) {\r\n  let parent: HTMLElement | null = element.nativeElement.parentElement;\r\n\r\n  while (parent && !parent.classList.contains('sds-dialog__container')) {\r\n    parent = parent.parentElement;\r\n  }\r\n\r\n  return parent ? openDialogs.find(dialog => dialog.id === parent!.id) : null;\r\n}\r\n",
            "selector": "[sds-dialog-content], sds-dialog-content, [sdsDialogContent]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        },
        {
            "name": "SdsDialogSubtitleDirective",
            "id": "directive-SdsDialogSubtitleDirective-3d0823eb51e60df8943d560c1d76a2f3",
            "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
            "type": "directive",
            "description": "<p>SubTitle of a dialog element</p>\n",
            "sourceCode": "import {\r\n  Directive,\r\n  Input,\r\n  OnChanges,\r\n  OnInit,\r\n  Optional,\r\n  SimpleChanges,\r\n  ElementRef,\r\n} from '@angular/core';\r\nimport {SdsDialogService} from './dialog';\r\nimport {SdsDialogRef} from './dialog-ref';\r\n\r\n/** Counter used to generate unique IDs for dialog elements. */\r\nlet dialogElementUid = 0;\r\n\r\n/**\r\n * Button that will close the current dialog.\r\n */\r\n@Directive({\r\n  selector: `button[sds-dialog-close], button[sdsDialogClose]`,\r\n  exportAs: 'sdsDialogClose',\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {\r\n    '(click)': 'dialogRef.close(dialogResult)',\r\n    '[attr.aria-label]': 'ariaLabel || null',\r\n    'type': 'button', // Prevents accidental form submits.\r\n  }\r\n})\r\nexport class SdsDialogCloseDirective implements OnInit, OnChanges {\r\n  /** Screenreader label for the button. */\r\n  @Input('aria-label') ariaLabel: string;\r\n\r\n  /** Dialog close input. */\r\n  @Input('sds-dialog-close') dialogResult: any;\r\n\r\n  @Input('sdsDialogClose') _sdsDialogClose: any;\r\n\r\n  constructor(\r\n    @Optional() public dialogRef: SdsDialogRef<any>,\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private _dialog: SdsDialogService) {}\r\n\r\n  ngOnInit() {\r\n    if (!this.dialogRef) {\r\n      // When this directive is included in a dialog via TemplateRef (rather than being\r\n      // in a Component), the DialogRef isn't available via injection because embedded\r\n      // views cannot be given a custom injector. Instead, we look up the DialogRef by\r\n      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't\r\n      // be resolved at constructor time.\r\n      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\r\n    }\r\n  }\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    const proxiedChange = changes['_sdsDialogClose'] || changes['_sdsDialogCloseResult'];\r\n\r\n    if (proxiedChange) {\r\n      this.dialogResult = proxiedChange.currentValue;\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.\r\n */\r\n@Directive({\r\n  selector: '[sds-dialog-title], [sdsDialogTitle]',\r\n  exportAs: 'sdsDialogTitle',\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {\r\n    '[class.sds-dialog-title]': 'true',\r\n    '[id]': 'id',\r\n  },\r\n})\r\nexport class SdsDialogTitleDirective implements OnInit {\r\n  @Input() id = `sds-dialog-title-${dialogElementUid++}`;\r\n\r\n  constructor(\r\n    @Optional() private _dialogRef: SdsDialogRef<any>,\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private _dialog: SdsDialogService) {}\r\n\r\n  ngOnInit() {\r\n    if (!this._dialogRef) {\r\n      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\r\n    }\r\n\r\n    if (this._dialogRef) {\r\n      Promise.resolve().then(() => {\r\n        const container = this._dialogRef._containerInstance;\r\n\r\n        if (container && !container._ariaLabelledBy) {\r\n          container._ariaLabelledBy = this.id;\r\n        }\r\n      });\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * SubTitle of a dialog element\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-subtitle]': 'true'}\r\n})\r\nexport class SdsDialogSubtitleDirective {}\r\n\r\n\r\n/**\r\n * Scrollable content container of a dialog.\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-content], sds-dialog-content, [sdsDialogContent]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-content]': 'true'}\r\n})\r\nexport class SdsDialogContentDirective {}\r\n\r\n\r\n/**\r\n * Container for the bottom action buttons in a dialog.\r\n * Stays fixed to the bottom when scrolling.\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-actions]': 'true'}\r\n})\r\nexport class SdsDialogActionsDirective {}\r\n\r\n\r\n/**\r\n * Finds the closest SdsDialogRef to an element by looking at the DOM.\r\n * @param element Element relative to which to look for a dialog.\r\n * @param openDialogs References to the currently-open dialogs.\r\n */\r\nfunction getClosestDialog(element: ElementRef<HTMLElement>, openDialogs: SdsDialogRef<any>[]) {\r\n  let parent: HTMLElement | null = element.nativeElement.parentElement;\r\n\r\n  while (parent && !parent.classList.contains('sds-dialog__container')) {\r\n    parent = parent.parentElement;\r\n  }\r\n\r\n  return parent ? openDialogs.find(dialog => dialog.id === parent!.id) : null;\r\n}\r\n",
            "selector": "[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        },
        {
            "name": "SdsDialogTitleDirective",
            "id": "directive-SdsDialogTitleDirective-3d0823eb51e60df8943d560c1d76a2f3",
            "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
            "type": "directive",
            "description": "<p>Title of a dialog element. Stays fixed to the top of the dialog when scrolling.</p>\n",
            "sourceCode": "import {\r\n  Directive,\r\n  Input,\r\n  OnChanges,\r\n  OnInit,\r\n  Optional,\r\n  SimpleChanges,\r\n  ElementRef,\r\n} from '@angular/core';\r\nimport {SdsDialogService} from './dialog';\r\nimport {SdsDialogRef} from './dialog-ref';\r\n\r\n/** Counter used to generate unique IDs for dialog elements. */\r\nlet dialogElementUid = 0;\r\n\r\n/**\r\n * Button that will close the current dialog.\r\n */\r\n@Directive({\r\n  selector: `button[sds-dialog-close], button[sdsDialogClose]`,\r\n  exportAs: 'sdsDialogClose',\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {\r\n    '(click)': 'dialogRef.close(dialogResult)',\r\n    '[attr.aria-label]': 'ariaLabel || null',\r\n    'type': 'button', // Prevents accidental form submits.\r\n  }\r\n})\r\nexport class SdsDialogCloseDirective implements OnInit, OnChanges {\r\n  /** Screenreader label for the button. */\r\n  @Input('aria-label') ariaLabel: string;\r\n\r\n  /** Dialog close input. */\r\n  @Input('sds-dialog-close') dialogResult: any;\r\n\r\n  @Input('sdsDialogClose') _sdsDialogClose: any;\r\n\r\n  constructor(\r\n    @Optional() public dialogRef: SdsDialogRef<any>,\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private _dialog: SdsDialogService) {}\r\n\r\n  ngOnInit() {\r\n    if (!this.dialogRef) {\r\n      // When this directive is included in a dialog via TemplateRef (rather than being\r\n      // in a Component), the DialogRef isn't available via injection because embedded\r\n      // views cannot be given a custom injector. Instead, we look up the DialogRef by\r\n      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't\r\n      // be resolved at constructor time.\r\n      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\r\n    }\r\n  }\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    const proxiedChange = changes['_sdsDialogClose'] || changes['_sdsDialogCloseResult'];\r\n\r\n    if (proxiedChange) {\r\n      this.dialogResult = proxiedChange.currentValue;\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.\r\n */\r\n@Directive({\r\n  selector: '[sds-dialog-title], [sdsDialogTitle]',\r\n  exportAs: 'sdsDialogTitle',\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {\r\n    '[class.sds-dialog-title]': 'true',\r\n    '[id]': 'id',\r\n  },\r\n})\r\nexport class SdsDialogTitleDirective implements OnInit {\r\n  @Input() id = `sds-dialog-title-${dialogElementUid++}`;\r\n\r\n  constructor(\r\n    @Optional() private _dialogRef: SdsDialogRef<any>,\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private _dialog: SdsDialogService) {}\r\n\r\n  ngOnInit() {\r\n    if (!this._dialogRef) {\r\n      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\r\n    }\r\n\r\n    if (this._dialogRef) {\r\n      Promise.resolve().then(() => {\r\n        const container = this._dialogRef._containerInstance;\r\n\r\n        if (container && !container._ariaLabelledBy) {\r\n          container._ariaLabelledBy = this.id;\r\n        }\r\n      });\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * SubTitle of a dialog element\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-subtitle]': 'true'}\r\n})\r\nexport class SdsDialogSubtitleDirective {}\r\n\r\n\r\n/**\r\n * Scrollable content container of a dialog.\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-content], sds-dialog-content, [sdsDialogContent]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-content]': 'true'}\r\n})\r\nexport class SdsDialogContentDirective {}\r\n\r\n\r\n/**\r\n * Container for the bottom action buttons in a dialog.\r\n * Stays fixed to the bottom when scrolling.\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-actions]': 'true'}\r\n})\r\nexport class SdsDialogActionsDirective {}\r\n\r\n\r\n/**\r\n * Finds the closest SdsDialogRef to an element by looking at the DOM.\r\n * @param element Element relative to which to look for a dialog.\r\n * @param openDialogs References to the currently-open dialogs.\r\n */\r\nfunction getClosestDialog(element: ElementRef<HTMLElement>, openDialogs: SdsDialogRef<any>[]) {\r\n  let parent: HTMLElement | null = element.nativeElement.parentElement;\r\n\r\n  while (parent && !parent.classList.contains('sds-dialog__container')) {\r\n    parent = parent.parentElement;\r\n  }\r\n\r\n  return parent ? openDialogs.find(dialog => dialog.id === parent!.id) : null;\r\n}\r\n",
            "selector": "[sds-dialog-title], [sdsDialogTitle]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "id",
                    "defaultValue": "`sds-dialog-title-${dialogElementUid++}`",
                    "line": 76
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 83
                }
            ],
            "implements": [
                "OnInit"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_dialogRef",
                        "type": "SdsDialogRef<any>"
                    },
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>"
                    },
                    {
                        "name": "_dialog",
                        "type": "SdsDialogService"
                    }
                ],
                "line": 76,
                "jsdoctags": [
                    {
                        "name": "_dialogRef",
                        "type": "SdsDialogRef<any>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_dialog",
                        "type": "SdsDialogService",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SdsMenuTriggerForDirective",
            "id": "directive-SdsMenuTriggerForDirective-2a338fd251ec910c6fd8566d6e6c523a",
            "file": "libs/packages/components/src/lib/menu/menu-trigger.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\r\n  Directive,\r\n  ElementRef,\r\n  EventEmitter,\r\n  Input,\r\n  OnDestroy,\r\n  Output,\r\n  ViewContainerRef,\r\n  HostBinding,\r\n  HostListener,\r\n} from '@angular/core';\r\nimport {\r\n  FocusMonitor,\r\n  FocusOrigin,\r\n  isFakeMousedownFromScreenReader\r\n} from '@angular/cdk/a11y';\r\nimport {\r\n  FlexibleConnectedPositionStrategy,\r\n  HorizontalConnectionPos,\r\n  Overlay,\r\n  OverlayConfig,\r\n  OverlayRef,\r\n  VerticalConnectionPos\r\n} from '@angular/cdk/overlay';\r\nimport { TemplatePortal } from '@angular/cdk/portal';\r\nimport { normalizePassiveListenerOptions } from '@angular/cdk/platform';\r\nimport { merge, Subscription } from 'rxjs';\r\nimport {\r\n  SdsMenuInterface,\r\n  SdsMenuComponent,\r\n  MenuPositionX,\r\n  MenuPositionY\r\n} from './menu.component';\r\n\r\n@Directive({\r\n  selector: '[sdsMenuTriggerFor]'\r\n})\r\nexport class SdsMenuTriggerForDirective implements OnDestroy {\r\n  /** ARIA haspopup for the menu trigger. */\r\n  @HostBinding('attr.aria-haspopup') ariaHasPopup = true;\r\n\r\n  /** ARIA expanded for the menu trigger. */\r\n  @HostBinding('attr.aria-expanded')\r\n  get menuOpen(): boolean {\r\n    return this._menuOpen;\r\n  }\r\n\r\n  /** Holds the menu instance */\r\n  private _menu: SdsMenuInterface;\r\n\r\n  /** Holds value for menuOpen variable */\r\n  private _menuOpen = false;\r\n\r\n  /** CDK Portal for menu panel */\r\n  private _portal: TemplatePortal;\r\n\r\n  /** PortalOutlet */\r\n  private _overlayRef: OverlayRef | null = null;\r\n\r\n  /** Tracks input type  */\r\n  private _openedBy: 'mouse' | 'touch' | null = null;\r\n\r\n  private _closingActionsSubscription = Subscription.EMPTY;\r\n  private _menuCloseSubscription = Subscription.EMPTY;\r\n\r\n  /** References the menu instance that the trigger is associated with. */\r\n  @Input('sdsMenuTriggerFor')\r\n  get menu() {\r\n    return this._menu;\r\n  }\r\n  set menu(menu: SdsMenuInterface) {\r\n    if (menu === this._menu) {\r\n      return;\r\n    }\r\n    this._menu = menu;\r\n    this._menuCloseSubscription.unsubscribe();\r\n\r\n    if (menu) {\r\n      this._menuCloseSubscription = menu.closed.asObservable().subscribe(() => {\r\n        this._destroyMenu();\r\n      });\r\n    }\r\n  }\r\n\r\n  /** Event emitted when the associated menu is opened. */\r\n  @Output() menuOpened: EventEmitter<void> = new EventEmitter<void>();\r\n\r\n  /** Event emitted when the associated menu is closed. */\r\n  @Output() menuClosed: EventEmitter<void> = new EventEmitter<void>();\r\n\r\n  /** Handles mouse presses on the trigger. */\r\n  @HostListener('mousedown', ['$event'])\r\n  _handleMousedown(event: MouseEvent): void {\r\n    if (!isFakeMousedownFromScreenReader(event)) {\r\n      // Since right or middle button clicks won't trigger the `click` event,\r\n      // we shouldn't consider the menu as opened by mouse in those cases.\r\n      this._openedBy = event.button === 0 ? 'mouse' : null;\r\n    }\r\n  }\r\n\r\n  /** Toggles the menu between the open and closed states. */\r\n  @HostListener('click')\r\n  toggleMenu(): void {\r\n    return this._menuOpen ? this.closeMenu() : this.openMenu();\r\n  }\r\n\r\n  constructor(\r\n    private _overlay: Overlay,\r\n    private _element: ElementRef<HTMLElement>,\r\n    private _viewContainerRef: ViewContainerRef,\r\n    private _focusMonitor: FocusMonitor\r\n  ) {\r\n    // On touch devices set _openedBy to 'touch'\r\n    _element.nativeElement.addEventListener(\r\n      'touchstart',\r\n      () => (this._openedBy = 'touch'),\r\n      normalizePassiveListenerOptions({ passive: true })\r\n    );\r\n  }\r\n\r\n  ngOnDestroy() {\r\n    if (this._overlayRef) {\r\n      this._overlayRef.dispose();\r\n      this._overlayRef = null;\r\n    }\r\n\r\n    this._element.nativeElement.removeEventListener(\r\n      'touchstart',\r\n      () => (this._openedBy = 'touch'),\r\n      normalizePassiveListenerOptions({ passive: true })\r\n    );\r\n\r\n    this._menuCloseSubscription.unsubscribe();\r\n    this._closingActionsSubscription.unsubscribe();\r\n  }\r\n\r\n  /** Opens the menu. */\r\n  openMenu(): void {\r\n    if (this._menuOpen) {\r\n      return;\r\n    }\r\n    const overlayRef = this._createOverlay();\r\n    const overlayConfig = overlayRef.getConfig();\r\n    this._setPosition(\r\n      overlayConfig.positionStrategy as FlexibleConnectedPositionStrategy\r\n    );\r\n    overlayRef.attach(this._getPortal());\r\n    this._closingActionsSubscription = this._menuClosingActions().subscribe(\r\n      () => this.closeMenu()\r\n    );\r\n    this._initMenu();\r\n    if (this.menu instanceof SdsMenuComponent) {\r\n      this.menu._startAnimation();\r\n    }\r\n  }\r\n\r\n  /** Closes the menu. */\r\n  closeMenu(): void {\r\n    this.menu.closed.emit();\r\n  }\r\n\r\n  /** Focuses the menu trigger. */\r\n  focus(origin: FocusOrigin = 'program'): void {\r\n    this._focusMonitor.focusVia(this._element, origin);\r\n  }\r\n\r\n  /** This method sets the menu state to open and focuses the first item */\r\n  private _initMenu(): void {\r\n    this._setIsMenuOpen(true);\r\n    this.menu.focusFirstItem(this._openedBy || 'program');\r\n  }\r\n\r\n  /** sets open state */\r\n  private _setIsMenuOpen(isOpen: boolean): void {\r\n    this._menuOpen = isOpen;\r\n    this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();\r\n  }\r\n\r\n  /**\r\n   * This method resets the menu when it's closed,\r\n   * most importantly restoring focus to the menu trigger\r\n   */\r\n  private _resetMenu(): void {\r\n    this._setIsMenuOpen(false);\r\n\r\n    if (!this._openedBy) {\r\n      this.focus();\r\n    } else {\r\n      this.focus(this._openedBy);\r\n    }\r\n\r\n    this._openedBy = null;\r\n  }\r\n\r\n  /** Closes the menu and does the necessary cleanup. */\r\n  private _destroyMenu() {\r\n    if (!this._overlayRef || !this.menuOpen) {\r\n      return;\r\n    }\r\n\r\n    this._closingActionsSubscription.unsubscribe();\r\n\r\n    this._overlayRef.detach();\r\n\r\n    if (this.menu instanceof SdsMenuComponent) {\r\n      this.menu._resetAnimation();\r\n      this._resetMenu();\r\n    }\r\n    \r\n  }\r\n\r\n  /**\r\n   * This method creates the overlay from the provided menu's template and saves its\r\n   * OverlayRef so that it can be attached to the DOM when openMenu is called.\r\n   */\r\n  private _createOverlay(): OverlayRef {\r\n    if (!this._overlayRef) {\r\n      const config = this._getOverlayConfig();\r\n      this._subscribeToPositions(\r\n        config.positionStrategy as FlexibleConnectedPositionStrategy\r\n      );\r\n      this._overlayRef = this._overlay.create(config);\r\n      this._overlayRef.keydownEvents().subscribe();\r\n    }\r\n    return this._overlayRef;\r\n  }\r\n\r\n  /**\r\n   * This method builds the configuration object needed to create the overlay, the OverlayState.\r\n   * @returns OverlayConfig\r\n   */\r\n  private _getOverlayConfig(): OverlayConfig {\r\n    return new OverlayConfig({\r\n      positionStrategy: this._overlay\r\n        .position()\r\n        .flexibleConnectedTo(this._element)\r\n        .withLockedPosition()\r\n        .withTransformOriginOn('.sds-overlay'),\r\n      hasBackdrop: true,\r\n      backdropClass: 'cdk-overlay-transparent-backdrop',\r\n      scrollStrategy: this._overlay.scrollStrategies.reposition()\r\n    });\r\n  }\r\n\r\n  /**\r\n   * Listens to changes in the position of the overlay and sets the correct classes\r\n   * on the menu based on the new position.\r\n   */\r\n  private _subscribeToPositions(\r\n    position: FlexibleConnectedPositionStrategy\r\n  ): void {\r\n    position.positionChanges.subscribe(change => {\r\n      const posX: MenuPositionX =\r\n        change.connectionPair.overlayX === 'start' ? 'after' : 'before';\r\n      const posY: MenuPositionY =\r\n        change.connectionPair.overlayY === 'top' ? 'below' : 'above';\r\n\r\n      this.menu.setPositionClasses(posX, posY);\r\n    });\r\n  }\r\n\r\n  /**\r\n   * Sets the appropriate positions on a position strategy\r\n   * so the overlay connects with the trigger correctly.\r\n   */\r\n  private _setPosition(positionStrategy: FlexibleConnectedPositionStrategy) {\r\n    const [originX, originFallbackX]: HorizontalConnectionPos[] =\r\n      this.menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'];\r\n\r\n    const [overlayY, overlayFallbackY]: VerticalConnectionPos[] =\r\n      this.menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'];\r\n\r\n    let [originY, originFallbackY] = [overlayY, overlayFallbackY];\r\n    const [overlayX, overlayFallbackX] = [originX, originFallbackX];\r\n    const offsetY = 0;\r\n\r\n    if (!this.menu.overlapTrigger) {\r\n      originY = overlayY === 'top' ? 'bottom' : 'top';\r\n      originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';\r\n    }\r\n\r\n    // Positions from most to least desirable\r\n    positionStrategy.withPositions([\r\n      { originX, originY, overlayX, overlayY, offsetY },\r\n      {\r\n        originX: originFallbackX,\r\n        originY,\r\n        overlayX: overlayFallbackX,\r\n        overlayY,\r\n        offsetY\r\n      },\r\n      {\r\n        originX,\r\n        originY: originFallbackY,\r\n        overlayX,\r\n        overlayY: overlayFallbackY,\r\n        offsetY: -offsetY\r\n      },\r\n      {\r\n        originX: originFallbackX,\r\n        originY: originFallbackY,\r\n        overlayX: overlayFallbackX,\r\n        overlayY: overlayFallbackY,\r\n        offsetY: -offsetY\r\n      }\r\n    ]);\r\n  }\r\n\r\n  /** Returns a stream that emits whenever an action that should close the menu occurs. */\r\n  private _menuClosingActions() {\r\n    const backdrop = this._overlayRef.backdropClick();\r\n    const detachments = this._overlayRef.detachments();\r\n    return merge(backdrop, detachments);\r\n  }\r\n\r\n  /** Gets the portal that should be attached to the overlay. */\r\n  private _getPortal(): TemplatePortal {\r\n    if (!this._portal || this._portal.templateRef !== this.menu.templateRef) {\r\n      this._portal = new TemplatePortal(\r\n        this.menu.templateRef,\r\n        this._viewContainerRef\r\n      );\r\n    }\r\n    return this._portal;\r\n  }\r\n}\r\n",
            "selector": "[sdsMenuTriggerFor]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "sdsMenuTriggerFor",
                    "description": "<p>References the menu instance that the trigger is associated with. </p>\n",
                    "line": 68
                }
            ],
            "outputsClass": [
                {
                    "name": "menuClosed",
                    "defaultValue": "new EventEmitter<void>()",
                    "description": "<p>Event emitted when the associated menu is closed. </p>\n",
                    "line": 89,
                    "type": "EventEmitter<void>"
                },
                {
                    "name": "menuOpened",
                    "defaultValue": "new EventEmitter<void>()",
                    "description": "<p>Event emitted when the associated menu is opened. </p>\n",
                    "line": 86,
                    "type": "EventEmitter<void>"
                }
            ],
            "hostBindings": [
                {
                    "name": "attr.aria-expanded",
                    "description": "<p>ARIA expanded for the menu trigger. </p>\n",
                    "line": 44,
                    "type": "boolean"
                },
                {
                    "name": "attr.aria-haspopup",
                    "defaultValue": "true",
                    "description": "<p>ARIA haspopup for the menu trigger. </p>\n",
                    "line": 40
                }
            ],
            "hostListeners": [
                {
                    "name": "click",
                    "args": [],
                    "argsDecorator": [],
                    "description": "<p>Toggles the menu between the open and closed states. </p>\n",
                    "line": 103
                },
                {
                    "name": "mousedown",
                    "args": [
                        {
                            "name": "event",
                            "type": "MouseEvent"
                        }
                    ],
                    "argsDecorator": [
                        "$event"
                    ],
                    "description": "<p>Handles mouse presses on the trigger. </p>\n",
                    "line": 93
                }
            ],
            "propertiesClass": [
                {
                    "name": "_closingActionsSubscription",
                    "defaultValue": "Subscription.EMPTY",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 63,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_menu",
                    "type": "SdsMenuInterface",
                    "optional": false,
                    "description": "<p>Holds the menu instance </p>\n",
                    "line": 49,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_menuCloseSubscription",
                    "defaultValue": "Subscription.EMPTY",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 64,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_menuOpen",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "<p>Holds value for menuOpen variable </p>\n",
                    "line": 52,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_openedBy",
                    "defaultValue": "null",
                    "type": "\"mouse\" | \"touch\" | null",
                    "optional": false,
                    "description": "<p>Tracks input type  </p>\n",
                    "line": 61,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_overlayRef",
                    "defaultValue": "null",
                    "type": "OverlayRef | null",
                    "optional": false,
                    "description": "<p>PortalOutlet </p>\n",
                    "line": 58,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_portal",
                    "type": "TemplatePortal",
                    "optional": false,
                    "description": "<p>CDK Portal for menu panel </p>\n",
                    "line": 55,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "_createOverlay",
                    "args": [],
                    "optional": false,
                    "returnType": "OverlayRef",
                    "typeParameters": [],
                    "line": 216,
                    "description": "<p>This method creates the overlay from the provided menu&#39;s template and saves its\nOverlayRef so that it can be attached to the DOM when openMenu is called.</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_destroyMenu",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 196,
                    "description": "<p>Closes the menu and does the necessary cleanup. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_getOverlayConfig",
                    "args": [],
                    "optional": false,
                    "returnType": "OverlayConfig",
                    "typeParameters": [],
                    "line": 232,
                    "description": "<p>This method builds the configuration object needed to create the overlay, the OverlayState.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "tagName": {
                                "pos": 6410,
                                "end": 6417,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>OverlayConfig</p>\n"
                        }
                    ]
                },
                {
                    "name": "_getPortal",
                    "args": [],
                    "optional": false,
                    "returnType": "TemplatePortal",
                    "typeParameters": [],
                    "line": 317,
                    "description": "<p>Gets the portal that should be attached to the overlay. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_initMenu",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 168,
                    "description": "<p>This method sets the menu state to open and focuses the first item </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_menuClosingActions",
                    "args": [],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 310,
                    "description": "<p>Returns a stream that emits whenever an action that should close the menu occurs. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_resetMenu",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 183,
                    "description": "<p>This method resets the menu when it&#39;s closed,\nmost importantly restoring focus to the menu trigger</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_setIsMenuOpen",
                    "args": [
                        {
                            "name": "isOpen",
                            "type": "boolean"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 174,
                    "description": "<p>sets open state </p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "isOpen",
                            "type": "boolean",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_setPosition",
                    "args": [
                        {
                            "name": "positionStrategy",
                            "type": "FlexibleConnectedPositionStrategy"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 266,
                    "description": "<p>Sets the appropriate positions on a position strategy\nso the overlay connects with the trigger correctly.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "positionStrategy",
                            "type": "FlexibleConnectedPositionStrategy",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_subscribeToPositions",
                    "args": [
                        {
                            "name": "position",
                            "type": "FlexibleConnectedPositionStrategy"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 249,
                    "description": "<p>Listens to changes in the position of the overlay and sets the correct classes\non the menu based on the new position.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "position",
                            "type": "FlexibleConnectedPositionStrategy",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "closeMenu",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 158,
                    "description": "<p>Closes the menu. </p>\n"
                },
                {
                    "name": "focus",
                    "args": [
                        {
                            "name": "origin",
                            "type": "FocusOrigin",
                            "defaultValue": "'program'"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 163,
                    "description": "<p>Focuses the menu trigger. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "origin",
                            "type": "FocusOrigin",
                            "defaultValue": "'program'",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 121
                },
                {
                    "name": "openMenu",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 138,
                    "description": "<p>Opens the menu. </p>\n"
                }
            ],
            "implements": [
                "OnDestroy"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_overlay",
                        "type": "Overlay"
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef<HTMLElement>"
                    },
                    {
                        "name": "_viewContainerRef",
                        "type": "ViewContainerRef"
                    },
                    {
                        "name": "_focusMonitor",
                        "type": "FocusMonitor"
                    }
                ],
                "line": 105,
                "jsdoctags": [
                    {
                        "name": "_overlay",
                        "type": "Overlay",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef<HTMLElement>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_viewContainerRef",
                        "type": "ViewContainerRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_focusMonitor",
                        "type": "FocusMonitor",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "accessors": {
                "menu": {
                    "name": "menu",
                    "setSignature": {
                        "name": "menu",
                        "type": "void",
                        "args": [
                            {
                                "name": "menu",
                                "type": ""
                            }
                        ],
                        "returnType": "void",
                        "line": 71,
                        "jsdoctags": [
                            {
                                "name": "menu",
                                "type": "",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                }
            }
        },
        {
            "name": "SdsObserveWidthDirective",
            "id": "directive-SdsObserveWidthDirective-be9ff768900b34491eace1ceaf784afa",
            "file": "libs/packages/components/src/lib/observers/observe-width.directive.ts",
            "type": "directive",
            "description": "<p>Directive that triggers a callback whenever the width of\nits associated element has changed.</p>\n",
            "sourceCode": "import {\r\n  Directive,\r\n  Output,\r\n  EventEmitter,\r\n  ElementRef,\r\n  OnInit,\r\n  OnDestroy\r\n} from '@angular/core';\r\nimport { ViewportRuler } from '@angular/cdk/overlay';\r\nimport { startWith } from 'rxjs/operators';\r\nimport { Subscription } from 'rxjs';\r\n\r\n/**\r\n * Directive that triggers a callback whenever the width of\r\n * its associated element has changed.\r\n */\r\n@Directive({ selector: '[sdsObserveWidth]' })\r\nexport class SdsObserveWidthDirective implements OnInit, OnDestroy {\r\n  /** Event emitted for each change in the element's width. */\r\n  @Output('sdsObserveWidth') elementWidth = new EventEmitter<number>();\r\n\r\n  /** Subscription to window resize stream */\r\n  windowResize$: Subscription;\r\n\r\n  constructor(\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private viewportRuler: ViewportRuler\r\n  ) {}\r\n\r\n  ngOnInit() {\r\n    this.windowResize$ = this.viewportRuler\r\n      .change(0)\r\n      .pipe(startWith(this._getElementWidth()))\r\n      .subscribe(() => this._emitEvent());\r\n  }\r\n\r\n  ngOnDestroy() {\r\n    this.windowResize$.unsubscribe();\r\n  }\r\n\r\n  _emitEvent() {\r\n    const width = this._getElementWidth();\r\n    this.elementWidth.emit(width);\r\n  }\r\n\r\n  _getElementWidth(): number {\r\n    return this._elementRef.nativeElement.offsetWidth;\r\n  }\r\n}\r\n",
            "selector": "[sdsObserveWidth]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [
                {
                    "name": "sdsObserveWidth",
                    "defaultValue": "new EventEmitter<number>()",
                    "description": "<p>Event emitted for each change in the element&#39;s width. </p>\n",
                    "line": 20,
                    "type": "EventEmitter"
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [
                {
                    "name": "windowResize$",
                    "type": "Subscription",
                    "optional": false,
                    "description": "<p>Subscription to window resize stream </p>\n",
                    "line": 23
                }
            ],
            "methodsClass": [
                {
                    "name": "_emitEvent",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 41
                },
                {
                    "name": "_getElementWidth",
                    "args": [],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 46
                },
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 37
                },
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 30
                }
            ],
            "implements": [
                "OnInit",
                "OnDestroy"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>"
                    },
                    {
                        "name": "viewportRuler",
                        "type": "ViewportRuler"
                    }
                ],
                "line": 23,
                "jsdoctags": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "viewportRuler",
                        "type": "ViewportRuler",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SdsPopupDirective",
            "id": "directive-SdsPopupDirective-8fddb6001086097a3983772becea7e73",
            "file": "libs/packages/components/src/lib/popup/popup.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import { Directive, Input, ElementRef, Renderer2, AfterViewInit, OnInit } from '@angular/core';\r\n\r\n\r\n@Directive({\r\n  selector: '[sdsPopup]',\r\n  exportAs: 'sdsPopup'\r\n})\r\nexport class SdsPopupDirective implements AfterViewInit {\r\n  @Input() sdsPopup: HTMLElement;\r\n  @Input() position: string;\r\n  @Input() placement: string;\r\n  sdsPopupDiv: HTMLElement;\r\n\r\n  constructor(private el: ElementRef, private renderer: Renderer2) {\r\n    this.renderer.addClass(this.el.nativeElement, 'sds-popup');\r\n    this.sdsPopupDiv = document.createElement('div');\r\n    this.renderer.addClass(this.sdsPopupDiv, 'sds-popup__content');\r\n  }\r\n\r\n\r\n  ngAfterViewInit() {\r\n    this.renderer.appendChild(this.el.nativeElement, this.sdsPopup);\r\n    this.renderer.addClass(this.sdsPopupDiv, this.placement);\r\n    this.renderer.addClass(this.sdsPopupDiv, this.position);\r\n    this.renderer.appendChild(this.sdsPopupDiv, this.el.nativeElement.children[0]);\r\n    this.renderer.appendChild(this.el.nativeElement, this.sdsPopupDiv);\r\n  }\r\n}\r\n",
            "selector": "[sdsPopup]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "placement",
                    "line": 11,
                    "type": "string"
                },
                {
                    "name": "position",
                    "line": 10,
                    "type": "string"
                },
                {
                    "name": "sdsPopup",
                    "line": 9,
                    "type": "HTMLElement"
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [
                {
                    "name": "sdsPopupDiv",
                    "type": "HTMLElement",
                    "optional": false,
                    "description": "",
                    "line": 12
                }
            ],
            "methodsClass": [
                {
                    "name": "ngAfterViewInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 21
                }
            ],
            "implements": [
                "AfterViewInit"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "el",
                        "type": "ElementRef"
                    },
                    {
                        "name": "renderer",
                        "type": "Renderer2"
                    }
                ],
                "line": 12,
                "jsdoctags": [
                    {
                        "name": "el",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "renderer",
                        "type": "Renderer2",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SDSTabOutsideDirective",
            "id": "directive-SDSTabOutsideDirective-c7a3bf23d725d659c87c8ce6f48ad44e",
            "file": "libs/packages/components/src/lib/tab-outside/taboutside.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\r\n  Directive, ElementRef, Output,\r\n  EventEmitter, HostListener\r\n} from '@angular/core';\r\n\r\n\r\n@Directive({\r\n  selector: '[sds-tab-outside]'\r\n})\r\nexport class SDSTabOutsideDirective {\r\n  /**\r\n   * Emitter for tabOutside event\r\n   */\r\n  @Output() tabOutside: EventEmitter<any> = new EventEmitter();\r\n\r\n  constructor(private _elementRef: ElementRef) { }\r\n\r\n  @HostListener('document:keyup', ['$event.target'])\r\n  public hasFocusChanged(target) {\r\n    const isInsideHost = this._elementRef.nativeElement.contains(target);\r\n    if (!isInsideHost) {\r\n      this.tabOutside.emit(undefined);\r\n    }\r\n  }\r\n}\r\n",
            "selector": "[sds-tab-outside]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [
                {
                    "name": "tabOutside",
                    "defaultValue": "new EventEmitter()",
                    "description": "<p>Emitter for tabOutside event</p>\n",
                    "line": 14,
                    "type": "EventEmitter<any>"
                }
            ],
            "hostBindings": [],
            "hostListeners": [
                {
                    "name": "document:keyup",
                    "args": [
                        {
                            "name": "target",
                            "type": ""
                        }
                    ],
                    "argsDecorator": [
                        "$event.target"
                    ],
                    "line": 19
                }
            ],
            "propertiesClass": [],
            "methodsClass": [],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef"
                    }
                ],
                "line": 14,
                "jsdoctags": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SdsToolbarExpandDirective",
            "id": "directive-SdsToolbarExpandDirective-4d0224470e89ee31acd753d3e38ede83",
            "file": "libs/packages/components/src/lib/toolbar/toolbar-expand.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import { Directive, ElementRef, Input, Renderer2, OnInit } from \"@angular/core\";\r\nimport { SdsToolbarComponent } from \"./toolbar.component\";\r\n\r\n@Directive({\r\n  selector: \"[sdsToolbarExpand]\"\r\n})\r\nexport class SdsToolbarExpandDirective implements OnInit {\r\n  /** Width of the toolbar while expanded. */\r\n  _expandedWidth: string;\r\n\r\n  /** References the toolbar instance that the element its associated with. */\r\n  @Input(\"sdsToolbarExpand\")\r\n  get toolbar() {\r\n    return this._toolbar;\r\n  }\r\n  set toolbar(toolbar: SdsToolbarComponent) {\r\n    if (toolbar === this._toolbar) {\r\n      return;\r\n    }\r\n    this._toolbar = toolbar;\r\n    /** Sets toolbar expanded width */\r\n\r\n    this._expandedWidth = this._toolbar.expandedSpace;\r\n  }\r\n  private _toolbar: SdsToolbarComponent;\r\n\r\n  constructor(private renderer: Renderer2, private _element: ElementRef) { }\r\n  ngOnInit() {\r\n    this.setStyle(this.toolbar.expanded);\r\n    this.toolbar.expandedChange.subscribe(value => {\r\n      this.setStyle(value);\r\n    });\r\n  }\r\n\r\n  private setStyle(value: any) {\r\n    if (value) {\r\n      this.renderer.setStyle(this._element.nativeElement, \"margin-left\", `${this._expandedWidth}`);\r\n    }\r\n    else {\r\n      this.renderer.removeStyle(this._element.nativeElement, \"margin-left\");\r\n    }\r\n  }\r\n}\r\n",
            "selector": "[sdsToolbarExpand]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "sdsToolbarExpand",
                    "description": "<p>References the toolbar instance that the element its associated with. </p>\n",
                    "line": 13
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [
                {
                    "name": "_expandedWidth",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Width of the toolbar while expanded. </p>\n",
                    "line": 9
                },
                {
                    "name": "_toolbar",
                    "type": "SdsToolbarComponent",
                    "optional": false,
                    "description": "",
                    "line": 25,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 28
                },
                {
                    "name": "setStyle",
                    "args": [
                        {
                            "name": "value",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 35,
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "value",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "implements": [
                "OnInit"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "renderer",
                        "type": "Renderer2"
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef"
                    }
                ],
                "line": 25,
                "jsdoctags": [
                    {
                        "name": "renderer",
                        "type": "Renderer2",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "accessors": {
                "toolbar": {
                    "name": "toolbar",
                    "setSignature": {
                        "name": "toolbar",
                        "type": "void",
                        "args": [
                            {
                                "name": "toolbar",
                                "type": ""
                            }
                        ],
                        "returnType": "void",
                        "line": 16,
                        "jsdoctags": [
                            {
                                "name": "toolbar",
                                "type": "",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                }
            }
        },
        {
            "name": "SdsTruncateTextByLineDirective",
            "id": "directive-SdsTruncateTextByLineDirective-2a24a89c3f0a1b5ce84cb7b768679d85",
            "file": "libs/packages/components/src/lib/truncate-text/truncate-text.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\r\n  Directive,\r\n  ElementRef,\r\n  OnInit,\r\n  Input,\r\n  OnDestroy,\r\n  AfterViewInit,\r\n  HostListener,\r\n  Injector,\r\n  ViewContainerRef\r\n} from '@angular/core';\r\nimport { coerceNumberProperty } from '@angular/cdk/coercion';\r\nimport {\r\n  ViewportRuler,\r\n  OverlayConfig,\r\n  Overlay,\r\n  OverlayRef,\r\n  ConnectedPosition\r\n} from '@angular/cdk/overlay';\r\nimport { Subscription, merge } from 'rxjs';\r\nimport { startWith } from 'rxjs/operators';\r\nimport { PortalInjector, ComponentPortal } from '@angular/cdk/portal';\r\nimport { SdsTruncatedTextContainerComponent } from './truncate-text-container.component';\r\nimport { SDS_TRUNCATED_TEXT_DATA } from './truncates-text-base';\r\n\r\n@Directive({ selector: '[sdsTruncateTextByLine]' })\r\nexport class SdsTruncateTextByLineDirective\r\n  implements OnInit, OnDestroy, AfterViewInit {\r\n  /** Maximum lines of text limit */\r\n  @Input('sdsTruncateTextByLine')\r\n  get textLinesLimit(): any {\r\n    return this._textLinesLimit;\r\n  }\r\n  set textLinesLimit(_textLinesLimit: any) {\r\n    _textLinesLimit = coerceNumberProperty(_textLinesLimit);\r\n    if (this._textLinesLimit !== _textLinesLimit) {\r\n      this._textLinesLimit = _textLinesLimit;\r\n    }\r\n  }\r\n  private _textLinesLimit: number;\r\n\r\n  /** PortalOutlet */\r\n  private _overlayRef: OverlayRef | null = null;\r\n\r\n  /** Holds subscription to stream of overlay closing events */\r\n  private _closingActionsSubscription = Subscription.EMPTY;\r\n\r\n  /** Holds initial text */\r\n  private initialText: string;\r\n\r\n  /** Subscription to window resize stream */\r\n  windowResize$: Subscription;\r\n\r\n  /** Approximated character width of the host text */\r\n  private approximatedCharacterWidth: number;\r\n\r\n  constructor(\r\n    private _overlay: Overlay,\r\n    private _injector: Injector,\r\n    private _element: ElementRef,\r\n    private _viewportRuler: ViewportRuler,\r\n    private _viewContainerRef: ViewContainerRef\r\n  ) {}\r\n\r\n  ngOnInit() {\r\n    this.initialText = this._element.nativeElement.innerText.trim();\r\n\r\n    // Clone element to facilitate calculations\r\n    const hostCloneEl = this._element.nativeElement.cloneNode() as HTMLElement;\r\n\r\n    // Add 1 character to calculate character width\r\n    hostCloneEl.innerHTML = 'x';\r\n\r\n    // Render the clone to get character width\r\n    this._element.nativeElement.parentElement.appendChild(hostCloneEl);\r\n\r\n    // Set the clone to inline to prevent cases where the clone\r\n    // expands to 100% width of the container\r\n    hostCloneEl.setAttribute('style', 'display: inline');\r\n\r\n    // These are close approximations that are used to better guess\r\n    // how many characters fit in X number of lines\r\n    this.approximatedCharacterWidth = hostCloneEl.offsetWidth;\r\n\r\n    // Remove clone after calculations\r\n    hostCloneEl.remove();\r\n  }\r\n\r\n  ngAfterViewInit(): void {\r\n    this.windowResize$ = this._viewportRuler\r\n      .change(0)\r\n      .pipe(startWith('Start'))\r\n      .subscribe(() => this.updateUI());\r\n  }\r\n\r\n  ngOnDestroy(): void {\r\n    if (this._overlayRef) {\r\n      this._overlayRef.dispose();\r\n    }\r\n    this._closingActionsSubscription.unsubscribe();\r\n    this.windowResize$.unsubscribe();\r\n  }\r\n\r\n  /** Configures and creates the CDK overlay */\r\n  private _createOverlay() {\r\n    const overlayPositions: ConnectedPosition = {\r\n      originX: 'start',\r\n      originY: 'bottom',\r\n      overlayX: 'start',\r\n      overlayY: 'top'\r\n    };\r\n    const config = new OverlayConfig({\r\n      positionStrategy: this._overlay\r\n        .position()\r\n        .flexibleConnectedTo(this._element)\r\n        .withLockedPosition()\r\n        .withPositions([overlayPositions])\r\n        .withTransformOriginOn('.sds-overlay'),\r\n      hasBackdrop: true,\r\n      backdropClass: 'cdk-overlay-transparent-backdrop',\r\n      scrollStrategy: this._overlay.scrollStrategies.close()\r\n    });\r\n    return this._overlay.create(config);\r\n  }\r\n\r\n  /** Attach a ComponentPortal to the overlay **/\r\n  private _attachContainer(overlay: OverlayRef) {\r\n    const injector = new PortalInjector(\r\n      this._injector,\r\n      new WeakMap([[SDS_TRUNCATED_TEXT_DATA, { text: this.initialText }]])\r\n    );\r\n    const containerPortal = new ComponentPortal(\r\n      SdsTruncatedTextContainerComponent,\r\n      this._viewContainerRef,\r\n      injector\r\n    );\r\n    const containerRef = overlay.attach(containerPortal);\r\n\r\n    return containerRef.instance;\r\n  }\r\n\r\n  /** Returns a stream that emits whenever an action that should close the overlay occurs. */\r\n  private _overlayClosingActions() {\r\n    const backdrop = this._overlayRef.backdropClick();\r\n    const detachments = this._overlayRef.detachments();\r\n    return merge(backdrop, detachments);\r\n  }\r\n\r\n  /** Width of host element */\r\n  private _getHostWidth(): number {\r\n    return this._element.nativeElement.offsetWidth;\r\n  }\r\n\r\n  /** Approximated number of characters that are visible in the container */\r\n  private _getVisibleCharacters(): number {\r\n    return Math.floor(\r\n      (this._getHostWidth() / this.approximatedCharacterWidth) *\r\n        this.textLinesLimit\r\n    );\r\n  }\r\n\r\n  private _isNotLongEnough(): boolean {\r\n    return this._getVisibleCharacters() > this.initialText.length;\r\n  }\r\n\r\n  @HostListener('click')\r\n  openOverlay(): void {\r\n    // Exit if all text can be visible in container\r\n    if (this._isNotLongEnough()) return;\r\n\r\n    this._overlayRef = this._createOverlay();\r\n    const container = this._attachContainer(this._overlayRef);\r\n    this._closingActionsSubscription = this._overlayClosingActions().subscribe(\r\n      () => this.closeOverlay()\r\n    );\r\n    // Wait for the next event loop tick to start the animation\r\n    setTimeout(() => {\r\n      container.startAnimation();\r\n    });\r\n  }\r\n\r\n  updateUI() {\r\n    // Exit if all text can be visible in container\r\n    if (this._isNotLongEnough()) return;\r\n\r\n    const wordCut = false;\r\n    const ellipsis = '...';\r\n    const limit = this._getVisibleCharacters() - ellipsis.length;\r\n\r\n    let visibleText = this.initialText.slice(0, limit);\r\n\r\n    if (!wordCut) {\r\n      const isEndofWord = this.initialText.substr(limit, limit + 1) === ' ';\r\n      if (!isEndofWord) {\r\n        const previousWord = visibleText.lastIndexOf(' ');\r\n        visibleText = visibleText.slice(0, previousWord);\r\n      }\r\n    }\r\n\r\n    this._element.nativeElement.innerText = visibleText + ellipsis;\r\n  }\r\n\r\n  closeOverlay() {\r\n    this._closingActionsSubscription.unsubscribe();\r\n    this._overlayRef.detach();\r\n  }\r\n}\r\n",
            "selector": "[sdsTruncateTextByLine]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "sdsTruncateTextByLine",
                    "description": "<p>Maximum lines of text limit </p>\n",
                    "line": 31,
                    "type": "any"
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [
                {
                    "name": "click",
                    "args": [],
                    "argsDecorator": [],
                    "line": 167
                }
            ],
            "propertiesClass": [
                {
                    "name": "_closingActionsSubscription",
                    "defaultValue": "Subscription.EMPTY",
                    "type": "",
                    "optional": false,
                    "description": "<p>Holds subscription to stream of overlay closing events </p>\n",
                    "line": 46,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_overlayRef",
                    "defaultValue": "null",
                    "type": "OverlayRef | null",
                    "optional": false,
                    "description": "<p>PortalOutlet </p>\n",
                    "line": 43,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_textLinesLimit",
                    "type": "number",
                    "optional": false,
                    "description": "",
                    "line": 40,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "approximatedCharacterWidth",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Approximated character width of the host text </p>\n",
                    "line": 55,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "initialText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Holds initial text </p>\n",
                    "line": 49,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "windowResize$",
                    "type": "Subscription",
                    "optional": false,
                    "description": "<p>Subscription to window resize stream </p>\n",
                    "line": 52
                }
            ],
            "methodsClass": [
                {
                    "name": "_attachContainer",
                    "args": [
                        {
                            "name": "overlay",
                            "type": "OverlayRef"
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 127,
                    "description": "<p>Attach a ComponentPortal to the overlay *</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "overlay",
                            "type": "OverlayRef",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_createOverlay",
                    "args": [],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 105,
                    "description": "<p>Configures and creates the CDK overlay </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_getHostWidth",
                    "args": [],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 150,
                    "description": "<p>Width of host element </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_getVisibleCharacters",
                    "args": [],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 155,
                    "description": "<p>Approximated number of characters that are visible in the container </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_isNotLongEnough",
                    "args": [],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 162,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_overlayClosingActions",
                    "args": [],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 143,
                    "description": "<p>Returns a stream that emits whenever an action that should close the overlay occurs. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "closeOverlay",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 203
                },
                {
                    "name": "ngAfterViewInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 89
                },
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 96
                },
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 65
                },
                {
                    "name": "updateUI",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 182
                }
            ],
            "implements": [
                "OnInit",
                "OnDestroy",
                "AfterViewInit"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_overlay",
                        "type": "Overlay"
                    },
                    {
                        "name": "_injector",
                        "type": "Injector"
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef"
                    },
                    {
                        "name": "_viewportRuler",
                        "type": "ViewportRuler"
                    },
                    {
                        "name": "_viewContainerRef",
                        "type": "ViewContainerRef"
                    }
                ],
                "line": 55,
                "jsdoctags": [
                    {
                        "name": "_overlay",
                        "type": "Overlay",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_injector",
                        "type": "Injector",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_viewportRuler",
                        "type": "ViewportRuler",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_viewContainerRef",
                        "type": "ViewContainerRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "accessors": {
                "textLinesLimit": {
                    "name": "textLinesLimit",
                    "setSignature": {
                        "name": "textLinesLimit",
                        "type": "void",
                        "args": [
                            {
                                "name": "_textLinesLimit",
                                "type": "any"
                            }
                        ],
                        "returnType": "void",
                        "line": 34,
                        "jsdoctags": [
                            {
                                "name": "_textLinesLimit",
                                "type": "any",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                }
            }
        }
    ],
    "components": [
        {
            "name": "PaginationComponent",
            "id": "component-PaginationComponent-2ccbc1b16aea416458636d35403732ab",
            "file": "libs/packages/components/src/lib/pagination/pagination.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-pagination",
            "styleUrls": [
                "./pagination.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./pagination.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "displayMode",
                    "defaultValue": "'default'",
                    "description": "<p>displayMode = &#39;default&#39; | &#39;results&#39;;</p>\n",
                    "line": 55,
                    "type": "PaginationDisplayMode"
                },
                {
                    "name": "page",
                    "defaultValue": "new PaginationModel()",
                    "description": "<p>Pagination model</p>\n",
                    "line": 43,
                    "type": "PaginationModel"
                },
                {
                    "name": "paginationConfiguration",
                    "description": "<p>configuration for the pagination</p>\n",
                    "line": 49,
                    "type": "PaginationConfigurationModel"
                },
                {
                    "name": "totalItems",
                    "defaultValue": "0",
                    "description": "<p>totalItems for display on results view;</p>\n",
                    "line": 61,
                    "type": "number"
                }
            ],
            "outputsClass": [
                {
                    "name": "pageChange",
                    "defaultValue": "new EventEmitter<PaginationModel>()",
                    "description": "<p>Output of the page model object</p>\n",
                    "line": 37,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "currentPageField",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "<p>Input field for the current page</p>\n",
                    "line": 31,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'currentPage'"
                        }
                    ]
                },
                {
                    "name": "debounceTime",
                    "defaultValue": "500",
                    "type": "number",
                    "optional": false,
                    "description": "<p>debounce time for current page input</p>\n",
                    "line": 68
                },
                {
                    "name": "options",
                    "defaultValue": "[\r\n    { label: '25', value: 25 },\r\n    { label: '50', value: 50 },\r\n    { label: '100', value: 100 }\r\n  ]",
                    "type": "[]",
                    "optional": false,
                    "description": "<p>Drop down options for page size</p>\n",
                    "line": 83,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "previousNumber",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Stores the previous number</p>\n",
                    "line": 73,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "timeoutNumber",
                    "type": "number",
                    "optional": false,
                    "description": "<p>timeout id of the debounce time</p>\n",
                    "line": 78
                }
            ],
            "methodsClass": [
                {
                    "name": "currentPageFocusOut",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 154,
                    "description": "<p>current page focus out will replace with previous valid if empty</p>\n"
                },
                {
                    "name": "handleInputOutsideBounds",
                    "args": [
                        {
                            "name": "newValue",
                            "type": "number",
                            "optional": true
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 139,
                    "description": "<p>adjusts the value if not within the page limit above or below</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3274,
                                "end": 3282,
                                "flags": 0,
                                "escapedText": "newValue"
                            },
                            "type": "number",
                            "optional": true,
                            "tagName": {
                                "pos": 3268,
                                "end": 3273,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>handles</p>\n"
                        }
                    ]
                },
                {
                    "name": "maintainPreviousValue",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 24,
                    "description": "<p>Stores the previous number. Used when focus out if field empty</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "nextPage",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 103,
                    "description": "<p>next page increase page number by one within range</p>\n"
                },
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 14
                },
                {
                    "name": "onSelectChange",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 164,
                    "description": "<p>page size selection change</p>\n"
                },
                {
                    "name": "previousPage",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 92,
                    "description": "<p>previous page lowers page number by one within range</p>\n"
                },
                {
                    "name": "valuechange",
                    "args": [
                        {
                            "name": "newValue",
                            "type": "number",
                            "optional": true
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 115,
                    "description": "<p>current page changes sets new value if within range</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2537,
                                "end": 2545,
                                "flags": 0,
                                "escapedText": "newValue"
                            },
                            "type": "number",
                            "optional": true,
                            "tagName": {
                                "pos": 2531,
                                "end": 2536,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';\r\nimport { PaginationConfigurationModel, PaginationModel } from './model/paginationModel';\r\n\r\n/** pagination display modes. */\r\nexport type PaginationDisplayMode = 'default' | 'results';\r\n\r\n@Component({\r\n  selector: 'sds-pagination',\r\n  templateUrl: './pagination.component.html',\r\n  styleUrls: ['./pagination.component.scss']\r\n})\r\nexport class PaginationComponent implements OnInit {\r\n\r\n  ngOnInit(): void {\r\n    this.maintainPreviousValue();\r\n  }\r\n\r\n  constructor(private change: ChangeDetectorRef) { }\r\n\r\n\r\n  /**\r\n   * Stores the previous number. Used when focus out if field empty\r\n   */\r\n  private maintainPreviousValue() {\r\n    this.previousNumber = this.page.pageNumber.valueOf();\r\n  }\r\n\r\n  /**\r\n   * Input field for the current page\r\n   */\r\n  @ViewChild('currentPage') currentPageField: ElementRef;\r\n\r\n  /**\r\n   * Output of the page model object\r\n   */\r\n  @Output()\r\n  pageChange = new EventEmitter<PaginationModel>();\r\n\r\n  /**\r\n   * Pagination model\r\n   */\r\n  @Input()\r\n  page: PaginationModel = new PaginationModel();\r\n\r\n  /**\r\n   * configuration for the pagination\r\n   */\r\n  @Input()\r\n  paginationConfiguration: PaginationConfigurationModel;\r\n\r\n  /**\r\n   * displayMode = 'default' | 'results';\r\n   */\r\n  @Input()\r\n  displayMode: PaginationDisplayMode = 'default';\r\n\r\n    /**\r\n   * totalItems for display on results view;\r\n   */\r\n  @Input()\r\n  totalItems?: number = 0;\r\n\r\n\r\n\r\n  /**\r\n   * debounce time for current page input\r\n   */\r\n  debounceTime: number = 500;\r\n\r\n  /**\r\n   * Stores the previous number\r\n   */\r\n  private previousNumber: number;\r\n\r\n  /**\r\n   * timeout id of the debounce time\r\n   */\r\n  timeoutNumber: number;\r\n\r\n  /**\r\n   * Drop down options for page size\r\n   */\r\n  public options = [\r\n    { label: '25', value: 25 },\r\n    { label: '50', value: 50 },\r\n    { label: '100', value: 100 }\r\n  ];\r\n\r\n  /**\r\n   * previous page lowers page number by one within range\r\n   */\r\n  previousPage() {\r\n    if (this.page.pageNumber > 1) {\r\n      this.page.pageNumber--;\r\n      this.maintainPreviousValue();\r\n      this.pageChange.emit(this.page);\r\n    }\r\n  }\r\n\r\n  /**\r\n   * next page increase page number by one within range\r\n   */\r\n  nextPage() {\r\n    if (this.page.pageNumber < this.page.totalPages) {\r\n      this.page.pageNumber++;\r\n      this.maintainPreviousValue();\r\n      this.pageChange.emit(this.page);\r\n    }\r\n  }\r\n\r\n  /**\r\n   * current page changes sets new value if within range\r\n   * @param newValue\r\n   */\r\n  valuechange(newValue?: number) {\r\n    window.clearTimeout(this.timeoutNumber);\r\n    this.timeoutNumber = window.setTimeout(() => {\r\n      if (newValue || newValue === 0) {\r\n        newValue = this.handleInputOutsideBounds(newValue);\r\n        if (newValue >= 1 && newValue <= this.page.totalPages) {\r\n          this.page.pageNumber = newValue;\r\n          this.maintainPreviousValue();\r\n          this.pageChange.emit(this.page);\r\n          this.change.detectChanges();\r\n        }\r\n      } else {\r\n\r\n        if (this.page.pageNumber) {\r\n          this.maintainPreviousValue();\r\n        }\r\n      }\r\n    }, this.debounceTime);\r\n  }\r\n\r\n  /**\r\n   * adjusts the value if not within the page limit above or below\r\n   * @param newValue handles\r\n   */\r\n  private handleInputOutsideBounds(newValue?: number) {\r\n    if (newValue < 1) {\r\n      newValue = 1;\r\n      this.currentPageField.nativeElement.value = newValue;\r\n    }\r\n    else if (newValue > this.page.totalPages) {\r\n      newValue = this.page.totalPages;\r\n      this.currentPageField.nativeElement.value = newValue;\r\n    }\r\n    return newValue;\r\n  }\r\n\r\n  /**\r\n   * current page focus out will replace with previous valid if empty\r\n   */\r\n  currentPageFocusOut() {\r\n    if (this.currentPageField.nativeElement.value === '') {\r\n      this.currentPageField.nativeElement.value = this.page.pageNumber = this.previousNumber;\r\n      this.change.detectChanges();\r\n    }\r\n  }\r\n\r\n  /**\r\n   * page size selection change\r\n   */\r\n  onSelectChange() {\r\n    this.page.pageNumber = 1;\r\n    this.pageChange.emit(this.page);\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "/* Hide HTML5 Up and Down arrows. */\r\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\ninput[type=\"number\"] {\r\n    -moz-appearance: textfield;\r\n}\r\n\r\n",
                    "styleUrl": "./pagination.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "change",
                        "type": "ChangeDetectorRef"
                    }
                ],
                "line": 16,
                "jsdoctags": [
                    {
                        "name": "change",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnInit"
            ],
            "templateData": "<div class=\"sds-pagination\" *ngIf=\"displayMode === 'default'\">\r\n  <div class=\"sds-pagination__controls\">\r\n    <button [attr.id]=\"paginationConfiguration.id +'-previousPage'\" (click)=\"previousPage()\">Previous Page</button>\r\n    <label class=\"usa-label font-sans-3xs margin-top-1 text-italic text-base usa-sr-only\"\r\n      [attr.for]=\"paginationConfiguration.id + '-currentPage'\">Current Page</label>\r\n    <input [attr.id]=\"paginationConfiguration.id +'-currentPage'\"\r\n      class=\"usa-input usa-input--small font-sans-3xs text-center border-base-light\" #currentPage\r\n      (ngModelChange)=\"valuechange($event)\" [(ngModel)]=\"page.pageNumber\" type=\"number\" min=\"1\"\r\n      [(attr.max)]=\"page.totalPages\" (focusout)=\"currentPageFocusOut()\" aria-label=\"current page\" [ngStyle]=\"{'width': (20 + page.totalPages.toString().length * 10) +'px'}\" />\r\n    <span class=\"sds-pagination__total\">\r\n      of <strong>{{ page.totalPages }}</strong>\r\n    </span>\r\n    <button [attr.id]=\"paginationConfiguration.id +'-nextPage'\" (click)=\"nextPage()\">Next Page</button>\r\n  </div>\r\n  <div class=\"sds-pagination__results\">\r\n    <label class=\"usa-label font-sans-3xs text-italic text-base\"\r\n      [attr.for]=\"paginationConfiguration.id + '-select'\">Results per page</label>\r\n    <select class=\"usa-select usa-select--small border-base-light\" [attr.id]=\"paginationConfiguration.id + '-select'\"\r\n      (change)=\"onSelectChange()\" [(ngModel)]=\"page.pageSize\">\r\n      <option *ngFor=\"let item of options\" [ngValue]=\"item.value\">\r\n        {{ item.label }}\r\n      </option>\r\n    </select>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"sds-pagination\" *ngIf=\"totalItems && displayMode === 'results'\">\r\n  <div class=\"text-semibold font-sans-3xs\">Showing {{(page.pageNumber-1)*page.pageSize+1 | number:'1.0':'en-US'}} - {{((page.pageNumber-1)*page.pageSize+page.pageSize) > totalItems ? (totalItems | number:'1.0':'en-US') : ((page.pageNumber-1)*page.pageSize+page.pageSize | number:'1.0':'en-US') }} of {{totalItems | number:'1.0':'en-US'}} results</div>\r\n</div>\r\n"
        },
        {
            "name": "SdsAccordionItemComponent",
            "id": "component-SdsAccordionItemComponent-91e8b2d328fe8e70edabbbb95bd5d95e",
            "file": "libs/packages/components/src/lib/accordion/accordion-item.component.ts",
            "changeDetection": "ChangeDetectionStrategy.OnPush",
            "encapsulation": [
                "ViewEncapsulation.None"
            ],
            "entryComponents": [],
            "exportAs": "sdsAccordionItem",
            "host": {},
            "inputs": [
                "disabled",
                "expanded"
            ],
            "outputs": [
                "opened",
                "closed",
                "expandedChange"
            ],
            "providers": [],
            "selector": "sds-accordion-item",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "accordion-item.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [
                {
                    "name": "afterCollapse",
                    "defaultValue": "new EventEmitter<void>()",
                    "description": "<p>An event emitted after the body&#39;s collapse animation happens. </p>\n",
                    "line": 61,
                    "type": "EventEmitter"
                },
                {
                    "name": "afterExpand",
                    "defaultValue": "new EventEmitter<void>()",
                    "description": "<p>An event emitted after the body&#39;s expansion animation happens. </p>\n",
                    "line": 58,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "_animationMode",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 89,
                    "decorators": [
                        {
                            "name": "Optional",
                            "stringifiedArguments": ""
                        },
                        {
                            "name": "Inject",
                            "stringifiedArguments": "ANIMATION_MODULE_TYPE"
                        }
                    ],
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "_body",
                    "type": "ElementRef<HTMLElement>",
                    "optional": false,
                    "description": "<p>Element containing the accordion item&#39;s user-provided content. </p>\n",
                    "line": 73,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'body'"
                        }
                    ]
                },
                {
                    "name": "_bodyAnimationDone",
                    "defaultValue": "new Subject<AnimationEvent>()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Stream of body animation done events. </p>\n",
                    "line": 82
                },
                {
                    "name": "_document",
                    "type": "Document",
                    "optional": false,
                    "description": "",
                    "line": 55,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_headerId",
                    "defaultValue": "`sds-accordion-item-header-${uniqueId++}`",
                    "type": "",
                    "optional": false,
                    "description": "<p>ID for the associated header element. Used for a11y labelling. </p>\n",
                    "line": 79
                },
                {
                    "name": "_inputChanges",
                    "defaultValue": "new Subject<SimpleChanges>()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Stream that emits for changes in <code>@Input</code> properties. </p>\n",
                    "line": 64,
                    "modifierKind": [
                        132
                    ]
                },
                {
                    "name": "_lazyContent",
                    "type": "SdsAccordionItemContentDirective",
                    "optional": false,
                    "description": "<p>Content that will be rendered lazily. </p>\n",
                    "line": 70,
                    "decorators": [
                        {
                            "name": "ContentChild",
                            "stringifiedArguments": "SdsAccordionItemContentDirective"
                        }
                    ]
                },
                {
                    "name": "_portal",
                    "type": "TemplatePortal",
                    "optional": false,
                    "description": "<p>Portal holding the user&#39;s content. </p>\n",
                    "line": 76
                },
                {
                    "name": "accordion",
                    "type": "SdsAccordionBase",
                    "optional": false,
                    "description": "<p>Optionally defined accordion the accordion item belongs to. </p>\n",
                    "line": 67
                }
            ],
            "methodsClass": [
                {
                    "name": "_containsFocus",
                    "args": [],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 138,
                    "description": "<p>Checks whether the accordion item&#39;s content contains the currently-focused element. </p>\n"
                },
                {
                    "name": "_getExpandedState",
                    "args": [],
                    "optional": false,
                    "returnType": "SdsAccordionItemState",
                    "typeParameters": [],
                    "line": 110,
                    "description": "<p>Gets the expanded state string. </p>\n"
                },
                {
                    "name": "ngAfterContentInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 114
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
                    "line": 127,
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
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 131
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {AnimationEvent} from '@angular/animations';\r\nimport { CdkAccordionItem } from \"@angular/cdk/accordion\";\r\nimport {UniqueSelectionDispatcher} from '@angular/cdk/collections';\r\nimport {TemplatePortal} from '@angular/cdk/portal';\r\nimport {\r\n  AfterContentInit,\r\n  ChangeDetectionStrategy,\r\n  ChangeDetectorRef,\r\n  Component,\r\n  ContentChild,\r\n  EventEmitter,\r\n  ElementRef,\r\n  Inject,\r\n  OnChanges,\r\n  OnDestroy,\r\n  Optional,\r\n  Output,\r\n  SimpleChanges,\r\n  SkipSelf,\r\n  ViewContainerRef,\r\n  ViewEncapsulation,\r\n  ViewChild\r\n} from \"@angular/core\";\r\nimport {DOCUMENT} from '@angular/common';\r\nimport {ANIMATION_MODULE_TYPE} from '@angular/platform-browser/animations';\r\nimport {Subject} from 'rxjs';\r\nimport {filter, startWith, take, distinctUntilChanged} from 'rxjs/operators';\r\nimport {sdsExpansionAnimations} from './accordion-animations';\r\nimport {SdsAccordionItemContentDirective} from './accordion-item-content.directive';\r\nimport {SDS_ACCORDION, SdsAccordionBase} from './accordion-base';\r\n\r\n/** Accordion Item's states. */\r\nexport type SdsAccordionItemState = 'expanded' | 'collapsed';\r\n\r\n/** Counter for generating unique element ids. */\r\nlet uniqueId = 0;\r\n\r\n@Component({\r\n  selector: \"sds-accordion-item\",\r\n  exportAs: \"sdsAccordionItem\",\r\n  templateUrl: \"accordion-item.component.html\",\r\n  encapsulation: ViewEncapsulation.None,\r\n  changeDetection: ChangeDetectionStrategy.OnPush,\r\n  inputs: ['disabled', 'expanded'],\r\n  outputs: ['opened', 'closed', 'expandedChange'],\r\n  animations: [sdsExpansionAnimations.bodyExpansion],\r\n  host: {\r\n    'class': 'sds-accordion__item',\r\n    '[class.sds-accordion__item--expanded]': 'expanded',\r\n    '[class._sds-animation-noopable]': '_animationMode === \"NoopAnimations\"'\r\n  }\r\n})\r\nexport class SdsAccordionItemComponent extends CdkAccordionItem\r\n  implements AfterContentInit, OnChanges, OnDestroy {\r\n  private _document: Document;\r\n\r\n  /** An event emitted after the body's expansion animation happens. */\r\n  @Output() afterExpand = new EventEmitter<void>();\r\n\r\n  /** An event emitted after the body's collapse animation happens. */\r\n  @Output() afterCollapse = new EventEmitter<void>();\r\n\r\n  /** Stream that emits for changes in `@Input` properties. */\r\n  readonly _inputChanges = new Subject<SimpleChanges>();\r\n\r\n  /** Optionally defined accordion the accordion item belongs to. */\r\n  accordion: SdsAccordionBase;\r\n\r\n  /** Content that will be rendered lazily. */\r\n  @ContentChild(SdsAccordionItemContentDirective) _lazyContent: SdsAccordionItemContentDirective;\r\n\r\n  /** Element containing the accordion item's user-provided content. */\r\n  @ViewChild('body') _body: ElementRef<HTMLElement>;\r\n\r\n  /** Portal holding the user's content. */\r\n  _portal: TemplatePortal;\r\n\r\n  /** ID for the associated header element. Used for a11y labelling. */\r\n  _headerId = `sds-accordion-item-header-${uniqueId++}`;\r\n\r\n  /** Stream of body animation done events. */\r\n  _bodyAnimationDone = new Subject<AnimationEvent>();\r\n\r\n  constructor(@Optional() @SkipSelf() @Inject(SDS_ACCORDION) accordion: SdsAccordionBase,\r\n              _changeDetectorRef: ChangeDetectorRef,\r\n              _uniqueSelectionDispatcher: UniqueSelectionDispatcher,\r\n              private _viewContainerRef: ViewContainerRef,\r\n              @Inject(DOCUMENT) _document: any,\r\n              @Optional() @Inject(ANIMATION_MODULE_TYPE) public _animationMode: string) {\r\n    super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);\r\n    this.accordion = accordion;\r\n    this._document = _document;\r\n\r\n    // We need a Subject with distinctUntilChanged, because the `done` event\r\n    // fires twice on some browsers. See https://github.com/angular/angular/issues/24084\r\n    this._bodyAnimationDone.pipe(distinctUntilChanged((x, y) => {\r\n      return x.fromState === y.fromState && x.toState === y.toState;\r\n    })).subscribe(event => {\r\n      if (event.fromState !== 'void') {\r\n        if (event.toState === 'expanded') {\r\n          this.afterExpand.emit();\r\n        } else if (event.toState === 'collapsed') {\r\n          this.afterCollapse.emit();\r\n        }\r\n      }\r\n    });\r\n  }\r\n\r\n  /** Gets the expanded state string. */\r\n  _getExpandedState(): SdsAccordionItemState {\r\n    return this.expanded ? 'expanded' : 'collapsed';\r\n  }\r\n\r\n  ngAfterContentInit() {\r\n    if (this._lazyContent) {\r\n      // Render the content as soon as the accordion item becomes open.\r\n      this.opened.pipe(\r\n        startWith(null!),\r\n        filter(() => this.expanded && !this._portal),\r\n        take(1)\r\n      ).subscribe(() => {\r\n        this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);\r\n      });\r\n    }\r\n  }\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    this._inputChanges.next(changes);\r\n  }\r\n\r\n  ngOnDestroy() {\r\n    super.ngOnDestroy();\r\n    this._bodyAnimationDone.complete();\r\n    this._inputChanges.complete();\r\n  }\r\n\r\n  /** Checks whether the accordion item's content contains the currently-focused element. */\r\n  _containsFocus(): boolean {\r\n    if (this._body) {\r\n      const focusedElement = this._document.activeElement;\r\n      const bodyElement = this._body.nativeElement;\r\n      return focusedElement === bodyElement || bodyElement.contains(focusedElement);\r\n    }\r\n\r\n    return false;\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "accordion",
                        "type": "SdsAccordionBase"
                    },
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef"
                    },
                    {
                        "name": "_uniqueSelectionDispatcher",
                        "type": "UniqueSelectionDispatcher"
                    },
                    {
                        "name": "_viewContainerRef",
                        "type": "ViewContainerRef"
                    },
                    {
                        "name": "_document",
                        "type": "any"
                    },
                    {
                        "name": "_animationMode",
                        "type": "string"
                    }
                ],
                "line": 82,
                "jsdoctags": [
                    {
                        "name": "accordion",
                        "type": "SdsAccordionBase",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_uniqueSelectionDispatcher",
                        "type": "UniqueSelectionDispatcher",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_viewContainerRef",
                        "type": "ViewContainerRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_document",
                        "type": "any",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_animationMode",
                        "type": "string",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "extends": "CdkAccordionItem",
            "implements": [
                "AfterContentInit",
                "OnChanges",
                "OnDestroy"
            ],
            "templateData": "<ng-content select=\"sds-accordion-item-header\"></ng-content>\r\n<div\r\n  class=\"sam-accordion__panel\"\r\n  role=\"region\"\r\n  [@bodyExpansion]=\"_getExpandedState()\"\r\n  (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\"\r\n  [attr.aria-labelledby]=\"_headerId\"\r\n  [id]=\"id\"\r\n  #body\r\n>\r\n  <div class=\"sds-accordion__panel-body\">\r\n    <ng-content></ng-content>\r\n    <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\r\n  </div>\r\n</div>\r\n"
        },
        {
            "name": "SdsAccordionItemHeaderComponent",
            "id": "component-SdsAccordionItemHeaderComponent-d5ded8019a45c66f49a88a2d7f4683d0",
            "file": "libs/packages/components/src/lib/accordion/accordion-item-header.component.ts",
            "changeDetection": "ChangeDetectionStrategy.OnPush",
            "encapsulation": [
                "ViewEncapsulation.None"
            ],
            "entryComponents": [],
            "host": {},
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-accordion-item-header",
            "styleUrls": [
                "./accordion-item-header.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./accordion-item-header.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "_parentChangeSubscription",
                    "defaultValue": "Subscription.EMPTY",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 35,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "accordionItem",
                    "type": "SdsAccordionItemComponent",
                    "optional": false,
                    "description": "",
                    "line": 37,
                    "decorators": [
                        {
                            "name": "Host",
                            "stringifiedArguments": ""
                        }
                    ],
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "_getAccordionItemId",
                    "args": [],
                    "optional": false,
                    "returnType": "string",
                    "typeParameters": [],
                    "line": 80,
                    "description": "<p>Gets the accordion item id. </p>\n"
                },
                {
                    "name": "_isExpanded",
                    "args": [],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 75,
                    "description": "<p>Gets whether the accordion item is expanded. </p>\n"
                },
                {
                    "name": "_keydown",
                    "args": [
                        {
                            "name": "event",
                            "type": "KeyboardEvent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 85,
                    "description": "<p>Handle keydown event calling to toggle() if appropriate. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "KeyboardEvent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_toggle",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 70,
                    "description": "<p>Toggles the expanded state of the accordion item. </p>\n"
                },
                {
                    "name": "focus",
                    "args": [
                        {
                            "name": "origin",
                            "type": "FocusOrigin",
                            "defaultValue": "\"program\""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 110,
                    "description": "<p>Focuses the item header. Implemented as a part of <code>FocusableOption</code>.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3264,
                                "end": 3270,
                                "flags": 0,
                                "escapedText": "origin"
                            },
                            "type": "FocusOrigin",
                            "defaultValue": "\"program\"",
                            "tagName": {
                                "pos": 3258,
                                "end": 3263,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Origin of the action that triggered the focus.</p>\n"
                        }
                    ]
                },
                {
                    "name": "ngOnDestroy",
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
            "sourceCode": "import { FocusMonitor, FocusableOption, FocusOrigin } from \"@angular/cdk/a11y\";\r\nimport { ENTER, SPACE, hasModifierKey } from \"@angular/cdk/keycodes\";\r\nimport {\r\n  ChangeDetectionStrategy,\r\n  ChangeDetectorRef,\r\n  Component,\r\n  ElementRef,\r\n  Host,\r\n  OnDestroy,\r\n  ViewEncapsulation\r\n} from \"@angular/core\";\r\nimport { merge, Subscription } from \"rxjs\";\r\nimport { filter } from \"rxjs/operators\";\r\nimport { SdsAccordionItemComponent } from \"./accordion-item.component\";\r\n\r\n@Component({\r\n  selector: \"sds-accordion-item-header\",\r\n  templateUrl: \"./accordion-item-header.component.html\",\r\n  styleUrls:['./accordion-item-header.component.scss'],\r\n  encapsulation: ViewEncapsulation.None,\r\n  changeDetection: ChangeDetectionStrategy.OnPush,\r\n  host: {\r\n    class: \"sds-accordion__trigger\",\r\n    role: \"button\",\r\n    \"[attr.id]\": \"accordionItem._headerId\",\r\n    \"[attr.tabindex]\": \"disabled ? -1 : 0\",\r\n    \"[attr.aria-controls]\": \"_getAccordionItemId()\",\r\n    \"[attr.aria-expanded]\": \"_isExpanded()\",\r\n    \"[attr.aria-disabled]\": \"accordionItem.disabled\",\r\n    \"(click)\": \"_toggle()\",\r\n    \"(keydown)\": \"_keydown($event)\"\r\n  }\r\n})\r\nexport class SdsAccordionItemHeaderComponent implements OnDestroy, FocusableOption {\r\n  private _parentChangeSubscription = Subscription.EMPTY;\r\n  constructor(\r\n    @Host() public accordionItem: SdsAccordionItemComponent,\r\n    private _element: ElementRef,\r\n    private _focusMonitor: FocusMonitor,\r\n    private _changeDetectorRef: ChangeDetectorRef\r\n  ) {\r\n\r\n    // Since the toggle state depends on an @Input on the accordion item, we\r\n    // need to subscribe and trigger change detection manually.\r\n    this._parentChangeSubscription = merge(\r\n      accordionItem.opened,\r\n      accordionItem.closed,\r\n      accordionItem._inputChanges.pipe(\r\n        filter(changes => !!(changes[\"disabled\"]))\r\n      )\r\n    ).subscribe(() => this._changeDetectorRef.markForCheck());\r\n\r\n    _focusMonitor.monitor(_element).subscribe(origin => {\r\n      if (origin && accordionItem.accordion) {\r\n        accordionItem.accordion._handleHeaderFocus(this);\r\n      }\r\n    });\r\n\r\n  }\r\n\r\n  /**\r\n   * Whether the associated accordion item is disabled. \r\n   * Implemented as a part of `FocusableOption`.\r\n   */\r\n  get disabled() {\r\n    return this.accordionItem.disabled;\r\n  }\r\n\r\n  /** Toggles the expanded state of the accordion item. */\r\n  _toggle(): void {\r\n    this.accordionItem.toggle();\r\n  }\r\n\r\n  /** Gets whether the accordion item is expanded. */\r\n  _isExpanded(): boolean {\r\n    return this.accordionItem.expanded;\r\n  }\r\n\r\n  /** Gets the accordion item id. */\r\n  _getAccordionItemId(): string {\r\n    return this.accordionItem.id;\r\n  }\r\n\r\n  /** Handle keydown event calling to toggle() if appropriate. */\r\n  _keydown(event: KeyboardEvent) {\r\n    switch (event.keyCode) {\r\n      // Toggle for space and enter keys.\r\n      case SPACE:\r\n      case ENTER:\r\n        if (!hasModifierKey(event)) {\r\n          event.preventDefault();\r\n          this._toggle();\r\n        }\r\n\r\n        break;\r\n      default:\r\n        if (this.accordionItem.accordion) {\r\n          this.accordionItem.accordion._handleHeaderKeydown(event);\r\n        }\r\n\r\n        return;\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Focuses the item header. Implemented as a part of `FocusableOption`.\r\n   * @param origin Origin of the action that triggered the focus.\r\n   * @docs-private\r\n   */\r\n  focus(origin: FocusOrigin = \"program\") {\r\n    this._focusMonitor.focusVia(this._element, origin);\r\n  }\r\n\r\n  ngOnDestroy() {\r\n    this._parentChangeSubscription.unsubscribe();\r\n    this._focusMonitor.stopMonitoring(this._element);\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./accordion-item-header.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "accordionItem",
                        "type": "SdsAccordionItemComponent"
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef"
                    },
                    {
                        "name": "_focusMonitor",
                        "type": "FocusMonitor"
                    },
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef"
                    }
                ],
                "line": 35,
                "jsdoctags": [
                    {
                        "name": "accordionItem",
                        "type": "SdsAccordionItemComponent",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_focusMonitor",
                        "type": "FocusMonitor",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnDestroy",
                "FocusableOption"
            ],
            "accessors": {
                "disabled": {
                    "name": "disabled",
                    "getSignature": {
                        "name": "disabled",
                        "type": "",
                        "returnType": "",
                        "line": 65,
                        "description": "<p>Whether the associated accordion item is disabled. \nImplemented as a part of <code>FocusableOption</code>.</p>\n"
                    }
                }
            },
            "templateData": "<span class=\"sds-accordion__title\" role=\"heading\">\r\n  <span class=\"sds-accordion__title-text\">\r\n    <ng-content></ng-content>\r\n  </span>\r\n  <span class=\"sds-accordion__icon\"></span>\r\n</span>\r\n"
        },
        {
            "name": "SDSAutocompleteComponent",
            "id": "component-SDSAutocompleteComponent-f5e0426d2342b4edd38d21247a54882b",
            "file": "libs/packages/components/src/lib/autocomplete/autocomplete.component.ts",
            "changeDetection": "ChangeDetectionStrategy.OnPush",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [
                {
                    "name": "Autocomplete_VALUE_ACCESSOR"
                }
            ],
            "selector": "sds-autocomplete",
            "styleUrls": [
                "./autocomplete.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./autocomplete.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "configuration",
                    "description": "<p>Configuration for the control</p>\n",
                    "line": 58,
                    "type": "SDSAutocompletelConfiguration"
                },
                {
                    "name": "essentialModelFields",
                    "defaultValue": "false",
                    "description": "<p>Model contain only the primary key, primary value, and secondary value.</p>\n",
                    "line": 64,
                    "type": "boolean"
                },
                {
                    "name": "selectedItemTemplate",
                    "description": "<p>Allow to insert a customized template for selected items</p>\n",
                    "line": 45,
                    "type": "TemplateRef<any>"
                },
                {
                    "name": "service",
                    "description": "<p>Instance of the SamHiercarchicalServiceInterface provided</p>\n",
                    "line": 70,
                    "type": "SDSAutocompleteServiceInterface"
                },
                {
                    "name": "suggestionTemplate",
                    "description": "<p>Allow to insert a customized template for suggestions results</p>\n",
                    "line": 40,
                    "type": "TemplateRef<any>"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "autocompleteSearch",
                    "type": "SDSAutocompleteSearchComponent",
                    "optional": false,
                    "description": "",
                    "line": 72,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'autocompleteSearch'"
                        }
                    ]
                },
                {
                    "name": "disabled",
                    "type": "boolean",
                    "optional": false,
                    "description": "",
                    "line": 52,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "model",
                    "type": "SDSSelectedItemModel",
                    "optional": false,
                    "description": "<p>The data model that has the selected item</p>\n",
                    "line": 50,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "onChange",
                    "defaultValue": "() => {...}",
                    "type": "",
                    "optional": false,
                    "description": "<p>Stored Event for ControlValueAccessor</p>\n",
                    "line": 84,
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "addItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "object"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 145,
                    "jsdoctags": [
                        {
                            "name": "item",
                            "type": "object",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "addItems",
                    "args": [
                        {
                            "name": "list",
                            "type": "object[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 149,
                    "jsdoctags": [
                        {
                            "name": "list",
                            "type": "object[]",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "getModel",
                    "args": [],
                    "optional": false,
                    "returnType": "{}",
                    "typeParameters": [],
                    "line": 120
                },
                {
                    "name": "isSingleMode",
                    "args": [],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 138
                },
                {
                    "name": "registerOnChange",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 125,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "registerOnTouched",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 130,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "setDisabledState",
                    "args": [
                        {
                            "name": "isDisabled",
                            "type": "boolean"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 134,
                    "jsdoctags": [
                        {
                            "name": "isDisabled",
                            "type": "boolean",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "updateItems",
                    "args": [
                        {
                            "name": "$event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 109,
                    "jsdoctags": [
                        {
                            "name": "$event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "updateModel",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 114
                },
                {
                    "name": "writeValue",
                    "args": [
                        {
                            "name": "value",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 89,
                    "jsdoctags": [
                        {
                            "name": "value",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [
                {
                    "name": "focusout",
                    "args": [],
                    "argsDecorator": [],
                    "description": "<p>Stored Event for ControlValueAccessor</p>\n",
                    "line": 79
                }
            ],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\r\n  Component,\r\n  Input,\r\n  ViewChild,\r\n  TemplateRef,\r\n  ElementRef,\r\n  forwardRef,\r\n  HostListener,\r\n  ChangeDetectorRef,\r\n  ChangeDetectionStrategy\r\n} from '@angular/core';\r\nimport {\r\n  NG_VALUE_ACCESSOR,\r\n  ControlValueAccessor,\r\n  FormControl\r\n} from '@angular/forms';\r\nimport { SDSSelectedItemModel } from '../selected-result/models/sds-selectedItem.model';\r\nimport { SDSAutocompleteServiceInterface } from '../autocomplete-search/models/SDSAutocompleteServiceInterface';\r\nimport { SDSAutocompletelConfiguration } from './models/SDSAutocompletelConfiguration.model';\r\nimport { SelectionMode } from '../selected-result/models/sds-selected-item-model-helper';\r\nimport { SDSAutocompleteSearchComponent } from '../autocomplete-search/autocomplete-search.component';\r\n\r\nconst Autocomplete_VALUE_ACCESSOR: any = {\r\n  provide: NG_VALUE_ACCESSOR,\r\n  useExisting: forwardRef(() => SDSAutocompleteComponent),\r\n  multi: true\r\n};\r\n\r\n@Component({\r\n  selector: 'sds-autocomplete',\r\n  templateUrl: './autocomplete.component.html',\r\n  styleUrls: ['./autocomplete.component.scss'],\r\n  providers: [Autocomplete_VALUE_ACCESSOR],\r\n  changeDetection: ChangeDetectionStrategy.OnPush\r\n})\r\nexport class SDSAutocompleteComponent implements ControlValueAccessor {\r\n  /**\r\n   * Allow to insert a customized template for suggestions results\r\n   */\r\n  @Input() suggestionTemplate: TemplateRef<any>;\r\n\r\n  /**\r\n   * Allow to insert a customized template for selected items\r\n   */\r\n  @Input() selectedItemTemplate: TemplateRef<any>;\r\n\r\n  /**\r\n   * The data model that has the selected item\r\n   */\r\n  public model: SDSSelectedItemModel;\r\n\r\n  public disabled: boolean;\r\n\r\n  /**\r\n   * Configuration for the control\r\n   */\r\n  @Input()\r\n  public configuration: SDSAutocompletelConfiguration;\r\n\r\n  /**\r\n   * Model contain only the primary key, primary value, and secondary value.\r\n   */\r\n  @Input()\r\n  public essentialModelFields: boolean = false;\r\n\r\n  /**\r\n   * Instance of the SamHiercarchicalServiceInterface provided\r\n   */\r\n  @Input()\r\n  public service: SDSAutocompleteServiceInterface;\r\n\r\n  @ViewChild('autocompleteSearch') autocompleteSearch: SDSAutocompleteSearchComponent;\r\n  constructor(private cd: ChangeDetectorRef) { }\r\n\r\n  /**\r\n   * Stored Event for ControlValueAccessor\r\n   */\r\n  @HostListener('focusout')\r\n  public onTouched = () => { };\r\n\r\n  /**\r\n   * Stored Event for ControlValueAccessor\r\n   */\r\n  public onChange = (_: any) => { };\r\n\r\n  // ControlValueAccessor (and Formly) is trying to update the value of the FormControl (our custom component) programatically\r\n  // If there is a value we will just overwrite items\r\n  // If there is no value we reset the items array to be empty\r\n  writeValue(value: any) {\r\n    if (value instanceof SDSSelectedItemModel && value.items && value.items.length && this.model.items !== value.items) {\r\n      this.model.items = [...value.items];\r\n      this.cd.markForCheck();\r\n    }\r\n    else if(value && value.length && this.model.items !== value) {\r\n      this.model.items = value;\r\n      this.cd.markForCheck();\r\n    } else {\r\n      if(!this.model || !(this.model instanceof SDSSelectedItemModel)) {\r\n        this.model = new SDSSelectedItemModel();\r\n      }\r\n      this.model.items = value && value.items ? value.items : [];\r\n      this.cd.markForCheck();\r\n    }\r\n\r\n    this.autocompleteSearch.writeValue(this.model);\r\n  }\r\n\r\n  // Method that is fired when the child component event notifies us that the items array has been modified within the child component\r\n  updateItems($event) {\r\n    this.updateModel();\r\n  }\r\n\r\n  // Helper method that gets a new instance of the model and notifies ControlValueAccessor that we have a new model for this FormControl (our custom component)\r\n  updateModel() {\r\n    const model = this.getModel();\r\n    this.onChange(model);\r\n  }\r\n\r\n  // Helper method to return a new instance of an array that contains our items\r\n  getModel() {\r\n    return [...this.model.items];\r\n  }\r\n\r\n  // ControlValueAccessor hook that lets us call this._onChange(var) to let the form know our variable has changed (in this case model)\r\n  registerOnChange(fn: any): void {\r\n    this.onChange = fn;\r\n  }\r\n\r\n  // ControlValueAccessor hook (not used)\r\n  registerOnTouched(fn: any) {\r\n    this.onTouched = fn;\r\n  }\r\n\r\n  setDisabledState(isDisabled: boolean): void {\r\n    this.disabled = isDisabled;\r\n  }\r\n\r\n  isSingleMode(): boolean {\r\n    if (this.configuration) {\r\n      return this.configuration.selectionMode === SelectionMode.SINGLE;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n  addItem(item: object) {\r\n    this.autocompleteSearch.selectItem(item);\r\n  }\r\n\r\n  addItems(list: object[]) {\r\n    list.forEach(item => {\r\n      this.addItem(item);\r\n    })\r\n  }\r\n}",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./autocomplete.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "cd",
                        "type": "ChangeDetectorRef"
                    }
                ],
                "line": 72,
                "jsdoctags": [
                    {
                        "name": "cd",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "ControlValueAccessor"
            ],
            "templateData": "<sds-search-autocomplete [disabled]=\"disabled\" [essentialModelFields]=\"essentialModelFields\" (ngModelChange)=\"updateItems($event)\" #autocompleteSearch\r\n    [service]=\"service\" [(ngModel)]=\"model\" [configuration]=\"configuration\" [itemTemplate]=\"suggestionTemplate\">\r\n</sds-search-autocomplete>\r\n<sds-selected-result (ngModelChange)=\"updateItems($event)\" [disabled]=\"disabled\" *ngIf=\"!isSingleMode()\"\r\n    [(ngModel)]=\"model\" [configuration]=\"configuration\" [itemTemplate]=\"selectedItemTemplate\"></sds-selected-result>\r\n"
        },
        {
            "name": "SDSAutocompleteSearchComponent",
            "id": "component-SDSAutocompleteSearchComponent-f442d36875de19d06d8ebfa8abe31099",
            "file": "libs/packages/components/src/lib/autocomplete-search/autocomplete-search.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [
                {
                    "name": "Autocomplete_Autocomplete_VALUE_ACCESSOR"
                }
            ],
            "selector": "sds-search-autocomplete",
            "styleUrls": [
                "./autocomplete-search.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./autocomplete-search.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "configuration",
                    "description": "<p>Configuration for the Autocomplete control</p>\n",
                    "line": 62,
                    "type": "SDSAutocompleteSearchConfiguration"
                },
                {
                    "name": "disabled",
                    "line": 140,
                    "type": "boolean"
                },
                {
                    "name": "essentialModelFields",
                    "defaultValue": "false",
                    "description": "<p>Model contain only the primary key, primary value, and secondary value.</p>\n",
                    "line": 56,
                    "type": "boolean"
                },
                {
                    "name": "inputReadOnly",
                    "defaultValue": "false",
                    "description": "<p>To make input readonly</p>\n",
                    "line": 127
                },
                {
                    "name": "itemTemplate",
                    "description": "<p>Allow to insert a customized template for suggestions to use</p>\n",
                    "line": 46,
                    "type": "TemplateRef<any>"
                },
                {
                    "name": "service",
                    "description": "<p>Instance of the SamHiercarchicalServiceInterface provided</p>\n",
                    "line": 68,
                    "type": "SDSAutocompleteServiceInterface"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "highlightedChildIndex",
                    "defaultValue": "0",
                    "type": "number",
                    "optional": false,
                    "description": "<p>selected child index</p>\n",
                    "line": 93,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "highlightedIndex",
                    "defaultValue": "0",
                    "type": "number",
                    "optional": false,
                    "description": "<p>selected index</p>\n",
                    "line": 88,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "highlightedItem",
                    "type": "object",
                    "optional": false,
                    "description": "<p>highlighted object in drop down</p>\n",
                    "line": 98,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "HighlightedPropertyName",
                    "defaultValue": "'highlighted'",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Proprty being set on the object is highlighted</p>\n",
                    "line": 108,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "index",
                    "defaultValue": "0",
                    "type": "number",
                    "optional": false,
                    "description": "",
                    "line": 146,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "input",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "<p>input control</p>\n",
                    "line": 41,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'input'"
                        }
                    ]
                },
                {
                    "name": "inputValue",
                    "defaultValue": "''",
                    "type": "string",
                    "optional": false,
                    "description": "<p>value of the input field</p>\n",
                    "line": 103,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "maxResults",
                    "type": "number",
                    "optional": false,
                    "description": "<p>max number of results to be shown</p>\n",
                    "line": 83,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "model",
                    "type": "SDSSelectedItemModel",
                    "optional": false,
                    "description": "<p>The data model that has the selected item</p>\n",
                    "line": 51,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "onTouchedCallback",
                    "defaultValue": "() => {...}",
                    "type": "function",
                    "optional": false,
                    "description": "<p>Stored Event for ControlValueAccessor</p>\n",
                    "line": 132,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "propogateChange",
                    "defaultValue": "() => {...}",
                    "type": "function",
                    "optional": false,
                    "description": "<p>Stored Event for ControlValueAccessor</p>\n",
                    "line": 137,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "results",
                    "type": "object[]",
                    "optional": false,
                    "description": "<p>result set to be rendered</p>\n",
                    "line": 78
                },
                {
                    "name": "resultsAvailableMessage",
                    "defaultValue": "' results available. Use up and down arrows\\\r\n  to scroll through results. Hit enter to select.'",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 142,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "resultsListElement",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "<p>Ul list of elements</p>\n",
                    "line": 36,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'resultsList'"
                        }
                    ]
                },
                {
                    "name": "searchString",
                    "defaultValue": "null",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Search string</p>\n",
                    "line": 115,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "showLoad",
                    "defaultValue": "true",
                    "type": "boolean",
                    "optional": false,
                    "description": "",
                    "line": 110,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "showResults",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "<p>Determines if the dropdown should be shown</p>\n",
                    "line": 178,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "srOnlyText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Message announced by screen readers when\nautocomplete results are updated or new item\nis highlighted</p>\n",
                    "line": 122,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "timeoutNumber",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Timer id for the timer awaiting the service call for more typeing</p>\n",
                    "line": 73,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "addResult",
                    "args": [
                        {
                            "name": "item",
                            "type": "object"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 536,
                    "description": "<p>adds a single item to the list</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 15222,
                                "end": 15226,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "object",
                            "tagName": {
                                "pos": 15216,
                                "end": 15221,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "addScreenReaderMessage",
                    "args": [
                        {
                            "name": "message",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 573,
                    "description": "<p>Adds message to be read by screen reader</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 16328,
                                "end": 16335,
                                "flags": 0,
                                "escapedText": "message"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 16322,
                                "end": 16327,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "checkForFocus",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 199,
                    "description": "",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4989,
                                "end": 4994,
                                "flags": 0,
                                "escapedText": "event"
                            },
                            "type": "",
                            "tagName": {
                                "pos": 4983,
                                "end": 4988,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "checkItemSelected",
                    "args": [
                        {
                            "name": "result",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 448,
                    "description": "<p>return Item is already selected or not</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 12235,
                                "end": 12241,
                                "flags": 0,
                                "escapedText": "result"
                            },
                            "type": "any",
                            "tagName": {
                                "pos": 12229,
                                "end": 12234,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "clearAndHideResults",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 335,
                    "description": "<p>clears the results and closes result drop down</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "clearInput",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 183,
                    "description": "<p>Clears the input fields and value</p>\n",
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "createFreeTextItem",
                    "args": [],
                    "optional": false,
                    "returnType": "{ type: string; }",
                    "typeParameters": [],
                    "line": 438,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "focusRemoved",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 207,
                    "description": "",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "getAdditionalResults",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 519,
                    "description": "<p>gets more results based when scrolling and adds the items</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "getClass",
                    "args": [],
                    "optional": false,
                    "returnType": "\"hide-cursor\" | \"\"",
                    "typeParameters": [],
                    "line": 591
                },
                {
                    "name": "getFlatElements",
                    "args": [],
                    "optional": false,
                    "returnType": "{}",
                    "typeParameters": [],
                    "line": 345,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "getObjectValue",
                    "args": [
                        {
                            "name": "object",
                            "type": "Object"
                        },
                        {
                            "name": "propertyFields",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "string",
                    "typeParameters": [],
                    "line": 153,
                    "description": "<p>Gets the string value from the specifed properties of an object</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3707,
                                "end": 3713,
                                "flags": 0,
                                "escapedText": "object"
                            },
                            "type": "Object",
                            "tagName": {
                                "pos": 3701,
                                "end": 3706,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 3727,
                                "end": 3741,
                                "flags": 0,
                                "escapedText": "propertyFields"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 3721,
                                "end": 3726,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>comma seperated list with periods depth of object</p>\n"
                        }
                    ]
                },
                {
                    "name": "getResults",
                    "args": [
                        {
                            "name": "searchString",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 460,
                    "description": "<p>gets the inital results</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 12573,
                                "end": 12585,
                                "flags": 0,
                                "escapedText": "searchString"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 12567,
                                "end": 12572,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "inputFocusHandler",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 243,
                    "description": "<p>Event method used when focus is gained to the input</p>\n"
                },
                {
                    "name": "matchPastSearchString",
                    "args": [
                        {
                            "name": "searchString",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 498,
                    "description": "<p>Checks if the new search string matches the old search string</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 14005,
                                "end": 14017,
                                "flags": 0,
                                "escapedText": "searchString"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 13999,
                                "end": 14004,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "onArrowGroupDown",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 383,
                    "description": "<p>handles the arrow down key event</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "onArrowGroupUp",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 396,
                    "description": "<p>handles the arrow up key event</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "onKeydown",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 260,
                    "description": "<p>Key event</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 6567,
                                "end": 6572,
                                "flags": 0,
                                "escapedText": "event"
                            },
                            "type": "",
                            "tagName": {
                                "pos": 6561,
                                "end": 6566,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "onkeypress",
                    "args": [
                        {
                            "name": "ev",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 224,
                    "jsdoctags": [
                        {
                            "name": "ev",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "onScroll",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 504,
                    "description": "<p>Scroll Event Handler (Calculates if mpre items should be asked for from service on scrolling down)</p>\n"
                },
                {
                    "name": "openOptions",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 341
                },
                {
                    "name": "registerOnChange",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 598,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "registerOnTouched",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 602,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "scrollToSelectedItem",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 366,
                    "description": "<p>When paging up and down with arrow key it sets the highlighted item into view</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "selectItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "object"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 302,
                    "description": "<p>selects the item adding it to the model and closes the results</p>\n",
                    "modifierKind": [
                        114
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 7929,
                                "end": 7933,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "object",
                            "tagName": {
                                "pos": 7923,
                                "end": 7928,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "setDisabledState",
                    "args": [
                        {
                            "name": "isDisabled",
                            "type": "boolean"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 606,
                    "jsdoctags": [
                        {
                            "name": "isDisabled",
                            "type": "boolean",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "setHighlightedItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "Object"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 545,
                    "description": "<p>Sets the highlighted item by keyboard or mouseover</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 15435,
                                "end": 15439,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "Object",
                            "tagName": {
                                "pos": 15429,
                                "end": 15434,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "showFreeText",
                    "args": [],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 406
                },
                {
                    "name": "textChange",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 227,
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "writeValue",
                    "args": [
                        {
                            "name": "obj",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 577,
                    "jsdoctags": [
                        {
                            "name": "obj",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\r\n  Component,\r\n  Input,\r\n  ViewChild,\r\n  TemplateRef,\r\n  ElementRef,\r\n  forwardRef,\r\n  ChangeDetectorRef\r\n} from '@angular/core';\r\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';\r\nimport { SDSAutocompleteServiceInterface } from './models/SDSAutocompleteServiceInterface';\r\nimport { KeyHelper, KEYS } from '../key-helper/key-helper';\r\nimport { SDSSelectedItemModel } from '../selected-result/models/sds-selectedItem.model';\r\nimport {\r\n  SelectionMode,\r\n  SDSSelectedItemModelHelper\r\n} from '../selected-result/models/sds-selected-item-model-helper';\r\nimport { SDSAutocompleteSearchConfiguration } from './models/SDSAutocompleteConfiguration';\r\nconst Autocomplete_Autocomplete_VALUE_ACCESSOR: any = {\r\n  provide: NG_VALUE_ACCESSOR,\r\n  useExisting: forwardRef(() => SDSAutocompleteSearchComponent),\r\n  multi: true\r\n};\r\n\r\n@Component({\r\n  selector: 'sds-search-autocomplete',\r\n  templateUrl: './autocomplete-search.component.html',\r\n  styleUrls: ['./autocomplete-search.component.scss'],\r\n  providers: [Autocomplete_Autocomplete_VALUE_ACCESSOR]\r\n})\r\nexport class SDSAutocompleteSearchComponent implements ControlValueAccessor {\r\n  constructor(private _changeDetectorRef: ChangeDetectorRef) {}\r\n  /**\r\n   * Ul list of elements\r\n   */\r\n  @ViewChild('resultsList') resultsListElement: ElementRef;\r\n\r\n  /**\r\n   * input control\r\n   */\r\n  @ViewChild('input') input: ElementRef;\r\n\r\n  /**\r\n   * Allow to insert a customized template for suggestions to use\r\n   */\r\n  @Input() itemTemplate: TemplateRef<any>;\r\n\r\n  /**\r\n   * The data model that has the selected item\r\n   */\r\n  public model: SDSSelectedItemModel;\r\n\r\n  /**\r\n   * Model contain only the primary key, primary value, and secondary value.\r\n   */\r\n  @Input() public essentialModelFields: boolean = false;\r\n\r\n  /**\r\n   * Configuration for the Autocomplete control\r\n   */\r\n  @Input()\r\n  public configuration: SDSAutocompleteSearchConfiguration;\r\n\r\n  /**\r\n   * Instance of the SamHiercarchicalServiceInterface provided\r\n   */\r\n  @Input()\r\n  public service: SDSAutocompleteServiceInterface;\r\n\r\n  /**\r\n   * Timer id for the timer awaiting the service call for more typeing\r\n   */\r\n  private timeoutNumber: number;\r\n\r\n  /**\r\n   *  result set to be rendered\r\n   */\r\n  results: object[];\r\n\r\n  /**\r\n   * max number of results to be shown\r\n   */\r\n  private maxResults: number;\r\n\r\n  /**\r\n   * selected index\r\n   */\r\n  public highlightedIndex: number = 0;\r\n\r\n  /**\r\n   * selected child index\r\n   */\r\n  public highlightedChildIndex = 0;\r\n\r\n  /**\r\n   * highlighted object in drop down\r\n   */\r\n  private highlightedItem: object;\r\n\r\n  /**\r\n   * value of the input field\r\n   */\r\n  public inputValue: string = '';\r\n\r\n  /**\r\n   * Proprty being set on the object is highlighted\r\n   */\r\n  private HighlightedPropertyName = 'highlighted';\r\n\r\n  public showLoad: boolean = true;\r\n\r\n  /**\r\n   * Search string\r\n   */\r\n  private searchString: string = null;\r\n\r\n  /**\r\n   * Message announced by screen readers when\r\n   * autocomplete results are updated or new item\r\n   * is highlighted\r\n   */\r\n  public srOnlyText: string;\r\n\r\n  /**\r\n   * To make input readonly\r\n   */\r\n  @Input() public inputReadOnly = false;\r\n\r\n  /**\r\n   * Stored Event for ControlValueAccessor\r\n   */\r\n  public onTouchedCallback: () => void = () => null;\r\n\r\n  /**\r\n   * Stored Event for ControlValueAccessor\r\n   */\r\n  public propogateChange: (_: any) => void = (_: any) => null;\r\n\r\n  @Input()\r\n  public disabled: boolean;\r\n\r\n  private resultsAvailableMessage: string =\r\n    ' results available. Use up and down arrows\\\r\n  to scroll through results. Hit enter to select.';\r\n\r\n  private index = 0;\r\n  /**\r\n   * Gets the string value from the specifed properties of an object\r\n   * @param object\r\n   * @param propertyFields comma seperated list with periods depth of object\r\n   */\r\n\r\n  getObjectValue(object: Object, propertyFields: string): string {\r\n    let value = '';\r\n    let current = object;\r\n    let fieldSplit = propertyFields.split(',');\r\n    for (let i = 0; i < fieldSplit.length; i++) {\r\n      let fieldValue = fieldSplit[i];\r\n      let fieldPartSplit = fieldValue.split('.');\r\n      for (let j = 0; j < fieldPartSplit.length; j++) {\r\n        let fieldCheckValue = fieldPartSplit[j];\r\n        if (current) {\r\n          current = current[fieldCheckValue];\r\n        }\r\n      }\r\n\r\n      if (current) {\r\n        value += current.toString() + ' ';\r\n      }\r\n      current = object;\r\n    }\r\n    return value.trim();\r\n  }\r\n\r\n  /**\r\n   * Determines if the dropdown should be shown\r\n   */\r\n  public showResults = false;\r\n\r\n  /**\r\n   * Clears the input fields and value\r\n   */\r\n  public clearInput(): void {\r\n    this.inputValue = '';\r\n    if (this.configuration.selectionMode === SelectionMode.SINGLE) {\r\n      if (this.model.items.length > 0) {\r\n        SDSSelectedItemModelHelper.clearItems(this.model.items);\r\n        this.propogateChange(this.model);\r\n      }\r\n    }\r\n    this.onTouchedCallback();\r\n    this.clearAndHideResults();\r\n  }\r\n\r\n  /**\r\n   *\r\n   * @param event\r\n   */\r\n  checkForFocus(event): void {\r\n    this.focusRemoved();\r\n    this.showResults = false;\r\n  }\r\n\r\n  /**\r\n   *\r\n   */\r\n  private focusRemoved() {\r\n    if (this.configuration) {\r\n      if (this.configuration.selectionMode === SelectionMode.SINGLE) {\r\n        if (this.model.items.length > 0) {\r\n          this.inputValue = this.getObjectValue(\r\n            this.model.items[0],\r\n            this.configuration.primaryTextField\r\n          );\r\n        }\r\n      } else {\r\n        this.inputValue = '';\r\n      }\r\n    } else {\r\n      this.inputValue = '';\r\n    }\r\n  }\r\n\r\n  onkeypress(ev) {\r\n    return this.configuration.inputReadOnly ? false : true;\r\n  }\r\n  textChange(event) {\r\n    if (!this.configuration.isTagModeEnabled) {\r\n      // ie 11 placeholders will incorrectly trigger input events (known bug)\r\n      // if input isn't active element then don't do anything\r\n      if (event.target != document.activeElement) {\r\n        event.preventDefault();\r\n        return;\r\n      }\r\n      const searchString = event.target.value || '';\r\n      this.getResults(searchString);\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Event method used when focus is gained to the input\r\n   */\r\n  inputFocusHandler(): void {\r\n    if (!this.configuration.isTagModeEnabled) {\r\n      if (this.configuration.focusInSearch) {\r\n        this.highlightedIndex = 0;\r\n        this.highlightedChildIndex = this.configuration.isSelectableGroup\r\n          ? 0\r\n          : null;\r\n        this.getResults(this.inputValue || '');\r\n      }\r\n      this.onTouchedCallback();\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Key event\r\n   * @param event\r\n   */\r\n  onKeydown(event): void {\r\n    if (KeyHelper.is(KEYS.ALT, event)) {\r\n      event.preventDefault();\r\n      this.inputFocusHandler();\r\n    }\r\n    if (KeyHelper.is(KEYS.TAB, event)) {\r\n      return;\r\n    } else if (KeyHelper.is(KEYS.BACKSPACE, event)) {\r\n      if (this.configuration.inputReadOnly) {\r\n        event.preventDefault();\r\n      }\r\n    } else if (KeyHelper.is(KEYS.DOWN, event)) {\r\n      this.onArrowGroupDown();\r\n    } else if (KeyHelper.is(KEYS.UP, event)) {\r\n      event.preventDefault();\r\n      this.onArrowGroupUp();\r\n    } else if (KeyHelper.is(KEYS.ENTER, event) && this.highlightedIndex >= 0) {\r\n      if (this.configuration.isTagModeEnabled) {\r\n        const val = this.createFreeTextItem();\r\n        this.selectItem(val);\r\n      } else {\r\n        this.selectItem(this.highlightedItem);\r\n      }\r\n    } else if (KeyHelper.is(KEYS.ENTER, event) && this.highlightedIndex < 0) {\r\n      if (this.configuration.isFreeTextEnabled) {\r\n        const val = this.createFreeTextItem();\r\n        this.selectItem(val);\r\n      }\r\n    } else if (KeyHelper.is(KEYS.ESC, event)) {\r\n      if (this.showResults) {\r\n        this.clearAndHideResults();\r\n        if (event.stopPropagation) {\r\n          event.stopPropagation();\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  /**\r\n   * selects the item adding it to the model and closes the results\r\n   * @param item\r\n   */\r\n  public selectItem(item: object): void {\r\n    let filterItem = {};\r\n    if (this.essentialModelFields) {\r\n      filterItem[this.configuration.primaryKeyField] =\r\n        item[this.configuration.primaryKeyField];\r\n      filterItem[this.configuration.primaryTextField] =\r\n        item[this.configuration.primaryTextField];\r\n      if (this.configuration.secondaryTextField) {\r\n        filterItem[this.configuration.secondaryTextField] =\r\n          item[this.configuration.secondaryTextField];\r\n      }\r\n    } else {\r\n      filterItem = item;\r\n    }\r\n    SDSSelectedItemModelHelper.addItem(\r\n      filterItem,\r\n      this.configuration.primaryKeyField,\r\n      this.configuration.selectionMode,\r\n      this.model\r\n    );\r\n    this.propogateChange(this.model);\r\n    let message = this.getObjectValue(\r\n      item,\r\n      this.configuration.primaryTextField\r\n    );\r\n    this.inputValue = message;\r\n    this.focusRemoved();\r\n    this.showResults = false;\r\n  }\r\n\r\n  /**\r\n   *  clears the results and closes result drop down\r\n   */\r\n  private clearAndHideResults(): void {\r\n    this.results = [];\r\n    this.showResults = false;\r\n    this.focusRemoved();\r\n  }\r\n\r\n  openOptions() {\r\n    this.input.nativeElement.focus();\r\n  }\r\n\r\n  public getFlatElements() {\r\n    const results = this.results;\r\n    const flat = [];\r\n    const flatten = (array: any) => {\r\n      for (let i in array) {\r\n        const item = array[i];\r\n        flat.push(item);\r\n        if (\r\n          item[this.configuration.groupByChild] &&\r\n          item[this.configuration.groupByChild].length\r\n        ) {\r\n          flatten(item[this.configuration.groupByChild]);\r\n        }\r\n      }\r\n    };\r\n    flatten(results);\r\n    return flat;\r\n  }\r\n  /**\r\n   * When paging up and down with arrow key it sets the highlighted item into view\r\n   */\r\n  private scrollToSelectedItem() {\r\n    if (this.highlightedIndex >= 0) {\r\n      let selectedChild;\r\n      const dom = this.resultsListElement.nativeElement;\r\n      selectedChild = dom.querySelector('.sds-autocomplete__item--highlighted');\r\n      if (selectedChild) {\r\n        selectedChild.scrollIntoView({\r\n          behavior: 'smooth',\r\n          block: 'center',\r\n          inline: 'start'\r\n        });\r\n      }\r\n    }\r\n  }\r\n  /**\r\n   *  handles the arrow down key event\r\n   */\r\n  private onArrowGroupDown(): void {\r\n    if (this.results && this.results.length > 0) {\r\n      const flat = this.getFlatElements();\r\n      if (this.highlightedIndex < this.results.length - 1) {\r\n        this.highlightedIndex++;\r\n      }\r\n      this.setHighlightedItem(flat[this.highlightedIndex]);\r\n      this.scrollToSelectedItem();\r\n    }\r\n  }\r\n  /**\r\n   *  handles the arrow up key event\r\n   */\r\n  private onArrowGroupUp(): void {\r\n    if (this.results && this.results.length > 0) {\r\n      const flat = this.getFlatElements();\r\n      if (this.highlightedIndex != 0) {\r\n        this.highlightedIndex--;\r\n      }\r\n      this.setHighlightedItem(flat[this.highlightedIndex]);\r\n      this.scrollToSelectedItem();\r\n    }\r\n  }\r\n  showFreeText() {\r\n    if (this.configuration.isFreeTextEnabled) {\r\n      if (this.inputValue) {\r\n        if (this.inputValue.length !== 0) {\r\n          let foundItem = false;\r\n          if (this.results) {\r\n            for (var i = 0; i < this.results.length && !foundItem; i++) {\r\n              let item = this.results[i];\r\n              foundItem =\r\n                item[this.configuration.primaryTextField] === this.inputValue;\r\n            }\r\n          }\r\n          if (this.model.items.length > 0 && !foundItem) {\r\n            for (var i = 0; i < this.model.items.length && !foundItem; i++) {\r\n              let item = this.model.items[i];\r\n              foundItem =\r\n                item[this.configuration.primaryTextField] === this.inputValue;\r\n            }\r\n          }\r\n\r\n          return !foundItem;\r\n        } else {\r\n          return false;\r\n        }\r\n      } else {\r\n        return false;\r\n      }\r\n    } else {\r\n      return this.configuration.isFreeTextEnabled;\r\n    }\r\n  }\r\n\r\n  private createFreeTextItem() {\r\n    let item = { type: 'custom' };\r\n    item[this.configuration.primaryTextField] = this.inputValue;\r\n    item[this.configuration.primaryKeyField] = this.inputValue;\r\n    return item;\r\n  }\r\n  /**\r\n   *  return Item is already selected or not\r\n   * @param result\r\n   */\r\n  checkItemSelected(result: any) {\r\n    const selectedItem = this.model.items.filter(\r\n      item =>\r\n        item[this.configuration.primaryKeyField] ===\r\n        result[this.configuration.primaryKeyField]\r\n    );\r\n    return selectedItem.length > 0 ? true : false;\r\n  }\r\n  /**\r\n   *  gets the inital results\r\n   * @param searchString\r\n   */\r\n  private getResults(searchString: string): void {\r\n    if (searchString.length >= this.configuration.minimumCharacterCountSearch) {\r\n      if (\r\n        !this.matchPastSearchString(searchString) ||\r\n        (this.matchPastSearchString(searchString) && !this.showResults) ||\r\n        this.matchPastSearchString('')\r\n      ) {\r\n        this.searchString = searchString;\r\n        window.clearTimeout(this.timeoutNumber);\r\n        this.timeoutNumber = window.setTimeout(() => {\r\n          this.showLoad = true;\r\n          this.service.getDataByText(0, searchString).subscribe(result => {\r\n            this.results = result.items;\r\n            this.showLoad = false;\r\n            this.maxResults = result.totalItems;\r\n\r\n            this.highlightedIndex =\r\n              this.configuration.isFreeTextEnabled || this.maxResults == 0\r\n                ? -1\r\n                : 0;\r\n            if (!this.configuration.isFreeTextEnabled) {\r\n              this.setHighlightedItem(this.results[this.highlightedIndex]);\r\n            }\r\n            this.showResults = true;\r\n            this.addScreenReaderMessage(\r\n              this.maxResults + ' ' + this.resultsAvailableMessage\r\n            );\r\n            this._changeDetectorRef.markForCheck();\r\n          });\r\n        }, this.configuration.debounceTime);\r\n      }\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Checks if the new search string matches the old search string\r\n   * @param searchString\r\n   */\r\n  private matchPastSearchString(searchString: string) {\r\n    return this.searchString === searchString;\r\n  }\r\n  /**\r\n   * Scroll Event Handler (Calculates if mpre items should be asked for from service on scrolling down)\r\n   */\r\n  onScroll() {\r\n    if (this.maxResults > this.results.length) {\r\n      let scrollAreaHeight = this.resultsListElement.nativeElement.offsetHeight;\r\n      let scrollTopPos = this.resultsListElement.nativeElement.scrollTop;\r\n      let scrollAreaMaxHeight = this.resultsListElement.nativeElement\r\n        .scrollHeight;\r\n      if (scrollTopPos + scrollAreaHeight * 2 >= scrollAreaMaxHeight) {\r\n        this.getAdditionalResults();\r\n      }\r\n    }\r\n  }\r\n\r\n  /**\r\n   * gets more results based when scrolling and adds the items\r\n   */\r\n  private getAdditionalResults() {\r\n    this.showLoad = true;\r\n    this.service\r\n      .getDataByText(this.results.length, this.searchString)\r\n      .subscribe(result => {\r\n        for (let i = 0; i < result.items.length; i++) {\r\n          this.addResult(result.items[i]);\r\n        }\r\n        this.showLoad = false;\r\n        this.maxResults = result.totalItems;\r\n      });\r\n  }\r\n\r\n  /**\r\n   * adds a single item to the list\r\n   * @param item\r\n   */\r\n  private addResult(item: object) {\r\n    //add check to make sure item does not exist\r\n    this.results.push(item);\r\n  }\r\n\r\n  /**\r\n   * Sets the highlighted item by keyboard or mouseover\r\n   * @param item\r\n   */\r\n  private setHighlightedItem(item: Object): void {\r\n    if (this.results && this.results.length > 0) {\r\n      if (this.highlightedItem) {\r\n        this.highlightedItem[this.HighlightedPropertyName] = false;\r\n      }\r\n      let message = '';\r\n      if (item) {\r\n        this.highlightedItem = item;\r\n        this.highlightedItem[this.HighlightedPropertyName] = true;\r\n        message = item[this.configuration.primaryTextField];\r\n        if (\r\n          this.configuration.secondaryTextField &&\r\n          item[this.configuration.secondaryTextField]\r\n        ) {\r\n          message += ': ' + item[this.configuration.secondaryTextField];\r\n        }\r\n      } else {\r\n        this.highlightedItem = undefined;\r\n        message = 'No item selected';\r\n      }\r\n      this.addScreenReaderMessage(message);\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Adds message to be read by screen reader\r\n   * @param message\r\n   */\r\n  private addScreenReaderMessage(message: string) {\r\n    this.srOnlyText = message;\r\n  }\r\n\r\n  writeValue(obj: any): void {\r\n    if (obj instanceof SDSSelectedItemModel) {\r\n      this.model = obj as SDSSelectedItemModel;\r\n      this._changeDetectorRef.markForCheck();\r\n      if (this.model.items.length === 0) {\r\n        this.inputValue = '';\r\n      } else if (this.configuration && this.configuration.selectionMode === SelectionMode.SINGLE){\r\n          this.inputValue = this.getObjectValue(\r\n            this.model.items[0],\r\n            this.configuration.primaryTextField\r\n          );\r\n      }\r\n    }\r\n  }\r\n  getClass() {\r\n    return this.configuration.inputReadOnly &&\r\n      this.configuration.selectionMode === SelectionMode.MULTIPLE\r\n      ? 'hide-cursor'\r\n      : '';\r\n  }\r\n\r\n  registerOnChange(fn: any): void {\r\n    this.propogateChange = fn;\r\n  }\r\n\r\n  registerOnTouched(fn: any): void {\r\n    this.onTouchedCallback = fn;\r\n  }\r\n\r\n  setDisabledState(isDisabled: boolean): void {\r\n    this.disabled = isDisabled;\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": ".grayToLightBackgroundGradiate {\r\n  background: linear-gradient(to right, #c4c4c4, #f7f7f7);\r\n  background-size: 400% 400%;\r\n  height: 10px;\r\n  padding: 2.5px 0 2.5px 0;\r\n  text-align: center;\r\n  color: #888888;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  margin: 7px 10px 0 10px;\r\n\r\n  -webkit-animation: gradiantShiftGray 5s ease infinite;\r\n  -moz-animation: gradiantShiftGray 5s ease infinite;\r\n  animation: gradiantShiftGray 5s ease infinite;\r\n\r\n  @-webkit-keyframes gradiantShiftGray {\r\n    0% {\r\n      background-position: 0% 50%;\r\n    }\r\n    50% {\r\n      background-position: 100% 50%;\r\n    }\r\n    100% {\r\n      background-position: 0% 50%;\r\n    }\r\n  }\r\n  @-moz-keyframes gradiantShiftGray {\r\n    0% {\r\n      background-position: 0% 50%;\r\n    }\r\n    50% {\r\n      background-position: 100% 50%;\r\n    }\r\n    100% {\r\n      background-position: 0% 50%;\r\n    }\r\n  }\r\n  @keyframes gradiantShiftGray {\r\n    0% {\r\n      background-position: 0% 50%;\r\n    }\r\n    50% {\r\n      background-position: 100% 50%;\r\n    }\r\n    100% {\r\n      background-position: 0% 50%;\r\n    }\r\n  }\r\n}\r\n\r\n.lightToGrayBackgroundGradiate {\r\n  background: linear-gradient(to right, #f7f7f7, #c4c4c4);\r\n  background-size: 400% 400%;\r\n  height: 15px;\r\n  padding: 2.5px 0 2.5px 0;\r\n  text-align: center;\r\n  color: #888888;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  margin: 10px 10px 0 10px;\r\n\r\n  -webkit-animation: gradiantShift 5s ease infinite;\r\n  -moz-animation: gradiantShift 5s ease infinite;\r\n  animation: gradiantShift 5s ease infinite;\r\n\r\n  @-webkit-keyframes gradiantShift {\r\n    0% {\r\n      background-position: 0% 50%;\r\n    }\r\n    50% {\r\n      background-position: 100% 50%;\r\n    }\r\n    100% {\r\n      background-position: 0% 50%;\r\n    }\r\n  }\r\n  @-moz-keyframes gradiantShift {\r\n    0% {\r\n      background-position: 0% 50%;\r\n    }\r\n    50% {\r\n      background-position: 100% 50%;\r\n    }\r\n    100% {\r\n      background-position: 0% 50%;\r\n    }\r\n  }\r\n  @keyframes gradiantShift {\r\n    0% {\r\n      background-position: 0% 50%;\r\n    }\r\n    50% {\r\n      background-position: 100% 50%;\r\n    }\r\n    100% {\r\n      background-position: 0% 50%;\r\n    }\r\n  }\r\n}\r\n\r\n.autoLoading {\r\n  height: 60px;\r\n}\r\n.hide-cursor {\r\n  color: transparent;\r\n  text-shadow: 0 0 0;\r\n}\r\n",
                    "styleUrl": "./autocomplete-search.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef"
                    }
                ],
                "line": 31,
                "jsdoctags": [
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "ControlValueAccessor"
            ],
            "templateData": "<div\r\n  sds-click-outside\r\n  (clickOutside)=\"checkForFocus($event)\"\r\n  sds-tab-outside\r\n  (tabOutside)=\"checkForFocus($event)\"\r\n>\r\n  <div class=\"maxw-mobile-lg position-relative\">\r\n    <div\r\n      role=\"combobox\"\r\n      [attr.id]=\"configuration.id + '-container'\"\r\n      [attr.aria-expanded]=\"showResults\"\r\n      [attr.aria-owns]=\"showResults ? configuration.id + '-listbox' : undefined\"\r\n      aria-haspopup=\"listbox\"\r\n    >\r\n      <input\r\n        [disabled]=\"disabled\"\r\n        (keypress)=\"onkeypress($event)\"\r\n        (input)=\"textChange($event)\"\r\n        class=\"usa-input padding-right-3\"\r\n        [ngClass]=\"getClass()\"\r\n        #input\r\n        [attr.aria-label]=\"configuration.ariaLabelText\"\r\n        [attr.id]=\"configuration.id\"\r\n        type=\"text\"\r\n        (focus)=\"inputFocusHandler()\"\r\n        (keydown)=\"onKeydown($event)\"\r\n        [(ngModel)]=\"inputValue\"\r\n        aria-autocomplete=\"list\"\r\n        [attr.placeholder]=\"configuration.autocompletePlaceHolderText\"\r\n        [attr.aria-activedescendant]=\"\r\n          showResults\r\n            ? configuration.id + '-resultItem-' + highlightedIndex\r\n            : ''\r\n        \"\r\n        [attr.aria-controls]=\"\r\n          showResults ? configuration.id + '-listbox' : undefined\r\n        \"\r\n        autocomplete=\"off\"\r\n      />\r\n    </div>\r\n    <ul\r\n      #resultsList\r\n      *ngIf=\"showResults\"\r\n      [attr.id]=\"configuration.id + '-listbox'\"\r\n      role=\"listbox\"\r\n      class=\"usa-list usa-list--unstyled sds-autocomplete\"\r\n      (scroll)=\"onScroll()\"\r\n    >\r\n      <ng-container *ngIf=\"results && results.length\">\r\n        <li\r\n          [attr.id]=\"configuration.id + '-resultItem-' + i\"\r\n          role=\"option\"\r\n          [ngClass]=\"{\r\n            'sds-autocomplete__group': configuration.isGroupingEnabled,\r\n            'sds-autocomplete__item': !configuration.isGroupingEnabled,\r\n            'sds-autocomplete__item--highlighted':\r\n              result['highlighted'] && !configuration.isGroupingEnabled,\r\n            'sds-autocomplete__item--selected':\r\n              checkItemSelected(result) && !configuration.isGroupingEnabled\r\n          }\"\r\n          *ngFor=\"let result of results; let i = index\"\r\n          (click)=\"!configuration.isSelectableGroup ? '' : selectItem(result)\"\r\n        >\r\n          <ng-container\r\n            *ngIf=\"itemTemplate\"\r\n            [ngTemplateOutlet]=\"itemTemplate\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: result }\"\r\n          >\r\n          </ng-container>\r\n          <ng-container *ngIf=\"!itemTemplate\">\r\n            <div\r\n              [ngClass]=\"{\r\n                'sds-autocomplete__item': configuration.isGroupingEnabled,\r\n                'sds-autocomplete__item--highlighted':\r\n                  configuration.isGroupingEnabled && result['highlighted'],\r\n                'sds-autocomplete__item--disabled':\r\n                  !configuration.isSelectableGroup &&\r\n                  configuration.isGroupingEnabled,\r\n                'sds-autocomplete__item--selected':\r\n                  checkItemSelected(result) && configuration.isGroupingEnabled\r\n              }\"\r\n            >\r\n              <div\r\n                [ngClass]=\"{\r\n                  'text-semibold': configuration.secondaryTextField\r\n                }\"\r\n              >\r\n                {{ getObjectValue(result, configuration.primaryTextField) }}\r\n              </div>\r\n              <ng-container\r\n                *ngIf=\"\r\n                  configuration.secondaryTextField &&\r\n                  result[configuration.secondaryTextField]\r\n                \"\r\n              >\r\n                <div>{{ result[configuration.secondaryTextField] }}</div>\r\n              </ng-container>\r\n            </div>\r\n\r\n            <ul\r\n              class=\"usa-list usa-list--unstyled\"\r\n              #childrenList\r\n              [attr.id]=\"configuration.id + '-childrenlistbox-'\"\r\n              role=\"listbox\"\r\n            >\r\n              <li\r\n                [attr.id]=\"configuration.id + '-childItem-' + j\"\r\n                role=\"option\"\r\n                [ngClass]=\"{\r\n                  'sds-autocomplete__group':\r\n                    child[configuration.groupByChild]?.length,\r\n                  'sds-autocomplete__item': !child[configuration.groupByChild]\r\n                    ?.length,\r\n                  'sds-autocomplete__item--highlighted':\r\n                    child['highlighted'] &&\r\n                    !child[configuration.groupByChild]?.length,\r\n                  'sds-autocomplete__item--selected':\r\n                    checkItemSelected(child) &&\r\n                    !child[configuration.groupByChild]?.length\r\n                }\"\r\n                *ngFor=\"\r\n                  let child of result[configuration.groupByChild];\r\n                  let j = index\r\n                \"\r\n                (click)=\"selectItem(child)\"\r\n              >\r\n                <div\r\n                  [ngClass]=\"{\r\n                    'sds-autocomplete__item':\r\n                      child[configuration.groupByChild]?.length,\r\n                    'sds-autocomplete__item--highlighted':\r\n                      child[configuration.groupByChild]?.length &&\r\n                      child['highlighted'],\r\n                    'sds-autocomplete__item--disabled':\r\n                      !configuration.isSelectableGroup &&\r\n                      child[configuration.groupByChild]?.length,\r\n                    'sds-autocomplete__item--selected':\r\n                      checkItemSelected(child) &&\r\n                      child[configuration.groupByChild]?.length\r\n                  }\"\r\n                >\r\n                  <div\r\n                    [ngClass]=\"{\r\n                      'text-semibold': configuration.secondaryTextField\r\n                    }\"\r\n                  >\r\n                    {{ getObjectValue(child, configuration.primaryTextField) }}\r\n                  </div>\r\n\r\n                  <div\r\n                    *ngIf=\"\r\n                      configuration.secondaryTextField &&\r\n                      child[configuration.secondaryTextField]\r\n                    \"\r\n                  >\r\n                    {{ child[configuration.secondaryTextField] }}\r\n                  </div>\r\n                </div>\r\n                <ul\r\n                  class=\"usa-list usa-list--unstyled\"\r\n                  #childrenItems\r\n                  [attr.id]=\"configuration.id + '-grandchildren-'\"\r\n                  role=\"listbox\"\r\n                >\r\n                  <li\r\n                    [attr.id]=\"configuration.id + '-grandchildren-' + k\"\r\n                    role=\"option\"\r\n                    class=\"sds-autocomplete__item\"\r\n                    [ngClass]=\"{\r\n                      'sds-autocomplete__item--selected': checkItemSelected(\r\n                        subchild\r\n                      ),\r\n                      'sds-autocomplete__item--highlighted':\r\n                        subchild['highlighted']\r\n                    }\"\r\n                    *ngFor=\"\r\n                      let subchild of child[configuration.groupByChild];\r\n                      let k = index\r\n                    \"\r\n                    (click)=\"selectItem(subchild)\"\r\n                  >\r\n                    <div>\r\n                      <div\r\n                        [ngClass]=\"{\r\n                          'text-semibold': configuration.secondaryTextField\r\n                        }\"\r\n                      >\r\n                        {{\r\n                          getObjectValue(\r\n                            subchild,\r\n                            configuration.primaryTextField\r\n                          )\r\n                        }}\r\n\r\n                        <div\r\n                          *ngIf=\"\r\n                            configuration.secondaryTextField &&\r\n                            subchild[configuration.secondaryTextField]\r\n                          \"\r\n                        >\r\n                          {{ subchild[configuration.secondaryTextField] }}\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n          </ng-container>\r\n        </li>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!results || results.length == 0\">\r\n        <li class=\"emptyResults margin-1\">No results found</li>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showLoad\">\r\n        <li class=\"autoLoading\">\r\n          <div class=\"lightToGrayBackgroundGradiate\"></div>\r\n          <div class=\"grayToLightBackgroundGradiate\"></div>\r\n        </li>\r\n        <li class=\"autoLoading\">\r\n          <div class=\"lightToGrayBackgroundGradiate\"></div>\r\n          <div class=\"grayToLightBackgroundGradiate\"></div>\r\n        </li>\r\n      </ng-container>\r\n    </ul>\r\n\r\n    <ng-container *ngIf=\"!input.disabled\">\r\n      <span class=\"position-absolute right-105 top-1 cursor-pointer\">\r\n        <span\r\n          *ngIf=\"inputValue && !disabled\"\r\n          role=\"button\"\r\n          aria-label=\"Clear input\"\r\n          aria-hidden=\"false\"\r\n          (click)=\"clearInput()\"\r\n          (keyup.enter)=\"clearInput()\"\r\n        >\r\n          <fa-icon [icon]=\"['fas', 'times']\" size=\"xs\"></fa-icon>\r\n        </span>\r\n        <span\r\n          *ngIf=\"!configuration.isTagModeEnabled\"\r\n          role=\"button\"\r\n          aria-label=\"Clear input\"\r\n          aria-hidden=\"false\"\r\n          class=\"margin-left-1\"\r\n        >\r\n          <fa-icon\r\n            *ngIf=\"!showResults && !disabled\"\r\n            (click)=\"openOptions()\"\r\n            [icon]=\"['fas', 'caret-down']\"\r\n            size=\"sm\"\r\n          ></fa-icon>\r\n          <fa-icon\r\n            *ngIf=\"showResults && !disabled\"\r\n            (click)=\"checkForFocus($event)\"\r\n            [icon]=\"['fas', 'caret-up']\"\r\n            size=\"sm\"\r\n          ></fa-icon>\r\n        </span>\r\n      </span>\r\n    </ng-container>\r\n    <ul class=\"usa-sr-only\" aria-live=\"assertive\">\r\n      <li>{{ srOnlyText }}</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"
        },
        {
            "name": "SdsDialogContainerComponent",
            "id": "component-SdsDialogContainerComponent-3e043467419dfe1d46b2faf98434442f",
            "file": "libs/packages/components/src/lib/dialog/dialog-container.component.ts",
            "changeDetection": "ChangeDetectionStrategy.Default",
            "encapsulation": [
                "ViewEncapsulation.None"
            ],
            "entryComponents": [],
            "host": {},
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-dialog-container",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "dialog-container.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "_animationStateChanged",
                    "defaultValue": "new EventEmitter<AnimationEvent>()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Emits when an animation state changes. </p>\n",
                    "line": 81
                },
                {
                    "name": "_ariaLabelledBy",
                    "defaultValue": "null",
                    "type": "string | null",
                    "optional": false,
                    "description": "<p>ID of the element that should be considered as the dialog&#39;s label. </p>\n",
                    "line": 84
                },
                {
                    "name": "_config",
                    "type": "SdsDialogConfig",
                    "optional": false,
                    "description": "<p>The dialog configuration. </p>\n",
                    "line": 95,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "_elementFocusedBeforeDialogWasOpened",
                    "defaultValue": "null",
                    "type": "HTMLElement | null",
                    "optional": false,
                    "description": "<p>Element that was focused before the dialog was opened. Save this to restore upon close. </p>\n",
                    "line": 75,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_focusTrap",
                    "type": "FocusTrap",
                    "optional": false,
                    "description": "<p>The class that traps and manages focus within the dialog. </p>\n",
                    "line": 72,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>ID for the container DOM element. </p>\n",
                    "line": 87
                },
                {
                    "name": "_portalOutlet",
                    "type": "CdkPortalOutlet",
                    "optional": false,
                    "description": "<p>The portal outlet inside of this container into which the dialog content will be loaded. </p>\n",
                    "line": 69,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "CdkPortalOutlet"
                        }
                    ]
                },
                {
                    "name": "_state",
                    "defaultValue": "'enter'",
                    "type": "\"void\" | \"enter\" | \"exit\"",
                    "optional": false,
                    "description": "<p>State of the dialog animation. </p>\n",
                    "line": 78
                }
            ],
            "methodsClass": [
                {
                    "name": "_onAnimationDone",
                    "args": [
                        {
                            "name": "event",
                            "type": "AnimationEvent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 170,
                    "description": "<p>Callback, invoked whenever an animation on the host completes. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "AnimationEvent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_onAnimationStart",
                    "args": [
                        {
                            "name": "event",
                            "type": "AnimationEvent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 181,
                    "description": "<p>Callback, invoked when an animation on the host starts. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "AnimationEvent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_restoreFocus",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 141,
                    "description": "<p>Restores focus to the element that was focused before the dialog opened. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_savePreviouslyFocusedElement",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 155,
                    "description": "<p>Saves a reference to the element that was focused before the dialog was opened. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_startExitAnimation",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 186,
                    "description": "<p>Starts the dialog exit animation. </p>\n"
                },
                {
                    "name": "_trapFocus",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 127,
                    "description": "<p>Moves the focus inside the focus trap. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "attachComponentPortal",
                    "args": [
                        {
                            "name": "portal",
                            "type": "ComponentPortal<T>"
                        }
                    ],
                    "optional": false,
                    "returnType": "ComponentRef<T>",
                    "typeParameters": [
                        "T"
                    ],
                    "line": 104,
                    "description": "<p>Attach a ComponentPortal as content to this dialog container.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3556,
                                "end": 3562,
                                "flags": 0,
                                "escapedText": "portal"
                            },
                            "type": "ComponentPortal<T>",
                            "tagName": {
                                "pos": 3550,
                                "end": 3555,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Portal to be attached as the dialog content.</p>\n"
                        }
                    ]
                },
                {
                    "name": "attachTemplatePortal",
                    "args": [
                        {
                            "name": "portal",
                            "type": "TemplatePortal<C>"
                        }
                    ],
                    "optional": false,
                    "returnType": "EmbeddedViewRef<C>",
                    "typeParameters": [
                        "C"
                    ],
                    "line": 117,
                    "description": "<p>Attach a TemplatePortal as content to this dialog container.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3995,
                                "end": 4001,
                                "flags": 0,
                                "escapedText": "portal"
                            },
                            "type": "TemplatePortal<C>",
                            "tagName": {
                                "pos": 3989,
                                "end": 3994,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Portal to be attached as the dialog content.</p>\n"
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "<p>Internal component that wraps user-provided dialog content.</p>\n",
            "rawdescription": "Internal component that wraps user-provided dialog content.",
            "type": "component",
            "sourceCode": "import {\r\n  Component,\r\n  ComponentRef,\r\n  ElementRef,\r\n  EmbeddedViewRef,\r\n  EventEmitter,\r\n  Inject,\r\n  Optional,\r\n  ChangeDetectorRef,\r\n  ViewChild,\r\n  ViewEncapsulation,\r\n  ChangeDetectionStrategy,\r\n} from '@angular/core';\r\nimport {DOCUMENT} from '@angular/common';\r\nimport {AnimationEvent} from '@angular/animations';\r\nimport {sdsDialogAnimations} from './dialog-animations';\r\nimport {\r\n  BasePortalOutlet,\r\n  ComponentPortal,\r\n  CdkPortalOutlet,\r\n  TemplatePortal\r\n} from '@angular/cdk/portal';\r\nimport {FocusTrap, FocusTrapFactory} from '@angular/cdk/a11y';\r\nimport {SdsDialogConfig} from './dialog-config';\r\n\r\n\r\n/**\r\n * Throws an exception for the case when a ComponentPortal is\r\n * attached to a DomPortalOutlet without an origin.\r\n * @docs-private\r\n */\r\nexport function throwSdsDialogContentAlreadyAttachedError() {\r\n  throw Error('Attempting to attach dialog content after content is already attached');\r\n}\r\n\r\n/**\r\n * Internal component that wraps user-provided dialog content.\r\n * @docs-private\r\n */\r\n@Component({\r\n  selector: 'sds-dialog-container',\r\n  templateUrl: 'dialog-container.component.html',\r\n  encapsulation: ViewEncapsulation.None,\r\n  // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.\r\n  // tslint:disable-next-line:validate-decorators\r\n  changeDetection: ChangeDetectionStrategy.Default,\r\n  animations: [sdsDialogAnimations.dialogContainer],\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {\r\n    'class': 'sds-dialog__container',\r\n    '[class.sds-dialog--alert]': '_config.alert',\r\n    '[class.sds-dialog--alert-error]':'_config.alert === \"error\"',\r\n    '[class.sds-dialog--alert-warning]':'_config.alert === \"warning\"',\r\n    '[class.sds-dialog--alert-info]':'_config.alert === \"info\"',\r\n    'tabindex': '-1',\r\n    'aria-modal': 'true',\r\n    '[attr.id]': '_id',\r\n    '[attr.role]': '_config.role',\r\n    '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',\r\n    '[attr.aria-label]': '_config.ariaLabel',\r\n    '[attr.aria-describedby]': '_config.ariaDescribedBy || null',\r\n    '[@dialogContainer]': '_state',\r\n    '(@dialogContainer.start)': '_onAnimationStart($event)',\r\n    '(@dialogContainer.done)': '_onAnimationDone($event)',\r\n  },\r\n})\r\nexport class SdsDialogContainerComponent extends BasePortalOutlet {\r\n  /** The portal outlet inside of this container into which the dialog content will be loaded. */\r\n  @ViewChild(CdkPortalOutlet) _portalOutlet: CdkPortalOutlet;\r\n\r\n  /** The class that traps and manages focus within the dialog. */\r\n  private _focusTrap: FocusTrap;\r\n\r\n  /** Element that was focused before the dialog was opened. Save this to restore upon close. */\r\n  private _elementFocusedBeforeDialogWasOpened: HTMLElement | null = null;\r\n\r\n  /** State of the dialog animation. */\r\n  _state: 'void' | 'enter' | 'exit' = 'enter';\r\n\r\n  /** Emits when an animation state changes. */\r\n  _animationStateChanged = new EventEmitter<AnimationEvent>();\r\n\r\n  /** ID of the element that should be considered as the dialog's label. */\r\n  _ariaLabelledBy: string | null = null;\r\n\r\n  /** ID for the container DOM element. */\r\n  _id: string;\r\n\r\n  constructor(\r\n    private _elementRef: ElementRef,\r\n    private _focusTrapFactory: FocusTrapFactory,\r\n    private _changeDetectorRef: ChangeDetectorRef,\r\n    @Optional() @Inject(DOCUMENT) private _document: any,\r\n    /** The dialog configuration. */\r\n    public _config: SdsDialogConfig) {\r\n\r\n    super();\r\n  }\r\n\r\n  /**\r\n   * Attach a ComponentPortal as content to this dialog container.\r\n   * @param portal Portal to be attached as the dialog content.\r\n   */\r\n  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {\r\n    if (this._portalOutlet.hasAttached()) {\r\n      throwSdsDialogContentAlreadyAttachedError();\r\n    }\r\n\r\n    this._savePreviouslyFocusedElement();\r\n    return this._portalOutlet.attachComponentPortal(portal);\r\n  }\r\n\r\n  /**\r\n   * Attach a TemplatePortal as content to this dialog container.\r\n   * @param portal Portal to be attached as the dialog content.\r\n   */\r\n  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {\r\n    if (this._portalOutlet.hasAttached()) {\r\n      throwSdsDialogContentAlreadyAttachedError();\r\n    }\r\n\r\n    this._savePreviouslyFocusedElement();\r\n    return this._portalOutlet.attachTemplatePortal(portal);\r\n  }\r\n\r\n  /** Moves the focus inside the focus trap. */\r\n  private _trapFocus() {\r\n    if (!this._focusTrap) {\r\n      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);\r\n    }\r\n\r\n    // If were to attempt to focus immediately, then the content of the dialog would not yet be\r\n    // ready in instances where change detection has to run first. To deal with this, we simply\r\n    // wait for the microtask queue to be empty.\r\n    if (this._config.autoFocus) {\r\n      this._focusTrap.focusInitialElementWhenReady();\r\n    }\r\n  }\r\n\r\n  /** Restores focus to the element that was focused before the dialog opened. */\r\n  private _restoreFocus() {\r\n    const toFocus = this._elementFocusedBeforeDialogWasOpened;\r\n\r\n    // We need the extra check, because IE can set the `activeElement` to null in some cases.\r\n    if (this._config.restoreFocus && toFocus && typeof toFocus.focus === 'function') {\r\n      toFocus.focus();\r\n    }\r\n\r\n    if (this._focusTrap) {\r\n      this._focusTrap.destroy();\r\n    }\r\n  }\r\n\r\n  /** Saves a reference to the element that was focused before the dialog was opened. */\r\n  private _savePreviouslyFocusedElement() {\r\n    if (this._document) {\r\n      this._elementFocusedBeforeDialogWasOpened = this._document.activeElement as HTMLElement;\r\n\r\n      // Note that there is no focus method when rendering on the server.\r\n      if (this._elementRef.nativeElement.focus) {\r\n        // Move focus onto the dialog immediately in order to prevent the user from accidentally\r\n        // opening multiple dialogs at the same time. Needs to be async, because the element\r\n        // may not be focusable immediately.\r\n        Promise.resolve().then(() => this._elementRef.nativeElement.focus());\r\n      }\r\n    }\r\n  }\r\n\r\n  /** Callback, invoked whenever an animation on the host completes. */\r\n  _onAnimationDone(event: AnimationEvent) {\r\n    if (event.toState === 'enter') {\r\n      this._trapFocus();\r\n    } else if (event.toState === 'exit') {\r\n      this._restoreFocus();\r\n    }\r\n\r\n    this._animationStateChanged.emit(event);\r\n  }\r\n\r\n  /** Callback, invoked when an animation on the host starts. */\r\n  _onAnimationStart(event: AnimationEvent) {\r\n    this._animationStateChanged.emit(event);\r\n  }\r\n\r\n  /** Starts the dialog exit animation. */\r\n  _startExitAnimation(): void {\r\n    this._state = 'exit';\r\n\r\n    // Mark the container for check so it can react if the\r\n    // view container is using OnPush change detection.\r\n    this._changeDetectorRef.markForCheck();\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "jsdoctags": [
                {
                    "pos": 993,
                    "end": 998,
                    "flags": 0,
                    "kind": 288,
                    "atToken": {
                        "pos": 993,
                        "end": 994,
                        "flags": 0,
                        "kind": 57
                    },
                    "tagName": {
                        "pos": 994,
                        "end": 998,
                        "flags": 0,
                        "escapedText": "docs"
                    },
                    "comment": "-private"
                }
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef"
                    },
                    {
                        "name": "_focusTrapFactory",
                        "type": "FocusTrapFactory"
                    },
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef"
                    },
                    {
                        "name": "_document",
                        "type": "any"
                    },
                    {
                        "name": "_config",
                        "type": "SdsDialogConfig"
                    }
                ],
                "line": 87,
                "jsdoctags": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_focusTrapFactory",
                        "type": "FocusTrapFactory",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_document",
                        "type": "any",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_config",
                        "type": "SdsDialogConfig",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "extends": "BasePortalOutlet",
            "templateData": "<button *ngIf=\"_config.displayCloseBtn\" sds-dialog-close class=\"close-btn\">\r\n  <fa-icon [icon]=\"['fas', 'times']\"></fa-icon>\r\n</button>\r\n\r\n<!-- Alert Icons -->\r\n<div *ngIf=\"_config.alert\" [ngSwitch]=\"_config.alert\" class=\"sds-dialog-icon\">\r\n  <fa-icon *ngSwitchCase=\"'error'\" [icon]=\"['fas', 'ban']\" size=\"3x\"></fa-icon>\r\n  <fa-icon\r\n    *ngSwitchCase=\"'warning'\"\r\n    [icon]=\"['fas', 'exclamation-triangle']\"\r\n    size=\"3x\"\r\n  ></fa-icon>\r\n  <fa-icon\r\n    *ngSwitchCase=\"'info'\"\r\n    [icon]=\"['fas', 'info-circle']\"\r\n    size=\"3x\"\r\n  ></fa-icon>\r\n  <div *ngSwitchDefault>\r\n    Alert <em>{{ _config.alert }}</em> is not valid\r\n  </div>\r\n</div>\r\n\r\n<ng-template cdkPortalOutlet></ng-template>\r\n"
        },
        {
            "name": "SdsIconComponent",
            "id": "component-SdsIconComponent-6d0da775c5045c00c58ea67e20b71425",
            "file": "libs/packages/components/src/lib/icon/icon.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-icon",
            "styleUrls": [
                "./icon.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./icon.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "icon",
                    "line": 11,
                    "type": ""
                },
                {
                    "name": "rotate",
                    "defaultValue": "0",
                    "line": 18,
                    "type": "number"
                },
                {
                    "name": "size",
                    "defaultValue": "'lg'",
                    "line": 19,
                    "type": "string"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "iconToFind",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 22
                },
                {
                    "name": "library",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 21
                }
            ],
            "methodsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input, OnInit } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'sds-icon',\r\n  templateUrl: './icon.component.html',\r\n  styleUrls: ['./icon.component.scss']\r\n})\r\nexport class SdsIconComponent {\r\n\r\n  @Input()\r\n  set icon(iconToShow: Array<string>){\r\n    if(iconToShow.length !== 2){\r\n      return\r\n    }\r\n    this.library = iconToShow[0];\r\n    this.iconToFind = iconToShow[1];\r\n  };\r\n  @Input() rotate: number = 0;\r\n  @Input() size: string = 'lg';\r\n\r\n  library: string;\r\n  iconToFind: string;\r\n\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "$rotation-values: 90 180 270;\r\n\r\n@each $item in $rotation-values {\r\n  i-bs.rotate-#{$item} ::ng-deep{\r\n    svg{\r\n      transform: rotate($item * 1deg);\r\n    }\r\n  }\r\n}\r\n\r\ni-bs.size-xs{\r\n  font-size: .75em;\r\n}\r\ni-bs.size-sm{\r\n  font-size: .875em;\r\n}\r\ni-bs.size-lg{\r\n  font-size: 1.33em;\r\n}\r\ni-bs.size-2x{\r\n  font-size: 2em;\r\n}\r\ni-bs.size-3x{\r\n  font-size: 3em;\r\n}\r\ni-bs.size-4x{\r\n  font-size: 4em;\r\n}\r\ni-bs.size-5x{\r\n  font-size: 5em;\r\n}\r\ni-bs.size-6x{\r\n  font-size: 6em;\r\n}\r\ni-bs.size-7x{\r\n  font-size: 7em;\r\n}\r\ni-bs.size-8x{\r\n  font-size: 8em;\r\n}\r\ni-bs.size-9x{\r\n  font-size: 9em;\r\n}\r\ni-bs.size-10x{\r\n  font-size: 10em;\r\n}\r\n",
                    "styleUrl": "./icon.component.scss"
                }
            ],
            "stylesData": "",
            "accessors": {
                "icon": {
                    "name": "icon",
                    "setSignature": {
                        "name": "icon",
                        "type": "void",
                        "args": [
                            {
                                "name": "iconToShow",
                                "type": ""
                            }
                        ],
                        "returnType": "void",
                        "line": 11,
                        "jsdoctags": [
                            {
                                "name": "iconToShow",
                                "type": "",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                }
            },
            "templateData": "<ng-container *ngIf=\"library === 'bs'\">\r\n  <i-bs name={{iconToFind}} class=\"rotate-{{rotate}} size-{{size}}\" aria-hidden=true role=\"img\"></i-bs>\r\n</ng-container>\r\n<ng-container *ngIf=\"library === 'sds'\">\r\n  <fa-icon [icon]=\"['sds', iconToFind]\" size=\"{{size}}\" rotate=\"{{rotate}}\"></fa-icon>\r\n</ng-container>\r\n"
        },
        {
            "name": "SdsMenuComponent",
            "id": "component-SdsMenuComponent-7d2664220b4195c4461326237a57e000",
            "file": "libs/packages/components/src/lib/menu/menu.component.ts",
            "changeDetection": "ChangeDetectionStrategy.OnPush",
            "encapsulation": [
                "ViewEncapsulation.None"
            ],
            "entryComponents": [],
            "exportAs": "sdsMenu",
            "inputs": [],
            "outputs": [],
            "providers": [
                {
                    "name": "{ provide: SDS_MENU_TOKEN, useExisting: SdsMenuComponent }",
                    "type": "component"
                }
            ],
            "selector": "sds-menu",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "menu.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "class",
                    "description": "<p>Transfer classes from the sds-menu to the overlay container </p>\n",
                    "line": 143,
                    "type": "string"
                },
                {
                    "name": "overlapTrigger",
                    "description": "<p>Whether menu panel overlaps trigger element </p>\n",
                    "line": 133,
                    "type": "boolean"
                },
                {
                    "name": "size",
                    "description": "<p>Size of menu component.\nAffects the font-size of the menu items and\nthe size of the close button in the menu header</p>\n",
                    "line": 109,
                    "type": "MenuSizes"
                },
                {
                    "name": "xPosition",
                    "description": "<p>Position of the menu in the X axis. </p>\n",
                    "line": 113,
                    "type": "MenuPositionX"
                },
                {
                    "name": "yPosition",
                    "description": "<p>Position of the menu in the Y axis. </p>\n",
                    "line": 123,
                    "type": "MenuPositionY"
                }
            ],
            "outputsClass": [
                {
                    "name": "closed",
                    "defaultValue": "new EventEmitter<void | 'click' | 'keydown' | 'tab'>()",
                    "description": "<p>Event emitted when the menu is closed. </p>\n",
                    "line": 166,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "_classList",
                    "defaultValue": "{}",
                    "type": "literal type",
                    "optional": false,
                    "description": "<p>Config object to be passed into the menu&#39;s ngClass </p>\n",
                    "line": 96
                },
                {
                    "name": "_items",
                    "defaultValue": "[]",
                    "type": "SdsMenuItemComponent[]",
                    "optional": false,
                    "description": "<p>Menu items inside the current menu. </p>\n",
                    "line": 87,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_keyManager",
                    "type": "FocusKeyManager<SdsMenuItemComponent>",
                    "optional": false,
                    "description": "<p>Manage browser focus </p>\n",
                    "line": 84,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_overlapTrigger",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 139,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_panelAnimationState",
                    "defaultValue": "'void'",
                    "type": "\"void\" | \"enter\"",
                    "optional": false,
                    "description": "<p>Current state of the panel animation. </p>\n",
                    "line": 99
                },
                {
                    "name": "_previousPanelClass",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Stores <sds-menu> classes </p>\n",
                    "line": 93,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_tabSubscription",
                    "defaultValue": "Subscription.EMPTY",
                    "type": "",
                    "optional": false,
                    "description": "<p>Subscription to tab events on the menu panel </p>\n",
                    "line": 90,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_xPosition",
                    "defaultValue": "'after'",
                    "type": "MenuPositionX",
                    "optional": false,
                    "description": "<p>After | Before the menu triger element </p>\n",
                    "line": 78,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_yPosition",
                    "defaultValue": "'below'",
                    "type": "MenuPositionY",
                    "optional": false,
                    "description": "<p>Above | Below the menu triger element </p>\n",
                    "line": 81,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "templateRef",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Grab the component template </p>\n",
                    "line": 102,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "TemplateRef"
                        }
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "_handleKeydown",
                    "args": [
                        {
                            "name": "event",
                            "type": "KeyboardEvent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 228,
                    "description": "<p>Handle a keyboard event from the menu </p>\n",
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "KeyboardEvent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_onAnimationDone",
                    "args": [
                        {
                            "name": "event",
                            "type": "AnimationEvent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 261,
                    "description": "<p>Callback that is invoked when the panel animation completes. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "AnimationEvent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_onAnimationStart",
                    "args": [
                        {
                            "name": "event",
                            "type": "AnimationEvent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 268,
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "AnimationEvent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_resetAnimation",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 264,
                    "description": "<p>Resets the panel animation to its initial state. </p>\n"
                },
                {
                    "name": "_startAnimation",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 256,
                    "description": "<p>Starts the enter animation. </p>\n"
                },
                {
                    "name": "addItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "SdsMenuItemComponent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 206,
                    "description": "<p>Adds a menu item with the menu. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "item",
                            "type": "SdsMenuItemComponent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "focusFirstItem",
                    "args": [
                        {
                            "name": "origin",
                            "type": "FocusOrigin",
                            "defaultValue": "'program'"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 189,
                    "description": "<p>Focus the first item in the menu </p>\n",
                    "jsdoctags": [
                        {
                            "name": "origin",
                            "type": "FocusOrigin",
                            "defaultValue": "'program'",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "insertItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "SdsMenuItemComponent"
                        },
                        {
                            "name": "index",
                            "type": "number"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 213,
                    "description": "<p>Inserts a menu item at an index </p>\n",
                    "jsdoctags": [
                        {
                            "name": "item",
                            "type": "SdsMenuItemComponent",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "index",
                            "type": "number",
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
                    "line": 174
                },
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 183
                },
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 170
                },
                {
                    "name": "removeItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "SdsMenuItemComponent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 220,
                    "description": "<p>Removes an item from the menu. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "item",
                            "type": "SdsMenuItemComponent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "setPositionClasses",
                    "args": [
                        {
                            "name": "posX",
                            "type": "MenuPositionX",
                            "defaultValue": "this.xPosition"
                        },
                        {
                            "name": "posY",
                            "type": "MenuPositionY",
                            "defaultValue": "this.yPosition"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 194,
                    "description": "<p>Adds classes to the menu panel based on its position </p>\n",
                    "jsdoctags": [
                        {
                            "name": "posX",
                            "type": "MenuPositionX",
                            "defaultValue": "this.xPosition",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "posY",
                            "type": "MenuPositionY",
                            "defaultValue": "this.yPosition",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\r\n  AfterContentInit,\r\n  ChangeDetectionStrategy,\r\n  Component,\r\n  ElementRef,\r\n  EventEmitter,\r\n  InjectionToken,\r\n  Input,\r\n  OnDestroy,\r\n  Output,\r\n  TemplateRef,\r\n  ViewChild,\r\n  ViewEncapsulation,\r\n  OnInit\r\n} from '@angular/core';\r\nimport { AnimationEvent } from '@angular/animations';\r\nimport {\r\n  ESCAPE,\r\n  DOWN_ARROW,\r\n  UP_ARROW,\r\n  HOME,\r\n  END,\r\n  hasModifierKey\r\n} from '@angular/cdk/keycodes';\r\nimport { FocusKeyManager, FocusOrigin } from '@angular/cdk/a11y';\r\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\r\nimport { Subscription } from 'rxjs';\r\nimport { sdsMenuAnimations } from './menu-animations';\r\nimport { SdsMenuItemComponent } from './menu-item.component';\r\n\r\n/** Menu Positions */\r\nexport type MenuPositionX = 'before' | 'after';\r\nexport type MenuPositionY = 'above' | 'below';\r\n\r\n/** Menu available sizes */\r\n// sm = 'small'\r\nexport type MenuSizes = 'sm';\r\n\r\n/** Injection token used to provide the parent menu to menu items. */\r\nexport const SDS_MENU_TOKEN = new InjectionToken<SdsMenuInterface>(\r\n  'SDS_MENU_TOKEN'\r\n);\r\n\r\n/** Menu Interface */\r\nexport interface SdsMenuInterface<T = any> {\r\n  xPosition: MenuPositionX;\r\n  yPosition: MenuPositionY;\r\n  overlapTrigger: boolean;\r\n  templateRef: TemplateRef<any>;\r\n  closed: EventEmitter<void | 'click' | 'keydown' | 'tab'>;\r\n  parentMenu?: SdsMenuInterface;\r\n  size?: MenuSizes;\r\n  focusFirstItem: (origin?: FocusOrigin) => void;\r\n  setPositionClasses?: (x: MenuPositionX, y: MenuPositionY) => void;\r\n  addItem?: (item: T) => void;\r\n  insertItem?: (item: T, index: number) => void;\r\n  removeItem?: (item: T) => void;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-menu',\r\n  exportAs: 'sdsMenu',\r\n  templateUrl: 'menu.component.html',\r\n  changeDetection: ChangeDetectionStrategy.OnPush,\r\n  encapsulation: ViewEncapsulation.None,\r\n  animations: [sdsMenuAnimations.transformMenu],\r\n  providers: [\r\n    { provide: SDS_MENU_TOKEN, useExisting: SdsMenuComponent }\r\n  ]\r\n})\r\nexport class SdsMenuComponent\r\n  implements\r\n    OnInit,\r\n    AfterContentInit,\r\n    OnDestroy,\r\n    SdsMenuInterface<SdsMenuItemComponent> {\r\n  /** After | Before the menu triger element */\r\n  private _xPosition: MenuPositionX = 'after';\r\n\r\n  /** Above | Below the menu triger element */\r\n  private _yPosition: MenuPositionY = 'below';\r\n\r\n  /** Manage browser focus */\r\n  private _keyManager: FocusKeyManager<SdsMenuItemComponent>;\r\n\r\n  /** Menu items inside the current menu. */\r\n  private _items: SdsMenuItemComponent[] = [];\r\n\r\n  /** Subscription to tab events on the menu panel */\r\n  private _tabSubscription = Subscription.EMPTY;\r\n\r\n  /** Stores <sds-menu> classes */\r\n  private _previousPanelClass: string;\r\n\r\n  /** Config object to be passed into the menu's ngClass */\r\n  _classList: { [key: string]: boolean } = {};\r\n\r\n  /** Current state of the panel animation. */\r\n  _panelAnimationState: 'void' | 'enter' = 'void';\r\n\r\n  /** Grab the component template */\r\n  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;\r\n\r\n  /**\r\n   * Size of menu component.\r\n   * Affects the font-size of the menu items and\r\n   * the size of the close button in the menu header\r\n   */\r\n  @Input() size: MenuSizes;\r\n\r\n  /** Position of the menu in the X axis. */\r\n  @Input()\r\n  get xPosition(): MenuPositionX {\r\n    return this._xPosition;\r\n  }\r\n  set xPosition(value: MenuPositionX) {\r\n    this._xPosition = value;\r\n    this.setPositionClasses();\r\n  }\r\n\r\n  /** Position of the menu in the Y axis. */\r\n  @Input()\r\n  get yPosition(): MenuPositionY {\r\n    return this._yPosition;\r\n  }\r\n  set yPosition(value: MenuPositionY) {\r\n    this._yPosition = value;\r\n    this.setPositionClasses();\r\n  }\r\n\r\n  /** Whether menu panel overlaps trigger element */\r\n  @Input()\r\n  get overlapTrigger(): boolean {\r\n    return this._overlapTrigger;\r\n  }\r\n  set overlapTrigger(value: boolean) {\r\n    this._overlapTrigger = coerceBooleanProperty(value);\r\n  }\r\n  private _overlapTrigger = false;\r\n\r\n  /** Transfer classes from the sds-menu to the overlay container */\r\n  @Input('class')\r\n  set panelClass(classes: string) {\r\n    const previousPanelClass = this._previousPanelClass;\r\n    // Remove previous classes from current set of classes\r\n    if (previousPanelClass && previousPanelClass.length) {\r\n      previousPanelClass.split(' ').forEach((className: string) => {\r\n        this._classList[className] = false;\r\n      });\r\n    }\r\n\r\n    this._previousPanelClass = classes;\r\n\r\n    // Adds new classes to current set of classes\r\n    if (classes && classes.length) {\r\n      classes.split(' ').forEach((className: string) => {\r\n        this._classList[className] = true;\r\n      });\r\n\r\n      // Remove all classes from <sds-menu>\r\n      this._elementRef.nativeElement.className = '';\r\n    }\r\n  }\r\n\r\n  /** Event emitted when the menu is closed. */\r\n  @Output() closed = new EventEmitter<void | 'click' | 'keydown' | 'tab'>();\r\n\r\n  constructor(private _elementRef: ElementRef<HTMLElement>) {}\r\n\r\n  ngOnInit() {\r\n    this.setPositionClasses();\r\n  }\r\n\r\n  ngAfterContentInit() {\r\n    this._keyManager = new FocusKeyManager<SdsMenuItemComponent>(\r\n      this._items\r\n    ).withWrap();\r\n    this._tabSubscription = this._keyManager.tabOut.subscribe(() =>\r\n      this.closed.emit('tab')\r\n    );\r\n  }\r\n\r\n  ngOnDestroy() {\r\n    this._tabSubscription.unsubscribe();\r\n    this.closed.complete();\r\n  }\r\n\r\n  /** Focus the first item in the menu */\r\n  focusFirstItem(origin: FocusOrigin = 'program'): void {\r\n    this._keyManager.setFocusOrigin(origin).setFirstItemActive();\r\n  }\r\n\r\n  /** Adds classes to the menu panel based on its position */\r\n  setPositionClasses(\r\n    posX: MenuPositionX = this.xPosition,\r\n    posY: MenuPositionY = this.yPosition\r\n  ) {\r\n    const classes = this._classList;\r\n    classes['sds-menu-before'] = posX === 'before';\r\n    classes['sds-menu-after'] = posX === 'after';\r\n    classes['sds-menu-above'] = posY === 'above';\r\n    classes['sds-menu-below'] = posY === 'below';\r\n  }\r\n\r\n  /** Adds a menu item with the menu. */\r\n  addItem(item: SdsMenuItemComponent) {\r\n    if (this._items.indexOf(item) === -1) {\r\n      this._items.push(item);\r\n    }\r\n  }\r\n\r\n  /** Inserts a menu item at an index */\r\n  insertItem(item: SdsMenuItemComponent, index: number) {\r\n    if (this._items.indexOf(item) === -1 && index < this._items.length) {\r\n      this._items.splice(index, 0, item);\r\n    }\r\n  }\r\n\r\n  /** Removes an item from the menu. */\r\n  removeItem(item: SdsMenuItemComponent) {\r\n    const index = this._items.indexOf(item);\r\n    if (this._items.indexOf(item) > -1) {\r\n      this._items.splice(index, 1);\r\n    }\r\n  }\r\n\r\n  /** Handle a keyboard event from the menu */\r\n  _handleKeydown(event: KeyboardEvent) {\r\n    // tslint:disable-next-line: deprecation\r\n    const keyCode = event.keyCode;\r\n    const manager = this._keyManager;\r\n\r\n    switch (keyCode) {\r\n      case ESCAPE:\r\n        this.closed.emit('keydown');\r\n        break;\r\n      case HOME:\r\n      case END:\r\n        if (!hasModifierKey(event)) {\r\n          keyCode === HOME\r\n            ? manager.setFirstItemActive()\r\n            : manager.setLastItemActive();\r\n          event.preventDefault();\r\n        }\r\n        break;\r\n      default:\r\n        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {\r\n          manager.setFocusOrigin('keyboard');\r\n        }\r\n\r\n        manager.onKeydown(event);\r\n    }\r\n  }\r\n\r\n  /** Starts the enter animation. */\r\n  _startAnimation() {\r\n    this._panelAnimationState = 'enter';\r\n  }\r\n\r\n  /** Callback that is invoked when the panel animation completes. */\r\n  _onAnimationDone(event: AnimationEvent) {}\r\n\r\n  /** Resets the panel animation to its initial state. */\r\n  _resetAnimation() {\r\n    this._panelAnimationState = 'void';\r\n  }\r\n\r\n  _onAnimationStart(event: AnimationEvent) {\r\n    // Scroll the content element to the top as soon as the animation starts.\r\n    if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {\r\n      event.element.scrollTop = 0;\r\n    }\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>"
                    }
                ],
                "line": 166,
                "jsdoctags": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnInit",
                "AfterContentInit",
                "OnDestroy",
                "SdsMenuInterface"
            ],
            "accessors": {
                "xPosition": {
                    "name": "xPosition",
                    "setSignature": {
                        "name": "xPosition",
                        "type": "void",
                        "args": [
                            {
                                "name": "value",
                                "type": ""
                            }
                        ],
                        "returnType": "void",
                        "line": 116,
                        "jsdoctags": [
                            {
                                "name": "value",
                                "type": "",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                },
                "yPosition": {
                    "name": "yPosition",
                    "setSignature": {
                        "name": "yPosition",
                        "type": "void",
                        "args": [
                            {
                                "name": "value",
                                "type": ""
                            }
                        ],
                        "returnType": "void",
                        "line": 126,
                        "jsdoctags": [
                            {
                                "name": "value",
                                "type": "",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                },
                "overlapTrigger": {
                    "name": "overlapTrigger",
                    "setSignature": {
                        "name": "overlapTrigger",
                        "type": "void",
                        "args": [
                            {
                                "name": "value",
                                "type": "boolean"
                            }
                        ],
                        "returnType": "void",
                        "line": 136,
                        "jsdoctags": [
                            {
                                "name": "value",
                                "type": "boolean",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                },
                "panelClass": {
                    "name": "panelClass",
                    "setSignature": {
                        "name": "panelClass",
                        "type": "void",
                        "args": [
                            {
                                "name": "classes",
                                "type": "string"
                            }
                        ],
                        "returnType": "void",
                        "line": 143,
                        "description": "<p>Transfer classes from the sds-menu to the overlay container </p>\n",
                        "jsdoctags": [
                            {
                                "name": "classes",
                                "type": "string",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                }
            },
            "templateData": "<ng-template>\r\n  <div\r\n    class=\"sds-overlay minw-menu maxw-mobile radius-overlay\"\r\n    [ngClass]=\"_classList\"\r\n    (keydown)=\"_handleKeydown($event)\"\r\n    (click)=\"closed.emit('click')\"\r\n    [@transformMenu]=\"_panelAnimationState\"\r\n    (@transformMenu.start)=\"_onAnimationStart($event)\"\r\n    (@transformMenu.done)=\"_onAnimationDone($event)\"\r\n    tabindex=\"-1\"\r\n    role=\"menu\"\r\n  >\r\n    <div class=\"sds-menu\" [class.sds-menu--small]=\"size === 'sm'\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n"
        },
        {
            "name": "SdsMenuHeaderComponent",
            "id": "component-SdsMenuHeaderComponent-2c7b5bada45dcbc55288ff7005ed65a4",
            "file": "libs/packages/components/src/lib/menu/menu-header.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-menu-header",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "menu-header.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "hideClose",
                    "defaultValue": "false",
                    "line": 8
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
            "sourceCode": "import { Component, Input } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'sds-menu-header',\r\n  templateUrl: 'menu-header.component.html'\r\n})\r\nexport class SdsMenuHeaderComponent {\r\n  @Input() hideClose = false;\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "templateData": "<div class=\"sds-menu__header\">\r\n  <span class=\"sds-menu__header-title\"> <ng-content></ng-content> </span>\r\n  <button\r\n    *ngIf=\"!hideClose\"\r\n    aria-label=\"Close Menu\"\r\n    sds-menu-item\r\n    role=\"button\"\r\n  >\r\n  <sds-icon [icon]=\"['bs','x']\"></sds-icon>\r\n  </button>\r\n</div>\r\n"
        },
        {
            "name": "SdsMenuItemComponent",
            "id": "component-SdsMenuItemComponent-36d3d8ec01e9cb390007a9a38bab6a3b",
            "file": "libs/packages/components/src/lib/menu/menu-item.component.ts",
            "changeDetection": "ChangeDetectionStrategy.OnPush",
            "encapsulation": [
                "ViewEncapsulation.None"
            ],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "[sds-menu-item]",
            "styleUrls": [],
            "styles": [],
            "template": "<ng-content></ng-content>",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "disabled",
                    "description": "<p>Whether the menu item should be disabled </p>\n",
                    "line": 39
                },
                {
                    "name": "role",
                    "defaultValue": "'menuitem'",
                    "description": "<p>ARIA role for the menu item. </p>\n",
                    "line": 29,
                    "type": ""
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "_disabled",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "<p>Holds the disable status value </p>\n",
                    "line": 35,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "_getClass",
                    "args": [],
                    "optional": false,
                    "returnType": "string",
                    "typeParameters": [],
                    "line": 66,
                    "description": "<p>Get item class </p>\n"
                },
                {
                    "name": "focus",
                    "args": [
                        {
                            "name": "origin",
                            "type": "FocusOrigin",
                            "defaultValue": "'program'"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 75,
                    "description": "<p>Focuses the menu item. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "origin",
                            "type": "FocusOrigin",
                            "defaultValue": "'program'",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 80,
                    "description": "<p>Stop listening to focus changes and remove item from parent </p>\n"
                }
            ],
            "hostBindings": [
                {
                    "name": "attr.tabIndex",
                    "defaultValue": "this.disabled ? '-1' : '0'",
                    "description": "<p>Menu item tab index </p>\n",
                    "line": 32
                },
                {
                    "name": "class",
                    "defaultValue": "this._getClass()",
                    "description": "<p>Menu item class </p>\n",
                    "line": 26
                }
            ],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\r\n  Component,\r\n  ElementRef,\r\n  OnDestroy,\r\n  Inject,\r\n  Input,\r\n  HostBinding,\r\n  ChangeDetectionStrategy,\r\n  ViewEncapsulation,\r\n  Optional\r\n} from '@angular/core';\r\nimport { FocusableOption, FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';\r\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\r\nimport { SDS_MENU_TOKEN, SdsMenuInterface } from './menu.component';\r\nimport { SdsMenuHeaderComponent } from './menu-header.component';\r\n\r\n@Component({\r\n  // tslint:disable-next-line: component-selector\r\n  selector: '[sds-menu-item]',\r\n  template: '<ng-content></ng-content>',\r\n  changeDetection: ChangeDetectionStrategy.OnPush,\r\n  encapsulation: ViewEncapsulation.None\r\n})\r\nexport class SdsMenuItemComponent implements FocusableOption, OnDestroy {\r\n  /** Menu item class */\r\n  @HostBinding('class') class = this._getClass();\r\n\r\n  /** ARIA role for the menu item. */\r\n  @HostBinding('attr.role') @Input() role: 'menuitem' = 'menuitem';\r\n\r\n  /** Menu item tab index */\r\n  @HostBinding('attr.tabIndex') tabIndex = this.disabled ? '-1' : '0';\r\n\r\n  /** Holds the disable status value */\r\n  private _disabled = false;\r\n\r\n  /** Whether the menu item should be disabled */\r\n  @Input()\r\n  get disabled() {\r\n    return this._disabled;\r\n  }\r\n  set disabled(value: any) {\r\n    this._disabled = coerceBooleanProperty(value);\r\n  }\r\n\r\n  constructor(\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private _focusMonitor: FocusMonitor,\r\n    @Inject(SDS_MENU_TOKEN)\r\n    private _parentMenu: SdsMenuInterface<SdsMenuItemComponent>,\r\n    @Optional() private _parentMenuHeader: SdsMenuHeaderComponent\r\n  ) {\r\n    // Start listening to focus changes\r\n    _focusMonitor.monitor(this._elementRef, false);\r\n    // Add this menu item to its parent menu\r\n    // If item its inside a header\r\n    // add it as the first item in the list\r\n    if (_parentMenuHeader) {\r\n      _parentMenu.insertItem(this, 0);\r\n    } else {\r\n      _parentMenu.addItem(this);\r\n    }\r\n  }\r\n\r\n  /** Get item class */\r\n  _getClass(): string {\r\n    const headerButtonSmall =\r\n      this._parentMenu.size === 'sm' ? 'sds-button--small' : '';\r\n    return this._parentMenuHeader\r\n      ? `sds-button sds-button--circular ${headerButtonSmall}`\r\n      : 'sds-menu__item';\r\n  }\r\n\r\n  /** Focuses the menu item. */\r\n  focus(origin: FocusOrigin = 'program'): void {\r\n    this._focusMonitor.focusVia(this._elementRef.nativeElement, origin);\r\n  }\r\n\r\n  /** Stop listening to focus changes and remove item from parent */\r\n  ngOnDestroy() {\r\n    this._focusMonitor.stopMonitoring(this._elementRef);\r\n    this._parentMenu.removeItem(this);\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>"
                    },
                    {
                        "name": "_focusMonitor",
                        "type": "FocusMonitor"
                    },
                    {
                        "name": "_parentMenu",
                        "type": "SdsMenuInterface<SdsMenuItemComponent>"
                    },
                    {
                        "name": "_parentMenuHeader",
                        "type": "SdsMenuHeaderComponent"
                    }
                ],
                "line": 44,
                "jsdoctags": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_focusMonitor",
                        "type": "FocusMonitor",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_parentMenu",
                        "type": "SdsMenuInterface<SdsMenuItemComponent>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_parentMenuHeader",
                        "type": "SdsMenuHeaderComponent",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "FocusableOption",
                "OnDestroy"
            ],
            "accessors": {
                "disabled": {
                    "name": "disabled",
                    "setSignature": {
                        "name": "disabled",
                        "type": "void",
                        "args": [
                            {
                                "name": "value",
                                "type": "any"
                            }
                        ],
                        "returnType": "void",
                        "line": 42,
                        "jsdoctags": [
                            {
                                "name": "value",
                                "type": "any",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                }
            }
        },
        {
            "name": "SdsPageComponent",
            "id": "component-SdsPageComponent-c43ec39fbd6823c2b2880e76e6321d5e",
            "file": "libs/packages/components/src/lib/page/page.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-page",
            "styleUrls": [],
            "styles": [],
            "template": "<div class=\"grid-container\"><ng-content></ng-content></div>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 12
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, OnInit } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'sds-page',\r\n  template: `\r\n    <div class=\"grid-container\"><ng-content></ng-content></div>\r\n  `\r\n})\r\nexport class SdsPageComponent implements OnInit {\r\n  constructor() {}\r\n\r\n  ngOnInit() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-page-options',\r\n  template: `\r\n    <div class=\"grid-row position-relative\"><ng-content></ng-content></div>\r\n  `\r\n})\r\nexport class SdsPageOptionsComponent implements OnInit {\r\n  constructor() {}\r\n\r\n  ngOnInit() {}\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 9
            },
            "implements": [
                "OnInit"
            ]
        },
        {
            "name": "SdsPageOptionsComponent",
            "id": "component-SdsPageOptionsComponent-c43ec39fbd6823c2b2880e76e6321d5e",
            "file": "libs/packages/components/src/lib/page/page.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-page-options",
            "styleUrls": [],
            "styles": [],
            "template": "<div class=\"grid-row position-relative\"><ng-content></ng-content></div>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 24
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, OnInit } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'sds-page',\r\n  template: `\r\n    <div class=\"grid-container\"><ng-content></ng-content></div>\r\n  `\r\n})\r\nexport class SdsPageComponent implements OnInit {\r\n  constructor() {}\r\n\r\n  ngOnInit() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-page-options',\r\n  template: `\r\n    <div class=\"grid-row position-relative\"><ng-content></ng-content></div>\r\n  `\r\n})\r\nexport class SdsPageOptionsComponent implements OnInit {\r\n  constructor() {}\r\n\r\n  ngOnInit() {}\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 21
            },
            "implements": [
                "OnInit"
            ]
        },
        {
            "name": "SdsSearchComponent",
            "id": "component-SdsSearchComponent-008a7c5dda1c8473dafdd47171476133",
            "file": "libs/packages/components/src/lib/search/search.component.ts",
            "changeDetection": "ChangeDetectionStrategy.OnPush",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [
                {
                    "name": "{\n    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SdsSearchComponent), multi: true\n}",
                    "type": "component"
                }
            ],
            "selector": "sds-search",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "search.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "searchSettings",
                    "defaultValue": "new SearchSettings()",
                    "line": 42,
                    "type": "SearchSettings"
                }
            ],
            "outputsClass": [
                {
                    "name": "submit",
                    "defaultValue": "new EventEmitter(null)",
                    "line": 43,
                    "type": "EventEmitter<literal type>"
                }
            ],
            "propertiesClass": [
                {
                    "name": "_onChange",
                    "defaultValue": "() => {...}",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 50,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_onTouched",
                    "defaultValue": "() => {...}",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 51,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "buttonEl",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "",
                    "line": 40,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'buttonEl', {read: ElementRef}"
                        }
                    ]
                },
                {
                    "name": "inputEl",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "",
                    "line": 38,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'inputEl', {read: ElementRef}"
                        }
                    ]
                },
                {
                    "name": "inputState",
                    "defaultValue": "{\r\n    initial: { visible: undefined },\r\n    visible: undefined\r\n  }",
                    "type": "object",
                    "optional": false,
                    "description": "",
                    "line": 46
                },
                {
                    "name": "model",
                    "defaultValue": "{}",
                    "type": "any",
                    "optional": false,
                    "description": "",
                    "line": 45
                },
                {
                    "name": "selectEl",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "",
                    "line": 39,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'selectEl', {read: ElementRef}"
                        }
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "calculateInputWidth",
                    "args": [],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 144
                },
                {
                    "name": "focusChange",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 138
                },
                {
                    "name": "getClass",
                    "args": [],
                    "optional": false,
                    "returnType": "string",
                    "typeParameters": [],
                    "line": 154
                },
                {
                    "name": "handleClick",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 80,
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "hasDropdown",
                    "args": [],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 68
                },
                {
                    "name": "isInputVisible",
                    "args": [],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 114
                },
                {
                    "name": "ngAfterViewInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 59
                },
                {
                    "name": "registerOnChange",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 110,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "registerOnTouched",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 107,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "removeInputVisibleStyles",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 130
                },
                {
                    "name": "setInputVisibleStyles",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 120
                },
                {
                    "name": "writeValue",
                    "args": [
                        {
                            "name": "value",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 98,
                    "jsdoctags": [
                        {
                            "name": "value",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "writeValueToModel",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 90
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\r\n  Component,\r\n  ViewChild,\r\n  ElementRef,\r\n  Input,\r\n  AfterViewInit,\r\n  forwardRef,\r\n  ChangeDetectionStrategy,\r\n  ChangeDetectorRef, Output, EventEmitter\r\n} from '@angular/core';\r\nimport { FocusMonitor } from '@angular/cdk/a11y';\r\nimport { ViewportRuler } from '@angular/cdk/overlay';\r\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';\r\nexport class SearchSettings {\r\n  public placeholder = 'Search';\r\n  public size: string;\r\n  public inputClass: string;\r\n  public parentSelector: string;\r\n  public dropdown: any = {\r\n    placeholder: '-Select-',\r\n    options: [],\r\n    inverse: false\r\n  };\r\n}\r\n@Component({\r\n  selector: 'sds-search',\r\n  templateUrl: 'search.component.html',\r\n  providers: [\r\n    {\r\n      provide: NG_VALUE_ACCESSOR,\r\n      useExisting: forwardRef(() => SdsSearchComponent),\r\n      multi: true\r\n    }\r\n  ],\r\n  changeDetection: ChangeDetectionStrategy.OnPush\r\n})\r\nexport class SdsSearchComponent implements AfterViewInit, ControlValueAccessor {\r\n  @ViewChild('inputEl', { read: ElementRef }) inputEl: ElementRef;\r\n  @ViewChild('selectEl', { read: ElementRef }) selectEl: ElementRef;\r\n  @ViewChild('buttonEl', { read: ElementRef }) buttonEl: ElementRef;\r\n\r\n  @Input() searchSettings: SearchSettings = new SearchSettings();\r\n  @Output() submit: EventEmitter<{searchText: string}> = new EventEmitter(null);\r\n\r\n  model: any = {};\r\n  inputState = {\r\n    initial: { visible: undefined },\r\n    visible: undefined\r\n  };\r\n  private _onChange = (_: any) => {};\r\n  private _onTouched = () => {};\r\n\r\n  constructor(\r\n    private cd: ChangeDetectorRef,\r\n    private focusMonitor: FocusMonitor,\r\n    private viewportRuler: ViewportRuler\r\n  ) {}\r\n\r\n  ngAfterViewInit() {\r\n    this.inputState.initial.visible = this.isInputVisible();\r\n    this.inputState.visible = this.inputState.initial.visible;\r\n    this.viewportRuler.change(0).subscribe(() => {\r\n      this.inputState.initial.visible = this.isInputVisible();\r\n      this.inputState.visible = this.inputState.initial.visible;\r\n    });\r\n  }\r\n\r\n  hasDropdown() {\r\n    if (\r\n      this.searchSettings &&\r\n      this.searchSettings.dropdown &&\r\n      this.searchSettings.dropdown.options &&\r\n      this.searchSettings.dropdown.options.length\r\n    ) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n  handleClick(event) {\r\n    event.preventDefault();\r\n    if (!this.inputState.visible) {\r\n      this.setInputVisibleStyles();\r\n      this.focusMonitor.focusVia(this.inputEl, 'program');\r\n    } else if (this.inputEl || this.selectEl) {\r\n      this.submit.emit(this.model);\r\n    }\r\n  }\r\n\r\n  writeValueToModel() {\r\n    this.model.searchText = this.inputEl ? this.inputEl.nativeElement.value : '';\r\n    if (this.selectEl && this.selectEl.nativeElement.value) {\r\n      this.model.searchCategory = this.selectEl.nativeElement.value;\r\n    }\r\n    this._onChange(Object.assign({}, this.model));\r\n  }\r\n\r\n  writeValue(value: any) {\r\n    if (value && this.model !== value) {\r\n      this.model = value;\r\n      this.cd.markForCheck();\r\n    } else {\r\n      this.model = {};\r\n      this.cd.markForCheck();\r\n    }\r\n  }\r\n  registerOnTouched(fn: any) {\r\n    this._onTouched = fn;\r\n  }\r\n  registerOnChange(fn: any): void {\r\n    this._onChange = fn;\r\n  }\r\n\r\n  isInputVisible(): boolean {\r\n    return this.inputEl.nativeElement.getBoundingClientRect().width\r\n      ? true\r\n      : false;\r\n  }\r\n\r\n  setInputVisibleStyles() {\r\n\r\n    const inputWidth = this.calculateInputWidth();\r\n    this.inputEl.nativeElement.style.setProperty(\"display\", \"block\", \"important\");\r\n    this.inputEl.nativeElement.style.position = 'absolute';\r\n    this.inputEl.nativeElement.style.left = `-${inputWidth}px`;\r\n    this.inputEl.nativeElement.style.setProperty(\"width\", `${inputWidth}px`, \"important\");\r\n    this.inputState.visible = true;\r\n  }\r\n\r\n  removeInputVisibleStyles() {\r\n    this.inputEl.nativeElement.style.display = '';\r\n    this.inputEl.nativeElement.style.position = '';\r\n    this.inputEl.nativeElement.style.left = '';\r\n    this.inputEl.nativeElement.style.width = '';\r\n    this.inputState.visible = false;\r\n  }\r\n\r\n  focusChange() {\r\n    if (!this.inputState.initial.visible) {\r\n      this.removeInputVisibleStyles();\r\n    }\r\n  }\r\n\r\n  calculateInputWidth(): number {\r\n    const leftPadding = 20;\r\n    const buttonElement = this.buttonEl.nativeElement;\r\n    const inputElement = this.inputEl.nativeElement;\r\n    const rightPosition = buttonElement.getBoundingClientRect().left;\r\n    const leftPosition = this.searchSettings.parentSelector\r\n      ? inputElement.closest(this.searchSettings.parentSelector).getBoundingClientRect().left\r\n      : 0;\r\n    return Math.floor(rightPosition - leftPosition - leftPadding);\r\n  }\r\n  getClass() {\r\n    const cls =\r\n      this.searchSettings && this.searchSettings.size === 'large'\r\n        ? 'usa-search--big'\r\n        : 'usa-search--small';\r\n    return this.searchSettings.dropdown && this.searchSettings.dropdown.inverse\r\n      ? `${cls} sds-inverse`\r\n      : cls;\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "cd",
                        "type": "ChangeDetectorRef"
                    },
                    {
                        "name": "focusMonitor",
                        "type": "FocusMonitor"
                    },
                    {
                        "name": "viewportRuler",
                        "type": "ViewportRuler"
                    }
                ],
                "line": 51,
                "jsdoctags": [
                    {
                        "name": "cd",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "focusMonitor",
                        "type": "FocusMonitor",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "viewportRuler",
                        "type": "ViewportRuler",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "AfterViewInit",
                "ControlValueAccessor"
            ],
            "templateData": "<form class=\"usa-form usa-search\" [ngClass]=\"getClass()\" role=\"search\">\r\n  <label class=\"usa-sr-only\" for=\"options\">Dropdown label</label>\r\n  <select *ngIf=\"hasDropdown()\" [value]=\"model.searchCategory? model.searchCategory :''\" #selectEl name=\"search options\"\r\n    class=\"usa-select\" id=\"search-options\" (change)=\"writeValueToModel()\">\r\n    <option [value]=\"\"> {{searchSettings.dropdown.placeholder ? searchSettings.dropdown.placeholder : '-Select-'}}</option>\r\n    <ng-container *ngFor=\"let item of searchSettings.dropdown.options\">\r\n      <optgroup *ngIf=\"item.group\" label=\"{{item.label}}\">\r\n        <option *ngFor=\"let child of item.group\" [value]=\"child.value\" [selected]=\"model.searchCategory == child.value\"\r\n          [disabled]=\"child.disabled\">\r\n          {{ child.label }}\r\n        </option>\r\n      </optgroup>\r\n      <option *ngIf=\"!item.group\" [value]=\"item.value\" [selected]=\"model.searchCategory == item.value\" [disabled]=\"item.disabled\">{{\r\n        item.label }}</option>\r\n    </ng-container>\r\n  </select>\r\n  <ng-container *ngIf=\"(searchSettings.dropdown && searchSettings.dropdown.inverse); then inverseTemplate else inputTemplate\">\r\n  </ng-container>\r\n</form>\r\n\r\n<ng-template #inputTemplate>\r\n  <label class=\"usa-sr-only\" for=\"search-field\">Search</label>\r\n  <input #inputEl [value]=\"model.searchText? model.searchText :''\" [ngClass]=\"searchSettings?.inputClass\" id=\"search-field\" type=\"search\" class=\"usa-input\"\r\n    name=\"search\" [placeholder]=\"searchSettings.placeholder? searchSettings.placeholder : 'type here'\" (blur)=\"focusChange()\" (input)=\"writeValueToModel()\"/>\r\n  <button #buttonEl class=\"usa-button\" type=\"submit\"  (click)=\"handleClick($event)\">\r\n    <span class=\"usa-sr-only\">Search</span>\r\n  </button>\r\n</ng-template>\r\n<ng-template #inverseTemplate>\r\n  <div class=\"sds-inverse__search\">\r\n    <ng-container [ngTemplateOutlet]=\"inputTemplate\"></ng-container>\r\n  </div>\r\n</ng-template>\r\n"
        },
        {
            "name": "SdsSearchResultListComponent",
            "id": "component-SdsSearchResultListComponent-cf642f8d397e9b6a7f488d032e0f7845",
            "file": "libs/packages/components/src/lib/search-result-list/search-result-list.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-search-result-list",
            "styleUrls": [
                "./search-result-list.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./search-result-list.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "customResultsTemplate",
                    "description": "<p>Allow to insert a customized template for no results to use</p>\n",
                    "line": 20,
                    "type": "TemplateRef<any>"
                },
                {
                    "name": "divider",
                    "defaultValue": "true",
                    "description": "<p>Show divider between results</p>\n",
                    "line": 42
                },
                {
                    "name": "model",
                    "description": "<p>Model for search results</p>\n",
                    "line": 27
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "initialLoad",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 22
                },
                {
                    "name": "resultContentTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Child Template to be used to display the data for each item in the list of items</p>\n",
                    "line": 53,
                    "decorators": [
                        {
                            "name": "ContentChild",
                            "stringifiedArguments": "'resultContent'"
                        }
                    ]
                },
                {
                    "name": "updateModel",
                    "defaultValue": "new SearchModel()",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 16,
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "goBack",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 55
                },
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 46
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\r\n  Component,\r\n  Input,\r\n  ContentChild,\r\n  TemplateRef,\r\n  OnInit\r\n} from '@angular/core';\r\nimport { SearchModel } from './model/search-results.model';\r\nimport { Location } from '@angular/common';\r\n@Component({\r\n  selector: 'sds-search-result-list',\r\n  templateUrl: './search-result-list.component.html',\r\n  styleUrls: ['./search-result-list.component.scss']\r\n})\r\nexport class SdsSearchResultListComponent implements OnInit {\r\n  public updateModel = new SearchModel();\r\n  /**\r\n   * Allow to insert a customized template for no results to use\r\n   */\r\n  @Input() customResultsTemplate: TemplateRef<any>;\r\n\r\n  initialLoad = false;\r\n  /**\r\n   * Model for search results\r\n   */\r\n  @Input('model')\r\n  set model(value) {\r\n    if (Array.isArray(value)) {\r\n      this.initialLoad = false;\r\n\r\n      const items = value;\r\n      this.updateModel = new SearchModel();\r\n      this.updateModel.results = items;\r\n    } else {\r\n      this.updateModel = value;\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Show divider between results\r\n   */\r\n  @Input() divider = true;\r\n\r\n  constructor(private _location: Location) {}\r\n\r\n  ngOnInit() {\r\n    this.initialLoad = true;\r\n  }\r\n\r\n  /**\r\n   * Child Template to be used to display the data for each item in the list of items\r\n   */\r\n  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;\r\n\r\n  goBack() {\r\n    this._location.back();\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./search-result-list.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_location",
                        "type": "Location"
                    }
                ],
                "line": 42,
                "jsdoctags": [
                    {
                        "name": "_location",
                        "type": "Location",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnInit"
            ],
            "accessors": {
                "model": {
                    "name": "model",
                    "setSignature": {
                        "name": "model",
                        "type": "void",
                        "args": [
                            {
                                "name": "value",
                                "type": ""
                            }
                        ],
                        "returnType": "void",
                        "line": 27,
                        "description": "<p>Model for search results</p>\n",
                        "jsdoctags": [
                            {
                                "name": "value",
                                "type": "",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                }
            },
            "templateData": "<ng-container *ngIf=\"updateModel?.results?.length\">\r\n  <div *ngFor=\"let item of updateModel.results\">\r\n    <hr *ngIf=\"divider\" class=\"fine\" />\r\n    <ng-container *ngTemplateOutlet=\"resultContentTemplate,\r\n                   context: { $implicit: item }\"></ng-container>\r\n  </div>\r\n  <hr *ngIf=\"divider && updateModel?.results?.length\" class=\"fine\" />\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"(customResultsTemplate && !(updateModel?.results?.length))\"\r\n  [ngTemplateOutlet]=\"customResultsTemplate\" [ngTemplateOutletContext]=\"{$implicit:updateModel}\">\r\n</ng-container>\r\n\r\n<!-- <ng-container *ngIf=\"(!updateModel?.metadata?.messages && updateModel?.results?.length === 0)\">\r\n  <div class=\"sds-card sds-card--vertical sds-card--shadowed sds-card--bordered\">\r\n\r\n    This is initial template\r\n  </div>\r\n</ng-container> -->\r\n\r\n<ng-container *ngIf=\"!customResultsTemplate\">\r\n  <ng-container\r\n    *ngIf=\"(updateModel == null || (!updateModel?.metadata?.messages && updateModel?.results?.length === 0))\">\r\n    <ng-container *ngIf=\"!initialLoad\">\r\n      <div class=\"sds-card sds-card--vertical sds-card--shadowed sds-card--bordered\">\r\n        <div class=\"sds-card__header\">\r\n          <sds-icon [icon]=\"['bs', 'search']\" [size]=\"'5x'\"></sds-icon>\r\n        </div>\r\n        <div class=\"sds-card__body margin-2\">\r\n          <h1 class=\"sds-card__title\">No matches found</h1>\r\n          <p>We couldn't find a match for your search criteria.</p>\r\n          <p>Please try another search or go back to previous results.</p>\r\n          <div class=\"margin-top-3\">\r\n            <button class=\"usa-button usa-button--outline\" (click)=\"goBack()\">Go Back</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"initialLoad\">\r\n      <div class=\"sds-card sds-card--vertical sds-card--shadowed sds-card--bordered\">\r\n        <div class=\"sds-card__header\">\r\n          <sds-icon [icon]=\"['bs', 'arrow-left-circle-fill']\" [size]=\"'5x'\"></sds-icon>\r\n        </div>\r\n        <div class=\"sds-card__body margin-2\">\r\n          <h1 class=\"sds-card__title\">Select Criteria</h1>\r\n          <p>Choose your filters and run your report to begin.</p>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"updateModel?.metadata?.messages\">\r\n    <div *ngFor=\"let msg of updateModel.metadata.messages\"\r\n      class=\"sds-card sds-card--vertical sds-card--shadowed sds-card--bordered\" [ngClass]=\"msg.classes\">\r\n      <div class=\"sds-card__header\">\r\n        <sds-icon\r\n          [icon]=\"(msg.type ==='error') ?  ['sds', 'alert-error'] :( (msg.type ==='info') ? ['bs', 'info-circle'] :( (msg.type ==='initial') ? ['bs', 'arrow-left-circle-fill']: ['bs', 'search']))\"\r\n          [size]=\"'5x'\">\r\n        </sds-icon>\r\n      </div>\r\n      <div class=\"sds-card__body margin-2\">\r\n        <h1 class=\"sds-card__title\">{{msg.title}}</h1>\r\n        <p [innerHTML]=\"msg.message\"></p>\r\n        <div class=\"sds-card__buttons\">\r\n          <button *ngFor=\"let button of msg.buttons\" class=\"usa-button\"\r\n            [ngClass]=\"button.classes ? button.classes : 'usa-button--outline'\" (click)=\"button.action()\">\r\n            {{button.text}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</ng-container>\r\n"
        },
        {
            "name": "SDSSelectedResultComponent",
            "id": "component-SDSSelectedResultComponent-add30205df4acdbc677960c6be18f1a2",
            "file": "libs/packages/components/src/lib/selected-result/selected-result.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [
                {
                    "name": "SDS_SelectedResult_VALUE_ACCESSOR"
                }
            ],
            "selector": "sds-selected-result",
            "styleUrls": [
                "./selected-result.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./selected-result.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "configuration",
                    "description": "<p>Configuration for the Selected Results control </p>\n",
                    "line": 35,
                    "type": "SDSSelectedResultConfiguration"
                },
                {
                    "name": "disabled",
                    "line": 48,
                    "type": "boolean"
                },
                {
                    "name": "itemTemplate",
                    "description": "<p>Allow to insert a customized template for suggestions to use</p>\n",
                    "line": 23,
                    "type": "TemplateRef<any>"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "model",
                    "type": "SDSSelectedItemModel",
                    "optional": false,
                    "description": "<p>The data model that has the selected item</p>\n",
                    "line": 28,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "onTouchedCallback",
                    "defaultValue": "() => {...}",
                    "type": "function",
                    "optional": false,
                    "description": "<p>Stored Event for ControlValueAccessor</p>\n",
                    "line": 40,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "propogateChange",
                    "defaultValue": "() => {...}",
                    "type": "function",
                    "optional": false,
                    "description": "<p>Stored Event for ControlValueAccessor</p>\n",
                    "line": 45,
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "getObjectValue",
                    "args": [
                        {
                            "name": "object",
                            "type": "Object"
                        },
                        {
                            "name": "propertyFields",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "string",
                    "typeParameters": [],
                    "line": 86,
                    "description": "<p>Gets the string value from the specifed properties of an object</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2289,
                                "end": 2295,
                                "flags": 0,
                                "escapedText": "object"
                            },
                            "type": "Object",
                            "tagName": {
                                "pos": 2283,
                                "end": 2288,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 2310,
                                "end": 2324,
                                "flags": 0,
                                "escapedText": "propertyFields"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 2304,
                                "end": 2309,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>comma seperated list with periods depth of object</p>\n"
                        }
                    ]
                },
                {
                    "name": "registerOnChange",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 68,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "registerOnTouched",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 72,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "removeItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "object"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 54,
                    "description": "<p>Removes item from the model</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1552,
                                "end": 1556,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "object",
                            "tagName": {
                                "pos": 1546,
                                "end": 1551,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "setDisabledState",
                    "args": [
                        {
                            "name": "isDisabled",
                            "type": "boolean"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 76,
                    "jsdoctags": [
                        {
                            "name": "isDisabled",
                            "type": "boolean",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "writeValue",
                    "args": [
                        {
                            "name": "obj",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 62,
                    "jsdoctags": [
                        {
                            "name": "obj",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input, TemplateRef, forwardRef } from '@angular/core';\r\nimport { SDSSelectedItemModel } from './models/sds-selectedItem.model';\r\nimport { SDSSelectedResultConfiguration } from './models/SDSSelectedResultConfiguration';\r\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';\r\nimport { SDSSelectedItemModelHelper } from './models/sds-selected-item-model-helper';\r\nconst SDS_SelectedResult_VALUE_ACCESSOR: any = {\r\n  provide: NG_VALUE_ACCESSOR,\r\n  useExisting: forwardRef(() => SDSSelectedResultComponent),\r\n  multi: true\r\n};\r\n\r\n@Component({\r\n  selector: 'sds-selected-result',\r\n  templateUrl: './selected-result.component.html',\r\n  styleUrls: ['./selected-result.component.scss'],\r\n  providers: [SDS_SelectedResult_VALUE_ACCESSOR]\r\n})\r\nexport class SDSSelectedResultComponent implements ControlValueAccessor {\r\n\r\n  /**\r\n  * Allow to insert a customized template for suggestions to use\r\n  */\r\n  @Input() itemTemplate: TemplateRef<any>;\r\n\r\n  /**\r\n   * The data model that has the selected item\r\n   */\r\n  public model: SDSSelectedItemModel;\r\n\r\n\r\n  /**\r\n  * Configuration for the Selected Results control \r\n  */\r\n  @Input()\r\n  public configuration: SDSSelectedResultConfiguration;\r\n\r\n  /**\r\n   * Stored Event for ControlValueAccessor\r\n   */\r\n  public onTouchedCallback: () => void = () => null;\r\n\r\n  /**\r\n   * Stored Event for ControlValueAccessor\r\n   */\r\n  public propogateChange: (_: any) => void = (_: any) => null;\r\n\r\n  @Input()\r\n  public disabled: boolean;\r\n\r\n  /**\r\n   * Removes item from the model\r\n   * @param item \r\n   */\r\n  removeItem(item: object) {\r\n    if (!this.disabled) {\r\n      SDSSelectedItemModelHelper.removeItem(item, this.configuration.primaryKeyField, this.model);\r\n      this.propogateChange(this.model);\r\n      this.onTouchedCallback();\r\n    }\r\n  }\r\n\r\n  writeValue(obj: any): void {\r\n    if (obj instanceof SDSSelectedItemModel) {\r\n      this.model = obj as SDSSelectedItemModel;\r\n    }\r\n  }\r\n\r\n  registerOnChange(fn: any): void {\r\n    this.propogateChange = fn;\r\n  }\r\n\r\n  registerOnTouched(fn: any): void {\r\n    this.onTouchedCallback = fn;\r\n  }\r\n\r\n  setDisabledState(isDisabled: boolean): void {\r\n    this.disabled = isDisabled;\r\n  }\r\n\r\n\r\n  /**\r\n   * Gets the string value from the specifed properties of an object\r\n   * @param object \r\n   * @param propertyFields comma seperated list with periods depth of object\r\n   */\r\n  getObjectValue(object: Object, propertyFields: string): string {\r\n    let value = '';\r\n    let current = object;\r\n    let fieldSplit = propertyFields.split(',');\r\n    for (let i = 0; i < fieldSplit.length; i++) {\r\n      let fieldValue = fieldSplit[i];\r\n      let fieldPartSplit = fieldValue.split('.');\r\n      for (let j = 0; j < fieldPartSplit.length; j++) {\r\n        let fieldCheckValue = fieldPartSplit[j];\r\n        if (current) {\r\n          current = current[fieldCheckValue];\r\n        }\r\n      }\r\n\r\n      if (current) {\r\n        value += current.toString() + ' ';\r\n      }\r\n      current = object;\r\n    }\r\n    return value.trim();\r\n  }\r\n\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./selected-result.component.scss"
                }
            ],
            "stylesData": "",
            "implements": [
                "ControlValueAccessor"
            ],
            "templateData": "<ul\r\n  *ngIf=\"model\"\r\n  [attr.aria-label]=\"configuration.labelText + ' results'\"\r\n  class=\"usa-list usa-list--unstyled sds-autocomplete-selected\"\r\n  aria-relevant=\"additions\"\r\n  role=\"listbox\"\r\n  aria-live=\"polite\"\r\n>\r\n  <li role=\"option\" *ngFor=\"let result of model.items; let i = index\">\r\n    <div\r\n      class=\"sds-tag sds-tag--chip sds-tag--input\"\r\n      [ngClass]=\"disabled ? 'sds-tag--disabled' : ''\"\r\n    >\r\n      <ng-container\r\n        *ngIf=\"itemTemplate\"\r\n        [ngTemplateOutlet]=\"itemTemplate\"\r\n        [ngTemplateOutletContext]=\"{ $implicit: result }\"\r\n      >\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!itemTemplate\">\r\n        <div class=\"sds--tag__item\">\r\n          <div>\r\n            {{ getObjectValue(result, configuration.primaryTextField) }}\r\n          </div>\r\n          <div\r\n            *ngIf=\"\r\n              configuration.secondaryTextField &&\r\n              result[configuration.secondaryTextField]\r\n            \"\r\n          >\r\n            {{ result[configuration.secondaryTextField] }}\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <button\r\n        *ngIf=\"!disabled\"\r\n        [attr.aria-label]=\"\r\n          'Remove Item ' +\r\n          getObjectValue(result, configuration.primaryTextField)\r\n        \"\r\n        [class.text-base]=\"disabled\"\r\n        aria-hidden=\"false\"\r\n        class=\"sds-tag__close\"\r\n        (click)=\"removeItem(result)\"\r\n        (keyup.enter)=\"removeItem(result)\"\r\n      >\r\n        <fa-icon [icon]=\"['fas', 'times']\" size=\"sm\"></fa-icon>\r\n      </button>\r\n    </div>\r\n  </li>\r\n</ul>\r\n"
        },
        {
            "name": "SdsSelectionPanelComponent",
            "id": "component-SdsSelectionPanelComponent-c8815e118510d75fc5e35976998993c8",
            "file": "libs/packages/components/src/lib/selection-panel/selection-panel.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-selection-panel",
            "styleUrls": [
                "./selection-panel.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./selection-panel.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "currentSelection",
                    "line": 21,
                    "type": "NavigationLink"
                },
                {
                    "name": "model",
                    "line": 15,
                    "type": "SideNavigationModel"
                },
                {
                    "name": "navigateOnClick",
                    "defaultValue": "true",
                    "line": 19
                },
                {
                    "name": "title",
                    "line": 17,
                    "type": "string"
                }
            ],
            "outputsClass": [
                {
                    "name": "panelSelected",
                    "defaultValue": "new EventEmitter<NavigationLink>()",
                    "line": 23,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "isTopSection",
                    "defaultValue": "true",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 33
                },
                {
                    "name": "mainParentOfCurrentSelection",
                    "type": "NavigationLink",
                    "optional": false,
                    "description": "",
                    "line": 29
                },
                {
                    "name": "panelBody",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "",
                    "line": 12,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'panelBody'"
                        }
                    ]
                },
                {
                    "name": "panelExpanded",
                    "defaultValue": "true",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 31
                },
                {
                    "name": "panelItemsOnDisplay",
                    "type": "NavigationLink[]",
                    "optional": false,
                    "description": "",
                    "line": 26
                }
            ],
            "methodsClass": [
                {
                    "name": "ngOnChanges",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 62
                },
                {
                    "name": "onMainPanelHeaderClicked",
                    "args": [
                        {
                            "name": "$event",
                            "type": "MouseEvent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 72,
                    "jsdoctags": [
                        {
                            "name": "$event",
                            "type": "MouseEvent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "onPanelItemClick",
                    "args": [
                        {
                            "name": "panelItem",
                            "type": "NavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 40,
                    "jsdoctags": [
                        {
                            "name": "panelItem",
                            "type": "NavigationLink",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "updateSubheader",
                    "args": [
                        {
                            "name": "panelItem",
                            "type": "NavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 80,
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "panelItem",
                            "type": "NavigationLink",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';\r\nimport { ActivatedRoute, NavigationExtras, Router } from '@angular/router';\r\nimport { NavigationLink, SideNavigationModel } from '../side-navigation/model/side-navigation-model';\r\n\r\n@Component({\r\n  selector: 'sds-selection-panel',\r\n  templateUrl: './selection-panel.component.html',\r\n  styleUrls: ['./selection-panel.component.scss'],\r\n})\r\nexport class SdsSelectionPanelComponent implements OnChanges {\r\n\r\n  @ViewChild('panelBody') panelBody: ElementRef;\r\n\r\n  @Input()\r\n  model: SideNavigationModel;\r\n\r\n  @Input() title: string;\r\n  \r\n  @Input() navigateOnClick = true;\r\n\r\n  @Input() currentSelection: NavigationLink;\r\n\r\n  @Output() panelSelected = new EventEmitter<NavigationLink>();\r\n\r\n  // list of items currently shown to user\r\n  panelItemsOnDisplay: NavigationLink[];\r\n\r\n\r\n  mainParentOfCurrentSelection: NavigationLink;\r\n\r\n  panelExpanded = true;\r\n\r\n  isTopSection = true;\r\n\r\n  constructor(\r\n    private router: Router,\r\n    private activatedRoute: ActivatedRoute,\r\n  ) { }\r\n\r\n  onPanelItemClick(panelItem: NavigationLink) {\r\n    this.currentSelection = panelItem;\r\n    if (panelItem.children) {\r\n      this.panelItemsOnDisplay = panelItem.children;\r\n      this.isTopSection = false;\r\n      this.panelBody.nativeElement.focus();\r\n    }\r\n\r\n    this.updateSubheader(panelItem);\r\n\r\n    if (this.navigateOnClick) {\r\n      const navigationExtras: NavigationExtras = {\r\n        queryParams: panelItem.queryParams,\r\n        relativeTo: this.activatedRoute\r\n      }\r\n\r\n      this.router.navigate(['.'], navigationExtras);\r\n    }\r\n    \r\n    this.panelSelected.emit(panelItem);\r\n  }\r\n\r\n  ngOnChanges() {\r\n    if (this.model) {\r\n      this.panelItemsOnDisplay = this.model.navigationLinks;\r\n    }\r\n\r\n    if (this.model && this.currentSelection) {\r\n      this.updateSubheader(this.currentSelection);\r\n    }\r\n  }\r\n\r\n  onMainPanelHeaderClicked($event: MouseEvent) {\r\n    this.panelItemsOnDisplay = this.model.navigationLinks;\r\n    this.currentSelection = this.mainParentOfCurrentSelection;\r\n    this.isTopSection = true;\r\n\r\n    $event.stopPropagation(); // Stop collapsible card from closing\r\n  }\r\n\r\n  private updateSubheader(panelItem: NavigationLink) {\r\n    const parentLink = this.model.navigationLinks.find(link => link.id === panelItem.id);\r\n\r\n    if (parentLink != null) {\r\n      this.mainParentOfCurrentSelection = parentLink;\r\n    }\r\n\r\n  }\r\n\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./selection-panel.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "router",
                        "type": "Router"
                    },
                    {
                        "name": "activatedRoute",
                        "type": "ActivatedRoute"
                    }
                ],
                "line": 33,
                "jsdoctags": [
                    {
                        "name": "router",
                        "type": "Router",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "activatedRoute",
                        "type": "ActivatedRoute",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnChanges"
            ],
            "templateData": "<div class=\"sds-card sds-card--collapsible\" [ngClass]=\"{'sds-card--collapsed': !panelExpanded}\">\r\n  <div role=\"button\" class=\"sds-card__header sds-card__header--action\" [attr.aria-expanded]=\"panelExpanded\"\r\n    aria-controls=\"panelBody\" tabindex=\"0\" [attr.aria-label]=\"title\"\r\n    (click)=\"panelExpanded = !panelExpanded\"\r\n    (keyup.enter)=\"panelExpanded = !panelExpanded\"\r\n    >\r\n    <div class=\"sds-card__title\">{{title}}<br />\r\n      <span *ngIf=\"mainParentOfCurrentSelection\" \r\n        class=\"sds-card__subtitle\" role=\"button\" \r\n        (click)=\"onMainPanelHeaderClicked($event)\"\r\n        (keyup.enter)=\"onMainPanelHeaderClicked($event)\"\r\n        tabindex=\"0\"\r\n      >\r\n        {{mainParentOfCurrentSelection.text}}\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"sds-card__action sds-card__collapse\"></div>\r\n  </div>\r\n  <div class=\"sds-card__body sds-card__body--accent-cool\" id=\"panelBody\" #panelBody tabindex=\"-1\">\r\n    <ul class=\"usa-sidenav\" \r\n      [ngClass]=\"{'usa-sidenav--styled': isTopSection, 'sds-list sds-list--subdomain': !isTopSection}\">\r\n      <li *ngFor=\"let panelItem of panelItemsOnDisplay\" class=\"usa-sidenav__item\"\r\n        [ngClass]=\"{'usa-current': isTopSection && currentSelection && panelItem.id === currentSelection.id}\">\r\n        <a href=\"javascript:void(0);\" \r\n          [ngClass]=\"{\r\n            'text-secondary': !isTopSection && (!currentSelection || panelItem.id != currentSelection.id), \r\n            'usa-link usa-link--active': !isTopSection && currentSelection && panelItem.id === currentSelection.id\r\n          }\"\r\n          (click)=\"onPanelItemClick(panelItem)\">\r\n          {{panelItem.text}}</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>"
        },
        {
            "name": "SdsSideNavigationComponent",
            "id": "component-SdsSideNavigationComponent-07f61a6593e788b0c4912b3ca21ed5bf",
            "file": "libs/packages/components/src/lib/side-navigation/side-navigation.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-side-navigation",
            "styleUrls": [
                "./side-navigation.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./side-navigation.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "model",
                    "description": "<p>Model used for the different display portions of the side navigation</p>\n",
                    "line": 84,
                    "type": "SideNavigationModel"
                }
            ],
            "outputsClass": [
                {
                    "name": "linkEvent",
                    "defaultValue": "new EventEmitter<INavigationLink>()",
                    "description": "<p>event for event based</p>\n",
                    "line": 157,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "navigationHelper",
                    "defaultValue": "new NavigationHelper()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Navigation helper</p>\n",
                    "line": 79
                },
                {
                    "name": "sideNavEVENTLinkTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Reference to the the Template used for event response</p>\n",
                    "line": 47,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'sideNavEVENTLinkTemplate'"
                        }
                    ],
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "sideNavHREFLinkTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Reference to the the Template used for external href</p>\n",
                    "line": 41,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'sideNavHREFLinkTemplate'"
                        }
                    ],
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "sideNavLabelLinkTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Reference to the the Template used for side menu items that are a label</p>\n",
                    "line": 35,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'sideNavLabelLinkTemplate'"
                        }
                    ],
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "sideNavRouteLinkTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Reference to the the Template used for internal links</p>\n",
                    "line": 29,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'sideNavRouteLinkTemplate'"
                        }
                    ],
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "deselect",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 129,
                    "description": "<p>Deselects all the items in the side navigation model</p>\n"
                },
                {
                    "name": "deselectItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "NavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 142,
                    "description": "<p>checks if item is selected and if selcted will check children and will unselect</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "item",
                            "type": "NavigationLink",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "getItemTemplate",
                    "args": [
                        {
                            "name": "item",
                            "type": "NavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "TemplateRef<any>",
                    "typeParameters": [],
                    "line": 54,
                    "description": "<p>Takes the navigation item and returns the template to be used</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1385,
                                "end": 1389,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "NavigationLink",
                            "tagName": {
                                "pos": 1379,
                                "end": 1384,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>navigation item</p>\n"
                        }
                    ]
                },
                {
                    "name": "linkClickEvent",
                    "args": [
                        {
                            "name": "link",
                            "type": "INavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 162,
                    "description": "<p>Link clicked and emits the link data into an event</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4108,
                                "end": 4112,
                                "flags": 0,
                                "escapedText": "link"
                            },
                            "type": "INavigationLink",
                            "tagName": {
                                "pos": 4102,
                                "end": 4107,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "queryStringBuilder",
                    "args": [
                        {
                            "name": "item",
                            "type": "NavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 190,
                    "description": "<p>creates query string</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4748,
                                "end": 4752,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "NavigationLink",
                            "tagName": {
                                "pos": 4742,
                                "end": 4747,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "select",
                    "args": [
                        {
                            "name": "id",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 91,
                    "description": "<p>Selects new item and parents and deselects previous</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2326,
                                "end": 2328,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 2320,
                                "end": 2325,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "selectItem",
                    "args": [
                        {
                            "name": "id",
                            "type": "string"
                        },
                        {
                            "name": "item",
                            "type": "NavigationLink"
                        },
                        {
                            "name": "parent",
                            "type": "NavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 105,
                    "description": "<p>Selects item if matches passed in id and will select parent</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2640,
                                "end": 2642,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 2634,
                                "end": 2639,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 2656,
                                "end": 2660,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "NavigationLink",
                            "tagName": {
                                "pos": 2650,
                                "end": 2655,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 2674,
                                "end": 2680,
                                "flags": 0,
                                "escapedText": "parent"
                            },
                            "type": "NavigationLink",
                            "tagName": {
                                "pos": 2668,
                                "end": 2673,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "urlBuilder",
                    "args": [
                        {
                            "name": "item",
                            "type": "NavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 171,
                    "description": "<p>creates url from provided route and query params</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4296,
                                "end": 4300,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "NavigationLink",
                            "tagName": {
                                "pos": 4290,
                                "end": 4295,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\r\n  Component,\r\n  Input,\r\n  Output,\r\n  EventEmitter,\r\n  ViewChild,\r\n  TemplateRef\r\n} from '@angular/core';\r\nimport {\r\n  SideNavigationModel,\r\n  NavigationLink\r\n} from './model/side-navigation-model';\r\nimport {\r\n  INavigationLink,\r\n  NavigationMode\r\n} from '../common-navigation/common-navigation-model';\r\nimport { NavigationHelper } from '../common-navigation/navigation-helper';\r\n\r\n@Component({\r\n  selector: 'sds-side-navigation',\r\n  templateUrl: './side-navigation.component.html',\r\n  styleUrls: ['./side-navigation.component.scss']\r\n})\r\nexport class SdsSideNavigationComponent {\r\n  /**\r\n   * Reference to the the Template used for internal links\r\n   */\r\n  @ViewChild('sideNavRouteLinkTemplate')\r\n  private sideNavRouteLinkTemplate: TemplateRef<any>;\r\n\r\n  /**\r\n   * Reference to the the Template used for side menu items that are a label\r\n   */\r\n  @ViewChild('sideNavLabelLinkTemplate')\r\n  private sideNavLabelLinkTemplate: TemplateRef<any>;\r\n\r\n  /**\r\n   * Reference to the the Template used for external href\r\n   */\r\n  @ViewChild('sideNavHREFLinkTemplate')\r\n  private sideNavHREFLinkTemplate: TemplateRef<any>;\r\n\r\n  /**\r\n   * Reference to the the Template used for event response\r\n   */\r\n  @ViewChild('sideNavEVENTLinkTemplate')\r\n  private sideNavEVENTLinkTemplate: TemplateRef<any>;\r\n\r\n  /**\r\n   * Takes the navigation item and returns the template to be used\r\n   * @param item navigation item\r\n   */\r\n\r\n  getItemTemplate(item: NavigationLink): TemplateRef<any> {\r\n    let template = null;\r\n    switch (item.mode) {\r\n      case NavigationMode.EVENT:\r\n        template = this.sideNavEVENTLinkTemplate;\r\n        break;\r\n      case NavigationMode.EXTERNAL:\r\n        template = this.sideNavHREFLinkTemplate;\r\n        break;\r\n      case NavigationMode.INTERNAL:\r\n        template = this.sideNavRouteLinkTemplate;\r\n        break;\r\n      case NavigationMode.LABEL:\r\n        template = this.sideNavLabelLinkTemplate;\r\n        break;\r\n      default:\r\n        template = null;\r\n        break;\r\n    }\r\n    return template;\r\n  }\r\n\r\n  /**\r\n   * Navigation helper\r\n   */\r\n  navigationHelper = new NavigationHelper();\r\n\r\n  /**\r\n   * Model used for the different display portions of the side navigation\r\n   */\r\n  @Input() model: SideNavigationModel;\r\n\r\n  /**\r\n   * Selects new item and parents and deselects previous\r\n   * @param id\r\n   */\r\n\r\n  select(id: string) {\r\n    this.deselect();\r\n    for (let i = 0; i < this.model.navigationLinks.length; i++) {\r\n      let item = this.model.navigationLinks[i];\r\n      this.selectItem(id, item, null);\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Selects item if matches passed in id and will select parent\r\n   * @param id\r\n   * @param item\r\n   * @param parent\r\n   */\r\n  private selectItem(id: string, item: NavigationLink, parent: NavigationLink) {\r\n    if (item.id === id) {\r\n      item.selected = true;\r\n      if (parent) {\r\n        parent.selected = true;\r\n      }\r\n    } else {\r\n      if (item.children) {\r\n        for (let i = 0; i < item.children.length; i++) {\r\n          let childItem = item.children[i];\r\n          this.selectItem(id, childItem, item);\r\n        }\r\n        if (item.selected) {\r\n          if (parent) {\r\n            parent.selected = true;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Deselects all the items in the side navigation model\r\n   */\r\n  deselect() {\r\n    if (this.model) {\r\n      if (this.model.navigationLinks) {\r\n        for (let i = 0; i < this.model.navigationLinks.length; i++) {\r\n          this.deselectItem(this.model.navigationLinks[i]);\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  /**\r\n   * checks if item is selected and if selcted will check children and will unselect\r\n   */\r\n  private deselectItem(item: NavigationLink) {\r\n    if (item.selected) {\r\n      item.selected = false;\r\n      if (item.children) {\r\n        for (let i = 0; i < item.children.length; i++) {\r\n          this.deselectItem(item.children[i]);\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  /**\r\n   * event for event based\r\n   */\r\n  @Output()\r\n  linkEvent = new EventEmitter<INavigationLink>();\r\n  /**\r\n   * Link clicked and emits the link data into an event\r\n   * @param link\r\n   */\r\n  linkClickEvent(link: INavigationLink) {\r\n    this.linkEvent.emit(link);\r\n    return false;\r\n  }\r\n\r\n  /**\r\n   * creates url from provided route and query params\r\n   * @param item\r\n   */\r\n  urlBuilder(item: NavigationLink) {\r\n    let url = item.route;\r\n    let queryParams = this.queryStringBuilder(item);\r\n    if (queryParams) {\r\n      if (url.indexOf('?') === -1) {\r\n        url += '?' + queryParams;\r\n      } else if (url.indexOf('?') === url.length - 1) {\r\n        url += queryParams;\r\n      } else {\r\n        url += '&' + queryParams;\r\n      }\r\n    }\r\n    return url;\r\n  }\r\n\r\n  /**\r\n   * creates query string\r\n   * @param item\r\n   */\r\n  private queryStringBuilder(item: NavigationLink) {\r\n    const ret = [];\r\n    for (let d in item.queryParams) {\r\n      ret.push(\r\n        encodeURIComponent(d) + '=' + encodeURIComponent(item.queryParams[d])\r\n      );\r\n    }\r\n    return ret.join('&');\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./side-navigation.component.scss"
                }
            ],
            "stylesData": "",
            "templateData": "<nav>\r\n  <ul class=\"usa-sidenav\">\r\n    <li *ngFor=\"let link of model.navigationLinks\" class=\"sidenav__item\">\r\n      <ng-container [ngTemplateOutlet]=\"sideNavLinkTemplate\" [ngTemplateOutletContext]=\"{$implicit:link}\">\r\n      </ng-container>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n\r\n\r\n<ng-template #sideNavLinkTemplate let-link>\r\n  <ng-container [ngTemplateOutlet]=\"getItemTemplate(link)\" [ngTemplateOutletContext]=\"{$implicit:link}\">\r\n  </ng-container>\r\n  <ul *ngIf=\"link.children\" class=\"usa-sidenav__sublist\">\r\n    <li *ngFor=\"let link of link.children\" class=\"sidenav__item\">\r\n      <ng-container [ngTemplateOutlet]=\"sideNavLinkTemplate\" [ngTemplateOutletContext]=\"{$implicit:link}\">\r\n      </ng-container>\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n<ng-template #sideNavRouteLinkTemplate let-link>\r\n  <a [attr.class]=\"link.selected ? ' usa-current' : ''\" [routerLink]=\"[link.route]\" [queryParams]=\"link.queryParams\"\r\n    (click)=\"linkClickEvent(link)\"><span>{{link.text}}</span></a>\r\n</ng-template>\r\n\r\n<ng-template #sideNavHREFLinkTemplate let-link>\r\n  <a [attr.class]=\"link.selected ? ' usa-current' : ''\" [attr.href]=\"urlBuilder(link)\"\r\n    (click)=\"linkClickEvent(link)\"><span>{{link.text}}</span></a>\r\n</ng-template>\r\n\r\n<ng-template #sideNavLabelLinkTemplate let-link>\r\n  <span [attr.class]=\"link.selected ? ' usa-current' : ''\"><span>{{link.text}}</span></span>\r\n</ng-template>\r\n\r\n<ng-template #sideNavEVENTLinkTemplate let-link>\r\n  <a [attr.class]=\"link.selected ? ' usa-current' : ''\" href=\"javascript:void(0)\"\r\n    (click)=\"linkClickEvent(link)\"><span>{{link.text}}</span></a>\r\n</ng-template>\r\n"
        },
        {
            "name": "SdsTextChildComponent",
            "id": "component-SdsTextChildComponent-897403a0e668f6655de558c1711b1648",
            "file": "libs/packages/components/src/lib/text/child.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-text-child",
            "styleUrls": [],
            "styles": [],
            "template": "<ng-container *ngIf=\"items\">\n  <span class=\"sds-tag sds-tag--chip margin-x-05\" style=\"cursor:pointer;\" *ngFor=\"let item of items; let i=index\" (click)=\"removeItem(i)\">{{item}} <small class=\"margin-left-05\">(x)</small></span>\n</ng-container>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "items",
                    "line": 13
                }
            ],
            "outputsClass": [
                {
                    "name": "itemsChange",
                    "defaultValue": "new EventEmitter()",
                    "line": 14,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [],
            "methodsClass": [
                {
                    "name": "removeItem",
                    "args": [
                        {
                            "name": "index",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 17,
                    "jsdoctags": [
                        {
                            "name": "index",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input, EventEmitter, Output } from '@angular/core';\r\nimport { Subject } from 'rxjs';\r\n\r\n@Component({\r\n  selector: 'sds-text-child',\r\n  template: `\r\n    <ng-container *ngIf=\"items\">\r\n      <span class=\"sds-tag sds-tag--chip margin-x-05\" style=\"cursor:pointer;\" *ngFor=\"let item of items; let i=index\" (click)=\"removeItem(i)\">{{item}} <small class=\"margin-left-05\">(x)</small></span>\r\n    </ng-container>\r\n  `\r\n})\r\nexport class SdsTextChildComponent  {\r\n    @Input() items;\r\n    @Output() itemsChange = new EventEmitter();\r\n\r\n    // Method to remove an item from the items array, emits an event that the parent component is listening for\r\n    removeItem(index){\r\n      this.items.splice(index, 1);\r\n      this.itemsChange.emit(this.items);\r\n    }\r\n\r\n}\r\n\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": ""
        },
        {
            "name": "SdsTextComponent",
            "id": "component-SdsTextComponent-da27e5033a4c122a0706c31eef65a7a8",
            "file": "libs/packages/components/src/lib/text/text.component.ts",
            "changeDetection": "ChangeDetectionStrategy.OnPush",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [
                {
                    "name": "{\n    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SdsTextComponent), multi: true\n}",
                    "type": "component"
                }
            ],
            "selector": "sds-text",
            "styleUrls": [],
            "styles": [],
            "template": "<div>\n  <input #searchInput class=\"usa-input display-inline-block\" />\n  <button class=\"usa-button margin-left-05 display-inline-block\" (click)=\"addItem(searchInput.value); searchInput.value=''\">Add Item</button>\n</div>\n\n<h4>Component Items</h4>\n<pre>{{ items | json }}</pre>\n\n<hr />\n\n<h4>Child Component Items <small>(click to remove)</small></h4>\n<sds-text-child [(items)]=\"items\" (itemsChange)=\"updateItems($event)\"></sds-text-child>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "_onChange",
                    "defaultValue": "() => {...}",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 34,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_onTouched",
                    "defaultValue": "() => {...}",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 35,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "items",
                    "defaultValue": "[]",
                    "type": "[]",
                    "optional": false,
                    "description": "",
                    "line": 31
                },
                {
                    "name": "multiple",
                    "defaultValue": "true",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 32
                }
            ],
            "methodsClass": [
                {
                    "name": "addItem",
                    "args": [
                        {
                            "name": "val",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 40,
                    "jsdoctags": [
                        {
                            "name": "val",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "getModel",
                    "args": [],
                    "optional": false,
                    "returnType": "{}",
                    "typeParameters": [],
                    "line": 59
                },
                {
                    "name": "registerOnChange",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 77,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "registerOnTouched",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 82,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "updateItems",
                    "args": [
                        {
                            "name": "$event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 48,
                    "jsdoctags": [
                        {
                            "name": "$event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "updateModel",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 53
                },
                {
                    "name": "writeValue",
                    "args": [
                        {
                            "name": "value",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 66,
                    "jsdoctags": [
                        {
                            "name": "value",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';\r\nimport { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';\r\n\r\n@Component({\r\n  selector: 'sds-text',\r\n  template: `\r\n    <div>\r\n      <input #searchInput class=\"usa-input display-inline-block\" />\r\n      <button class=\"usa-button margin-left-05 display-inline-block\" (click)=\"addItem(searchInput.value); searchInput.value=''\">Add Item</button>\r\n    </div>\r\n\r\n    <h4>Component Items</h4>\r\n    <pre>{{ items | json }}</pre>\r\n\r\n    <hr />\r\n\r\n    <h4>Child Component Items <small>(click to remove)</small></h4>\r\n    <sds-text-child [(items)]=\"items\" (itemsChange)=\"updateItems($event)\"></sds-text-child>\r\n  `,\r\n  providers: [\r\n    {\r\n      provide: NG_VALUE_ACCESSOR,\r\n      useExisting: forwardRef(() => SdsTextComponent),\r\n      multi: true\r\n    }\r\n  ],\r\n  changeDetection: ChangeDetectionStrategy.OnPush\r\n})\r\nexport class SdsTextComponent implements ControlValueAccessor {\r\n\r\n  items = [];\r\n  multiple = true;\r\n\r\n  private _onChange = (_: any) => { };\r\n  private _onTouched = () => { };\r\n\r\n  constructor(private cd: ChangeDetectorRef) { }\r\n\r\n  // Helper method to programatically add a value to the existing items array\r\n  addItem(val) {\r\n    if(this.multiple){\r\n      this.items = [...this.items, val];\r\n      this.updateModel();\r\n    }\r\n  }\r\n\r\n  // Method that is fired when the child component event notifies us that the items array has been modified within the child component\r\n  updateItems($event) {\r\n    this.updateModel();\r\n  }\r\n\r\n  // Helper method that gets a new instance of the model and notifies ControlValueAccessor that we have a new model for this FormControl (our custom component)\r\n  updateModel() {\r\n    const model = this.getModel();\r\n    this._onChange(model);\r\n  }\r\n\r\n  // Helper method to return a new instance of an array that contains our items\r\n  getModel() {\r\n    return [...this.items];\r\n  }\r\n\r\n  // ControlValueAccessor (and Formly) is trying to update the value of the FormControl (our custom component) programatically\r\n  // If there is a value we will just overwrite items\r\n  // If there is no value we reset the items array to be empty\r\n  writeValue(value: any) {\r\n    if(value && value.length && this.items !== value) {\r\n      this.items = value;\r\n      this.cd.markForCheck();\r\n    } else {\r\n      this.items = [];\r\n      this.cd.markForCheck();\r\n    }\r\n  }\r\n\r\n  // ControlValueAccessor hook that lets us call this._onChange(var) to let the form know our variable has changed (in this case model)\r\n  registerOnChange(fn: any): void {\r\n    this._onChange = fn;\r\n  }\r\n\r\n  // ControlValueAccessor hook (not used)\r\n  registerOnTouched(fn: any) {\r\n    this._onTouched = fn;\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "cd",
                        "type": "ChangeDetectorRef"
                    }
                ],
                "line": 35,
                "jsdoctags": [
                    {
                        "name": "cd",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "ControlValueAccessor"
            ]
        },
        {
            "name": "SdsToolbarComponent",
            "id": "component-SdsToolbarComponent-f585a8739de458a2d25b6bbc810e6c82",
            "file": "libs/packages/components/src/lib/toolbar/toolbar.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "exportAs": "sdsToolbar",
            "host": {},
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-toolbar",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "toolbar.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "disabled",
                    "description": "<p>Whether the toolbar is disabled. </p>\n",
                    "line": 54
                },
                {
                    "name": "expanded",
                    "description": "<p>Whether the toolbar is expanded. </p>\n",
                    "line": 38,
                    "type": "any"
                },
                {
                    "name": "expandedSpace",
                    "defaultValue": "\"20px\"",
                    "line": 67,
                    "type": "string"
                },
                {
                    "name": "expandedWidth",
                    "defaultValue": "\"300px\"",
                    "description": "<p>Width of the toolbar when is expanded. </p>\n",
                    "line": 63,
                    "type": "string"
                }
            ],
            "outputsClass": [
                {
                    "name": "expandedChange",
                    "defaultValue": "new EventEmitter<boolean>()",
                    "description": "<p>Emits whenever the expanded state of the toolbar changes. </p>\n",
                    "line": 34,
                    "type": "EventEmitter<boolean>"
                }
            ],
            "propertiesClass": [
                {
                    "name": "_contentId",
                    "defaultValue": "`sds-toolbar-content-${this.id}`",
                    "type": "string",
                    "optional": false,
                    "description": "<p>ID for the content element. Used for a11y labelling. </p>\n",
                    "line": 29,
                    "modifierKind": [
                        132
                    ]
                },
                {
                    "name": "_disabled",
                    "defaultValue": "false",
                    "type": "boolean",
                    "optional": false,
                    "description": "",
                    "line": 60,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_expanded",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 50,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_headerId",
                    "defaultValue": "`sds-toolbar-header-${this.id}`",
                    "type": "string",
                    "optional": false,
                    "description": "<p>ID for the header element. Used for a11y labelling. </p>\n",
                    "line": 26,
                    "modifierKind": [
                        132
                    ]
                },
                {
                    "name": "id",
                    "defaultValue": "uniqueId++",
                    "type": "",
                    "optional": false,
                    "description": "<p>The unique Toolbar id. </p>\n",
                    "line": 23,
                    "modifierKind": [
                        132
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "_getExpandedState",
                    "args": [],
                    "optional": false,
                    "returnType": "SdsToolbarState",
                    "typeParameters": [],
                    "line": 75,
                    "description": "<p>Gets the expanded state string. </p>\n"
                },
                {
                    "name": "toggle",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 70,
                    "description": "<p>Toggles the expanded state of the toolbar. </p>\n"
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, EventEmitter, Input, Output } from \"@angular/core\";\r\nimport { coerceBooleanProperty } from \"@angular/cdk/coercion\";\r\nimport { sdsToolbarAnimations } from \"./toolbar-animations\";\r\n\r\n/** Toolbar's states. */\r\nexport type SdsToolbarState = \"expanded\" | \"collapsed\";\r\n\r\n/** Counter for generating unique element ids. */\r\nlet uniqueId = 0;\r\n\r\n@Component({\r\n  selector: \"sds-toolbar\",\r\n  exportAs: \"sdsToolbar\",\r\n  templateUrl: \"toolbar.component.html\",\r\n  animations: [sdsToolbarAnimations.bodyExpansion],\r\n  host: {\r\n    class: \"sds-toolbar\",\r\n    \"[class.sds-toolbar--expanded]\": \"expanded\"\r\n  }\r\n})\r\nexport class SdsToolbarComponent {\r\n  /** The unique Toolbar id. */\r\n  readonly id = uniqueId++;\r\n\r\n  /** ID for the header element. Used for a11y labelling. */\r\n  readonly _headerId: string = `sds-toolbar-header-${this.id}`;\r\n\r\n  /** ID for the content element. Used for a11y labelling. */\r\n  readonly _contentId: string = `sds-toolbar-content-${this.id}`;\r\n\r\n  constructor() {}\r\n\r\n  /** Emits whenever the expanded state of the toolbar changes. */\r\n  @Output() expandedChange: EventEmitter<boolean> = new EventEmitter<boolean>();\r\n\r\n  /** Whether the toolbar is expanded. */\r\n  @Input()\r\n  get expanded(): any {\r\n    return this._expanded;\r\n  }\r\n  set expanded(expanded: any) {\r\n    expanded = coerceBooleanProperty(expanded);\r\n\r\n    // Only emit events and update the internal value if the value changes.\r\n    if (this._expanded !== expanded) {\r\n      this._expanded = expanded;\r\n      this.expandedChange.emit(expanded);\r\n    }\r\n  }\r\n  private _expanded = false;\r\n\r\n  /** Whether the toolbar is disabled. */\r\n  @Input()\r\n  get disabled() {\r\n    return this._disabled;\r\n  }\r\n  set disabled(disabled: any) {\r\n    this._disabled = coerceBooleanProperty(disabled);\r\n  }\r\n  private _disabled: boolean = false;\r\n\r\n  /** Width of the toolbar when is expanded. */\r\n  @Input() expandedWidth: string = \"300px\";\r\n\r\n  // Elements that surround the toolbar need to make space for the expanded toolbar.\r\n  // Adding 20 more pixes to provide padding\r\n  @Input() expandedSpace: string = \"20px\";\r\n\r\n  /** Toggles the expanded state of the toolbar. */\r\n  toggle() {\r\n    this.expanded = !this.expanded;\r\n  }\r\n\r\n  /** Gets the expanded state string. */\r\n  _getExpandedState(): SdsToolbarState {\r\n    return this.expanded ? \"expanded\" : \"collapsed\";\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 29
            },
            "accessors": {
                "expanded": {
                    "name": "expanded",
                    "setSignature": {
                        "name": "expanded",
                        "type": "void",
                        "args": [
                            {
                                "name": "expanded",
                                "type": "any"
                            }
                        ],
                        "returnType": "void",
                        "line": 41,
                        "jsdoctags": [
                            {
                                "name": "expanded",
                                "type": "any",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                },
                "disabled": {
                    "name": "disabled",
                    "setSignature": {
                        "name": "disabled",
                        "type": "void",
                        "args": [
                            {
                                "name": "disabled",
                                "type": "any"
                            }
                        ],
                        "returnType": "void",
                        "line": 57,
                        "jsdoctags": [
                            {
                                "name": "disabled",
                                "type": "any",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                }
            },
            "templateData": "<sds-toolbar-header></sds-toolbar-header>\r\n<div\r\n  class=\"sds-toolbar__content\"\r\n  role=\"region\"\r\n  [@bodyExpansion]=\"{\r\n    value: _getExpandedState(),\r\n    params: { expandedWidth: expandedWidth }\r\n  }\"\r\n  [attr.aria-labelledby]=\"_headerId\"\r\n  [id]=\"_contentId\"\r\n>\r\n  <ng-content></ng-content>\r\n</div>\r\n"
        },
        {
            "name": "SdsToolbarHeaderComponent",
            "id": "component-SdsToolbarHeaderComponent-42a976f027f538b9949960f7239bebc1",
            "file": "libs/packages/components/src/lib/toolbar/toolbar-header.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "host": {},
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-toolbar-header",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "toolbar-header.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "toolbar",
                    "type": "SdsToolbarComponent",
                    "optional": false,
                    "description": "",
                    "line": 12,
                    "decorators": [
                        {
                            "name": "Host",
                            "stringifiedArguments": ""
                        }
                    ],
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "_toggle",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 15,
                    "description": "<p>Toggles the expanded state of the toolbar. </p>\n"
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Host } from \"@angular/core\";\r\nimport { SdsToolbarComponent } from \"./toolbar.component\";\r\n\r\n@Component({\r\n  selector: \"sds-toolbar-header\",\r\n  templateUrl: \"toolbar-header.component.html\",\r\n  host: {\r\n    class: \"sds-toolbar__header\"\r\n  }\r\n})\r\nexport class SdsToolbarHeaderComponent {\r\n  constructor(@Host() public toolbar: SdsToolbarComponent) {}\r\n\r\n  /** Toggles the expanded state of the toolbar. */\r\n  _toggle() {\r\n    this.toolbar.toggle();\r\n  }\r\n\r\n  /** Gets whether the toolbar is expanded. */\r\n  get _isExpanded(): boolean {\r\n    return this.toolbar.expanded;\r\n  }\r\n\r\n  /** Whether the toolbar is disabled. */\r\n  get _disabled(): boolean {\r\n    return this.toolbar.disabled;\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "toolbar",
                        "type": "SdsToolbarComponent"
                    }
                ],
                "line": 11,
                "jsdoctags": [
                    {
                        "name": "toolbar",
                        "type": "SdsToolbarComponent",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "accessors": {
                "_isExpanded": {
                    "name": "_isExpanded",
                    "getSignature": {
                        "name": "_isExpanded",
                        "type": "boolean",
                        "returnType": "boolean",
                        "line": 20,
                        "description": "<p>Gets whether the toolbar is expanded. </p>\n"
                    }
                },
                "_disabled": {
                    "name": "_disabled",
                    "getSignature": {
                        "name": "_disabled",
                        "type": "boolean",
                        "returnType": "boolean",
                        "line": 25,
                        "description": "<p>Whether the toolbar is disabled. </p>\n"
                    }
                }
            },
            "templateData": "<button\r\n  class=\"sds-toolbar__toogle-btn\"\r\n  [attr.id]=\"toolbar._headerId\"\r\n  [attr.tabindex]=\"_disabled ? -1 : 0\"\r\n  [attr.aria-controls]=\"toolbar._contentId\"\r\n  [attr.aria-expanded]=\"_isExpanded\"\r\n  [attr.aria-disabled]=\"_disabled\"\r\n  (click)=\"_toggle()\"\r\n>\r\n  <div class=\"sds-toolbar__toggle\">\r\n    <span class=\"usa-sr-only\">Open/Close Toolbar</span>\r\n  </div>\r\n</button>\r\n"
        },
        {
            "name": "SdsTopBannerComponent",
            "id": "component-SdsTopBannerComponent-34480fcf5902e2a50fa619cc3e8b2c56",
            "file": "libs/packages/components/src/lib/top-banner/top-banner.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-top-banner",
            "styleUrls": [
                "./top-banner.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./top-banner.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "description",
                    "defaultValue": "''",
                    "line": 10
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "showDetail",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 9
                }
            ],
            "methodsClass": [
                {
                    "name": "closeDetail",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 16
                },
                {
                    "name": "toggleDetails",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 12
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'sds-top-banner',\r\n  templateUrl: './top-banner.component.html',\r\n  styleUrls: ['./top-banner.component.scss']\r\n})\r\nexport class SdsTopBannerComponent {\r\n  showDetail = false;\r\n  @Input() description = '';\r\n\r\n  toggleDetails() {\r\n    this.showDetail = !this.showDetail;\r\n  }\r\n\r\n  closeDetail() {\r\n    if (this.showDetail) {\r\n      this.showDetail = false;\r\n    }\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./top-banner.component.scss"
                }
            ],
            "stylesData": "",
            "templateData": "<div class=\"usa-banner\">\r\n  <div class=\"usa-accordion\">\r\n    <header\r\n      class=\"usa-banner__header\"\r\n      [class.sam-banner__header--expanded]=\"showDetail\"\r\n    >\r\n      <div class=\"usa-banner__inner\">\r\n        <div class=\"grid-col-auto\">\r\n          <span class=\"usa-banner__header-flag\"></span>\r\n        </div>\r\n        <div class=\"grid-col-fill tablet:grid-col-auto\">\r\n          <p class=\"usa-banner__header-text\">\r\n            An official website of the United States government\r\n          </p>\r\n          <p class=\"usa-banner__header-action\" aria-hidden=\"true\">\r\n            Here’s how you know\r\n          </p>\r\n        </div>\r\n        <button\r\n          class=\"usa-accordion__button usa-banner__button\"\r\n          (click)=\"toggleDetails()\"\r\n          (blur)=\"closeDetail()\"\r\n          [attr.aria-expanded]=\"showDetail\"\r\n          aria-controls=\"gov-banner\"\r\n        >\r\n          <span class=\"usa-banner__button-text\">Here’s how you know</span>\r\n        </button>\r\n        <div class=\"usa-banner__header-description\">\r\n          <em>{{ description }}</em>\r\n        </div>\r\n      </div>\r\n    </header>\r\n    <div\r\n      class=\"usa-banner__content usa-accordion__content\"\r\n      id=\"gov-banner\"\r\n      [hidden]=\"!showDetail\"\r\n    >\r\n      <div class=\"grid-row grid-gap-lg\">\r\n        <div class=\"usa-banner__guidance tablet:grid-col-6\">\r\n          <span class=\"usa-banner__icon usa-media-block__img\"></span>\r\n          <div class=\"usa-media-block__body\">\r\n            <p>\r\n              <strong>The .gov means it’s official.</strong> <br />\r\n              Federal government websites often end in .gov or .mil. Before\r\n              sharing sensitive information, make sure you’re on a federal\r\n              government site.\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"usa-banner__guidance tablet:grid-col-6\">\r\n          <span class=\"usa-banner__icon usa-media-block__img\"></span>\r\n          <div class=\"usa-media-block__body\">\r\n            <p>\r\n              <strong>The site is secure.</strong> <br />\r\n              The <strong>https://</strong> ensures that you are connecting to\r\n              the official website and that any information you provide is\r\n              encrypted and transmitted securely.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
        },
        {
            "name": "SdsTruncatedTextContainerComponent",
            "id": "component-SdsTruncatedTextContainerComponent-5540e28b3ba6948df916a073aff558bd",
            "file": "libs/packages/components/src/lib/truncate-text/truncate-text-container.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-truncated-text-container",
            "styleUrls": [],
            "styles": [],
            "template": "<div class=\"sds-overlay maxw-mobile radius-overlay padding-2\">{{ data.text }}</div>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "data",
                    "type": "SdsTruncateTextData",
                    "optional": false,
                    "description": "",
                    "line": 19,
                    "decorators": [
                        {
                            "name": "Inject",
                            "stringifiedArguments": "SDS_TRUNCATED_TEXT_DATA"
                        }
                    ],
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "resetAnimation",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 27,
                    "description": "<p>Resets the animation to its initial state. </p>\n"
                },
                {
                    "name": "startAnimation",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 22,
                    "description": "<p>Starts the animation. </p>\n"
                }
            ],
            "hostBindings": [
                {
                    "name": "@container",
                    "defaultValue": "'void'",
                    "line": 17
                }
            ],
            "hostListeners": [
                {
                    "name": "@container.done",
                    "args": [],
                    "argsDecorator": [],
                    "description": "<p>Intentionally left empty to trigger change detection </p>\n",
                    "line": 33
                }
            ],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Inject, HostBinding, HostListener } from '@angular/core';\r\nimport { SDS_TRUNCATED_TEXT_DATA } from './truncates-text-base';\r\nimport { sdsTruncateTextAnimations } from './truncate-text-animations';\r\n\r\nexport interface SdsTruncateTextData {\r\n  text: string;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-truncated-text-container',\r\n  template: `\r\n    <div class=\"sds-overlay maxw-mobile radius-overlay padding-2\">{{ data.text }}</div>\r\n  `,\r\n  animations: [sdsTruncateTextAnimations.container]\r\n})\r\nexport class SdsTruncatedTextContainerComponent {\r\n  @HostBinding('@container') _animationState = 'void';\r\n\r\n  constructor(@Inject(SDS_TRUNCATED_TEXT_DATA) public data: SdsTruncateTextData) {}\r\n\r\n  /** Starts the animation. */\r\n  startAnimation() {\r\n    this._animationState = 'enter';\r\n  }\r\n\r\n  /** Resets the animation to its initial state. */\r\n  resetAnimation() {\r\n    this._animationState = 'void';\r\n  }\r\n\r\n  /** Intentionally left empty to trigger change detection */\r\n  @HostListener('@container.done')\r\n  _onAnimationDone() {}\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "data",
                        "type": "SdsTruncateTextData"
                    }
                ],
                "line": 17,
                "jsdoctags": [
                    {
                        "name": "data",
                        "type": "SdsTruncateTextData",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SdsVideoPlayerComponent",
            "id": "component-SdsVideoPlayerComponent-fd7c680f2a9e428a3398a440cebda2b3",
            "file": "libs/packages/components/src/lib/video-player/video-player.component.ts",
            "encapsulation": [
                "ViewEncapsulation.None"
            ],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-video-player",
            "styleUrls": [
                "./css/px-video.css"
            ],
            "styles": [],
            "templateUrl": [
                "./video-player.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "crossorigin",
                    "defaultValue": "\"\"",
                    "line": 31
                },
                {
                    "name": "VPConfiguration",
                    "line": 27,
                    "type": "VPInterface"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "config",
                    "type": "InitPxVideoConfig",
                    "optional": false,
                    "description": "",
                    "line": 29,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "video",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "",
                    "line": 28,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'video'"
                        }
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "ngAfterViewInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 32
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component,ViewChild, Input,ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';\r\nimport { GLOBAL_STRINGS } from 'accessible-html5-video-player/js/strings.js';\r\nimport * as InitPxVideo from 'accessible-html5-video-player/js/px-video.js';\r\nimport { VPInterface } from './video-player';\r\n\r\ninterface InitPxVideoConfig {\r\n  \"videoId\": string,\r\n  \"captionsOnDefault\": boolean,\r\n  \"seekInterval\": number,\r\n  \"videoTitle\": string,\r\n  \"debug\": boolean\r\n}\r\n\r\ndeclare const GLOBAL_STRINGS: any;\r\n\r\ndeclare class InitPxVideo {\r\n  constructor(config: InitPxVideoConfig);\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-video-player',\r\n  templateUrl: './video-player.component.html',\r\n  styleUrls: ['./css/px-video.css'],\r\n  encapsulation: ViewEncapsulation.None\r\n})\r\nexport class SdsVideoPlayerComponent implements AfterViewInit {\r\n  @Input() VPConfiguration: VPInterface;\r\n  @ViewChild('video') video: ElementRef;\r\n  private config: InitPxVideoConfig;\r\n\r\n  @Input() crossorigin = \"\";\r\n  ngAfterViewInit() {\r\n    if (this.crossorigin) {\r\n      const id = document.getElementById('videoPlayer');\r\n      id.setAttribute('crossorigin', this.crossorigin);\r\n    }\r\n    this.config = {\r\n      videoId: this.VPConfiguration.id,\r\n      captionsOnDefault: false,\r\n      seekInterval: this.VPConfiguration.seekInterval,\r\n      videoTitle: 'Video Player',\r\n      debug: this.VPConfiguration.debug\r\n    }\r\n\r\n    new InitPxVideo(this.config);\r\n    this.video.nativeElement.setAttribute(\"style\", \"width:\"+this.VPConfiguration.width+\";\");\r\n    \r\n  }\r\n\r\n  constructor() {\r\n}\r\n\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "/* utilities */\r\n.pull-left {\r\n  float: left;\r\n}\r\n.sr-only {\r\n  position: absolute !important;\r\n  clip: rect(1px, 1px, 1px, 1px);\r\n  padding: 0 !important;\r\n  border: 0 !important;\r\n  height: 1px !important;\r\n  width: 1px !important;\r\n  overflow: hidden;\r\n}\r\n.hide {\r\n  display: none;\r\n}\r\n.show-inline {\r\n  display: inline-block;\r\n}\r\n\r\n/* containers */\r\n.px-video-img-captions-container * {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.px-video-img-captions-container {\r\n  position: relative;\r\n}\r\n\r\n/* progress indicator */\r\n.px-video-progress {\r\n  width: 100%;\r\n  height: 10px;\r\n}\r\n.px-video-progress[value] {\r\n  /* Reset the default appearance */\r\n  -webkit-appearance: none;\r\n  border: none;\r\n}\r\n.px-video-progress[value]::-webkit-progress-bar {\r\n  background-color: #e6e6e6;\r\n}\r\n.px-video-progress[value]::-webkit-progress-value {\r\n  background-color: #009cdf;\r\n}\r\n\r\n/* time */\r\n.px-video-time {\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  float: right;\r\n  margin-top: 2px;\r\n  font-size: 14px;\r\n}\r\n\r\n/* caption area */\r\n.px-video-captions {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  padding: 0.5em;\r\n  min-height: 2.5em;\r\n  background-color: #000;\r\n  color: #fff;\r\n  font-size: 1.1em;\r\n  text-align: center;\r\n  opacity: 0.75;\r\n}\r\n\r\n/* buttons */\r\n.px-video-controls button {\r\n  border: 1px #fff solid;\r\n  background: transparent;\r\n  padding: 0;\r\n  margin: 0 5px;\r\n  width: 25px;\r\n  height: 20px;\r\n  overflow: hidden;\r\n  background: no-repeat url(\"/assets/img/px-video-sprite.svg\");\r\n}\r\n.px-video-controls button:focus {\r\n  border: 1px #999 dotted;\r\n  outline: none;\r\n}\r\n.px-video-controls button {\r\n  cursor: pointer;\r\n}\r\n\r\n/* restart button */\r\n.px-video-controls button.px-video-restart {\r\n  background-position: -6px -333px;\r\n  margin-left: 0;\r\n}\r\n.px-video-controls button.px-video-restart:hover,\r\n.px-video-controls button.px-video-restart:focus {\r\n  background-position: -6px -297px;\r\n}\r\n\r\n/* rewind button */\r\n.px-video-controls button.px-video-rewind {\r\n  background-position: -6px -189px;\r\n}\r\n.px-video-controls button.px-video-rewind:hover,\r\n.px-video-controls button.px-video-rewind:focus {\r\n  background-position: -6px -153px;\r\n}\r\n\r\n/* play button */\r\n.px-video-controls button.px-video-play {\r\n  background-position: -6px -45px;\r\n}\r\n.px-video-controls button.px-video-play:hover,\r\n.px-video-controls button.px-video-play:focus {\r\n  background-position: -6px -9px;\r\n}\r\n\r\n/* pause button */\r\n.px-video-controls button.px-video-pause {\r\n  background-position: -6px -117px;\r\n}\r\n.px-video-controls button.px-video-pause:hover,\r\n.px-video-controls button.px-video-pause:focus {\r\n  background-position: -6px -81px;\r\n}\r\n\r\n/* forward button */\r\n.px-video-controls button.px-video-forward {\r\n  background-position: -6px -261px;\r\n}\r\n.px-video-controls button.px-video-forward:hover,\r\n.px-video-controls button.px-video-forward:focus {\r\n  background-position: -6px -225px;\r\n}\r\n\r\n.px-video-fullscreen-btn-container label {\r\n  display: inline-block;\r\n  width: 25px;\r\n  height: 20px;\r\n  margin-left: 10px;\r\n  background: no-repeat url(\"/assets/img/px-video-sprite.svg\");\r\n  background-position: -6px -907px;\r\n}\r\n.px-video-fullscreen-btn-container input[type=\"checkbox\"]:focus + label {\r\n  outline: 1px #999 dotted;\r\n  background-position: -6px -943px;\r\n}\r\n.px-video-fullscreen-btn-container input[type=\"checkbox\"]:hover + label {\r\n  background-position: -6px -943px;\r\n  cursor: pointer;\r\n}\r\n.px-video-fullscreen-btn-container input[type=\"checkbox\"]:focus + label {\r\n  outline: 1px #999 dotted;\r\n  background-position: -6px -943px;\r\n}\r\n.px-video-fullscreen-btn-container input[type=\"checkbox\"]:checked + label {\r\n  background-position: -6px -979px;\r\n}\r\n.px-video-fullscreen-btn-container\r\n  input[type=\"checkbox\"]:checked:hover\r\n  + label {\r\n  background-position: -6px -1015px;\r\n}\r\n\r\n/* captions button */\r\n.px-video-captions-btn-container label {\r\n  display: inline-block;\r\n  width: 25px;\r\n  height: 20px;\r\n  margin-left: 10px;\r\n  background: no-repeat url(\"/assets/img/px-video-sprite.svg\");\r\n  background-position: -6px -835px;\r\n}\r\n.px-video-captions-btn-container input[type=\"checkbox\"]:focus + label {\r\n  outline: 1px #999 dotted;\r\n  background-position: -6px -799px;\r\n}\r\n.px-video-captions-btn-container input[type=\"checkbox\"]:hover + label {\r\n  background-position: -6px -799px;\r\n  cursor: pointer;\r\n}\r\n.px-video-captions-btn-container input[type=\"checkbox\"]:focus + label {\r\n  outline: 1px #999 dotted;\r\n  background-position: -6px -799px;\r\n}\r\n.px-video-captions-btn-container input[type=\"checkbox\"]:checked + label {\r\n  background-position: -6px -871px;\r\n}\r\n\r\n/* mute button */\r\n.px-video-mute-btn-container label {\r\n  display: inline-block;\r\n  width: 25px;\r\n  height: 20px;\r\n  margin-left: 240px;\r\n  margin-top: 2px;\r\n  background: no-repeat url(\"/assets/img/px-video-sprite.svg\");\r\n  background-position: -6px -476px;\r\n}\r\n.px-video-mute-btn-container input[type=\"checkbox\"]:focus + label {\r\n  outline: 1px #999 dotted;\r\n  background-position: -6px -440px;\r\n}\r\n.px-video-mute-btn-container input[type=\"checkbox\"]:hover + label {\r\n  background-position: -6px -440px;\r\n  cursor: pointer;\r\n}\r\n.px-video-mute-btn-container input[type=\"checkbox\"]:focus + label {\r\n  outline: 1px #999 dotted;\r\n  background-position: -6px -440px;\r\n}\r\n/* checked state of mute button */\r\n.px-video-mute-btn-container input[type=\"checkbox\"]:checked + label {\r\n  background-position: -6px -692px;\r\n}\r\n.px-video-mute-btn-container input[type=\"checkbox\"]:checked:hover + label,\r\n.px-video-mute-btn-container input[type=\"checkbox\"]:checked:focus + label {\r\n  background-position: -6px -656px;\r\n}\r\n\r\n/* volume range input */\r\n.px-video-controls input[type=\"range\"] {\r\n  -webkit-appearance: none;\r\n  height: 6px;\r\n  width: 100px;\r\n  margin-top: 8px;\r\n  background-color: #e6e6e6;\r\n  outline: none;\r\n}\r\n.px-video-controls input[type=\"range\"]:focus::-webkit-slider-thumb {\r\n  outline: 1px #999 dotted;\r\n}\r\n.px-video-controls input[type=\"range\"]::-moz-range-track {\r\n  -moz-appearance: none;\r\n  height: 6px;\r\n  background-color: #e6e6e6;\r\n  border: none;\r\n}\r\n.px-video-controls input[type=\"range\"]::-webkit-slider-thumb {\r\n  -webkit-appearance: none !important;\r\n  height: 10px;\r\n  width: 6px;\r\n  background-color: #666;\r\n}\r\n.px-video-controls input[type=\"range\"]::-moz-range-thumb {\r\n  height: 12px;\r\n  width: 8px;\r\n  background-color: #666;\r\n}\r\n/* fixing display for IE10+ */\r\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\r\n  .px-video-controls input[type=\"range\"] {\r\n    position: relative;\r\n    padding: 0;\r\n    height: 8px;\r\n    top: -3px;\r\n  }\r\n  .px-video-time {\r\n    margin-top: 4px;\r\n  }\r\n  .px-video-captions {\r\n    padding: 8px;\r\n    min-height: 36px;\r\n  }\r\n}\r\n\r\n.px-video-container {\r\n  position: relative;\r\n  min-width: 200px;\r\n}\r\n#videoPlayer{\r\n  min-width: 200px;\r\n}\r\n.px-video-container.fullscreen {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  -webkit-cursor-visibility: auto-hide;\r\n}\r\n\r\n/* Fullscreen styles */\r\n\r\n/* style applied through js */\r\n.px-video-controls.js-fullscreen-controls {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  z-index: 940;\r\n  background: white;\r\n}\r\n\r\n.px-video-captions.js-fullscreen-captions {\r\n  min-height: 3.5em;\r\n  font-size: 2.5em;\r\n  padding: 1em;\r\n}\r\n\r\n.px-timetip {\r\n  padding: 5px 10px;\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  font-size: 14px;\r\n  background: rgba(0, 0, 0, 0.83);\r\n  border-radius: 3px;\r\n  color: #fff;\r\n  width: auto;\r\n}\r\n.px-timetip:after {\r\n  top: 100%;\r\n  left: 50%;\r\n  border: solid transparent;\r\n  content: \" \";\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  border-color: rgba(43, 43, 43, 0);\r\n  border-top-color: #2b2b2b;\r\n  border-width: 10px;\r\n  margin-left: -10px;\r\n}\r\n",
                    "styleUrl": "./css/px-video.css"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 48
            },
            "implements": [
                "AfterViewInit"
            ],
            "templateData": "<div #video class=\"px-video-container\" id=\"{{VPConfiguration.id}}\" [style.width]=\"VPConfiguration.width\" >\r\n  <div class=\"px-video-img-captions-container\" >\r\n      <div class=\"px-video-captions hide\" aria-hidden=\"true\"></div>\r\n      <video id=\"videoPlayer\" [style.width]=\"VPConfiguration.width\" [style.height]=\"VPConfiguration.height\" poster=\"{{VPConfiguration.poster}}\" controls preload={{VPConfiguration.preload}}>\r\n        <!-- if Safari/Chrome-->\r\n          <source src=\"{{VPConfiguration.sourceMp4}}\" type=\"video/mp4\" />\r\n          <!-- If Firefox/Opera/Chrome/IE -->\r\n          <source src=\"{{VPConfiguration.sourceWebm}}\" type=\"video/webm\" />\r\n          <track kind=\"subtitles\" kind=\"captions\" label=\"English captions\" src=\"{{VPConfiguration.caption}}\" srclang=\"en\" default />\r\n      </video>\r\n  </div>\r\n  <div class=\"px-video-controls\"></div>\r\n</div>\r\n"
        }
    ],
    "modules": [
        {
            "name": "PaginationModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "PaginationComponent"
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
                            "name": "PaginationComponent"
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
                            "name": "SdsAccordionDirective"
                        },
                        {
                            "name": "SdsAccordionItemComponent"
                        },
                        {
                            "name": "SdsAccordionItemContentDirective"
                        },
                        {
                            "name": "SdsAccordionItemHeaderComponent"
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
                            "name": "SdsAccordionDirective"
                        },
                        {
                            "name": "SdsAccordionItemComponent"
                        },
                        {
                            "name": "SdsAccordionItemContentDirective"
                        },
                        {
                            "name": "SdsAccordionItemHeaderComponent"
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
            "name": "SdsAutocompleteModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SDSAutocompleteComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": [
                        {
                            "name": "SdsAutocompleteSearchModule"
                        },
                        {
                            "name": "SdsSelectedResultsModule"
                        }
                    ]
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SDSAutocompleteComponent"
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
            "name": "SdsAutocompleteSearchModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SDSAutocompleteSearchComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": [
                        {
                            "name": "SDSClickOutsideModule"
                        },
                        {
                            "name": "SdsTabOutsideModule"
                        }
                    ]
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SDSAutocompleteSearchComponent"
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
            "name": "SDSClickOutsideModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SDSClickOutsideDirective"
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
                            "name": "SDSClickOutsideDirective"
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
            "name": "SdsCollapseModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "CollapseDirective"
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
                            "name": "CollapseDirective"
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
            "name": "SdsDialogModule",
            "children": [
                {
                    "type": "providers",
                    "elements": [
                        {
                            "name": "SdsDialogService"
                        }
                    ]
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsDialogActionsDirective"
                        },
                        {
                            "name": "SdsDialogCloseDirective"
                        },
                        {
                            "name": "SdsDialogContainerComponent"
                        },
                        {
                            "name": "SdsDialogContentDirective"
                        },
                        {
                            "name": "SdsDialogSubtitleDirective"
                        },
                        {
                            "name": "SdsDialogTitleDirective"
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
                            "name": "SdsDialogActionsDirective"
                        },
                        {
                            "name": "SdsDialogCloseDirective"
                        },
                        {
                            "name": "SdsDialogContainerComponent"
                        },
                        {
                            "name": "SdsDialogContentDirective"
                        },
                        {
                            "name": "SdsDialogSubtitleDirective"
                        },
                        {
                            "name": "SdsDialogTitleDirective"
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
            "name": "SdsDirectivesModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "ExternalLinkDirective"
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
                            "name": "ExternalLinkDirective"
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
            "name": "SdsIconModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsIconComponent"
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
                            "name": "SdsIconComponent"
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
            "name": "SdsMenuModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsMenuComponent"
                        },
                        {
                            "name": "SdsMenuHeaderComponent"
                        },
                        {
                            "name": "SdsMenuItemComponent"
                        },
                        {
                            "name": "SdsMenuTriggerForDirective"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": [
                        {
                            "name": "SdsIconModule"
                        }
                    ]
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsMenuComponent"
                        },
                        {
                            "name": "SdsMenuHeaderComponent"
                        },
                        {
                            "name": "SdsMenuItemComponent"
                        },
                        {
                            "name": "SdsMenuTriggerForDirective"
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
            "name": "SdsObserversModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsObserveWidthDirective"
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
                            "name": "SdsObserveWidthDirective"
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
            "name": "SdsPageModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsPageComponent"
                        },
                        {
                            "name": "SdsPageOptionsComponent"
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
                            "name": "SdsPageComponent"
                        },
                        {
                            "name": "SdsPageOptionsComponent"
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
            "name": "SdsPopupModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsPopupDirective"
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
                            "name": "SdsPopupDirective"
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
            "name": "SdsSearchModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsSearchComponent"
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
                            "name": "SdsSearchComponent"
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
            "name": "SdsSearchResultListModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsSearchResultListComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": [
                        {
                            "name": "SdsIconModule"
                        }
                    ]
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsSearchResultListComponent"
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
            "name": "SdsSelectedResultsModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SDSSelectedResultComponent"
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
                            "name": "SDSSelectedResultComponent"
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
            "name": "SdsSelectionPanelModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsSelectionPanelComponent"
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
                            "name": "SdsSelectionPanelComponent"
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
            "name": "SdsSideNavigationModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsSideNavigationComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": [
                        {
                            "name": "SdsAccordionModule"
                        }
                    ]
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsSideNavigationComponent"
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
            "name": "SdsTabOutsideModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SDSTabOutsideDirective"
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
                            "name": "SDSTabOutsideDirective"
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
            "name": "SdsTextModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsTextChildComponent"
                        },
                        {
                            "name": "SdsTextComponent"
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
                            "name": "SdsTextChildComponent"
                        },
                        {
                            "name": "SdsTextComponent"
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
            "name": "SdsToolbarModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsToolbarComponent"
                        },
                        {
                            "name": "SdsToolbarExpandDirective"
                        },
                        {
                            "name": "SdsToolbarHeaderComponent"
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
                            "name": "SdsToolbarComponent"
                        },
                        {
                            "name": "SdsToolbarExpandDirective"
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
            "name": "SdsTopBannerModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsTopBannerComponent"
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
                            "name": "SdsTopBannerComponent"
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
            "name": "SdsTruncateModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsTruncateTextByLineDirective"
                        },
                        {
                            "name": "SdsTruncatedTextContainerComponent"
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
                            "name": "SdsTruncateTextByLineDirective"
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
            "name": "SdsVideoPlayerModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsVideoPlayerComponent"
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
                            "name": "SdsVideoPlayerComponent"
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
                "name": "ACCORDION_ITEM_ANIMATION_TIMING",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/accordion/accordion-animations.ts",
                "type": "string",
                "defaultValue": "'225ms cubic-bezier(0.4,0.0,0.2,1)'",
                "description": "<p>Time and timing curve for accordion item animations. </p>\n"
            },
            {
                "name": "animationBody",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog-animations.ts",
                "type": "[]",
                "defaultValue": "[\r\n  // Note: The `enter` animation transitions to `transform: none`, because for some reason\r\n  // specifying the transform explicitly, causes IE both to blur the dialog content and\r\n  // decimate the animation performance. Leaving it as `none` solves both issues.\r\n  state('void, exit', style({opacity: 0, transform: 'scale(0.7)'})),\r\n  state('enter', style({transform: 'none'})),\r\n  transition('* => enter', animate('150ms cubic-bezier(0, 0, 0.2, 1)',\r\n      style({transform: 'none', opacity: 1}))),\r\n  transition('* => void, * => exit',\r\n      animate('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({opacity: 0}))),\r\n]"
            },
            {
                "name": "Autocomplete_Autocomplete_VALUE_ACCESSOR",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/autocomplete-search/autocomplete-search.component.ts",
                "type": "any",
                "defaultValue": "{\r\n  provide: NG_VALUE_ACCESSOR,\r\n  useExisting: forwardRef(() => SDSAutocompleteSearchComponent),\r\n  multi: true\r\n}"
            },
            {
                "name": "Autocomplete_VALUE_ACCESSOR",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/autocomplete/autocomplete.component.ts",
                "type": "any",
                "defaultValue": "{\r\n  provide: NG_VALUE_ACCESSOR,\r\n  useExisting: forwardRef(() => SDSAutocompleteComponent),\r\n  multi: true\r\n}"
            },
            {
                "name": "ChromeFirefoxMocks",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                "type": "object",
                "defaultValue": "{\r\n  enter: {\r\n    charCode: 13,\r\n    code: 'Enter',\r\n    key: 'Enter',\r\n    keyCode: 13,\r\n    keyIdentifier: undefined,\r\n    which: 13,\r\n  },\r\n  up: {\r\n    charCode: 0,\r\n    code: 'ArrowUp',\r\n    key: 'ArrowUp',\r\n    keyCode: 38,\r\n    keyIdentifier: undefined,\r\n    which: 38\r\n  },\r\n  down: {\r\n    charCode: 0,\r\n    code: 'ArrowDown',\r\n    key: 'ArrowDown',\r\n    keyCode: 40,\r\n    keyIdentifier: undefined,\r\n    which: 40\r\n  },\r\n  left: {\r\n    charCode: 0,\r\n    code: 'ArrowLeft',\r\n    key: 'ArrowLeft',\r\n    keyCode: 37,\r\n    keyIdentifier: undefined,\r\n    which: 37\r\n  },\r\n  right: {\r\n    charCode: 0,\r\n    code: 'ArrowRight',\r\n    key: 'ArrowRight',\r\n    keyCode: 39,\r\n    keyIdentifier: undefined,\r\n    which: 39\r\n  },\r\n  tab: {\r\n    charCode: 0,\r\n    code: 'Tab',\r\n    key: 'Tab',\r\n    keyCode: 9,\r\n    keyIdentifier: undefined,\r\n    which: 9\r\n  },\r\n  esc: {\r\n    charCode: 0,\r\n    code: 'Escape',\r\n    key: 'Escape',\r\n    keyCode: 27,\r\n    keyIdentifier: undefined,\r\n    which: 27\r\n  },\r\n  space: {\r\n    charCode: 0,\r\n    code: 'Space',\r\n    key: ' ',\r\n    keyCode: 32,\r\n    keyIdentifier: undefined,\r\n    which: 32\r\n  },\r\n  shift: {\r\n    charCode: 0,\r\n    code: 'ShiftLeft',\r\n    key: 'Shift',\r\n    keyCode: 16,\r\n    keyIdentifier: undefined,\r\n    which: 16\r\n  },\r\n  backspace: {\r\n    charCode: 0,\r\n    code: 'Backspace',\r\n    key: 'Backspace',\r\n    keyCode: 8,\r\n    keyIdentifier: undefined,\r\n    which: 8\r\n  },\r\n  delete: {\r\n    charCode: 0,\r\n    code: 'Delete',\r\n    key: 'Delete',\r\n    keyCode: 46,\r\n    keyIdentifier: undefined,\r\n    which: 46\r\n  },\r\n  0: {\r\n    charCode: 0,\r\n    code: 'Digit0',\r\n    key: 0,\r\n    keyCode: 48,\r\n    keyIdentifier: 'U+0030',\r\n    which: 48\r\n  },\r\n  1: {\r\n    charCode: 0,\r\n    code: 'Digit1',\r\n    key: 1,\r\n    keyCode: 49,\r\n    keyIdentifier: 'U+0031',\r\n    which: 49\r\n  },\r\n  2: {\r\n    charCode: 0,\r\n    code: 'Digit2',\r\n    key: 2,\r\n    keyCode: 50,\r\n    keyIdentifier: 'U+0032',\r\n    which: 50\r\n  },\r\n  3: {\r\n    charCode: 0,\r\n    code: 'Digit3',\r\n    key: 3,\r\n    keyCode: 51,\r\n    keyIdentifier: 'U+0033',\r\n    which: 51\r\n  },\r\n  4: {\r\n    charCode: 0,\r\n    code: 'Digit4',\r\n    key: 4,\r\n    keyCode: 52,\r\n    keyIdentifier: 'U+0034',\r\n    which: 52\r\n  },\r\n  5: {\r\n    charCode: 0,\r\n    code: 'Digit5',\r\n    key: 5,\r\n    keyCode: 53,\r\n    keyIdentifier: 'U+0035',\r\n    which: 53\r\n  },\r\n  6: {\r\n    charCode: 0,\r\n    code: 'Digit6',\r\n    key: 6,\r\n    keyCode: 54,\r\n    keyIdentifier: 'U+0036',\r\n    which: 54\r\n  },\r\n  7: {\r\n    charCode: 0,\r\n    code: 'Digit7',\r\n    key: 7,\r\n    keyCode: 55,\r\n    keyIdentifier: 'U+0037',\r\n    which: 55\r\n  },\r\n  8: {\r\n    charCode: 0,\r\n    code: 'Digit8',\r\n    key: 8,\r\n    keyCode: 56,\r\n    keyIdentifier: 'U+0038',\r\n    which: 56\r\n  },\r\n  9: {\r\n    charCode: 0,\r\n    code: 'Digit9',\r\n    key: 9,\r\n    keyCode: 57,\r\n    keyIdentifier: 'U+0039',\r\n    which: 57\r\n  }\r\n}"
            },
            {
                "name": "context",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/test.ts",
                "type": "",
                "defaultValue": "require.context('./', true, /\\.spec\\.ts$/)"
            },
            {
                "name": "dialogElementUid",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
                "type": "number",
                "defaultValue": "0",
                "description": "<p>Counter used to generate unique IDs for dialog elements. </p>\n"
            },
            {
                "name": "EdgeMocks",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                "type": "object",
                "defaultValue": "{\r\n  enter: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Enter',\r\n    keyCode: 13,\r\n    keyIdentifier: undefined,\r\n    which: 13\r\n  },\r\n  up: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Up',\r\n    keyCode: 38,\r\n    keyIdentifier: undefined,\r\n    which: 38\r\n  },\r\n  down: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Down',\r\n    keyCode: 40,\r\n    keyIdentifier: undefined,\r\n    which: 40\r\n  },\r\n  left: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Left',\r\n    keyCode: 37,\r\n    keyIdentifier: undefined,\r\n    which: 37\r\n  },\r\n  right: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Right',\r\n    keyCode: 39,\r\n    keyIdentifier: undefined,\r\n    which: 39\r\n  },\r\n  tab: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Tab',\r\n    keyCode: 9,\r\n    keyIdentifier: undefined,\r\n    which: 9\r\n  },\r\n  esc: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Esc',\r\n    keyCode: 27,\r\n    keyIdentifier: undefined,\r\n    which: 27\r\n  },\r\n  space: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: ' ',\r\n    keyCode: 32,\r\n    keyIdentifier: undefined,\r\n    which: 32\r\n  },\r\n  shift: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Shift',\r\n    keyCode: 16,\r\n    keyIdentifier: undefined,\r\n    which: 16\r\n  },\r\n  backspace: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Backspace',\r\n    keyCode: 8,\r\n    keyIdentifier: undefined,\r\n    which: 8\r\n  },\r\n  delete: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Delete',\r\n    keyCode: 46,\r\n    keyIdentifier: undefined,\r\n    which: 46\r\n  },\r\n  0: {\r\n    charCode: 0,\r\n    code: 'Digit0',\r\n    key: 0,\r\n    keyCode: 48,\r\n    keyIdentifier: 'U+0030',\r\n    which: 48\r\n  },\r\n  1: {\r\n    charCode: 0,\r\n    code: 'Digit1',\r\n    key: 1,\r\n    keyCode: 49,\r\n    keyIdentifier: 'U+0031',\r\n    which: 49\r\n  },\r\n  2: {\r\n    charCode: 0,\r\n    code: 'Digit2',\r\n    key: 2,\r\n    keyCode: 50,\r\n    keyIdentifier: 'U+0032',\r\n    which: 50\r\n  },\r\n  3: {\r\n    charCode: 0,\r\n    code: 'Digit3',\r\n    key: 3,\r\n    keyCode: 51,\r\n    keyIdentifier: 'U+0033',\r\n    which: 51\r\n  },\r\n  4: {\r\n    charCode: 0,\r\n    code: 'Digit4',\r\n    key: 4,\r\n    keyCode: 52,\r\n    keyIdentifier: 'U+0034',\r\n    which: 52\r\n  },\r\n  5: {\r\n    charCode: 0,\r\n    code: 'Digit5',\r\n    key: 5,\r\n    keyCode: 53,\r\n    keyIdentifier: 'U+0035',\r\n    which: 53\r\n  },\r\n  6: {\r\n    charCode: 0,\r\n    code: 'Digit6',\r\n    key: 6,\r\n    keyCode: 54,\r\n    keyIdentifier: 'U+0036',\r\n    which: 54\r\n  },\r\n  7: {\r\n    charCode: 0,\r\n    code: 'Digit7',\r\n    key: 7,\r\n    keyCode: 55,\r\n    keyIdentifier: 'U+0037',\r\n    which: 55\r\n  },\r\n  8: {\r\n    charCode: 0,\r\n    code: 'Digit8',\r\n    key: 8,\r\n    keyCode: 56,\r\n    keyIdentifier: 'U+0038',\r\n    which: 56\r\n  },\r\n  9: {\r\n    charCode: 0,\r\n    code: 'Digit9',\r\n    key: 9,\r\n    keyCode: 57,\r\n    keyIdentifier: 'U+0039',\r\n    which: 57\r\n  }\r\n}"
            },
            {
                "name": "GLOBAL_STRINGS",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/video-player/video-player.component.ts",
                "type": "any"
            },
            {
                "name": "GropupSampleAutocompleteData",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/autocomplete-search/autocomplete-sample.data.ts",
                "type": "[]",
                "defaultValue": "[\r\n  {\r\n    code: 'A',\r\n    elements: [\r\n      {\r\n        code: 'A',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0001001',\r\n        value: 'Formula Grants'\r\n      },\r\n      {\r\n        code: 'A',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0001002',\r\n        value: 'Formula Grants (Apportionments)'\r\n      },\r\n      {\r\n        code: 'A',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0001003',\r\n        value: 'Formula Grants (Cooperative Agreements)'\r\n      },\r\n      {\r\n        code: 'A',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0001004',\r\n        value: 'Formula Grants (Health Incentive Grants)'\r\n      }\r\n    ],\r\n    description:\r\n      'Formula Grants - Allocations of money to States or their subdivisions in accordance with a distribution formula prescribed by law or administrative regulation, for activities of a continuing nature not confined to a specific project.',\r\n    element_id: '0001',\r\n    value: 'FORMULA GRANTS'\r\n  },\r\n  {\r\n    code: 'B',\r\n    elements: [\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003001',\r\n        value: 'Cooperative Agreements'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003002',\r\n        value: 'Cooperative Agreements (Discretionary Grants)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003003',\r\n        value: 'Project Grants'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003004',\r\n        value:\r\n          'Project Grants (Capacity Building and Complaint Processing, Training)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003005',\r\n        value: 'Project Grants (Contracts)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003006',\r\n        value: 'Project Grants (Cooperative Agreements or Contracts)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003007',\r\n        value: 'Project Grants (Cooperative Agreements)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003008',\r\n        value: 'Project Grants (Discretionary)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003009',\r\n        value: 'Project Grants (Fellowships)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003010',\r\n        value:\r\n          'Project Grants (for administration projects authorized under Section'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003011',\r\n        value:\r\n          'Project Grants (for collaborative design of curriculum, production of'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003012',\r\n        value: 'Project Grants (for specified projects)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003013',\r\n        value: 'Project Grants (including individual awards)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003014',\r\n        value: 'Project Grants (including travel grants)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003015',\r\n        value:\r\n          'Project Grants (Rehabilitation of existing indoor and outdoor recreat'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003016',\r\n        value: 'Project Grants (Special)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003017',\r\n        value: 'Project Grants (to capitalize loan funds)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003018',\r\n        value: 'Project Grants (with Formula Distribution)'\r\n      }\r\n    ],\r\n    description:\r\n      'Project Grants - The funding, for fixed or known periods, of specific projects or the delivery of specific services or products without liability for damages for failure to perform. Project grants include fellowships, scholarships, research grants, training grants, traineeships, experimental and demonstration grants, evaluation grants, planning grants, technical assistance grants, survey grants, construction grants, and unsolicited contractual agreements.',\r\n    element_id: '0003',\r\n    value: 'PROJECT GRANTS'\r\n  },\r\n  {\r\n    code: 'C',\r\n    elements: [\r\n      {\r\n        code: 'C',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0005001',\r\n        value: 'Direct Payments for Specified Use'\r\n      },\r\n      {\r\n        code: 'C',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0005002',\r\n        value: 'Direct Payments for Specified Use (Cooperative Agreements)'\r\n      }\r\n    ],\r\n    description:\r\n      'Direct Payments for a Specified Use - Financial assistance provided directly to individuals, private firms, and other private institutions to encourage or subsidize a particular activity by conditioning the receipt of the on a particular performance by the recipient. This does not include solicited contracts for the procurement of goods and services for the Federal government.',\r\n    element_id: '0005',\r\n    value: 'DIRECT PAYMENTS FOR A SPECIFIED USE'\r\n  },\r\n  {\r\n    code: 'D',\r\n    elements: [\r\n      {\r\n        code: 'D',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0007001',\r\n        value: 'Direct Payments with Unrestricted Use'\r\n      }\r\n    ],\r\n    description:\r\n      'Direct Payments with Unrestricted Use - Financial assistance provided directly to beneficiaries who satisfy eligibility requirements with no restrictions imposed on the recipient as to how the money is spent. Included are payments under retirement, pension, and compensation programs.',\r\n    element_id: '0007',\r\n    value: 'DIRECT PAYMENTS WITH UNRESTRICTED USE'\r\n  },\r\n  {\r\n    code: 'E',\r\n    elements: [\r\n      {\r\n        code: 'E',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0009001',\r\n        value: 'Direct Loans'\r\n      }\r\n    ],\r\n    description:\r\n      'Direct Loans - Financial assistance provided through the lending of Federal monies for a specific period of time, with a reasonable expectation of repayment. Such loans may or may not require the payment of interest.',\r\n    element_id: '0009',\r\n    value: 'DIRECT LOANS'\r\n  },\r\n  {\r\n    code: 'F',\r\n    elements: [\r\n      {\r\n        code: 'F',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0011001',\r\n        value: 'Guaranteed/Insured Loans'\r\n      },\r\n      {\r\n        code: 'F',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0011002',\r\n        value:\r\n          'Guaranteed/Insured Loans (including Guaranty Participation Loans)'\r\n      },\r\n      {\r\n        code: 'F',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0011003',\r\n        value:\r\n          'Guaranteed/Insured Loans (including Immediate Participation Loans)'\r\n      },\r\n      {\r\n        code: 'F',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0011004',\r\n        value: 'Loan Guarantees/Grants'\r\n      }\r\n    ],\r\n    description:\r\n      'Guaranteed/Insured Loans - Programs in which the Federal Government makes an arrangement to indemnify a lender against all or part of all of any defaults by those responsible for the repayment of loans.',\r\n    element_id: '0011',\r\n    value: 'GUARANTEED/INSURED LOANS'\r\n  },\r\n  {\r\n    code: 'G',\r\n    elements: [\r\n      {\r\n        code: 'G',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0013001',\r\n        value: 'Insurance'\r\n      },\r\n      {\r\n        code: 'G',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0013002',\r\n        value: 'Insurance (Guaranteed Surety Bonds)'\r\n      },\r\n      {\r\n        code: 'G',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0013003',\r\n        value: 'Insurance (Reimbursement)'\r\n      }\r\n    ],\r\n    description:\r\n      'Insurance - Financial assistance provided to assure reimbursement for losses sustained under specified conditions. Coverage may be provided directly by the Federal Government or through private carriers and may or may not involve the payment of premiums.',\r\n    element_id: '0013',\r\n    value: 'INSURANCE'\r\n  },\r\n  {\r\n    code: 'H',\r\n    elements: [\r\n      {\r\n        code: 'H',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0015001',\r\n        value: 'Sale, Exchange, or Donation of Property and Goods'\r\n      }\r\n    ],\r\n    description:\r\n      'Sale, Exchange, or Donation of Property or Goods - Programs that provide for the sale, exchange, or donation of Federal real property, personal property, commodities, and other goods including land, buildings, equipment, food, and drugs. This does not include the loan of, use of, or access to Federal facilities or property.',\r\n    element_id: '0015',\r\n    value: 'SALE, EXCHANGE, OR DONATION OF PROPERTY OR GOODS'\r\n  },\r\n  {\r\n    code: 'I',\r\n    elements: [\r\n      {\r\n        code: 'I',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0017001',\r\n        value: 'Use of Property, Facilities, and Equipment'\r\n      }\r\n    ],\r\n    description:\r\n      'Use of Property, Facilities, or Equipment - Programs that provide for the loan of, use of, or access to Federal facilities or property wherein the federally owned facilities or property do not remain in the possession of the recipient of the assistance.',\r\n    element_id: '0017',\r\n    value: 'USE OF PROPERTY, FACILITIES, OR EQUIPMENT'\r\n  },\r\n  {\r\n    code: 'J',\r\n    elements: [\r\n      {\r\n        code: 'J',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0019001',\r\n        value: 'Provision of Specialized Services'\r\n      }\r\n    ],\r\n    description:\r\n      'Provision of Specialized Services - Programs that provide Federal personnel to directly perform certain tasks for the benefit of communities or individuals. These services may be performed in conjunction with non-Federal personnel, but they involve more than consultation, advice, or counseling.',\r\n    element_id: '0019',\r\n    value: 'PROVISION OF SPECIALIZED SERVICES'\r\n  },\r\n  {\r\n    code: 'K',\r\n    elements: [\r\n      {\r\n        code: 'K',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0021001',\r\n        value: 'Advisory Services and Counseling'\r\n      },\r\n      {\r\n        code: 'K',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0021002',\r\n        value: 'Advisory Services on Compliance'\r\n      }\r\n    ],\r\n    description:\r\n      'Advisory Services and Counseling - Programs that provide Federal specialists to consult, advise, or counsel communities or individuals including conferences, workshops, or personal contacts. This may involve the use of published information, but only in a secondary capacity.',\r\n    element_id: '0021',\r\n    value: 'ADVISORY SERVICES AND COUNSELING'\r\n  },\r\n  {\r\n    code: 'L',\r\n    elements: [\r\n      {\r\n        code: 'L',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0023001',\r\n        value: 'Dissemination of Technical Information'\r\n      },\r\n      {\r\n        code: 'L',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0023002',\r\n        value: 'Information'\r\n      }\r\n    ],\r\n    description:\r\n      'Dissemination of Technical Information - Programs that provide for the publication and distribution of information or data of a specialized technical nature, frequently through clearinghouses or libraries. This does not include conventional public information services designed for general public consumption.',\r\n    element_id: '0023',\r\n    value: 'DISSEMINATION OF TECHNICAL INFORMATION'\r\n  },\r\n  {\r\n    code: 'M',\r\n    elements: [\r\n      {\r\n        code: 'M',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0025001',\r\n        value: 'Training'\r\n      }\r\n    ],\r\n    description:\r\n      'Training - Programs that provide instructional activities conducted directly by a Federal agency for individuals not employed by the Federal Government.',\r\n    element_id: '0025',\r\n    value: 'TRAINING'\r\n  },\r\n  {\r\n    code: 'N',\r\n    elements: [\r\n      {\r\n        code: 'N',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0027020',\r\n        value: 'Resolution of Disputes'\r\n      },\r\n      {\r\n        code: 'N',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0027001',\r\n        value: 'Investigation of Complaints'\r\n      },\r\n      {\r\n        code: 'N',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0027002',\r\n        value: 'Investigation of Complaints (Compliance Reviews)'\r\n      }\r\n    ],\r\n    description:\r\n      'Investigation of Complaints - Federal administrative agency activities that are initiated in response to requests, either formal or informal, to examine or investigate claims of violations of Federal statutes, policy, or procedure. Such claims must come from outside the Federal Government.',\r\n    element_id: '0027',\r\n    value: 'INVESTIGATION OF COMPLAINTS'\r\n  },\r\n  {\r\n    code: 'O',\r\n    elements: [\r\n      {\r\n        code: 'O',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0029001',\r\n        value: 'Federal Employment'\r\n      }\r\n    ],\r\n    description:\r\n      'Federal Employment - Programs that reflect the government-wide resposibilities of the Office of Personnel Management in the recruitment and hiring of Federal civilian agency personnel.',\r\n    element_id: '0029',\r\n    value: 'FEDERAL EMPLOYMENT'\r\n  },\r\n  {\r\n    code: 'Z',\r\n    elements: [\r\n      {\r\n        code: 'Z',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0090001',\r\n        value: 'Salaries and Expenses'\r\n      }\r\n    ],\r\n    description: null,\r\n    element_id: '0090',\r\n    value: 'SALARIES AND EXPENSES'\r\n  }\r\n]"
            },
            {
                "name": "IEMocks",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                "type": "object",
                "defaultValue": "{\r\n  enter: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Enter',\r\n    keyCode: 13,\r\n    keyIdentifier: undefined,\r\n    which: 13\r\n  },\r\n  up: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Up',\r\n    keyCode: 38,\r\n    keyIdentifier: undefined,\r\n    which: 38\r\n  },\r\n  down: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Down',\r\n    keyCode: 40,\r\n    keyIdentifier: undefined,\r\n    which: 40\r\n  },\r\n  left: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Left',\r\n    keyCode: 37,\r\n    keyIdentifier: undefined,\r\n    which: 37\r\n  },\r\n  right: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Right',\r\n    keyCode: 39,\r\n    keyIdentifier: undefined,\r\n    which: 39\r\n  },\r\n  tab: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Tab',\r\n    keyCode: 9,\r\n    keyIdentifier: undefined,\r\n    which: 9\r\n  },\r\n  esc: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Esc',\r\n    keyCode: 27,\r\n    keyIdentifier: undefined,\r\n    which: 27\r\n  },\r\n  space: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Spacebar',\r\n    keyCode: 32,\r\n    keyIdentifier: undefined,\r\n    which: 32\r\n  },\r\n  shift: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Shift',\r\n    keyCode: 16,\r\n    keyIdentifier: undefined,\r\n    which: 16\r\n  },\r\n  backspace: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Backspace',\r\n    keyCode: 8,\r\n    keyIdentifier: undefined,\r\n    which: 8\r\n  },\r\n  delete: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Delete',\r\n    keyCode: 46,\r\n    keyIdentifier: undefined,\r\n    which: 46\r\n  },\r\n  0: {\r\n    charCode: 0,\r\n    code: 'Digit0',\r\n    key: 0,\r\n    keyCode: 48,\r\n    keyIdentifier: 'U+0030',\r\n    which: 48\r\n  },\r\n  1: {\r\n    charCode: 0,\r\n    code: 'Digit1',\r\n    key: 1,\r\n    keyCode: 49,\r\n    keyIdentifier: 'U+0031',\r\n    which: 49\r\n  },\r\n  2: {\r\n    charCode: 0,\r\n    code: 'Digit2',\r\n    key: 2,\r\n    keyCode: 50,\r\n    keyIdentifier: 'U+0032',\r\n    which: 50\r\n  },\r\n  3: {\r\n    charCode: 0,\r\n    code: 'Digit3',\r\n    key: 3,\r\n    keyCode: 51,\r\n    keyIdentifier: 'U+0033',\r\n    which: 51\r\n  },\r\n  4: {\r\n    charCode: 0,\r\n    code: 'Digit4',\r\n    key: 4,\r\n    keyCode: 52,\r\n    keyIdentifier: 'U+0034',\r\n    which: 52\r\n  },\r\n  5: {\r\n    charCode: 0,\r\n    code: 'Digit5',\r\n    key: 5,\r\n    keyCode: 53,\r\n    keyIdentifier: 'U+0035',\r\n    which: 53\r\n  },\r\n  6: {\r\n    charCode: 0,\r\n    code: 'Digit6',\r\n    key: 6,\r\n    keyCode: 54,\r\n    keyIdentifier: 'U+0036',\r\n    which: 54\r\n  },\r\n  7: {\r\n    charCode: 0,\r\n    code: 'Digit7',\r\n    key: 7,\r\n    keyCode: 55,\r\n    keyIdentifier: 'U+0037',\r\n    which: 55\r\n  },\r\n  8: {\r\n    charCode: 0,\r\n    code: 'Digit8',\r\n    key: 8,\r\n    keyCode: 56,\r\n    keyIdentifier: 'U+0038',\r\n    which: 56\r\n  },\r\n  9: {\r\n    charCode: 0,\r\n    code: 'Digit9',\r\n    key: 9,\r\n    keyCode: 57,\r\n    keyIdentifier: 'U+0039',\r\n    which: 57\r\n  }\r\n}"
            },
            {
                "name": "mocks",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                "type": "object",
                "defaultValue": "{\r\n  ie: IEMocks,\r\n  edge: EdgeMocks,\r\n  default: ChromeFirefoxMocks,\r\n  safari: SafariMocks\r\n}"
            },
            {
                "name": "require",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/test.ts",
                "type": "any"
            },
            {
                "name": "SafariMocks",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                "type": "object",
                "defaultValue": "{\r\n  enter: {\r\n    charCode: 0,\r\n    code: 'Enter',\r\n    key: 'Enter',\r\n    keyCode: 13,\r\n    keyIdentifier: 'Enter',\r\n    which: 13\r\n  },\r\n  up: {\r\n    charCode: 0,\r\n    code: 'ArrowUp',\r\n    key: 'ArrowUp',\r\n    keyCode: 38,\r\n    keyIdentifier: 'Up',\r\n    which: 38\r\n  },\r\n  down: {\r\n    charCode: 0,\r\n    code: 'ArrowDown',\r\n    key: 'ArrowDown',\r\n    keyCode: 40,\r\n    keyIdentifier: 'Down',\r\n    which: 40\r\n  },\r\n  left: {\r\n    charCode: 0,\r\n    code: 'ArrowLeft',\r\n    key: 'ArrowLeft',\r\n    keyCode: 37,\r\n    keyIdentifier: 'Left',\r\n    which: 37\r\n  },\r\n  right: {\r\n    charCode: 0,\r\n    code: 'ArrowRight',\r\n    key: 'ArrowRight',\r\n    keyCode: 39,\r\n    keyIdentifier: 'Right',\r\n    which: 39\r\n  },\r\n  tab: {\r\n    charCode: 0,\r\n    code: 'Tab',\r\n    key: 'Tab',\r\n    keyCode: 9,\r\n    keyIdentifier: 'U+0009',\r\n    which: 9\r\n  },\r\n  esc: {\r\n    charCode: 0,\r\n    code: 'Escape',\r\n    key: 'Escape',\r\n    keyCode: 27,\r\n    keyIdentifier: 'U+001B',\r\n    which: 27\r\n  },\r\n  space: {\r\n    charCode: 0,\r\n    code: 'Space',\r\n    key: ' ',\r\n    keyCode: 32,\r\n    keyIdentifier: 'U+0020',\r\n    which: 32\r\n  },\r\n  shift: {\r\n    charCode: 0,\r\n    code: 'ShiftLeft',\r\n    key: 'Shift',\r\n    keyCode: 16,\r\n    keyIdentifier: 'Shift',\r\n    which: 16\r\n  },\r\n  backspace: {\r\n    charCode: 0,\r\n    code: 'Backspace',\r\n    key: 'Backspace',\r\n    keyCode: 8,\r\n    keyIdentifier: 'U+0008',\r\n    which: 8\r\n  },\r\n  delete: {\r\n    charCode: 0,\r\n    code: 'Delete',\r\n    key: 'Delete',\r\n    keyCode: 46,\r\n    keyIdentifier: 'U+007F',\r\n    which: 46\r\n  },\r\n  0: {\r\n    charCode: 0,\r\n    code: 'Digit0',\r\n    key: 0,\r\n    keyCode: 48,\r\n    keyIdentifier: 'U+0030',\r\n    which: 48\r\n  },\r\n  1: {\r\n    charCode: 0,\r\n    code: 'Digit1',\r\n    key: 1,\r\n    keyCode: 49,\r\n    keyIdentifier: 'U+0031',\r\n    which: 49\r\n  },\r\n  2: {\r\n    charCode: 0,\r\n    code: 'Digit2',\r\n    key: 2,\r\n    keyCode: 50,\r\n    keyIdentifier: 'U+0032',\r\n    which: 50\r\n  },\r\n  3: {\r\n    charCode: 0,\r\n    code: 'Digit3',\r\n    key: 3,\r\n    keyCode: 51,\r\n    keyIdentifier: 'U+0033',\r\n    which: 51\r\n  },\r\n  4: {\r\n    charCode: 0,\r\n    code: 'Digit4',\r\n    key: 4,\r\n    keyCode: 52,\r\n    keyIdentifier: 'U+0034',\r\n    which: 52\r\n  },\r\n  5: {\r\n    charCode: 0,\r\n    code: 'Digit5',\r\n    key: 5,\r\n    keyCode: 53,\r\n    keyIdentifier: 'U+0035',\r\n    which: 53\r\n  },\r\n  6: {\r\n    charCode: 0,\r\n    code: 'Digit6',\r\n    key: 6,\r\n    keyCode: 54,\r\n    keyIdentifier: 'U+0036',\r\n    which: 54\r\n  },\r\n  7: {\r\n    charCode: 0,\r\n    code: 'Digit7',\r\n    key: 7,\r\n    keyCode: 55,\r\n    keyIdentifier: 'U+0037',\r\n    which: 55\r\n  },\r\n  8: {\r\n    charCode: 0,\r\n    code: 'Digit8',\r\n    key: 8,\r\n    keyCode: 56,\r\n    keyIdentifier: 'U+0038',\r\n    which: 56\r\n  },\r\n  9: {\r\n    charCode: 0,\r\n    code: 'Digit9',\r\n    key: 9,\r\n    keyCode: 57,\r\n    keyIdentifier: 'U+0039',\r\n    which: 57\r\n  }\r\n}"
            },
            {
                "name": "SDS_ACCORDION",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/accordion/accordion-base.ts",
                "type": "",
                "defaultValue": "new InjectionToken<SdsAccordionBase>('SDS_ACCORDION')",
                "description": "<p>Token used to provide a <code>SdsAccordion</code> to <code>SdsAccordionItem</code>.\nUsed primarily to avoid circular imports between <code>SdsAccordion</code> and <code>SdsAccordionItem</code>.</p>\n"
            },
            {
                "name": "SDS_DIALOG_DATA",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                "type": "",
                "defaultValue": "new InjectionToken<any>('SdsDialogData')",
                "description": "<p>Injection token that can be used to access the data that was passed in to a dialog. </p>\n"
            },
            {
                "name": "SDS_DIALOG_DEFAULT_OPTIONS",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                "type": "",
                "defaultValue": "new InjectionToken<SdsDialogConfig>('sds-dialog-default-options')",
                "description": "<p>Injection token that can be used to specify default dialog options. </p>\n"
            },
            {
                "name": "SDS_DIALOG_SCROLL_STRATEGY",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                "type": "",
                "defaultValue": "new InjectionToken<() => ScrollStrategy>('sds-dialog-scroll-strategy')",
                "description": "<p>Injection token that determines the scroll handling while the dialog is open. </p>\n"
            },
            {
                "name": "SDS_DIALOG_SCROLL_STRATEGY_PROVIDER",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                "type": "object",
                "defaultValue": "{\r\n  provide: SDS_DIALOG_SCROLL_STRATEGY,\r\n  deps: [Overlay],\r\n  useFactory: SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,\r\n}"
            },
            {
                "name": "SDS_MENU_TOKEN",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                "type": "",
                "defaultValue": "new InjectionToken<SdsMenuInterface>(\r\n  'SDS_MENU_TOKEN'\r\n)",
                "description": "<p>Injection token used to provide the parent menu to menu items. </p>\n"
            },
            {
                "name": "SDS_SelectedResult_VALUE_ACCESSOR",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/selected-result/selected-result.component.ts",
                "type": "any",
                "defaultValue": "{\r\n  provide: NG_VALUE_ACCESSOR,\r\n  useExisting: forwardRef(() => SDSSelectedResultComponent),\r\n  multi: true\r\n}"
            },
            {
                "name": "SDS_TRUNCATED_TEXT_DATA",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/truncate-text/truncates-text-base.ts",
                "type": "",
                "defaultValue": "new InjectionToken<any>(\r\n  'SdsTruncatedTextData'\r\n)",
                "description": "<p>Used primarily to avoid circular imports between <code>SdsAccordion</code> and <code>SdsAccordionItem</code>.</p>\n"
            },
            {
                "name": "sdsDialogAnimations",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog-animations.ts",
                "type": "literal type",
                "defaultValue": "{\r\n  /** Animation that is applied on the dialog container by defalt. */\r\n  dialogContainer: trigger('dialogContainer', animationBody),\r\n}",
                "description": "<p>Animations used by SdsDialog.</p>\n"
            },
            {
                "name": "sdsExpansionAnimations",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/accordion/accordion-animations.ts",
                "type": "literal type",
                "defaultValue": "{\r\n  /** Animation that expands and collapses the accordion item content. */\r\n  bodyExpansion: trigger('bodyExpansion', [\r\n    state('collapsed, void', style({height: '0px', visibility: 'hidden'})),\r\n    state('expanded', style({height: '*', visibility: 'visible'})),\r\n    transition('expanded <=> collapsed, void => collapsed',\r\n      animate(ACCORDION_ITEM_ANIMATION_TIMING)),\r\n  ])\r\n}"
            },
            {
                "name": "sdsMenuAnimations",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/menu/menu-animations.ts",
                "type": "literal type",
                "defaultValue": "{\r\n  transformMenu: trigger('transformMenu', [\r\n    state(\r\n      'void',\r\n      style({\r\n        opacity: 0,\r\n        transform: 'scale(0.8)'\r\n      })\r\n    ),\r\n    transition(\r\n      'void => enter',\r\n      group([\r\n        query(\r\n          '.sds-menu',\r\n          animate(\r\n            '100ms linear',\r\n            style({\r\n              opacity: 1\r\n            })\r\n          )\r\n        ),\r\n        animate(\r\n          '120ms cubic-bezier(0, 0, 0.2, 1)',\r\n          style({ transform: 'scale(1)' })\r\n        )\r\n      ])\r\n    ),\r\n    transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 })))\r\n  ])\r\n}"
            },
            {
                "name": "sdsToolbarAnimations",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/toolbar/toolbar-animations.ts",
                "type": "literal type",
                "defaultValue": "{\r\n  /** Animation that expands and collapses the accordion item content. */\r\n  bodyExpansion: trigger('bodyExpansion', [\r\n    state('collapsed, void', style({width: '0px', height: '0px', opacity: '0', visibility: 'hidden'})),\r\n    state('expanded', style({width: '{{expandedWidth}}', height: '*', opacity: '1', visibility: 'visible'}), {\r\n      params: { expandedWidth: '300px' }\r\n    }),\r\n    transition('expanded <=> collapsed, void => collapsed',\r\n      animate(TOOLBAR_ANIMATION_TIMING)),\r\n  ])\r\n}"
            },
            {
                "name": "sdsTruncateTextAnimations",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/truncate-text/truncate-text-animations.ts",
                "type": "literal type",
                "defaultValue": "{\r\n  container: trigger('container', [\r\n    state(\r\n      'void',\r\n      style({\r\n        opacity: 0,\r\n        transform: 'scale(0.8)'\r\n      })\r\n    ),\r\n    transition(\r\n      'void => enter',\r\n      group([\r\n        query(\r\n          '.sds-overlay',\r\n          animate(\r\n            '100ms linear',\r\n            style({\r\n              opacity: 1\r\n            })\r\n          )\r\n        ),\r\n        animate(\r\n          '120ms cubic-bezier(0, 0, 0.2, 1)',\r\n          style({ transform: 'scale(1)' })\r\n        )\r\n      ])\r\n    ),\r\n    transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 })))\r\n  ])\r\n}"
            },
            {
                "name": "TOOLBAR_ANIMATION_TIMING",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/toolbar/toolbar-animations.ts",
                "type": "string",
                "defaultValue": "'225ms cubic-bezier(0.4,0.0,0.2,1)'",
                "description": "<p>Time and timing curve for accordion item animations. </p>\n"
            },
            {
                "name": "uniqueId",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/accordion/accordion-item.component.ts",
                "type": "number",
                "defaultValue": "0",
                "description": "<p>Counter for generating unique element ids. </p>\n"
            },
            {
                "name": "uniqueId",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog-ref.ts",
                "type": "number",
                "defaultValue": "0"
            },
            {
                "name": "uniqueId",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/toolbar/toolbar.component.ts",
                "type": "number",
                "defaultValue": "0",
                "description": "<p>Counter for generating unique element ids. </p>\n"
            }
        ],
        "functions": [
            {
                "name": "_applyConfigDefaults",
                "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Applies default options to the dialog config.</p>\n",
                "args": [
                    {
                        "name": "config",
                        "optional": true
                    },
                    {
                        "name": "defaultOptions",
                        "optional": true
                    }
                ],
                "returnType": "SdsDialogConfig",
                "jsdoctags": [
                    {
                        "name": {
                            "pos": 14481,
                            "end": 14487,
                            "flags": 0,
                            "escapedText": "config"
                        },
                        "optional": true,
                        "tagName": {
                            "pos": 14475,
                            "end": 14480,
                            "flags": 0,
                            "escapedText": "param"
                        },
                        "comment": "<p>Config to be modified.</p>\n"
                    },
                    {
                        "name": {
                            "pos": 14522,
                            "end": 14536,
                            "flags": 0,
                            "escapedText": "defaultOptions"
                        },
                        "optional": true,
                        "tagName": {
                            "pos": 14516,
                            "end": 14521,
                            "flags": 0,
                            "escapedText": "param"
                        },
                        "comment": "<p>Default options provided.</p>\n"
                    },
                    {
                        "tagName": {
                            "pos": 14568,
                            "end": 14575,
                            "flags": 0,
                            "escapedText": "returns"
                        },
                        "comment": "<p>The new configuration object.</p>\n"
                    }
                ]
            },
            {
                "name": "createFakeEvent",
                "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Creates a fake event object with any desired event type. </p>\n",
                "args": [
                    {
                        "name": "type"
                    },
                    {
                        "name": "canBubble",
                        "type": ""
                    },
                    {
                        "name": "cancelable",
                        "type": ""
                    }
                ],
                "jsdoctags": [
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "canBubble",
                        "type": "",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "cancelable",
                        "type": "",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "createKeyboardEvent",
                "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Dispatches a keydown event from an element. </p>\n",
                "args": [
                    {
                        "name": "type"
                    },
                    {
                        "name": "keyCode"
                    },
                    {
                        "name": "target",
                        "optional": true
                    },
                    {
                        "name": "key",
                        "optional": true
                    }
                ],
                "jsdoctags": [
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "keyCode",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "target",
                        "optional": true,
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "key",
                        "optional": true,
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "createMouseEvent",
                "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "",
                "args": [
                    {
                        "name": "type"
                    },
                    {
                        "name": "x",
                        "type": "number"
                    },
                    {
                        "name": "y",
                        "type": "number"
                    },
                    {
                        "name": "button",
                        "type": "number"
                    }
                ],
                "jsdoctags": [
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "x",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "y",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "button",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "createTouchEvent",
                "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Creates a browser TouchEvent with the specified pointer coordinates. </p>\n",
                "args": [
                    {
                        "name": "type"
                    },
                    {
                        "name": "pageX",
                        "type": "number"
                    },
                    {
                        "name": "pageY",
                        "type": "number"
                    }
                ],
                "jsdoctags": [
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "pageX",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "pageY",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "dispatchEvent",
                "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Utility to dispatch any event on a Node. </p>\n",
                "args": [
                    {
                        "name": "node"
                    },
                    {
                        "name": "event"
                    }
                ],
                "returnType": "Event",
                "jsdoctags": [
                    {
                        "name": "node",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "event",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "dispatchFakeEvent",
                "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Shorthand to dispatch a fake event on a specified node. </p>\n",
                "args": [
                    {
                        "name": "node"
                    },
                    {
                        "name": "type"
                    },
                    {
                        "name": "canBubble",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "returnType": "Event",
                "jsdoctags": [
                    {
                        "name": "node",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "canBubble",
                        "type": "boolean",
                        "optional": true,
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "dispatchKeyboardEvent",
                "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Shorthand to dispatch a keyboard event with a specified key code. </p>\n",
                "args": [
                    {
                        "name": "node"
                    },
                    {
                        "name": "type"
                    },
                    {
                        "name": "keyCode"
                    },
                    {
                        "name": "target",
                        "optional": true
                    }
                ],
                "returnType": "KeyboardEvent",
                "jsdoctags": [
                    {
                        "name": "node",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "keyCode",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "target",
                        "optional": true,
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "dispatchMouseEvent",
                "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Shorthand to dispatch a mouse event on the specified coordinates. </p>\n",
                "args": [
                    {
                        "name": "node"
                    },
                    {
                        "name": "type"
                    },
                    {
                        "name": "x",
                        "type": "number"
                    },
                    {
                        "name": "y",
                        "type": "number"
                    },
                    {
                        "name": "event",
                        "type": ""
                    }
                ],
                "returnType": "MouseEvent",
                "jsdoctags": [
                    {
                        "name": "node",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "x",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "y",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "event",
                        "type": "",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "dispatchTouchEvent",
                "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Shorthand to dispatch a touch event on the specified coordinates. </p>\n",
                "args": [
                    {
                        "name": "node"
                    },
                    {
                        "name": "type"
                    },
                    {
                        "name": "x",
                        "type": "number"
                    },
                    {
                        "name": "y",
                        "type": "number"
                    }
                ],
                "jsdoctags": [
                    {
                        "name": "node",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "x",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "y",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "getClosestDialog",
                "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Finds the closest SdsDialogRef to an element by looking at the DOM.</p>\n",
                "args": [
                    {
                        "name": "element"
                    },
                    {
                        "name": "openDialogs"
                    }
                ],
                "jsdoctags": [
                    {
                        "name": {
                            "pos": 4042,
                            "end": 4049,
                            "flags": 0,
                            "escapedText": "element"
                        },
                        "tagName": {
                            "pos": 4036,
                            "end": 4041,
                            "flags": 0,
                            "escapedText": "param"
                        },
                        "comment": "<p>Element relative to which to look for a dialog.</p>\n"
                    },
                    {
                        "name": {
                            "pos": 4109,
                            "end": 4120,
                            "flags": 0,
                            "escapedText": "openDialogs"
                        },
                        "tagName": {
                            "pos": 4103,
                            "end": 4108,
                            "flags": 0,
                            "escapedText": "param"
                        },
                        "comment": "<p>References to the currently-open dialogs.</p>\n"
                    }
                ]
            },
            {
                "name": "patchElementFocus",
                "file": "libs/packages/components/src/lib/testing/element-focus.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Patches an elements focus and blur methods to emit events consistently and predictably.\nThis is necessary, because some browsers, like IE11, will call the focus handlers asynchronously,\nwhile others won&#39;t fire them at all if the browser window is not focused.</p>\n",
                "args": [
                    {
                        "name": "element"
                    }
                ],
                "jsdoctags": [
                    {
                        "name": "element",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "SDS_DIALOG_SCROLL_STRATEGY_FACTORY",
                "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "",
                "args": [
                    {
                        "name": "overlay"
                    }
                ],
                "returnType": "ScrollStrategy",
                "jsdoctags": [
                    {
                        "name": "overlay",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY",
                "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "",
                "args": [
                    {
                        "name": "overlay"
                    }
                ],
                "returnType": "ScrollStrategy",
                "jsdoctags": [
                    {
                        "name": "overlay",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "throwSdsDialogContentAlreadyAttachedError",
                "file": "libs/packages/components/src/lib/dialog/dialog-container.component.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Throws an exception for the case when a ComponentPortal is\nattached to a DomPortalOutlet without an origin.</p>\n",
                "args": []
            }
        ],
        "typealiases": [
            {
                "name": "DialogRole",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "\"dialog\" | \"alertdialog\"",
                "file": "libs/packages/components/src/lib/dialog/dialog-config.ts",
                "description": "<p>Valid ARIA roles for a dialog element. </p>\n",
                "kind": 168
            },
            {
                "name": "MenuPositionX",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "\"before\" | \"after\"",
                "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                "description": "<p>Menu Positions </p>\n",
                "kind": 168
            },
            {
                "name": "MenuPositionY",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "\"above\" | \"below\"",
                "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                "description": "",
                "kind": 168
            },
            {
                "name": "MenuSizes",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "",
                "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                "description": "<p>Menu available sizes </p>\n",
                "kind": 177
            },
            {
                "name": "PaginationDisplayMode",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "\"default\" | \"results\"",
                "file": "libs/packages/components/src/lib/pagination/pagination.component.ts",
                "description": "<p>pagination display modes. </p>\n",
                "kind": 168
            },
            {
                "name": "SdsAccordionDisplayMode",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "\"default\" | \"basic\"",
                "file": "libs/packages/components/src/lib/accordion/accordion-base.ts",
                "description": "<p>Accordion&#39;s display modes. </p>\n",
                "kind": 168
            },
            {
                "name": "SdsAccordionItemState",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "\"expanded\" | \"collapsed\"",
                "file": "libs/packages/components/src/lib/accordion/accordion-item.component.ts",
                "description": "<p>Accordion Item&#39;s states. </p>\n",
                "kind": 168
            },
            {
                "name": "SdsToolbarState",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "\"expanded\" | \"collapsed\"",
                "file": "libs/packages/components/src/lib/toolbar/toolbar.component.ts",
                "description": "<p>Toolbar&#39;s states. </p>\n",
                "kind": 168
            }
        ],
        "enumerations": [
            {
                "name": "KEYS",
                "childs": [
                    {
                        "name": "ENTER",
                        "value": "enter"
                    },
                    {
                        "name": "ALT",
                        "value": "alt"
                    },
                    {
                        "name": "UP",
                        "value": "up"
                    },
                    {
                        "name": "DOWN",
                        "value": "down"
                    },
                    {
                        "name": "LEFT",
                        "value": "left"
                    },
                    {
                        "name": "RIGHT",
                        "value": "right"
                    },
                    {
                        "name": "TAB",
                        "value": "tab"
                    },
                    {
                        "name": "ESC",
                        "value": "esc"
                    },
                    {
                        "name": "SPACE",
                        "value": "space"
                    },
                    {
                        "name": "SHIFT",
                        "value": "shift"
                    },
                    {
                        "name": "BACKSPACE",
                        "value": "backspace"
                    },
                    {
                        "name": "ONE",
                        "value": "1"
                    },
                    {
                        "name": "TWO",
                        "value": "2"
                    },
                    {
                        "name": "THREE",
                        "value": "3"
                    },
                    {
                        "name": "FOUR",
                        "value": "4"
                    },
                    {
                        "name": "FIVE",
                        "value": "5"
                    },
                    {
                        "name": "SIX",
                        "value": "6"
                    },
                    {
                        "name": "SEVEN",
                        "value": "7"
                    },
                    {
                        "name": "EIGHT",
                        "value": "8"
                    },
                    {
                        "name": "NINE",
                        "value": "9"
                    },
                    {
                        "name": "ZERO",
                        "value": "0"
                    },
                    {
                        "name": "DELETE",
                        "value": "delete"
                    }
                ],
                "ctype": "miscellaneous",
                "subtype": "enum",
                "description": "",
                "file": "libs/packages/components/src/lib/key-helper/key-helper.ts"
            },
            {
                "name": "NavigationMode",
                "childs": [
                    {
                        "name": "INTERNAL"
                    },
                    {
                        "name": "EXTERNAL"
                    },
                    {
                        "name": "EVENT"
                    },
                    {
                        "name": "LABEL"
                    }
                ],
                "ctype": "miscellaneous",
                "subtype": "enum",
                "description": "",
                "file": "libs/packages/components/src/lib/common-navigation/common-navigation-model.ts"
            },
            {
                "name": "SelectionMode",
                "childs": [
                    {
                        "name": "SINGLE"
                    },
                    {
                        "name": "MULTIPLE"
                    }
                ],
                "ctype": "miscellaneous",
                "subtype": "enum",
                "description": "",
                "file": "libs/packages/components/src/lib/selected-result/models/sds-selected-item-model-helper.ts"
            }
        ],
        "groupedVariables": {
            "libs/packages/components/src/lib/accordion/accordion-animations.ts": [
                {
                    "name": "ACCORDION_ITEM_ANIMATION_TIMING",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/accordion/accordion-animations.ts",
                    "type": "string",
                    "defaultValue": "'225ms cubic-bezier(0.4,0.0,0.2,1)'",
                    "description": "<p>Time and timing curve for accordion item animations. </p>\n"
                },
                {
                    "name": "sdsExpansionAnimations",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/accordion/accordion-animations.ts",
                    "type": "literal type",
                    "defaultValue": "{\r\n  /** Animation that expands and collapses the accordion item content. */\r\n  bodyExpansion: trigger('bodyExpansion', [\r\n    state('collapsed, void', style({height: '0px', visibility: 'hidden'})),\r\n    state('expanded', style({height: '*', visibility: 'visible'})),\r\n    transition('expanded <=> collapsed, void => collapsed',\r\n      animate(ACCORDION_ITEM_ANIMATION_TIMING)),\r\n  ])\r\n}"
                }
            ],
            "libs/packages/components/src/lib/dialog/dialog-animations.ts": [
                {
                    "name": "animationBody",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog-animations.ts",
                    "type": "[]",
                    "defaultValue": "[\r\n  // Note: The `enter` animation transitions to `transform: none`, because for some reason\r\n  // specifying the transform explicitly, causes IE both to blur the dialog content and\r\n  // decimate the animation performance. Leaving it as `none` solves both issues.\r\n  state('void, exit', style({opacity: 0, transform: 'scale(0.7)'})),\r\n  state('enter', style({transform: 'none'})),\r\n  transition('* => enter', animate('150ms cubic-bezier(0, 0, 0.2, 1)',\r\n      style({transform: 'none', opacity: 1}))),\r\n  transition('* => void, * => exit',\r\n      animate('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({opacity: 0}))),\r\n]"
                },
                {
                    "name": "sdsDialogAnimations",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog-animations.ts",
                    "type": "literal type",
                    "defaultValue": "{\r\n  /** Animation that is applied on the dialog container by defalt. */\r\n  dialogContainer: trigger('dialogContainer', animationBody),\r\n}",
                    "description": "<p>Animations used by SdsDialog.</p>\n"
                }
            ],
            "libs/packages/components/src/lib/autocomplete-search/autocomplete-search.component.ts": [
                {
                    "name": "Autocomplete_Autocomplete_VALUE_ACCESSOR",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/autocomplete-search/autocomplete-search.component.ts",
                    "type": "any",
                    "defaultValue": "{\r\n  provide: NG_VALUE_ACCESSOR,\r\n  useExisting: forwardRef(() => SDSAutocompleteSearchComponent),\r\n  multi: true\r\n}"
                }
            ],
            "libs/packages/components/src/lib/autocomplete/autocomplete.component.ts": [
                {
                    "name": "Autocomplete_VALUE_ACCESSOR",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/autocomplete/autocomplete.component.ts",
                    "type": "any",
                    "defaultValue": "{\r\n  provide: NG_VALUE_ACCESSOR,\r\n  useExisting: forwardRef(() => SDSAutocompleteComponent),\r\n  multi: true\r\n}"
                }
            ],
            "libs/packages/components/src/lib/key-helper/key-mocks.ts": [
                {
                    "name": "ChromeFirefoxMocks",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                    "type": "object",
                    "defaultValue": "{\r\n  enter: {\r\n    charCode: 13,\r\n    code: 'Enter',\r\n    key: 'Enter',\r\n    keyCode: 13,\r\n    keyIdentifier: undefined,\r\n    which: 13,\r\n  },\r\n  up: {\r\n    charCode: 0,\r\n    code: 'ArrowUp',\r\n    key: 'ArrowUp',\r\n    keyCode: 38,\r\n    keyIdentifier: undefined,\r\n    which: 38\r\n  },\r\n  down: {\r\n    charCode: 0,\r\n    code: 'ArrowDown',\r\n    key: 'ArrowDown',\r\n    keyCode: 40,\r\n    keyIdentifier: undefined,\r\n    which: 40\r\n  },\r\n  left: {\r\n    charCode: 0,\r\n    code: 'ArrowLeft',\r\n    key: 'ArrowLeft',\r\n    keyCode: 37,\r\n    keyIdentifier: undefined,\r\n    which: 37\r\n  },\r\n  right: {\r\n    charCode: 0,\r\n    code: 'ArrowRight',\r\n    key: 'ArrowRight',\r\n    keyCode: 39,\r\n    keyIdentifier: undefined,\r\n    which: 39\r\n  },\r\n  tab: {\r\n    charCode: 0,\r\n    code: 'Tab',\r\n    key: 'Tab',\r\n    keyCode: 9,\r\n    keyIdentifier: undefined,\r\n    which: 9\r\n  },\r\n  esc: {\r\n    charCode: 0,\r\n    code: 'Escape',\r\n    key: 'Escape',\r\n    keyCode: 27,\r\n    keyIdentifier: undefined,\r\n    which: 27\r\n  },\r\n  space: {\r\n    charCode: 0,\r\n    code: 'Space',\r\n    key: ' ',\r\n    keyCode: 32,\r\n    keyIdentifier: undefined,\r\n    which: 32\r\n  },\r\n  shift: {\r\n    charCode: 0,\r\n    code: 'ShiftLeft',\r\n    key: 'Shift',\r\n    keyCode: 16,\r\n    keyIdentifier: undefined,\r\n    which: 16\r\n  },\r\n  backspace: {\r\n    charCode: 0,\r\n    code: 'Backspace',\r\n    key: 'Backspace',\r\n    keyCode: 8,\r\n    keyIdentifier: undefined,\r\n    which: 8\r\n  },\r\n  delete: {\r\n    charCode: 0,\r\n    code: 'Delete',\r\n    key: 'Delete',\r\n    keyCode: 46,\r\n    keyIdentifier: undefined,\r\n    which: 46\r\n  },\r\n  0: {\r\n    charCode: 0,\r\n    code: 'Digit0',\r\n    key: 0,\r\n    keyCode: 48,\r\n    keyIdentifier: 'U+0030',\r\n    which: 48\r\n  },\r\n  1: {\r\n    charCode: 0,\r\n    code: 'Digit1',\r\n    key: 1,\r\n    keyCode: 49,\r\n    keyIdentifier: 'U+0031',\r\n    which: 49\r\n  },\r\n  2: {\r\n    charCode: 0,\r\n    code: 'Digit2',\r\n    key: 2,\r\n    keyCode: 50,\r\n    keyIdentifier: 'U+0032',\r\n    which: 50\r\n  },\r\n  3: {\r\n    charCode: 0,\r\n    code: 'Digit3',\r\n    key: 3,\r\n    keyCode: 51,\r\n    keyIdentifier: 'U+0033',\r\n    which: 51\r\n  },\r\n  4: {\r\n    charCode: 0,\r\n    code: 'Digit4',\r\n    key: 4,\r\n    keyCode: 52,\r\n    keyIdentifier: 'U+0034',\r\n    which: 52\r\n  },\r\n  5: {\r\n    charCode: 0,\r\n    code: 'Digit5',\r\n    key: 5,\r\n    keyCode: 53,\r\n    keyIdentifier: 'U+0035',\r\n    which: 53\r\n  },\r\n  6: {\r\n    charCode: 0,\r\n    code: 'Digit6',\r\n    key: 6,\r\n    keyCode: 54,\r\n    keyIdentifier: 'U+0036',\r\n    which: 54\r\n  },\r\n  7: {\r\n    charCode: 0,\r\n    code: 'Digit7',\r\n    key: 7,\r\n    keyCode: 55,\r\n    keyIdentifier: 'U+0037',\r\n    which: 55\r\n  },\r\n  8: {\r\n    charCode: 0,\r\n    code: 'Digit8',\r\n    key: 8,\r\n    keyCode: 56,\r\n    keyIdentifier: 'U+0038',\r\n    which: 56\r\n  },\r\n  9: {\r\n    charCode: 0,\r\n    code: 'Digit9',\r\n    key: 9,\r\n    keyCode: 57,\r\n    keyIdentifier: 'U+0039',\r\n    which: 57\r\n  }\r\n}"
                },
                {
                    "name": "EdgeMocks",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                    "type": "object",
                    "defaultValue": "{\r\n  enter: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Enter',\r\n    keyCode: 13,\r\n    keyIdentifier: undefined,\r\n    which: 13\r\n  },\r\n  up: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Up',\r\n    keyCode: 38,\r\n    keyIdentifier: undefined,\r\n    which: 38\r\n  },\r\n  down: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Down',\r\n    keyCode: 40,\r\n    keyIdentifier: undefined,\r\n    which: 40\r\n  },\r\n  left: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Left',\r\n    keyCode: 37,\r\n    keyIdentifier: undefined,\r\n    which: 37\r\n  },\r\n  right: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Right',\r\n    keyCode: 39,\r\n    keyIdentifier: undefined,\r\n    which: 39\r\n  },\r\n  tab: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Tab',\r\n    keyCode: 9,\r\n    keyIdentifier: undefined,\r\n    which: 9\r\n  },\r\n  esc: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Esc',\r\n    keyCode: 27,\r\n    keyIdentifier: undefined,\r\n    which: 27\r\n  },\r\n  space: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: ' ',\r\n    keyCode: 32,\r\n    keyIdentifier: undefined,\r\n    which: 32\r\n  },\r\n  shift: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Shift',\r\n    keyCode: 16,\r\n    keyIdentifier: undefined,\r\n    which: 16\r\n  },\r\n  backspace: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Backspace',\r\n    keyCode: 8,\r\n    keyIdentifier: undefined,\r\n    which: 8\r\n  },\r\n  delete: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Delete',\r\n    keyCode: 46,\r\n    keyIdentifier: undefined,\r\n    which: 46\r\n  },\r\n  0: {\r\n    charCode: 0,\r\n    code: 'Digit0',\r\n    key: 0,\r\n    keyCode: 48,\r\n    keyIdentifier: 'U+0030',\r\n    which: 48\r\n  },\r\n  1: {\r\n    charCode: 0,\r\n    code: 'Digit1',\r\n    key: 1,\r\n    keyCode: 49,\r\n    keyIdentifier: 'U+0031',\r\n    which: 49\r\n  },\r\n  2: {\r\n    charCode: 0,\r\n    code: 'Digit2',\r\n    key: 2,\r\n    keyCode: 50,\r\n    keyIdentifier: 'U+0032',\r\n    which: 50\r\n  },\r\n  3: {\r\n    charCode: 0,\r\n    code: 'Digit3',\r\n    key: 3,\r\n    keyCode: 51,\r\n    keyIdentifier: 'U+0033',\r\n    which: 51\r\n  },\r\n  4: {\r\n    charCode: 0,\r\n    code: 'Digit4',\r\n    key: 4,\r\n    keyCode: 52,\r\n    keyIdentifier: 'U+0034',\r\n    which: 52\r\n  },\r\n  5: {\r\n    charCode: 0,\r\n    code: 'Digit5',\r\n    key: 5,\r\n    keyCode: 53,\r\n    keyIdentifier: 'U+0035',\r\n    which: 53\r\n  },\r\n  6: {\r\n    charCode: 0,\r\n    code: 'Digit6',\r\n    key: 6,\r\n    keyCode: 54,\r\n    keyIdentifier: 'U+0036',\r\n    which: 54\r\n  },\r\n  7: {\r\n    charCode: 0,\r\n    code: 'Digit7',\r\n    key: 7,\r\n    keyCode: 55,\r\n    keyIdentifier: 'U+0037',\r\n    which: 55\r\n  },\r\n  8: {\r\n    charCode: 0,\r\n    code: 'Digit8',\r\n    key: 8,\r\n    keyCode: 56,\r\n    keyIdentifier: 'U+0038',\r\n    which: 56\r\n  },\r\n  9: {\r\n    charCode: 0,\r\n    code: 'Digit9',\r\n    key: 9,\r\n    keyCode: 57,\r\n    keyIdentifier: 'U+0039',\r\n    which: 57\r\n  }\r\n}"
                },
                {
                    "name": "IEMocks",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                    "type": "object",
                    "defaultValue": "{\r\n  enter: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Enter',\r\n    keyCode: 13,\r\n    keyIdentifier: undefined,\r\n    which: 13\r\n  },\r\n  up: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Up',\r\n    keyCode: 38,\r\n    keyIdentifier: undefined,\r\n    which: 38\r\n  },\r\n  down: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Down',\r\n    keyCode: 40,\r\n    keyIdentifier: undefined,\r\n    which: 40\r\n  },\r\n  left: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Left',\r\n    keyCode: 37,\r\n    keyIdentifier: undefined,\r\n    which: 37\r\n  },\r\n  right: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Right',\r\n    keyCode: 39,\r\n    keyIdentifier: undefined,\r\n    which: 39\r\n  },\r\n  tab: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Tab',\r\n    keyCode: 9,\r\n    keyIdentifier: undefined,\r\n    which: 9\r\n  },\r\n  esc: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Esc',\r\n    keyCode: 27,\r\n    keyIdentifier: undefined,\r\n    which: 27\r\n  },\r\n  space: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Spacebar',\r\n    keyCode: 32,\r\n    keyIdentifier: undefined,\r\n    which: 32\r\n  },\r\n  shift: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Shift',\r\n    keyCode: 16,\r\n    keyIdentifier: undefined,\r\n    which: 16\r\n  },\r\n  backspace: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Backspace',\r\n    keyCode: 8,\r\n    keyIdentifier: undefined,\r\n    which: 8\r\n  },\r\n  delete: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Delete',\r\n    keyCode: 46,\r\n    keyIdentifier: undefined,\r\n    which: 46\r\n  },\r\n  0: {\r\n    charCode: 0,\r\n    code: 'Digit0',\r\n    key: 0,\r\n    keyCode: 48,\r\n    keyIdentifier: 'U+0030',\r\n    which: 48\r\n  },\r\n  1: {\r\n    charCode: 0,\r\n    code: 'Digit1',\r\n    key: 1,\r\n    keyCode: 49,\r\n    keyIdentifier: 'U+0031',\r\n    which: 49\r\n  },\r\n  2: {\r\n    charCode: 0,\r\n    code: 'Digit2',\r\n    key: 2,\r\n    keyCode: 50,\r\n    keyIdentifier: 'U+0032',\r\n    which: 50\r\n  },\r\n  3: {\r\n    charCode: 0,\r\n    code: 'Digit3',\r\n    key: 3,\r\n    keyCode: 51,\r\n    keyIdentifier: 'U+0033',\r\n    which: 51\r\n  },\r\n  4: {\r\n    charCode: 0,\r\n    code: 'Digit4',\r\n    key: 4,\r\n    keyCode: 52,\r\n    keyIdentifier: 'U+0034',\r\n    which: 52\r\n  },\r\n  5: {\r\n    charCode: 0,\r\n    code: 'Digit5',\r\n    key: 5,\r\n    keyCode: 53,\r\n    keyIdentifier: 'U+0035',\r\n    which: 53\r\n  },\r\n  6: {\r\n    charCode: 0,\r\n    code: 'Digit6',\r\n    key: 6,\r\n    keyCode: 54,\r\n    keyIdentifier: 'U+0036',\r\n    which: 54\r\n  },\r\n  7: {\r\n    charCode: 0,\r\n    code: 'Digit7',\r\n    key: 7,\r\n    keyCode: 55,\r\n    keyIdentifier: 'U+0037',\r\n    which: 55\r\n  },\r\n  8: {\r\n    charCode: 0,\r\n    code: 'Digit8',\r\n    key: 8,\r\n    keyCode: 56,\r\n    keyIdentifier: 'U+0038',\r\n    which: 56\r\n  },\r\n  9: {\r\n    charCode: 0,\r\n    code: 'Digit9',\r\n    key: 9,\r\n    keyCode: 57,\r\n    keyIdentifier: 'U+0039',\r\n    which: 57\r\n  }\r\n}"
                },
                {
                    "name": "mocks",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                    "type": "object",
                    "defaultValue": "{\r\n  ie: IEMocks,\r\n  edge: EdgeMocks,\r\n  default: ChromeFirefoxMocks,\r\n  safari: SafariMocks\r\n}"
                },
                {
                    "name": "SafariMocks",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                    "type": "object",
                    "defaultValue": "{\r\n  enter: {\r\n    charCode: 0,\r\n    code: 'Enter',\r\n    key: 'Enter',\r\n    keyCode: 13,\r\n    keyIdentifier: 'Enter',\r\n    which: 13\r\n  },\r\n  up: {\r\n    charCode: 0,\r\n    code: 'ArrowUp',\r\n    key: 'ArrowUp',\r\n    keyCode: 38,\r\n    keyIdentifier: 'Up',\r\n    which: 38\r\n  },\r\n  down: {\r\n    charCode: 0,\r\n    code: 'ArrowDown',\r\n    key: 'ArrowDown',\r\n    keyCode: 40,\r\n    keyIdentifier: 'Down',\r\n    which: 40\r\n  },\r\n  left: {\r\n    charCode: 0,\r\n    code: 'ArrowLeft',\r\n    key: 'ArrowLeft',\r\n    keyCode: 37,\r\n    keyIdentifier: 'Left',\r\n    which: 37\r\n  },\r\n  right: {\r\n    charCode: 0,\r\n    code: 'ArrowRight',\r\n    key: 'ArrowRight',\r\n    keyCode: 39,\r\n    keyIdentifier: 'Right',\r\n    which: 39\r\n  },\r\n  tab: {\r\n    charCode: 0,\r\n    code: 'Tab',\r\n    key: 'Tab',\r\n    keyCode: 9,\r\n    keyIdentifier: 'U+0009',\r\n    which: 9\r\n  },\r\n  esc: {\r\n    charCode: 0,\r\n    code: 'Escape',\r\n    key: 'Escape',\r\n    keyCode: 27,\r\n    keyIdentifier: 'U+001B',\r\n    which: 27\r\n  },\r\n  space: {\r\n    charCode: 0,\r\n    code: 'Space',\r\n    key: ' ',\r\n    keyCode: 32,\r\n    keyIdentifier: 'U+0020',\r\n    which: 32\r\n  },\r\n  shift: {\r\n    charCode: 0,\r\n    code: 'ShiftLeft',\r\n    key: 'Shift',\r\n    keyCode: 16,\r\n    keyIdentifier: 'Shift',\r\n    which: 16\r\n  },\r\n  backspace: {\r\n    charCode: 0,\r\n    code: 'Backspace',\r\n    key: 'Backspace',\r\n    keyCode: 8,\r\n    keyIdentifier: 'U+0008',\r\n    which: 8\r\n  },\r\n  delete: {\r\n    charCode: 0,\r\n    code: 'Delete',\r\n    key: 'Delete',\r\n    keyCode: 46,\r\n    keyIdentifier: 'U+007F',\r\n    which: 46\r\n  },\r\n  0: {\r\n    charCode: 0,\r\n    code: 'Digit0',\r\n    key: 0,\r\n    keyCode: 48,\r\n    keyIdentifier: 'U+0030',\r\n    which: 48\r\n  },\r\n  1: {\r\n    charCode: 0,\r\n    code: 'Digit1',\r\n    key: 1,\r\n    keyCode: 49,\r\n    keyIdentifier: 'U+0031',\r\n    which: 49\r\n  },\r\n  2: {\r\n    charCode: 0,\r\n    code: 'Digit2',\r\n    key: 2,\r\n    keyCode: 50,\r\n    keyIdentifier: 'U+0032',\r\n    which: 50\r\n  },\r\n  3: {\r\n    charCode: 0,\r\n    code: 'Digit3',\r\n    key: 3,\r\n    keyCode: 51,\r\n    keyIdentifier: 'U+0033',\r\n    which: 51\r\n  },\r\n  4: {\r\n    charCode: 0,\r\n    code: 'Digit4',\r\n    key: 4,\r\n    keyCode: 52,\r\n    keyIdentifier: 'U+0034',\r\n    which: 52\r\n  },\r\n  5: {\r\n    charCode: 0,\r\n    code: 'Digit5',\r\n    key: 5,\r\n    keyCode: 53,\r\n    keyIdentifier: 'U+0035',\r\n    which: 53\r\n  },\r\n  6: {\r\n    charCode: 0,\r\n    code: 'Digit6',\r\n    key: 6,\r\n    keyCode: 54,\r\n    keyIdentifier: 'U+0036',\r\n    which: 54\r\n  },\r\n  7: {\r\n    charCode: 0,\r\n    code: 'Digit7',\r\n    key: 7,\r\n    keyCode: 55,\r\n    keyIdentifier: 'U+0037',\r\n    which: 55\r\n  },\r\n  8: {\r\n    charCode: 0,\r\n    code: 'Digit8',\r\n    key: 8,\r\n    keyCode: 56,\r\n    keyIdentifier: 'U+0038',\r\n    which: 56\r\n  },\r\n  9: {\r\n    charCode: 0,\r\n    code: 'Digit9',\r\n    key: 9,\r\n    keyCode: 57,\r\n    keyIdentifier: 'U+0039',\r\n    which: 57\r\n  }\r\n}"
                }
            ],
            "libs/packages/components/src/test.ts": [
                {
                    "name": "context",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/test.ts",
                    "type": "",
                    "defaultValue": "require.context('./', true, /\\.spec\\.ts$/)"
                },
                {
                    "name": "require",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/test.ts",
                    "type": "any"
                }
            ],
            "libs/packages/components/src/lib/dialog/dialog-content.directives.ts": [
                {
                    "name": "dialogElementUid",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
                    "type": "number",
                    "defaultValue": "0",
                    "description": "<p>Counter used to generate unique IDs for dialog elements. </p>\n"
                }
            ],
            "libs/packages/components/src/lib/video-player/video-player.component.ts": [
                {
                    "name": "GLOBAL_STRINGS",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/video-player/video-player.component.ts",
                    "type": "any"
                }
            ],
            "libs/packages/components/src/lib/autocomplete-search/autocomplete-sample.data.ts": [
                {
                    "name": "GropupSampleAutocompleteData",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/autocomplete-search/autocomplete-sample.data.ts",
                    "type": "[]",
                    "defaultValue": "[\r\n  {\r\n    code: 'A',\r\n    elements: [\r\n      {\r\n        code: 'A',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0001001',\r\n        value: 'Formula Grants'\r\n      },\r\n      {\r\n        code: 'A',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0001002',\r\n        value: 'Formula Grants (Apportionments)'\r\n      },\r\n      {\r\n        code: 'A',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0001003',\r\n        value: 'Formula Grants (Cooperative Agreements)'\r\n      },\r\n      {\r\n        code: 'A',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0001004',\r\n        value: 'Formula Grants (Health Incentive Grants)'\r\n      }\r\n    ],\r\n    description:\r\n      'Formula Grants - Allocations of money to States or their subdivisions in accordance with a distribution formula prescribed by law or administrative regulation, for activities of a continuing nature not confined to a specific project.',\r\n    element_id: '0001',\r\n    value: 'FORMULA GRANTS'\r\n  },\r\n  {\r\n    code: 'B',\r\n    elements: [\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003001',\r\n        value: 'Cooperative Agreements'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003002',\r\n        value: 'Cooperative Agreements (Discretionary Grants)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003003',\r\n        value: 'Project Grants'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003004',\r\n        value:\r\n          'Project Grants (Capacity Building and Complaint Processing, Training)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003005',\r\n        value: 'Project Grants (Contracts)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003006',\r\n        value: 'Project Grants (Cooperative Agreements or Contracts)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003007',\r\n        value: 'Project Grants (Cooperative Agreements)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003008',\r\n        value: 'Project Grants (Discretionary)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003009',\r\n        value: 'Project Grants (Fellowships)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003010',\r\n        value:\r\n          'Project Grants (for administration projects authorized under Section'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003011',\r\n        value:\r\n          'Project Grants (for collaborative design of curriculum, production of'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003012',\r\n        value: 'Project Grants (for specified projects)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003013',\r\n        value: 'Project Grants (including individual awards)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003014',\r\n        value: 'Project Grants (including travel grants)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003015',\r\n        value:\r\n          'Project Grants (Rehabilitation of existing indoor and outdoor recreat'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003016',\r\n        value: 'Project Grants (Special)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003017',\r\n        value: 'Project Grants (to capitalize loan funds)'\r\n      },\r\n      {\r\n        code: 'B',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0003018',\r\n        value: 'Project Grants (with Formula Distribution)'\r\n      }\r\n    ],\r\n    description:\r\n      'Project Grants - The funding, for fixed or known periods, of specific projects or the delivery of specific services or products without liability for damages for failure to perform. Project grants include fellowships, scholarships, research grants, training grants, traineeships, experimental and demonstration grants, evaluation grants, planning grants, technical assistance grants, survey grants, construction grants, and unsolicited contractual agreements.',\r\n    element_id: '0003',\r\n    value: 'PROJECT GRANTS'\r\n  },\r\n  {\r\n    code: 'C',\r\n    elements: [\r\n      {\r\n        code: 'C',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0005001',\r\n        value: 'Direct Payments for Specified Use'\r\n      },\r\n      {\r\n        code: 'C',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0005002',\r\n        value: 'Direct Payments for Specified Use (Cooperative Agreements)'\r\n      }\r\n    ],\r\n    description:\r\n      'Direct Payments for a Specified Use - Financial assistance provided directly to individuals, private firms, and other private institutions to encourage or subsidize a particular activity by conditioning the receipt of the on a particular performance by the recipient. This does not include solicited contracts for the procurement of goods and services for the Federal government.',\r\n    element_id: '0005',\r\n    value: 'DIRECT PAYMENTS FOR A SPECIFIED USE'\r\n  },\r\n  {\r\n    code: 'D',\r\n    elements: [\r\n      {\r\n        code: 'D',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0007001',\r\n        value: 'Direct Payments with Unrestricted Use'\r\n      }\r\n    ],\r\n    description:\r\n      'Direct Payments with Unrestricted Use - Financial assistance provided directly to beneficiaries who satisfy eligibility requirements with no restrictions imposed on the recipient as to how the money is spent. Included are payments under retirement, pension, and compensation programs.',\r\n    element_id: '0007',\r\n    value: 'DIRECT PAYMENTS WITH UNRESTRICTED USE'\r\n  },\r\n  {\r\n    code: 'E',\r\n    elements: [\r\n      {\r\n        code: 'E',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0009001',\r\n        value: 'Direct Loans'\r\n      }\r\n    ],\r\n    description:\r\n      'Direct Loans - Financial assistance provided through the lending of Federal monies for a specific period of time, with a reasonable expectation of repayment. Such loans may or may not require the payment of interest.',\r\n    element_id: '0009',\r\n    value: 'DIRECT LOANS'\r\n  },\r\n  {\r\n    code: 'F',\r\n    elements: [\r\n      {\r\n        code: 'F',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0011001',\r\n        value: 'Guaranteed/Insured Loans'\r\n      },\r\n      {\r\n        code: 'F',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0011002',\r\n        value:\r\n          'Guaranteed/Insured Loans (including Guaranty Participation Loans)'\r\n      },\r\n      {\r\n        code: 'F',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0011003',\r\n        value:\r\n          'Guaranteed/Insured Loans (including Immediate Participation Loans)'\r\n      },\r\n      {\r\n        code: 'F',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0011004',\r\n        value: 'Loan Guarantees/Grants'\r\n      }\r\n    ],\r\n    description:\r\n      'Guaranteed/Insured Loans - Programs in which the Federal Government makes an arrangement to indemnify a lender against all or part of all of any defaults by those responsible for the repayment of loans.',\r\n    element_id: '0011',\r\n    value: 'GUARANTEED/INSURED LOANS'\r\n  },\r\n  {\r\n    code: 'G',\r\n    elements: [\r\n      {\r\n        code: 'G',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0013001',\r\n        value: 'Insurance'\r\n      },\r\n      {\r\n        code: 'G',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0013002',\r\n        value: 'Insurance (Guaranteed Surety Bonds)'\r\n      },\r\n      {\r\n        code: 'G',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0013003',\r\n        value: 'Insurance (Reimbursement)'\r\n      }\r\n    ],\r\n    description:\r\n      'Insurance - Financial assistance provided to assure reimbursement for losses sustained under specified conditions. Coverage may be provided directly by the Federal Government or through private carriers and may or may not involve the payment of premiums.',\r\n    element_id: '0013',\r\n    value: 'INSURANCE'\r\n  },\r\n  {\r\n    code: 'H',\r\n    elements: [\r\n      {\r\n        code: 'H',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0015001',\r\n        value: 'Sale, Exchange, or Donation of Property and Goods'\r\n      }\r\n    ],\r\n    description:\r\n      'Sale, Exchange, or Donation of Property or Goods - Programs that provide for the sale, exchange, or donation of Federal real property, personal property, commodities, and other goods including land, buildings, equipment, food, and drugs. This does not include the loan of, use of, or access to Federal facilities or property.',\r\n    element_id: '0015',\r\n    value: 'SALE, EXCHANGE, OR DONATION OF PROPERTY OR GOODS'\r\n  },\r\n  {\r\n    code: 'I',\r\n    elements: [\r\n      {\r\n        code: 'I',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0017001',\r\n        value: 'Use of Property, Facilities, and Equipment'\r\n      }\r\n    ],\r\n    description:\r\n      'Use of Property, Facilities, or Equipment - Programs that provide for the loan of, use of, or access to Federal facilities or property wherein the federally owned facilities or property do not remain in the possession of the recipient of the assistance.',\r\n    element_id: '0017',\r\n    value: 'USE OF PROPERTY, FACILITIES, OR EQUIPMENT'\r\n  },\r\n  {\r\n    code: 'J',\r\n    elements: [\r\n      {\r\n        code: 'J',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0019001',\r\n        value: 'Provision of Specialized Services'\r\n      }\r\n    ],\r\n    description:\r\n      'Provision of Specialized Services - Programs that provide Federal personnel to directly perform certain tasks for the benefit of communities or individuals. These services may be performed in conjunction with non-Federal personnel, but they involve more than consultation, advice, or counseling.',\r\n    element_id: '0019',\r\n    value: 'PROVISION OF SPECIALIZED SERVICES'\r\n  },\r\n  {\r\n    code: 'K',\r\n    elements: [\r\n      {\r\n        code: 'K',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0021001',\r\n        value: 'Advisory Services and Counseling'\r\n      },\r\n      {\r\n        code: 'K',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0021002',\r\n        value: 'Advisory Services on Compliance'\r\n      }\r\n    ],\r\n    description:\r\n      'Advisory Services and Counseling - Programs that provide Federal specialists to consult, advise, or counsel communities or individuals including conferences, workshops, or personal contacts. This may involve the use of published information, but only in a secondary capacity.',\r\n    element_id: '0021',\r\n    value: 'ADVISORY SERVICES AND COUNSELING'\r\n  },\r\n  {\r\n    code: 'L',\r\n    elements: [\r\n      {\r\n        code: 'L',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0023001',\r\n        value: 'Dissemination of Technical Information'\r\n      },\r\n      {\r\n        code: 'L',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0023002',\r\n        value: 'Information'\r\n      }\r\n    ],\r\n    description:\r\n      'Dissemination of Technical Information - Programs that provide for the publication and distribution of information or data of a specialized technical nature, frequently through clearinghouses or libraries. This does not include conventional public information services designed for general public consumption.',\r\n    element_id: '0023',\r\n    value: 'DISSEMINATION OF TECHNICAL INFORMATION'\r\n  },\r\n  {\r\n    code: 'M',\r\n    elements: [\r\n      {\r\n        code: 'M',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0025001',\r\n        value: 'Training'\r\n      }\r\n    ],\r\n    description:\r\n      'Training - Programs that provide instructional activities conducted directly by a Federal agency for individuals not employed by the Federal Government.',\r\n    element_id: '0025',\r\n    value: 'TRAINING'\r\n  },\r\n  {\r\n    code: 'N',\r\n    elements: [\r\n      {\r\n        code: 'N',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0027020',\r\n        value: 'Resolution of Disputes'\r\n      },\r\n      {\r\n        code: 'N',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0027001',\r\n        value: 'Investigation of Complaints'\r\n      },\r\n      {\r\n        code: 'N',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0027002',\r\n        value: 'Investigation of Complaints (Compliance Reviews)'\r\n      }\r\n    ],\r\n    description:\r\n      'Investigation of Complaints - Federal administrative agency activities that are initiated in response to requests, either formal or informal, to examine or investigate claims of violations of Federal statutes, policy, or procedure. Such claims must come from outside the Federal Government.',\r\n    element_id: '0027',\r\n    value: 'INVESTIGATION OF COMPLAINTS'\r\n  },\r\n  {\r\n    code: 'O',\r\n    elements: [\r\n      {\r\n        code: 'O',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0029001',\r\n        value: 'Federal Employment'\r\n      }\r\n    ],\r\n    description:\r\n      'Federal Employment - Programs that reflect the government-wide resposibilities of the Office of Personnel Management in the recruitment and hiring of Federal civilian agency personnel.',\r\n    element_id: '0029',\r\n    value: 'FEDERAL EMPLOYMENT'\r\n  },\r\n  {\r\n    code: 'Z',\r\n    elements: [\r\n      {\r\n        code: 'Z',\r\n        elements: null,\r\n        description: null,\r\n        element_id: '0090001',\r\n        value: 'Salaries and Expenses'\r\n      }\r\n    ],\r\n    description: null,\r\n    element_id: '0090',\r\n    value: 'SALARIES AND EXPENSES'\r\n  }\r\n]"
                }
            ],
            "libs/packages/components/src/lib/accordion/accordion-base.ts": [
                {
                    "name": "SDS_ACCORDION",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/accordion/accordion-base.ts",
                    "type": "",
                    "defaultValue": "new InjectionToken<SdsAccordionBase>('SDS_ACCORDION')",
                    "description": "<p>Token used to provide a <code>SdsAccordion</code> to <code>SdsAccordionItem</code>.\nUsed primarily to avoid circular imports between <code>SdsAccordion</code> and <code>SdsAccordionItem</code>.</p>\n"
                }
            ],
            "libs/packages/components/src/lib/dialog/dialog.ts": [
                {
                    "name": "SDS_DIALOG_DATA",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                    "type": "",
                    "defaultValue": "new InjectionToken<any>('SdsDialogData')",
                    "description": "<p>Injection token that can be used to access the data that was passed in to a dialog. </p>\n"
                },
                {
                    "name": "SDS_DIALOG_DEFAULT_OPTIONS",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                    "type": "",
                    "defaultValue": "new InjectionToken<SdsDialogConfig>('sds-dialog-default-options')",
                    "description": "<p>Injection token that can be used to specify default dialog options. </p>\n"
                },
                {
                    "name": "SDS_DIALOG_SCROLL_STRATEGY",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                    "type": "",
                    "defaultValue": "new InjectionToken<() => ScrollStrategy>('sds-dialog-scroll-strategy')",
                    "description": "<p>Injection token that determines the scroll handling while the dialog is open. </p>\n"
                },
                {
                    "name": "SDS_DIALOG_SCROLL_STRATEGY_PROVIDER",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                    "type": "object",
                    "defaultValue": "{\r\n  provide: SDS_DIALOG_SCROLL_STRATEGY,\r\n  deps: [Overlay],\r\n  useFactory: SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,\r\n}"
                }
            ],
            "libs/packages/components/src/lib/menu/menu.component.ts": [
                {
                    "name": "SDS_MENU_TOKEN",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                    "type": "",
                    "defaultValue": "new InjectionToken<SdsMenuInterface>(\r\n  'SDS_MENU_TOKEN'\r\n)",
                    "description": "<p>Injection token used to provide the parent menu to menu items. </p>\n"
                }
            ],
            "libs/packages/components/src/lib/selected-result/selected-result.component.ts": [
                {
                    "name": "SDS_SelectedResult_VALUE_ACCESSOR",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/selected-result/selected-result.component.ts",
                    "type": "any",
                    "defaultValue": "{\r\n  provide: NG_VALUE_ACCESSOR,\r\n  useExisting: forwardRef(() => SDSSelectedResultComponent),\r\n  multi: true\r\n}"
                }
            ],
            "libs/packages/components/src/lib/truncate-text/truncates-text-base.ts": [
                {
                    "name": "SDS_TRUNCATED_TEXT_DATA",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/truncate-text/truncates-text-base.ts",
                    "type": "",
                    "defaultValue": "new InjectionToken<any>(\r\n  'SdsTruncatedTextData'\r\n)",
                    "description": "<p>Used primarily to avoid circular imports between <code>SdsAccordion</code> and <code>SdsAccordionItem</code>.</p>\n"
                }
            ],
            "libs/packages/components/src/lib/menu/menu-animations.ts": [
                {
                    "name": "sdsMenuAnimations",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/menu/menu-animations.ts",
                    "type": "literal type",
                    "defaultValue": "{\r\n  transformMenu: trigger('transformMenu', [\r\n    state(\r\n      'void',\r\n      style({\r\n        opacity: 0,\r\n        transform: 'scale(0.8)'\r\n      })\r\n    ),\r\n    transition(\r\n      'void => enter',\r\n      group([\r\n        query(\r\n          '.sds-menu',\r\n          animate(\r\n            '100ms linear',\r\n            style({\r\n              opacity: 1\r\n            })\r\n          )\r\n        ),\r\n        animate(\r\n          '120ms cubic-bezier(0, 0, 0.2, 1)',\r\n          style({ transform: 'scale(1)' })\r\n        )\r\n      ])\r\n    ),\r\n    transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 })))\r\n  ])\r\n}"
                }
            ],
            "libs/packages/components/src/lib/toolbar/toolbar-animations.ts": [
                {
                    "name": "sdsToolbarAnimations",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/toolbar/toolbar-animations.ts",
                    "type": "literal type",
                    "defaultValue": "{\r\n  /** Animation that expands and collapses the accordion item content. */\r\n  bodyExpansion: trigger('bodyExpansion', [\r\n    state('collapsed, void', style({width: '0px', height: '0px', opacity: '0', visibility: 'hidden'})),\r\n    state('expanded', style({width: '{{expandedWidth}}', height: '*', opacity: '1', visibility: 'visible'}), {\r\n      params: { expandedWidth: '300px' }\r\n    }),\r\n    transition('expanded <=> collapsed, void => collapsed',\r\n      animate(TOOLBAR_ANIMATION_TIMING)),\r\n  ])\r\n}"
                },
                {
                    "name": "TOOLBAR_ANIMATION_TIMING",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/toolbar/toolbar-animations.ts",
                    "type": "string",
                    "defaultValue": "'225ms cubic-bezier(0.4,0.0,0.2,1)'",
                    "description": "<p>Time and timing curve for accordion item animations. </p>\n"
                }
            ],
            "libs/packages/components/src/lib/truncate-text/truncate-text-animations.ts": [
                {
                    "name": "sdsTruncateTextAnimations",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/truncate-text/truncate-text-animations.ts",
                    "type": "literal type",
                    "defaultValue": "{\r\n  container: trigger('container', [\r\n    state(\r\n      'void',\r\n      style({\r\n        opacity: 0,\r\n        transform: 'scale(0.8)'\r\n      })\r\n    ),\r\n    transition(\r\n      'void => enter',\r\n      group([\r\n        query(\r\n          '.sds-overlay',\r\n          animate(\r\n            '100ms linear',\r\n            style({\r\n              opacity: 1\r\n            })\r\n          )\r\n        ),\r\n        animate(\r\n          '120ms cubic-bezier(0, 0, 0.2, 1)',\r\n          style({ transform: 'scale(1)' })\r\n        )\r\n      ])\r\n    ),\r\n    transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 })))\r\n  ])\r\n}"
                }
            ],
            "libs/packages/components/src/lib/accordion/accordion-item.component.ts": [
                {
                    "name": "uniqueId",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/accordion/accordion-item.component.ts",
                    "type": "number",
                    "defaultValue": "0",
                    "description": "<p>Counter for generating unique element ids. </p>\n"
                }
            ],
            "libs/packages/components/src/lib/dialog/dialog-ref.ts": [
                {
                    "name": "uniqueId",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog-ref.ts",
                    "type": "number",
                    "defaultValue": "0"
                }
            ],
            "libs/packages/components/src/lib/toolbar/toolbar.component.ts": [
                {
                    "name": "uniqueId",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/toolbar/toolbar.component.ts",
                    "type": "number",
                    "defaultValue": "0",
                    "description": "<p>Counter for generating unique element ids. </p>\n"
                }
            ]
        },
        "groupedFunctions": {
            "libs/packages/components/src/lib/dialog/dialog.ts": [
                {
                    "name": "_applyConfigDefaults",
                    "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Applies default options to the dialog config.</p>\n",
                    "args": [
                        {
                            "name": "config",
                            "optional": true
                        },
                        {
                            "name": "defaultOptions",
                            "optional": true
                        }
                    ],
                    "returnType": "SdsDialogConfig",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 14481,
                                "end": 14487,
                                "flags": 0,
                                "escapedText": "config"
                            },
                            "optional": true,
                            "tagName": {
                                "pos": 14475,
                                "end": 14480,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Config to be modified.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 14522,
                                "end": 14536,
                                "flags": 0,
                                "escapedText": "defaultOptions"
                            },
                            "optional": true,
                            "tagName": {
                                "pos": 14516,
                                "end": 14521,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Default options provided.</p>\n"
                        },
                        {
                            "tagName": {
                                "pos": 14568,
                                "end": 14575,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>The new configuration object.</p>\n"
                        }
                    ]
                },
                {
                    "name": "SDS_DIALOG_SCROLL_STRATEGY_FACTORY",
                    "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "",
                    "args": [
                        {
                            "name": "overlay"
                        }
                    ],
                    "returnType": "ScrollStrategy",
                    "jsdoctags": [
                        {
                            "name": "overlay",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY",
                    "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "",
                    "args": [
                        {
                            "name": "overlay"
                        }
                    ],
                    "returnType": "ScrollStrategy",
                    "jsdoctags": [
                        {
                            "name": "overlay",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "libs/packages/components/src/lib/testing/event-objects.ts": [
                {
                    "name": "createFakeEvent",
                    "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Creates a fake event object with any desired event type. </p>\n",
                    "args": [
                        {
                            "name": "type"
                        },
                        {
                            "name": "canBubble",
                            "type": ""
                        },
                        {
                            "name": "cancelable",
                            "type": ""
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "canBubble",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "cancelable",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "createKeyboardEvent",
                    "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Dispatches a keydown event from an element. </p>\n",
                    "args": [
                        {
                            "name": "type"
                        },
                        {
                            "name": "keyCode"
                        },
                        {
                            "name": "target",
                            "optional": true
                        },
                        {
                            "name": "key",
                            "optional": true
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "keyCode",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "target",
                            "optional": true,
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "key",
                            "optional": true,
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "createMouseEvent",
                    "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "",
                    "args": [
                        {
                            "name": "type"
                        },
                        {
                            "name": "x",
                            "type": "number"
                        },
                        {
                            "name": "y",
                            "type": "number"
                        },
                        {
                            "name": "button",
                            "type": "number"
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "x",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "y",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "button",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "createTouchEvent",
                    "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Creates a browser TouchEvent with the specified pointer coordinates. </p>\n",
                    "args": [
                        {
                            "name": "type"
                        },
                        {
                            "name": "pageX",
                            "type": "number"
                        },
                        {
                            "name": "pageY",
                            "type": "number"
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "pageX",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "pageY",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "libs/packages/components/src/lib/testing/dispatch-events.ts": [
                {
                    "name": "dispatchEvent",
                    "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Utility to dispatch any event on a Node. </p>\n",
                    "args": [
                        {
                            "name": "node"
                        },
                        {
                            "name": "event"
                        }
                    ],
                    "returnType": "Event",
                    "jsdoctags": [
                        {
                            "name": "node",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "event",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "dispatchFakeEvent",
                    "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Shorthand to dispatch a fake event on a specified node. </p>\n",
                    "args": [
                        {
                            "name": "node"
                        },
                        {
                            "name": "type"
                        },
                        {
                            "name": "canBubble",
                            "type": "boolean",
                            "optional": true
                        }
                    ],
                    "returnType": "Event",
                    "jsdoctags": [
                        {
                            "name": "node",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "canBubble",
                            "type": "boolean",
                            "optional": true,
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "dispatchKeyboardEvent",
                    "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Shorthand to dispatch a keyboard event with a specified key code. </p>\n",
                    "args": [
                        {
                            "name": "node"
                        },
                        {
                            "name": "type"
                        },
                        {
                            "name": "keyCode"
                        },
                        {
                            "name": "target",
                            "optional": true
                        }
                    ],
                    "returnType": "KeyboardEvent",
                    "jsdoctags": [
                        {
                            "name": "node",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "keyCode",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "target",
                            "optional": true,
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "dispatchMouseEvent",
                    "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Shorthand to dispatch a mouse event on the specified coordinates. </p>\n",
                    "args": [
                        {
                            "name": "node"
                        },
                        {
                            "name": "type"
                        },
                        {
                            "name": "x",
                            "type": "number"
                        },
                        {
                            "name": "y",
                            "type": "number"
                        },
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "returnType": "MouseEvent",
                    "jsdoctags": [
                        {
                            "name": "node",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "x",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "y",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "dispatchTouchEvent",
                    "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Shorthand to dispatch a touch event on the specified coordinates. </p>\n",
                    "args": [
                        {
                            "name": "node"
                        },
                        {
                            "name": "type"
                        },
                        {
                            "name": "x",
                            "type": "number"
                        },
                        {
                            "name": "y",
                            "type": "number"
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": "node",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "x",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "y",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "libs/packages/components/src/lib/dialog/dialog-content.directives.ts": [
                {
                    "name": "getClosestDialog",
                    "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Finds the closest SdsDialogRef to an element by looking at the DOM.</p>\n",
                    "args": [
                        {
                            "name": "element"
                        },
                        {
                            "name": "openDialogs"
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4042,
                                "end": 4049,
                                "flags": 0,
                                "escapedText": "element"
                            },
                            "tagName": {
                                "pos": 4036,
                                "end": 4041,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Element relative to which to look for a dialog.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 4109,
                                "end": 4120,
                                "flags": 0,
                                "escapedText": "openDialogs"
                            },
                            "tagName": {
                                "pos": 4103,
                                "end": 4108,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>References to the currently-open dialogs.</p>\n"
                        }
                    ]
                }
            ],
            "libs/packages/components/src/lib/testing/element-focus.ts": [
                {
                    "name": "patchElementFocus",
                    "file": "libs/packages/components/src/lib/testing/element-focus.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Patches an elements focus and blur methods to emit events consistently and predictably.\nThis is necessary, because some browsers, like IE11, will call the focus handlers asynchronously,\nwhile others won&#39;t fire them at all if the browser window is not focused.</p>\n",
                    "args": [
                        {
                            "name": "element"
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": "element",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "libs/packages/components/src/lib/dialog/dialog-container.component.ts": [
                {
                    "name": "throwSdsDialogContentAlreadyAttachedError",
                    "file": "libs/packages/components/src/lib/dialog/dialog-container.component.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Throws an exception for the case when a ComponentPortal is\nattached to a DomPortalOutlet without an origin.</p>\n",
                    "args": []
                }
            ]
        },
        "groupedEnumerations": {
            "libs/packages/components/src/lib/key-helper/key-helper.ts": [
                {
                    "name": "KEYS",
                    "childs": [
                        {
                            "name": "ENTER",
                            "value": "enter"
                        },
                        {
                            "name": "ALT",
                            "value": "alt"
                        },
                        {
                            "name": "UP",
                            "value": "up"
                        },
                        {
                            "name": "DOWN",
                            "value": "down"
                        },
                        {
                            "name": "LEFT",
                            "value": "left"
                        },
                        {
                            "name": "RIGHT",
                            "value": "right"
                        },
                        {
                            "name": "TAB",
                            "value": "tab"
                        },
                        {
                            "name": "ESC",
                            "value": "esc"
                        },
                        {
                            "name": "SPACE",
                            "value": "space"
                        },
                        {
                            "name": "SHIFT",
                            "value": "shift"
                        },
                        {
                            "name": "BACKSPACE",
                            "value": "backspace"
                        },
                        {
                            "name": "ONE",
                            "value": "1"
                        },
                        {
                            "name": "TWO",
                            "value": "2"
                        },
                        {
                            "name": "THREE",
                            "value": "3"
                        },
                        {
                            "name": "FOUR",
                            "value": "4"
                        },
                        {
                            "name": "FIVE",
                            "value": "5"
                        },
                        {
                            "name": "SIX",
                            "value": "6"
                        },
                        {
                            "name": "SEVEN",
                            "value": "7"
                        },
                        {
                            "name": "EIGHT",
                            "value": "8"
                        },
                        {
                            "name": "NINE",
                            "value": "9"
                        },
                        {
                            "name": "ZERO",
                            "value": "0"
                        },
                        {
                            "name": "DELETE",
                            "value": "delete"
                        }
                    ],
                    "ctype": "miscellaneous",
                    "subtype": "enum",
                    "description": "",
                    "file": "libs/packages/components/src/lib/key-helper/key-helper.ts"
                }
            ],
            "libs/packages/components/src/lib/common-navigation/common-navigation-model.ts": [
                {
                    "name": "NavigationMode",
                    "childs": [
                        {
                            "name": "INTERNAL"
                        },
                        {
                            "name": "EXTERNAL"
                        },
                        {
                            "name": "EVENT"
                        },
                        {
                            "name": "LABEL"
                        }
                    ],
                    "ctype": "miscellaneous",
                    "subtype": "enum",
                    "description": "",
                    "file": "libs/packages/components/src/lib/common-navigation/common-navigation-model.ts"
                }
            ],
            "libs/packages/components/src/lib/selected-result/models/sds-selected-item-model-helper.ts": [
                {
                    "name": "SelectionMode",
                    "childs": [
                        {
                            "name": "SINGLE"
                        },
                        {
                            "name": "MULTIPLE"
                        }
                    ],
                    "ctype": "miscellaneous",
                    "subtype": "enum",
                    "description": "",
                    "file": "libs/packages/components/src/lib/selected-result/models/sds-selected-item-model-helper.ts"
                }
            ]
        },
        "groupedTypeAliases": {
            "libs/packages/components/src/lib/dialog/dialog-config.ts": [
                {
                    "name": "DialogRole",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "\"dialog\" | \"alertdialog\"",
                    "file": "libs/packages/components/src/lib/dialog/dialog-config.ts",
                    "description": "<p>Valid ARIA roles for a dialog element. </p>\n",
                    "kind": 168
                }
            ],
            "libs/packages/components/src/lib/menu/menu.component.ts": [
                {
                    "name": "MenuPositionX",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "\"before\" | \"after\"",
                    "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                    "description": "<p>Menu Positions </p>\n",
                    "kind": 168
                },
                {
                    "name": "MenuPositionY",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "\"above\" | \"below\"",
                    "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                    "description": "",
                    "kind": 168
                },
                {
                    "name": "MenuSizes",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "",
                    "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                    "description": "<p>Menu available sizes </p>\n",
                    "kind": 177
                }
            ],
            "libs/packages/components/src/lib/pagination/pagination.component.ts": [
                {
                    "name": "PaginationDisplayMode",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "\"default\" | \"results\"",
                    "file": "libs/packages/components/src/lib/pagination/pagination.component.ts",
                    "description": "<p>pagination display modes. </p>\n",
                    "kind": 168
                }
            ],
            "libs/packages/components/src/lib/accordion/accordion-base.ts": [
                {
                    "name": "SdsAccordionDisplayMode",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "\"default\" | \"basic\"",
                    "file": "libs/packages/components/src/lib/accordion/accordion-base.ts",
                    "description": "<p>Accordion&#39;s display modes. </p>\n",
                    "kind": 168
                }
            ],
            "libs/packages/components/src/lib/accordion/accordion-item.component.ts": [
                {
                    "name": "SdsAccordionItemState",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "\"expanded\" | \"collapsed\"",
                    "file": "libs/packages/components/src/lib/accordion/accordion-item.component.ts",
                    "description": "<p>Accordion Item&#39;s states. </p>\n",
                    "kind": 168
                }
            ],
            "libs/packages/components/src/lib/toolbar/toolbar.component.ts": [
                {
                    "name": "SdsToolbarState",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "\"expanded\" | \"collapsed\"",
                    "file": "libs/packages/components/src/lib/toolbar/toolbar.component.ts",
                    "description": "<p>Toolbar&#39;s states. </p>\n",
                    "kind": 168
                }
            ]
        }
    }
};

export default COMPONENTS;
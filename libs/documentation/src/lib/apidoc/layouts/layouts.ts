const LAYOUTS = {
    "pipes": [],
    "interfaces": [
        {
            "name": "Alert",
            "id": "interface-Alert-d449a25073ce91f7edd4623ce2415bf5",
            "file": "libs/packages/layouts/src/lib/feature/system-alert/model/alert.model.ts",
            "type": "interface",
            "sourceCode": "export interface Alert {\r\n  header: string,\r\n  date: Date,\r\n  description: string,\r\n  displayDescription?: boolean;\r\n}",
            "properties": [
                {
                    "name": "date",
                    "type": "Date",
                    "optional": false,
                    "description": "",
                    "line": 3
                },
                {
                    "name": "description",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 4
                },
                {
                    "name": "displayDescription",
                    "type": "boolean",
                    "optional": true,
                    "description": "",
                    "line": 5
                },
                {
                    "name": "header",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 2
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "FooterLogo",
            "id": "interface-FooterLogo-c1dde576b3833a24f5204ee854b9faba",
            "file": "libs/packages/layouts/src/lib/feature/footer/model/FooterModel.ts",
            "type": "interface",
            "sourceCode": "import { INavigationLink, NavigationMode } from '@gsa-sam/components';\r\n\r\nexport class FooterModel {\r\n  /**\r\n   * List of sections and their links\r\n   */\r\n  linkSections: FooterLinkSection[];\r\n\r\n  /**\r\n   * Footer text and logo\r\n   */\r\n\r\n  footerLogo?: FooterLogo;\r\n\r\n  /**\r\n   * Footer disclaimer\r\n   */\r\n\r\n  disclaimer?: string;\r\n\r\n}\r\n\r\nexport class FooterLinkSection {\r\n  /**\r\n   * Title text for the section\r\n   */\r\n  text: string;\r\n\r\n  /**\r\n   * Links in the section\r\n   */\r\n  links: FooterLink[];\r\n}\r\n\r\nexport class FooterLink implements INavigationLink {\r\n  /**\r\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n   */\r\n  mode: NavigationMode;\r\n\r\n  /**\r\n   * Text to be displayed in the link\r\n   */\r\n  text: string;\r\n\r\n  /**\r\n   * Navigation Route\r\n   */\r\n  route: string;\r\n}\r\n\r\nexport interface FooterLogo {\r\n  /**\r\n   * Text for the Header\r\n   */\r\n\r\n  text: string;\r\n\r\n  /**\r\n   * Image Source Path for the Image button\r\n   */\r\n\r\n  imageSourcePath: string;\r\n\r\n  /**\r\n   * Alt text for image\r\n   */\r\n\r\n  imageAltText: string;\r\n\r\n  /**\r\n   * link for logo image\r\n   */\r\n\r\n  href?: string;\r\n\r\n  /**\r\n   * agency name adjacent to logo\r\n   */\r\n\r\n  agencyName?: string;\r\n\r\n}\r\n",
            "properties": [
                {
                    "name": "agencyName",
                    "type": "string",
                    "optional": true,
                    "description": "<p>agency name adjacent to logo</p>\n",
                    "line": 81
                },
                {
                    "name": "href",
                    "type": "string",
                    "optional": true,
                    "description": "<p>link for logo image</p>\n",
                    "line": 75
                },
                {
                    "name": "imageAltText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Alt text for image</p>\n",
                    "line": 69
                },
                {
                    "name": "imageSourcePath",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Image Source Path for the Image button</p>\n",
                    "line": 63
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text for the Header</p>\n",
                    "line": 57
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "HeaderModel",
            "id": "interface-HeaderModel-4cc7e171652a581711db1374980953e3",
            "file": "libs/packages/layouts/src/lib/feature/header/model/HeaderModel.ts",
            "type": "interface",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '@gsa-sam/components';\r\n\r\n\r\nexport interface HeaderModel {\r\n\r\n    /**\r\n     * Header logo and header logo home link\r\n     */\r\n    home: HeaderHome;\r\n\r\n    /**\r\n     * List of secondary links\r\n     */\r\n    secondaryLinks: HeaderSecondaryLink[];\r\n\r\n    /**\r\n     * List of main navigaation links/drop downs\r\n     */\r\n    navigationLinks: HeaderNavigationLink[];\r\n}\r\n\r\n\r\nexport class HeaderHome implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n    */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text for the Header\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Agency Logo for the Header\r\n     */\r\n    logo: string;\r\n\r\n    /**\r\n     * Navigation Route for Home image button\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n    * Identifier for the item when search for selected\r\n    */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n\r\n/**\r\n *\r\n */\r\nexport class HeaderNavigationLink implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text to be displayed in the link or button\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * List of child navigation items that will show when no route is provieded\r\n     */\r\n    children?: HeaderNavigationLink[];\r\n\r\n    /**\r\n     * Identifier for the item when search for selected\r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n\r\n\r\nexport class HeaderSecondaryLink implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text to be displayed in the link\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * image class eg. fas\r\n     */\r\n    imageClassPrefix: string;\r\n\r\n    /**\r\n     * image class\r\n     */\r\n    imageClass: string;\r\n\r\n    /**\r\n     * displays counter with image\r\n     */\r\n    hasCounter?: boolean;\r\n\r\n    /**\r\n     * Identifier for the item when search for selected\r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n",
            "properties": [
                {
                    "name": "home",
                    "type": "HeaderHome",
                    "optional": false,
                    "description": "<p>Header logo and header logo home link</p>\n",
                    "line": 9
                },
                {
                    "name": "navigationLinks",
                    "type": "HeaderNavigationLink[]",
                    "optional": false,
                    "description": "<p>List of main navigaation links/drop downs</p>\n",
                    "line": 19
                },
                {
                    "name": "secondaryLinks",
                    "type": "HeaderSecondaryLink[]",
                    "optional": false,
                    "description": "<p>List of secondary links</p>\n",
                    "line": 14
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "Page",
            "id": "interface-Page-f0a015f283d595cf2af37c0de61570ec",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "interface",
            "sourceCode": "import { Observable } from 'rxjs';\r\nexport class SearchParameters {\r\n\r\n    /**\r\n     * page  \r\n     */\r\n    page: Page;\r\n\r\n    /**\r\n     * Sort value\r\n     */\r\n    sortField: string\r\n\r\n    /**\r\n     * filter data\r\n     */\r\n    filter: any;\r\n\r\n}\r\n\r\nexport interface Page {\r\n\r\n    /**\r\n     * Page number\r\n     */\r\n    pageNumber: number;\r\n\r\n    /**\r\n     * Page size\r\n     */\r\n    pageSize: number;\r\n\r\n    /**\r\n     * Total number of pages\r\n     */\r\n    totalPages: number;\r\n\r\n}\r\n\r\nexport class SearchResult {\r\n\r\n    /**\r\n     * Total number of items (beyond the page)\r\n     */\r\n    totalItems: number;\r\n\r\n    /**\r\n     * Items to be displayed\r\n     */\r\n    items: any[];\r\n}\r\n\r\n\r\n\r\nexport interface SearchListInterface {\r\n\r\n    /**\r\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\r\n     * @param search \r\n     */\r\n    getData(search: SearchParameters): Observable<SearchResult>;\r\n}\r\n\r\nexport class sortItem {\r\n    /**\r\n     * Text to be displayed\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Value of Item\r\n     */\r\n    value: string;\r\n\r\n\r\n}\r\n\r\nexport class SearchListConfiguration {\r\n\r\n    /**\r\n     * List of sort by items\r\n     */\r\n    sortList: sortItem[];\r\n\r\n    /**\r\n     * default sort value\r\n     */\r\n    defaultSortValue: string;\r\n\r\n    /**\r\n     * Starting page size\r\n     */\r\n    pageSize: number = 25;\r\n\r\n}",
            "properties": [
                {
                    "name": "pageNumber",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Page number</p>\n",
                    "line": 26
                },
                {
                    "name": "pageSize",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Page size</p>\n",
                    "line": 31
                },
                {
                    "name": "totalPages",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Total number of pages</p>\n",
                    "line": 36
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "SearchListInterface",
            "id": "interface-SearchListInterface-f0a015f283d595cf2af37c0de61570ec",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "interface",
            "sourceCode": "import { Observable } from 'rxjs';\r\nexport class SearchParameters {\r\n\r\n    /**\r\n     * page  \r\n     */\r\n    page: Page;\r\n\r\n    /**\r\n     * Sort value\r\n     */\r\n    sortField: string\r\n\r\n    /**\r\n     * filter data\r\n     */\r\n    filter: any;\r\n\r\n}\r\n\r\nexport interface Page {\r\n\r\n    /**\r\n     * Page number\r\n     */\r\n    pageNumber: number;\r\n\r\n    /**\r\n     * Page size\r\n     */\r\n    pageSize: number;\r\n\r\n    /**\r\n     * Total number of pages\r\n     */\r\n    totalPages: number;\r\n\r\n}\r\n\r\nexport class SearchResult {\r\n\r\n    /**\r\n     * Total number of items (beyond the page)\r\n     */\r\n    totalItems: number;\r\n\r\n    /**\r\n     * Items to be displayed\r\n     */\r\n    items: any[];\r\n}\r\n\r\n\r\n\r\nexport interface SearchListInterface {\r\n\r\n    /**\r\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\r\n     * @param search \r\n     */\r\n    getData(search: SearchParameters): Observable<SearchResult>;\r\n}\r\n\r\nexport class sortItem {\r\n    /**\r\n     * Text to be displayed\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Value of Item\r\n     */\r\n    value: string;\r\n\r\n\r\n}\r\n\r\nexport class SearchListConfiguration {\r\n\r\n    /**\r\n     * List of sort by items\r\n     */\r\n    sortList: sortItem[];\r\n\r\n    /**\r\n     * default sort value\r\n     */\r\n    defaultSortValue: string;\r\n\r\n    /**\r\n     * Starting page size\r\n     */\r\n    pageSize: number = 25;\r\n\r\n}",
            "properties": [],
            "indexSignatures": [],
            "kind": 152,
            "methods": [
                {
                    "name": "getData",
                    "args": [
                        {
                            "name": "search",
                            "type": "SearchParameters"
                        }
                    ],
                    "optional": false,
                    "returnType": "Observable<SearchResult>",
                    "typeParameters": [],
                    "line": 61,
                    "description": "<p>Method to get the takes it takes in the SearchParameters and returns SearchResult object</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 843,
                                "end": 849,
                                "flags": 0,
                                "escapedText": "search"
                            },
                            "type": "SearchParameters",
                            "tagName": {
                                "pos": 837,
                                "end": 842,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ]
        }
    ],
    "injectables": [
        {
            "name": "SdsDrawerCommunicationService",
            "id": "injectable-SdsDrawerCommunicationService-f9aa94bfe2455784ded364dfaec0289e",
            "file": "libs/packages/layouts/src/lib/feature/subheader/drawer-communication.service.ts",
            "properties": [
                {
                    "name": "contentTemplate",
                    "defaultValue": "this.currentTemplate.asObservable()",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 10
                },
                {
                    "name": "currentTemplate",
                    "defaultValue": "new BehaviorSubject<TemplateRef<any>>(null)",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 9,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "isDrawerOpen",
                    "defaultValue": "this.isOpen.asObservable()",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 7
                },
                {
                    "name": "isOpen",
                    "defaultValue": "new BehaviorSubject(false)",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 6,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methods": [
                {
                    "name": "onDrawerOpen",
                    "args": [
                        {
                            "name": "open",
                            "type": "boolean"
                        },
                        {
                            "name": "temp",
                            "type": "TemplateRef<any>"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 12,
                    "jsdoctags": [
                        {
                            "name": "open",
                            "type": "boolean",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "temp",
                            "type": "TemplateRef<any>",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "description": "",
            "sourceCode": "import { Injectable, TemplateRef } from '@angular/core';\r\nimport { BehaviorSubject } from 'rxjs';\r\n\r\n@Injectable()\r\nexport class SdsDrawerCommunicationService {\r\n  private isOpen = new BehaviorSubject(false);\r\n  isDrawerOpen = this.isOpen.asObservable();\r\n\r\n  private currentTemplate= new BehaviorSubject<TemplateRef<any>>(null);\r\n  contentTemplate = this.currentTemplate.asObservable();\r\n\r\n  onDrawerOpen(open: boolean, temp : TemplateRef<any>){\r\n    this.isOpen.next(open);\r\n    this.currentTemplate.next(temp);  \r\n  }\r\n}",
            "type": "injectable"
        }
    ],
    "classes": [
        {
            "name": "FooterLink",
            "id": "class-FooterLink-c1dde576b3833a24f5204ee854b9faba",
            "file": "libs/packages/layouts/src/lib/feature/footer/model/FooterModel.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode } from '@gsa-sam/components';\r\n\r\nexport class FooterModel {\r\n  /**\r\n   * List of sections and their links\r\n   */\r\n  linkSections: FooterLinkSection[];\r\n\r\n  /**\r\n   * Footer text and logo\r\n   */\r\n\r\n  footerLogo?: FooterLogo;\r\n\r\n  /**\r\n   * Footer disclaimer\r\n   */\r\n\r\n  disclaimer?: string;\r\n\r\n}\r\n\r\nexport class FooterLinkSection {\r\n  /**\r\n   * Title text for the section\r\n   */\r\n  text: string;\r\n\r\n  /**\r\n   * Links in the section\r\n   */\r\n  links: FooterLink[];\r\n}\r\n\r\nexport class FooterLink implements INavigationLink {\r\n  /**\r\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n   */\r\n  mode: NavigationMode;\r\n\r\n  /**\r\n   * Text to be displayed in the link\r\n   */\r\n  text: string;\r\n\r\n  /**\r\n   * Navigation Route\r\n   */\r\n  route: string;\r\n}\r\n\r\nexport interface FooterLogo {\r\n  /**\r\n   * Text for the Header\r\n   */\r\n\r\n  text: string;\r\n\r\n  /**\r\n   * Image Source Path for the Image button\r\n   */\r\n\r\n  imageSourcePath: string;\r\n\r\n  /**\r\n   * Alt text for image\r\n   */\r\n\r\n  imageAltText: string;\r\n\r\n  /**\r\n   * link for logo image\r\n   */\r\n\r\n  href?: string;\r\n\r\n  /**\r\n   * agency name adjacent to logo\r\n   */\r\n\r\n  agencyName?: string;\r\n\r\n}\r\n",
            "properties": [
                {
                    "name": "mode",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 39
                },
                {
                    "name": "route",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route</p>\n",
                    "line": 49
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed in the link</p>\n",
                    "line": 44
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "implements": [
                "INavigationLink"
            ]
        },
        {
            "name": "FooterLinkSection",
            "id": "class-FooterLinkSection-c1dde576b3833a24f5204ee854b9faba",
            "file": "libs/packages/layouts/src/lib/feature/footer/model/FooterModel.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode } from '@gsa-sam/components';\r\n\r\nexport class FooterModel {\r\n  /**\r\n   * List of sections and their links\r\n   */\r\n  linkSections: FooterLinkSection[];\r\n\r\n  /**\r\n   * Footer text and logo\r\n   */\r\n\r\n  footerLogo?: FooterLogo;\r\n\r\n  /**\r\n   * Footer disclaimer\r\n   */\r\n\r\n  disclaimer?: string;\r\n\r\n}\r\n\r\nexport class FooterLinkSection {\r\n  /**\r\n   * Title text for the section\r\n   */\r\n  text: string;\r\n\r\n  /**\r\n   * Links in the section\r\n   */\r\n  links: FooterLink[];\r\n}\r\n\r\nexport class FooterLink implements INavigationLink {\r\n  /**\r\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n   */\r\n  mode: NavigationMode;\r\n\r\n  /**\r\n   * Text to be displayed in the link\r\n   */\r\n  text: string;\r\n\r\n  /**\r\n   * Navigation Route\r\n   */\r\n  route: string;\r\n}\r\n\r\nexport interface FooterLogo {\r\n  /**\r\n   * Text for the Header\r\n   */\r\n\r\n  text: string;\r\n\r\n  /**\r\n   * Image Source Path for the Image button\r\n   */\r\n\r\n  imageSourcePath: string;\r\n\r\n  /**\r\n   * Alt text for image\r\n   */\r\n\r\n  imageAltText: string;\r\n\r\n  /**\r\n   * link for logo image\r\n   */\r\n\r\n  href?: string;\r\n\r\n  /**\r\n   * agency name adjacent to logo\r\n   */\r\n\r\n  agencyName?: string;\r\n\r\n}\r\n",
            "properties": [
                {
                    "name": "links",
                    "type": "FooterLink[]",
                    "optional": false,
                    "description": "<p>Links in the section</p>\n",
                    "line": 32
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Title text for the section</p>\n",
                    "line": 27
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
            "name": "FooterModel",
            "id": "class-FooterModel-c1dde576b3833a24f5204ee854b9faba",
            "file": "libs/packages/layouts/src/lib/feature/footer/model/FooterModel.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode } from '@gsa-sam/components';\r\n\r\nexport class FooterModel {\r\n  /**\r\n   * List of sections and their links\r\n   */\r\n  linkSections: FooterLinkSection[];\r\n\r\n  /**\r\n   * Footer text and logo\r\n   */\r\n\r\n  footerLogo?: FooterLogo;\r\n\r\n  /**\r\n   * Footer disclaimer\r\n   */\r\n\r\n  disclaimer?: string;\r\n\r\n}\r\n\r\nexport class FooterLinkSection {\r\n  /**\r\n   * Title text for the section\r\n   */\r\n  text: string;\r\n\r\n  /**\r\n   * Links in the section\r\n   */\r\n  links: FooterLink[];\r\n}\r\n\r\nexport class FooterLink implements INavigationLink {\r\n  /**\r\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n   */\r\n  mode: NavigationMode;\r\n\r\n  /**\r\n   * Text to be displayed in the link\r\n   */\r\n  text: string;\r\n\r\n  /**\r\n   * Navigation Route\r\n   */\r\n  route: string;\r\n}\r\n\r\nexport interface FooterLogo {\r\n  /**\r\n   * Text for the Header\r\n   */\r\n\r\n  text: string;\r\n\r\n  /**\r\n   * Image Source Path for the Image button\r\n   */\r\n\r\n  imageSourcePath: string;\r\n\r\n  /**\r\n   * Alt text for image\r\n   */\r\n\r\n  imageAltText: string;\r\n\r\n  /**\r\n   * link for logo image\r\n   */\r\n\r\n  href?: string;\r\n\r\n  /**\r\n   * agency name adjacent to logo\r\n   */\r\n\r\n  agencyName?: string;\r\n\r\n}\r\n",
            "properties": [
                {
                    "name": "disclaimer",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Footer disclaimer</p>\n",
                    "line": 19
                },
                {
                    "name": "footerLogo",
                    "type": "FooterLogo",
                    "optional": true,
                    "description": "<p>Footer text and logo</p>\n",
                    "line": 13
                },
                {
                    "name": "linkSections",
                    "type": "FooterLinkSection[]",
                    "optional": false,
                    "description": "<p>List of sections and their links</p>\n",
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
            "name": "HeaderHome",
            "id": "class-HeaderHome-4cc7e171652a581711db1374980953e3",
            "file": "libs/packages/layouts/src/lib/feature/header/model/HeaderModel.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '@gsa-sam/components';\r\n\r\n\r\nexport interface HeaderModel {\r\n\r\n    /**\r\n     * Header logo and header logo home link\r\n     */\r\n    home: HeaderHome;\r\n\r\n    /**\r\n     * List of secondary links\r\n     */\r\n    secondaryLinks: HeaderSecondaryLink[];\r\n\r\n    /**\r\n     * List of main navigaation links/drop downs\r\n     */\r\n    navigationLinks: HeaderNavigationLink[];\r\n}\r\n\r\n\r\nexport class HeaderHome implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n    */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text for the Header\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Agency Logo for the Header\r\n     */\r\n    logo: string;\r\n\r\n    /**\r\n     * Navigation Route for Home image button\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n    * Identifier for the item when search for selected\r\n    */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n\r\n/**\r\n *\r\n */\r\nexport class HeaderNavigationLink implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text to be displayed in the link or button\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * List of child navigation items that will show when no route is provieded\r\n     */\r\n    children?: HeaderNavigationLink[];\r\n\r\n    /**\r\n     * Identifier for the item when search for selected\r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n\r\n\r\nexport class HeaderSecondaryLink implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text to be displayed in the link\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * image class eg. fas\r\n     */\r\n    imageClassPrefix: string;\r\n\r\n    /**\r\n     * image class\r\n     */\r\n    imageClass: string;\r\n\r\n    /**\r\n     * displays counter with image\r\n     */\r\n    hasCounter?: boolean;\r\n\r\n    /**\r\n     * Identifier for the item when search for selected\r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n",
            "properties": [
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Identifier for the item when search for selected</p>\n",
                    "line": 48
                },
                {
                    "name": "logo",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Agency Logo for the Header</p>\n",
                    "line": 38
                },
                {
                    "name": "mode",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 28
                },
                {
                    "name": "route",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route for Home image button</p>\n",
                    "line": 43
                },
                {
                    "name": "selected",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>Status of if the item is selected</p>\n",
                    "line": 53
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text for the Header</p>\n",
                    "line": 33
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
            "name": "HeaderNavigationLink",
            "id": "class-HeaderNavigationLink-4cc7e171652a581711db1374980953e3",
            "file": "libs/packages/layouts/src/lib/feature/header/model/HeaderModel.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '@gsa-sam/components';\r\n\r\n\r\nexport interface HeaderModel {\r\n\r\n    /**\r\n     * Header logo and header logo home link\r\n     */\r\n    home: HeaderHome;\r\n\r\n    /**\r\n     * List of secondary links\r\n     */\r\n    secondaryLinks: HeaderSecondaryLink[];\r\n\r\n    /**\r\n     * List of main navigaation links/drop downs\r\n     */\r\n    navigationLinks: HeaderNavigationLink[];\r\n}\r\n\r\n\r\nexport class HeaderHome implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n    */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text for the Header\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Agency Logo for the Header\r\n     */\r\n    logo: string;\r\n\r\n    /**\r\n     * Navigation Route for Home image button\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n    * Identifier for the item when search for selected\r\n    */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n\r\n/**\r\n *\r\n */\r\nexport class HeaderNavigationLink implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text to be displayed in the link or button\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * List of child navigation items that will show when no route is provieded\r\n     */\r\n    children?: HeaderNavigationLink[];\r\n\r\n    /**\r\n     * Identifier for the item when search for selected\r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n\r\n\r\nexport class HeaderSecondaryLink implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text to be displayed in the link\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * image class eg. fas\r\n     */\r\n    imageClassPrefix: string;\r\n\r\n    /**\r\n     * image class\r\n     */\r\n    imageClass: string;\r\n\r\n    /**\r\n     * displays counter with image\r\n     */\r\n    hasCounter?: boolean;\r\n\r\n    /**\r\n     * Identifier for the item when search for selected\r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n",
            "properties": [
                {
                    "name": "children",
                    "type": "HeaderNavigationLink[]",
                    "optional": true,
                    "description": "<p>List of child navigation items that will show when no route is provieded</p>\n",
                    "line": 79
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Identifier for the item when search for selected</p>\n",
                    "line": 84
                },
                {
                    "name": "mode",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 64
                },
                {
                    "name": "route",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route</p>\n",
                    "line": 74
                },
                {
                    "name": "selected",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>Status of if the item is selected</p>\n",
                    "line": 89
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed in the link or button</p>\n",
                    "line": 69
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
            "name": "HeaderSecondaryLink",
            "id": "class-HeaderSecondaryLink-4cc7e171652a581711db1374980953e3",
            "file": "libs/packages/layouts/src/lib/feature/header/model/HeaderModel.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '@gsa-sam/components';\r\n\r\n\r\nexport interface HeaderModel {\r\n\r\n    /**\r\n     * Header logo and header logo home link\r\n     */\r\n    home: HeaderHome;\r\n\r\n    /**\r\n     * List of secondary links\r\n     */\r\n    secondaryLinks: HeaderSecondaryLink[];\r\n\r\n    /**\r\n     * List of main navigaation links/drop downs\r\n     */\r\n    navigationLinks: HeaderNavigationLink[];\r\n}\r\n\r\n\r\nexport class HeaderHome implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n    */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text for the Header\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Agency Logo for the Header\r\n     */\r\n    logo: string;\r\n\r\n    /**\r\n     * Navigation Route for Home image button\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n    * Identifier for the item when search for selected\r\n    */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n\r\n/**\r\n *\r\n */\r\nexport class HeaderNavigationLink implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text to be displayed in the link or button\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * List of child navigation items that will show when no route is provieded\r\n     */\r\n    children?: HeaderNavigationLink[];\r\n\r\n    /**\r\n     * Identifier for the item when search for selected\r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n\r\n\r\nexport class HeaderSecondaryLink implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text to be displayed in the link\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * image class eg. fas\r\n     */\r\n    imageClassPrefix: string;\r\n\r\n    /**\r\n     * image class\r\n     */\r\n    imageClass: string;\r\n\r\n    /**\r\n     * displays counter with image\r\n     */\r\n    hasCounter?: boolean;\r\n\r\n    /**\r\n     * Identifier for the item when search for selected\r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n",
            "properties": [
                {
                    "name": "hasCounter",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>displays counter with image</p>\n",
                    "line": 123
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Identifier for the item when search for selected</p>\n",
                    "line": 128
                },
                {
                    "name": "imageClass",
                    "type": "string",
                    "optional": false,
                    "description": "<p>image class</p>\n",
                    "line": 118
                },
                {
                    "name": "imageClassPrefix",
                    "type": "string",
                    "optional": false,
                    "description": "<p>image class eg. fas</p>\n",
                    "line": 113
                },
                {
                    "name": "mode",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 98
                },
                {
                    "name": "route",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route</p>\n",
                    "line": 108
                },
                {
                    "name": "selected",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>Status of if the item is selected</p>\n",
                    "line": 133
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed in the link</p>\n",
                    "line": 103
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
            "name": "SearchListConfiguration",
            "id": "class-SearchListConfiguration-f0a015f283d595cf2af37c0de61570ec",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "class",
            "sourceCode": "import { Observable } from 'rxjs';\r\nexport class SearchParameters {\r\n\r\n    /**\r\n     * page  \r\n     */\r\n    page: Page;\r\n\r\n    /**\r\n     * Sort value\r\n     */\r\n    sortField: string\r\n\r\n    /**\r\n     * filter data\r\n     */\r\n    filter: any;\r\n\r\n}\r\n\r\nexport interface Page {\r\n\r\n    /**\r\n     * Page number\r\n     */\r\n    pageNumber: number;\r\n\r\n    /**\r\n     * Page size\r\n     */\r\n    pageSize: number;\r\n\r\n    /**\r\n     * Total number of pages\r\n     */\r\n    totalPages: number;\r\n\r\n}\r\n\r\nexport class SearchResult {\r\n\r\n    /**\r\n     * Total number of items (beyond the page)\r\n     */\r\n    totalItems: number;\r\n\r\n    /**\r\n     * Items to be displayed\r\n     */\r\n    items: any[];\r\n}\r\n\r\n\r\n\r\nexport interface SearchListInterface {\r\n\r\n    /**\r\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\r\n     * @param search \r\n     */\r\n    getData(search: SearchParameters): Observable<SearchResult>;\r\n}\r\n\r\nexport class sortItem {\r\n    /**\r\n     * Text to be displayed\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Value of Item\r\n     */\r\n    value: string;\r\n\r\n\r\n}\r\n\r\nexport class SearchListConfiguration {\r\n\r\n    /**\r\n     * List of sort by items\r\n     */\r\n    sortList: sortItem[];\r\n\r\n    /**\r\n     * default sort value\r\n     */\r\n    defaultSortValue: string;\r\n\r\n    /**\r\n     * Starting page size\r\n     */\r\n    pageSize: number = 25;\r\n\r\n}",
            "properties": [
                {
                    "name": "defaultSortValue",
                    "type": "string",
                    "optional": false,
                    "description": "<p>default sort value</p>\n",
                    "line": 88
                },
                {
                    "name": "pageSize",
                    "defaultValue": "25",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Starting page size</p>\n",
                    "line": 93
                },
                {
                    "name": "sortList",
                    "type": "sortItem[]",
                    "optional": false,
                    "description": "<p>List of sort by items</p>\n",
                    "line": 83
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
            "name": "SearchParameters",
            "id": "class-SearchParameters-f0a015f283d595cf2af37c0de61570ec",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "class",
            "sourceCode": "import { Observable } from 'rxjs';\r\nexport class SearchParameters {\r\n\r\n    /**\r\n     * page  \r\n     */\r\n    page: Page;\r\n\r\n    /**\r\n     * Sort value\r\n     */\r\n    sortField: string\r\n\r\n    /**\r\n     * filter data\r\n     */\r\n    filter: any;\r\n\r\n}\r\n\r\nexport interface Page {\r\n\r\n    /**\r\n     * Page number\r\n     */\r\n    pageNumber: number;\r\n\r\n    /**\r\n     * Page size\r\n     */\r\n    pageSize: number;\r\n\r\n    /**\r\n     * Total number of pages\r\n     */\r\n    totalPages: number;\r\n\r\n}\r\n\r\nexport class SearchResult {\r\n\r\n    /**\r\n     * Total number of items (beyond the page)\r\n     */\r\n    totalItems: number;\r\n\r\n    /**\r\n     * Items to be displayed\r\n     */\r\n    items: any[];\r\n}\r\n\r\n\r\n\r\nexport interface SearchListInterface {\r\n\r\n    /**\r\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\r\n     * @param search \r\n     */\r\n    getData(search: SearchParameters): Observable<SearchResult>;\r\n}\r\n\r\nexport class sortItem {\r\n    /**\r\n     * Text to be displayed\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Value of Item\r\n     */\r\n    value: string;\r\n\r\n\r\n}\r\n\r\nexport class SearchListConfiguration {\r\n\r\n    /**\r\n     * List of sort by items\r\n     */\r\n    sortList: sortItem[];\r\n\r\n    /**\r\n     * default sort value\r\n     */\r\n    defaultSortValue: string;\r\n\r\n    /**\r\n     * Starting page size\r\n     */\r\n    pageSize: number = 25;\r\n\r\n}",
            "properties": [
                {
                    "name": "filter",
                    "type": "any",
                    "optional": false,
                    "description": "<p>filter data</p>\n",
                    "line": 17
                },
                {
                    "name": "page",
                    "type": "Page",
                    "optional": false,
                    "description": "<p>page  </p>\n",
                    "line": 7
                },
                {
                    "name": "sortField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Sort value</p>\n",
                    "line": 12
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
            "name": "SearchResult",
            "id": "class-SearchResult-f0a015f283d595cf2af37c0de61570ec",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "class",
            "sourceCode": "import { Observable } from 'rxjs';\r\nexport class SearchParameters {\r\n\r\n    /**\r\n     * page  \r\n     */\r\n    page: Page;\r\n\r\n    /**\r\n     * Sort value\r\n     */\r\n    sortField: string\r\n\r\n    /**\r\n     * filter data\r\n     */\r\n    filter: any;\r\n\r\n}\r\n\r\nexport interface Page {\r\n\r\n    /**\r\n     * Page number\r\n     */\r\n    pageNumber: number;\r\n\r\n    /**\r\n     * Page size\r\n     */\r\n    pageSize: number;\r\n\r\n    /**\r\n     * Total number of pages\r\n     */\r\n    totalPages: number;\r\n\r\n}\r\n\r\nexport class SearchResult {\r\n\r\n    /**\r\n     * Total number of items (beyond the page)\r\n     */\r\n    totalItems: number;\r\n\r\n    /**\r\n     * Items to be displayed\r\n     */\r\n    items: any[];\r\n}\r\n\r\n\r\n\r\nexport interface SearchListInterface {\r\n\r\n    /**\r\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\r\n     * @param search \r\n     */\r\n    getData(search: SearchParameters): Observable<SearchResult>;\r\n}\r\n\r\nexport class sortItem {\r\n    /**\r\n     * Text to be displayed\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Value of Item\r\n     */\r\n    value: string;\r\n\r\n\r\n}\r\n\r\nexport class SearchListConfiguration {\r\n\r\n    /**\r\n     * List of sort by items\r\n     */\r\n    sortList: sortItem[];\r\n\r\n    /**\r\n     * default sort value\r\n     */\r\n    defaultSortValue: string;\r\n\r\n    /**\r\n     * Starting page size\r\n     */\r\n    pageSize: number = 25;\r\n\r\n}",
            "properties": [
                {
                    "name": "items",
                    "type": "any[]",
                    "optional": false,
                    "description": "<p>Items to be displayed</p>\n",
                    "line": 50
                },
                {
                    "name": "totalItems",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Total number of items (beyond the page)</p>\n",
                    "line": 45
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
            "name": "sortItem",
            "id": "class-sortItem-f0a015f283d595cf2af37c0de61570ec",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "class",
            "sourceCode": "import { Observable } from 'rxjs';\r\nexport class SearchParameters {\r\n\r\n    /**\r\n     * page  \r\n     */\r\n    page: Page;\r\n\r\n    /**\r\n     * Sort value\r\n     */\r\n    sortField: string\r\n\r\n    /**\r\n     * filter data\r\n     */\r\n    filter: any;\r\n\r\n}\r\n\r\nexport interface Page {\r\n\r\n    /**\r\n     * Page number\r\n     */\r\n    pageNumber: number;\r\n\r\n    /**\r\n     * Page size\r\n     */\r\n    pageSize: number;\r\n\r\n    /**\r\n     * Total number of pages\r\n     */\r\n    totalPages: number;\r\n\r\n}\r\n\r\nexport class SearchResult {\r\n\r\n    /**\r\n     * Total number of items (beyond the page)\r\n     */\r\n    totalItems: number;\r\n\r\n    /**\r\n     * Items to be displayed\r\n     */\r\n    items: any[];\r\n}\r\n\r\n\r\n\r\nexport interface SearchListInterface {\r\n\r\n    /**\r\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\r\n     * @param search \r\n     */\r\n    getData(search: SearchParameters): Observable<SearchResult>;\r\n}\r\n\r\nexport class sortItem {\r\n    /**\r\n     * Text to be displayed\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Value of Item\r\n     */\r\n    value: string;\r\n\r\n\r\n}\r\n\r\nexport class SearchListConfiguration {\r\n\r\n    /**\r\n     * List of sort by items\r\n     */\r\n    sortList: sortItem[];\r\n\r\n    /**\r\n     * default sort value\r\n     */\r\n    defaultSortValue: string;\r\n\r\n    /**\r\n     * Starting page size\r\n     */\r\n    pageSize: number = 25;\r\n\r\n}",
            "properties": [
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed</p>\n",
                    "line": 68
                },
                {
                    "name": "value",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Value of Item</p>\n",
                    "line": 73
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
    "directives": [],
    "components": [
        {
            "name": "SdsActionsMenuComponent",
            "id": "component-SdsActionsMenuComponent-41de6c2929cece4193a73b67983cda53",
            "file": "libs/packages/layouts/src/lib/feature/actions-menu/actions-menu.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-actions-menu",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "actions-menu.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "model",
                    "line": 8
                },
                {
                    "name": "size",
                    "line": 9,
                    "type": "string"
                }
            ],
            "outputsClass": [
                {
                    "name": "clicks",
                    "defaultValue": "new EventEmitter<string>()",
                    "line": 10,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [],
            "methodsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input, Output, EventEmitter } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'sds-actions-menu',\r\n  templateUrl: 'actions-menu.component.html'\r\n})\r\nexport class SdsActionsMenuComponent {\r\n  @Input() model;\r\n  @Input() size: string;\r\n  @Output() clicks = new EventEmitter<string>();\r\n  constructor() {}\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 10
            },
            "templateData": "<!-- Button that triggers menu (sdsMenuTriggerFor) -->\r\n<button\r\n  class=\"sds-button sds-button--circular\"\r\n  [class.sds-button--primary]=\"model.trigger.type === 'primary'\"\r\n  [class.sds-button--shadow]=\"model.trigger.shadow\"\r\n  [class.sds-button--small]=\"size === 'sm'\"\r\n  [sdsMenuTriggerFor]=\"menu\"\r\n>\r\n  <fa-icon\r\n    [fixedWidth]=\"true\"\r\n    [icon]=\"['sds', 'ellipsis']\"\r\n    transform=\"grow-5\"\r\n  ></fa-icon>\r\n  <span class=\"usa-sr-only\">Toggle Actions Menu</span>\r\n</button>\r\n\r\n<!-- Menu content -->\r\n<sds-menu\r\n  #menu=\"sdsMenu\"\r\n  [size]=\"size\"\r\n  xPosition=\"before\"\r\n  overlapTrigger=\"true\"\r\n>\r\n  <!-- Menu header (optional) -->\r\n  <sds-menu-header>Actions</sds-menu-header>\r\n  <!-- Menu items -->\r\n  <button\r\n    *ngFor=\"let button of model.actions\"\r\n    (click)=\"clicks.emit(button.id)\"\r\n    sds-menu-item\r\n  >\r\n    {{ button.text }}\r\n  </button>\r\n</sds-menu>\r\n"
        },
        {
            "name": "SdsDrawerContentComponent",
            "id": "component-SdsDrawerContentComponent-6a5ad5bb109b156ea8d9ea2bd3373ec1",
            "file": "libs/packages/layouts/src/lib/feature/subheader/subheader.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-drawer-content",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "drawer.content.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "data",
                    "type": "SdsDrawerCommunicationService",
                    "optional": false,
                    "description": "",
                    "line": 55,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "drawerContentTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 52
                },
                {
                    "name": "isDrawerOpen",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 53
                }
            ],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 56
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\r\n  Component,\r\n  OnInit,\r\n  Output,\r\n  EventEmitter,\r\n  Input,\r\n  TemplateRef\r\n} from '@angular/core';\r\nimport { SdsDrawerCommunicationService } from './drawer-communication.service';\r\n\r\n@Component({\r\n  selector: 'sds-subheader',\r\n  templateUrl: 'subheader.component.html',\r\n  styleUrls: ['subheader.component.scss']\r\n})\r\nexport class SdsSubheaderComponent {\r\n  constructor() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-subheader-actions',\r\n  templateUrl: 'subheader-actions.component.html'\r\n})\r\nexport class SdsSubheaderActionsComponent {\r\n  @Input() model;\r\n  @Output() clicks = new EventEmitter<string>();\r\n  constructor() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-subheader-drawer',\r\n  templateUrl: 'subheader-drawer.component.html'\r\n})\r\nexport class SdsSubheaderDrawerComponent implements OnInit {\r\n  @Input() drawerContentTemplate: TemplateRef<any>;\r\n  @Output() isDrawerOpen = new EventEmitter<boolean>();\r\n  isOpen = false;\r\n\r\n  constructor(public data: SdsDrawerCommunicationService) {}\r\n  onDrawerOpenClose(ev) {\r\n    this.isOpen = !this.isOpen;\r\n    this.data.onDrawerOpen(this.isOpen, this.drawerContentTemplate);\r\n  }\r\n  ngOnInit() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-drawer-content',\r\n  templateUrl: 'drawer.content.component.html'\r\n})\r\nexport class SdsDrawerContentComponent implements OnInit {\r\n  drawerContentTemplate: TemplateRef<any>;\r\n  isDrawerOpen = false;\r\n\r\n  constructor(public data: SdsDrawerCommunicationService) {}\r\n  ngOnInit() {\r\n    this.data.contentTemplate.subscribe(\r\n      template => (this.drawerContentTemplate = template)\r\n    );\r\n    this.data.isDrawerOpen.subscribe(open => (this.isDrawerOpen = open));\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "data",
                        "type": "SdsDrawerCommunicationService"
                    }
                ],
                "line": 53,
                "jsdoctags": [
                    {
                        "name": "data",
                        "type": "SdsDrawerCommunicationService",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnInit"
            ],
            "templateData": "<ng-container *ngIf=\"drawerContentTemplate && isDrawerOpen\" [ngTemplateOutlet]=\"drawerContentTemplate\" >\r\n</ng-container>\r\n"
        },
        {
            "name": "SdsFooterComponent",
            "id": "component-SdsFooterComponent-9019878ee40b24a38fbb0d41697e4fd7",
            "file": "libs/packages/layouts/src/lib/feature/footer/footer.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-footer",
            "styleUrls": [
                "./footer.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./footer.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "feedbackModel",
                    "defaultValue": "new FormControl('')",
                    "line": 24,
                    "type": "FormControl"
                },
                {
                    "name": "isCollapsedContent",
                    "defaultValue": "true",
                    "line": 23
                },
                {
                    "name": "model",
                    "description": "<p>Model used for the different display portions of the footer</p>\n",
                    "line": 22,
                    "type": "FooterModel"
                }
            ],
            "outputsClass": [
                {
                    "name": "feedbackSubmit",
                    "defaultValue": "new EventEmitter<string>()",
                    "line": 33,
                    "type": "EventEmitter"
                },
                {
                    "name": "linkEvent",
                    "defaultValue": "new EventEmitter<INavigationLink>()",
                    "description": "<p>event for event based</p>\n",
                    "line": 30,
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
                    "line": 17
                }
            ],
            "methodsClass": [
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
                    "line": 40,
                    "description": "<p>Link clicked and emits the link data into an event</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1005,
                                "end": 1009,
                                "flags": 0,
                                "escapedText": "link"
                            },
                            "type": "INavigationLink",
                            "tagName": {
                                "pos": 999,
                                "end": 1004,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "onFeedbackSubmitClicked",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 45
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input, Output, EventEmitter } from '@angular/core';\r\nimport { FooterModel } from './model/FooterModel';\r\nimport { INavigationLink } from '@gsa-sam/components';\r\nimport { NavigationHelper } from '@gsa-sam/components';\r\nimport { FormControl } from '@angular/forms';\r\n\r\n@Component({\r\n  selector: 'sds-footer',\r\n  templateUrl: './footer.component.html',\r\n  styleUrls: ['./footer.component.scss']\r\n})\r\nexport class SdsFooterComponent {\r\n\r\n  /**\r\n   * Navigation helper\r\n   */\r\n  navigationHelper = new NavigationHelper();\r\n\r\n  /**\r\n   * Model used for the different display portions of the footer\r\n   */\r\n  @Input() model: FooterModel;\r\n  @Input() isCollapsedContent = true;\r\n  @Input() feedbackModel: FormControl = new FormControl('');\r\n\r\n  /**\r\n   * event for event based\r\n   */\r\n  @Output()\r\n  linkEvent = new EventEmitter<INavigationLink>();\r\n\r\n  @Output()\r\n  feedbackSubmit = new EventEmitter<string>();\r\n\r\n\r\n  /**\r\n   * Link clicked and emits the link data into an event\r\n   * @param link\r\n   */\r\n  linkClickEvent(link: INavigationLink) {\r\n    this.linkEvent.emit(link);\r\n    return false;\r\n  }\r\n\r\n  onFeedbackSubmitClicked() {\r\n    this.feedbackSubmit.emit(this.feedbackModel.value);\r\n  }\r\n\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "\r\n",
                    "styleUrl": "./footer.component.scss"
                }
            ],
            "stylesData": "",
            "templateData": "<footer class=\"usa-footer\" role=\"contentinfo\">\r\n  <div class=\"sds-feedback\">\r\n    <button\r\n      type=\"button\"\r\n      class=\"sds-feedback__button simple-toggle\"\r\n      [attr.aria-expanded]=\"!isCollapsedContent\"\r\n      aria-controls=\"collapseID\"\r\n      (click)=\"isCollapsedContent = !isCollapsedContent\"\r\n    >\r\n      <fa-layers [fixedWidth]=\"true\" size=\"2x\">\r\n        <fa-icon\r\n          [icon]=\"['fas', 'circle']\"\r\n          [sdsCollapse]=\"isCollapsedContent\"\r\n          class=\"text-base-light margin-auto\"\r\n        ></fa-icon>\r\n        <fa-icon\r\n          [icon]=\"['sds', 'arrow-up']\"\r\n          [sdsCollapse]=\"isCollapsedContent\"\r\n          transform=\"shrink-6\"\r\n        ></fa-icon>\r\n        <fa-icon\r\n          [icon]=\"['fas', 'circle']\"\r\n          [sdsCollapse]=\"!isCollapsedContent\"\r\n          class=\"text-primary margin-auto\"\r\n        ></fa-icon>\r\n        <fa-icon\r\n          [icon]=\"['sds', 'arrow-down']\"\r\n          [sdsCollapse]=\"!isCollapsedContent\"\r\n          transform=\"shrink-6\"\r\n        ></fa-icon>\r\n      </fa-layers>\r\n      <span class=\"sds-feedback__title\">Feedback</span>\r\n    </button>\r\n    <div\r\n      id=\"collapseID\"\r\n      [sdsCollapse]=\"isCollapsedContent\"\r\n      class=\"sds-feedback__response\"\r\n    >\r\n      <div class=\"tablet:width-tablet-lg padding-4 margin-auto\">\r\n        <span class=\"sds-feedback__response-title\">One Question </span>\r\n        <span class=\"sds-feedback__response-title-thin\"> Survey</span>\r\n        <p class=\"sds-feedback__response-text\">\r\n          What changes or improvements would you suggest?\r\n        </p>\r\n        <textarea [formControl]=\"feedbackModel\" class=\"sds-feedback__input\" id=\"feedbackInput\" aria-label=\"Feedback input form\" type=\"text\" rows=\"8\"></textarea>\r\n        <p class=\"text-left\">\r\n          <button class=\"usa-button usa-button--secondary\" id=\"feedbackSubmit\" \r\n            aria-label=\"Feedback submit\" (click)=\"onFeedbackSubmitClicked()\">Submit</button>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"usa-footer__primary-section\">\r\n    <div class=\"grid-container margin-x-0 mobile-lg:margin-x-auto padding-x-0 mobile-lg:padding-x-auto display-none tablet:display-block\">\r\n      <div class=\"grid-row grid-gap-0 mobile-lg:grid-gap\">\r\n        <div class=\"tablet:grid-col-12\">\r\n          <nav class=\"usa-footer__nav margin-x-0 mobile-lg:margin-x-2 padding-x-0 mobile-lg:padding-x-2\">\r\n            <div class=\"grid-row grid-gap-0 mobile-lg:grid-gap-4\">\r\n              <div class=\"mobile-lg:grid-col-6 desktop:grid-col-3\" *ngFor=\"let section of model.linkSections\">\r\n                <section class=\"usa-footer__primary-content usa-footer__primary-content--collapsible\">\r\n                  <h4 class=\"usa-footer__primary-link\">{{ section.text }}</h4>\r\n                  <ul class=\"usa-list usa-list--unstyled\">\r\n                    <li class=\"usa-footer__secondary-link\" *ngFor=\"let link of section.links\">\r\n                      <ng-container\r\n                        [ngTemplateOutlet]=\"\r\n                          navigationHelper.isLinkInternal(link)\r\n                            ? footerRouteLinkTemplate\r\n                            : navigationHelper.isLinkExternal(link)\r\n                            ? footerHREFLinkTemplate\r\n                            : footerEVENTLinkTemplate\r\n                        \"\r\n                        [ngTemplateOutletContext]=\"{ $implicit: link }\"\r\n                      ></ng-container>\r\n                    </li>\r\n                  </ul>\r\n                </section>\r\n              </div>\r\n            </div>\r\n          </nav>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <nav class=\"sds-footer__nav--accordion display-block tablet:display-none\">\r\n      <sds-accordion-next [multi]=\"true\">\r\n        <sds-accordion-item *ngFor=\"let section of model.linkSections; let $index = index\">\r\n          <sds-accordion-title>{{ section.text }}</sds-accordion-title>\r\n          <sds-accordion-content>\r\n            <ul class=\"usa-list usa-list--unstyled padding-y-1\">\r\n              <li class=\"usa-footer__secondary-link\" *ngFor=\"let link of section.links\">\r\n                <ng-container\r\n                  [ngTemplateOutlet]=\"\r\n                    navigationHelper.isLinkInternal(link)\r\n                      ? footerRouteLinkTemplate\r\n                      : navigationHelper.isLinkExternal(link)\r\n                      ? footerHREFLinkTemplate\r\n                      : footerEVENTLinkTemplate\r\n                  \"\r\n                  [ngTemplateOutletContext]=\"{ $implicit: link }\"\r\n                ></ng-container>\r\n              </li>\r\n            </ul>\r\n          </sds-accordion-content>\r\n        </sds-accordion-item>\r\n      </sds-accordion-next>\r\n    </nav>\r\n  </div>\r\n  <div class=\"usa-footer__secondary-section\">\r\n    <div class=\"grid-container\">\r\n      <div class=\"grid-row grid-gap\">\r\n        <div class=\"grid-col-12 mobile-lg:grid-col-6 tablet:grid-col-4 margin-bottom-4\">\r\n          <div class=\"sds-footer__logo\">\r\n            <a class=\"sds-footer__logo-link\" [attr.href]=\"model.footerLogo.href\">\r\n              <img\r\n                *ngIf=\"model.footerLogo\"\r\n                class=\"usa-footer__logo-img\"\r\n                [attr.src]=\"model.footerLogo.imageSourcePath\"\r\n                [attr.alt]=\"model.footerLogo.imageAltText\"\r\n              />\r\n            </a>\r\n            <h3 class=\"sds-footer__logo-heading\">\r\n              {{model.footerLogo.agencyName}}\r\n            </h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"sds-footer__note grid-col-12 mobile-lg:grid-col-6 tablet:grid-col-8\" [innerHTML]=\"model.disclaimer\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n\r\n<ng-template #footerRouteLinkTemplate let-link>\r\n  <a class=\"usa-link\" [routerLink]=\"[link.route]\">{{ link.text }}</a>\r\n</ng-template>\r\n\r\n<ng-template #footerHREFLinkTemplate let-link>\r\n  <a class=\"usa-link\" [href]=\"link.route\">{{ link.text }}</a>\r\n</ng-template>\r\n\r\n<ng-template #footerEVENTLinkTemplate let-link>\r\n  <a href=\"javascript:void(0)\" (click)=\"linkClickEvent(link)\">{{\r\n    link.text\r\n  }}</a>\r\n</ng-template>\r\n"
        },
        {
            "name": "SdsHeaderComponent",
            "id": "component-SdsHeaderComponent-559d7c29088f450d2ba67734fe99f32b",
            "file": "libs/packages/layouts/src/lib/feature/header/header.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-header",
            "styleUrls": [
                "./header.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./header.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "alertsTemplate",
                    "line": 36,
                    "type": "TemplateRef<any>"
                },
                {
                    "name": "model",
                    "description": "<p>Model used for the different display portions of the header</p>\n",
                    "line": 30,
                    "type": "HeaderModel"
                },
                {
                    "name": "showHeaderLogo",
                    "defaultValue": "true",
                    "line": 34
                },
                {
                    "name": "showTopBanner",
                    "defaultValue": "true",
                    "description": "<p>determines if the top banner is shown</p>\n",
                    "line": 25
                },
                {
                    "name": "topBannerDescription",
                    "defaultValue": "''",
                    "line": 32
                }
            ],
            "outputsClass": [
                {
                    "name": "linkEvent",
                    "defaultValue": "new EventEmitter<INavigationLink>()",
                    "description": "<p>event for event based</p>\n",
                    "line": 42,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "closeNavBtn",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "",
                    "line": 15,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'usaNavClose'"
                        }
                    ]
                },
                {
                    "name": "mobileNavActive",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 16
                },
                {
                    "name": "navigationHelper",
                    "defaultValue": "new NavigationHelper()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Navigation helper</p>\n",
                    "line": 20
                },
                {
                    "name": "openNavBtn",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "",
                    "line": 14,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'usaNavOpen'"
                        }
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "closeMobileNav",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 178
                },
                {
                    "name": "deselect",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 83,
                    "description": "<p>Deselects all the items in the header model</p>\n"
                },
                {
                    "name": "find",
                    "args": [
                        {
                            "name": "id",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "Selectable",
                    "typeParameters": [],
                    "line": 110,
                    "description": "<p>Finds the navigation element by id in the header model</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2798,
                                "end": 2800,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 2792,
                                "end": 2797,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>of the navigation item</p>\n"
                        }
                    ]
                },
                {
                    "name": "findNavigationLinks",
                    "args": [
                        {
                            "name": "id",
                            "type": "string"
                        },
                        {
                            "name": "toReturn",
                            "type": "Selectable"
                        }
                    ],
                    "optional": false,
                    "returnType": "Selectable",
                    "typeParameters": [],
                    "line": 134,
                    "description": "<p>Searchs the items in the navigation links</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3427,
                                "end": 3429,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 3421,
                                "end": 3426,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": "toReturn",
                            "type": "Selectable",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "hasCounter",
                    "args": [],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 54,
                    "description": "<p>seeif any secondary link has a counter</p>\n"
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
                    "line": 156,
                    "description": "<p>Link clicked and emits the link data into an event</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4045,
                                "end": 4049,
                                "flags": 0,
                                "escapedText": "link"
                            },
                            "type": "INavigationLink",
                            "tagName": {
                                "pos": 4039,
                                "end": 4044,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "navAnimationEnd",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 189
                },
                {
                    "name": "openMobileNav",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 174
                },
                {
                    "name": "removeWhiteSpace",
                    "args": [
                        {
                            "name": "text",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 47,
                    "description": "<p>Takes in a text string and removes all white space characters and returns the new string</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1287,
                                "end": 1291,
                                "flags": 0,
                                "escapedText": "text"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 1281,
                                "end": 1286,
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
                    "line": 72,
                    "description": "<p>Deselects previous seletion</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1833,
                                "end": 1835,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 1827,
                                "end": 1832,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [
                {
                    "name": "window:resize",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "argsDecorator": [
                        "$event"
                    ],
                    "line": 165
                }
            ],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener, TemplateRef } from '@angular/core';\r\nimport { HeaderModel, HeaderNavigationLink, HeaderSecondaryLink } from './model/HeaderModel';\r\nimport { INavigationLink, Selectable } from '@gsa-sam/components';\r\nimport { NavigationHelper } from '@gsa-sam/components';\r\n\r\n\r\n@Component({\r\n  selector: 'sds-header',\r\n  templateUrl: './header.component.html',\r\n  styleUrls: ['./header.component.scss']\r\n})\r\nexport class SdsHeaderComponent {\r\n\r\n  @ViewChild('usaNavOpen') openNavBtn: ElementRef;\r\n  @ViewChild('usaNavClose') closeNavBtn: ElementRef;\r\n  mobileNavActive = false;\r\n  /**\r\n  * Navigation helper\r\n  */\r\n  navigationHelper = new NavigationHelper();\r\n\r\n  /**\r\n   * determines if the top banner is shown\r\n   */\r\n  @Input() showTopBanner = true;\r\n\r\n  /**\r\n   * Model used for the different display portions of the header\r\n   */\r\n  @Input() model: HeaderModel;\r\n\r\n  @Input() topBannerDescription = '';\r\n\r\n  @Input() showHeaderLogo = true;\r\n\r\n  @Input() alertsTemplate: TemplateRef<any>;\r\n\r\n  /**\r\n   * event for event based\r\n   */\r\n  @Output()\r\n  linkEvent = new EventEmitter<INavigationLink>();\r\n  /**\r\n   * Takes in a text string and removes all white space characters and returns the new string\r\n   * @param text\r\n   */\r\n  removeWhiteSpace(text: string) {\r\n    return text.replace(/ /g, '');\r\n  }\r\n  \r\n  /**\r\n   * seeif any secondary link has a counter\r\n   */\r\n  hasCounter(): boolean {\r\n    let hasCounter = false;\r\n    if (this.model) {\r\n      if (this.model.secondaryLinks) {\r\n        this.model.secondaryLinks.forEach(function (item: HeaderSecondaryLink) {\r\n          if (item.hasCounter) {\r\n            hasCounter = true;\r\n          }\r\n        });\r\n      }\r\n    }\r\n    return hasCounter;\r\n  }\r\n\r\n  /**\r\n   * Deselects previous seletion\r\n   * @param id\r\n   */\r\n  select(id: string) {\r\n    this.deselect();\r\n    const item = this.find(id);\r\n    if (item) {\r\n      item.selected = true;\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Deselects all the items in the header model\r\n   */\r\n  deselect() {\r\n    if (this.model) {\r\n      if (this.model.home) {\r\n        this.model.home.selected = false;\r\n      }\r\n      if (this.model.navigationLinks) {\r\n        this.model.navigationLinks.forEach(function (item: HeaderNavigationLink) {\r\n          item.selected = false;\r\n          if (item.children) {\r\n            item.children.forEach(function (child: HeaderNavigationLink) {\r\n              child.selected = false;\r\n            });\r\n          }\r\n        });\r\n      }\r\n      if (this.model.secondaryLinks) {\r\n        this.model.secondaryLinks.forEach(function (item: HeaderSecondaryLink) {\r\n          item.selected = false;\r\n        });\r\n      }\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Finds the navigation element by id in the header model\r\n   * @param id of the navigation item\r\n   */\r\n  find(id: string): Selectable {\r\n    let toReturn = null;\r\n    if (this.model) {\r\n      if (this.model.home) {\r\n        if (this.model.home.id === id) {\r\n          toReturn = this.model.home;\r\n        }\r\n      }\r\n      toReturn = this.findNavigationLinks(id, toReturn);\r\n      if (this.model.secondaryLinks) {\r\n        this.model.secondaryLinks.forEach(function (item: HeaderSecondaryLink) {\r\n          if (item.id === id) {\r\n            toReturn = item;\r\n          }\r\n        });\r\n      }\r\n    }\r\n    return toReturn;\r\n  }\r\n\r\n  /**\r\n   * Searchs the items in the navigation links\r\n   * @param id\r\n   */\r\n  private findNavigationLinks(id: string, toReturn: Selectable): Selectable {\r\n    if (this.model.navigationLinks) {\r\n      this.model.navigationLinks.forEach(function (item: HeaderNavigationLink) {\r\n        if (item.id === id) {\r\n          toReturn = item;\r\n        }\r\n        if (item.children) {\r\n          item.children.forEach(function (child: HeaderNavigationLink) {\r\n            if (child.id === id) {\r\n              toReturn = child;\r\n            }\r\n          });\r\n        }\r\n      });\r\n    }\r\n    return toReturn;\r\n  }\r\n\r\n  /**\r\n   * Link clicked and emits the link data into an event\r\n   * @param link\r\n   */\r\n  linkClickEvent(link: INavigationLink) {\r\n    this.linkEvent.emit(link);\r\n    return false;\r\n  }\r\n\r\n  // When the mobile nav is active, and the close box isn't visible,\r\n  // we know the user's viewport has been resized to be larger.\r\n  // Let's make the page state consistent by deactivating the mobile nav.\r\n  @HostListener('window:resize', ['$event'])\r\n  onBrowserResize(event) {\r\n    if (\r\n      this.mobileNavActive &&\r\n      this.closeNavBtn.nativeElement.getBoundingClientRect().width === 0\r\n    ) {\r\n      this.mobileNavActive = false;\r\n    }\r\n  }\r\n\r\n  openMobileNav() {\r\n    this.mobileNavActive = true;\r\n  }\r\n\r\n  closeMobileNav() {\r\n    this.mobileNavActive = false;\r\n    // The mobile nav was just deactivated, and focus was on the close\r\n    // button, which is no longer visible. We don't want the focus to\r\n    // disappear into the void, so focus on the menu button if it's\r\n    // visible (this may have been what the user was just focused on,\r\n    // if they triggered the mobile nav by mistake).\r\n    this.openNavBtn.nativeElement.focus();\r\n  }\r\n\r\n  // The mobile nav was just activated, so focus on the close button,\r\n  navAnimationEnd() {\r\n    this.closeNavBtn.nativeElement.focus();\r\n  }\r\n\r\n\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./header.component.scss"
                }
            ],
            "stylesData": "",
            "templateData": "<sds-top-banner *ngIf=\"showTopBanner\" [description]=\"topBannerDescription\"></sds-top-banner>\r\n\r\n<div *ngIf=\"alertsTemplate\">\r\n  <ng-container [ngTemplateOutlet]=\"alertsTemplate\"></ng-container>\r\n</div>\r\n\r\n<div class=\"usa-overlay\" [class.is-visible]=\"mobileNavActive\" (click)=\"closeMobileNav()\"></div>\r\n<header class=\"usa-header usa-header--extended\">\r\n  <div class=\"usa-navbar\">\r\n    <div *ngIf=\"showHeaderLogo; else fillerBlock\" class=\"usa-logo\" id=\"extended-logo\">\r\n      <ng-container [ngTemplateOutlet]=\"\r\n            navigationHelper.isLinkInternal(model.home)\r\n              ? homeLinkRouteTemplate\r\n              : homeLinkHREFTemplate\r\n          \" [ngTemplateOutletContext]=\"{ $implicit: model.home }\"></ng-container>\r\n    </div>\r\n    <button #usaNavOpen class=\"usa-menu-btn\" (click)=\"openMobileNav()\">\r\n      <fa-layers [fixedWidth]=\"true\" size=\"3x\">\r\n        <fa-icon [icon]=\"['fas', 'square']\" [classes]=\"['text-primary']\"></fa-icon>\r\n        <fa-icon [icon]=\"['sds', 'bars']\" [classes]=\"['icon-bars']\" transform=\"shrink-6\"></fa-icon>\r\n        <fa-layers-counter *ngIf=\"hasCounter()\" [classes]=\"['icon-layers-counter']\"></fa-layers-counter>\r\n      </fa-layers>\r\n      <span class=\"usa-sr-only\">Menu</span>\r\n    </button>\r\n  </div>\r\n  <nav aria-label=\"Primary navigation\" class=\"usa-nav\" (keydown.esc)=\"closeMobileNav()\"\r\n    (animationend)=\"navAnimationEnd()\" [class.is-visible]=\"mobileNavActive\" [cdkTrapFocus]=\"mobileNavActive\">\r\n    <div class=\"usa-nav__inner\">\r\n      <button #usaNavClose class=\"usa-nav__close\" (click)=\"closeMobileNav()\">\r\n        <fa-layers [fixedWidth]=\"true\" size=\"lg\">\r\n          <fa-icon [icon]=\"['fas', 'circle']\" [inverse]=\"true\" transform=\"grow-2\"></fa-icon>\r\n          <fa-icon [icon]=\"['fas', 'times']\" transform=\"shrink-6\"></fa-icon>\r\n        </fa-layers>\r\n        <span class=\"usa-sr-only\">Close</span>\r\n      </button>\r\n      <ul class=\"usa-nav__primary usa-accordion\">\r\n        <li *ngFor=\"let link of model.navigationLinks\" class=\"usa-nav__primary-item\">\r\n          <ng-container [ngTemplateOutlet]=\"link.route ? linkTemplate : dropDownTemplate\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: link }\"></ng-container>\r\n        </li>\r\n      </ul>\r\n      <div class=\"usa-nav__secondary\" [ngClass]=\"{'sds-nav__secondary--blank': !showHeaderLogo}\">\r\n        <ul class=\"usa-nav__secondary-links\">\r\n          <li *ngFor=\"let link of model.secondaryLinks\" class=\"usa-nav__secondary-item\">\r\n            <ng-container [ngTemplateOutlet]=\"\r\n                navigationHelper.isLinkInternal(link)\r\n                  ? secondaryRouteLinkTemplate\r\n                  : navigationHelper.isLinkExternal(link)\r\n                  ? secondaryHREFLinkTemplate\r\n                  : secondaryEVENTLinkTemplate\r\n              \" [ngTemplateOutletContext]=\"{ $implicit: link }\"></ng-container>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n<ng-template #homeLinkRouteTemplate let-home>\r\n  <a [routerLink]=\"home.route\" title=\"Home\" aria-label=\"Home\">\r\n    <img class=\"sds-header__logo\" [src]=\"home.logo\" [alt]=\"home.text\" />\r\n  </a>\r\n</ng-template>\r\n\r\n<ng-template #homeLinkHREFTemplate let-home>\r\n  <a [attr.href]=\"home.route\" title=\"Home\" aria-label=\"Home\">\r\n    <img class=\"sds-header__logo\" [src]=\"home.logo\" [alt]=\"home.text\" />\r\n  </a>\r\n</ng-template>\r\n\r\n<ng-template #secondaryRouteLinkTemplate let-link>\r\n  <a [attr.id]=\"link.id\" [routerLink]=\"[link.route]\" [attr.class]=\"link.selected ? 'usa-current' : ''\">\r\n    <ng-container [ngTemplateOutlet]=\"iconLinkTemplate\" [ngTemplateOutletContext]=\"{ $implicit: link }\">\r\n    </ng-container>\r\n  </a>\r\n</ng-template>\r\n\r\n<ng-template #secondaryHREFLinkTemplate let-link>\r\n  <a [attr.id]=\"link.id\" [attr.href]=\"[link.route]\" [attr.class]=\"link.selected ? 'usa-current' : ''\">\r\n    <ng-container [ngTemplateOutlet]=\"iconLinkTemplate\" [ngTemplateOutletContext]=\"{ $implicit: link }\">\r\n    </ng-container>\r\n  </a>\r\n</ng-template>\r\n\r\n<ng-template #secondaryEVENTLinkTemplate let-link>\r\n  <a [attr.id]=\"link.id\" (click)=\"linkClickEvent(link)\" href=\"javascript:void(0)\"\r\n    [attr.class]=\"link.selected ? 'usa-current' : ''\">\r\n    <ng-container [ngTemplateOutlet]=\"iconLinkTemplate\" [ngTemplateOutletContext]=\"{ $implicit: link }\">\r\n    </ng-container>\r\n  </a>\r\n</ng-template>\r\n\r\n<ng-template #iconLinkTemplate let-link>\r\n  <fa-layers [fixedWidth]=\"true\">\r\n    <fa-icon [icon]=\"[link.imageClassPrefix, link.imageClass]\"></fa-icon>\r\n    <fa-layers-counter *ngIf=\"link.hasCounter\" [classes]=\"['icon-layers-counter']\"></fa-layers-counter>\r\n  </fa-layers>\r\n  <span class=\"sds-nav__secondary-item-text\">{{ link.text }}</span>\r\n</ng-template>\r\n\r\n<ng-template #linkTemplate let-link>\r\n  <ng-container [ngTemplateOutlet]=\"\r\n      navigationHelper.isLinkInternal(link)\r\n        ? linkRouteTemplate\r\n        : navigationHelper.isLinkExternal(link)\r\n        ? linkHREFTemplate\r\n        : linkEventTemplate\r\n    \" [ngTemplateOutletContext]=\"{ $implicit: link }\"></ng-container>\r\n</ng-template>\r\n\r\n<ng-template #linkRouteTemplate let-link>\r\n  <a [attr.id]=\"link.id\" [attr.class]=\"link.selected ? 'usa-nav__link usa-current' : 'usa-nav__link'\"\r\n    [routerLink]=\"[link.route]\"><span>{{ link.text }}</span></a>\r\n</ng-template>\r\n\r\n<ng-template #linkHREFTemplate let-link>\r\n  <a [attr.id]=\"link.id\" [attr.class]=\"link.selected ? 'usa-nav__link usa-current' : 'usa-nav__link'\"\r\n    [attr.href]=\"[link.route]\"><span>{{ link.text }}</span></a>\r\n</ng-template>\r\n\r\n<ng-template #linkEventTemplate let-link>\r\n  <a [attr.id]=\"link.id\" [attr.class]=\"link.selected ? 'usa-nav__link usa-current' : 'usa-nav__link'\"\r\n    href=\"javascript:void(0)\" (click)=\"linkClickEvent(link)\"><span>{{ link.text }}</span></a>\r\n</ng-template>\r\n\r\n<ng-template #dropDownTemplate let-link>\r\n  <button [attr.id]=\"link.id\" [attr.class]=\"\r\n      link.selected\r\n        ? 'usa-accordion__button usa-nav__link usa-current'\r\n        : 'usa-accordion__button usa-nav__link'\r\n    \" aria-expanded=\"false\" [attr.aria-controls]=\"removeWhiteSpace(link.text) + '-section'\">\r\n    <span>{{ link.text }}</span>\r\n  </button>\r\n  <ul [attr.id]=\"removeWhiteSpace(link.text) + '-section'\" class=\"usa-nav__submenu\" hidden>\r\n    <li *ngFor=\"let childLink of link.children\" class=\"usa-nav__submenu-item\">\r\n      <ng-container [ngTemplateOutlet]=\"\r\n          navigationHelper.isLinkInternal(childLink)\r\n            ? dropDownRouteLinkTemplate\r\n            : navigationHelper.isLinkExternal(childLink)\r\n            ? dropDownHREFLinkTemplate\r\n            : dropDownEVENTLinkTemplate\r\n        \" [ngTemplateOutletContext]=\"{ $implicit: childLink }\"></ng-container>\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n\r\n<ng-template #dropDownRouteLinkTemplate let-childLink>\r\n  <a [routerLink]=\"[childLink.route]\">{{ childLink.text }}</a>\r\n</ng-template>\r\n\r\n<ng-template #dropDownHREFLinkTemplate let-childLink>\r\n  <a [attr.href]=\"[childLink.route]\">{{ childLink.text }}</a>\r\n</ng-template>\r\n\r\n<ng-template #dropDownEVENTLinkTemplate let-childLink>\r\n  <a href=\"javascript:void(0)\" (click)=\"linkClickEvent(childLink)\">{{\r\n    childLink.text\r\n  }}</a>\r\n</ng-template>\r\n\r\n<ng-template #fillerBlock>\r\n  <!--Empty filler space for secondary links for when header logo display is turned off-->\r\n  <div class=\"sds-navbar--blank \"></div>\r\n</ng-template>"
        },
        {
            "name": "SdsSubheaderActionsComponent",
            "id": "component-SdsSubheaderActionsComponent-6a5ad5bb109b156ea8d9ea2bd3373ec1",
            "file": "libs/packages/layouts/src/lib/feature/subheader/subheader.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-subheader-actions",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "subheader-actions.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "model",
                    "line": 25
                }
            ],
            "outputsClass": [
                {
                    "name": "clicks",
                    "defaultValue": "new EventEmitter<string>()",
                    "line": 26,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [],
            "methodsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\r\n  Component,\r\n  OnInit,\r\n  Output,\r\n  EventEmitter,\r\n  Input,\r\n  TemplateRef\r\n} from '@angular/core';\r\nimport { SdsDrawerCommunicationService } from './drawer-communication.service';\r\n\r\n@Component({\r\n  selector: 'sds-subheader',\r\n  templateUrl: 'subheader.component.html',\r\n  styleUrls: ['subheader.component.scss']\r\n})\r\nexport class SdsSubheaderComponent {\r\n  constructor() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-subheader-actions',\r\n  templateUrl: 'subheader-actions.component.html'\r\n})\r\nexport class SdsSubheaderActionsComponent {\r\n  @Input() model;\r\n  @Output() clicks = new EventEmitter<string>();\r\n  constructor() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-subheader-drawer',\r\n  templateUrl: 'subheader-drawer.component.html'\r\n})\r\nexport class SdsSubheaderDrawerComponent implements OnInit {\r\n  @Input() drawerContentTemplate: TemplateRef<any>;\r\n  @Output() isDrawerOpen = new EventEmitter<boolean>();\r\n  isOpen = false;\r\n\r\n  constructor(public data: SdsDrawerCommunicationService) {}\r\n  onDrawerOpenClose(ev) {\r\n    this.isOpen = !this.isOpen;\r\n    this.data.onDrawerOpen(this.isOpen, this.drawerContentTemplate);\r\n  }\r\n  ngOnInit() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-drawer-content',\r\n  templateUrl: 'drawer.content.component.html'\r\n})\r\nexport class SdsDrawerContentComponent implements OnInit {\r\n  drawerContentTemplate: TemplateRef<any>;\r\n  isDrawerOpen = false;\r\n\r\n  constructor(public data: SdsDrawerCommunicationService) {}\r\n  ngOnInit() {\r\n    this.data.contentTemplate.subscribe(\r\n      template => (this.drawerContentTemplate = template)\r\n    );\r\n    this.data.isDrawerOpen.subscribe(open => (this.isDrawerOpen = open));\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 26
            },
            "templateData": "<!-- Actions Menu Trigger: Desktop -->\r\n<span class=\"display-none desktop:display-inline-block\">\r\n  <button\r\n    class=\"sds-button sds-button--labeled-icon actions-button\"\r\n    [sdsMenuTriggerFor]=\"menu\"\r\n  >\r\n    Actions\r\n    <sds-icon [icon]=\"['bs', 'three-dots-vertical']\" [size]=\"'lg'\" class=\"ellipsis-icon\"></sds-icon>\r\n  </button>\r\n</span>\r\n\r\n<!-- Actions Menu Trigger: Tablet -->\r\n<span class=\"desktop:display-none \">\r\n  <span class=\"display-none tablet-lg:display-inline-block\">\r\n    <button\r\n      class=\"sds-button sds-button--circular actions-button\"\r\n      [sdsMenuTriggerFor]=\"menu\"\r\n    >\r\n      <sds-icon [icon]=\"['bs', 'three-dots-vertical']\" [size]=\"'lg'\" class=\"ellipsis-icon\"></sds-icon>\r\n      <span class=\"usa-sr-only\">Toggle Actions Menu</span>\r\n    </button>\r\n  </span>\r\n</span>\r\n\r\n<!-- Actions Menu Trigger: Mobile -->\r\n<span class=\"tablet-lg:display-none\">\r\n  <button\r\n  class=\"sds-button sds-button--circular actions-button margin-top-05 tablet:margin-top-0\"\r\n    [sdsMenuTriggerFor]=\"menu\"\r\n  >\r\n  <sds-icon [icon]=\"['bs', 'three-dots-vertical']\" [size]=\"'lg'\" class=\"ellipsis-icon\"></sds-icon>\r\n  </button>\r\n</span>\r\n\r\n<!-- Menu content -->\r\n<sds-menu #menu=\"sdsMenu\" xPosition=\"before\" overlapTrigger=\"true\">\r\n  <!-- Menu header (optional) -->\r\n  <sds-menu-header>Actions</sds-menu-header>\r\n  <!-- Menu items -->\r\n  <button\r\n    *ngFor=\"let button of model.actions\"\r\n    (click)=\"clicks.emit(button.id)\"\r\n    sds-menu-item\r\n  >\r\n    {{ button.text }}\r\n  </button>\r\n</sds-menu>\r\n"
        },
        {
            "name": "SdsSubheaderComponent",
            "id": "component-SdsSubheaderComponent-6a5ad5bb109b156ea8d9ea2bd3373ec1",
            "file": "libs/packages/layouts/src/lib/feature/subheader/subheader.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-subheader",
            "styleUrls": [
                "subheader.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "subheader.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\r\n  Component,\r\n  OnInit,\r\n  Output,\r\n  EventEmitter,\r\n  Input,\r\n  TemplateRef\r\n} from '@angular/core';\r\nimport { SdsDrawerCommunicationService } from './drawer-communication.service';\r\n\r\n@Component({\r\n  selector: 'sds-subheader',\r\n  templateUrl: 'subheader.component.html',\r\n  styleUrls: ['subheader.component.scss']\r\n})\r\nexport class SdsSubheaderComponent {\r\n  constructor() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-subheader-actions',\r\n  templateUrl: 'subheader-actions.component.html'\r\n})\r\nexport class SdsSubheaderActionsComponent {\r\n  @Input() model;\r\n  @Output() clicks = new EventEmitter<string>();\r\n  constructor() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-subheader-drawer',\r\n  templateUrl: 'subheader-drawer.component.html'\r\n})\r\nexport class SdsSubheaderDrawerComponent implements OnInit {\r\n  @Input() drawerContentTemplate: TemplateRef<any>;\r\n  @Output() isDrawerOpen = new EventEmitter<boolean>();\r\n  isOpen = false;\r\n\r\n  constructor(public data: SdsDrawerCommunicationService) {}\r\n  onDrawerOpenClose(ev) {\r\n    this.isOpen = !this.isOpen;\r\n    this.data.onDrawerOpen(this.isOpen, this.drawerContentTemplate);\r\n  }\r\n  ngOnInit() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-drawer-content',\r\n  templateUrl: 'drawer.content.component.html'\r\n})\r\nexport class SdsDrawerContentComponent implements OnInit {\r\n  drawerContentTemplate: TemplateRef<any>;\r\n  isDrawerOpen = false;\r\n\r\n  constructor(public data: SdsDrawerCommunicationService) {}\r\n  ngOnInit() {\r\n    this.data.contentTemplate.subscribe(\r\n      template => (this.drawerContentTemplate = template)\r\n    );\r\n    this.data.isDrawerOpen.subscribe(open => (this.isDrawerOpen = open));\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": ".sds-navbar{\r\n  ::ng-deep{\r\n    sds-button-group{\r\n      width: 100%;\r\n      margin: 0;\r\n      mat-button-toggle-group{\r\n        width: 100%;\r\n        mat-button-toggle{\r\n          flex: 1 1 0px;\r\n          .mat-button-toggle-label-content{\r\n            width: 100%;\r\n            .usa-button.usa-button--outline{\r\n              display: flex;\r\n              justify-content: center;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n",
                    "styleUrl": "subheader.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 16
            },
            "templateData": "<div class=\"sds-navbar border-bottom border-base-lighter\">\r\n  <div class=\"sds-subheader__content\">\r\n    <div class=\"order-first grid-col-auto\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n    <div class=\"margin-x-105 margin-top-05 tablet:margin-top-0 tablet:order-0 grid-col-fill display-flex flex-justify-end tablet-lg:flex-justify-start tablet-lg:padding-left-6\">\r\n      <ng-content select=\"sds-search\"></ng-content>\r\n    </div>\r\n    <div class=\"order-last grid-col-12 tablet:order-1 tablet:grid-col-auto display-flex button-container\">\r\n      <ng-content select=\"[subheader-buttons-container]\"></ng-content>\r\n      <ng-content select=\"[subheader-buttongroup-container]\"></ng-content>\r\n    </div>\r\n    <div class=\"order-2 tablet:margin-left-2 grid-col-auto actions-div\">\r\n      <ng-content select=\"sds-subheader-actions\"></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
        },
        {
            "name": "SdsSubheaderDrawerComponent",
            "id": "component-SdsSubheaderDrawerComponent-6a5ad5bb109b156ea8d9ea2bd3373ec1",
            "file": "libs/packages/layouts/src/lib/feature/subheader/subheader.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-subheader-drawer",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "subheader-drawer.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "drawerContentTemplate",
                    "line": 35,
                    "type": "TemplateRef<any>"
                }
            ],
            "outputsClass": [
                {
                    "name": "isDrawerOpen",
                    "defaultValue": "new EventEmitter<boolean>()",
                    "line": 36,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "data",
                    "type": "SdsDrawerCommunicationService",
                    "optional": false,
                    "description": "",
                    "line": 39,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "isOpen",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 37
                }
            ],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 44
                },
                {
                    "name": "onDrawerOpenClose",
                    "args": [
                        {
                            "name": "ev",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 40,
                    "jsdoctags": [
                        {
                            "name": "ev",
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
            "sourceCode": "import {\r\n  Component,\r\n  OnInit,\r\n  Output,\r\n  EventEmitter,\r\n  Input,\r\n  TemplateRef\r\n} from '@angular/core';\r\nimport { SdsDrawerCommunicationService } from './drawer-communication.service';\r\n\r\n@Component({\r\n  selector: 'sds-subheader',\r\n  templateUrl: 'subheader.component.html',\r\n  styleUrls: ['subheader.component.scss']\r\n})\r\nexport class SdsSubheaderComponent {\r\n  constructor() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-subheader-actions',\r\n  templateUrl: 'subheader-actions.component.html'\r\n})\r\nexport class SdsSubheaderActionsComponent {\r\n  @Input() model;\r\n  @Output() clicks = new EventEmitter<string>();\r\n  constructor() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-subheader-drawer',\r\n  templateUrl: 'subheader-drawer.component.html'\r\n})\r\nexport class SdsSubheaderDrawerComponent implements OnInit {\r\n  @Input() drawerContentTemplate: TemplateRef<any>;\r\n  @Output() isDrawerOpen = new EventEmitter<boolean>();\r\n  isOpen = false;\r\n\r\n  constructor(public data: SdsDrawerCommunicationService) {}\r\n  onDrawerOpenClose(ev) {\r\n    this.isOpen = !this.isOpen;\r\n    this.data.onDrawerOpen(this.isOpen, this.drawerContentTemplate);\r\n  }\r\n  ngOnInit() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-drawer-content',\r\n  templateUrl: 'drawer.content.component.html'\r\n})\r\nexport class SdsDrawerContentComponent implements OnInit {\r\n  drawerContentTemplate: TemplateRef<any>;\r\n  isDrawerOpen = false;\r\n\r\n  constructor(public data: SdsDrawerCommunicationService) {}\r\n  ngOnInit() {\r\n    this.data.contentTemplate.subscribe(\r\n      template => (this.drawerContentTemplate = template)\r\n    );\r\n    this.data.isDrawerOpen.subscribe(open => (this.isDrawerOpen = open));\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "data",
                        "type": "SdsDrawerCommunicationService"
                    }
                ],
                "line": 37,
                "jsdoctags": [
                    {
                        "name": "data",
                        "type": "SdsDrawerCommunicationService",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnInit"
            ],
            "templateData": "<button\r\n  (click)=\"onDrawerOpenClose($event)\"\r\n  class=\"sds-button sds-button--circular margin-top-2px tablet:margin-top-0\"\r\n>\r\n  <fa-icon\r\n    [fixedWidth]=\"true\"\r\n    [icon]=\"isOpen ? ['fas', 'arrow-up'] : ['fas', 'arrow-down']\"\r\n  ></fa-icon>\r\n</button>\r\n"
        },
        {
            "name": "SdsSystemAlertComponent",
            "id": "component-SdsSystemAlertComponent-792e341f4172fa450d55aea66bcddb0a",
            "file": "libs/packages/layouts/src/lib/feature/system-alert/system-alert.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-system-alert",
            "styleUrls": [
                "./system-alert.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./system-alert.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "alerts",
                    "description": "<p>List of alerts to display. When the list contains only one item, the description of the alert will also\nbe displayed. Description text may contain html</p>\n",
                    "line": 14,
                    "type": "Alert[]"
                }
            ],
            "outputsClass": [
                {
                    "name": "detailsClicked",
                    "defaultValue": "new EventEmitter<Alert>()",
                    "line": 18,
                    "type": "EventEmitter"
                },
                {
                    "name": "seeAllAlerts",
                    "defaultValue": "new EventEmitter()",
                    "line": 16,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [],
            "methodsClass": [
                {
                    "name": "onAlertClose",
                    "args": [
                        {
                            "name": "index",
                            "type": "number"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 26,
                    "description": "<p>Removes the alert from input alerts array</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 715,
                                "end": 720,
                                "flags": 0,
                                "escapedText": "index"
                            },
                            "type": "number",
                            "tagName": {
                                "pos": 709,
                                "end": 714,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<ul>\n<li>index of the alert in array to remove</li>\n</ul>\n"
                        }
                    ]
                },
                {
                    "name": "onSeeAllAlertsClicked",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 33,
                    "description": "<p>Fired when &#39;See All Alerts&#39; button is clicked. Emits the seeAllAlerts event</p>\n"
                },
                {
                    "name": "onShowDetailsClicked",
                    "args": [
                        {
                            "name": "alert",
                            "type": "Alert"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 43,
                    "description": "<p>Fired when &#39;Show Details&#39; for an alert is clicked. Emits the detailsClicked event\nwith the alert whose &#39;Show Details&#39; link was clicked and toggles description view for\nthe alert</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1222,
                                "end": 1227,
                                "flags": 0,
                                "escapedText": "alert"
                            },
                            "type": "Alert",
                            "tagName": {
                                "pos": 1216,
                                "end": 1221,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "onToggleAlertsClicked",
                    "args": [
                        {
                            "name": "alertsContent",
                            "type": "HTMLElement"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 49,
                    "description": "<p>On mobile view - hide/display list of alerts based on toggle button </p>\n",
                    "jsdoctags": [
                        {
                            "name": "alertsContent",
                            "type": "HTMLElement",
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
            "sourceCode": "import { Component, EventEmitter, Input, Output } from '@angular/core';\r\nimport { Alert } from './model/alert.model';\r\n\r\n@Component({\r\n  selector: 'sds-system-alert',\r\n  templateUrl: './system-alert.component.html',\r\n  styleUrls: ['./system-alert.component.scss']\r\n})\r\nexport class SdsSystemAlertComponent {\r\n\r\n  /** List of alerts to display. When the list contains only one item, the description of the alert will also\r\n   * be displayed. Description text may contain html\r\n   */\r\n  @Input() alerts: Alert[];\r\n  \r\n  @Output() seeAllAlerts = new EventEmitter();\r\n\r\n  @Output() detailsClicked = new EventEmitter<Alert>();\r\n\r\n  constructor() { }\r\n\r\n  /**\r\n   * Removes the alert from input alerts array\r\n   * @param index - index of the alert in array to remove\r\n   */\r\n  onAlertClose(index: number) {\r\n    this.alerts.splice(index, 1);\r\n  }\r\n\r\n  /**\r\n   * Fired when 'See All Alerts' button is clicked. Emits the seeAllAlerts event\r\n   */\r\n  onSeeAllAlertsClicked() {\r\n    this.seeAllAlerts.emit();\r\n  }\r\n\r\n  /**\r\n   * Fired when 'Show Details' for an alert is clicked. Emits the detailsClicked event\r\n   * with the alert whose 'Show Details' link was clicked and toggles description view for\r\n   * the alert\r\n   * @param alert \r\n   */\r\n  onShowDetailsClicked(alert: Alert) {\r\n    alert.displayDescription = !alert.displayDescription;\r\n    this.detailsClicked.emit(alert);\r\n  }\r\n\r\n  /** On mobile view - hide/display list of alerts based on toggle button */\r\n  onToggleAlertsClicked(alertsContent: HTMLElement) {\r\n    const isHidden = alertsContent.classList.contains('display-none');\r\n    if (isHidden) {\r\n      alertsContent.classList.remove('display-none');\r\n    } else {\r\n      alertsContent.classList.add('display-none');\r\n    }\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./system-alert.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 18
            },
            "templateData": "<div class=\"sds-alert--header usa-grid\" id=\"sds-alert--header\">\r\n\r\n  <div class=\"sds-mobile-alert grid-row\" id=\"sds-mobile-alert\">\r\n    <div class=\"grid-col-auto padding-top-1\">\r\n      <sds-icon [icon]=\"['sds', 'alert-warning']\" [class]=\"'sds-alert--header__icon-mobile'\" [size]=\"'3x'\"></sds-icon>\r\n    </div>\r\n\r\n    <div class=\"grid-col-fill\">\r\n      <div class=\"grid-row tablet:display-none\">\r\n        <div class=\"grid-col-fill\">\r\n          <div class=\"sds-alert--header__label\">\r\n            You have {{alerts.length}} new alerts\r\n          </div>\r\n          <div>\r\n            <a href=\"javascript:void(0)\" (click)=\"onToggleAlertsClicked(alertsContent)\"\r\n              class=\"sds-alert--header__link simple-toggle\" aria-controls=\"collapseTarget\">\r\n              Show / Hide Alerts\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"grid-col-auto\">\r\n          <button (click)=\"onToggleAlertsClicked(alertsContent)\"\r\n            class=\"sds-button--circle usa-button--secondary simple-toggle\" aria-controls=\"collapseTarget\">\r\n            <sds-icon [icon]=\"['bs', 'caret-down-fill']\" [size]=\"'1x'\"></sds-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div #alertsContent class=\"grid-row width-full display-none tablet:display-inline-block\" id=\"collapseTarget\">\r\n        <div class=\"grid-col-fill\">\r\n          <div class=\"grid-row\">\r\n            <ng-container \r\n              [ngTemplateOutlet]=\"alerts && alerts.length == 1 ? singleAlert : multipleAlerts\"\r\n              [ngTemplateOutletContext]=\"{$implicit: alerts}\"\r\n            >\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n        <div class=\"tablet:grid-offset-1 tablet:grid-col-auto tablet:display-none\">\r\n          <div>\r\n            <button class=\"usa-button usa-button--secondary\" id=\"seeAllAlertsMobileBtn\"\r\n              (click)=\"onSeeAllAlertsClicked()\">See All Alerts</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"grid-offset-1 grid-col-auto display-none tablet:display-inline-block\">\r\n      <button class=\"usa-button usa-button--secondary margin-y-1\" id=\"seeAllAlertsTabletBtn\"\r\n        (click)=\"onSeeAllAlertsClicked()\">See All\r\n        Alerts</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #multipleAlerts let-alerts>\r\n  <div *ngFor=\"let alert of alerts; let i = index;\" class=\"grid-col-12\" [attr.id]=\"'alert' + i\">\r\n    <div class=\"sds-alert--header__content grid-row\" id=\"sds-alert--header__content\">\r\n      <div class=\"grid-col-fill\">\r\n        <div class=\"sds-alert--header__label margin-right-1\" [innerHTML]=\"alert.header\"></div>\r\n        <a (click)=\"onShowDetailsClicked(alert)\"\r\n          role=\"button\"\r\n          href=\"javascript:void(0)\" class=\"sds-alert--header__link\"\r\n          [attr.aria-expanded]=\"alert.displayDescription\"\r\n          [attr.aria-controls]=\"'alertDescription' + i\"\r\n          >\r\n          {{alert.displayDescription ? 'Hide Details' : 'Show Details'}}\r\n        </a>\r\n        <span class=\"sds-alert--header__date\">\r\n          {{alert.date | date: 'mediumDate'}}\r\n        </span>\r\n        <span\r\n          aria-live=\"polite\" \r\n          [attr.id]=\"'alertDescription' + i\" \r\n          [sdsCollapse]=\"!alert.displayDescription\" \r\n          [innerHTML]=\"alert.description\">\r\n        </span>\r\n      </div>\r\n      <div class=\"grid-offset-1 grid-col-auto\">\r\n        <button (click)=\"onAlertClose(i)\" [attr.id]=\"'alert'+ i + 'CloseBtn'\"\r\n          class=\"usa-button sds-button--circle usa-button--secondary sds-alert--header__close simple-toggle\"\r\n          aria-label=\"Close Alert\" [attr.aria-controls]=\"'alert' + i\">\r\n          <sds-icon [icon]=\"['sds', 'exit']\"></sds-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #singleAlert let-alerts>\r\n  <div class=\"grid-col-12\" id=\"alert0\">\r\n    <div class=\"sds-alert--header__content grid-row\" id=\"sds-alert--header__content\">\r\n      <div class=\"grid-col-fill\">\r\n        <div class=\"sds-alert--header__label margin-right-1\" [innerHTML]=\"alerts[0].header\"></div>\r\n        <span class=\"sds-alert--header__date\">\r\n          {{alerts[0].date | date: 'mediumDate'}}\r\n        </span>\r\n        <span [innerHTML]=\"alerts[0].description\"></span>\r\n      </div>\r\n      <div class=\"grid-offset-1 grid-col-auto\">\r\n        <button (click)=\"onAlertClose(0)\" id=\"alert0CloseBtn\"\r\n          class=\"usa-button sds-button--circle usa-button--secondary sds-alert--header__close simple-toggle\"\r\n          aria-label=\"Close Alert\" aria-controls=\"alert0\">\r\n          <sds-icon [icon]=\"['sds', 'exit']\"></sds-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>"
        },
        {
            "name": "SearchListLayoutComponent",
            "id": "component-SearchListLayoutComponent-e606a6a6dbc0469cd12831dfb59bff7b",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/search-list-layout.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "search-list-layout",
            "styleUrls": [
                "./search-list-layout.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./search-list-layout.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "configuration",
                    "description": "<p>configuration</p>\n",
                    "line": 35,
                    "type": "SearchListConfiguration"
                },
                {
                    "name": "customResultsTemplate",
                    "description": "<p>Allow to insert a customized template for no results to use</p>\n",
                    "line": 29,
                    "type": "TemplateRef<any>"
                },
                {
                    "name": "service",
                    "description": "<p>Input service to be called when items change</p>\n",
                    "line": 24,
                    "type": "SearchListInterface"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "bottom",
                    "defaultValue": "{ id: 'bottomPagination' }",
                    "type": "object",
                    "optional": false,
                    "description": "<p>Id of the bottom pagination control</p>\n",
                    "line": 107
                },
                {
                    "name": "filterData",
                    "type": "any",
                    "optional": false,
                    "description": "<p>Filter information</p>\n",
                    "line": 47,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "items",
                    "defaultValue": "[]",
                    "type": "[]",
                    "optional": false,
                    "description": "<p>List of items to be displayed</p>\n",
                    "line": 117
                },
                {
                    "name": "page",
                    "defaultValue": "{\r\n    pageNumber: 1,\r\n    pageSize: 25,\r\n    totalPages: 0\r\n  }",
                    "type": "object",
                    "optional": false,
                    "description": "<p>Default Page setttings</p>\n",
                    "line": 75
                },
                {
                    "name": "paginationChange",
                    "defaultValue": "new BehaviorSubject<object>(this.page)",
                    "type": "",
                    "optional": false,
                    "description": "<p>Page event listener</p>\n",
                    "line": 112,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "resultContentTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Child Template to be used to display the data for each item in the list of items</p>\n",
                    "line": 16,
                    "decorators": [
                        {
                            "name": "ContentChild",
                            "stringifiedArguments": "'resultContent'"
                        }
                    ]
                },
                {
                    "name": "sortField",
                    "defaultValue": "''",
                    "type": "string",
                    "optional": false,
                    "description": "<p>sort value</p>\n",
                    "line": 122,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "top",
                    "defaultValue": "{ id: 'topPagination' }",
                    "type": "object",
                    "optional": false,
                    "description": "<p>Id of the top pagination control</p>\n",
                    "line": 102
                },
                {
                    "name": "totalItems",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Total number of items</p>\n",
                    "line": 52
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
                    "line": 37,
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
                    "line": 54
                },
                {
                    "name": "onSelectChange",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 94,
                    "description": "<p>Sorty by change event</p>\n"
                },
                {
                    "name": "updateContent",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 127,
                    "description": "<p>calls service when updated</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "updateFilter",
                    "args": [
                        {
                            "name": "filter",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 85,
                    "description": "<p>updates the filter and set the page number to 1 and calls imported service</p>\n",
                    "modifierKind": [
                        114
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2252,
                                "end": 2258,
                                "flags": 0,
                                "escapedText": "filter"
                            },
                            "type": "any",
                            "tagName": {
                                "pos": 2246,
                                "end": 2251,
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
            "sourceCode": "import { Component, Input, ContentChild, TemplateRef, Optional, OnChanges, SimpleChanges, OnInit } from '@angular/core';\r\nimport { BehaviorSubject } from \"rxjs\";\r\nimport { SearchListInterface, SearchListConfiguration } from './model/search-list-layout.model';\r\nimport { SDSFormlyUpdateComunicationService } from '@gsa-sam/sam-formly';\r\n\r\n@Component({\r\n  selector: 'search-list-layout',\r\n  templateUrl: './search-list-layout.component.html',\r\n  styleUrls: ['./search-list-layout.component.scss']\r\n})\r\nexport class SearchListLayoutComponent implements OnChanges, OnInit {\r\n\r\n  /**\r\n  * Child Template to be used to display the data for each item in the list of items\r\n  */\r\n  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;\r\n\r\n  constructor(@Optional() private formlyUpdateComunicationService: SDSFormlyUpdateComunicationService) { }\r\n\r\n  /**\r\n   * Input service to be called when items change\r\n   */\r\n  @Input()\r\n  service: SearchListInterface;\r\n\r\n /**\r\n   * Allow to insert a customized template for no results to use\r\n   */\r\n  @Input() customResultsTemplate: TemplateRef<any>;\r\n\r\n  /**\r\n   * configuration\r\n   */\r\n  @Input()\r\n  configuration: SearchListConfiguration;\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    if (changes.configuration.currentValue) {\r\n      this.configuration = changes.configuration.currentValue;\r\n      this.sortField = this.configuration.defaultSortValue;\r\n      this.onSelectChange();\r\n    }\r\n  }\r\n  /**\r\n   * Filter information\r\n   */\r\n  private filterData: any;\r\n\r\n  /**\r\n   * Total number of items\r\n   */\r\n  totalItems: number;\r\n\r\n  ngOnInit() {\r\n    this.page.pageSize = this.configuration.pageSize;\r\n    this.sortField = this.configuration.defaultSortValue;\r\n    this.paginationChange.subscribe(\r\n      () => {\r\n        this.updateContent();\r\n      }\r\n    );\r\n    if (this.formlyUpdateComunicationService) {\r\n      this.formlyUpdateComunicationService.filterUpdate.subscribe(\r\n        (filter) => {\r\n          this.updateFilter(filter);\r\n        }\r\n      )\r\n    }\r\n  }\r\n\r\n\r\n  /**\r\n   * Default Page setttings\r\n   */\r\n  page = {\r\n    pageNumber: 1,\r\n    pageSize: 25,\r\n    totalPages: 0\r\n  }\r\n\r\n  /**\r\n   * updates the filter and set the page number to 1 and calls imported service\r\n   * @param filter\r\n   */\r\n  public updateFilter(filter: any) {\r\n    this.filterData = filter;\r\n    this.page.pageNumber = 1;\r\n    this.updateContent();\r\n  }\r\n\r\n  /**\r\n   * Sorty by change event\r\n   */\r\n  onSelectChange() {\r\n    this.page.pageNumber = 1;\r\n    this.updateContent();\r\n  }\r\n\r\n  /**\r\n   * Id of the top pagination control\r\n   */\r\n  top = { id: 'topPagination' };\r\n\r\n  /**\r\n   * Id of the bottom pagination control\r\n   */\r\n  bottom = { id: 'bottomPagination' };\r\n\r\n  /**\r\n   * Page event listener\r\n   */\r\n  public paginationChange = new BehaviorSubject<object>(this.page);\r\n\r\n  /**\r\n   * List of items to be displayed\r\n   */\r\n  items = [];\r\n\r\n  /**\r\n   * sort value\r\n   */\r\n  public sortField = '';\r\n\r\n  /**\r\n   * calls service when updated\r\n   */\r\n  private updateContent() {\r\n    if (this.filterData) {\r\n      setTimeout(() => {\r\n        this.service.getData({ 'page': this.page, sortField: this.sortField, filter: this.filterData }).subscribe(\r\n          (result) => {\r\n            this.items = result.items;\r\n            this.page.totalPages = Math.ceil(result.totalItems / this.page.pageSize);\r\n            this.totalItems = result.totalItems;\r\n          }\r\n        );\r\n      });\r\n    }\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./search-list-layout.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "formlyUpdateComunicationService",
                        "type": "SDSFormlyUpdateComunicationService"
                    }
                ],
                "line": 16,
                "jsdoctags": [
                    {
                        "name": "formlyUpdateComunicationService",
                        "type": "SDSFormlyUpdateComunicationService",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnChanges",
                "OnInit"
            ],
            "templateData": "<div class=\"grid-row\" *ngIf=\"items?.length\">\r\n  <div class=\"grid-col\">\r\n    <div class=\"grid-row\">\r\n      <div class=\"grid-col-auto\">\r\n        <sds-pagination class=\"tablet:grid-col display-block margin-top-3 padding-top-3\" [paginationConfiguration]=\"top\"\r\n          [(page)]=\"page\" (pageChange)=\"paginationChange.next($event)\" displayMode='results' [totalItems]=\"totalItems\">\r\n        </sds-pagination>\r\n      </div>\r\n      <div class=\"grid-col-fill\"></div>\r\n      <div class=\"grid-col-auto float-right\">\r\n        <div class=\"margin-left-1\">\r\n          <label class=\"usa-label font-sans-3xs text-italic text-base margin-top-1\" for=\"options\">\r\n            Sort by\r\n          </label>\r\n          <select (change)=\"onSelectChange()\" [(ngModel)]=\"sortField\"\r\n            class=\"usa-select usa-select--small sds-min-width-160 border-base-light\" id=\"options\">\r\n            <option *ngFor=\"let item of configuration.sortList\" [ngValue]=\"item.value\">\r\n              {{ item.text }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"grid-row\">\r\n  <div class=\"grid-col-12\">\r\n    <sds-search-result-list [model]=\"items\" [customResultsTemplate]=\"customResultsTemplate\">\r\n      <ng-template #resultContent let-item>\r\n        <ng-container *ngTemplateOutlet=\"resultContentTemplate,\r\n                context: { $implicit: item }\"></ng-container>\r\n      </ng-template>\r\n    </sds-search-result-list>\r\n    <sds-pagination *ngIf=\"items?.length\" [paginationConfiguration]=\"bottom\" [(page)]=\"page\"\r\n      (pageChange)=\"paginationChange.next($event)\"></sds-pagination>\r\n  </div>\r\n</div>\r\n"
        },
        {
            "name": "SideToolbarComponent",
            "id": "component-SideToolbarComponent-19e46d7d01060562914aa6e0551e86ff",
            "file": "libs/packages/layouts/src/lib/feature/side-toolbar/side-toolbar.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-side-toolbar",
            "styleUrls": [
                "./side-toolbar.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./side-toolbar.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "responsiveButtonText",
                    "line": 16,
                    "type": "string"
                },
                {
                    "name": "responsiveSize",
                    "defaultValue": "480",
                    "line": 19
                }
            ],
            "outputsClass": [
                {
                    "name": "responsiveDialog",
                    "defaultValue": "new EventEmitter()",
                    "line": 21,
                    "type": "EventEmitter"
                },
                {
                    "name": "responsiveView",
                    "defaultValue": "new EventEmitter()",
                    "line": 22,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "isResponsiveView",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 25
                },
                {
                    "name": "openResponsiveDialog",
                    "type": "SdsDialogRef<TemplateRef<any>>",
                    "optional": false,
                    "description": "",
                    "line": 28,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "subscription",
                    "defaultValue": "new Subscription()",
                    "type": "Subscription",
                    "optional": false,
                    "description": "",
                    "line": 27,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "template",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 13,
                    "decorators": [
                        {
                            "name": "ContentChild",
                            "stringifiedArguments": "TemplateRef"
                        }
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 39
                },
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 35
                },
                {
                    "name": "observeViewChange",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 57,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "onResponsiveViewButtonClicked",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 43
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, ContentChild, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef } from '@angular/core';\r\nimport { SdsDialogRef, SdsDialogService } from '@gsa-sam/components';\r\nimport { BreakpointObserver } from '@angular/cdk/layout';\r\nimport { Subscription } from 'rxjs';\r\n\r\n@Component({\r\n  selector: 'sds-side-toolbar',\r\n  templateUrl: './side-toolbar.component.html',\r\n  styleUrls: ['./side-toolbar.component.scss'],\r\n})\r\nexport class SideToolbarComponent implements OnInit, OnDestroy {\r\n  \r\n  @ContentChild(TemplateRef) template: TemplateRef<any>;\r\n\r\n  // Text for button in responsive view\r\n  @Input() responsiveButtonText: string;\r\n\r\n  // default value is size of mobile view in px\r\n  @Input() responsiveSize = 480;\r\n\r\n  @Output() responsiveDialog = new EventEmitter();\r\n  @Output() responsiveView = new EventEmitter();\r\n\r\n\r\n  isResponsiveView = false;\r\n\r\n  private subscription: Subscription = new Subscription();\r\n  private openResponsiveDialog: SdsDialogRef<TemplateRef<any>>;\r\n\r\n  constructor(\r\n    private sdsDialogService: SdsDialogService,\r\n    private breakpointObserver: BreakpointObserver, // Will watch for changes between mobile and non-mobile screen size\r\n  ) { }\r\n\r\n  ngOnInit() {\r\n    this.observeViewChange();\r\n  }\r\n\r\n  ngOnDestroy() {\r\n    this.subscription.unsubscribe();\r\n  }\r\n\r\n  onResponsiveViewButtonClicked() {\r\n    this.openResponsiveDialog = this.sdsDialogService.open(this.template, {\r\n      height: '100vh',\r\n      width: '100vw',\r\n      maxWidth: '100vw',\r\n      maxHeight: '100vh',\r\n      hasBackdrop: false,\r\n      displayCloseBtn: false,\r\n      panelClass: ['sds-dialog--full'],\r\n    });\r\n\r\n    this.responsiveDialog.emit(this.openResponsiveDialog);\r\n  }\r\n\r\n  private observeViewChange() {\r\n    const breakpointUnsubscription = this.breakpointObserver.observe([\r\n      `(max-width: ${this.responsiveSize}px)`\r\n    ]).subscribe(result => {\r\n      console.log(this.openResponsiveDialog);\r\n      if (result.matches) {\r\n        this.isResponsiveView = true;\r\n      } else {\r\n        this.isResponsiveView = false;\r\n        if (this.openResponsiveDialog) {\r\n          this.openResponsiveDialog.close();\r\n          this.openResponsiveDialog = undefined;\r\n          this.responsiveDialog.emit(this.openResponsiveDialog);\r\n        }\r\n      }\r\n\r\n      this.responsiveView.emit(this.isResponsiveView);\r\n    });\r\n\r\n    this.subscription.add(breakpointUnsubscription);\r\n  }\r\n\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./side-toolbar.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "sdsDialogService",
                        "type": "SdsDialogService"
                    },
                    {
                        "name": "breakpointObserver",
                        "type": "BreakpointObserver"
                    }
                ],
                "line": 28,
                "jsdoctags": [
                    {
                        "name": "sdsDialogService",
                        "type": "SdsDialogService",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "breakpointObserver",
                        "type": "BreakpointObserver",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnInit",
                "OnDestroy"
            ],
            "templateData": "<div *ngIf=\"!isResponsiveView\">\r\n  <ng-container *ngTemplateOutlet=\"template\"></ng-container>\r\n</div>\r\n\r\n<div *ngIf=\"isResponsiveView\">\r\n  <button class=\"usa-button usa-button--accent-cool usa-button--hover text-secondary-dar\" id=\"responsiveViewButton\"\r\n    (click)=\"onResponsiveViewButtonClicked()\" [attr.aria-label]=\"responsiveButtonText\">\r\n    {{responsiveButtonText}}\r\n  </button>\r\n</div>"
        }
    ],
    "modules": [
        {
            "name": "PackagesLayoutsModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": []
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": []
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
            "name": "SdsActionsMenuModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsActionsMenuComponent"
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
                            "name": "SdsActionsMenuComponent"
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
            "name": "SdsFooterModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsFooterComponent"
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
                            "name": "SdsFooterComponent"
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
            "name": "SdsHeaderModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsHeaderComponent"
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
                            "name": "SdsHeaderComponent"
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
            "name": "SdsSubheaderModule",
            "children": [
                {
                    "type": "providers",
                    "elements": [
                        {
                            "name": "SdsDrawerCommunicationService"
                        }
                    ]
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsDrawerContentComponent"
                        },
                        {
                            "name": "SdsSubheaderActionsComponent"
                        },
                        {
                            "name": "SdsSubheaderComponent"
                        },
                        {
                            "name": "SdsSubheaderDrawerComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": [
                        {
                            "name": "SdsActionsMenuModule"
                        }
                    ]
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsDrawerContentComponent"
                        },
                        {
                            "name": "SdsSubheaderActionsComponent"
                        },
                        {
                            "name": "SdsSubheaderComponent"
                        },
                        {
                            "name": "SdsSubheaderDrawerComponent"
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
            "name": "SdsSystemAlertModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsSystemAlertComponent"
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
                            "name": "SdsSystemAlertComponent"
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
            "name": "SearchListServiceModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SearchListLayoutComponent"
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
                            "name": "SearchListLayoutComponent"
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
            "name": "SideToolbarModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SideToolbarComponent"
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
                            "name": "SideToolbarComponent"
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
                "file": "libs/packages/layouts/src/test.ts",
                "type": "",
                "defaultValue": "require.context('./', true, /\\.spec\\.ts$/)"
            },
            {
                "name": "require",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/layouts/src/test.ts",
                "type": "any"
            }
        ],
        "functions": [],
        "typealiases": [],
        "enumerations": [],
        "groupedVariables": {
            "libs/packages/layouts/src/test.ts": [
                {
                    "name": "context",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/layouts/src/test.ts",
                    "type": "",
                    "defaultValue": "require.context('./', true, /\\.spec\\.ts$/)"
                },
                {
                    "name": "require",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/layouts/src/test.ts",
                    "type": "any"
                }
            ]
        },
        "groupedFunctions": {},
        "groupedEnumerations": {},
        "groupedTypeAliases": {}
    }
};

export default LAYOUTS;
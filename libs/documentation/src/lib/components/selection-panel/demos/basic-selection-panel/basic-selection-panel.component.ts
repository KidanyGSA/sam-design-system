import { Component } from '@angular/core';
import { NavigationLink, SideNavigationModel } from '@gsa-sam/components';
import { selectionPanelConfig } from './navigation.config'

@Component({
  selector: `basic-selection-panel-demo`,
  templateUrl: './basic-selection-panel.component.html',
})
export class BasicSelectionPanelComponent {

  title = 'Basic Selection Panel'
  selectionPanelModel: SideNavigationModel = selectionPanelConfig;

  constructor() { }

  onPanelSelection(panel: NavigationLink) {
    console.log(panel);
  }

}

import { Pipe } from "@angular/core";


@Pipe({
  name: 'tableMenuMaker',
  pure: true
})
export class TableMenuMakerPipe {
  transform(element) {
    console.log(element);
    return {
      trigger: {
        type: 'plain', // plain | primary
        shadow: true
      },
      actions: [
        { id: 'DownloadBtn', text: 'Download' },
        { id: 'FollowBtn', text: 'Follow' },
        { id: 'ShareBtn', text: 'Share' }
      ]
    };
  }
}
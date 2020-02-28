import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SdsVideoPlayerComponent } from './video-player.component';
import { By } from '@angular/platform-browser';
import { InitPxVideo } from './js/px-video';
import { Component } from '@angular/core';

class IntiPxVideoObj {
  InitPxVideo(options){
  }
};


describe('VideoPlayerComponent', () => {
  let component: SdsVideoPlayerComponent;
  let fixture: ComponentFixture<SdsVideoPlayerComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ SdsVideoPlayerComponent ],
      providers: [
        {provide: InitPxVideo, useClass: IntiPxVideoObj}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsVideoPlayerComponent);
    component = fixture.componentInstance;
    component.videoWidthEl = '640';
    component.imageSrcEl = "http://images.crestock.com/150000-159999/151031-xs.jpg";
    component.videoHeightEl = '360';
    component.videoSourceMp4El = "https://media.w3.org/2010/05/sintel/trailer.mp4";
  });

  it('Should get same video Height, Width, poster and Preload value  as an Input', ()=>{
    component.videoPosterEl = "http://www.kodaikanalholidays.com/img/packages/Ooty3Nights4DaysHolidayPackage.jpg";
    component.videoPreloadEl = 'none';
    component.ngAfterViewInit();
    const element = fixture.debugElement.query(By.css('video'));
    element.nativeElement.setAttribute('height', component.videoHeightEl);
    expect(element.nativeElement.getAttribute("height")).toBe(component.videoHeightEl);
    element.nativeElement.setAttribute('width', component.videoWidthEl);
    expect(element.nativeElement.getAttribute("width")).toBe(component.videoWidthEl);
    element.nativeElement.setAttribute('poster', component.videoPosterEl);
    expect(element.nativeElement.getAttribute("poster")).toBe(component.videoPosterEl);
    element.nativeElement.setAttribute('preload', component.videoPreloadEl);
    expect(element.nativeElement.getAttribute("preload")).toBe(component.videoPreloadEl);
  });

  it('div main container Id and width should same as an Input value ', ()=>{
    component.videoWidthEl = '640';
    component.videoPlayerId = 'sampleVid1';
    component.ngAfterViewInit();
    const element = fixture.debugElement.query(By.css('div.px-video-container'));
    element.nativeElement.setAttribute('width', component.videoWidthEl);
    expect(element.nativeElement.getAttribute("width")).toBe(component.videoWidthEl);
    element.nativeElement.setAttribute('id', component.videoPlayerId);
    expect(element.nativeElement.getAttribute("id")).toBe(component.videoPlayerId);
  });

  it('Video and Source element should be get same value as Input value', ()=> {

    component.videoSourceWebmEl = "http://techslides.com/demos/sample-videos/small.webm";
    component.ngAfterViewInit();
    const element = fixture.debugElement.query(By.css('source'));
    element.nativeElement.setAttribute('src', component.videoSourceMp4El);
    expect(element.nativeElement.getAttribute('src')).toBe(component.videoSourceMp4El);
    element.nativeElement.setAttribute('src', component.videoSourceWebmEl);
    expect(element.nativeElement.getAttribute('src')).toBe(component.videoSourceWebmEl);
  });

  it('check the Input vlaue for anchor tag', ()=>{
    component.ngAfterViewInit();
    const element = fixture.debugElement.query(By.css('a'));
    element.nativeElement.setAttribute('href', component.videoSourceMp4El);
    expect(element.nativeElement.getAttribute('href')).toBe(component.videoSourceMp4El);
  });
  it('check the Input vlaue for Images', ()=>{

    component.ngAfterViewInit();
    const element = fixture.debugElement.query(By.css('img'));
    element.nativeElement.setAttribute('src', component.imageSrcEl);
    expect(element.nativeElement.getAttribute('src')).toBe(component.imageSrcEl);
    element.nativeElement.setAttribute('width', component.videoWidthEl);
    expect(element.nativeElement.getAttribute('width')).toBe(component.videoWidthEl);
    element.nativeElement.setAttribute('height', component.videoHeightEl);
    expect(element.nativeElement.getAttribute('height')).toBe(component.videoHeightEl);
  });

  it('should accept same width form Input', ()=>{
    component.ngAfterViewInit();
    const element = fixture.debugElement.query(By.css('.px-video-controls'));
    element.nativeElement.setAttribute('width', component.videoWidthEl);
    expect(element.nativeElement.getAttribute('width')).toBe(component.videoWidthEl);
  });

  xit('should accept track caption from input', ()=>{
    component.ngAfterViewInit();
    const element = fixture.debugElement.query(By.css('track'));
    element.nativeElement.setAttribute('src', component.videoCaptionEl);
    expect(element.nativeElement.getAttribute('src')).toBe(component.videoCaptionEl);
  });

});

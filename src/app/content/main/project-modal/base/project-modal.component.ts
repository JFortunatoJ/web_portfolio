import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ElementRef,
  OnDestroy,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Project} from 'src/app/content/shared/project';
import {ProjectViewService} from 'src/app/content/main/index/project-view.service';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css'],
  animations: [
    // fundo escuro que fica atrás do modal
    trigger('overlay', [
      transition(':enter', [
        // Inicia com o opacity zerado
        style({opacity: 0}),

        // efetua a animação de 250ms para o
        // o opacity de 0 até 0.5
        animate('250ms', style({opacity: .5})),
      ]),
      transition(':leave', [
        // Quando for esconder o overlay,
        // anima do opacity atual, 0.5, até
        // o valor 0
        animate('500ms', style({opacity: 0}))
      ])
    ]),

    // animação na parte branca do modal
    trigger('modal', [
      transition(':enter', [
        // inicia com o modal "lá em cima"
        style({top: -999}),

        // e finaliza com o modal no meio da tela
        animate('500ms', style({top: '50%'})),
      ]),
      transition(':leave', [

        // para esconder o modal, basta
        // "jogar ele lá para cima da tela"
        animate('250ms', style({top: -999}))
      ])
    ]),
  ]
})
export class ProjectModalComponent implements OnInit {
  modal: ElementRef<HTMLDivElement>;
''
  @ViewChild('modal') set content(content: ElementRef<HTMLDivElement>) {
    if (content) { // initially setter gets called with undefined
      this.modal = content;
      this.onResize();
    }
  }

  videoWidth: number | undefined;
  videoHeight: number | undefined;

  public project: Project;
  public isVisible: boolean = false;

  private getProject: Subscription;

  constructor(private projectViewService: ProjectViewService, private _changeDetectorRef: ChangeDetectorRef) {
    this.getProject = projectViewService.projectView$.subscribe(
      project => {
        this.showProject(project);
      }
    )
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  ngAfterViewInit(): void {
    window.addEventListener('resize', this.onResize);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
    this.getProject.unsubscribe();
  }

  showProject(project: Project) {
    this.project = project;
    this.setVisibility(true);
  }

  public setVisibility(status: boolean): void {
    this.isVisible = status;
  }

   onResize = (): void => {
    // Automatically expand the video to fit the page up to 1200px x 720px
    this.videoWidth = this.modal.nativeElement.clientWidth * 0.75;
    this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
  }
}

<body style= "font-family: Arial, Helvetica, sans-serif;">

<h1 style="text-align: center; color: #ffb563;"><ins>Apuntes de Clase1</ins></h1>

<h2 style="color: #ffb563">Instalar y configurar Angular</h2>

<h3 style="color: #ffb563">Paso 1 - Instalar la CLI en nuestro ordenador</h3>

Esta instalación se hace una única vez en nuestro ordenador y nos permite poder trabajar con proyectos Angular.

```
npm i -g @angular/cli
```

<h3 style="color: #ffb563">Paso 2 - Crear nuevo proyecto</h3>

```
ng new projectName
```

<h3 style="color: #ffb563">Paso 3 - Responder las preguntas que aparecen al crear el nuevo proyecto</h3>

* Formato del stylesheet que vamos a utilizar:<br>
    Seleccionamos <span style="color: #ffb563">CSS</span>

* Habilitar SSR y SSG:<br>
    Seleccionamos <span style="color: #ffb563">N</span> (no)

Con esto ya estará insalando Angular y creando nuestro proyecto

<span style="color: #ffb563">¡Importante!</span> En Angular, para hacer funcionar el servidor, escribimos:

```
ng serve
```

<h3 style="color: #ffb563">Paso 4 - Dejar proyecto en blanco</h3>

Al igual que en React, el proyecto ya viene con algunas cosas en nuestro HTML, CSS, etc.

Debemos limpiar:

* Borrar todo el style de <span style="color: #ffb563">app.component.html</span> y dejar el main vacío:

```
<main class="main">

</main>

<router-outlet />
```

* Borrar el title en <span style="color: #ffb563">app.component.ts</span>:

```
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}
```

* Borrar el it del title en <span style="color: #ffb563">app.component.spect.ts</span>:

```
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Clase1');
  });
});

```

Con estos cambios nuestro proyecto ya está en blanco para que empecemos nuestro proyecto.

</body>
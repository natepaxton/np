import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule],
  template: `
    <div class="container my-5">
      <h1 class="display-4 mb-4">Bootstrap Theme Showcase</h1>
      <p class="lead">Explore the custom Bootstrap theme for this workspace</p>

      <!-- Buttons Section -->
      <section class="mb-5">
        <h2 class="h3 mb-3">Buttons</h2>
        <div class="d-flex flex-wrap gap-2">
          <button type="button" class="btn btn-primary">Primary</button>
          <button type="button" class="btn btn-secondary">Secondary</button>
          <button type="button" class="btn btn-success">Success</button>
          <button type="button" class="btn btn-danger">Danger</button>
          <button type="button" class="btn btn-warning">Warning</button>
          <button type="button" class="btn btn-info">Info</button>
          <button type="button" class="btn btn-light">Light</button>
          <button type="button" class="btn btn-dark">Dark</button>
        </div>
        <div class="d-flex flex-wrap gap-2 mt-2">
          <button type="button" class="btn btn-outline-primary">Outline Primary</button>
          <button type="button" class="btn btn-outline-secondary">Outline Secondary</button>
          <button type="button" class="btn btn-outline-success">Outline Success</button>
        </div>
      </section>

      <!-- Alerts Section -->
      <section class="mb-5">
        <h2 class="h3 mb-3">Alerts</h2>
        <div class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
        <div class="alert alert-success" role="alert">
          A simple success alert—check it out!
        </div>
        <div class="alert alert-warning" role="alert">
          A simple warning alert—check it out!
        </div>
        <div class="alert alert-danger" role="alert">
          A simple danger alert—check it out!
        </div>
      </section>

      <!-- Cards Section -->
      <section class="mb-5">
        <h2 class="h3 mb-3">Cards</h2>
        <div class="row g-3">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card Title</h5>
                <p class="card-text">Some quick example text to build on the card title.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-white bg-primary">
              <div class="card-body">
                <h5 class="card-title">Primary Card</h5>
                <p class="card-text">This is a primary colored card with text.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-success">
              <div class="card-body">
                <h5 class="card-title text-success">Success Border</h5>
                <p class="card-text">Card with success border styling.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Badges Section -->
      <section class="mb-5">
        <h2 class="h3 mb-3">Badges</h2>
        <span class="badge bg-primary me-1">Primary</span>
        <span class="badge bg-secondary me-1">Secondary</span>
        <span class="badge bg-success me-1">Success</span>
        <span class="badge bg-danger me-1">Danger</span>
        <span class="badge bg-warning text-dark me-1">Warning</span>
        <span class="badge bg-info me-1">Info</span>
      </section>

      <!-- Form Elements -->
      <section class="mb-5">
        <h2 class="h3 mb-3">Form Elements</h2>
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="exampleInput" class="form-label">Text Input</label>
              <input type="text" class="form-control" id="exampleInput" placeholder="Enter text">
            </div>
            <div class="mb-3">
              <label for="exampleSelect" class="form-label">Select</label>
              <select class="form-select" id="exampleSelect">
                <option selected>Choose...</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="exampleTextarea" class="form-label">Textarea</label>
              <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                Default checkbox
              </label>
            </div>
          </div>
        </div>
      </section>

      <!-- Progress Bars -->
      <section class="mb-5">
        <h2 class="h3 mb-3">Progress Bars</h2>
        <div class="progress mb-2" style="height: 20px;">
          <div class="progress-bar bg-primary" role="progressbar" style="width: 25%;">25%</div>
        </div>
        <div class="progress mb-2" style="height: 20px;">
          <div class="progress-bar bg-success" role="progressbar" style="width: 50%;">50%</div>
        </div>
        <div class="progress" style="height: 20px;">
          <div class="progress-bar bg-info" role="progressbar" style="width: 75%;">75%</div>
        </div>
      </section>

      <!-- List Group -->
      <section class="mb-5">
        <h2 class="h3 mb-3">List Group</h2>
        <ul class="list-group" style="max-width: 400px;">
          <li class="list-group-item active">Active item</li>
          <li class="list-group-item">Regular item</li>
          <li class="list-group-item list-group-item-success">Success item</li>
          <li class="list-group-item list-group-item-warning">Warning item</li>
          <li class="list-group-item list-group-item-danger">Danger item</li>
        </ul>
      </section>

      <!-- Tables -->
      <section class="mb-5">
        <h2 class="h3 mb-3">Tables</h2>
        <table class="table table-striped">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td><span class="badge bg-success">Active</span></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td><span class="badge bg-warning text-dark">Pending</span></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>Bird</td>
              <td><span class="badge bg-danger">Inactive</span></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {}

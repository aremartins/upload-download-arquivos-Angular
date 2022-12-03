import { Routes, RouterModule } from '@angular/router';
import { UploadFileComponent } from './components/upload-file/upload-file.component';

const routes: Routes = [
  { path: '', component: UploadFileComponent },
];

export const UploadFileRoutes = RouterModule.forChild(routes);

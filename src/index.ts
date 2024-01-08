import { Observable, of, tap } from 'rxjs';

const arrObs: Observable<any> = of(1, 2, 3);

arrObs.pipe(
  tap((val) => console.log(val))
).subscribe();
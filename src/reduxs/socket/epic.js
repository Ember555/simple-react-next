import { ofType } from 'redux-observable'
import { of, from } from 'rxjs'
import { switchMap, map, catchError } from 'rxjs/operators'

import { CONNECT, connected, error } from './action'

export const connectEpic = (action$, state$, { url, getJson, handleError }) =>
  action$.pipe(
    //
    ofType(CONNECT),

    switchMap(() =>
      from(getJson(url('/')))
        //
        .pipe(
          map(() => connected()),

          catchError(err => {
            handleError(err, 'Socket')
            return of(error())
          }),
        ),
    ),
  )

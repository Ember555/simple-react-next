import { ofType } from "redux-observable"
import { of, from } from "rxjs"
import { switchMap, map, catchError, takeUntil, filter } from "rxjs/operators"
import Router from "next/router"

import { alertSuccess } from "../../common/alert"
import {
  SUBMIT_FLAME_GRAPH,
  SUBMIT_CANCEL,
  submitedflameGraphError,
  submitedflameGraphSuccess
} from "./action"

export const flameGraphEpic = (
  action$,
  state$,
  { url, getJson, handleError }
) =>
  action$.pipe(
    //
    ofType(SUBMIT_FLAME_GRAPH),

    switchMap(() => {
      return from(getJson(url(`/data`))).pipe(
        //
        map(response => {
          const { data } = response
          const { result } = data
          return submitedflameGraphSuccess({
            result
          })
        }),

        takeUntil(
          action$.pipe(
            //
            filter(action => action.type === SUBMIT_CANCEL)
          )
        ),

        catchError(({ response }) => {
          // handleError(response.data, 'testPage')
          return of(submitedflameGraphError())
        })
      )
    })
  )

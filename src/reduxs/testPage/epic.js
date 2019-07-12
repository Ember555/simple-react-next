import { ofType } from 'redux-observable'
import { of, from } from 'rxjs'
import { switchMap, catchError, takeUntil, filter } from 'rxjs/operators'
import Router from 'next/router'

import { alertSuccess } from '../../common/alert'
import {
  SUBMIT_TEST_PAGE,
  SUBMIT_CANCEL,
  submitedtestPageError,
  submitedtestPageSuccess,
} from './action'

export const testPageEpic = (action$, state$, { url, getJson, handleError }) =>
  action$.pipe(
    //
    ofType(SUBMIT_TEST_PAGE),

    switchMap(() => {
      const { testPage } = state$.value
      const { filename } = testPage

      return from(
        getJson(url(`/save/${filename}`))).pipe(
        //
        switchMap(() => {
          // Router.push({
          //   pathname: '/credential',
          // })
          alertSuccess('save flamegraph success', 'testPage')
          return of(submitedtestPageSuccess())
        }),

        takeUntil(
          action$.pipe(
            //
            filter(action => action.type === SUBMIT_CANCEL),
          ),
        ),

        catchError(({ response }) => {
          // handleError(response.data, 'testPage')
          return of(submitedtestPageError())
        }),
      )
    }),
  )

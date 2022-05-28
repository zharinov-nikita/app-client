import { createAction } from '@reduxjs/toolkit'
import {
    BUSINESS_START_LOAD,
    BUSINESS_FINISH_LOAD,

    BUSINESS_GET_PROJECTS,
} from './types'

export const businessStartLoad = createAction(BUSINESS_START_LOAD)
export const businessFinishLoad = createAction(BUSINESS_FINISH_LOAD)

export const businessGetProjects = createAction(BUSINESS_GET_PROJECTS)
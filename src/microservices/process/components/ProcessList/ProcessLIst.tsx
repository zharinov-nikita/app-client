import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import ProcessItem from './ProcessItem/ProcessItem'
import { Collapse, Select, Tooltip, Typography } from 'antd'
import { processSlice, StatusProcessType } from '../../store/process'
import { CaretDownOutlined, VerticalAlignMiddleOutlined } from '@ant-design/icons'
const { Option } = Select
const { Panel } = Collapse




const ProcessList: React.FC = () => {
    const dispatch = useAppDispatch()
    const { updateProcess } = processSlice.actions
    const processes = useAppSelector(state => state.process.processes)

    return (
        <>
            <Collapse>
                {processes.map((process, index) =>
                    <Panel
                        header={
                            <Typography.Text
                                children={process.name}
                                strong
                                disabled={(process.status !== 'работа') && true}
                            />
                        }
                        extra={
                            <Select
                                defaultValue={process.status}
                                style={{ width: 148 }}
                                onClick={(e) => e.stopPropagation()}
                                onChange={(value: StatusProcessType) => {
                                    dispatch(updateProcess({ ...process, status: value }))
                                }}
                                suffixIcon={<VerticalAlignMiddleOutlined />}
                            >
                                <Option value={'запланировано'}>запланировано</Option>
                                <Option value={'работа'}>работа</Option>
                                <Option value={'завершено'}>завершено</Option>
                            </Select>
                        }
                        key={process._id}
                        collapsible={(process.status === 'работа') ? 'header' : 'disabled'}
                    >
                        <ProcessItem process={process} />
                    </Panel>
                )}
            </Collapse>
        </>
    )
}

export default ProcessList
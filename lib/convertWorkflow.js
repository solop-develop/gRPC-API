/*************************************************************************************
 * Product: ADempiere gRPC Business Data Client Convert Utils                        *
 * Copyright (C) 2012-2020 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                      *
 * This program is free software: you can redistribute it and/or modify              *
 * it under the terms of the GNU General Public License as published by              *
 * the Free Software Foundation, either version 3 of the License, or                 *
 * (at your option) any later version.                                               *
 * This program is distributed in the hope that it will be useful,                   *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                    *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                     *
 * GNU General Public License for more details.                                      *
 * You should have received a copy of the GNU General Public License                 *
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.            *
 ************************************************************************************/

 const convertWorkflow = {

  convertWorkflowProcessFomGRPC(workflowProcess) {
    if (workflowProcess) {
      const {
        getWorkflowProcess_WorkflowState,
        getWorkflowProcess_WorkflowPriority
      } = require('./convertEnums.js');

      return {
        process_uuid: workflowProcess.getProcessUuid(),
        workflow_uuid: workflowProcess.getWorkflowUuid(),
        workflow_name: workflowProcess.getWorkflowName(),
        id: workflowProcess.getId(),
        uuid: workflowProcess.getUuid(),
        table_name: workflowProcess.getTableName(),
        user_uuid: workflowProcess.getUserUuid(),
        user_name: workflowProcess.getUserName(),
        responsible_id: workflowProcess.getResponsibleId(),
        responsible_uuid: workflowProcess.getResponsibleUuid(),
        responsible_name: workflowProcess.getResponsibleName(),
        text_message: workflowProcess.getTextMessage(),
        processed: workflowProcess.getProcessed(),
        workflow_state_name: getWorkflowProcess_WorkflowState({
          value: workflowProcess.getWorkflowState()
        }),
        workflow_state: workflowProcess.getWorkflowState(),
        priority: workflowProcess.getPriority(),
        priority_name: getWorkflowProcess_WorkflowPriority({
          value: workflowProcess.getPriority()
        }),
        workflow_events: workflowProcess.getWorkflowEventsList().map(itemEvent => {
          return convertWorkflow.convertWorkflowEventFromGRPC(itemEvent);
        }),
        log_date: new Date(workflowProcess.getLogDate())
      };
    }
    return undefined;
  },

  convertWorkflowEventFromGRPC(workflowEvent) {
    if (workflowEvent) {
      const {
        getWorkflowProcess_WorkflowState,
        getWorkflowEvent_EventType
      } = require('./convertEnums.js');

      return {
        node_uuid: workflowEvent.getNodeUuid(),
        node_name: workflowEvent.getNodeName(),
        id: workflowEvent.getId(),
        uuid: workflowEvent.getUuid(),
        table_name: workflowEvent.getTableName(),
        user_uuid: workflowEvent.getUserUuid(),
        user_name: workflowEvent.getUserName(),
        responsible_id: workflowEvent.getResponsibleId(),
        responsible_uuid: workflowEvent.getResponsibleUuid(),
        responsible_name: workflowEvent.getResponsibleName(),
        text_message: workflowEvent.getTextMessage(),
        time_elapsed: workflowEvent.getTimeElapsed(),
        attribute_name: workflowEvent.getAttributeName(),
        old_value: workflowEvent.getOldValue(),
        new_value: workflowEvent.getNewValue(),
        workflow_state: workflowEvent.getWorkflowState(),
        workflow_state_name: getWorkflowProcess_WorkflowState({
          value: workflowEvent.getWorkflowState()
        }),
        event_type: workflowEvent.getEventType(),
        event_type_name: getWorkflowEvent_EventType({
          value: workflowEvent.getEventType()
        }),
        log_date: new Date(workflowEvent.getLogDate())
      };
    }

    return undefined;
  },

  convertWorkflowActivityFromGRPC(workflowActivity) {
    if (workflowActivity) {
      return {
        uuid: workflowActivity.getUuid(),
        id: workflowActivity.getId(),
        table_name: workflowActivity.getTableName(),
        record_uuid: workflowActivity.getRecordUuid(),
        user_uuid: workflowActivity.getUserUuid(),
        user_name: workflowActivity.getUserName(),
        responsible_id: workflowActivity.getResponsibleId(),
        responsible_uuid: workflowActivity.getResponsibleUuid(),
        responsible_name: workflowActivity.getResponsibleName(),
        text_message: workflowActivity.getTextMessage(),
        priority: workflowActivity.getPriority(),
        processed: workflowActivity.getProcessed(),
        created: new Date(workflowActivity.getCreated()),
        last_alert: new Date(workflowActivity.getLastAlert()),
        workflow_process: convertWorkflow.convertWorkflowProcessFomGRPC(workflowActivity.getWorkflowProcess()),
        workflow: convertWorkflow.convertWorkflowDefinitionFromGRPC(workflowActivity.getWorkflow()),
        node: convertWorkflow.convertWorkflowNodeFromGRPC(workflowActivity.getNode())
      };
    }
    return undefined;
  },

  convertWorkflowDefinitionFromGRPC(workflow) {
    if (workflow) {
      const {
        getWorkflowDefinition_PublishStatus,
        getWorkflowDefinition_DurationUnit
      } = require('./convertEnums.js');

      return {
        id: workflow.getId(),
        uuid: workflow.getUuid(),
        value: workflow.getValue(),
        name: workflow.getName(),
        description: workflow.getDescription(),
        help: workflow.getHelp(),
        table_name: workflow.getTableName(),
        responsible_id: workflow.getResponsibleId(),
        responsible_uuid: workflow.getResponsibleUuid(),
        responsible_name: workflow.getResponsibleName(),
        priority: workflow.getPriority(),
        valid_from: workflow.getValidFrom(),
        is_default: workflow.getIsDefault(),
        is_valid: workflow.getIsValid(),
        publish_status: workflow.getPublishStatus(),
        publish_status_name: getWorkflowDefinition_PublishStatus({
          value: workflow.getPublishStatus()
        }),
        duration_unit: workflow.getDurationUnit(),
        duration_unit_name: getWorkflowDefinition_DurationUnit({
          value: workflow.getDurationUnit()
        }),
        start_node: convertWorkflow.convertWorkflowNodeFromGRPC(workflow.getStartNode()),
        workflow_nodes: workflow.getWorkflowNodesList().map(itemWorkflowNode => {
          return convertWorkflow.convertWorkflowNodeFromGRPC(itemWorkflowNode);
        })
      };
    }
    return undefined;
  },

  convertWorkflowNodeFromGRPC(node) {
    if (node) {
      const { getWorkflowNode_Action } = require('./convertEnums.js');

      return {
        id: node.getId(),
        uuid: node.getUuid(),
        value: node.getValue(),
        name: node.getName(),
        description: node.getDescription(),
        help: node.getHelp(),
        responsible_id: node.getResponsibleId(),
        responsible_uuid: node.getResponsibleUuid(),
        responsible_name: node.getResponsibleName(),
        document_action: {
          value: node.getDocumentActionValue(),
          name: node.getDocumentActionName()
        },
        priority: node.getPriority(),
        action: node.getAction(),
        action_name: getWorkflowNode_Action({
          value: node.getAction()
        }),
        transitions: node.getTransitionsList().map(itemTransition => {
          return convertWorkflow.convertWorkflowTransitionFromGRPC(itemTransition);
        })
      }
    }
    // Workflow Node
    return undefined;
  },

  convertWorkflowTransitionFromGRPC(workflowTransitionToConvert) {
    if (workflowTransitionToConvert) {
      return {
        id: workflowTransitionToConvert.getId(),
        uuid: workflowTransitionToConvert.getUuid(),
        description: workflowTransitionToConvert.getDescription(),
        is_standard_user_workflow: workflowTransitionToConvert.getIsStdUserWorkflow(),
        sequence: workflowTransitionToConvert.getSequence(),
        node_next_id: workflowTransitionToConvert.getNodeNextId(),
        node_next_uuid: workflowTransitionToConvert.getNodeNextUuid(),
        node_next_name: workflowTransitionToConvert.getNodeNextName(),
        workflow_conditions: workflowTransitionToConvert.getWorkflowConditionsList().map(condition => {
          return convertWorkflow.convertWorkflowConditionFromGRPC(condition);
        })
      };
    }
    return undefined;
  },

  convertWorkflowConditionFromGRPC(workflowConditionToConvert) {
    if (workflowConditionToConvert) {
      const {
        getWorkflowCondition_ConditionType,
        getWorkflowCondition_Operation
      } = require('./convertEnums.js');

      return {
        sequence: workflowConditionToConvert.getSequence(),
        colum_name: workflowConditionToConvert.getColumnName(),
        value: workflowConditionToConvert.getValue(),
        condition_type: workflowConditionToConvert.getConditionType(),
        condition_type_name: getWorkflowCondition_ConditionType({
          value: workflowConditionToConvert.getConditiontype()
        }),
        operation: workflowConditionToConvert.getOperation(),
        operation_name: getWorkflowCondition_Operation({
          value: workflowConditionToConvert.getOpetation()
        })
      };
    }
    return undefined;
  },

  convertDocumentAction(documentActionToConvert) {
    if (documentActionToConvert) {
      return {
        value: documentActionToConvert.getValue(),
        name: documentActionToConvert.getName(),
        description: documentActionToConvert.getDescription()
      };
    }
    return undefined;
  },

  convertDocumentStatus(documentStatusToConvert) {
    if (documentStatusToConvert) {
      return {
        value: documentStatusToConvert.getValue(),
        name: documentStatusToConvert.getName(),
        description: documentStatusToConvert.getDescription()
      };
    }
    return undefined;
  }

};

module.exports = convertWorkflow;

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

const convertBusinessData = {
  convertLookupFromGRPC(lookup) {
    if (lookup) {
      const { convertValuesMapFromGRPC } = require('./convertValues.js');

      return {
        id: lookup.getId(),
        uuid: lookup.getUuid(),
        table_name: lookup.getTableName(),
        values: convertValuesMapFromGRPC({
          mapToConvert: lookup.getValuesMap(),
          returnType: 'object'
        })
      };
    }
    return undefined;
  },

  convertCalloutFromGRPC(callout) {
    if (callout) {
      const { convertValuesMapFromGRPC } = require('./convertValues.js');
      return {
        result: callout.getResult(),
        values: convertValuesMapFromGRPC({
          mapToConvert: callout.getValuesMap(),
          returnType: 'object'
        })
      };
    }
    return undefined;
  },

  convertPrivateAccessFromGRPC(privateAccess) {
    if (privateAccess) {
      return {
        table_name: privateAccess.getTableName(),
        id: privateAccess.getId(),
        uuid: privateAccess.getUuid()
      };
    }
    return undefined;
  },

  convertFavoriteFromGRPC(favoriteToConvert) {
    if (favoriteToConvert) {
      return {
        menuUuid: favoriteToConvert.getMenuuuid(),
        menuName: favoriteToConvert.getMenuname(),
        menuDescription: favoriteToConvert.getMenudescription(),
        referenceUuid: favoriteToConvert.getReferenceuuid(),
        action: favoriteToConvert.getAction()
      };
    }
    return undefined;
  },

  convertRecentItemFromGRPC(recentItem) {
    if (recentItem) {
      return {
        menu_uuid: recentItem.getMenuUuid(),
        menu_name: recentItem.getMenuName(),
        menu_description: recentItem.getMenuDescription(),
        window_uuid: recentItem.getWindowUuid(),
        tab_uuid: recentItem.getTabUuid(),
        table_id: recentItem.getTableId(),
        table_name: recentItem.getTableName(),
        id: recentItem.getId(),
        uuid: recentItem.getUuid(),
        display_name: recentItem.getDisplayName(),
        updated: new Date(recentItem.getUpdated()),
        reference_uuid: recentItem.getReferenceUuid(),
        action: recentItem.getAction()
      };
    }
    return undefined;
  },

  convertPendingDocumentFromGRPC(pendingDocumentToConvert) {
    if (pendingDocumentToConvert) {
      const { convertCriteriaFromGRPC } = require('./convertBaseDataType.js');

      return {
        windowUuid: pendingDocumentToConvert.getWindowuuid(),
        formUuid: pendingDocumentToConvert.getFormuuid(),
        documentName: pendingDocumentToConvert.getDocumentname(),
        documentDescription: pendingDocumentToConvert.getDocumentdescription(),
        sequence: pendingDocumentToConvert.getSequence(),
        recordCount: pendingDocumentToConvert.getRecordcount(),
        criteria: convertCriteriaFromGRPC(
          pendingDocumentToConvert.getCriteria()
        )
      };
    }
    return undefined;
  },

  convertEntityChatsFromGRPC(entityChat) {
    if (entityChat) {
      const {
        getEntityChat_ConfidentialType,
        getEntityChat_ModerationType
      } = require('./convertEnums.js');

      return {
        chat_uuid: entityChat.getChatUuid(),
        id: entityChat.getId(),
        uuid: entityChat.getUuid(),
        table_name: entityChat.getTableName(),
        chat_type_uuid: entityChat.getChatTypeUuid(),
        description: entityChat.getDescription(),
        confidential_type: entityChat.getConfidentialType(),
        confidential_type_name: getEntityChat_ConfidentialType({
          value: entityChat.getConfidentialType()
        }),
        moderation_type: entityChat.getModerationType(),
        moderation_type_name: getEntityChat_ModerationType({
          value: entityChat.getModerationType()
        }),
        log_date: new Date(entityChat.getLogDate())
      };
    }
    return undefined;
  },

  convertChatEntryFromGRPC(charEntry) {
    if (charEntry) {
      const {
        getChatEntry_ChatEntryType,
        getChatEntry_ConfidentialType,
        getChatEntry_ModeratorStatus
      } = require('./convertEnums.js');

      return {
        chat_uuid: charEntry.getChatUuid(),
        uuid: charEntry.getUuid(),
        id: charEntry.getId(),
        subject: charEntry.getSubject(),
        character_data: charEntry.getCharacterData(),
        user_uuid: charEntry.getUserUuid(),
        user_name: charEntry.getUserName(),
        chat_entry_type: charEntry.getChatEntryType(),
        chat_entry_type_name: getChatEntry_ChatEntryType({
          value: charEntry.getChatEntryType()
        }),
        confidential_type: charEntry.getConfidentialType(),
        confidential_type_name: getChatEntry_ConfidentialType({
          value: charEntry.getConfidentialType()
        }),
        moderator_status: charEntry.getModeratorStatus(),
        moderator_status_bname: getChatEntry_ModeratorStatus({
          value: charEntry.getModeratorStatus()
        }),
        log_date: new Date(charEntry.getLogDate())
      };
    }
    return undefined;
  },

  convertCreateChatEntryFromGRPC(createChatEntry) {
    if (createChatEntry) {
      return {
        table_name: createChatEntry.getTableName(),
        id: createChatEntry.getId(),
        uuid: createChatEntry.getUuid(),
        comment: createChatEntry.getComment(),
      };
    }
    return undefined;
  },

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
          return convertBusinessData.convertWorkflowEventFromGRPC(itemEvent);
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

  convertWorkflowDefinitionFromGRPC(workflowDefinitionToConvert) {
    if (workflowDefinitionToConvert) {
      const {
        getWorkflowDefinition_PublishStatus,
        getWorkflowDefinition_DurationUnit
      } = require('./convertEnums.js');

      return {
        workflowUuid: workflowDefinitionToConvert.getWorkflowuuid(),
        value: workflowDefinitionToConvert.getValue(),
        name: workflowDefinitionToConvert.getName(),
        description: workflowDefinitionToConvert.getDescription(),
        help: workflowDefinitionToConvert.getHelp(),
        tableName: workflowDefinitionToConvert.getTablename(),
        responsibleUuid: workflowDefinitionToConvert.getResponsibleuuid(),
        priority: workflowDefinitionToConvert.getPriority(),
        validFrom: workflowDefinitionToConvert.getValidfrom(),
        isDefault: workflowDefinitionToConvert.getIsdefault(),
        isValid: workflowDefinitionToConvert.getIsvalid(),
        publishStatus: workflowDefinitionToConvert.getPublishstatus(),
        publishStatusName: getWorkflowDefinition_PublishStatus({
          value: workflowDefinitionToConvert.getPublishstatus()
        }),
        durationUnit: workflowDefinitionToConvert.getDurationunit(),
        durationUnitName: getWorkflowDefinition_DurationUnit({
          value: workflowDefinitionToConvert.getDurationunit()
        }),
        startNode: convertBusinessData.convertWorkflowNodeFromGRPC(workflowDefinitionToConvert.getStartnode()),
        workflowNodesList: workflowDefinitionToConvert.getWorkflownodesList().map(itemWorkflowNode => {
          return convertBusinessData.convertWorkflowNodeFromGRPC(itemWorkflowNode);
        })
      };
    }
    return undefined;
  },

  convertWorkflowNodeFromGRPC(workflowNodeToConvert) {
    if (workflowNodeToConvert) {
      const { getWorkflowNode_Action } = require('./convertEnums.js');

      return {
        nodeUuid: workflowNodeToConvert.getNodeuuid(),
        value: workflowNodeToConvert.getValue(),
        name: workflowNodeToConvert.getName(),
        description: workflowNodeToConvert.getDescription(),
        help: workflowNodeToConvert.getHelp(),
        responsibleUuid: workflowNodeToConvert.getResponsibleuuid(),
        documentActionValue: workflowNodeToConvert.getDocumentactionvalue(),
        documentActionName: workflowNodeToConvert.getDocumentactionname(),
        priority: workflowNodeToConvert.getPriority(),
        action: workflowNodeToConvert.getAction(),
        actionName: getWorkflowNode_Action({
          value: workflowNodeToConvert.getAction()
        }),
        transitionsList: workflowNodeToConvert.getTransitionsList().map(itemTransition => {
          return convertBusinessData.convertWorkflowTransitionFromGRPC(itemTransition);
        })
      }
    }
    // Workflow Node
    return undefined;
  },

  convertWorkflowTransitionFromGRPC(workflowTransitionToConvert) {
    if (workflowTransitionToConvert) {
      return {
        nodeNextUuid: workflowTransitionToConvert.getNodenextuuid(),
        description: workflowTransitionToConvert.getDescription(),
        isStdUserWorkflow: workflowTransitionToConvert.getIsstduserworkflow(),
        sequence: workflowTransitionToConvert.getSequence(),
        workflowConditionsList: workflowTransitionToConvert.getWorkflowconditionsList().map(conditionItem => {
          return convertBusinessData.convertWorkflowConditionFromGRPC(conditionItem);
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
        columName: workflowConditionToConvert.getColumnname(),
        value: workflowConditionToConvert.getValue(),
        conditionType: workflowConditionToConvert.getConditiontype(),
        conditionTypeName: getWorkflowCondition_ConditionType({
          value: workflowConditionToConvert.getConditiontype()
        }),
        operation: workflowConditionToConvert.getOperation(),
        operationName: getWorkflowCondition_Operation({
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

module.exports = convertBusinessData;

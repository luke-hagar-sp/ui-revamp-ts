import { SPConfigV2025ApiExportSpConfigRequest, SPConfigV2025ApiGetSpConfigExportRequest, SPConfigV2025ApiGetSpConfigExportStatusRequest } from 'sailpoint-api-client';
import { Step, Uid } from 'sequential-workflow-designer';
import {
  createChoiceValueModel,
  createStepModel
} from 'sequential-workflow-editor-model';
import { SailPointSDKService } from '../../../sailpoint-sdk.service';

let description = 'The rule transform allows you to reuse logic that has already been written for a previous use case. However, you can use the rule transform to reuse code contained within a Transform rule that either is not possible through only transforms';

export function createRule(): RuleStep {
  return {
    id: Uid.next(),
    componentType: 'task',
    name: 'Rule',
    type: 'rule',
    description: description,
    properties: {
        name: '',
    },
  };
}

export interface RuleStep extends Step {
  type: 'rule';
  componentType: 'task';
  description?: string;
  properties: {
    name: string;
  };
}

export function createRuleStepModel(rules: string[]) {
    return createStepModel<RuleStep>('rule', 'task', step => {
      if(rules.length > 0) {
        step.property('name').value(
                createChoiceValueModel({
                    choices: rules,
                })
              )
              .label('Name of the Rule to Reference');
      }
  });
}

export async function getAvailableRules(sdk: SailPointSDKService): Promise<string[]> {
  const request: SPConfigV2025ApiExportSpConfigRequest = {
    exportPayloadV2025: {
      description: 'Export rules',
      includeTypes: ['RULE'],
      objectOptions: {}
    }
  };
  
  const job = await sdk.exportSpConfig(request);

  if (job.status !== 202) {
    console.error('Error fetching rules:', job.data);
    return [];
  }

  while (true) {
    console.log('Waiting for job to complete...');
    
    const statusRequest: SPConfigV2025ApiGetSpConfigExportStatusRequest = {
      id: job.data.jobId
    };
    const { data: response } = await sdk.getSpConfigExportStatus(statusRequest);

    if (response.status === 'NOT_STARTED' || response.status === 'IN_PROGRESS') {
      await new Promise(resolve => setTimeout(resolve, 3000));
    } else {
      switch (response.status) {
        case 'COMPLETE': {
          const downloadRequest: SPConfigV2025ApiGetSpConfigExportRequest = {
            id: job.data.jobId
          };
          const { data: exportData } = await sdk.getSpConfigExport(downloadRequest);
          const rules: string[] = [];

          for (const obj of exportData.objects ?? []) {
            if (obj.object?.type === 'Transform') {
              if (obj.self?.name) {
                rules.push(obj.self.name);
              }
            }
          }

          return rules.filter((rule): rule is string => rule !== undefined);
        }
        default:
          throw new Error(`Unhandled status: ${response.status}`);
      }
    }
  }
}


export function serializeRule(step: RuleStep){
    return {
        name: step.name,
        type: step.type,
        attributes: {
            name: step.properties.name
        }
    }
}

export function deserializeRule(data: any): RuleStep {
    return {
        id: Uid.next(),
        componentType: 'task',
        name: 'Rule',
        type: 'rule',
        description: description,
        properties: {
            name: data.attributes.name,
        },
    }
}



  export function isRuleStep(step: Step): step is RuleStep {
    return step.type === 'rule';
}


export function getRuleIcon(): string {
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path fill="gray" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
    </svg>`;
  const encoded = encodeURIComponent(svg.trim());
  return `data:image/svg+xml,${encoded}`;
  }
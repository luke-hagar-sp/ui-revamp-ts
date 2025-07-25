import { BranchedStep, Properties, Step, Uid } from 'sequential-workflow-designer';
import {
  deserializeToStep,
  serializeStep,
} from '../transform-builder.component';

let description = 'Use the RFC5646 transform to convert an incoming string into an RFC 5646 language tag value. The incoming data must be either a recognized language name or a three-letter abbreviation of locale\'s language.'

export function createRFC5646(): RFC5646Step {
  return {
    id: Uid.next(),
    componentType: 'switch',
    name: 'RFC 5646',
    type: 'rfc5646',
    description: description,
    properties: {},
    branches: {
      input: [],
    },
  };
}

export interface RFC5646Step extends BranchedStep {
  type: 'rfc5646';
  componentType: 'switch';
  description?: string;
  properties: Properties;
}

export function serializeRFC5646(step: RFC5646Step) {
  const attributes: Record<string, any> = {};

  if (step.branches.input.length > 0) {
    attributes.input = serializeStep(step.branches.input[0]);
  }

  return {
    name: step.name,
    type: step.type,
    attributes: attributes,
  };
}

export function deserializeRFC5646(data: any): RFC5646Step {
  const step: RFC5646Step = {
    id: Uid.next(),
    componentType: 'switch',
    name: data.name ?? 'RFC5646',
    type: 'rfc5646',
    description: description,
    properties: {},
    branches: {
      input: [],
    },
  };

  if (data.attributes.input) {
    step.branches.input.push(deserializeToStep(data.attributes.input));
  }

  return step;
}

export function isRFC5646Step(step: Step): step is RFC5646Step {
  return step.type === 'rfc5646';
}

export function getRFC5646Icon(): string {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path fill="gray" d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"/>
    </svg>`
  const encoded = encodeURIComponent(svg.trim());
  return `data:image/svg+xml,${encoded}`;
}

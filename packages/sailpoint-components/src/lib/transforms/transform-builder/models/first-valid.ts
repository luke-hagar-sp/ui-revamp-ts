import {
  BranchedStep,
  Sequence,
  Step,
  StepEditorContext,
  Uid
} from 'sequential-workflow-designer';
import { createBooleanValueModel, createStepModel } from 'sequential-workflow-editor-model';
import { deserializeToStep, serializeStep } from '../transform-builder.component';
import { appendPropertyTitle } from '../utils/utils';

let description = 'Use the first valid transform to perform if/then/else operations on multiple different data points to return the first piece of data that is not null.'

export function createFirstValid(): FirstValidStep  {
    return {
      id: Uid.next(),
      componentType: 'switch',
      name: 'First Valid',
      type: 'firstValid',
      description: description,
      properties: {
        ignoreErrors: false
      },
      branches: {},
    };
  }

  export interface FirstValidStep extends BranchedStep {
    type: 'firstValid';
    componentType: 'switch';
    description?: string;
    properties: {
        ignoreErrors: boolean;
    };
  }

export const FirstValidModel = createStepModel<FirstValidStep>('firstValid', 'switch', step => {
    step
    .property('ignoreErrors')
    .value(
      createBooleanValueModel({
        defaultValue: false,
      })
    )
    .hint('This true or false value indicates whether to proceed to the next option if an error (like an NPE) occurs. Default is false.')
    .label('Ignore Errors');
  });



export function serializeFirstValid(step: FirstValidStep): {
    name: string;
    type: string;
    attributes: {
      [key: string]: any;
    };
  } {

    const attributes: { [key: string]: any } = {};

    if (step.properties.ignoreErrors === true) {
        attributes.ignoreErrors = step.properties.ignoreErrors;
    }


    for (const [branchName, sequence] of Object.entries(step.branches)) {
        if (sequence.length === 1) {
          attributes[branchName] = serializeStep(sequence[0]);
        } else {
          throw new Error(`Branch "${branchName}" must have exactly one step.`);
        }
      }

    return {
      name: step.name,
      type: step.type,
      attributes: attributes
    };
  }

  export function deserializeFirstValid(data: any): FirstValidStep {
    const branches: { [key: string]: Sequence } = {};
    
    const attributes = data.attributes;

    if (attributes.ignoreErrors !== undefined) {
        attributes.ignoreErrors = attributes.ignoreErrors === 'true';
    } else {
        attributes.ignoreErrors = false;
    }

    data.attributes.values.forEach((element: any, index: number) => {
        const key = element.name ?? `Variable${index}`;
        console.log(`iterating over: ` + element)
        branches[key] = [deserializeToStep(element)];
      });
    

  return {
    id: Uid.next(),
    componentType: 'switch',
    type: 'firstValid',
    name: data.attributes.label ?? 'First Valid',
    description: description,
    properties: { ignoreErrors: attributes.ignoreErrors },
    branches: branches,
  };
}

export function appendValueEditor(
    root: HTMLElement,
    step: FirstValidStep,
    editorContext: StepEditorContext
  ): void {
    const select = document.createElement('select');
  
    const trueOption = document.createElement('option');
    trueOption.value = 'true';
    trueOption.text = 'True';
    select.appendChild(trueOption);
  
    const falseOption = document.createElement('option');
    falseOption.value = 'false';
    falseOption.text = 'False';
    select.appendChild(falseOption);
  
    if (step.properties.ignoreErrors !== undefined) {
      select.value = String(step.properties.ignoreErrors);
    }
  
    select.addEventListener(
      'input',
      () => {
        step.properties.ignoreErrors = select.value === 'true';
        editorContext.notifyNameChanged();
      },
      false
    );
  
    appendPropertyTitle(root, 'Value');
    root.appendChild(select);
  }
  

  import { ViewContainerRef } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
  
  export function appendToggleEditor(
    root: HTMLElement,
    step: FirstValidStep,
    editorContext: StepEditorContext,
    viewContainerRef: ViewContainerRef
  ): void {
    appendPropertyTitle(root, 'Ignore Errors?');
  
    const toggleRef = viewContainerRef.createComponent(MatSlideToggle);
  
    toggleRef.instance.checked = !!step.properties.ignoreErrors;
    toggleRef.instance.color = 'primary';
    toggleRef.instance.labelPosition = 'after';
    toggleRef.instance.name = 'ignoreErrorsToggle';
  
    toggleRef.instance.change.subscribe((event: any) => {
      step.properties.ignoreErrors = event.checked;
      editorContext.notifyNameChanged();
    });
  
    root.appendChild(toggleRef.location.nativeElement);
  }
  


  export function isFirstValidStep(step: Step): step is FirstValidStep {
    return step.type === 'firstValid';
}

export function getFirstValidIcon(): string {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="gray">
  <path d="M0 0h24v24H0z" fill="none"/><path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"/>
  </svg>`;
const encoded = encodeURIComponent(svg.trim());
return `data:image/svg+xml,${encoded}`;
}
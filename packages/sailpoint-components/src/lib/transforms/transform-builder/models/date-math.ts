import { Uid } from "sequential-workflow-designer";
import { createBooleanValueModel, createChoiceValueModel, createStepModel, createStringValueModel } from "sequential-workflow-editor-model";
import { BranchedStep, Step } from "sequential-workflow-model";
import { deserializeToStep, serializeStep } from "../transform-builder.component";

export interface DateMathOperation {
  operation: '+' | '-' | '/';
  value?: number;
  unit: 'y' | 'M' | 'w' | 'd' | 'h' | 'm' | 's';
}

let description = 'Use the date math transform to add, subtract, and round components of a timestamp\'s incoming value. It also allows you to work with a referential value of "now" to run operations against the current date and time instead of a fixed value.'

export function createDateMath(): DateMathStep {
    return {
      id: Uid.next(),
      componentType: 'switch',
      name: 'Date Math',
      type: 'dateMath',
      description: description,
      properties: {
        expression: '',
        roundUp: false,
        useBuilder: true, // Toggle between builder and manual input
        baseDate: 'input', // 'input' or 'now'
        operations: [], // Array of operations for the builder
      },
      branches: {
        input: [],
      },
    };
  }

export interface DateMathStep extends BranchedStep {
    type: 'dateMath';
    componentType: 'switch';
    description: string;
    properties: {
      expression: string;
      roundUp: boolean;
      useBuilder?: boolean;
      baseDate?: string;
      operations?: DateMathOperation[];
    };
}

export const DateMathModel = createStepModel<DateMathStep>(
    'dateMath',
    'switch',
    (step) => {
      step
        .property('useBuilder')
        .value(
            createBooleanValueModel({
                defaultValue: true,
              })
        )
        .hint('Use the visual builder or enter expression manually')
        .label('Use Visual Builder');

      step
        .property('baseDate')
        .value(
            createChoiceValueModel({
                choices: ['input', 'now'],
                defaultValue: 'input',
              })
        )
        .hint('Start with input date or current date/time')
        .label('Base Date');

      step
        .property('expression')
        .value(
            createStringValueModel({
                minLength: 1,
              })
        )
        .hint(
          'A string value of the date and time components to operate on, along with the math operations to execute. Multiple operations on multiple components are supported. See <a href="https://developer.sailpoint.com/docs/extensibility/transforms/operations/date-math#transform-structure" target="_blank">Date Math Expression</a> for more details'
        )
        .label('Expression');

      step
        .property('roundUp')
        .value(
            createBooleanValueModel({
                defaultValue: false,
              })
        )
        .hint('This true or false value indicates whether the transform rounds up or down when the expression defines a rounding ("/") operation. If this value is not provided, the transform defaults to false.')
        .label('Round Up');
    }
  );

export function serializeDateMath(step: DateMathStep) {
    const attributes: Record<string, any> = {};

    // If using builder, construct expression from operations
    if (step.properties.useBuilder && step.properties.operations && step.properties.operations.length > 0) {
      let expression = step.properties.baseDate === 'now' ? 'now' : '';
      
      for (const op of step.properties.operations) {
        // For rounding operations, there's no value
        if (op.operation === '/') {
          expression += `${op.operation}${op.unit}`;
        } else {
          expression += `${op.operation}${op.value}${op.unit}`;
        }
      }
      
      attributes.expression = expression || (step.properties.baseDate === 'now' ? 'now' : '');
    } else {
      // Use manual expression
      attributes.expression = step.properties.expression;
    }

    if (step.properties.roundUp === true) {
        attributes.roundUp = step.properties.roundUp;
    }
     if (step.branches.input.length > 0) {
        attributes.input = serializeStep(step.branches.input[0]);
      }

    return {
      name: step.name,
      type: step.type,
      attributes: attributes,
    };
  }

export function deserializeDateMath(data: any): DateMathStep {
    console.log('Deserializing Date Math step:', data);
    const step: DateMathStep = {
      id: Uid.next(),
      componentType: 'switch',
      name: data.name ?? 'Date Math',
      type: 'dateMath',
      description: description,
      properties: {
        expression: data.attributes.expression || '',
        roundUp: data.attributes.roundUp ?? false,
        useBuilder: true,
        baseDate: 'input',
        operations: [],
      },
      branches: {
        input: [],
      },
    };

    // Try to parse expression into operations for builder
    if (data.attributes.expression) {
      const parsed = parseExpressionToOperations(data.attributes.expression as string);
      step.properties.baseDate = parsed.baseDate;
      step.properties.operations = parsed.operations;
    }

    if (data.attributes.input) {
      step.branches.input.push(deserializeToStep(data.attributes.input));
    }

    return step;
  }

export function parseExpressionToOperations(expression: string): { baseDate: 'input' | 'now', operations: DateMathOperation[] } {
  if (!expression) {
    return { baseDate: 'input', operations: [] };
  }

  const baseDate = expression.startsWith('now') ? 'now' : 'input';
  const operations: DateMathOperation[] = [];
  
  // Remove 'now' from beginning if present
  let remaining = expression.startsWith('now') ? expression.substring(3) : expression;
  
  // Parse operations using regex - make the value group optional for rounding operations
  const operationRegex = /([+\-/])(\d*)([yMwdhms])/g;
  let match;
  while ((match = operationRegex.exec(remaining)) !== null) {
    const [, operation, value, unit] = match;
    console.log(`Found operation: ${operation}, value: ${value}, unit: ${unit}`);
    
    // For rounding operations (/), there's no value
    if (operation === '/') {
      operations.push({
        operation: operation as '+' | '-' | '/',
        unit: unit as 'y' | 'M' | 'w' | 'd' | 'h' | 'm' | 's'
      });
    } else {
      // For add/subtract operations, parse the value
      operations.push({
        operation: operation as '+' | '-' | '/',
        value: parseInt(value as string, 10),
        unit: unit as 'y' | 'M' | 'w' | 'd' | 'h' | 'm' | 's'
      });
    }
  }
  
  return { baseDate, operations };
}

export function buildExpressionFromOperations(baseDate: 'input' | 'now', operations: DateMathOperation[]): string {
  let expression = baseDate === 'now' ? 'now' : '';
  
  for (const op of operations) {
    expression += `${op.operation}${op.value}${op.unit}`;
  }
  
  return expression || (baseDate === 'now' ? 'now' : '');
}

export function isDateMathStep(step: Step): step is DateMathStep {
    return step.type === 'dateMath';
}

export function getDateMathIcon(): string {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"/>
    <path fill="gray" d="M16.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17.23-.39.41-.78.54-1.17.13-.39.19-.79.19-1.18 0-.53-.09-1.02-.27-1.46-.18-.44-.44-.81-.78-1.11-.34-.31-.77-.54-1.26-.71-.51-.16-1.08-.24-1.72-.24-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15.23.1.43.25.59.43.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H22v-1.71h-5.95zM8 7H6v4H2v2h4v4h2v-4h4v-2H8V7z"/>
    </svg>`
    const encoded = encodeURIComponent(svg.trim());
    return `data:image/svg+xml,${encoded}`;
}

// Helper functions for the UI
export const DateMathUnits = {
  'y': 'Years',
  'M': 'Months', 
  'w': 'Weeks',
  'd': 'Days',
  'h': 'Hours',
  'm': 'Minutes',
  's': 'Seconds'
};

export const DateMathOperations = {
  '+': 'Add',
  '-': 'Subtract',
  '/': 'Round to'
};

export function getDateMathExamples(): { expression: string; description: string }[] {
  return [
    { expression: 'now', description: 'Current date and time' },
    { expression: 'now/h', description: 'Current time rounded to the hour' },
    { expression: 'now+1w', description: 'One week from now' },
    { expression: 'now+1y+1M+2d-4h+1m-3s/s', description: 'Complex calculation rounded to seconds' },
    { expression: '+3M', description: 'Add 3 months to input date' },
    { expression: '-1d', description: 'Subtract 1 day from input date' },
    { expression: '/d', description: 'Round input date to start of day' }
  ];
}
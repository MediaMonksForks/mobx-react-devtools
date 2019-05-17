/**
 * Turns a React component or stateless render function into a reactive component.
 */
import React = require('react');

export function configureDevtool(options: {
  logEnabled?: boolean;
  logFilter?: (p: any) => boolean;
}): void;

export function setLogEnabled(enabled: boolean): void;

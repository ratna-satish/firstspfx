import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ReactAppWebPartStrings';
import ReactApp from './components/ReactApp';
import { IReactAppProps } from './components/IReactAppProps';
import { IReactAppWebPartProps } from './IReactAppWebPartProps';

export default class ReactAppWebPart extends BaseClientSideWebPart<IReactAppWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReactAppProps > = React.createElement(
      ReactApp,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

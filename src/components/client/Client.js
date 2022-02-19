import React from "react";
import { clientsData } from "../../data/ClientsData";
import { Text } from "../../globalStyles";
import {
  ClientBrands,
  ClientContainer,
  ClientHeader,
  ClientHeading,
  ClientImage,
  ClientItem,
  ClientSection,
  Column
} from "./ClientStyles";

export const Client = () => {
  return (
    <ClientSection id='clients'>
      <ClientContainer>
        <ClientHeader>
          <ClientHeading>Our Clients</ClientHeading>
          <Text grey={true} showcase={true}>
            We’ve been working with the teams around the world.
          </Text>
        </ClientHeader>
        <ClientBrands>
          {clientsData.map((array,index) => {
            return (
              <Column key={index}>
                {array.map((item, index) => {
                  return (
                    <ClientItem key={index}>
                      <ClientImage
                        src={`/images/companies/${item.name}.svg`}
                      />
                    </ClientItem>
                  );
                })}
              </Column>
            );
          })}
        </ClientBrands>
      </ClientContainer>
    </ClientSection>
  );
};

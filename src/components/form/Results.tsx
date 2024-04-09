import React from 'react';
import { FormDataType } from '../../types';
import { Container, Card, ListGroup } from 'react-bootstrap';
import { splitCamelCaseToString } from '../../utils/formUtils';

interface Props {
    formData: FormDataType;
}

const Results: React.FC<Props> = ({ formData }) => {
    return (
        <Container>
            <Card>
                <ListGroup variant="flush">
                    {Object.entries(formData).map(([key, value], i) => (
                        <ListGroup.Item key={`resultList${i}`}>
                            <strong>{splitCamelCaseToString(key.charAt(0).toUpperCase() + key.slice(1))}:</strong> <span data-testid={key}>{value.toString()}</span>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
        </Container>
    );
};

export default Results;

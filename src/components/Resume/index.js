// react
import React from "react";

// import bootstrap components
import { Card, Container, Row, Col, ListGroup } from "react-bootstrap";

// resume pdf
import me_resume from "../../assets/ms_2021.pdf";

const Resume = () => {
  return (
    <Container className="my-3 py-3" id="Resume">
      <Card>
        <Card.Header as="h3" className="text-center" style={{color:'green'}}>Skills and Proficiencies</Card.Header>
        <Row>
          <Col>
            <Card.Body>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>Managing IT Projects - scoping, planning, budgeting, implementing, and staff management.</ListGroup.Item>
                  <ListGroup.Item>Design and Implementation of Layer 2 Local Area Networks (LAN), optimum performance configuration, identify bottlenecks and implement cost-effective solution.</ListGroup.Item>
                  <ListGroup.Item>Layer 3 and Wide Area Networks (WAN) - Requirement analysis, design and implementation. Routing Protocols (BGP, OSPF, EIGRP, RIP), Router configuration, Layer 3 Switching, QoS, Firewalls (Checkpoint, Palo Alto), IPSec and MPLS VPNs, Network Management and monitoring.</ListGroup.Item> 
                  <ListGroup.Item>Network Services – DNS, DHCP, TFTP, NTP, Syslog etc.</ListGroup.Item>
                  <ListGroup.Item>Internet/Intranet based solutions development - configuration, administration, reporting and maintenance of web servers.</ListGroup.Item>
                  <ListGroup.Item>Advanced Programming (Python, PHP, Shell Scripts, Perl, C, Javascript, MySql, Ansible) and version control using Github, plan and track development projects with Jira.</ListGroup.Item>
                  <ListGroup.Item><Card.Link href={me_resume} target="_blank">Downloadable Resume</Card.Link></ListGroup.Item>
                </ListGroup>
                
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Resume;
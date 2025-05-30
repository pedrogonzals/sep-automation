@sep11 
Feature: Program start dates and Refund dates

    As a customer, I want to see the program start dates and refund policy details before enrolling 
    so that I can make informed decisions.

    #* AC1: Program Start date and refund dates must be displayed in Step 1 in Test Automation with Selenium Program.

    Background: 
        Given user is on the Enrollment page
        

    @sep12
    Scenario: verify that the program start date and refund date are displayed
        Given user is on the Enrollment pag
    
    Scenario: verify that the program start date and refund date are displayed
        Then the program star date is displayed
        Then the program refund date is displayed

    Scenario: verify that he program start date and refund date are correct
        Then the displayed start date for the program is correct
        Then the displayed refund date for the program is correct

    




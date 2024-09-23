// app/tasks/TasksPage.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TasksPage from './page';
import '@testing-library/jest-dom';


describe('TasksPage', () => {
  test('renders initial state', () => {
    render(<TasksPage />);
    
    // Check if the heading is in the document
    const heading = screen.getByText(/Todo Application/i);
    expect(heading).toBeInTheDocument();

    // Check if the initial message is displayed
    const noTasksMessage = screen.getByText(/No Tasks Available/i);
    expect(noTasksMessage).toBeInTheDocument();
  });

  test('adds a new task', () => {
    render(<TasksPage />);
    
    // Input values
    const titleInput = screen.getByPlaceholderText(/Enter your task title/i);
    const descInput = screen.getByPlaceholderText(/Describe the task/i);
    const addButton = screen.getByRole('button', { name: /Add Task/i });

    // Add a new task
    fireEvent.change(titleInput, { target: { value: 'Test Task' } });
    fireEvent.change(descInput, { target: { value: 'Test Description' } });
    fireEvent.click(addButton);

    // Check if the new task appears in the list
    const taskTitle = screen.getByText(/Test Task/i);
    const taskDesc = screen.getByText(/Test Description/i);
    expect(taskTitle).toBeInTheDocument();
    expect(taskDesc).toBeInTheDocument();
  });

  test('deletes a task', () => {
    render(<TasksPage />);
    
    // Add a task first
    const titleInput = screen.getByPlaceholderText(/Enter your task title/i);
    const descInput = screen.getByPlaceholderText(/Describe the task/i);
    const addButton = screen.getByRole('button', { name: /Add Task/i });

    fireEvent.change(titleInput, { target: { value: 'Task to Delete' } });
    fireEvent.change(descInput, { target: { value: 'Description' } });
    fireEvent.click(addButton);

    // Delete the task
    const deleteButton = screen.getByRole('button', { name: /Delete/i });
    fireEvent.click(deleteButton);

    // Check if the task is removed
    const taskTitle = screen.queryByText(/Task to Delete/i);
    expect(taskTitle).not.toBeInTheDocument();
  });

  test('edits a task', () => {
    render(<TasksPage />);
    
    // Add a task first
    const titleInput = screen.getByPlaceholderText(/Enter your task title/i);
    const descInput = screen.getByPlaceholderText(/Describe the task/i);
    const addButton = screen.getByRole('button', { name: /Add Task/i });

    fireEvent.change(titleInput, { target: { value: 'Task to Edit' } });
    fireEvent.change(descInput, { target: { value: 'Description' } });
    fireEvent.click(addButton);

    // Edit the task
    const editButton = screen.getByRole('button', { name: /Edit/i });
    fireEvent.click(editButton);

    // Change the title and description
    fireEvent.change(titleInput, { target: { value: 'Edited Task' } });
    fireEvent.change(descInput, { target: { value: 'Edited Description' } });
    const updateButton = screen.getByRole('button', { name: /Update Task/i });
    fireEvent.click(updateButton);

    // Check if the updated task appears in the list
    const updatedTaskTitle = screen.getByText(/Edited Task/i);
    const updatedTaskDesc = screen.getByText(/Edited Description/i);
    expect(updatedTaskTitle).toBeInTheDocument();
    expect(updatedTaskDesc).toBeInTheDocument();
  });
});

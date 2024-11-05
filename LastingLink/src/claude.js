import React, { useState, useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";

const ConnectionBackupApp = () => {
	const [connections, setConnections] = useState(() => {
		const savedConnections = localStorage.getItem("socialConnections");
		return savedConnections ? JSON.parse(savedConnections) : [];
	});

	const [newConnection, setNewConnection] = useState({
		username: "",
		platform: "Instagram",
		notes: "",
		dateAdded: "",
	});

	const [editingIndex, setEditingIndex] = useState(null);

	useEffect(() => {
		localStorage.setItem("socialConnections", JSON.stringify(connections));
	}, [connections]);

	const addConnection = () => {
		if (newConnection.username.trim()) {
			const connectionToAdd = {
				...newConnection,
				dateAdded: new Date().toLocaleDateString(),
			};

			if (editingIndex !== null) {
				const updatedConnections = [...connections];
				updatedConnections[editingIndex] = connectionToAdd;
				setConnections(updatedConnections);
				setEditingIndex(null);
			} else {
				setConnections([...connections, connectionToAdd]);
			}

			setNewConnection({
				username: "",
				platform: "Instagram",
				notes: "",
				dateAdded: "",
			});
		}
	};

	const deleteConnection = (indexToRemove) => {
		setConnections(
			connections.filter((_, index) => index !== indexToRemove)
		);
	};

	const startEditing = (index) => {
		const connectionToEdit = connections[index];
		setNewConnection(connectionToEdit);
		setEditingIndex(index);
	};

	return (
		<div className="container mx-auto p-4">
			<div className="bg-white shadow-md rounded-lg p-6">
				<h2 className="text-2xl font-bold mb-4">
					Social Connection Backup
				</h2>

				<div className="grid gap-4">
					<div className="grid grid-cols-2 gap-4">
						<input
							type="text"
							placeholder="Username"
							className="border rounded px-3 py-2"
							value={newConnection.username}
							onChange={(e) =>
								setNewConnection({
									...newConnection,
									username: e.target.value,
								})
							}
						/>
						<input
							type="text"
							placeholder="Notes (optional)"
							className="border rounded px-3 py-2"
							value={newConnection.notes}
							onChange={(e) =>
								setNewConnection({
									...newConnection,
									notes: e.target.value,
								})
							}
						/>
					</div>
					<button
						onClick={addConnection}
						className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
					>
						{editingIndex !== null
							? "Update Connection"
							: "Add Connection"}
					</button>
				</div>

				{connections.length > 0 && (
					<div className="mt-6">
						<h3 className="text-lg font-semibold mb-4">
							Saved Connections ({connections.length})
						</h3>
						<div className="grid gap-2">
							{connections.map((connection, index) => (
								<div
									key={index}
									className="flex justify-between items-center p-3 border rounded"
								>
									<div>
										<div className="font-medium">
											{connection.username}
										</div>
										{connection.notes && (
											<div className="text-sm text-gray-500">
												{connection.notes}
											</div>
										)}
										<div className="text-xs text-gray-400">
											Added: {connection.dateAdded}
										</div>
									</div>
									<div className="flex space-x-2">
										<button
											className="text-blue-500 hover:bg-blue-100 p-2 rounded"
											onClick={() => startEditing(index)}
										>
											Edit
										</button>
										<button
											className="text-red-500 hover:bg-red-100 p-2 rounded"
											onClick={() =>
												deleteConnection(index)
											}
										>
											Delete
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ConnectionBackupApp;

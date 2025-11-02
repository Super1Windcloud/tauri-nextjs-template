#[tauri::command]
fn show_window(window: tauri::Window) -> Result<(), String> {
  if window.is_visible().unwrap() {
    return Ok(());
  }

  window
    .show()
    .map_err(|e| format!("Failed to show window: {}", e))?;

  Ok(())
}
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .plugin(tauri_plugin_opener::init())
    .invoke_handler(tauri::generate_handler![show_window])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

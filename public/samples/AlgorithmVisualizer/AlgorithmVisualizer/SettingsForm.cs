using System;
using System.Windows.Forms;

namespace AlgorithmVisualizer
{
    public partial class SettingsForm : Form
    {
        public SettingsForm()
        {
            InitializeComponent();
            LoadSettings();
        }

        private void LoadSettings()
        {
            numArraySize.Value = AppSettings.ArraySize;
            numSortSpeed.Value = AppSettings.SortingAnimationSpeedMs;
            numGridSize.Value = AppSettings.GridSize;
            numPathSpeed.Value = AppSettings.PathfindingAnimationSpeedMs;
        }

        private void btnSave_Click(object sender, EventArgs e)
        {
            AppSettings.ArraySize = (int)numArraySize.Value;
            AppSettings.SortingAnimationSpeedMs = (int)numSortSpeed.Value;
            AppSettings.GridSize = (int)numGridSize.Value;
            AppSettings.PathfindingAnimationSpeedMs = (int)numPathSpeed.Value;
            
            this.DialogResult = DialogResult.OK;
            this.Close();
        }
    }
}

namespace AlgorithmVisualizer
{
    partial class SortingVisualizerForm
    {
        private System.ComponentModel.IContainer components = null;

        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.pnlVisualizer = new System.Windows.Forms.Panel();
            this.btnStart = new System.Windows.Forms.Button();
            this.btnReset = new System.Windows.Forms.Button();
            this.btnNewArray = new System.Windows.Forms.Button();
            this.btnSettings = new System.Windows.Forms.Button();
            this.cmbAlgorithms = new System.Windows.Forms.ComboBox();
            this.lblComparisons = new System.Windows.Forms.Label();
            this.timer1 = new System.Windows.Forms.Timer(this.components);
            this.label1 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // pnlVisualizer
            // 
            this.pnlVisualizer.BackColor = System.Drawing.Color.FromArgb(30, 30, 46);
            this.pnlVisualizer.Location = new System.Drawing.Point(12, 12);
            this.pnlVisualizer.Name = "pnlVisualizer";
            this.pnlVisualizer.Size = new System.Drawing.Size(958, 480);
            this.pnlVisualizer.TabIndex = 0;
            this.pnlVisualizer.Paint += new System.Windows.Forms.PaintEventHandler(this.pnlVisualizer_Paint);
            // 
            // btnStart
            // 
            this.btnStart.Location = new System.Drawing.Point(12, 510);
            this.btnStart.Name = "btnStart";
            this.btnStart.Size = new System.Drawing.Size(94, 29);
            this.btnStart.TabIndex = 1;
            this.btnStart.Text = "Start";
            this.btnStart.UseVisualStyleBackColor = true;
            this.btnStart.Click += new System.EventHandler(this.btnStart_Click);
            // 
            // btnReset
            // 
            this.btnReset.Location = new System.Drawing.Point(112, 510);
            this.btnReset.Name = "btnReset";
            this.btnReset.Size = new System.Drawing.Size(94, 29);
            this.btnReset.TabIndex = 2;
            this.btnReset.Text = "Reset";
            this.btnReset.UseVisualStyleBackColor = true;
            this.btnReset.Click += new System.EventHandler(this.btnReset_Click);
            // 
            // btnNewArray
            // 
            this.btnNewArray.Location = new System.Drawing.Point(212, 510);
            this.btnNewArray.Name = "btnNewArray";
            this.btnNewArray.Size = new System.Drawing.Size(94, 29);
            this.btnNewArray.TabIndex = 3;
            this.btnNewArray.Text = "New Array";
            this.btnNewArray.UseVisualStyleBackColor = true;
            this.btnNewArray.Click += new System.EventHandler(this.btnNewArray_Click);
            // 
            // btnSettings
            // 
            this.btnSettings.Location = new System.Drawing.Point(876, 510);
            this.btnSettings.Name = "btnSettings";
            this.btnSettings.Size = new System.Drawing.Size(94, 29);
            this.btnSettings.TabIndex = 4;
            this.btnSettings.Text = "Settings";
            this.btnSettings.UseVisualStyleBackColor = true;
            this.btnSettings.Click += new System.EventHandler(this.btnSettings_Click);
            // 
            // cmbAlgorithms
            // 
            this.cmbAlgorithms.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cmbAlgorithms.FormattingEnabled = true;
            this.cmbAlgorithms.Location = new System.Drawing.Point(400, 511);
            this.cmbAlgorithms.Name = "cmbAlgorithms";
            this.cmbAlgorithms.Size = new System.Drawing.Size(183, 28);
            this.cmbAlgorithms.TabIndex = 5;
            this.cmbAlgorithms.SelectedIndexChanged += new System.EventHandler(this.cmbAlgorithms_SelectedIndexChanged);
            // 
            // lblComparisons
            // 
            this.lblComparisons.AutoSize = true;
            this.lblComparisons.Font = new System.Drawing.Font("Segoe UI", 10.2F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.lblComparisons.Location = new System.Drawing.Point(620, 513);
            this.lblComparisons.Name = "lblComparisons";
            this.lblComparisons.Size = new System.Drawing.Size(130, 23);
            this.lblComparisons.TabIndex = 6;
            this.lblComparisons.Text = "Comparisons: 0";
            // 
            // timer1
            // 
            this.timer1.Tick += new System.EventHandler(this.timer1_Tick);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(323, 514);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(76, 20);
            this.label1.TabIndex = 7;
            this.label1.Text = "Algorithm:";
            // 
            // SortingVisualizerForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(982, 553);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.lblComparisons);
            this.Controls.Add(this.cmbAlgorithms);
            this.Controls.Add(this.btnSettings);
            this.Controls.Add(this.btnNewArray);
            this.Controls.Add(this.btnReset);
            this.Controls.Add(this.btnStart);
            this.Controls.Add(this.pnlVisualizer);
            this.Name = "SortingVisualizerForm";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterParent;
            this.Text = "Sorting Visualizer";
            this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.SortingVisualizerForm_FormClosing);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        private System.Windows.Forms.Panel pnlVisualizer;
        private System.Windows.Forms.Button btnStart;
        private System.Windows.Forms.Button btnReset;
        private System.Windows.Forms.Button btnNewArray;
        private System.Windows.Forms.Button btnSettings;
        private System.Windows.Forms.ComboBox cmbAlgorithms;
        private System.Windows.Forms.Label lblComparisons;
        private System.Windows.Forms.Timer timer1;
        private System.Windows.Forms.Label label1;
    }
}